import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, Video, FileText, CheckCircle2, ChevronRight, 
  ArrowLeft, Search, Play, ExternalLink, Download,
  Layers, Clock, File, Award, X, Sparkles, Filter
} from 'lucide-react';

export default function CourseExplorer({ onLaunchTest }) {
  const [courseData, setCourseData] = useState(null);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // all, videos, docs, tests
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/course_explorer.json')
      .then(res => res.json())
      .then(data => {
        setCourseData(data);
        if (data && data.tree) {
          setCurrentFolder(data.tree);
          setBreadcrumb([{ id: 'root', name: 'Content', node: data.tree }]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load course explorer data:', err);
        setLoading(false);
      });
  }, []);

  const navigateToFolder = (subfolder) => {
    setCurrentFolder(subfolder);
    setBreadcrumb(prev => [...prev, { id: subfolder.id, name: subfolder.name, node: subfolder }]);
    setSearchQuery('');
  };

  const navigateToBreadcrumb = (index) => {
    const target = breadcrumb[index];
    setBreadcrumb(prev => prev.slice(0, index + 1));
    setCurrentFolder(target.node);
    setSearchQuery('');
  };

  const navigateUp = () => {
    if (breadcrumb.length > 1) {
      navigateToBreadcrumb(breadcrumb.length - 2);
    }
  };

  // Global search across all items
  const allItems = useMemo(() => {
    if (!courseData || !courseData.tree) return [];
    const list = [];
    function collect(node, pathStr) {
      const currentPath = pathStr ? `${pathStr} > ${node.name}` : node.name;
      for (const v of node.videos) list.push({ ...v, folderName: node.name, fullPath: currentPath, itemType: 'video' });
      for (const d of node.documents) list.push({ ...d, folderName: node.name, fullPath: currentPath, itemType: 'pdf' });
      for (const t of node.tests) list.push({ ...t, folderName: node.name, fullPath: currentPath, itemType: 'test' });
      for (const s of node.subfolders) collect(s, currentPath);
    }
    collect(courseData.tree, '');
    return list;
  }, [courseData]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    return allItems.filter(item => 
      item.name.toLowerCase().includes(q) || 
      (item.description && item.description.toLowerCase().includes(q)) ||
      item.folderName.toLowerCase().includes(q)
    );
  }, [searchQuery, allItems]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-[var(--theme-text-muted)]">
        <div className="w-10 h-10 border-4 border-[var(--theme-bg-accent-solid)] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-bold tracking-wider text-xs uppercase">Loading CampusMonk Course Library...</p>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="p-8 text-center text-[var(--theme-text-danger)] font-bold">
        Failed to load course library data.
      </div>
    );
  }

  const isRoot = breadcrumb.length <= 1;

  // Filter items in current folder
  const currentVideos = currentFolder ? currentFolder.videos : [];
  const currentDocs = currentFolder ? currentFolder.documents : [];
  const currentTests = currentFolder ? currentFolder.tests : [];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      {/* Course Banner Header */}
      <div className="p-6 md:p-8 rounded-2xl glass-card border border-[var(--theme-border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--theme-bg-accent-subtle)] to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[var(--theme-bg-accent-subtle)] text-[var(--theme-text-accent)] border border-[var(--theme-border-accent)]">
              <Sparkles size={12} /> CampusMonk Full Course Vault (ID: 844567)
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[var(--theme-text-heading)]">
              {courseData.courseTitle}
            </h1>
            <p className="text-xs md:text-sm text-[var(--theme-text-muted)] font-medium">
              Complete offline vault including 400+ lecture videos, 100+ PDF workbooks, and 50+ official mock exams.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--theme-bg-elevated)] p-2 rounded-xl border border-[var(--theme-border)] shrink-0">
            <div className="text-center px-3 py-1 border-r border-[var(--theme-border)]">
              <div className="text-base font-black text-[var(--theme-text-heading)]">{courseData.totalStats.videos}</div>
              <div className="text-[9px] uppercase font-bold text-[var(--theme-text-muted)]">Videos</div>
            </div>
            <div className="text-center px-3 py-1 border-r border-[var(--theme-border)]">
              <div className="text-base font-black text-[var(--theme-text-heading)]">{courseData.totalStats.files}</div>
              <div className="text-[9px] uppercase font-bold text-[var(--theme-text-muted)]">Files</div>
            </div>
            <div className="text-center px-3 py-1">
              <div className="text-base font-black text-[var(--theme-text-heading)]">{courseData.totalStats.tests}</div>
              <div className="text-[9px] uppercase font-bold text-[var(--theme-text-muted)]">Tests</div>
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="mt-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--theme-text-muted)]" size={18} />
          <input
            type="text"
            placeholder="Search across all 400+ videos, PDFs, and tests in this course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)] focus:ring-4 focus:ring-[var(--theme-shadow-accent)] outline-none text-sm font-medium text-[var(--theme-text-primary)] placeholder:text-[var(--theme-text-muted)]"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Search Results Mode */}
      {searchResults ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[var(--theme-text-heading)]">
              Search Results ({searchResults.length} items found)
            </h2>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-[var(--theme-text-accent)] hover:underline"
            >
              Back to Folder View
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-12 text-center text-[var(--theme-text-muted)] font-medium">
              No matching videos, PDFs, or tests found for "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card border border-[var(--theme-border)] hover:border-[var(--theme-border-accent)] transition-all flex items-start gap-3">
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    item.itemType === 'video' ? 'bg-amber-500/10 text-amber-400' :
                    item.itemType === 'pdf' ? 'bg-rose-500/10 text-rose-400' : 'bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {item.itemType === 'video' && <Video size={20} />}
                    {item.itemType === 'pdf' && <FileText size={20} />}
                    {item.itemType === 'test' && <Award size={20} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--theme-text-muted)]">
                        {item.itemType}
                      </span>
                      {item.duration && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)]">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[var(--theme-text-heading)] mt-0.5 truncate" title={item.name}>
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-[var(--theme-text-muted)] truncate mt-1">
                      📁 {item.fullPath}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      {item.itemType === 'pdf' && item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs py-1 px-3 flex items-center gap-1.5"
                        >
                          <ExternalLink size={12} /> Open PDF
                        </a>
                      )}
                      {item.itemType === 'video' && item.isLocal && (
                        <button
                          onClick={() => setSelectedVideo(item)}
                          className="btn-primary text-xs py-1 px-3 flex items-center gap-1.5"
                        >
                          <Play size={12} /> Play Video
                        </button>
                      )}
                      {item.itemType === 'test' && (
                        <button
                          onClick={() => onLaunchTest && onLaunchTest(item)}
                          className="btn-premium text-xs py-1 px-3 flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={12} /> Take Test
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Folder Navigation Mode */
        <div className="space-y-6">
          {/* Breadcrumb Bar */}
          <div className="flex items-center gap-2 text-sm font-bold flex-wrap p-3 rounded-xl bg-[var(--theme-bg-elevated)] border border-[var(--theme-border)]">
            {!isRoot && (
              <button
                onClick={navigateUp}
                className="p-1.5 rounded-lg hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors mr-1"
                title="Go Up"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={crumb.id || idx}>
                {idx > 0 && <ChevronRight size={14} className="text-[var(--theme-text-muted)] shrink-0" />}
                <button
                  onClick={() => navigateToBreadcrumb(idx)}
                  className={`hover:underline transition-colors ${
                    idx === breadcrumb.length - 1 
                      ? 'text-[var(--theme-text-accent)] font-extrabold' 
                      : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)]'
                  }`}
                >
                  {crumb.name}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Subfolders Grid */}
          {currentFolder && currentFolder.subfolders.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-[var(--theme-text-muted)]">
                Folders ({currentFolder.subfolders.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3.5">
                {currentFolder.subfolders.map((sub, i) => (
                  <motion.div
                    key={sub.id || i}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => navigateToFolder(sub)}
                    className="p-4 rounded-xl glass-card border border-[var(--theme-border)] hover:border-[var(--theme-border-accent)] cursor-pointer transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
                        <Folder size={22} className="fill-current/20" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm text-[var(--theme-text-heading)] group-hover:text-[var(--theme-text-accent)] transition-colors truncate">
                          {sub.name}
                        </h3>
                        <p className="text-[11px] text-[var(--theme-text-muted)] font-medium mt-0.5">
                          {[
                            sub.stats.videos > 0 ? `${sub.stats.videos} video(s)` : null,
                            sub.stats.files > 0 ? `${sub.stats.files} file(s)` : null,
                            sub.stats.tests > 0 ? `${sub.stats.tests} test(s)` : null,
                          ].filter(Boolean).join(', ') || 'Folder'}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text-accent)] group-hover:translate-x-1 transition-all shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {currentVideos.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-amber-400 flex items-center gap-1.5">
                <Video size={14} /> Lecture Videos ({currentVideos.length})
              </h2>
              <div className="space-y-2.5">
                {currentVideos.map((v, i) => (
                  <div 
                    key={v.id || i}
                    className="p-4 rounded-xl glass-card border border-[var(--theme-border)] hover:border-amber-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Play size={18} className="fill-amber-400 ml-0.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-sm text-[var(--theme-text-heading)]">
                            {v.name}
                          </h3>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                            {v.duration}
                          </span>
                        </div>
                        {v.description && (
                          <p className="text-xs text-[var(--theme-text-muted)] mt-1 line-clamp-2">
                            {v.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      {v.isLocal && v.url ? (
                        <button
                          onClick={() => setSelectedVideo(v)}
                          className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
                        >
                          <Play size={14} /> Watch Full Video
                        </button>
                      ) : (
                        <span className="text-[11px] font-bold text-[var(--theme-text-muted)] px-3 py-1 rounded bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
                          DRM Lecture Track
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents / PDFs Section */}
          {currentDocs.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-rose-400 flex items-center gap-1.5">
                <FileText size={14} /> Reference PDF Documents ({currentDocs.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentDocs.map((doc, i) => (
                  <div 
                    key={i}
                    className="p-3.5 rounded-xl glass-card border border-[var(--theme-border)] hover:border-rose-500/40 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs text-[var(--theme-text-heading)] truncate" title={doc.name}>
                          {doc.name}
                        </h4>
                        {doc.size > 0 && (
                          <p className="text-[10px] text-[var(--theme-text-muted)] font-mono">
                            {(doc.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        )}
                      </div>
                    </div>

                    {doc.url ? (
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-1 px-3 flex items-center gap-1 shrink-0"
                      >
                        <ExternalLink size={12} /> Open
                      </a>
                    ) : (
                      <span className="text-[10px] text-[var(--theme-text-muted)] font-bold">Catalog Only</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tests Section */}
          {currentTests.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-indigo-400 flex items-center gap-1.5">
                <Award size={14} /> Sectional Mocks & Topic Tests ({currentTests.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentTests.map((t, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-xl glass-card border border-[var(--theme-border)] hover:border-indigo-500/40 transition-all flex flex-col justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                        <Award size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-sm text-[var(--theme-text-heading)]">
                          {t.name}
                        </h4>
                        <p className="text-xs text-[var(--theme-text-muted)] mt-1">
                          {t.questionCount > 0 ? `${t.questionCount} Questions` : 'Official Mock Test'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-[var(--theme-border)]">
                      {t.qpHtml && (
                        <a
                          href={t.qpHtml}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs py-1 px-3 flex items-center gap-1"
                        >
                          <ExternalLink size={12} /> Question Paper
                        </a>
                      )}
                      {t.solHtml && (
                        <a
                          href={t.solHtml}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs py-1 px-3 flex items-center gap-1 text-emerald-400"
                        >
                          <CheckCircle2 size={12} /> Solutions
                        </a>
                      )}
                      <button
                        onClick={() => onLaunchTest && onLaunchTest(t)}
                        className="btn-premium text-xs py-1 px-3 flex items-center gap-1 ml-auto"
                      >
                        Start Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty Folder Notice */}
          {currentFolder && currentFolder.subfolders.length === 0 && currentVideos.length === 0 && currentDocs.length === 0 && currentTests.length === 0 && (
            <div className="p-12 text-center text-[var(--theme-text-muted)] font-medium">
              This folder is currently empty.
            </div>
          )}
        </div>
      )}

      {/* Local Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-4xl w-full p-6 border border-[var(--theme-border)] relative space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg text-[var(--theme-text-heading)]">
                  {selectedVideo.name}
                </h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-lg hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-xs text-[var(--theme-text-muted)] flex justify-between">
                <span>Local High-Definition Offline Walkthrough</span>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="btn-secondary py-1 px-4 text-xs"
                >
                  Close Player
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
