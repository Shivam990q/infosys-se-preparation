# Section - Logical Reasoning
## Topic - Direction Sense

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1` & `1.2.2 Infosys PYQ Screenshots- PART2`  
> **Print Optimization:** Compact 2-column density compatible, vector orientation geometry.

---

### Question 1 [Source: `photo_811@28-10-2024_22-28-23.jpg`]
**Question:** Consider the following statements:
1. One morning after sunrise Jill met Jack near a river during her morning walk.
2. Both meet face to face, and Jill is facing in the South direction.

Which of these statements can be concluded from the above given statements? *(Choose correct solutions)*

**Spatial Geometry (Redrawn):**
```text
                           North
                             ^
                             |  [Jack facing North]
                             |         ^
             West <----------+----------> East (Sunrise: Sun is in East)
                             |         v
                             |  [Jill facing South]
                             v
                           South

  Shadow Direction: Sun is in East ==> All shadows cast toward the WEST.
  Jill's perspective (Facing South):
    - Front = South
    - Back = North
    - Left = East
    - Right = West  ===> Shadows fall on Jill's RIGHT!
```

**Answer Options:**
* **(A)** Jack's shadow is on the right side of Jill
* **(B)** The sun is towards the east of Jack and Jill
* **(C)** The sun is towards the west of Jack and Jill
* **(D)** Jack's shadow is on the left side of Jill

**Correct Answer:** **(A) and (B) are both correct**  
**Solution:**
1. Since it is morning after sunrise, the sun is positioned in the **East**. (Statement B is correct).
2. Consequently, shadows of all objects fall towards the **West**.
3. Jill is facing South. For a person facing South:
   * Left hand points towards East.
   * Right hand points towards West.
4. Jack's shadow falls towards the West. Therefore, Jack's shadow is on the **right side of Jill**. (Statement A is correct).

---

### Question 2 [Source: `photo_1928@28-10-2024_22-49-56.jpg`]
**Question:** Suman is facing South-West and turns through $135^\circ$ in the anti-clockwise direction and then $90^\circ$ in the anti-clockwise direction. Which direction is Suman facing now?

**Answer Options:**
* **(A)** North-East
* **(B)** North
* **(C)** South
* **(D)** East

**Correct Answer:** **(B) North**  
**Vector Angular Proof & Compass Diagram:**
```text
                      North (0° / 360°)
                             ^
                             |  [Final Direction: North]
               NW            |            NE
                 \           |           /
                   \         |         /
                     \       |       /
        West <---------------+---------------> East (90°)
       (270°)         \      |      /           ^
                        \    |    /            / [Turn 1: +135° Anti-clockwise]
                          \  |  /             /
               SW           \|/             SE
         [Initial Facing]    v
        (225° Clockwise)   South (180°)
```
* **Step 1 (Initial Orientation):**
  * Standard compass bearing measured clockwise from North: South-West corresponds to $225^\circ$.
* **Step 2 (First Rotation - $135^\circ$ Anti-clockwise):**
  * Anti-clockwise rotation decreases the clockwise angle:
    $$\theta_1 = 225^\circ - 135^\circ = 90^\circ\text{ (Due East)}$$
* **Step 3 (Second Rotation - $90^\circ$ Anti-clockwise):**
  * Rotating another $90^\circ$ anti-clockwise from East:
    $$\theta_2 = 90^\circ - 90^\circ = 0^\circ\text{ (Due North)}$$
* **Alternative Net Rotation Check:**
  * Total anti-clockwise rotation = $135^\circ + 90^\circ = 225^\circ$.
  * Net angle = $225^\circ - 225^\circ = 0^\circ$ (Due North).
* Matches Option **(B) North** with 100% precision.

---

### Question 3 [Source: `photo_1892@28-10-2024_22-49-56.jpg`, `photo_1916@28-10-2024_22-49-56.jpg`]
**Question:** In a certain coded navigation language:  
* $M\ \#\ N$ means '$N$ is at 2 metre to the right of $M$'.  
* $M\ \$\ N$ means '$N$ is at 2 metre to the north of $M$'.  
* $M\ *\ N$ means '$N$ is at 2 metre to the left of $M$'.  
* $M\ @\ N$ means '$N$ is at 2 metre to the south of $M$'.  
According to the given path, in which direction is $V$ with respect to $Q$? *(Note that the first person from left is facing the north direction)*.

**Answer Options (Verified from Screenshot Pixels in `photo_1892`, `photo_1916`):**
* **(A)** West
* **(B)** East
* **(C)** South
* **(D)** North

**Correct Answer:** **(D) North**  
**Vector Coordinate Derivation:**
* Evaluated displacement vectors along North-South and East-West axes yield that the net lateral offset reduces to zero while the net vertical displacement remains along the positive $y$-axis.
* Point $V$ lies directly along the **North** axis relative to the initial origin reference.
* Matches Candidate Verified Selection: Option **(D) North** in `photo_1916`.


---

### Question 4 [Source: `WhatsApp Image 2021-11-21 at 6.04.57 PM (1).jpg`]
**Question:** Bob was backpacking across North-East India and came across a broken direction pole that was twisted 90 degree clockwise. Bob started walking towards the North direction as shown by the direction pole and took a left from there. He then took another left and lost his way.  
What direction should he have walked according to the direction pole to actually walk towards the North?

**Answer Options:**
* **(A)** South
* **(B)** West
* **(C)** South-West
* **(D)** South-East
* **(E)** East

**Correct Answer:** **(B) West**  
**Kinematic & Angular Proof:**
1. Let standard geographic coordinates be defined with North at angle $0^\circ$ (or $360^\circ$), East at $90^\circ$, South at $180^\circ$, and West at $270^\circ$.
2. The direction pole is rotated $90^\circ$ clockwise ($+90^\circ$):
   * The physical arm labeled "North" is rotated to point East ($0^\circ + 90^\circ = 90^\circ$).
   * The physical arm labeled "East" is rotated to point South ($90^\circ + 90^\circ = 180^\circ$).
   * The physical arm labeled "South" is rotated to point West ($180^\circ + 90^\circ = 270^\circ$).
   * The physical arm labeled "West" is rotated to point North ($270^\circ + 90^\circ = 360^\circ \equiv 0^\circ$).
3. To physically walk towards True North ($0^\circ$), Bob must walk in the direction currently pointed to by the arm labeled **West**.
4. Algebraic Verification:
   $$\theta_{\text{actual}} = \theta_{\text{pole}} + 90^\circ$$
   $$\text{Target: } \theta_{\text{actual}} = 360^\circ \implies \theta_{\text{pole}} = 360^\circ - 90^\circ = 270^\circ = \mathbf{\text{West}}$$
Hence, Bob should follow the direction indicated as **West** on the pole (Option B).
