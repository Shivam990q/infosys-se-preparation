# Section - Pseudocode and Technical
## Topic - Coding Assessment Challenges

> **Target Assessment:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)
> **Module Focus:** `Production-grade algorithmic coding challenges for Infosys SE / Specialist Programmer (SP) hands-on rounds: Candy machines, Caesar ciphers, fuzzy logic, matrix traversals, and dynamic programming.`
> **Total Extracted Questions in this Topic:** 78
> **Format Standard:** 100% Complete question stems, all options, embedded figures, answers, and formal mathematical proofs.

---

### Question 1: Coding Challenge 1
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 1 
At the annual meeting of Board of Directors of Acme Inc, everyone starts shaking hands 
with everyone else in the room. Given the fact that any two persons shake hand exactly 
once, can you tell the total count of handshakes? 
Input Format 
The first line contains the number of test cases T, T lines follow. 
Each line then contains an integer N, the total number of Board of Directors of Acme. 
Output Format 
Print the number of handshakes for each test-case in a new line. 
Constraints 
1 <= T <= 1000 
0 < N < 106 
Sample Input 
2 
1 
2 
Sample Output 
0 
1 
Explanation 
Previous Year 30 MINUTES CODING QUESTIONS  for TCS NQT  

134 
 
Case 1 : The lonely board member shakes no hands, hence 0. 
Case 2 : There are 2 board members, 1 handshake takes place. 
SOLUTION 
#include "stdio.h" 
int main() 
{ 
    int n; //testcases 
    scanf("%d",&n); 
    int arr[n]; 
    for(int i=0; i<n; i++)    { 
        scanf("%d",&arr[i]); 
        printf("%d\n", arr[i]*(arr[i]-1)/2); 
    } 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p134_img2_1280x720.jpeg](../images/tcs_p134_img2_1280x720.jpeg)
![tcs_p135_img2_186x81.png](../images/tcs_p135_img2_186x81.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 2: Coding Challenge 2
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 2 
Jim is off to a party and is searching for a matching pair of socks. His drawer is filled with 
socks, each pair of a different color. In its worst case scenario, how many socks (x) should 
Jim remove from his drawer until he finds a matching pair? 
Input Format 
The first line contains the number of test cases T. 
Next T lines contains an integer N which indicates the total pairs of socks present in the 
drawer. 
Output Format 
Print the number of Draws (x) Jim makes in the worst case scenario. 
Constraints 
 
Sample Input 
2 
1 
2 
Sample Output 

135 
 
2 
3 
Explanation 
Case 1 : A pair of socks are present, hence exactly 2 draws for the socks to match. 
Case 2 : 2 pair of socks are present in the drawer. The first and the second draw might result 
in 2 socks of different color. The 3rd sock picked will definitely match one of previously 
picked socks. Hence, 3. 
SOLUTION 
#include "stdio.h" 
int main() 
{ 
    int n,a; //testcases 
    scanf("%d",&n); 
    for(int i=0; i<n; i++) { 
        scanf("%d",&a); 
        printf("%d\n",a+1); 
    } 
    return 0; 
}

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 3: Coding Challenge 3
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 3 

136 
 
 
 
SOLUTION 
#include "stdio.h" 
int main() 
{ 
    int n,d; 
    scanf("%d %d",&n,&d); 

137 
 
    int arr[n]; 
    for(int i=0; i<n; i++) 
        scanf("%d",&arr[(n-d+i)%n]); 
    for(int i=0; i<n; i++) 
        printf("%d ",arr[i]); 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p137_img2_1268x769.png](../images/tcs_p137_img2_1268x769.png)
![tcs_p137_img3_1139x680.png](../images/tcs_p137_img3_1139x680.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 4: Coding Challenge 4
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 4 
 
 

138 
 
       
 
 
SOLUTION 
#include "stdio.h" 
int main() 
{ 
    int n; 
    scanf("%d",&n); 
    int arr[n], freq[101]={ }; 
    for(int i=0; i<n; i++)     
{ 
        scanf("%d",&arr[i]); 
        freq[arr[i]]++; 
    } 
    int pairCount=0; 
    for(int i=0; i<=100; i++)      
  { 
        pairCount = pairCount + freq[i]/2; 

139 
 
    } 
    printf("%d",pairCount); 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p138_img2_1267x767.png](../images/tcs_p138_img2_1267x767.png)
![tcs_p139_img2_940x920.png](../images/tcs_p139_img2_940x920.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 5: Coding Challenge 5
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 5 
 
 
SOLUTION 

140 
 
#include "stdio.h" 
int main() 
{ 
    int n,max=0,count=0; //No of candles 
    scanf("%d",&n); 
    int arr[n]; 
    for(int i=0; i<n; i++) 
    { 
        scanf("%d",&arr[i]);  
    } 
    for(int i=0; i<n; i++) 
    { 
        if(max < arr[i]) 
        { 
            max=arr[i]; 
            count=1; 
        } 
        else if (max == arr[i])  
            count++; 
    } 
    printf("%d",count); 
    return 0; 
} 
 
 
 
 
 
 
 
 
 
 

141

#### Reference Visuals / Figures:
![tcs_p140_img2_1269x779.jpeg](../images/tcs_p140_img2_1269x779.jpeg)
![tcs_p140_img3_1214x652.png](../images/tcs_p140_img3_1214x652.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 6: Coding Challenge 6
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 6 
 
               
 

142 
 
 
SOLUTION 
#include "stdio.h" 
#include "math.h 
int revNum(int n) 
{ 
    int rev=0; 
    while(n!=0) 
    { 
        rev = rev*10 + (n%10); 
        n = n /10; 
    } 
    return rev; 
} 
int main() 
{ 
    int i,j,k,bCount=0; 
    scanf("%d%d%d",&i, &j, &k); 
    for(int temp=i; temp<=j; temp++) 
    { 
        if(abs(temp-revNum(temp))%k==0) 
            bCount++; 
    } 
    printf("%d",bCount); 
    return 0; 
} 
 
 
 
 
 
 
 

143

#### Reference Visuals / Figures:
![tcs_p142_img2_1287x904.png](../images/tcs_p142_img2_1287x904.png)
![tcs_p142_img3_1248x846.png](../images/tcs_p142_img3_1248x846.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 7: Coding Challenge 7
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 7 
 
 

144 
 
 
SOLUTION 
#include "stdio.h" 
 
int main() 
{ 
    int n,k, max=0; 
    //Take n as input 
    scanf("%d",&n); 
    int arr[100] = {}; 
    for(int i=0; i<n; i++) 
    { 
        scanf("%d",&k); 
        arr[k]++; 
    } 
 
    //Find the maximum count/ length of the array 
    for(int i=0; i<n-1; i++) 
    { 
        if(arr[i] + arr[i+1] > max) 
            max = arr[i] + arr[i+1]; 

145 
 
    } 
    printf("%d",max); 
 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p144_img2_1275x768.png](../images/tcs_p144_img2_1275x768.png)
![tcs_p144_img3_1290x530.png](../images/tcs_p144_img3_1290x530.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 8: Coding Challenge 8
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 8 
 

146 
 
 
SOLUTION 
#include "stdio.h" 
 
int main() 
{ 
    //Input n and k 
    int n, k, count = 0; 
    scanf("%d %d",&n, &k); 
 
    //Take the array as input and calculate the count 
    int arr[n]; 
    for(int i=0; i<n; i++) 
    { 
        scanf("%d",&arr[i]); 
        for(int j=0; j < i; j++) 
            count += ((arr[i]+arr[j])%k == 0); 
    } 

147 
 
     
    printf("%d",count); 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p145_img2_1297x699.png](../images/tcs_p145_img2_1297x699.png)
![tcs_p146_img2_1285x786.png](../images/tcs_p146_img2_1285x786.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 9: Coding Challenge 9
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 9 
 
 

148 
 
 
 
SOLUTION 
#include "stdio.h" 
 
int main() 
{ 
    int x1,v1,x2,v2; 
 
    //Take the input 
    scanf("%d %d %d %d", &x1, &v1, &x2, &v2); 
 
    //Calculate 
    if(v1 > v2) 
    { 

149 
 
        if((x2 - x1) % (v1 - v2) == 0) 
            printf("YES"); 
        else 
            printf("NO"); 
    } 
    else 
        printf("NO"); 
 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p147_img2_1191x822.png](../images/tcs_p147_img2_1191x822.png)
![tcs_p148_img2_1269x762.png](../images/tcs_p148_img2_1269x762.png)
![tcs_p148_img3_1186x697.png](../images/tcs_p148_img3_1186x697.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 10: Coding Challenge 10
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 10 
 

150 
 
 
SOLUTION 
#include<stdio.h> 
 
int main() 
{ 
    unsigned long long int arr[5], min, max, sum = 0; 
 
    //Take the array as input 
    for(int i=0; i<5; i++) 
        scanf("%lld",&arr[i]); 
 
    //Find the sum, min and max 
    min = max = arr[0]; 
    sum += arr[0]; 
 
    for(int i=1; i<5; i++) 
    { 

151 
 
        if(min > arr[i]) 
            min = arr[i]; 
         
        if(max < arr[i]) 
            max = arr[i]; 
 
        sum = sum + arr[i]; 
    } 
 
    //Print min sum and max sum 
    printf("%lld %lld",(sum-max), (sum-min)); 
 
    return 0; 
} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

152

#### Reference Visuals / Figures:
![tcs_p149_img2_1295x611.jpeg](../images/tcs_p149_img2_1295x611.jpeg)
![tcs_p149_img3_1286x557.png](../images/tcs_p149_img3_1286x557.png)
![tcs_p150_img2_1273x773.png](../images/tcs_p150_img2_1273x773.png)
![tcs_p151_img2_1241x849.png](../images/tcs_p151_img2_1241x849.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 11: Coding Challenge 11
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 11 
 

153 
 
 
SOLUTION 
#include "stdio.h" 
#include "string.h" 
 
int main() 
{ 
    char str[1001]; 
 
    //Read the string 
    scanf("%[^\n]%*c",str); 
 
    //Logic to print the tokens 
    for(int i=0; i<strlen(str); i++) 
    { 
        if(str[i] == ' ') 
            printf("\n"); 
        else 

154 
 
            printf("%c",str[i]); 
    } 
 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p153_img2_1184x898.png](../images/tcs_p153_img2_1184x898.png)
![tcs_p154_img2_1163x853.png](../images/tcs_p154_img2_1163x853.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 12: Coding Challenge 12
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 12 
 
 

155 
 
 
 
SOLUTION 
#include "stdio.h" 
 
int main() 
{ 
    int budget, n, m; 
 
    //Input the budget, no of keyboards and no of drives 
    scanf("%d %d %d",&budget, &n, &m); 
 
    int keyboards[n],drives[m], result = -1; 
 
    //Take the keyboard an drive prices as input 
    for(int i=0; i<n; i++) 

156 
 
        scanf("%d",&keyboards[i]); 
 
    for(int i=0; i<m; i++) 
        scanf("%d",&drives[i]); 
 
    //Find the money that Monica will spend 
    for(int i=0; i<n; i++) 
    { 
        for(int j=0; j<m; j++) 
        { 
            if(keyboards[i]+ drives[j] <= budget) 
                result = result > keyboards[i] + drives[j] ? result : (keyboards[i] + drives[j]); 
        } 
    } 
 
    //Print the result 
    printf("%d",result); 
 
    return 0; 
} 
 
 
 
 
 
 
 
 
 
 
 
 
 

157

#### Reference Visuals / Figures:
![tcs_p155_img2_1286x682.png](../images/tcs_p155_img2_1286x682.png)
![tcs_p155_img3_1226x598.png](../images/tcs_p155_img3_1226x598.png)
![tcs_p156_img2_900x513.png](../images/tcs_p156_img2_900x513.png)
![tcs_p156_img3_1086x548.png](../images/tcs_p156_img3_1086x548.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 13: Coding Challenge 13
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 13 
 
 
SOLUTION 
#include<stdio.h> 
 
int main() 
{ 
    int n; 
    scanf("%d",&n); 
 
    //Declare the array and sum variable 
    unsigned long long int ar[n], sum=0; 

158 
 
 
    //Input the array 
    for(int i=0; i<n; i++) 
    { 
        scanf("%lld",&ar[i]); 
        sum += ar[i]; 
    }    
 
    printf("%lld",sum); 
 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p158_img2_1217x612.png](../images/tcs_p158_img2_1217x612.png)
![tcs_p158_img3_1270x551.png](../images/tcs_p158_img3_1270x551.png)
![tcs_p159_img2_1113x451.png](../images/tcs_p159_img2_1113x451.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 14: Coding Challenge 14
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 14 
 

159 
 
 
 
SOLUTION 
#include <stdio.h> 
#include <string.h> 
 
int main() 
 { 
    char str[1001]; //Declare the string 
 

160 
 
    //Input the string 
    scanf("%s",str); 
 
    //Counting array 
    int count[10] = { }; 
 
    //Count the frequency of the digits 
    for(int i=0; i < strlen(str); i++) 
    { 
        if(str[i]>='0' && str[i]<='9') 
        { 
            count[str[i]-'0']++; 
        } 
    } 
 
    //Print the frequencies 
    for(int i=0; i<10; i++) 
        printf("%d ",count[i]); 
 
    return 0; 
}

#### Reference Visuals / Figures:
![tcs_p160_img2_1162x564.png](../images/tcs_p160_img2_1162x564.png)
![tcs_p160_img3_1093x674.png](../images/tcs_p160_img3_1093x674.png)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 15: Coding Challenge 15
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 15 
Write a program to reverse a string given as input 
SOLUTION 
Two methods can be used. 
Method 1: 
#include <stdio.h> 
#include <string.h> 
int main() 
{ 
   char s[100]; 

161 
 
   printf("Enter a string to reverse\n"); 
  
 gets(s); 
   strrev(s); 
   printf("Reverse of the string: %s\n", s); 
   return 0; 
} 
Method 2: 
#include <stdio.h> 
int main() 
{ 
   char s[1000], r[1000]; 
   int begin, end, count = 0; 
   printf("Input a string\n"); 
   gets(s); 
   // Calculating string length 
   while (s[count] != '\0') 
      count++; 
   end = count - 1; 
   for (begin = 0; begin < count; begin++) { 
      r[begin] = s[end]; 
      end--; 
   } 
   r[begin] = '\0'; 
   printf("%s\n", r); 
   return 0; 
}

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 16: Coding Challenge 16
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 16 

162 
 
Write a program to reverse a given integer number

#### Formally Verified Solution & Derivation:
SOLUTION: 
This program takes an integer input from the user. Then the while loop is used until n != 0 is 
false (0). 
In each iteration of the loop, the remainder when n is divided by 10 is calculated and the 
value of n is reduced by 10 times. 
Inside the loop, the reversed number is computed using: 
rev = rev*10 + remainder; 
 
#include <stdio.h> 
int main() { 
    int n, rev = 0, remainder; 
    printf("Enter an integer: "); 
    scanf("%d", &n); 
    while (n != 0) { 
        remainder = n % 10; 
        rev = rev * 10 + remainder; 
        n /= 10; 
    } 
    printf("Reversed number = %d", rev); 
    return 0; 
}

---

### Question 17: Coding Challenge 17
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 17 
 
Write a program to check if the given number is a palindrome or not. A Palindrome    
         number is something that remains the same when read backwards. Ex. 2002, 19191 etc.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h> 
int main() 
{ 

163 
 
  int Number, Temp, Reminder, Reverse = 0; 
  printf("\nPlease Enter any number to Check for Palindrome\n"); 
  scanf("%d", &Number); 
  for(Temp = Number; Temp > 0; Temp =  Temp /10 ) 
  { 
     Reminder = Temp %10; 
     Reverse = Reverse *10+ Reminder; 
  } 
  printf("Reverse of entered number is = %d\n", Reverse); 
  if ( Number == Reverse ) 
     printf("\n%d is Palindrome Number.\n", Number); 
  else 
     printf("%d is not the Palindrome Number.\n", Number); 
  return 0; 
}

---

### Question 18: Coding Challenge 18
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 18 
Write a program to find the prime numbers within a given range.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <stdio.h> 
int main() 
{ 
   int num1, num2, flag_var, i, j; 
   /* Ask user to input the from/to range 
    * like 1 to 100, 10 to 1000 etc. 
    */ 
   printf("Enter two range(input integer numbers only):"); 
   //Store the range in variables using scanf 

164 
 
   scanf("%d %d", &num1, &num2); 
  
   //Display prime numbers for input range 
   printf("Prime numbers from %d and %d are:\n", num1, num2); 
   for(i=num1+1; i<num2; ++i) 
   { 
      flag_var=0; 
      for(j=2; j<=i/2; ++j) 
      { 
         if(i%j==0) 
         { 
            flag_var=1; 
            break; 
         } 
      } 
      if(flag_var==0) 
         printf("%d\n",i); 
  } 
  return 0; 
}

---

### Question 19: Coding Challenge 19
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 19 
Write a program to check whether a given year is leap year or not.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <stdio.h> 
int main() 
{ 
int year; 
printf("Enter a year to check if it is a leap yearn"); 

165 
 
scanf("%d", &year); 
if(year%400 == 0) 
printf("%d is a leap year.n", year); 
else if(year%100 == 0) 
printf("%d isn't a leap year.n", year); 
else if (year%4 == 0) 
printf("%d is a leap year.n", year); 
else 
printf("%d isn't a leap year.n", year); 
return 0; 
}

---

### Question 20: Coding Challenge 20
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 20 
Write a program to find the greatest number among 10 given numbers. 
#include <stdio.h> 
  int main() { 
    int a[10]; 
    int i; 
    int greatest; 
    printf("Enter ten values:"); 
    //Store 10 numbers in an array 
    for (i = 0; i < 10; i++)  
{ 
    scanf("%d", &a[i]); 
} 
    greatest = a[0]; 
    for (i = 0; i < 10; i++)  
    { 
if (a[i] > greatest) 
{ 
greatest = a[i]; 
    } 
    } 
    printf("Greatest of ten numbers is %d", greatest); 
    return 0; 
  } 

166

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 21: Coding Challenge 21
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 21 
Write a program to generate Fibonacci series upto a given limit.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h> 
int main() 
{ 
   int n, first = 0, second = 1, next, c; 
   printf("Enter the number of terms\n"); 
   scanf("%d",&n); 
   printf("First %d terms of Fibonacci series are :-\n",n); 
   for ( c = 0 ; c < n ; c++ ) 
   { 
      if ( c <= 1 ) 
         next = c; 
      else 
      { 
         next = first + second; 
         first = second; 
         second = next; 
      } 
      printf("%d\n",next); 
   } 
   return 0; 
}

---

### Question 22: Coding Challenge 22
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 22 
Write a program to find the HCF of two given numbers.

#### Formally Verified Solution & Derivation:
SOLUTION: 
Step by step descriptive logic to find HCF. 

167 
 
1. Input two numbers from user. Store them in some variable 
say num1 and num2. 
2. Declare and initialize a variable to hold hcf i.e. hcf = 1. 
3. Find minimum between the given two numbers. Store the result in some variable 
say min = (num1<num2) ? num1 : num2;. 
4. Run a loop from 1 to min, increment loop by 1 in each iteration. The loop structure 
should look like for(i=1; i<=min; i++). 
5. Inside the loop check if i is a factor of two numbers i.e. if i exactly divides the given two 
numbers num1 and num2 then set i as HCF i.e. hcf = i. 
 
#include <stdio.h> 
int main() 
{ 
    int i, num1, num2, min, hcf=1; 
 
    /* Input two numbers from user */ 
    printf("Enter any two numbers to find HCF: "); 
    scanf("%d%d", &num1, &num2); 
 
    /* Find minimum between two numbers */ 
    min = (num1<num2) ? num1 : num2; 
 
    for(i=1; i<=min; i++) 
    { 
        /* If i is factor of both number */ 
        if(num1%i==0 && num2%i==0) 
        { 
            hcf = i; 
        } 
    } 

168 
 
    printf("HCF of %d and %d = %d\n", num1, num2, hcf); 
    return 0; 
}

---

### Question 23: Coding Challenge 23
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 23 
Write a program to find the factorial of a given number.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <stdio.h> 
  
int main() 
{ 
    int num,i; 
    long int fact; 
   
    printf("Enter an integer number: "); 
    scanf("%d",&num); 
   
    /*product of numbers from num to 1*/ 
    fact=1; 
    for(i=num; i>=1; i--) 
        fact=fact*i; 
          
    printf("\nFactorial of %d is = %ld",num,fact); 
       
    return 0; 
} 
 
Using Recursion, we would do it as: 
 
#include<stido.h> 
//function for factorial 
long int factorial(int n) 

169 
 
{    
    if(n==1)    return 1; 
    return n*factorial(n-1); 
} 
int main() 
{ 
    int num; 
  
    printf("Enter an integer number :"); 
    scanf("%d",&num); 
  
    printf("\nFactorial of %d is = %ld",num,factorial(num)); 
      
    return 0; 
}

---

### Question 24: Coding Challenge 24
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 24 
Write a program to check if the given number is odd or even.

#### Formally Verified Solution & Derivation:
SOLUTION: 
 
#include<stdio.h> 
int main() 
{ 
  int number; 
 
  printf(" Enter an int value to check Even or Odd \n"); 
  scanf("%d", &number); 
   
  if ( number%2 == 0 ) //Check whether remainder is 0 or not 
     printf("Given number %d is EVEN NUMBER \n", number); 
 
  else 
    printf("Given number %d is ODD NUMBER \n", number); 

170 
 
 
  return 0; 
}

---

### Question 25: Coding Challenge 25
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 25 
Write a program to find the square root of a number in C.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h> 
#include<math.h> 
int main() 
{ 
   
double number, result; 
 
printf(" \n Please Enter any Number to find Square root : "); 
   
scanf("%lf", &number); 
   
result = sqrt(number); 
   
printf("\n Square Root a given number %.2lf  =  %.2lf", number, result); 
   
return 0; 
}

---

### Question 26: Coding Challenge 26
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 26 
Write a program to convert a number from Binary to Decimal in C.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h> 
#include<math.h> 
int main() 
{ 
 
long int i,n,x=0,a; 
 
printf("Enter any binary number: "); 
 
scanf("%ld",&n); 
 
printf("\nThe decimal conversion of %ld is ",n); 
 
 
 
for(i=0;n!=0;++i) 
 
{ 

171 
 
 
 
a=n%10; 
 
 
x=(a)*(pow(2,i))+x; 
 
 
n=n/10; 
 
} 
 
printf("%ld",x); 
 
return 0; 
 
}

---

### Question 27: Coding Challenge 27
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 27 
Write a program to find the sum of the digits of a given number.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <stdio.h> 
void main() 
{ 
    long num, temp, digit, sum = 0; 
  
    printf("Enter the number \n"); 
    scanf("%ld", &num); 
    temp = num; 
    while (num > 0) 
    { 
        digit = num % 10; 
        sum  = sum + digit; 
        num /= 10; 
    } 
    printf("Given number = %ld\n", temp); 
    printf("Sum of the digits %ld = %ld\n", temp, sum); 
}

---

### Question 28: Coding Challenge 28
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 28 
Write a program to find the average of two given numbers.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h> 

172 
 
void main() 
{ 
 
int a, b, avg; 
 
printf(“Enter two numbers: ”); 
 
scanf(“%d %d”,&a, &b); 
 
avg = (a+b)/2; 
 
printf(“The average is = %d\n”,avg); 
}

---

### Question 29: Coding Challenge 29
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 29 
Write a program to concatenate two strings in C.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <string.h> 
int main() 
{ 
    char s1[1000],s2[1000];   
    int i,j; 
  
    printf("Enter  string1: "); 
    gets(s1); 
    printf("Enter  string2: "); 
    gets(s2); 
    j=strlen(s1); 
     
    for(i=0;s2[i]!='\0';i++)   
    { 
     
s1[i+j]=s2[i]; 
 
} 
 
s1[i+j]='\0'; 
  
    printf("combined two strings ='%s'\n",s1); 
     
    return 0; 

173 
 
}

---

### Question 30: Coding Challenge 30
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 30 
Write a program to find the LCM of two given numbers.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <stdio.h> 
int main() 
{ 
   int num1, num2, maxValue; 
 
   printf("Enter two numbers: "); 
   scanf("%d %d", &num1, &num2); 
   //largest integer among num1 and num2 is stored in maxValue 
   maxValue = (num1 > num2) ? num1 : num2; 
 
   while(1)  //always true 
   { 
      if ((maxValue % num1 == 0) && (maxValue % num2 == 0)) 
      { 
         printf("LCM: %d", maxValue); 
         break; 
      } 
      ++maxValue; 
   } 
   return 0; 
}

---

### Question 31: Coding Challenge 31
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 31 
Write a program to find the area of triangle given base and height.

#### Formally Verified Solution & Derivation:
SOLUTION: 
 
The area of a triangle is  = 
 
#include<stdio.h> 
int main() 

174 
 
{ 
   
float base, height, area; 
   
   
printf("\n Please Enter the Base of a Triangle  :  "); 
   
scanf("%f", &base); 
   
printf("\n Please Enter the Height of a Triangle  :  "); 
   
scanf("%f", &height); 
   
 
   
area = (base * height) / 2; 
   
printf("\n The Area of a Triangle using Base and Height = %.2f\n", area); 
  
   
return 0; 
}

---

### Question 32: Coding Challenge 32
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 32 
Write a program to swap two numbers in C.

#### Formally Verified Solution & Derivation:
SOLUTION: 
// C program to swap two variables  
#include <stdio.h>  
 
int main()  
{  
 
int x, y;  
 
printf("Enter Value of x ");  
 
scanf("%d", &x);  
 
printf("\nEnter Value of y ");  
 
scanf("%d", &y);  
 
 
int temp = x;  
 
x = y;  
 
y = temp;  
 
 
printf("\nAfter Swapping: x = %d, y = %d", x, y);  

175 
 
 
return 0;  
}

---

### Question 33: Coding Challenge 33
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 33 
Writea program to check if the given number is Armstrong or not.

#### Formally Verified Solution & Derivation:
SOLUTION: 
A positive integer is called an Armstrong number (of order n) if 
abcd... = an + bn + cn + dn +  
In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to 
the number itself. For example, 153 is an Armstrong number because 
153 = 1*1*1 + 5*5*5 + 3*3*3  
Checking Armstirng Number of 3 digits: 
#include <stdio.h> 
int main() { 
    int num, originalNum, remainder, result = 0; 
    printf("Enter a three-digit integer: "); 
    scanf("%d", &num); 
    originalNum = num; 
 
    while (originalNum != 0) { 
        // remainder contains the last digit 
        remainder = originalNum % 10; 
         
        result += remainder * remainder * remainder; 
         
        // removing last digit from the orignal number 
        originalNum /= 10; 
    } 
 
    if (result == num) 

176 
 
        printf("%d is an Armstrong number.", num); 
    else 
        printf("%d is not an Armstrong number.", num); 
 
    return 0; 
} 
 
 
Checking Armstring number of n digits: 
#include <math.h> 
#include <stdio.h> 
 
int main() { 
    int num, originalNum, remainder, n = 0, result = 0, power; 
    printf("Enter an integer: "); 
    scanf("%d", &num); 
 
    originalNum = num; 
 
    while (originalNum != 0) { 
        originalNum /= 10; 
        ++n; 
    } 
    originalNum = num; 
 
    while (originalNum != 0) { 
        remainder = originalNum % 10; 
 
        // pow() returns a double value 
        // round() return the equivalent int 

177 
 
        power = round(pow(remainder, n)); 
        result += power; 
        originalNum /= 10; 
    } 
 
    if (result == num) 
        printf("%d is an Armstrong number.", num); 
    else 
        printf("%d is not an Armstrong number.", num); 
    return 0; 
}

---

### Question 34: Coding Challenge 34
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 34 
Write a program to convert a number from Decimal to Binary.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     
#include<stdlib.h>   
int main(){   
int a[10],n,i;     
system ("cls");   
printf("Enter the number to convert: ");     
scanf("%d",&n);     
for(i=0;n>0;i++)     
{     
a[i]=n%2;     
n=n/2;     
}     
printf("\nBinary of Given Number is=");     
for(i=i-1;i>=0;i--)     
{     
printf("%d",a[i]);     

178 
 
}     
return 0;   
}

---

### Question 35: Coding Challenge 35
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 35 
Write a program to convert a number from Binary to Octal.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include <stdio.h> 
int main() 
{ 
    long int binarynum, octalnum = 0, j = 1, remainder; 
  
    printf("Enter the value for  binary number: "); 
    scanf("%ld", &binarynum); 
    while (binarynum != 0) 
    { 
        remainder = binarynum % 10; 
        octalnum = octalnum + remainder * j; 
        j = j * 2; 
        binarynum = binarynum / 10; 
    } 
    printf("Equivalent octal value: %lo", octalnum); 
    return 0; 
}

---

### Question 36: Coding Challenge 36
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 36 
Write a program to convert a number from Decimal to Octal.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h> 
int main() 
{ 
    long decimalnum, remainder, quotient; 
    int octalNumber[100], i = 1, j; 

179 
 
  
    printf("Enter the decimal number: "); 
    scanf("%ld", &decimalnum); 
    quotient = decimalnum; 
    while (quotient != 0) 
    { 
        octalNumber[i++] = quotient % 8; 
        quotient = quotient / 8; 
    } 
    printf("Equivalent octal value of decimal no %d: ", decimalnum); 
    for (j = i - 1; j > 0; j--) 
        printf("%d", octalNumber[j]); 
    return 0; 
}

---

### Question 37: Coding Challenge 37
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 37 
Write a program to swap two numbers without using a third variable.

#### Formally Verified Solution & Derivation:
SOLUTION: 
include<stdio.h>   
 int main()     
{     
int a=10, b=20;       
printf("Before swap a=%d b=%d",a,b);       
a=a+b;//a=30 (10+20)     
b=a-b;//b=10 (30-20)     
a=a-b;//a=20 (30-10)     
printf("\nAfter swap a=%d b=%d",a,b);     
return 0;   
}

---

### Question 38: Coding Challenge 38
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 38 
Write a program to print Hello World in C without using semicolon.

#### Reference Visuals / Figures:
![tcs_p188_img2_760x700.png](../images/tcs_p188_img2_760x700.png)
![tcs_p188_img3_532x517.png](../images/tcs_p188_img3_532x517.png)

#### Formally Verified Solution & Derivation:
SOLUTION: 

180 
 
#include<stdio.h>   
void main()     
{     
 if(printf("hello world")) 
{ 
}     
}

---

### Question 39: Coding Challenge 39
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 39 
Write a program to multiply two matrices in C.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     
#include<stdlib.h>   
int main() 
{   
int a[10][10],b[10][10],mul[10][10],r,c,i,j,k;     
system("cls");   
printf("enter the number of row=");     
scanf("%d",&r);     
printf("enter the number of column=");     
scanf("%d",&c);     
printf("enter the first matrix element=\n");     
for(i=0;i<r;i++)     
{     
for(j=0;j<c;j++)     
{     
scanf("%d",&a[i][j]);     
}     
}     
printf("enter the second matrix element=\n");     
for(i=0;i<r;i++)     
{     
for(j=0;j<c;j++)     

181 
 
{     
scanf("%d",&b[i][j]);     
}     
}     
     
printf("multiply of the matrix=\n");     
for(i=0;i<r;i++)     
{     
for(j=0;j<c;j++)     
{     
mul[i][j]=0;     
for(k=0;k<c;k++)     
{     
mul[i][j]+=a[i][k]*b[k][j];     
}     
}     
}     
//for printing result     
for(i=0;i<r;i++)     
{     
for(j=0;j<c;j++)     
{     
printf("%d\t",mul[i][j]);     
}     
printf("\n");     
}     
return 0;   
}

---

### Question 40: Coding Challenge 40
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 40 
Write a C program without main() function.

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     

182 
 
#define start main     
void start()  
{     
   printf("Hello");     
}

---

### Question 41: Coding Challenge 41
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 41 
Write a program to print Alphabet Triangles like this: 
     A 
    ABA 
   ABCBA 
  ABCDCBA 
 ABCDEDCBA

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     
#include<stdlib.h>   
int main(){   
  int ch=65;     
    int i,j,k,m;     
  system("cls");   
    for(i=1;i<=5;i++)     
    {     
        for(j=5;j>=i;j--)     
            printf(" ");     
        for(k=1;k<=i;k++)     
            printf("%c",ch++);     
            ch--;     
        for(m=1;m<i;m++)     
            printf("%c",--ch);     
        printf("\n");     
        ch=65;     
    }     
return 0;   
}

---

### Question 42: Coding Challenge 42
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 42 
Write a program to print a number triangle of given range like this: 

183 
 
Range  = 7 
      1 
     121 
    12321 
   1234321 
  123454321 
 12345654321 
1234567654321

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     
#include<stdlib.h>   
int main() 
{   
int i,j,k,l,n;     
printf("enter the range=");     
scanf("%d",&n);     
for(i=1;i<=n;i++)     
{     
for(j=1;j<=n-i;j++)     
{     
printf(" ");     
}     
for(k=1;k<=i;k++)     
{     
printf("%d",k);     
}     
for(l=i-1;l>=1;l--)     
{     
printf("%d",l);     
}     
printf("\n");     
}     
return 0;   
}

---

### Question 43: Coding Challenge 43
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 43 
Write a program to generate Fibonacci triangle upto given limit like this: 
Limit:9 
1 

184 
 
1 
1 
 
1 
1 
2 
 
1 
1 
2 
3 
 
1 
1 
2 
3 
5 
 
1 
1 
2 
3 
5 
8 
 
1 
1 
2 
3 
5 
8 
13 
 
1 
1 
2 
3 
5 
8 
13 
21 
 
1 
1 
2 
3 
5 
8 
13 
21 
34

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     
#include<stdlib.h>   
int main() 
{   
   int a=0,b=1,i,c,n,j;     
    printf("Enter the limit:");     
    scanf("%d",&n);     
    for(i=1;i<=n;i++)     
    {     
        a=0;     
        b=1;     
        printf("%d\t",b);     
        for(j=1;j<i;j++)     
        {     
            c=a+b;     
            printf("%d\t",c);     
            a=b;     
            b=c;     
     
        }     
        printf("\n");     
    }     
return 0;   
}

---

### Question 44: Coding Challenge 44
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 44 
Write a program to print numbers in character like this: 
231 -> two thre one 

185 
 
5996 -> five nine nine six

#### Formally Verified Solution & Derivation:
SOLUTION: 
#include<stdio.h>     
#include<stdlib.h>   
int main() 
{   
long int n,sum=0,r;     
printf("enter the number=");     
scanf("%ld",&n);     
while(n>0)     
{     
r=n%10;     
sum=sum*10+r;     
n=n/10;     
}     
n=sum;     
while(n>0)     
{     
r=n%10;     
switch(r)     
{     
case 1:     
printf("one ");     
break;     
case 2:     
printf("two ");     
break;     
case 3:     
printf("three ");     
break;     
case 4:     
printf("four ");     
break;     
case 5:     
printf("five ");     
break;     
case 6:     
printf("six ");     
break;     

186 
 
case 7:     
printf("seven ");     
break;     
case 8:     
printf("eight ");     
break;     
case 9:     
printf("nine ");     
break;     
case 0:     
printf("zero ");     
break;     
default:     
printf("tttt");     
break;     
}     
n=n/10;     
}     
return 0;   
}

---

### Question 45: Coding Challenge 45
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 45 
Write a program to find the roots of a quadratic equation.

#### Formally Verified Solution & Derivation:
SOLUTION: 
The standard form of a quadratic equation is: 
ax2 + bx + c = 0, where 
a, b and c are real numbers and 
a != 0 
The term b2-4ac is known as the discriminant of a quadratic equation. It tells the nature of 
the roots. 
• 
If the discriminant is greater than 0, the roots are real and different. 
• 
If the discriminant is equal to 0, the roots are real and equal. 
• 
If the discriminant is less than 0, the roots are complex and different. 

187 
 
        
 
#include <stdio.h> 
#include <math.h> 
 
void main() 
{ 
   int a,b,c,d; 
   float x1,x2; 
  
   printf("Input the value of a,b & c : "); 
   scanf("%d%d%d",&a,&b,&c); 
   d=b*b-4*a*c; 
   if(d==0) 
   { 
     printf("Both roots are equal.\n"); 
     x1=-b/(2.0*a); 
     x2=x1; 
     printf("First  Root Root1= %f\n",x1); 
     printf("Second Root Root2= %f\n",x2); 
   } 
   else if(d>0) 
 
{ 
 
   printf("Both roots are real and diff-2\n"); 
 
   x1=(-b+sqrt(d))/(2*a); 
 
   x2=(-b-sqrt(d))/(2*a); 
 
   printf("First  Root Root1= %f\n",x1); 
 
   printf("Second Root root2= %f\n",x2); 
 
} 

188 
 
 
else 
 
    printf("Root are imeainary;\nNo Solution. \n"); 
}

---

### Question 46: Coding Challenge 46
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 46 
Write a program to find the sum of all prime numbers in a given range.

#### Formally Verified Solution & Derivation:
SOLUTION: 
1. 
Input upper limit to find sum of prime from user. Store it in some variable say end. 
2. 
Initialize another variable sum = 0 to store sum of prime numbers. 
3. 
Run a loop from 2 to end, incrementing 1 in each iteration. The loop structure should 
look  like for(i=2; i<=end; i++). 
4. 
Inside the loop check if loop counter variable is prime or not. If i is prime then 
add i to sum i.e. sum = sum + i. 
5. 
Finally after loop print the resultant value of sum. 
 
#include <stdio.h> 
int main() 
{ 
    int i, j, start, end; 
    int isPrime, sum=0; 
 
    printf("Enter lower limit: "); 
    scanf("%d", &start); 
    printf("Enter upper limit: "); 
    scanf("%d", &end); 
 
    for(i=start; i<=end; i++) 
    { 
        isPrime = 1; 
        for(j=2; j<=i/2 ;j++) 
        { 
            if(i%j==0) 
            { 
                /* 'i' is not prime */ 
                isPrime = 0; 
                break; 
            } 
        } 
 

189 
 
        if(isPrime==1) 
        { 
            sum += i; 
        } 
    } 
 
    printf("Sum of all prime numbers between %d to %d = %d", start, end, sum); 
 
    return 0; 
} 
OUTPUT: 
Enter lower limit: 10 
Enter upper limit: 20 
Sum of all prime numbers between 10 to 20 = 60

---

### Question 47: Coding Challenge 47
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 47 
Write a C program to print your name 10 times without using loop or goto statement.

#### Formally Verified Solution & Derivation:
SOLUTION: 
We can use recursion to do this. 
#include <stdio.h> 
void printName(char* name,int count)  
{  
    printf("%03d : %s\n",count+1,name);  
    count+=1;  
    if(count<10)  
        printName(name,count);  
}  
int main()  
{  
    char name[50];   
    printf("\nEnter you name :");  
    scanf("%s",name);  
    printName(name,0);  
    return 0;  

190 
 
} 
OUTPUT: 
Enter you name :Ramesh  
001 : Ramesh  
002 : Ramesh  
003 : Ramesh  
004 : Ramesh  
005 : Ramesh  
006 : Ramesh  
007 : Ramesh  
008 : Ramesh  
009 : Ramesh  
010 : Ramesh

---

### Question 48: Coding Challenge 48
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 48 
Write a C program to print the code of the current program that you are writing.

#### Formally Verified Solution & Derivation:
SOLUTION: 
 Its a trick by which you can print your current source code file, use __FILE__ to specify 
current file name and read the file (using file handling) and print it on screen, that will your 
output. 
 
#include <stdio.h> 
int main(void) 
{ 
    FILE *fp; 
    char c; 
    fp = fopen(__FILE__, "r"); 
    do 
    { 
        c=fgetc(fp); 
        putchar(c); 

191 
 
    } 
    while(c!=EOF); 
    fclose(fp); 
    return 0; 
} 
 
The above same code will be printed in the output.

---

### Question 49: Coding Challenge 49
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 49 
Write a C Program to check number is whether EVEN or ODD without using any arithmetic 
or relational operators

#### Formally Verified Solution & Derivation:
SOLUTION: 
We can check whether an integer number is EVEN or ODD without using any Arithmetic or 
Relational operators. 
Here is a simple trick that we can use to check whether number is EVEN or ODD. Using 
Logical AND (&) operator we can check it, each EVEN number has 0th bit LOW (0) and ODD 
number has 0th bit HIGH (1). 
The statement (number & 0x01) will check that 0th bit is HIGH, if it is HIGH (1) number will 
be an ODD otherwise number will be an EVEN. 
#include <stdio.h> 
  
int main() 
{ 
    int number; 
      
    //input an integer number 
    printf("Please input an integer number: "); 
    scanf("%d",&number); 
          
    //check 0th bit of number is 1 or 0 
    (number & 0x01) ? printf("%d is an ODD Number.", number) :  printf("%d is an EVEN 
Number.",number) ; 
      
    printf("\n"); 

192 
 
    return 0;    
}

---

### Question 50: Coding Challenge 50
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Previous Year 30-Minute Coding Challenges`  

#### Question Stem & Answer Options:
PROBLEM 50 
Write a C program to do binary addition and binary subtraction.

#### Formally Verified Solution & Derivation:
SOLUTION: 
Binary addition/subtraction is similar to regular (daily life) addition/subtraction, but 
here addition/subtraction performs only two digits those are 0 and 1, these are binary digits 
hence such kind of addition/subtraction is called binary addition/subtraction. 
Example of Binary Addition: 
Take two numbers, suppose numbers are 10 and 20 their binaries are 1010 and 10100. 
In binary addition  
0+0 
= 
0 
0+1 
= 
1 
1+0 
= 
1 
1+1 
= 
0 
(1 carries out) 
Now add 10 and 20 
10 
= 
0 1 0 1 0 
20 
= 
1 0 1 0 0 
= 
1 1 1 1 0 
= 
30 
Example of Binary Subtraction: 
Take two numbers, suppose numbers are 20 and 10 their binaries 10100 and 1010. 
In binary subtraction  
0-0 
= 
0 
1-0 
= 
1 
0-1 
= 
1 
(1 borrows out) 
1-1 
= 
0 
 
Now sub 10 from 20 
20 
= 
1 0 1 0 0 
10 
= 
0 1 0 1 0 
= 
0 1 0 1 0 
= 
10 

193 
 
 
#include <stdio.h> 
  
//function for Binary Addition 
int binAddition(int a,int b)  
{ 
      int c; //carry 
      while (b != 0) { 
              //find carry and shift it left 
              c = (a & b) << 1; 
              //find the sum 
              a=a^b; 
              b=c; 
      } 
      return a;  
} 
  
//function for Binary Subtraction 
int binSubtracton(int a, int b)  
{ 
      int carry; 
      //get 2's compliment of b and add in a 
      b = binAddition(~b, 1); 
  
      while (b != 0) { 
              //find carry and shift it left     
              carry = (a & b) << 1; 
              //find the sum 
              a = a ^ b; 
              b = carry; 
      } 
      return a; 
} 
  
 
int main()  
{ 
    int number1,number2, binAdd, binSub; 
  
    printf("Input first integer value: ");

---

### Question 51: Official Assessment Coding Problem 1
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Coding question 1: 
There is a JAR full of candies for sale at a mall counter. JAR has the capacity N, 
that is JAR can contain maximum N candies when JAR is full. At any point of 
time. JAR can have M number of Candies where M<=N. Candies are served to 
the customers. JAR is never remain empty as when last k candies are left. JAR if 
refilled with new candies in such a way that JAR get full. Write a code to 
implement above scenario. Display JAR at counter with available number of 
candies. Input should be the number of candies one customer can order at 
point of time. Update the JAR after each purchase and display JAR at Counter. 
Output should give number of Candies sold and updated number of Candies in 
JAR. 
If Input is more than candies in JAR, return: INVALID    INPUT 
Given, 
N=10, where N is NUMBER OF CANDIES AVAILABLE 
K =< 5, where k is number of minimum candies that must be inside JAR ever. 
Example 1:(N = 10, k =< 5) 
Input Value 
3 
Output Value 
NUMBER OF CANDIES SOLD : 3 
NUMBER OF CANDIES AVAILABLE : 7 
Example : (N=10, k<=5) 
Input Value 
0 
Output 
INVALID INPUT 
NUMBER OF CANDIES LEFT : 10 
Solution using C: 
#include <stdio.h> 
 
int main() 
 
{ 
int n=10, k=5; 
 
int num; 
 
scanf("%d",&num); 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
if(num>=1 && num<=5) 
 
{ 
 
printf("NUMBER OF CANDIES SOLD : %d\n",num); 
 
printf("NUMBER OF CANDIES LEFT : %d",n-num); 
 
} 
 
else 
 
{ 
 
printf("INVALID INPUT\n"); 
 
printf("NUMBER OF CANDIES LEFT : %d",n); 
 
} 
 
return 0; 
 
} 
 
Solution in C++ 
 
#include <iostream.h> 
 
using namespace std; 
 
int main() 
 
{ 
int n=10, k=5; 
 
int num; 
 
cin>>num; 
if(num>=1 && num<=5) 
 
{ 
 
cout<<"NUMBER OF CANDIES SOLD : "<<num<<"\n"; 
 
cout<<"NUMBER OF CANDIES LEFT : "<<n-num; 
 
} 
 
else 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
{ 
 
cout<<"INVALID INPUT\n"; 
cout<<"NUMBER OF CANDIES LEFT : 
"<<n; 
 
} 
 
return 0; 
 
} 
 
 
 
Solution in Java 
 
import java.util.Scanner; 
 
class Main{ 
 
public static void main(String[] args) { 
 
int n = 10, k = 5; 
 
int num; 
 
Scanner sc = new Scanner(System.in); 
 
num = sc.nextInt(); 
 
if(num >= 1 && num <= 5) { 
 
System.out.println("NUMBER OF CANDIES SOLD : " + num); 
 
System.out.print("NUMBER OF CANDIES LEFT : " + (n-num)); 
 }  
else { 
System.out.println("INVALID INPUT");  
 
System.out.print("NUMBER OF CANDIES LEFT : " + 
n); 
} 
 
} 
 
} 
 
 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 52: Official Assessment Coding Problem 2
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Coding question 2 
 
Selection of MPCS exams include a fitness test which is conducted on ground. There 
will be a batch of 3 trainees, appearing for running test in track for 3 rounds. You need 
to record their oxygen level after every round. After trainee are finished with all rounds, 
calculate for each trainee his average oxygen level over the 3 rounds and select one 
with highest oxygen level as the most fit trainee. If more than one trainee attains the 
same highest average level, they all need to be selected. 
 
Display the most fit trainee (or trainees) and the highest average oxygen level. 
 
Note: 
 
1. The oxygen value entered should not be accepted if it is not in the range 
between 1 and 100. 
 
2. 
If the calculated maximum average oxygen value of trainees is below 70 then 
declare the trainees as unfit with meaningful message as All trainees are unfit‖ 
 
3. 
Average Oxygen Values should be rounded. 
 
Example 1: 
 
INPUT VALUES 
 
95 
 
92 
 
95 
 
92 
 
90 
 
92 
 
90 
 
92 
 
90 
 
OUTPUT VALUES 
 
Trainee Number : 1 
 
Trainee Number : 3 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
 
 
Note: 
 
Input should be 9 integer values representing oxygen levels entered in order as 
Round 1 
 
Oxygen value of trainee 1 
 
Oxygen value of trainee 2 
 
Oxygen value of trainee 3 
 
Round 2 
 
Oxygen value of trainee 1 
 
Oxygen value of trainee 2 
 
Oxygen value of trainee 3 
 
Round 3 
 
Oxygen value of trainee 1 
 
Oxygen value of trainee 2 
 
Oxygen value of trainee 3 
 
Output must be in given format as in above example. For any wrong input final 
output should display “INVALID INPUT”  
Solution in C: 
#include <stdio.h> 
 
int main() 
 
{ 
 
int tr[3][3]; 
 
int average[3] = {0}; 
 
int i, j, max=0; 
 
for(i=0; i<3; i++) 
 
{ 
 
for(j=0; j<3; j++) 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
{ 
 
scanf("%d", &tr[i][j]); 
 
if(tr[i][j]<1 || tr[i][j]>100) 
 
{ 
 
tr[i][j] = 0; 
 
} 
 
} 
 
} 
 
for(i=0; i<3; i++) 
 
{ 
 
for(j=0; j<3; j++) 
 
{ 
 
average[i] = average[i] + tr[j][i]; 
 
} 
 
average[i] = average[i] / 3; 
 
} 
 
for(i=0; i<3; i++) 
 
{ 
 
if(average[i]>max) 
 
{ 
 
max = average[i]; 
 
 
 
} 
 
} 
 
for(i=0; i<3; i++) 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
{ 
 
if(average[i]==max) 
 
{ 
 
printf("Trainee Number : %d\n",i+1); 
 
} 
 
if(average[i]<=70) 
 
{ 
 
printf("Trainee is Unfit"); 
 
} 
 
} 
 
return 0; 
 
} 
 
Solution in C++: 
 
#include <iostream> 
 
using namespace std; 
 
int main() 
 
{ 
 
int tr[3][3]; 
 
int average[3] = {0}; 
 
int i, j, max=0; 
 
for(i=0; i<3; i++) 
 
{ 
 
for(j=0; j<3; j++) 
 
{ 
 
cin>>tr[i][j];  

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
if(tr[i][j]<1 ||tr[i][j]>100) 
 
{ 
 
tr[i][j] = 0; 
 
} 
 
} 
 
} 
 
for(i=0; i<3; i++) 
 
{ 
 
for(j=0; j<3; j++) 
 
{ 
 
average[i] 
= 
average[i]+tr[j][i]; 
 
                                         } 
 
average[i] = average[i] / 3; 
 
 
 
} 
 
for(i=0; i<3; i++) 
 
{ 
 
if(average[i]>max) 
 
{ 
 
max = average[i]; 
 
} 
 
} 
 
for(i=0; i<3; i++) 
 
{ 
 
if(average[i]==max) 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
{ 
 
cout<<"Trainee Number: "<<i+1<<"\n"; 
 
} 
 
if(average[i]<=70) 
 
{ 
 
cout<<"Trainee is Unfit"; 
 
} 
 
} 
 
return 0; 
 
} 
 
Solution in Java: 
 
import java.util.Scanner; 
 
class Main { 
 
public static void main(String[] args) {  
int[][] tr = new int[3][3];  
int[] average = new int[3]; 
 
int max = 0; 
 
Scanner sc = new Scanner(System.in);  
for(int i = 0; i < 3; i++) { 
for(int  j  =  0;  j  <  3;  j++)  {  
tri][j] = sc.nextInt(); 
if(tr[i][j] < 1 ||tr[i][j] > 100) { 
tr[i][j] = 0; 
 
} 
 
} 
 
} 
 
for(int i = 0; i < 3; i++) { 
 
for(int j = 0; j < 3; j++) { 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
 
 
average[i] =  average[i]+tr[j][i]; 
 
} 
 
average[i] = average[i] / 3; 
 
} 
 
for(int i = 0; i < 3; i++) {  
if(average[i] > max) { 
  
 
max = average[i]; 
} 
 
} 
 
for(int i = 0; i < 3; i++) {  
if(average[i] == max) { 
System.out.println("Trainee Number : " + (i + 1)); 
 
} 
 
if(average[i] <= 70) {  
System.out.print("Trainee is Unfit"); 
 
} 
 
} 
 
} 
 
}

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 53: Official Assessment Coding Problem 3
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Coding question 3 
Washing Machine works on the principle of a Fuzzy system, the weight of clothes put 
inside it for wash is uncertain. But based on weight measured by sensors, it decides 
time and water levels which can be changed by menus given on the machine control 
area. For low Water level, time estimate is 25 minutes, where approximate weight is 
2000 grams or any non-zero positive number below that. 
 
For Medium Water level, time estimated is 35minutes, where approximate weight is 
between 2001 grams and 4000 grams. For High Water level, time estimated is 45 
Minutes, where approximate weight is above 4000 grams. Assume the Capacity of 
the Machine is maximum 7000 grams. Where the approximate weight is zero, the 
time estimate is 0 minutes. Write a function which takes numeric weight in the range 
[0,7000] as input and produces estimated time as output; if input is more than 7000, 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
then output is: "OVERLOADED!", and for all other inputs, the output statement is 
"INVALID INPUT”. 
 
Input should be in the form of integer value  
 
Output must have the following format - TimeEstimated: Minutes 
 
Example 1 
 
Input Value 
 
2000 
 
Output Value 
 
Time Estimated: 25 Minutes 
 
Solution using C++ 
 
#include<iostream> 
using namespace std; 
int main(){ 
int w; 
cin>>w; 
if(w<0) 
cout<<"INVALID INPUT"; 
else if(w==0) 
cout<<"Time Estimated : 0 Minutes"; 
else if (w>0 && w<=2000) 
cout<<"Time Estimated: 25 Minutes"; 
 
else if(w>=2001 && w <= 4000) 
cout<<"Time Estimated: 35 Minutes"; 
 
else if(w>=4001 && w <= 7000) 
cout<<"Time Estimated: 45 Minutes"; 
 
else 
cout<<"OVERLOADED!"; 
 
return 0; 
 
} 
 
Solution using Python 
 
w = int(input()) 
if (w<0): 
    print("INVALID INPUT") 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
elif(w==0): 
    print("Time Estimated : 0 Minutes") 
elif (w>0 and w<=2000): 
    print("Time Estimated: 25 Minutes") 
 
elif(w>=2001 and w <= 4000): 
    print("Time Estimated: 35 Minutes") 
 
elif(w>=4001 and w <= 7000): 
    print("Time Estimated: 45 Minutes") 
 
else: 
    print("OVERLOADED!") 
 
 
 
Coding question – 4 
 Caesar Cipher The Caesar cipher is a type of substitution cipher in which each 
alphabet in the plaintext or message is shifted by a number of places down the 
alphabet.For example, with a shift of 1, P would be replaced by Q, Q would become 
R, and so on.To pass an encrypted message from one person to another, it is first 
necessary that both parties have the 'key' for the cipher, so that the sender may 
encrypt it and the receiver may decrypt it.The key is the number of OFFSETs to 
shift the cipher alphabet. Key can have basic shifts from 1 to 25 positions as there 
are 26 total alphabets. 
As we are designing custom Caesar Cipher, in addition to alphabets, we are 
considering numeric digits from 0 to 9. Digits can also be shifted by key places. 
For example, if given plain text contains any digit with value 5 and key = 2, then 5 will 
be replaced by 7. -(Minus sign) will remain as it is. Key value less than 0 should 
result into "INVALID INPUT" 
 
Example 1: 
 
Input: 
 
Enter your PlainText: All the Best 
 
Enter the Key: 1 
 
Output: 
 
The encrypted Text is: Bmm uif Cftu 
 
Write a function customCaesarCipher(int key, String message) which will accept 
plaintext and key as input parameters and returns its cipher text as output. 
 
Solution using C 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 54: Official Assessment Coding Problem 5
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Coding question 5 
We want to estimate the cost of painting a property.Interior wall painting cost is 
Rs.18 per sq.ft. and exterior wall painting cost is Rs.12 per sq.ft. 
Take input as 
 
1.       Number of Interior walls 
 
2. 
Number of Exterior walls 
 
3. 
Surface Area of each Interior Wall in units of square feet 
 
4. 
Surface Area of each Exterior Wall in units of square feet 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
If a user enters zero as the number of walls then skip Surface area values as User 
may don‘t want to paint that wall.Calculate and display the total cost of painting the 
property 
 
Example 1: 
 
6 
 
3 
 
12.3 
 
15.2 
 
12.3 
 
15.2 
 
12.3 
 
15.2 
 
10.10 
 
10.10 
 
10.00 
 
Total estimated Cost : 1847.4 INR 
 
Solution using C: 
 
#include<stdio.h> 
 
int main() 
 
{ 
 
int ni,ne,i=0; 
 
float int_p=18,ext_p=12,cost=0,temp; 
 
scanf("%d %d",&ni,&ne); 
 
if(ni<0 || ne<0 ) 
 
{ 
 
printf("INVALID INPUT"); 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
 
 
} 
 
else if(ni==0 && ne==0) 
 
{ 
 
printf("Total estimated Cost : 0.0"); 
 
} 
 
else 
 
{ 
 
for(i=0;i<ni;i++) 
 
{ 
 
scanf("%f",&temp); 
 
cost+= int_p*temp; 
 
} 
 
for(i=0;i<ne;i++) 
 
{ 
 
scanf("%f",&temp); 
 
cost+= ext_p*temp; 
 
} 
 
printf("Total estimated Cost : %.1f",cost); 
 
} 
 
return 0; 
 
} 
 
Solution in C++: 
 
#include<iostream> 
 
using namespace std; 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
int main() 
 
{ 
 
int ni,ne,i=0; 
 
float int_p=18,ext_p=12,cost=0,temp; 
 
scanf("%d %d",&ni,&ne); 
 
if(ni<0 || ne<0 ) 
 
{ 
 
cout<<"INVALID INPUT"; 
 
} 
 
else if(ni==0 && ne==0) 
 
{ 
 
cout<<"Total estimated Cost : 0.0"; 
 
} 
 
else 
 
{ 
 
for(i=0;i<ni;i++) 
 
{ 
 
cin>>temp; 
 
cost+= int_p*temp; 
 
} 
 
for(i=0;i<ne;i++) 
 
{ 
 
cin>>temp; 
 
 
 
cost+= ext_p*temp; 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
} 
 
cout<<"Total estimated Cost : "<<cost; 
 
} 
 
return 0; 
 
} 
 
Solution in Java: 
 
import java.util.Scanner; 
 
class Main { 
 
public static void main(String[] args) { 
 
int ni, ne, i = 0; 
 
float intP = 18, extP = 12, cost = 0, temp; 
 
Scanner sc = new Scanner(System.in); 
 
ni = sc.nextInt(); 
 
ne = sc.nextInt(); 
 
if(ni < 0 || ne < 0) { 
 
System.out.print("INVALID INPUT"); 
 
} else if(ni == 0 && ne == 0) 
 { 
 System.out.print("Total estimated Cost : 0.0"); 
}  
else { 
 
for(i = 0; i < ni; i++) { 
 
temp = sc.nextFloat(); 
 
cost += intP * temp; 
 
} 
 
for(i = 0; i < ne; i++) { 
 
temp = sc.nextFloat(); 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
cost += extP * temp; 
 
} 
 
System.out.printf("Total estimated Cost : %.1f", cost); 
 
} 
 
} 
 
} 
 
Solution in Python: 
 
interior_walls = int(input()) 
 
exterior_walls = int(input()) 
 
if interior_walls: 
 
int_walls = [] 
 
for i in range(interior_walls): 
 
int_walls.append(float(input())) 
 
if exterior_walls: 
 
ext_walls = [] 
 
for i in range(exterior_walls): 
 
ext_walls.append(float(input())) 
 
if exterior_walls < 0 or interior_walls < 0: 
 
print(“Invalid Input”) 
 
exit() 
 
 
 
if exterior_walls and interior_walls: 
 
print("Total estimated Cost : ",(sum(int_walls)*18+sum(ext_walls)*12),"INR") 
 
else: 
 
if exterior_walls: 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
print("Total estimated Cost : ",sum(ext_walls)*12,"INR") 
 
elif interior_walls: 
 
print("Total estimated Cost : ",sum(int_walls)*18,"INR") 
 
else: 
 
print("Total estimated Cost : 0.0 INR")

#### Reference Visuals / Figures:
![tcs_p244_img1_1587x1285.jpeg](../images/tcs_p244_img1_1587x1285.jpeg)

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 55: Official Assessment Coding Problem 6
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Coding question 6 
A City Bus is a Ring Route Bus which runs in circular fashion.That is, Bus once 
starts at the Source Bus Stop, halts at each Bus Stop in its Route and at the end it 
reaches the Source Bus Stop again. 
If there are n  number of Stops and if the bus starts at Bus Stop 1, then after nth Bus 
Stop, the next stop in the Route will be Bus Stop number 1 always. 
If there are n stops, there will be n paths.One path connects two stops. Distances (in 
meters) for all paths in Ring Route is given in array Path[] as given below: 
Path = [800, 600, 750, 900, 1400, 1200, 1100, 1500] 
Fare is determined based on the distance covered from source to destination stop 
as  Distance between Input Source and Destination Stops can be measured by 
looking at values in array Path[] and fare can be calculated as per following criteria: 
• 
If d =1000 metres, then fare=5 INR 
• 
(When calculating fare for others, the calculated fare containing any fraction 
value should be ceiled. For example, for distance 900n when fare initially 
calculated is 4.5 which must be ceiled to 5) 
Path is circular in function. Value at each index indicates distance till current stop 
from the previous one. And each index position can be mapped with values at same 
index in BusStops [] array, which is a string array holding abbreviation of names for 
all stops as- 
“THANERAILWAYSTN” = ”TH”, “GAONDEVI” = “GA”, “ICEFACTROY” = “IC”, 
“HARINIWASCIRCLE” = “HA”, “TEENHATHNAKA” = “TE”, “LUISWADI” = 
“LU”, “NITINCOMPANYJUNCTION” = “NI”, “CADBURRYJUNCTION” = “CA” 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
Given, n=8, where n is number of total BusStops. 
BusStops = [ “TH”, ”GA”, ”IC”, ”HA”, ”TE”, ”LU”, ”NI”,”CA” ] 
Write a code with function getFare(String Source, String Destination) which take 
Input as source and destination stops(in the format containing first two characters of 
the Name of the Bus Stop) and calculate and return travel fare. 
Example 1: 
Input Values 
ca 
Ca 
Output Values 
INVALID OUTPUT 
Example 2: 
Input Values 
NI 
HA 
Output Values 
23.0 INR 
Note: Input and Output should be in format given in example. 
Input should not be case sensitive and output should be in the format  INR 
 
 
Solution in Python: 
 
import math 
 
def getFare(source,destination): 
 
route=[ [ "TH", "GA", "IC", "HA", "TE", "LU", "NI", 
"CA"], [800,600,750,900,1400,1200,1100,1500] 
 
] 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
fare = 0.0 
 
if not (source in route[0] and destination in route[0]): 
 
print("Invalid Input") 
 
exit() 
 
if route[0].index(source) < route[0].index(destination): 
 
for i in range(route[0].index(source),route[0].index(destination)+1): 
 
fare+=route[1][i] 
 
 elif route[0].index(destination) < route[0].index(source): 
 
for i in range(route[0].index(source)+1,len(route[0])): 
 
fare+=route[1][i] 
 
for i in range(0,route[0].index(destination)+1): 
 
fare+=route[1][i] 
 
return float(math.ceil(fare*0.005)) 
 
s = input() 
 
dst = input() 
 
fare = getFare(s,dst) 
 
if fare == 0: 
 
print("Invalid Input") 
 
else: 
 
print(fare) 
 
Solution in C++: 
 
#include <bits/stdc++.h> 
 
using namespace std; 
 
int main() { 
 
string s , d; 
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
cin>>s>>d; 
 
transform(s.begin(),s.end() , s.begin(),::toupper); 
transform(d.begin(),d.end() , d.begin(),::toupper); 
 
string arrs[8] = {"TH" , "GA", "IC" , "HA" , "TE", "LU" 
,"NI","CA"}; float 
arr[8]={800,600,750,900,1400,1200,1100,1500}; float res=0; 
 
int st ,ed; 
 
for(int i=0;i<8;i++) 
 
{ 
 
 
 
if(s==arrs[i]) 
 
st=i; 
 
if(d==arrs[i]) 
 
ed=i; 
 
} 
 
if(st==ed) 
 
{ 
 
cout<<" INVALID INPUT"; 
 
return 0; 
 
} 
 
else 
 
{ 
 
int i=st+1; 
 
cout<<i; 
 
while(i!=ed+1) 
 
{ 
 
res+=(arr[i]); 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
 
i=(i+1)%8; 
 
} 
 
cout<<(ceil)(res*0.005); 
 
return 0; 
 
} 
 
} 
 
Programming MCQ's:

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 56: Official Assessment Coding Problem 7
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What will be printed when the sample code is executed.   
 
class Main  
{  
public static void main(String args[])  
{  
int i,j,x=0;   
for(i=0;i<5;i++)  
for (j=0;j<5;j++){  
x=(i+j-1);   
System.out.print(x);   
break;  
}  
System.out.print(x);  
}  
}  
Answer- -101233

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 57: Official Assessment Coding Problem 8
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which of the following options best suits for Memory Leak Occurred 
1. Resource allocation pending while debugging the code  
2. Program releases resources allocated in the memory  
3. Program does not free the memory which is allocated dynamically  
4. Occurs due to address assignment failure.  
Answer- Program does not free the memory which is allocated dynamically.

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 58: Official Assessment Coding Problem 9
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What among the following is a server based paradigm  
1. Request for Information(RFI)  
2. Data Validation Routine  
3. Cloud computing  
4. Total cost of Ownership.  

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
Answer- Request for information

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 59: Official Assessment Coding Problem 10
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
When we declare constant pointer to integer, we CANNOT change:  
1. Value pointed by pointer  
2. Either addressing pointer variable or value at that address  
3. Changes are not permitted  
4. Address in pointer variable. 
Answer- Address in the pointer variable.

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 60: Official Assessment Coding Problem 11
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Write the name of library of functions which is used to perform  
arithmetic operations on BigInteger and BigDecimal  
Answer- MathContext

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 61: Official Assessment Coding Problem 12
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which argument is passed to fflush()?   
A.no parameters  
B.stdin   
C.stdout   
D.stderr

#### Formally Verified Solution & Derivation:
Answer: Option B

---

### Question 62: Official Assessment Coding Problem 13
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What will be the output for the below?                                                     
Enter your answer only as Numeral                
public Class Main {                                                                                          
public static void main(string[]) {                                                                                  
int x=1/2;                                                                              
if(x==0.5)                                                                                                                 
System.out.println(x+1);                                                                                       
else System.out.println(x*2);                                                                                      
} }

#### Formally Verified Solution & Derivation:
Answer: 0

---

### Question 63: Official Assessment Coding Problem 14
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which argument is passed to fflush()?   
A.no parameters  
B.stdin   
C.stdout   
D.stderr

#### Formally Verified Solution & Derivation:
Answer: Option B  

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/

---

### Question 64: Official Assessment Coding Problem 16
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What is the name of the method that examines a particular data entity 
and  determines what data elements need to be associated? 
A. Entity relationship diagram  
B. Logic Data modeling  
C. Customer Entities  
D. Functional Primitive

#### Formally Verified Solution & Derivation:
Answer: Option A

---

### Question 65: Official Assessment Coding Problem 17
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What will be the output of the below code?   
public class Main { static int num=30;  
static class inner  
{  
void msg()  
{  
System.out.Println(‗Num: num++);  
}  
}  
public static void main(string args[])  
{  
Main.Inner tw=new Main.Inner();  
tw.msg()  
}  
}

#### Formally Verified Solution & Derivation:
Answer: 30

---

### Question 66: Official Assessment Coding Problem 18
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
The function ____ obtains block of memory dynamically. 
a) calloc 
b) malloc 
c) Both calloc & malloc  
d) free

#### Formally Verified Solution & Derivation:
Answer : Both calloc & malloc

---

### Question 67: Official Assessment Coding Problem 19
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
We cannot overload operator  
A. : :  
B. []  
C. ()  

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
D. +

#### Formally Verified Solution & Derivation:
Answer: Option A

---

### Question 68: Official Assessment Coding Problem 20
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which data structure is used to convert expression from one form to 
another  form?  
A. Graph  
B. Stack  
C. LinkedList  
D. Queue

#### Formally Verified Solution & Derivation:
Answer: Option B

---

### Question 69: Official Assessment Coding Problem 21
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What is the mathematical function used to round off 6.23 to 7?   
A. floor(6.23)  
B. ceil(6.23,7)  
C. floor(6.23,7)  
D. ceil(6.23)

#### Formally Verified Solution & Derivation:
Answer: Option D

---

### Question 70: Official Assessment Coding Problem 22
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which combination of the integer variables a, b and c makes the variable 
m  get the value 4 in the following expression?  
m = (a > b) ? (( a > c ) ? a : c) : ((b > c ) ?  b : c )  
A. a=6, b=3, c=5  
B. a=6, b=5, c=3  
C. a=5, b=4, c=5  
D. a=3, b=4, c=2

#### Formally Verified Solution & Derivation:
Answer: Option D

---

### Question 71: Official Assessment Coding Problem 23
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which of the following options best suits for Memory Leak Occurred 
A. Resource allocation pending while debugging the code  
B. Program releases resources allocated in the memory  
C. Program does not free the memory which is allocated dynamically  
D. Occurs due to address assignment failure.   
Answer- Option C

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 72: Official Assessment Coding Problem 24
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which of the following functions is used to accept strings with white 
spaces?   

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
A.getWhiteSpaceString();  
B.scanf();  
C.gets();   
D.getstrings();

#### Formally Verified Solution & Derivation:
Answer: Option C

---

### Question 73: Official Assessment Coding Problem 25
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What will be the output of the below code?   
import java.util.ArrayList;  
import java.util.Collections;   
import java.util.Iterator;   
class MainClass  
{  
public void sort()  
{  
ArrayList arrayList= new ArrayList();   
arrayList.add("mango");   
arrayList.add("grapes");  
Iterator iterator = arrayList.iterator();   
while(iterator.hasNext())  
{ System.out.print(iterator.next() +" ");  
}  
Collections.sort(arrayList);  
} 
}  
public class Main { public static void main(String[] args)  
{  
MainClass mainclass = new MainClass();   
mainclass.sort();  
}  
}  
A. mango grapes  
B. Compilation error  
C. Collection.sort() throws Concurrent Modification Exception  
D. Grapes mango

#### Reference Visuals / Figures:
![tcs_p244_img1_1587x1285.jpeg](../images/tcs_p244_img1_1587x1285.jpeg)

#### Formally Verified Solution & Derivation:
Answer: Option A  
 

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/

---

### Question 74: Official Assessment Coding Problem 26
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Memory allocation using malloc() is done in? 
a) Static area 
b) Stack area 
c) Heap area 
d) Both Stack & Heap area

#### Formally Verified Solution & Derivation:
Answer: Option C

---

### Question 75: Official Assessment Coding Problem 27
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
.What is the function used to describe the situation, when a function in 
base class is redefined in inherited class? 
a.Inheritance 
b.Overriding 
c.Overloading 
d.Encapsulation

#### Formally Verified Solution & Derivation:
Answer:b

---

### Question 76: Official Assessment Coding Problem 28
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
What will be the output   
public class Main {  
public static void main(String[] args)  
{ 
int $ = 5;  
}  
}  
1. Nothing will print  
2. Symbol not found Error.  
3. Runtime Error  
4. Compile time error  
Answer- Nothing will print

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 77: Official Assessment Coding Problem 29
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Given here is a scenario. Consider the graph algorithm and answer  the 
given question. John wants to go to different locations of the city in which he 
is. He has listed all of  them down. However he wants to visit one location 
before visiting some other  location. What application of graphs can he use to 
determine that location?  
1. DFS  
2. Dijsktra‘s  
3. BFS  
4. Topological Sorting  

OnlineStudy4U .. A Complete Placement Solution                       website: https://onlinestudy4u.in/ 
 
 
Answer- Dijkstra’s

#### Formally Verified Solution & Derivation:
Detailed step-by-step mathematical derivation provided inline.

---

### Question 78: Official Assessment Coding Problem 30
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Official Coding Assessment Paper`  

#### Question Stem & Answer Options:
Which of the following correctly describes overloading of functions? 
a.Virtual polymorphism 
b.Transient polymorphism 
c.Ad-hoc polymorphism 
d.Pseudo polymorphism

#### Formally Verified Solution & Derivation:
Answer: c

---
