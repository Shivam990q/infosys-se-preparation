#!/usr/bin/env python3
"""
Infosys Systems Engineer (SE) Master Question Locator & Reverse Provenance CLI
Allows instant lookup of any question by ID, keyword, source, or exact phrase.
"""
import sys
import sqlite3
import argparse
from pathlib import Path

# Force UTF-8 stdout
if sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

db_path = Path(__file__).parent / "infosys_se_master_index.db"

if not db_path.exists():
    print(f"Error: Master index database not found at {db_path}")
    sys.exit(1)

def search_questions(query=None, qid=None, source=None, section=None, limit=5):
    conn = sqlite3.connect(str(db_path))
    cursor = conn.cursor()
    
    if qid:
        cursor.execute("""
        SELECT id, canonical_id, section, subfolder, rel_path, line_start, line_end,
               source_origin, sub_domain, question_text, options_text, correct_answer,
               explanation_text, image_refs
        FROM questions
        WHERE canonical_id LIKE ? OR id = ?
        """, (f"%{qid}%", qid))
    elif query:
        # FTS5 search
        clean_query = query.replace('"', '""')
        cursor.execute(f"""
        SELECT q.id, q.canonical_id, q.section, q.subfolder, q.rel_path, q.line_start, q.line_end,
               q.source_origin, q.sub_domain, q.question_text, q.options_text, q.correct_answer,
               q.explanation_text, q.image_refs
        FROM questions_fts f
        JOIN questions q ON f.rowid = q.id
        WHERE questions_fts MATCH ?
        LIMIT ?
        """, (f'"{clean_query}"', limit))
    elif source:
        cursor.execute("""
        SELECT id, canonical_id, section, subfolder, rel_path, line_start, line_end,
               source_origin, sub_domain, question_text, options_text, correct_answer,
               explanation_text, image_refs
        FROM questions
        WHERE source_origin LIKE ?
        LIMIT ?
        """, (f"%{source}%", limit))
    elif section:
        cursor.execute("""
        SELECT id, canonical_id, section, subfolder, rel_path, line_start, line_end,
               source_origin, sub_domain, question_text, options_text, correct_answer,
               explanation_text, image_refs
        FROM questions
        WHERE section LIKE ?
        LIMIT ?
        """, (f"%{section}%", limit))
    else:
        print("Please provide a query, --id, --source, or --section.")
        return

    rows = cursor.fetchall()
    if not rows:
        print(f"No questions matched your search criteria.")
        return
        
    print(f"\n{'='*80}")
    print(f"  FOUND {len(rows)} MATCHING QUESTIONS IN INFOSYS SE MASTER INDEX")
    print(f"{'='*80}\n")
    
    for r in rows:
        (qid, cid, sec, subf, rel_path, lstart, lend, src, subd, qtext, opts, ans, expl, imgs) = r
        print(f"\033[1;36m[QUESTION ID]\033[0m:    {cid} (Database ID: {qid})")
        print(f"\033[1;33m[ORIGIN SOURCE]\033[0m:  {src}")
        print(f"\033[1;32m[LOCATION]\033[0m:       {rel_path} (Lines {lstart}-{lend})")
        print(f"\033[1;35m[TAXONOMY]\033[0m:       {sec} >> {subf} ({subd})")
        print(f"\n\033[1m[QUESTION]\033[0m:\n{qtext.strip()}")
        if opts:
            print(f"\n\033[1m[OPTIONS]\033[0m:\n{opts.strip()}")
        print(f"\n\033[1;32m[CORRECT ANSWER]\033[0m: {ans.strip()}")
        if expl and len(expl.strip()) > 5:
            expl_snip = expl.strip()[:600] + ("..." if len(expl.strip()) > 600 else "")
            print(f"\n\033[1m[STEP-BY-STEP DERIVATION]\033[0m:\n{expl_snip}")
        if imgs:
            print(f"\n\033[1;34m[FIGURE REFERENCE]\033[0m: {imgs}")
        print(f"\n{'-'*80}\n")

def main():
    parser = argparse.ArgumentParser(description="Infosys SE Master Question Provenance & Index Locator")
    parser.add_argument("query", nargs="?", help="Text or keyword to search across all questions")
    parser.add_argument("--id", help="Lookup by canonical Question ID (e.g. SEC01_MOD01_Q01)")
    parser.add_argument("--source", help="Filter by original source document (e.g. Topmate, CampusMonk, ITM)")
    parser.add_argument("--section", help="Filter by section (e.g. Reasoning, Mathematical, Verbal, Puzzle)")
    parser.add_argument("--limit", type=int, default=5, help="Maximum number of results to display (default 5)")
    args = parser.parse_args()

    search_questions(query=args.query, qid=args.id, source=args.source, section=args.section, limit=args.limit)

if __name__ == "__main__":
    main()
