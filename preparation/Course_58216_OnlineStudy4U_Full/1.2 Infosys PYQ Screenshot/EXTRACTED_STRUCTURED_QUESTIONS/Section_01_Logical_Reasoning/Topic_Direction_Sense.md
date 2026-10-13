# Section - Logical Reasoning
## Topic - Direction Sense

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
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
* $M\ \#\ N$ means '$N$ is 2 metres to the right of $M$' (East, along $+x$).
* $M\ \$\ N$ means '$N$ is 2 metres to the North of $M$' (North, along $+y$).
* $M\ *\ N$ means '$N$ is 2 metres to the left of $M$' (West, along $-x$).
* $M\ @\ N$ means '$N$ is 2 metres to the South of $M$' (South, along $-y$).

Given the navigation path:
$$T\ \$\ U\ \#\ V\ @\ W\ *\ X$$
In which direction is point **$V$ with respect to point $T$**?

**Answer Options:**
* **(A)** North-East
* **(B)** East
* **(C)** West
* **(D)** South

**Correct Answer:** **(A) North-East**  
**Cartesian Coordinate Proof & Vector Diagram:**
```text
  y (North)
    ^
    |             U (0, 2) ------------> V (2, 2)
  2 +                ^                      |
    |                |                      |
    |                | ($: +2m North)       | (@: -2m South)
    |                |                      v
  0 +------------ T (0, 0)                W (2, 0)
    +----------------+----------------------+--> x (East)
    0                1                      2
```
* **Step 1 (Fixing Origin):** Set $T$ at origin $(0, 0)$.
* **Step 2 (Path Vectors):**
  * $T\ \$\ U \implies U$ is $2\text{ m}$ North of $T \implies \mathbf{U = (0, 2)}$.
  * $U\ \#\ V \implies V$ is $2\text{ m}$ East (right) of $U \implies \mathbf{V = (0 + 2, 2) = (2, 2)}$.
* **Step 3 (Displacement Vector $\vec{TV}$):**
  * $\vec{TV} = (2 - 0)\hat{i} + (2 - 0)\hat{j} = 2\hat{i} + 2\hat{j}$.
  * Since both $x > 0$ (East) and $y > 0$ (North), point $V$ is located directly in the **North-East** quadrant from $T$.
* Matches Option **(A) North-East** with 100% precision.
