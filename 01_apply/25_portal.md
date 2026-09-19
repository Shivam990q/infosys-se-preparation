# Test Platform Mechanics, AI Proctor Glitches & Hardware Protocol

**Role:** Systems Engineer (SE) | **Company:** Infosys Limited  
**Assessment System:** Infosys Assessment Engine (Secure Browser Environment)  
**Warning:** 70% of exam disqualifications are caused by environment & proctoring missteps, not lack of knowledge.

---

## 1. The Real Exam Screen Interface & Controls

Candidates often assume the test interface resembles college exams. Here is the exact reality:

```
+---------------------------------------------------------------------------------+
|                        INFOSYS ASSESSMENT SCREEN LAYOUT                         |
+---------------------------------------------------------------------------------+
| [Header] Test Name: Systems Engineer | Candidate Name | Live Webcam Feed (Top-R) |
|          Section Timer: 34:12 Remaining (Count Down)                            |
+---------------------------------------------------------------------------------+
| [Main Pane]                                                                     |
|  Question 3 of 10                                                               |
|  Two trains of lengths 140 m and 160 m run on parallel tracks...                |
|                                                                                 |
|  ( ) A. 72 km/h                                                                 |
|  ( ) B. 90 km/h                                                                 |
|  (o) C. 108 km/h                                                                |
|  ( ) D. 126 km/h                                                                |
|                                                                                 |
|  [ Clear Response ]                                                             |
+---------------------------------------------------------------------------------+
| [Footer]                                                                        |
|  [ PREVIOUS BUTTON DISABLED ]                     [ NEXT & SUBMIT QUESTION >> ] |
|  *Warning: Once submitted, you CANNOT revisit this question!*                   |
+---------------------------------------------------------------------------------+
```

### Critical Interface Rules:
1. **NO Virtual Calculator:** Infosys does **NOT** provide an on-screen calculator for Mathematical Ability. All calculations must be done manually on rough paper.
2. **NO Backward Navigation:** You cannot mark a question for review or return to Question 1 from Question 2. Every question must be answered or skipped permanently before clicking "Next".
3. **Independent Sectional Timers:** If you finish Mathematical Ability early (e.g., in 25 minutes instead of 35), the leftover 10 minutes do **NOT** roll over to Logical Reasoning or Pseudocode! Each section operates on an isolated clock.

---

## 2. Rough Paper Protocol & Proctor Presentation

You are allowed physical rough sheets, but you must handle them strictly according to proctoring protocol:

```
+---------------------------------------------------------------------------------+
|                         ROUGH PAPER COMPLIANCE CHECKLIST                        |
+-------------------+-------------------------------------------------------------+
| Parameter         | Mandatory Protocol                                          |
+-------------------+-------------------------------------------------------------+
| Sheet Type        | Plain white blank A4 paper sheets (maximum 4–6 sheets).     |
|                   | Ruled notebooks or pre-written sheets are strictly banned. |
+-------------------+-------------------------------------------------------------+
| 360° Scan         | Before the test begins, the camera will ask you to hold up  |
|                   | your rough sheets (both sides) to prove they are blank.     |
+-------------------+-------------------------------------------------------------+
| Camera Placement  | Angle your laptop screen so that your face, hands, and rough|
|                   | paper on the desk are simultaneously visible in frame.      |
|                   | Looking straight down at your lap triggers "Cheating Flag". |
+-------------------+-------------------------------------------------------------+
| Writing Utensil   | Blue or black ballpoint pen. Pencils are allowed.           |
+-------------------+-------------------------------------------------------------+
```

---

## 3. The 5 AI Proctoring False-Positive Traps (And How to Avoid Them)

Infosys uses automated computer vision models to flag suspicious behavior. Avoid these common blunders:

### Trap 1: The "Wall Poster / Photograph" Multi-Face Trap
- **The Glitch:** If there is a poster, calendar photo, or portrait of a human face on the wall behind you, the face-detection model detects multiple faces in frame and triggers **"Multiple Persons Detected"**.
- **Fix:** Sit with your back against a plain, bare wall or a solid curtain. Remove all photos and portraits.

### Trap 2: Eye-Gaze Deviation (Looking at Desk vs Lap)
- **The Glitch:** The AI tracks pupil vectors. If you look down repeatedly for more than 5 seconds, it assumes you are reading a mobile phone.
- **Fix:** Keep your rough paper propped right next to your keyboard, not down in your lap. Keep your head tilted slightly toward the screen while scribbling calculations.

### Trap 3: Ambient Audio False-Positives (Fans & Street Noise)
- **The Glitch:** Ceiling fans with rhythmic humming or loud window traffic can trigger the AI's "Ambient Speech Detection".
- **Fix:** Close all windows and doors. Use a quiet, closed room. Inform family members not to speak or enter during the 100-minute window.

### Trap 4: Glasses Glare & Backlighting
- **The Glitch:** If light comes from a window behind you (backlighting), your face becomes a silhouette and the AI cannot detect eyes. If light reflects off your spectacles, gaze-tracking fails.
- **Fix:** Place your desk lamp or room light directly in front of you, illuminating your face. Avoid sitting with your back to an open window.

### Trap 5: Dual Monitor / Secondary Display Detection
- **The Glitch:** If an external HDMI monitor or TV is plugged in (even if powered off), the secure browser detects multiple display adapters and refuses to launch.
- **Fix:** Unplug all HDMI/VGA cables and secondary displays from your laptop.

---

## 4. Power Failure, Internet Drops & Crash Recovery

What happens if your WiFi cuts out or power drops mid-exam?

```
+---------------------------------------------------------------------------------+
|                           POWER & INTERNET CRASH PLAYBOOK                       |
+---------------------------------------------------------------------------------+
| Step 1: DO NOT PANIC. Your session token is preserved on the Infosys server.   |
|                                                                                 |
| Step 2: Session Buffer: Infosys provides a 15-minute grace window to reconnect  |
|         using the exact same test URL and registration credentials.             |
|                                                                                 |
| Step 3: Timer Behavior: Note that the SECTION TIMER RUNS ON THE SERVER.         |
|         If you take 4 minutes to reconnect during Math, you lose 4 minutes from |
|         that section. Reconnect as fast as possible.                            |
|                                                                                 |
| Step 4: Hotspot Backup: Keep your mobile hotspot pre-paired with your laptop    |
|         so that if broadband WiFi cuts out, you switch connections within 15s.  |
|                                                                                 |
| Step 5: If Locked Out: Immediately take a photo of the error screen showing     |
|         date/time and email `talent.acquisition@infosys.com` with your          |
|         Candidate ID, College Name, and copy your College TPO within 30 mins.   |
+---------------------------------------------------------------------------------+
```

---

## 5. Portal Registration: The "Zero-Mistake" Checklist

When filling out the college Launchpad / Superset form:

1. **Marks Decimal Precision:** If your percentage is 68.42%, enter **68.42**. Do NOT enter 68.4 or round up to 69%. Automatic scrapers cross-verify with your uploaded PDF mark sheets.
2. **Name Order:** First Name and Last Name must match your 10th grade certificate letter-for-letter. If your certificate says `KUMAR, SHIVAM`, enter First Name `Shivam`, Last Name `Kumar`.
3. **College Roll Number:** Enter your University Registration Number / USN / Roll Number exactly as printed on your semester mark sheets.
4. **Photo Specifications:** Upload a passport-style photo with a clean white/light background, taken in good lighting with both ears visible. No selfies or social media crops.
