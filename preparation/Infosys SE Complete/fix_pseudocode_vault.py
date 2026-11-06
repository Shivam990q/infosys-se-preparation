import os, sys

sys.stdout.reconfigure(encoding='utf-8')

p1 = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\04_Pseudocode_and_Technical\11_Master_Pseudocode_Unique\11_Master_Consolidated_Pseudocode_and_Technical_Unique_Vault.md'
p2 = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault\04_Pseudocode_and_Technical\11_Master_Pseudocode_Unique\11_Master_Consolidated_Pseudocode_and_Technical_Unique_Vault.md'

target1 = """```pseudo
int main(){ printf( "%d" , return 0; Answer : 2 int fun(int n){ if (n 1 2 else 3 4 5 return 1; 6 return 1 + fun(n 7 -1); 8 9 10 11 12 13 14 15 16 17 18 19 fun (n)); 81) What will be the output of the following pseudocode?
```"""

replacement1 = """```c
int fun(int n) {
    if (n <= 1)
        return 1;
    else
        return 1 + fun(n - 1);
}

int main() {
    int n = 2;
    printf("%d", fun(n));
    return 0;
}
```"""

target2 = """```pseudo
Print otherwise if(x MOD Print otherwise Print x MOD 9 end if B. 16 D. None Answer - Option C 1 Integer x 2 = 259 if(x EQUALS 3 Set x 0) 4 5 6 7 0) 8 9 10 11 12 13 14 15 EQUALS 113) What will be the output of the following pseudocode?
```"""

replacement2 = """```pseudocode
Integer x
Set x = 259
if (x EQUALS 0)
    Print 0
otherwise if (x MOD 9 EQUALS 0)
    Print 9
otherwise
    Print x MOD 9
end if
```"""

for path in [p1, p2]:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            txt = f.read()
        
        txt = txt.replace(target1, replacement1)
        txt = txt.replace(target2, replacement2)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(txt)
        print(f"Fixed {path}")

