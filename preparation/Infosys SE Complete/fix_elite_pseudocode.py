import os, sys

sys.stdout.reconfigure(encoding='utf-8')
p = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault\04_Pseudocode_and_Technical\07_Topmate_Technical_Pseudocodes_Master_Collection_Elite.md'

if os.path.exists(p):
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()
    broken_str = 'int main(){ printf( "%d" , return 0; Answer : 2 int fun(int n){ if (n 1 2 else 3 4 5 return 1; 6 return 1 + fun(n 7 -1); 8 9 10 11 12 13 14 15 16 17 18 19 fun (n)); 81) What will be the output of the following pseudocode?'
    clean_str = 'int fun(int n) {\n    if (n <= 1)\n        return 1;\n    else\n        return 1 + fun(n - 1);\n}\n\nint main() {\n    int n = 2;\n    printf("%d", fun(n));\n    return 0;\n}'
    if broken_str in txt:
        txt = txt.replace(broken_str, clean_str)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(txt)
        print("Fixed Elite file!")
    else:
        print("Broken string not found in Elite file.")

