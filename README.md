# DSA Engineering

A disciplined, pattern-driven system for mastering Data Structures & Algorithms using TypeScript.

**Not a solution dump. A system for building algorithmic thinking, problem recognition speed, and interview readiness.**

---

## Mission

Master DSA from first principles → pattern recognition → interview performance.

**Target:** 300-400 problems solved by Dec 2026. Interview-ready. Whiteboard-confident.

---

## Core Principles

1. **Concepts before problems** - Understand the data structure before solving with it
2. **Patterns over volume** - Recognition beats memorization
3. **Consistency beats intensity** - Daily practice > marathon sessions
4. **Clarity beats cleverness** - Explainable solutions only
5. **Public work compounds** - GitHub = proof of competence

---

## Repository Structure
```
dsa-engineering/
│
├── README.md                          # This file
├── PROGRESS.md                        # Weekly tracking & stats
│
├── 01-fundamentals/                   # Week 1-2: Core concepts
│   ├── big-o-notation/
│   ├── recursion/
│   └── memory-concepts/
│
├── 02-implementations/                # Week 3-8: Build from scratch
│   ├── arrays/
│   │   ├── dynamic-array.ts          # Custom implementation
│   │   ├── README.md                  # Complexity analysis
│   │   └── tests/
│   ├── hash-tables/
│   ├── linked-lists/
│   ├── stacks-queues/
│   ├── trees/
│   ├── heaps/
│   └── graphs/
│
├── 03-patterns/                       # Week 9+: Algorithmic techniques
│   ├── two-pointers/
│   ├── sliding-window/
│   ├── binary-search/
│   ├── backtracking/
│   ├── dynamic-programming/
│   └── greedy/
│
├── 04-leetcode/                       # Problems organized by pattern
│   ├── arrays-hashing/
│   │   ├── two-sum.ts
│   │   └── group-anagrams.ts
│   ├── two-pointers/
│   ├── sliding-window/
│   └── [other patterns]/
│
└── 05-meta/                           # Learning system
    ├── mistakes.md                    # Root cause analysis
    ├── review-schedule.md             # Spaced repetition tracker
    ├── pattern-index.md               # Quick reference
    └── templates/
        ├── problem-template.ts
        └── explanation-template.md
```

---

## Problem Solution Standard

Every solution must include:
```typescript
/**
 * LeetCode #3 - Longest Substring Without Repeating Characters
 * 
 * Pattern: Sliding Window (Variable Size)
 * Data Structure: Hash Set
 * 
 * Approach: Expand window with right pointer, shrink when duplicate found
 * 
 * Time: O(n) - single pass through string
 * Space: O(k) - k = size of character set
 * 
 * Key Insight: Track seen characters, shrink from left when duplicate appears
 * 
 * Edge Cases: empty string, single character, all unique, all same
 * 
 * Solved: 2025-01-23
 * Review: 2025-01-26, 2025-01-30
 */

function lengthOfLongestSubstring(s: string): number {
  // Implementation
}
```

**Required:**
- Pattern identification
- Data structure used
- Complexity analysis with reasoning
- One-sentence key insight
- Edge cases considered
- Review dates

---

## Language Policy

**Primary:** TypeScript (every problem, every implementation)

**Secondary (optional):** JavaScript, Python for comparison or speed practice

**Rule:** Never skip TypeScript. Secondary languages are bonus, not replacement.

---

## Daily Execution System

### Phase 1: Foundations (Weeks 1-8)
**Goal:** Build data structures from scratch, understand operations

**Daily (60-90 min):**
- Concept study (30 min) - video + reading
- Implementation (40 min) - code from scratch
- Testing (10 min) - verify with sample inputs
- Documentation (10 min) - README with complexity

**LeetCode:** Only on days 4-5 of each data structure (3-5 Easy problems max)

---

### Phase 2: Patterns (Weeks 9-16)
**Goal:** Apply structures, recognize patterns

**Weekdays:**
- 1 new problem (Medium preferred, Easy if learning new pattern)
- 1 review problem from spaced repetition schedule
- Commit immediately with clear message

**Weekends:**
- Recode 3 problems from memory (no looking)
- Update `mistakes.md` with root causes
- Plan next week's focus pattern

---

### Phase 3: Speed & Integration (Weeks 17+)
**Goal:** Mixed problems, interview simulation

**Daily:**
- 1-2 problems (mixed patterns)
- Time-boxed: 25 min attempt, 15 min review
- Weekly mock interview (explain solution out loud)

---

## Review System

**Spaced Repetition:**
- Day 3 after first solve
- Day 7 after second attempt  
- Day 14 after third attempt
- End of month: all problems from that pattern

**Review = Recode from blank file, no references**

Track in `05-meta/review-schedule.md`:
```markdown
## Week 4 Review Queue
- [ ] Two Sum (Jan 23 → Review Jan 26)
- [ ] Valid Parentheses (Jan 24 → Review Jan 27)
- [ ] Reverse Linked List (Jan 25 → Review Jan 28)
```

---

## Progress Tracking

### `PROGRESS.md` Structure
```markdown
# Progress Tracker

## Phase 1: Foundations (Weeks 1-8)
- [x] Big O Notation (Week 1)
- [x] Arrays (Week 2)
- [ ] Hash Tables (Week 3) - IN PROGRESS
- [ ] Linked Lists (Week 4)

## Statistics
- **Total Problems Solved:** 47
- **Easy:** 23 | **Medium:** 20 | **Hard:** 4
- **Current Streak:** 12 days
- **Implementation Complete:** Arrays, Hash Tables

## This Week (Week 3)
- Sliding Window: 6 problems
- Hash Map: 4 problems
- Key Challenge: Window shrink condition logic

## Patterns Mastered
- [x] Arrays & Hashing
- [x] Two Pointers  
- [ ] Sliding Window (6/10)
- [ ] Stack
```

---

### `mistakes.md` Structure
```markdown
# Mistakes & Lessons

## Root Cause Categories

### Off-by-One Errors
- **Problem:** Binary Search (LC 704)
- **Mistake:** Used `while (left < right)` instead of `left <= right`
- **Root Cause:** Didn't consider single-element array case
- **Fix:** Always test with `[5]` single element

### Edge Case Blindness
- **Problem:** Two Sum (LC 1)
- **Mistake:** Didn't handle duplicate values
- **Root Cause:** Only tested happy path
- **Fix:** Always test: empty, single, duplicates, negatives

### Complexity Miscalculation
- **Problem:** Contains Duplicate (LC 217)
- **Mistake:** Thought nested loop was O(n)
- **Root Cause:** Didn't count inner loop iterations
- **Fix:** Always multiply nested loop bounds
```

---

## Commit Standards

**Format:** `type(pattern): problem-name`

**Examples:**
```bash
feat(sliding-window): longest substring without repeating
impl(hash-table): custom hash table with chaining
fix(two-pointers): correct off-by-one in three sum
docs(pattern-index): add sliding window template
review(arrays): recode two sum from memory
```

**Types:**
- `feat` - New problem solved
- `impl` - Data structure implementation
- `fix` - Corrected solution
- `docs` - Documentation update
- `review` - Spaced repetition recode

---

## Public Sharing Strategy

**This repository is public by design.**

**Used for:**
- Interview preparation material
- Recruiter portfolio review  
- Peer learning & accountability
- Knowledge reinforcement through teaching

**Optional (but powerful):**
- Weekly LinkedIn post: "This week I mastered [pattern]: key insight is [one-liner]"
- Twitter/X thread: "30 days of DSA: here's what compound learning looks like"
- Blog posts: Deep dives on hard problems

---

## Rules of Engagement

1. **One data structure from scratch before solving with it**
2. **One problem per day minimum, no exceptions**
3. **25-minute rule:** Look at hints/solution if completely stuck
4. **Recode if you read solution** - understanding ≠ memorization
5. **Explain every solution out loud** - can't explain = don't understand
6. **Review > new problems** - spaced repetition is mandatory
7. **Commit immediately** - if not in Git, it didn't happen
8. **No clever code** - optimize for interview clarity, not code golf

---

## Target Outcome (End of 2026)

- ✅ 300-400 problems solved across all difficulty levels
- ✅ All core data structures implemented from scratch
- ✅ Pattern recognition in < 2 minutes
- ✅ Medium problems solved in < 30 minutes
- ✅ Confident live coding & whiteboard performance
- ✅ Public GitHub portfolio proving systematic mastery

---

## Status

🚧 **In Active Development** - Started Jan 2025

📊 **Current Phase:** Foundations (Week 3/8)

🎯 **Next Milestone:** Complete Hash Table implementation + 5 related LeetCode problems

---

## Disclaimer

This repository prioritizes **thinking quality over problem count**.

If a solution cannot be explained simply to a non-technical person, it is incomplete.

Speed without understanding is memorization. Understanding without practice is theory.

**This system builds both.**

---

*Last Updated: January 23, 2025*