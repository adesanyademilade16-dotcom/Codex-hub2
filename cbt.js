/* --- I. DATA STRUCTURE --- */
// This is the expanded data set
const CBT_DATA = {
"MTH101": [
    
    { q: "Find the coefficient of x¹⁰ in the expansion of (2x² - 1/x)¹⁴.", options: ["3003 * 2⁶", "3003 * 2⁸", "2002 * 2⁶", "1001 * 2⁷"], ans: "3003 * 2⁶", topic: "Binomial Theorem" },
    { q: "Determine the term independent of x in (x³ + 2/x²)¹⁵.", options: ["5005 * 2⁹", "3003 * 2⁶", "5005 * 2⁶", "455 * 2¹⁰"], ans: "5005 * 2⁹", topic: "Binomial Theorem" },
    { q: "If the 4th term in the expansion of (px + 1/x)ⁿ is 5/2, and n=6, find p.", options: ["1/2", "2", "1/4", "1"], ans: "1/2", topic: "Binomial Theorem" },
    { q: "Find the middle term(s) of (x/3 + 9y)¹⁰.", options: ["61236x⁵y⁵", "30618x⁵y⁵", "15309x⁵y⁵", "252x⁵y⁵"], ans: "61236x⁵y⁵", topic: "Binomial Theorem" },
    { q: "Use Binomial Theorem to evaluate (0.99)⁸ correct to 4 decimal places.", options: ["0.9227", "0.9228", "0.9200", "0.9310"], ans: "0.9227", topic: "Binomial Theorem" },
    { q: "The ratio of the coefficients of x² and x³ in (1 + ax)⁶ is 1:2. Find a.", options: ["2", "3", "1", "4"], ans: "3", topic: "Binomial Theorem" },
    { q: "Find the coefficient of x⁴ in the expansion of (1 + x + x²)¹⁰.", options: ["615", "120", "210", "45"], ans: "615", topic: "Binomial Theorem" },
    { q: "If (1 + x)ⁿ = C₀ + C₁x + C₂x² + ... + Cₙxⁿ, find the value of C₀ + C₁ + C₂ + ... + Cₙ.", options: ["2ⁿ", "n²", "2n", "n!"], ans: "2ⁿ", topic: "Binomial Theorem" },
    { q: "Find the greatest coefficient in the expansion of (1 + x)²ⁿ.", options: ["(2n)! / (n!)²", "(2n)! / n!", "2ⁿ", "n!"], ans: "(2n)! / (n!)²", topic: "Binomial Theorem" },
    { q: "In the expansion of (1 + ax)ⁿ, the first three terms are 1 + 12x + 64x². Find n and a.", options: ["n=9, a=4/3", "n=6, a=2", "n=12, a=1", "n=8, a=1.5"], ans: "n=9, a=4/3", topic: "Binomial Theorem" },
    { q: "Find the sum of the coefficients in (5x - 4y)¹⁰⁰.", options: ["1", "0", "5¹⁰⁰", "4¹⁰⁰"], ans: "1", topic: "Binomial Theorem" },
    { q: "Find the coefficient of x⁻⁴ in (x/2 - 3/x²)¹⁰.", options: ["405/256", "405/512", "1215/256", "135/128"], ans: "1215/256", topic: "Binomial Theorem" },
    { q: "If the coefficients of x⁷ and x⁸ are equal in (2 + x/3)ⁿ, find n.", options: ["55", "53", "45", "60"], ans: "55", topic: "Binomial Theorem" },
    { q: "Expand (1 - 2x)⁻¹/² up to the term in x³.", options: ["1 + x + 3/2x² + 5/2x³", "1 - x + x² - x³", "1 + x + x² + x³", "1 + 1/2x + 3/8x²"], ans: "1 + x + 3/2x² + 5/2x³", topic: "Binomial Theorem" },
    { q: "Find the coefficient of x⁵ in (1+x)²(1+2x)⁵.", options: ["212", "192", "160", "240"], ans: "212", topic: "Binomial Theorem" },
    { q: "The coefficient of xⁿ in (1-x)⁻² is:", options: ["n + 1", "n", "n - 1", "2n"], ans: "n + 1", topic: "Binomial Theorem" },
    { q: "Find the constant term in (2x² - 1/x)⁶.", options: ["60", "15", "160", "240"], ans: "60", topic: "Binomial Theorem" },
    { q: "If n is even, the middle term of (x + a)ⁿ is:", options: ["(n/2 + 1)th term", "(n/2)th term", "((n+1)/2)th term", "None"], ans: "(n/2 + 1)th term", topic: "Binomial Theorem" },
    { q: "Calculate (√2 + 1)⁶ + (√2 - 1)⁶.", options: ["198", "99", "70", "140"], ans: "198", topic: "Binomial Theorem" },
    { q: "The term independent of x in (x + 1/x)⁴ is:", options: ["6", "4", "1", "8"], ans: "6", topic: "Binomial Theorem" },
    
      { q: "Find the remainder when f(x) = 4x³ - 2x² + 3x - 1 is divided by (2x - 1).", options: ["1/2", "1", "0", "-1/2"], ans: "1/2", topic: "Partial Fraction & Remainder Theorem" },
    { q: "If (x-2) and (x+1) are factors of x³ + ax² + bx - 2, find a and b.", options: ["a=-1, b=-1", "a=1, b=1", "a=2, b=-3", "a=-2, b=3"], ans: "a=-1, b=-1", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Express 1 / (x² - 1) in partial fractions.", options: ["1/2(x-1) - 1/2(x+1)", "1/(x-1) + 1/(x+1)", "1/2(x-1) + 1/2(x+1)", "None"], ans: "1/2(x-1) - 1/2(x+1)", topic: "Partial Fraction & Remainder Theorem" },
    { q: "A polynomial P(x) leaves remainder 3 when divided by (x-1) and remainder 5 when divided by (x-2). Find the remainder when divided by (x-1)(x-2).", options: ["2x + 1", "x + 2", "2x - 1", "3x - 2"], ans: "2x + 1", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Resolve into partial fractions: (3x + 1) / (x - 1)².", options: ["3/(x-1) + 4/(x-1)²", "3/(x-1) - 4/(x-1)²", "1/(x-1) + 3/(x-1)²", "4/(x-1) + 3/(x-1)²"], ans: "3/(x-1) + 4/(x-1)²", topic: "Partial Fraction & Remainder Theorem" },
    { q: "If f(x) = x⁴ - 2x³ + 3x² - ax + b is divisible by x² - 1, find a and b.", options: ["a=2, b=-4", "a=-2, b=4", "a=0, b=0", "a=2, b=4"], ans: "a=2, b=-4", topic: "Partial Fraction & Remainder Theorem" },
    { q: "What is the form of the partial fraction for (x+1) / (x(x²+1))?", options: ["A/x + (Bx+C)/(x²+1)", "A/x + B/(x²+1)", "A/x + B/x² + C/1", "None"], ans: "A/x + (Bx+C)/(x²+1)", topic: "Partial Fraction & Remainder Theorem" },
    { q: "When x³ + kx² + 5x + 6 is divided by (x+2), the remainder is 8. Find k.", options: ["6", "4", "2", "1"], ans: "6", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Decompose (x² + 1) / (x² - 4) into partial fractions.", options: ["1 + 5/4(x-2) - 5/4(x+2)", "5/4(x-2) + 5/4(x+2)", "1 + 5/(x-2)", "None"], ans: "1 + 5/4(x-2) - 5/4(x+2)", topic: "Partial Fraction & Remainder Theorem" },
    { q: "If f(x) has a factor (ax - b), then f(b/a) is:", options: ["0", "1", "b", "a"], ans: "0", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Find the value of 'm' if x-m is a factor of x³ - m²x + x + 2.", options: ["-2", "2", "0", "1"], ans: "-2", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Resolve 1 / (x(x+1)(x+2)).", options: ["1/2x - 1/(x+1) + 1/2(x+2)", "1/x + 1/(x+1) + 1/(x+2)", "1/2x + 1/(x+1)", "None"], ans: "1/2x - 1/(x+1) + 1/2(x+2)", topic: "Partial Fraction & Remainder Theorem" },
    { q: "If x³ + 4x² + x - 6 = (x-1)(x+2)(x+k), find k.", options: ["3", "2", "-3", "1"], ans: "3", topic: "Partial Fraction & Remainder Theorem" },
    { q: "The remainder when xⁿ + aⁿ is divided by (x+a) is 0 if n is:", options: ["Odd", "Even", "Prime", "Any integer"], ans: "Odd", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Find partial fractions of x / (x-1)³.", options: ["1/(x-1)² + 1/(x-1)³", "1/(x-1) + 1/(x-1)³", "None", "1/(x-1)²"], ans: "1/(x-1)² + 1/(x-1)³", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Divide x³ - 1 by x - 1 using remainder theorem logic.", options: ["x² + x + 1", "x² - x + 1", "x² + 1", "x² - 1"], ans: "x² + x + 1", topic: "Partial Fraction & Remainder Theorem" },
    { q: "For 3 / ((x+1)(x-2)), the numerator 'A' for (x+1) is:", options: ["-1", "1", "3", "2"], ans: "-1", topic: "Partial Fraction & Remainder Theorem" },
    { q: "If P(x) = 2x³ + x² - 5x + 2, which is a factor?", options: ["x-1", "x+1", "x-2", "x+3"], ans: "x-1", topic: "Partial Fraction & Remainder Theorem" },
    { q: "The quotient of (x² - 5x + 6) / (x - 2) is:", options: ["x - 3", "x + 3", "x - 2", "x + 2"], ans: "x - 3", topic: "Partial Fraction & Remainder Theorem" },
    { q: "Find partial fractions of 2x / (x² + 1)(x - 1).", options: ["1/(x-1) + (1-x)/(x²+1)", "1/(x-1) + 1/(x²+1)", "x/(x²+1)", "None"], ans: "1/(x-1) + (1-x)/(x²+1)", topic: "Partial Fraction & Remainder Theorem" },
    
    { q: "Find the area of a sector with radius 6cm and arc length 10cm.", options: ["30 cm²", "60 cm²", "15 cm²", "20 cm²"], ans: "30 cm²", topic: "Circular Measures" },
    { q: "Convert 225° to radians.", options: ["5π/4", "3π/4", "7π/4", "4π/3"], ans: "5π/4", topic: "Circular Measures" },
    { q: "The perimeter of a sector is 20cm and its area is 25cm². Find the radius.", options: ["5 cm", "10 cm", "4 cm", "2 cm"], ans: "5 cm", topic: "Circular Measures" },
    { q: "A pendulum of length 50cm swings through an arc of 10cm. Find the angle in radians.", options: ["0.2 rad", "5 rad", "0.5 rad", "0.1 rad"], ans: "0.2 rad", topic: "Circular Measures" },
    { q: "Find the area of a segment of a circle of radius 10cm where the central angle is 60°.", options: ["9.06 cm²", "4.33 cm²", "12.5 cm²", "5.23 cm²"], ans: "9.06 cm²", topic: "Circular Measures" },
    { q: "A wire of length 12cm is bent into an arc of a circle of radius 4cm. Find the angle at the center.", options: ["3 rad", "48 rad", "0.33 rad", "1.5 rad"], ans: "3 rad", topic: "Circular Measures" },
    { q: "The area of a circle is 100π. Find the length of an arc that subtends 2 radians.", options: ["20", "10", "40", "20π"], ans: "20", topic: "Circular Measures" },
    { q: "Find the radius of a circle in which an arc of 15cm subtends an angle of 3π/4.", options: ["20/π cm", "15/π cm", "10/π cm", "5/π cm"], ans: "20/π cm", topic: "Circular Measures" },
    { q: "Area of a sector is 12cm². If the angle is 1.5 rad, find the radius.", options: ["4 cm", "16 cm", "8 cm", "2 cm"], ans: "4 cm", topic: "Circular Measures" },
    { q: "A wheel makes 300 revolutions per minute. Find its angular velocity in rad/s.", options: ["10π", "20π", "5π", "300π"], ans: "10π", topic: "Circular Measures" },
    { q: "If s = rθ, and s=r, the angle is:", options: ["1 radian", "57.3°", "Both A and B", "90°"], ans: "Both A and B", topic: "Circular Measures" },
    { q: "Area of a sector = 1/2 r²θ. If r is doubled and θ is halved, the area:", options: ["Doubles", "Halves", "Stays same", "Quadruples"], ans: "Doubles", topic: "Circular Measures" },
    { q: "Find the distance moved by the tip of a minute hand 10cm long in 20 minutes.", options: ["20π/3 cm", "10π cm", "5π cm", "20π cm"], ans: "20π/3 cm", topic: "Circular Measures" },
    { q: "A chord of length 8cm is 3cm from the center. Find the radius.", options: ["5 cm", "4 cm", "7 cm", "6 cm"], ans: "5 cm", topic: "Circular Measures" },
    { q: "Find the area of the minor segment if r=7, θ=π/2.", options: ["14 cm²", "28 cm²", "7 cm²", "10 cm²"], ans: "14 cm²", topic: "Circular Measures" },
    { q: "Convert 1.5 radians to degrees.", options: ["85.9°", "90°", "270°", "45°"], ans: "85.9°", topic: "Circular Measures" },
    { q: "An arc of length 2π is part of a circle with radius 12. Find the central angle.", options: ["30°", "15°", "60°", "45°"], ans: "30°", topic: "Circular Measures" },
    { q: "The ratio of area of circle to area of sector with angle α is:", options: ["2π/α", "π/α", "α/2π", "1"], ans: "2π/α", topic: "Circular Measures" },
    { q: "Find the perimeter of a sector with r=8, θ=0.5.", options: ["20", "12", "4", "16"], ans: "20", topic: "Circular Measures" },
    { q: "Angular speed of the earth's rotation in rad/hr is:", options: ["π/12", "π/24", "2π", "π"], ans: "π/12", topic: "Circular Measures"},
    
{ q: "Which of the following is an irrational number?", options: ["√2", "22/7", "3.14", "√4"], ans: "√2", topic: "Number Systems" },
    { q: "The set of Rational numbers is denoted by:", options: ["Q", "Z", "N", "R"], ans: "Q", topic: "Number Systems" },
    { q: "Every terminating decimal is a/an:", options: ["Rational number", "Irrational number", "Integer", "Natural number"], ans: "Rational number", topic: "Number Systems" },
    { q: "Solve |2x - 3| < 5.", options: ["-1 < x < 4", "x < 4", "x > -1", "Empty set"], ans: "-1 < x < 4", topic: "Number Systems" },
    { q: "The additive inverse of -√5 is:", options: ["√5", "1/√5", "-1/√5", "0"], ans: "√5", topic: "Number Systems" },
    { q: "The multiplicative inverse of (2 + √3) is:", options: ["2 - √3", "2 + √3", "1", "1/2"], ans: "2 - √3", topic: "Number Systems" },
    { q: "The completeness axiom distinguishes:", options: ["R from Q", "Q from Z", "Z from N", "R from C"], ans: "R from Q", topic: "Number Systems" },
    { q: "If a < b and c < 0, then:", options: ["ac > bc", "ac < bc", "ac = bc", "None"], ans: "ac > bc", topic: "Number Systems" },
    { q: "Between any two distinct real numbers, there are ______ rational numbers.", options: ["Infinitely many", "Exactly one", "Zero", "Finite"], ans: "Infinitely many", topic: "Number Systems" },
    { q: "Is zero a rational number?", options: ["Yes", "No", "Only if it is in the numerator", "Only if it is an integer"], ans: "Yes", topic: "Number Systems" },
    { q: "Which is the smallest prime number?", options: ["2", "1", "3", "5"], ans: "2", topic: "Number Systems" },
    { q: "Express 0.333... as a fraction.", options: ["1/3", "3/10", "33/100", "1/9"], ans: "1/3", topic: "Number Systems" },
    { q: "The value of |-7| + |3| - |-4| is:", options: ["6", "14", "-1", "10"], ans: "6", topic: "Number Systems" },
    { q: "The set {1, 2, 3...} is the set of:", options: ["Natural numbers", "Whole numbers", "Integers", "Complex numbers"], ans: "Natural numbers", topic: "Number Systems" },
    { q: "Every real number is either rational or ______.", options: ["Irrational", "Complex", "Integer", "Imaginary"], ans: "Irrational", topic: "Number Systems" },
    { q: "Solve |x + 2| = |2x - 1|.", options: ["3, -1/3", "1, -2", "0, 1", "3, 1"], ans: "3, -1/3", topic: "Number Systems" },
    { q: "What is the square root of a negative real number?", options: ["Imaginary number", "Real number", "Rational number", "Zero"], ans: "Imaginary number", topic: "Number Systems" },
    { q: "The property a(b+c) = ab + ac is called:", options: ["Distributive", "Commutative", "Associative", "Identity"], ans: "Distributive", topic: "Number Systems" },
    { q: "π is an example of a ______ number.", options: ["Transcendental", "Algebraic", "Rational", "Integer"], ans: "Transcendental", topic: "Number Systems" },
    { q: "The union of the set of rational and irrational numbers is:", options: ["Real numbers", "Complex numbers", "Integers", "Whole numbers"], ans: "Real numbers", topic: "Number Systems" },
    // --- 10 Questions for Set Theory ---
    
    
  {
    q: "In a class of 120 students, 65 study Mathematics, 70 study Physics and 45 study both Mathematics and Physics. How many students study neither Mathematics nor Physics?",
    options: ["30", "25", "20", "15"],
    ans: "30",
    topic: "Set Theory"
  },
  {
    q: "If A = {x : x is an integer, −3 ≤ x ≤ 5} and B = {x : x is an even integer}, find n(A ∩ B).",
    options: ["4", "5", "6", "7"],
    ans: "4",
    topic: "Set Theory"
  },
  {
    q: "In a survey of 200 people, 120 like football, 90 like basketball and 50 like both. How many like football only?",
    options: ["70", "50", "30", "40"],
    ans: "70",
    topic: "Set Theory"
  },
  {
    q: "If U = {1,2,3,…,20} and A = {multiples of 3}, find n(A′).",
    options: ["13", "14", "12", "15"],
    ans: "14",
    topic: "Set Theory"
  },
  {
    q: "If n(A) = 18, n(B) = 25 and n(A ∪ B) = 35, find n(A ∩ B).",
    options: ["8", "7", "6", "5"],
    ans: "8",
    topic: "Set Theory"
  },
  {
    q: "Given A = {x : x² − 9 = 0} and B = {−3, 3, 5}, find A ∩ B.",
    options: ["{−3, 3}", "{3}", "{−3}", "{5}"],
    ans: "{−3, 3}",
    topic: "Set Theory"
  },
  {
    q: "If A ⊂ B and n(A) = 7, n(B) = 15, how many subsets does B have that are not subsets of A?",
    options: ["32768", "32640", "128", "256"],
    ans: "32640",
    topic: "Set Theory"
  },
  {
    q: "In a class, 40 students offer Biology, 35 offer Chemistry and 10 offer neither. If the total number of students is 60, how many offer both Biology and Chemistry?",
    options: ["15", "10", "5", "20"],
    ans: "15",
    topic: "Set Theory"
  },
  {
    q: "If A = {1,2,3,4,5} and B = {3,4,5,6,7}, find A − B.",
    options: ["{1,2}", "{3,4}", "{6,7}", "{1,2,3}"],
    ans: "{1,2}",
    topic: "Set Theory"
  },
  {
    q: "How many elements are in the power set of A = {a,b,c,d,e}?",
    options: ["10", "16", "32", "64"],
    ans: "32",
    topic: "Set Theory"
  },
  {
    q: "If n(U) = 50, n(A) = 28 and n(A′) = x, find x.",
    options: ["22", "28", "50", "14"],
    ans: "22",
    topic: "Set Theory"
  },
  {
    q: "In a group of students, 55 like rice, 45 like beans and 20 like both. How many like beans only?",
    options: ["25", "20", "35", "30"],
    ans: "25",
    topic: "Set Theory"
  },
  {
    q: "If A and B are disjoint sets such that n(A) = 9 and n(B) = 11, find n(A ∪ B).",
    options: ["20", "19", "18", "11"],
    ans: "20",
    topic: "Set Theory"
  },
  {
    q: "If A = {x : 1 ≤ x ≤ 10, x ∈ ℕ} and B = {prime numbers less than 10}, find n(A ∪ B).",
    options: ["10", "9", "8", "7"],
    ans: "10",
    topic: "Set Theory"
  },
  {
    q: "How many subsets of the set {1,2,3,4,5,6} contain exactly 3 elements?",
    options: ["20", "15", "10", "6"],
    ans: "20",
    topic: "Set Theory"
  },
  {
    q: "If n(A ∪ B) = 40, n(A) = 22 and n(B ∩ A) = 8, find n(B).",
    options: ["26", "24", "20", "18"],
    ans: "26",
    topic: "Set Theory"
  },
  {
    q: "Which of the following statements is TRUE?",
    options: [
      "Every set has exactly two complements",
      "The empty set has one element",
      "The universal set has no complement",
      "The complement of a complement of a set is the set itself"
    ],
    ans: "The complement of a complement of a set is the set itself",
    topic: "Set Theory"
  },
  {
    q: "If A = {1,3,5,7} and B = {2,4,6,8}, then A ∩ B equals:",
    options: ["{1,2}", "∅", "{3,5}", "{2,4}"],
    ans: "∅",
    topic: "Set Theory"
  },
  {
    q: "In a school, 90 students play football, 60 play volleyball and 30 play both. How many play at least one of the games?",
    options: ["120", "150", "180", "90"],
    ans: "120",
    topic: "Set Theory"
  },
  {
    q: "If A has 4 elements, how many proper subsets does A have?",
    options: ["15", "14", "16", "8"],
    ans: "14",
    topic: "Set Theory"
  },

    {
        q: "Let A = {1, 2} and B = {3, 4}. Find the number of elements in the Power Set of (A × B).",
        options: ["16", "8", "4", "32"],
        ans: "16",
        topic: "Set Theory"
    },
    {
        q: "If A and B are two sets such that n(A - B) = 15, n(B - A) = 20, and n(A ∩ B) = 5. Find n(A ∪ B).",
        options: ["40", "35", "45", "30"],
        ans: "40",
        topic: "Set Theory"
    },
    {
        q: "Which of the following is equivalent to A - (B ∪ C)?",
        options: ["(A - B) ∩ (A - C)", "(A - B) ∪ (A - C)", "A ∩ B' ∩ C", "A ∪ B' ∪ C'"],
        ans: "(A - B) ∩ (A - C)",
        topic: "Set Theory"
    },
    {
        q: "In a class of 100 students, 45 like Math, 35 like Science. If 20 like neither, find the percentage of students who like BOTH.",
        options: ["0%", "10%", "20%", "5%"],
        ans: "0%",
        topic: "Set Theory"
    },
    {
        q: "If the universal set U has 1000 elements, and n(A)=400, n(B)=500, n(A ∩ B)=150. Find n(A' ∩ B').",
        options: ["250", "750", "150", "350"],
        ans: "250",
        topic: "Set Theory"
    },
    {
        q: "The set of all irrational numbers between 1 and 2 is:",
        options: ["Uncountably Infinite", "Countably Infinite", "Finite", "Empty"],
        ans: "Uncountably Infinite",
        topic: "Set Theory"
    },
    {
        q: "If A = {x : x = 2n, n ∈ Z} and B = {x : x = 3n, n ∈ Z}, what is A ∩ B?",
        options: ["{x : x = 6n, n ∈ Z}", "{x : x = 5n, n ∈ Z}", "{x : x = n, n ∈ Z}", "Empty Set"],
        ans: "{x : x = 6n, n ∈ Z}",
        topic: "Set Theory"
    },
    {
        q: "Find the number of non-empty subsets of a set containing 8 elements.",
        options: ["255", "256", "127", "128"],
        ans: "255",
        topic: "Set Theory"
    },
    {
        q: "For any two sets A and B, A ∩ (A ∪ B)' is:",
        options: ["Empty Set", "A", "B", "U"],
        ans: "Empty Set",
        topic: "Set Theory"
    },
    {
        q: "If A Δ B = Empty Set, what can be concluded about A and B?",
        options: ["A = B", "A ∩ B = Empty Set", "A ∪ B = U", "A ⊂ B"],
        ans: "A = B",
        topic: "Set Theory"
    },
    {
        q: "What is the cardinality of the set of all subsets of an empty set?",
        options: ["1", "0", "Undefined", "Infinite"],
        ans: "1",
        topic: "Set Theory"
    },
    {
        q: "If n(A) = p and n(B) = q, what is the maximum possible number of elements in A ∪ B?",
        options: ["p + q", "max(p, q)", "pq", "p + q - 1"],
        ans: "p + q",
        topic: "Set Theory"
    },
    {
        q: "Simplify: B ∪ (A ∩ B') ∪ (A' ∩ B')",
        options: ["U", "A ∪ B", "A' ∪ B'", "Empty Set"],
        ans: "U",
        topic: "Set Theory"
    },
    {
        q: "If A ∩ B = A ∩ C and A ∪ B = A ∪ C, then:",
        options: ["B = C", "A = B", "A = C", "A = B = C"],
        ans: "B = C",
        topic: "Set Theory"
    },
    {
        q: "How many relations can be defined from set A (3 elements) to set B (2 elements)?",
        options: ["64", "6", "32", "9"],
        ans: "64",
        topic: "Set Theory"
    },
    {
        q: "Find the number of elements in (A × B) ∩ (B × A) if A = {1, 2} and B = {2, 3}.",
        options: ["1", "2", "4", "0"],
        ans: "1",
        topic: "Set Theory"
    },
    {
        q: "Which of the following describes a 'Partition' of a set S?",
        options: ["A collection of disjoint non-empty subsets whose union is S", "Any collection of subsets of S", "A collection of subsets that overlap", "The power set of S"],
        ans: "A collection of disjoint non-empty subsets whose union is S",
        topic: "Set Theory"
    },
    {
        q: "Given A = {1, 2, 3}, how many reflexive relations are there on A?",
        options: ["64", "512", "8", "16"],
        ans: "64",
        topic: "Set Theory"
    },
    {
        q: "If A ∪ B = A ∩ B, then:",
        options: ["A = B", "A is empty", "B is empty", "A ⊂ B"],
        ans: "A = B",
        topic: "Set Theory"
    },
    {
        q: "Let f: A -> B be a function. If f is both injective and surjective, the set A and B must be:",
        options: ["Equinumerous (same cardinality)", "Infinite", "Disjoint", "Finite"],
        ans: "Equinumerous (same cardinality)",
        topic: "Set Theory"
    },

    {
        q: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find the cardinality of A  intersection  B.",
        options: ["1", "2", "3", "4"],
        ans: "2",
        topic: "Set Theory"
    },
    {
        q: "The set of all integers is a subset of the set of all:",
        options: ["Natural numbers", "Rational numbers", "Irrational numbers", "Whole numbers"],
        ans: "Rational numbers",
        topic: "Set Theory"
    },
    {
        q: "Given U = {1, 2, ..., 10} and A = {2, 4, 6, 8, 10}, find A^c.",
        options: ["{1, 3, 5, 7, 9}", "{1, 2, 3}", "{5, 7, 9}", "{2, 4, 6}"],
        ans: "{1, 3, 5, 7, 9}",
        topic: "Set Theory"
    },
    {
        q: "Which symbol denotes a proper subset?",
        options: [" subset of ", " subset of eq", " element of ", " union "],
        ans: " subset of ",
        topic: "Set Theory"
    },
    {
        q: "If P has 5 elements, how many subsets does P have?",
        options: ["16", "25", "32", "64"],
        ans: "32",
        topic: "Set Theory"
    },
    {
        q: "What is the result of A  union  A?",
        options: [" empty set ", "A^c", "U", "A"],
        ans: "A",
        topic: "Set Theory"
    },
    {
        q: "In a Venn diagram, the overlapping region of two circles represents the:",
        options: ["Union", "Complement", "Intersection", "Difference"],
        ans: "Intersection",
        topic: "Set Theory"
    },
    
    
    {
        q: "If A = {a, b, c} and B = {d, e}, what is A  x  B?",
        options: ["{(a, d), (b, e)}", "A set with 5 elements", "A set with 6 elements", "{(a, d), (a, e), (b, d), (b, e), (c, d)} "],
        ans: "A set with 6 elements",
        topic: "Set Theory"
    },
    {
        q: "The empty set is a subset of every set.",
        options: ["True", "False"],
        ans: "True",
        topic: "Set Theory"
    },
    {
        q: "If n(A)=10, n(B)=8, and n(A  intersection  B)=3, find n(A  union  B).",
        options: ["15", "18", "21", "23"],
        ans: "15",
        topic: "Set Theory"
    },
    
    // --- 10 Questions for Number Systems ---
    {
        q: "Which of the following is an irrational number?",
        options: ["sqrt(4)", "1/3", "0.333...", " pi "],
        ans: " pi ",
        topic: "Number Systems"
    },
    {
        q: "Convert the binary number 1011_2 to base 10.",
        options: ["10", "11", "12", "13"],
        ans: "11",
        topic: "Number Systems"
    },
    {
        q: "What is the remainder when 23 is divided by 5?",
        options: ["1", "2", "3", "4"],
        ans: "3",
        topic: "Number Systems"
    },
    {
        q: "Simplify the expression 3^2 + 4^0.",
        options: ["7", "9", "10", "13"],
        ans: "10",
        topic: "Number Systems"
    },
    {
        q: "The set of whole numbers includes:",
        options: ["Negative integers", "Zero and positive integers", "Decimals", "Only positive integers"],
        ans: "Zero and positive integers",
        topic: "Number Systems"
    },
    {
        q: "What is the square root of 144?",
        options: ["11", "12", "14", "16"],
        ans: "12",
        topic: "Number Systems"
    },
    {
        q: "The product of two rational numbers is always:",
        options: ["Irrational", "Integer", "Rational", "Complex"],
        ans: "Rational",
        topic: "Number Systems"
    },
    {
        q: "Convert 0.625 to a fraction.",
        options: ["3/5", "5/8", "1/2", "7/10"],
        ans: "5/8",
        topic: "Number Systems"
    },
    {
        q: "Which property is shown: a + (b + c) = (a + b) + c?",
        options: ["Commutative", "Associative", "Distributive", "Identity"],
        ans: "Associative",
        topic: "Number Systems"
    },
    {
        q: "A number that can be expressed as a fraction p/q, where p and q are integers and q \\neq 0 is a:",
        options: ["Prime number", "Rational number", "Odd number", "Natural number"],
        ans: "Rational number",
        topic: "Number Systems"
    },

    // --- 10 Questions for Mathematical Induction ---
    {
        q: "The first step in mathematical induction is the basis step, which verifies the statement for n=:",
        options: ["n-1", "k", "1", "k+1"],
        ans: "1",
        topic: "Mathematical Induction"
    },
    {
        q: "The induction hypothesis assumes the statement is true for an arbitrary integer n=k, where k \\ge:",
        options: ["0", "1", "2", "-1"],
        ans: "1",
        topic: "Mathematical Induction"
    },
    {
        q: "The inductive step proves the statement is true for n=:",
        options: ["k", "k+1", "n-1", "n"],
        ans: "k+1",
        topic: "Mathematical Induction"
    },
    {
        q: "Mathematical Induction is used to prove statements about:",
        options: ["Real numbers", "Complex numbers", "Positive integers", "Functions"],
        ans: "Positive integers",
        topic: "Mathematical Induction"
    },
    {
        q: "Which method is NOT a formal proof technique?",
        options: ["Proof by Induction", "Proof by Contradiction", "Proof by Authority", "Direct Proof"],
        ans: "Proof by Authority",
        topic: "Mathematical Induction"
    },
    {
        q: "The principle of mathematical induction is equivalent to the well-ordering principle.",
        options: ["True", "False"],
        ans: "True",
        topic: "Mathematical Induction"
    },
    {
        q: "The formula for the sum of the first n positive integers is:",
        options: ["n^2", "n(n+1)", "n(n+1)/2", "n^2(n+1)/4"],
        ans: "n(n+1)/2",
        topic: "Mathematical Induction"
    },
    {
        q: "In a strong induction proof, what is assumed true in the inductive hypothesis?",
        options: ["Only P(k)", "Only P(1)", "P(1), P(2), ..., P(k)", "P(k+1)"],
        ans: "P(1), P(2), ..., P(k)",
        topic: "Mathematical Induction"
    },
    {
        q: "If the basis step fails, the statement is always false.",
        options: ["True", "False"],
        ans: "False",
        topic: "Mathematical Induction"
    },
    {
        q: "What is the minimum starting value for n often used in induction proofs?",
        options: ["0", "1", "2", "Any integer"],
        ans: "1",
        topic: "Mathematical Induction"
    },

    // --- 10 Questions for Sequences & Series ---
    {
        q: "Find the 5th term of the arithmetic sequence 3, 7, 11, ...",
        options: ["15", "17", "19", "21"],
        ans: "19",
        topic: "Sequences & Series"
    },
    {
        q: "What is the common ratio of the geometric sequence 2, 6, 18, ...?",
        options: ["2", "3", "4", "6"],
        ans: "3",
        topic: "Sequences & Series"
    },
    {
        q: "The sum of an infinite geometric series converges if the absolute value of the common ratio (|r|) is:",
        options: ["|r| > 1", "|r| < 1", "|r| = 1", "|r| \\ge 1"],
        ans: "|r| < 1",
        topic: "Sequences & Series"
    },
    {
        q: "What is the formula for the n-th term of an arithmetic sequence?",
        options: ["a_n = a_1 * r^{n-1}", "a_n = a_1 + (n-1)d", "S_n = n/2(a_1+a_n)", "S_n = a_1/1-r"],
        ans: "a_n = a_1 + (n-1)d",
        topic: "Sequences & Series"
    },
    {
        q: "Calculate the sum of the first 4 terms of the sequence given by a_n = 2n + 1.",
        options: ["16", "20", "24", "28"],
        ans: "24",
        topic: "Sequences & Series"
    },
    {
        q: "In a geometric sequence, the ratio of any term to its preceding term is constant. This is called the:",
        options: ["Common difference", "Common ratio", "Term value", "Constant sum"],
        ans: "Common ratio",
        topic: "Sequences & Series"
    },
    {
        q: "Which of the following is an example of a Fibonacci sequence?",
        options: ["1, 2, 4, 8, ...", "1, 1, 2, 3, 5, 8, ...", "5, 10, 15, 20, ...", "2, 4, 6, 8, ..."],
        ans: "1, 1, 2, 3, 5, 8, ...",
        topic: "Sequences & Series"
    },
    {
        q: "Find the sum of the series \\sum_{n=1}^{3} (2n-1).",
        options: ["6", "9", "12", "15"],
        ans: "9",
        topic: "Sequences & Series"
    },
    {
        q: "The difference between consecutive terms in an arithmetic sequence is called the:",
        options: ["Common difference", "Common ratio", "Arithmetic mean", "Difference constant"],
        ans: "Common difference",
        topic: "Sequences & Series"
    },
    {
        q: "If the first term of a GP is 1 and the common ratio is 2, what is the 4th term?",
        options: ["4", "6", "8", "16"],
        ans: "8",
        topic: "Sequences & Series"
    },

  {
    q: "If α and β are the roots of the equation x² − 5x + 6 = 0, find α + β.",
    options: ["6", "5", "−5", "11"],
    ans: "5",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are the roots of x² − 7x + 10 = 0, find αβ.",
    options: ["10", "7", "17", "−10"],
    ans: "10",
    topic: "Quadratic Equations"
  },
  {
    q: "Given that α and β are the roots of 2x² − 3x − 5 = 0, find α + β.",
    options: ["3/2", "−3/2", "5/2", "−5/2"],
    ans: "3/2",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are the roots of x² + 4x + 1 = 0, find α² + β².",
    options: ["14", "12", "10", "16"],
    ans: "14",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are the roots of 3x² − 5x + 2 = 0, find 1/α + 1/β.",
    options: ["5/2", "2/5", "5/3", "3/5"],
    ans: "5/2",
    topic: "Quadratic Equations"
  },
  {
    q: "Find the quadratic equation whose roots are 2 and −3.",
    options: [
      "x² + x − 6 = 0",
      "x² − x − 6 = 0",
      "x² + x + 6 = 0",
      "x² − x + 6 = 0"
    ],
    ans: "x² + x − 6 = 0",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are the roots of x² − 4x + 1 = 0, find α³ + β³.",
    options: ["52", "28", "16", "64"],
    ans: "52",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are roots of x² + px + 9 = 0 and α = 3β, find p.",
    options: ["−6", "6", "−12", "12"],
    ans: "−6",
    topic: "Quadratic Equations"
  },
  {
    q: "If the roots of x² + 6x + k = 0 are equal, find k.",
    options: ["9", "18", "36", "6"],
    ans: "9",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are roots of x² − 3x − 1 = 0, find (α − β)².",
    options: ["13", "5", "9", "7"],
    ans: "13",
    topic: "Quadratic Equations"
  },
  {
    q: "Find the quadratic equation whose roots are the reciprocals of the roots of x² − 5x + 2 = 0.",
    options: [
      "2x² − 5x + 1 = 0",
      "x² − 5x + 2 = 0",
      "2x² + 5x + 1 = 0",
      "x² + 5x + 2 = 0"
    ],
    ans: "2x² − 5x + 1 = 0",
    topic: "Quadratic Equations"
  },
  {
    q: "If α + β = 4 and αβ = −5, find the quadratic equation.",
    options: [
      "x² − 4x − 5 = 0",
      "x² + 4x − 5 = 0",
      "x² − 4x + 5 = 0",
      "x² + 4x + 5 = 0"
    ],
    ans: "x² − 4x − 5 = 0",
    topic: "Quadratic Equations"
  },
  {
    q: "If one root of 2x² + kx + 8 = 0 is double the other, find k.",
    options: ["±4", "±8", "±6", "±10"],
    ans: "±4",
    topic: "Quadratic Equations"
  },
  {
    q: "For what value of m will the equation x² + 2mx + (m − 3) = 0 have equal roots?",
    options: ["4", "3", "−3", "6"],
    ans: "4",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are the roots of x² − x − 1 = 0, find α/β + β/α.",
    options: ["3", "1", "−3", "5"],
    ans: "3",
    topic: "Quadratic Equations"
  },
  {
    q: "The sum of the roots of ax² + 7x + 10 = 0 is equal to the product of its roots. Find a.",
    options: ["2", "5", "7", "10"],
    ans: "5",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are roots of x² + px + q = 0, which of the following represents α²β + αβ²?",
    options: ["pq", "p²q", "−pq", "q²"],
    ans: "pq",
    topic: "Quadratic Equations"
  },
  {
    q: "If the roots of 3x² − 2x + k = 0 are real and equal, find k.",
    options: ["1/3", "1", "2/3", "4/3"],
    ans: "1/3",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are roots of x² − 6x + 5 = 0, find the roots of the equation whose roots are α + 1 and β + 1.",
    options: [
      "x² − 8x + 12 = 0",
      "x² − 6x + 6 = 0",
      "x² − 8x + 10 = 0",
      "x² − 7x + 6 = 0"
    ],
    ans: "x² − 8x + 12 = 0",
    topic: "Quadratic Equations"
  },
  {
    q: "If α and β are roots of x² − 2x − 7 = 0, find α² + β² − αβ.",
    options: ["18", "14", "21", "11"],
    ans: "18",
    topic: "Quadratic Equations"
  },

    {
        q: "Find the roots of the equation x^2 - 5x + 6 = 0.",
        options: ["x=2, x=3", "x=-2, x=3", "x=-2, x=-3", "x=1, x=6"],
        ans: "x=2, x=3",
        topic: "Quadratic Equations"
    },
    {
        q: "The discriminant (\\Delta) of a quadratic equation ax^2+bx+c=0 is given by:",
        options: ["b^2 - 4ac", "4ac - b^2", "-b/2a", "b^2 + 4ac"],
        ans: "b^2 - 4ac",
        topic: "Quadratic Equations"
    },
    {
        q: "If the discriminant (\\Delta) is zero, the quadratic equation has:",
        options: ["No real roots", "Two distinct real roots", "One repeated real root", "Complex roots"],
        ans: "One repeated real root",
        topic: "Quadratic Equations"
    },
    {
        q: "What is the vertex of the parabola y = (x-2)^2 + 3?",
        options: ["(2, 3)", "(-2, 3)", "(3, 2)", "(-3, 2)"],
        ans: "(2, 3)",
        topic: "Quadratic Equations"
    },
    {
        q: "For the equation 2x^2 - 4x - 1 = 0, what is the sum of the roots?",
        options: ["-2", "2", "-4", "4"],
        ans: "2",
        topic: "Quadratic Equations"
    },
    {
        q: "The standard form of a quadratic equation is:",
        options: ["ax + by + c = 0", "ax^2 + bx + c = 0", "ax^3 + bx^2 + c = 0", "x^2 = c"],
        ans: "ax^2 + bx + c = 0",
        topic: "Quadratic Equations"
    },
    {
        q: "Which method is not typically used to solve quadratic equations?",
        options: ["Factoring", "Quadratic formula", "Completing the square", "Long division"],
        ans: "Long division",
        topic: "Quadratic Equations"
    },
    {
        q: "The roots of x^2 + 9 = 0 are:",
        options: ["3, -3", "9, -9", "3i, -3i", "No solutions"],
        ans: "3i, -3i",
        topic: "Quadratic Equations"
    },
    {
        q: "The quadratic formula is x = :",
        options: ["\\frac{b \\pm sqrt(b^2 - 4ac)}{2a}", "\\frac{-b \\pm sqrt(b^2 - 4ac)}{2a}", "2a/-b \\pm sqrt(b^2 - 4ac)", "-b/2a"],
        ans: "\\frac{-b \\pm sqrt(b^2 - 4ac)}{2a}",
        topic: "Quadratic Equations"
    },
    {
        q: "If the product of the roots of 3x^2 + 5x + k = 0 is 2/3, find k.",
        options: ["1", "2", "3", "4"],
        ans: "2",
        topic: "Quadratic Equations"
    },
  
   {
        q: "Express the complex number z = 1 + i in exponential form.",
        options: ["√2 e^{iπ/4}", "2 e^{iπ/4}", "√2 e^{iπ/2}", "e^{iπ/4}"],
        ans: "√2 e^{iπ/4}",
        topic: "Complex Numbers"
    },
    {
        q: "Convert z = -3 + 3i to exponential form.",
        options: ["3√2 e^{i3π/4}", "3√2 e^{iπ/4}", "6 e^{i3π/4}", "3 e^{i5π/4}"],
        ans: "3√2 e^{i3π/4}",
        topic: "Complex Numbers"
    },
    {
        q: "Write z = 4(cos 60° + i sin 60°) in exponential form.",
        options: ["4 e^{iπ/3}", "4 e^{iπ/6}", "2 e^{iπ/3}", "4 e^{iπ/2}"],
        ans: "4 e^{iπ/3}",
        topic: "Complex Numbers"
    },
    {
        q: "Convert z = 5(cos π/3 + i sin π/3) to exponential form.",
        options: ["5 e^{iπ/3}", "5 e^{iπ/6}", "e^{i5π/3}", "5 e^{i2π/3}"],
        ans: "5 e^{iπ/3}",
        topic: "Complex Numbers"
    },
    {
        q: "Write the exponential form of a complex number with modulus 6 and argument 90°.",
        options: ["6 e^{iπ/2}", "6 e^{iπ}", "6 e^{i3π/2}", "6 e^{i0}"],
        ans: "6 e^{iπ/2}",
        topic: "Complex Numbers"
    },
    {
        q: "If z = 7e^{iπ/6}, express it in a + bi form.",
        options: ["(7√3)/2 + 3.5i", "3.5 + (7√3)/2 i", "7 + 7i", "√3 + i"],
        ans: "(7√3)/2 + 3.5i",
        topic: "Complex Numbers"
    },
    {
        q: "Find the exponential form of z = 3 - 3√3i.",
        options: ["6 e^{-iπ/3}", "6 e^{iπ/3}", "6 e^{i5π/3}", "Both A and C are correct"],
        ans: "Both A and C are correct",
        topic: "Complex Numbers"
    },
    {
        q: "Using De Moivre's Theorem, find (1 + i)⁸.",
        options: ["16", "16i", "32", "64"],
        ans: "16",
        topic: "Complex Numbers"
    },
    {
        q: "What is the value of e^{iπ} + 1?",
        options: ["0", "1", "2i", "-1"],
        ans: "0",
        topic: "Complex Numbers"
    },
    {
        q: "The product of z1 = 2e^{iπ/6} and z2 = 3e^{iπ/3} is:",
        options: ["6e^{iπ/2}", "6e^{iπ/18}", "5e^{iπ/2}", "6e^{iπ/4}"],
        ans: "6e^{iπ/2}",
        topic: "Complex Numbers"
    },
    {
        q: "Simplify (e^{iθ} + e^{-iθ}) / 2.",
        options: ["cos θ", "sin θ", "i sin θ", "tan θ"],
        ans: "cos θ",
        topic: "Complex Numbers"
    },
    {
        q: "Find the cube roots of unity in exponential form.",
        options: ["1, e^{i2π/3}, e^{i4π/3}", "1, e^{iπ/3}, e^{i2π/3}", "1, e^{iπ/2}, e^{iπ}", "e^{iπ/3}, e^{iπ}, e^{i2π}"],
        ans: "1, e^{i2π/3}, e^{i4π/3}",
        topic: "Complex Numbers"
    },
    {
        q: "If z = r(cos θ + i sin θ), then z⁻¹ is:",
        options: ["(1/r)e^{-iθ}", "re^{-iθ}", "(1/r)e^{iθ}", "-re^{iθ}"],
        ans: "(1/r)e^{-iθ}",
        topic: "Complex Numbers"
    },
    {
        q: "Express z = -5 in exponential form.",
        options: ["5 e^{iπ}", "5 e^{i0}", "-5 e^{iπ}", "5 e^{iπ/2}"],
        ans: "5 e^{iπ}",
        topic: "Complex Numbers"
    },
    {
        q: "Calculate the modulus of z = e^{3 + 4i}.",
        options: ["e³", "e⁴", "5", "e⁵"],
        ans: "e³",
        topic: "Complex Numbers"
    },
    {
        q: "The argument of the complex number z = e^{i²} is:",
        options: ["-1 radian", "1 radian", "i radians", "0"],
        ans: "-1 radian",
        topic: "Complex Numbers"
    },
    {
        q: "Convert z = 2i to exponential form.",
        options: ["2 e^{iπ/2}", "2 e^{iπ}", "2 e^{i3π/2}", "e^{iπ/2}"],
        ans: "2 e^{iπ/2}",
        topic: "Complex Numbers"
    },
    {
        q: "If z = √3 + i, find z⁶.",
        options: ["-64", "64", "64i", "-64i"],
        ans: "-64",
        topic: "Complex Numbers"
    },
    {
        q: "Evaluate |e^{iθ}| for any real θ.",
        options: ["1", "θ", "cos θ", "0"],
        ans: "1",
        topic: "Complex Numbers"
    },
    {
        q: "The square root of i is:",
        options: ["e^{iπ/4}", "e^{iπ/2}", "i", "±e^{iπ/4}"],
        ans: "±e^{iπ/4}",
        topic: "Complex Numbers"
    },

  {
        q: "Simplify the expression i^{10}.",
        options: ["i", "-i", "1", "-1"],
        ans: "-1",
        topic: "Complex Numbers"
    },
    {
        q: "What is the conjugate of the complex number 3 + 4i?",
        options: ["-3 + 4i", "3 - 4i", "4 + 3i", "3 + 4i"],
        ans: "3 - 4i",
        topic: "Complex Numbers"
    },
    {
        q: "Calculate (2 + i) + (3 - 5i).",
        options: ["5 - 4i", "5 + 6i", "1 - 4i", "5"],
        ans: "5 - 4i",
        topic: "Complex Numbers"
    },
    {
        q: "The modulus of a complex number z = x + yi is given by:",
        options: ["x - yi", "sqrt(x^2 + y^2)", "x^2 + y^2", "x + y"],
        ans: "sqrt(x^2 + y^2)",
        topic: "Complex Numbers"
    },
    {
        q: "Convert the complex number i to polar form.",
        options: ["1(\\cos 0 + i \\sin 0)", "1(\\cos 90 + i \\sin 90)", "1(\\cos 180 + i \\sin 180)", "1(\\cos 270 + i \\sin 270)"],
        ans: "1(\\cos 90 + i \\sin 90)",
        topic: "Complex Numbers"
    },
    {
        q: "The complex number a + bi lies on the imaginary axis if:",
        options: ["a=0", "b=0", "a=b", "a \\neq 0 and b \\neq 0"],
        ans: "a=0",
        topic: "Complex Numbers"
    },
    {
        q: "The value of i^2 is:",
        options: ["-1", "1", "i", "-i"],
        ans: "-1",
        topic: "Complex Numbers"
    },
    {
        q: "Find the product of (2 + i) and (2 - i).",
        options: ["3", "5", "4 - i^2", "2 - 4i"],
        ans: "5",
        topic: "Complex Numbers"
    },
    {
        q: "The argument (angle) of z = -1 is:",
        options: ["0^{ degrees}", "90^{ degrees}", "180^{ degrees}", "270^{ degrees}"],
        ans: "180^{ degrees}",
        topic: "Complex Numbers"
    },
    {
        q: "The real part of z = 5i - 7 is:",
        options: ["5", "-7", "5i", "7"],
        ans: "-7",
        topic: "Complex Numbers"
    },

    // --- 10 Questions for Trigonometry ---
    
  {
    q: "Evaluate sin 30° + cos 60°.",
    options: ["1", "1/2", "√3", "0"],
    ans: "1",
    topic: "Trigonometry"
  },
  {
    q: "Find the value of tan 45° × sin 30°.",
    options: ["1/2", "1", "√3/2", "0"],
    ans: "1/2",
    topic: "Trigonometry"
  },
  {
    q: "Simplify: sin² 45° + cos² 45°.",
    options: ["1", "0", "1/2", "√2"],
    ans: "1",
    topic: "Trigonometry"
  },
  {
    q: "If sin θ = 1/2 and θ is acute, find cos θ.",
    options: ["√3/2", "1/2", "√2/2", "1"],
    ans: "√3/2",
    topic: "Trigonometry"
  },
  {
    q: "Evaluate tan 60° − sin 30°.",
    options: ["√3 − 1/2", "1", "√3/2", "1/2"],
    ans: "√3 − 1/2",
    topic: "Trigonometry"
  },
  {
    q: "Simplify: (1 − tan² 45°) / (1 + tan² 45°).",
    options: ["0", "1", "−1", "2"],
    ans: "0",
    topic: "Trigonometry"
  },
  {
    q: "Find the value of sin 60° cos 30° + sin 30° cos 60°.",
    options: ["1", "√3/2", "1/2", "0"],
    ans: "1",
    topic: "Trigonometry"
  },
  {
    q: "If tan θ = √3 and 0° < θ < 90°, find θ.",
    options: ["30°", "45°", "60°", "90°"],
    ans: "60°",
    topic: "Trigonometry"
  },
  {
    q: "Simplify: 1 + tan² 30°.",
    options: ["4/3", "1/3", "3", "2"],
    ans: "4/3",
    topic: "Trigonometry"
  },
  {
    q: "Evaluate: sin 90° − cos 0°.",
    options: ["0", "1", "−1", "2"],
    ans: "0",
    topic: "Trigonometry"
  },
  {
    q: "If sin θ = 3/5, find tan θ.",
    options: ["3/4", "4/3", "5/3", "3/5"],
    ans: "3/4",
    topic: "Trigonometry"
  },
  {
    q: "Simplify: (sin 45° + cos 45°)².",
    options: ["2", "1", "√2", "4"],
    ans: "2",
    topic: "Trigonometry"
  },
  {
    q: "Evaluate: cos 60° / sin 30°.",
    options: ["1", "2", "1/2", "0"],
    ans: "1",
    topic: "Trigonometry"
  },
  {
    q: "Which of the following is equal to sec θ?",
    options: ["1/cos θ", "1/sin θ", "sin θ/cos θ", "cos θ/sin θ"],
    ans: "1/cos θ",
    topic: "Trigonometry"
  },
  {
    q: "Find the value of sin 30° cos 60°.",
    options: ["1/4", "1/2", "√3/4", "0"],
    ans: "1/4",
    topic: "Trigonometry"
  },
  {
    q: "Simplify: tan 45° + cot 45°.",
    options: ["2", "1", "0", "−1"],
    ans: "2",
    topic: "Trigonometry"
  },
  {
    q: "If cos θ = 4/5, where θ is acute, find sin θ.",
    options: ["3/5", "4/5", "5/4", "1/5"],
    ans: "3/5",
    topic: "Trigonometry"
  },
  {
    q: "Evaluate: sin² 30° − cos² 60°.",
    options: ["0", "1/2", "−1/2", "1"],
    ans: "0",
    topic: "Trigonometry"
  },
  {
    q: "Find the value of tan 30° × cot 60°.",
    options: ["1/3", "1", "√3", "0"],
    ans: "1/3",
    topic: "Trigonometry"
  },
  {
    q: "Simplify: sin 0° + cos 90°.",
    options: ["0", "1", "−1", "2"],
    ans: "0",
    topic: "Trigonometry"
  },

    {
        q: "The value of \\sin(30^{ degrees}) is:",
        options: ["1/2", "\\frac{sqrt(3)}{2}", "1", "\\frac{sqrt(2)}{2}"],
        ans: "1/2",
        topic: "Trigonometry"
    },
    {
        q: "Convert  pi /4 radians to degrees.",
        options: ["30^{ degrees}", "45^{ degrees}", "60^{ degrees}", "90^{ degrees}"],
        ans: "45^{ degrees}",
        topic: "Trigonometry"
    },
    {
        q: "Which of the following is an identity?",
        options: ["\\sin^2\\theta - \\cos^2\\theta = 1", "\\sin^2\\theta + \\cos^2\\theta = 1", "\\tan\\theta = \\cos\\theta/\\sin\\theta", "\\sin(2\\theta) = 2\\sin\\theta"],
        ans: "\\sin^2\\theta + \\cos^2\\theta = 1",
        topic: "Trigonometry"
    },
    {
        q: "If \\cos\\theta = 0.6, what is the value of \\sin\\theta (assuming \\theta is acute)?",
        options: ["0.4", "0.7", "0.8", "0.9"],
        ans: "0.8",
        topic: "Trigonometry"
    },
    {
        q: "The period of the function f(x) = \\sin(2x) is:",
        options: [" pi ", "2 pi ", " pi /2", "4 pi "],
        ans: " pi ",
        topic: "Trigonometry"
    },
    {
        q: "The angle 360^{ degrees} is equivalent to what in radians?",
        options: [" pi ", "2 pi ", "3 pi ", " pi /2"],
        ans: "2 pi ",
        topic: "Trigonometry"
    },
    {
        q: "In a right-angled triangle, the sine of an angle is the ratio of:",
        options: ["Adjacent/Hypotenuse", "Opposite/Adjacent", "Opposite/Hypotenuse", "Hypotenuse/Opposite"],
        ans: "Opposite/Hypotenuse",
        topic: "Trigonometry"
    },
    {
        q: "Calculate \\tan(45^{ degrees}).",
        options: ["0", "1/sqrt(2)", "sqrt(3)", "1"],
        ans: "1",
        topic: "Trigonometry"
    },
    {
        q: "The graph of y = \\cos x passes through the point:",
        options: ["(0, 0)", "(0, 1)", "( pi , 1)", "( pi /2, 1)"],
        ans: "(0, 1)",
        topic: "Trigonometry"
    },
    {
        q: "The reciprocal of the tangent function is the:",
        options: ["Secant", "Cosecant", "Cotangent", "Sine"],
        ans: "Cotangent",
        topic: "Trigonometry"
    }
],

"PHY101": [
    
    
    /* ================= UNITS & DIMENSIONS (15) ================= */
    {
    q: "The SI unit of length is:",
    options: ["Meter", "Centimeter", "Kilometer", "Millimeter"],
    ans: "Meter",
    topic: "Units & Dimensions"
    },
    {
    q: "Which of the following is a derived unit?",
    options: ["Kilogram", "Second", "Newton", "Ampere"],
    ans: "Newton",
    topic: "Units & Dimensions"
    },
    {
    q: "The SI unit of mass is:",
    options: ["Gram", "Kilogram", "Ton", "Pound"],
    ans: "Kilogram",
    topic: "Units & Dimensions"
    },
    {
    q: "Velocity has the dimension:",
    options: ["LT⁻¹", "LT", "L²T⁻¹", "T⁻¹"],
    ans: "LT⁻¹",
    topic: "Units & Dimensions"
    },
    {
    q: "Which physical quantity has no unit?",
    options: ["Force", "Density", "Strain", "Velocity"],
    ans: "Strain",
    topic: "Units & Dimensions"
    },
    {
    q: "The dimension of acceleration is:",
    options: ["LT⁻¹", "LT⁻²", "L²T⁻¹", "T⁻²"],
    ans: "LT⁻²",
    topic: "Units & Dimensions"
    },
    {
    q: "Which unit is used to measure force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    ans: "Newton",
    topic: "Units & Dimensions"
    },
    {
    q: "SI unit of time is:",
    options: ["Minute", "Hour", "Second", "Day"],
    ans: "Second",
    topic: "Units & Dimensions"
    },
    {
    q: "The dimension of energy is:",
    options: ["ML²T⁻²", "MLT⁻²", "M²LT⁻¹", "LT⁻¹"],
    ans: "ML²T⁻²",
    topic: "Units & Dimensions"
    },
    {
    q: "Which of the following is a fundamental quantity?",
    options: ["Force", "Velocity", "Time", "Density"],
    ans: "Time",
    topic: "Units & Dimensions"
    },
    {
    q: "The SI unit of temperature is:",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
    ans: "Kelvin",
    topic: "Units & Dimensions"
    },
    {
    q: "Which is NOT an SI base unit?",
    options: ["Ampere", "Mole", "Newton", "Kelvin"],
    ans: "Newton",
    topic: "Units & Dimensions"
    },
    {
    q: "Dimensions are used to:",
    options: ["Measure quantities", "Check equations", "Find errors", "Convert units"],
    ans: "Check equations",
    topic: "Units & Dimensions"
    },
    {
    q: "The unit of power is:",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    ans: "Watt",
    topic: "Units & Dimensions"
    },
    {
    q: "Which quantity has dimension T⁻¹?",
    options: ["Speed", "Frequency", "Acceleration", "Energy"],
    ans: "Frequency",
    topic: "Units & Dimensions"
    },
    
    /* ================= VECTORS & SCALARS (15) ================= */
 
    { q: "If A = 3i - 2j + k and B = 2i + j - 3k, find the unit vector in the direction of (A + B).", options: ["(5i - j - 2k)/√30", "(5i - j - 2k)/30", "(i + j + k)/√3", "5i - j - 2k"], ans: "(5i - j - 2k)/√30" },
    { q: "Calculate the work done by a force F = 2i + 3j N in moving a particle from (1,2)m to (4,6)m.", options: ["18 J", "20 J", "6 J", "12 J"], ans: "18 J" },
    { q: "Find the area of a parallelogram whose adjacent sides are A = i + 2j + 3k and B = -3i - 2j + k.", options: ["√180", "√160", "√140", "12"], ans: "√160" },
    { q: "Given A = i + j and B = j + k, find the angle between the two vectors.", options: ["60°", "30°", "45°", "90°"], ans: "60°" },
    { q: "Determine the value of 'm' such that A = 2i + mj + k is perpendicular to B = 4i - 2j - 2k.", options: ["3", "1", "6", "0"], ans: "3" },
    { q: "Find the triple scalar product A.(B x C) for A=i, B=j, C=k.", options: ["1", "0", "-1", "i+j+k"], ans: "1" },
    { q: "If |A + B| = |A - B|, what is the angle between A and B?", options: ["90°", "0°", "180°", "45°"], ans: "90°" },
    {  q: "Which of the following is a scalar quantity?",
    options: ["Velocity", "Force", "Speed", "Acceleration"],
    ans: "Speed",
    topic: "Vectors & Scalars"
    },
    
    {
    q: "A vector quantity has:",
    options: ["Magnitude only", "Direction only", "Both magnitude and direction", "Neither"],
    ans: "Both magnitude and direction",
    topic: "Vectors & Scalars"
    },
    {
    q: "Which is a vector quantity?",
    options: ["Distance", "Speed", "Displacement", "Time"],
    ans: "Displacement",
    topic: "Vectors & Scalars"
    },
    {
    q: "Scalar quantities are added using:",
    options: ["Vector law", "Triangle law", "Algebraic method", "Parallelogram law"],
    ans: "Algebraic method",
    topic: "Vectors & Scalars"
    },
    {
    q: "Which law is used for vector addition?",
    options: ["Newton’s law", "Triangle law", "Ohm’s law", "Boyle’s law"],
    ans: "Triangle law",
    topic: "Vectors & Scalars"
    },
    {
    q: "Resultant of two vectors depends on:",
    options: ["Magnitude only", "Direction only", "Both magnitude and direction", "Time"],
    ans: "Both magnitude and direction",
    topic: "Vectors & Scalars"
    },
    {
    q: "Which of these is NOT a vector?",
    options: ["Momentum", "Force", "Energy", "Acceleration"],
    ans: "Energy",
    topic: "Vectors & Scalars"
    },
    {
    q: "The SI unit of displacement is:",
    options: ["Meter", "Meter per second", "Newton", "Second"],
    ans: "Meter",
    topic: "Vectors & Scalars"
    },
    {
    q: "Which quantity changes when direction changes?",
    options: ["Speed", "Mass", "Velocity", "Time"],
    ans: "Velocity",
    topic: "Vectors & Scalars"
    },
    {
    q: "Vectors are represented graphically by:",
    options: ["Lines", "Arrows", "Dots", "Curves"],
    ans: "Arrows",
    topic: "Vectors & Scalars"
    },
    {
    q: "Which is a scalar quantity?",
    options: ["Work", "Force", "Velocity", "Displacement"],
    ans: "Work",
    topic: "Vectors & Scalars"
    },
    {
    q: "A vector with zero magnitude is called:",
    options: ["Null vector", "Unit vector", "Scalar vector", "Base vector"],
    ans: "Null vector",
    topic: "Vectors & Scalars"
    },
    {
    q: "Unit vector has magnitude:",
    options: ["0", "1", "10", "Depends"],
    ans: "1",
    topic: "Vectors & Scalars"
    },
    
    {
    q: "Which is a vector quantity?",
    options: ["Temperature", "Pressure", "Force", "Energy"],
    ans: "Force",
    topic: "Vectors & Scalars"
    },
    {
    q: "Scalar quantities are independent of:",
    options: ["Magnitude", "Direction", "Unit", "Value"],
    ans: "Direction",
    topic: "Vectors & Scalars"
    },
    
    /* ================= NEWTON’S LAWS (15) ================= */
    {
    q: "Newton’s first law is also known as:",
    options: ["Law of acceleration", "Law of inertia", "Law of action", "Law of reaction"],
    ans: "Law of inertia",
    topic: "Newton’s Laws"
    },
    {
    q: "Inertia depends on:",
    options: ["Speed", "Velocity", "Mass", "Force"],
    ans: "Mass",
    topic: "Newton’s Laws"
    },
    {
    q: "Newton’s second law relates force to:",
    options: ["Velocity", "Momentum", "Acceleration", "Mass only"],
    ans: "Acceleration",
    topic: "Newton’s Laws"
    },
    {
    q: "The formula F = ma is from:",
    options: ["First law", "Second law", "Third law", "Law of gravitation"],
    ans: "Second law",
    topic: "Newton’s Laws"
    },
    {
    q: "Newton’s third law states that:",
    options: ["Force equals mass", "Every action has an equal and opposite reaction", "Objects move uniformly", "Force is proportional to velocity"],
    ans: "Every action has an equal and opposite reaction",
    topic: "Newton’s Laws"
    },
    {
    q: "Action and reaction forces act on:",
    options: ["Same body", "Different bodies", "Same point", "Same direction"],
    ans: "Different bodies",
    topic: "Newton’s Laws"
    },
    {
    q: "Which law explains recoil of a gun?",
    options: ["First", "Second", "Third", "Gravitation"],
    ans: "Third",
    topic: "Newton’s Laws"
    },
    {
    q: "Momentum is the product of:",
    options: ["Mass and velocity", "Force and time", "Mass and acceleration", "Velocity and time"],
    ans: "Mass and velocity",
    topic: "Newton’s Laws"
    },
    {
    q: "If no external force acts, momentum is:",
    options: ["Zero", "Constant", "Increasing", "Decreasing"],
    ans: "Constant",
    topic: "Newton’s Laws"
    },
    {
    q: "Which quantity changes due to force?",
    options: ["Mass", "Momentum", "Time", "Distance"],
    ans: "Momentum",
    topic: "Newton’s Laws"
    },
    {
    q: "The unit of force is:",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    ans: "Newton",
    topic: "Newton’s Laws"
    },
    {
    q: "Newton’s laws apply mainly to:",
    options: ["Resting bodies", "Moving bodies", "Macroscopic bodies", "Atomic particles"],
    ans: "Macroscopic bodies",
    topic: "Newton’s Laws"
    },
    {
    q: "Which law introduces inertia?",
    options: ["First law", "Second law", "Third law", "Gravitation"],
    ans: "First law",
    topic: "Newton’s Laws"
    },
    {
    q: "Force is a:",
    options: ["Scalar", "Vector", "Constant", "Derived scalar"],
    ans: "Vector",
    topic: "Newton’s Laws"
    },
    {
    q: "Acceleration is directly proportional to:",
    options: ["Mass", "Force", "Time", "Distance"],
    ans: "Force",
    topic: "Newton’s Laws"
    },
    
    /* ================= KINEMATICS (15) ================= */
    {
    q: "Kinematics deals with:",
    options: ["Causes of motion", "Effects of force", "Motion without cause", "Energy"],
    ans: "Motion without cause",
    topic: "Kinematics"
    },
    {
    q: "Speed is defined as:",
    options: ["Distance/time", "Displacement/time", "Velocity/time", "Acceleration/time"],
    ans: "Distance/time",
    topic: "Kinematics"
    },
    {
    q: "Velocity differs from speed because it has:",
    options: ["Magnitude", "Direction", "Unit", "Distance"],
    ans: "Direction",
    topic: "Kinematics"
    },
    {
    q: "Acceleration is the rate of change of:",
    options: ["Speed", "Velocity", "Distance", "Time"],
    ans: "Velocity",
    topic: "Kinematics"
    },
    {
    q: "Uniform motion means:",
    options: ["Constant speed", "Constant acceleration", "Increasing speed", "Decreasing speed"],
    ans: "Constant speed",
    topic: "Kinematics"
    },
    {
    q: "The SI unit of acceleration is:",
    options: ["m/s", "m/s²", "m²/s", "s/m"],
    ans: "m/s²",
    topic: "Kinematics"
    },
    {
    q: "Displacement can be:",
    options: ["Negative", "Positive", "Zero", "All"],
    ans: "All",
    topic: "Kinematics"
    },
    {
    q: "Which graph gives velocity?",
    options: ["Distance-time slope", "Time-distance", "Speed-time area", "Distance-area"],
    ans: "Distance-time slope",
    topic: "Kinematics"
    },
    {
    q: "Area under velocity-time graph gives:",
    options: ["Speed", "Acceleration", "Distance", "Displacement"],
    ans: "Displacement",
    topic: "Kinematics"
    },
    {
    q: "Retardation means:",
    options: ["Positive acceleration", "Zero acceleration", "Negative acceleration", "Constant velocity"],
    ans: "Negative acceleration",
    topic: "Kinematics"
    },
    {
    q: "Motion in a straight line is called:",
    options: ["Circular motion", "Rectilinear motion", "Random motion", "Rotational motion"],
    ans: "Rectilinear motion",
    topic: "Kinematics"
    },
    {
    q: "Initial velocity is denoted by:",
    options: ["u", "v", "a", "s"],
    ans: "u",
    topic: "Kinematics"
    },
    {
    q: "Final velocity is denoted by:",
    options: ["u", "v", "a", "s"],
    ans: "v",
    topic: "Kinematics"
    },
    {
    q: "Equation v = u + at is a:",
    options: ["Dynamics equation", "Kinematic equation", "Energy equation", "Force equation"],
    ans: "Kinematic equation",
    topic: "Kinematics"
    },
    {
    q: "Which motion has constant acceleration?",
    options: ["Uniform motion", "Uniformly accelerated motion", "Circular motion", "Random motion"],
    ans: "Uniformly accelerated motion",
    topic: "Kinematics"
    },
    
    /* ================= CENTER OF MASS (15) ================= */
    {
    q: "Center of mass is the point where:",
    options: ["Mass is zero", "Total mass acts", "Velocity is zero", "Force is applied"],
    ans: "Total mass acts",
    topic: "center of mass"
    },
    {
    q: "For a uniform rod, center of mass lies at:",
    options: ["One end", "Middle", "Quarter", "Random point"],
    ans: "Middle",
    topic: "center of mass"
    },
    {
    q: "Center of mass depends on:",
    options: ["Shape", "Mass distribution", "Volume", "Speed"],
    ans: "Mass distribution",
    topic: "center of mass"
    },
    {
    q: "Center of mass of a symmetrical body is at:",
    options: ["Edge", "Center", "Bottom", "Top"],
    ans: "Center",
    topic: "center of mass"
    },
    {
    q: "If mass is evenly distributed, center of mass is:",
    options: ["Outside body", "At one end", "At geometric center", "Undefined"],
    ans: "At geometric center",
    topic: "center of mass"
    },
    {
    q: "Center of mass can lie outside the body for:",
    options: ["Solid sphere", "Ring", "Cube", "Rod"],
    ans: "Ring",
    topic: "center of mass"
    },
    {
    q: "Which unit measures mass?",
    options: ["Newton", "Kilogram", "Gram-force", "Joule"],
    ans: "Kilogram",
    topic: "center of mass"
    },
    {
    q: "Center of mass is important in studying:",
    options: ["Heat", "Motion", "Electricity", "Sound"],
    ans: "Motion",
    topic: "center of mass"
    },
    {
    q: "For two equal masses, center of mass lies:",
    options: ["Near heavier mass", "At midpoint", "Outside", "Undefined"],
    ans: "At midpoint",
    topic: "center of mass"
    },
    {
    q: "The center of mass of Earth lies:",
    options: ["On surface", "Above surface", "At center", "Below surface"],
    ans: "At center",
    topic: "center of mass"
    },
    {
    q: "Which factor does NOT affect center of mass?",
    options: ["Shape", "Mass distribution", "Orientation", "Temperature"],
    ans: "Temperature",
    topic: "center of mass"
    },
    {
    q: "Center of gravity is similar to center of mass when:",
    options: ["Gravity is uniform", "Gravity varies", "Object is moving", "Object is rotating"],
    ans: "Gravity is uniform",
    topic: "center of mass"
    },
    {
    q: "The center of mass of a triangle is at:",
    options: ["Vertex", "Midpoint", "Centroid", "Circumcenter"],
    ans: "Centroid",
    topic: "center of mass"
    },
    {
    q: "Which body has center of mass at its center?",
    options: ["Ring", "Uniform sphere", "Arc", "Boomerang"],
    ans: "Uniform sphere",
    topic: "center of mass"
    },
    {
    q: "Center of mass helps in analyzing:",
    options: ["Equilibrium", "Heat flow", "Electric current", "Magnetism"],
    ans: "Equilibrium",
    topic: "center of mass"
    },
    
    /* ================= WORK, ENERGY & POWER (15) ================= */
    {
    q: "Work is done when a force causes:",
    options: ["Acceleration", "Displacement", "Velocity", "Energy"],
    ans: "Displacement",
    topic: "Work, Energy, Power"
    },
    {
    q: "The SI unit of work is:",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    ans: "Joule",
    topic: "Work, Energy, Power"
    },
    {
    q: "Energy is the ability to:",
    options: ["Move", "Do work", "Apply force", "Gain speed"],
    ans: "Do work",
    topic: "Work, Energy, Power"
    },
    {
    q: "Kinetic energy depends on:",
    options: ["Mass only", "Velocity only", "Mass and velocity", "Height"],
    ans: "Mass and velocity",
    topic: "Work, Energy, Power"
    },
    {
    q: "Potential energy depends on:",
    options: ["Speed", "Height", "Time", "Acceleration"],
    ans: "Height",
    topic: "Work, Energy, Power"
    },
    {
    q: "The SI unit of power is:",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    ans: "Watt",
    topic: "Work, Energy, Power"
    },
    {
    q: "Power is defined as:",
    options: ["Work × time", "Work / time", "Energy × time", "Force × distance"],
    ans: "Work / time",
    topic: "Work, Energy, Power"
    },
    {
    q: "Which of these is energy?",
    options: ["Force", "Momentum", "Heat", "Acceleration"],
    ans: "Heat",
    topic: "Work, Energy, Power"
    },
    {
    q: "The law of conservation of energy states that:",
    options: ["Energy is destroyed", "Energy is created", "Energy is conserved", "Energy is lost"],
    ans: "Energy is conserved",
    topic: "Work, Energy, Power"
    },
    {
    q: "Which energy is due to motion?",
    options: ["Potential", "Kinetic", "Heat", "Chemical"],
    ans: "Kinetic",
    topic: "Work, Energy, Power"
    },
    {
    q: "Gravitational potential energy is given by:",
    options: ["½mv²", "mgh", "mgv", "Fv"],
    ans: "mgh",
    topic: "Work, Energy, Power"
    },
    {
    q: "Power is a:",
    options: ["Scalar", "Vector", "Both", "None"],
    ans: "Scalar",
    topic: "Work, Energy, Power"
    },
    {
    q: "Which has highest kinetic energy?",
    options: ["Resting body", "Slow body", "Fast moving body", "Stationary object"],
    ans: "Fast moving body",
    topic: "Work, Energy, Power"
    },
    {
    q: "1 horsepower is approximately:",
    options: ["746 W", "100 W", "1000 W", "500 W"],
    ans: "746 W",
    topic: "Work, Energy, Power"
    },
    {
    q: "Energy cannot be:",
    options: ["Converted", "Transferred", "Created or destroyed", "Stored"],
    ans: "Created or destroyed",
    topic: "Work, Energy, Power"
    },
    
    /* ================= THERMODYNAMICS (15) ================= */
    {
    q: "Thermodynamics deals with:",
    options: ["Heat and energy", "Motion", "Sound", "Light"],
    ans: "Heat and energy",
    topic: "Thermodynamics"
    },
    {
    q: "Temperature measures the degree of:",
    options: ["Hotness", "Mass", "Pressure", "Energy"],
    ans: "Hotness",
    topic: "Thermodynamics"
    },
    {
    q: "The SI unit of heat is:",
    options: ["Calorie", "Joule", "Watt", "Newton"],
    ans: "Joule",
    topic: "Thermodynamics"
    },
    {
    q: "Which law states energy conservation?",
    options: ["First law", "Second law", "Third law", "Zeroth law"],
    ans: "First law",
    topic: "Thermodynamics"
    },
    {
    q: "The second law of thermodynamics states that heat flows from:",
    options: ["Cold to hot", "Hot to cold", "Equal bodies", "Any direction"],
    ans: "Hot to cold",
    topic: "Thermodynamics"
    },
    {
    q: "Which quantity is measured in Kelvin?",
    options: ["Heat", "Temperature", "Pressure", "Energy"],
    ans: "Temperature",
    topic: "Thermodynamics"
    },
    {
    q: "Heat is transferred by:",
    options: ["Conduction", "Convection", "Radiation", "All"],
    ans: "All",
    topic: "Thermodynamics"
    },
    {
    q: "Absolute zero temperature is:",
    options: ["0°C", "-273°C", "100°C", "-100°C"],
    ans: "-273°C",
    topic: "Thermodynamics"
    },
    {
    q: "Which is a thermodynamic system?",
    options: ["Gas in a cylinder", "Moving car", "Light ray", "Sound wave"],
    ans: "Gas in a cylinder",
    topic: "Thermodynamics"
    },
    {
    q: "Entropy is a measure of:",
    options: ["Energy", "Disorder", "Temperature", "Pressure"],
    ans: "Disorder",
    topic: "Thermodynamics"
    },
    {
    q: "Which process occurs at constant temperature?",
    options: ["Adiabatic", "Isothermal", "Isochoric", "Isobaric"],
    ans: "Isothermal",
    topic: "Thermodynamics"
    },
    {
    q: "Which process occurs without heat exchange?",
    options: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric"],
    ans: "Adiabatic",
    topic: "Thermodynamics"
    },
    {
    q: "Heat engine converts:",
    options: ["Work to heat", "Heat to work", "Energy to mass", "Mass to heat"],
    ans: "Heat to work",
    topic: "Thermodynamics"
    },
    {
    q: "Efficiency of a heat engine is always:",
    options: ["100%", "< 100%", "0%", "> 100%"],
    ans: "< 100%",
    topic: "Thermodynamics"
    },
    {
    q: "Zeroth law of thermodynamics defines:",
    options: ["Energy", "Work", "Temperature", "Entropy"],
    ans: "Temperature",
    topic: "Thermodynamics"
    },
    
    
    
    // --- 10 Questions for Units & Dimensions ---
    {
        q: "The SI unit of force is the:",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        ans: "Newton",
        topic: "Units & Dimensions"
    },
    {
        q: "What is the dimension of velocity?",
        options: ["[LT^{-1}]", "[L^2T^{-1}]", "[LT^{-2}]", "[M LT^{-1}]"],
        ans: "[LT^{-1}]",
        topic: "Units & Dimensions"
    },
    {
        q: "Which quantity has the same dimension as work?",
        options: ["Force", "Power", "Momentum", "Energy"],
        ans: "Energy",
        topic: "Units & Dimensions"
    },
    {
        q: "The unit of electric current in the SI system is:",
        options: ["Volt", "Ohm", "Ampere", "Coulomb"],
        ans: "Ampere",
        topic: "Units & Dimensions"
    },
    {
        q: "The prefix 'mega' (M) represents what factor?",
        options: ["10^3", "10^6", "10^9", "10^{-6}"],
        ans: "10^6",
        topic: "Units & Dimensions"
    },
    {
        q: "Which of the following is a derived unit?",
        options: ["Kilogram", "Meter", "Second", "Volume"],
        ans: "Volume",
        topic: "Units & Dimensions"
    },
    {
        q: "What is the unit of pressure?",
        options: ["Newton", "Pascal", "Joule", "Watt"],
        ans: "Pascal",
        topic: "Units & Dimensions"
    },
    {
        q: "The dimension of momentum (p = mv) is:",
        options: ["[M L T^{-1}]", "[M L^2 T^{-2}]", "[M T^{-1}]", "[L T^{-1}]"],
        ans: "[M L T^{-1}]",
        topic: "Units & Dimensions"
    },
    {
        q: "A measurement of 1 nanometer is equivalent to:",
        options: ["10^{-6} m", "10^{-9} m", "10^{-12} m", "10^{-3} m"],
        ans: "10^{-9} m",
        topic: "Units & Dimensions"
    },
    {
        q: "Which of the following is a fundamental quantity?",
        options: ["Area", "Density", "Temperature", "Speed"],
        ans: "Temperature",
        topic: "Units & Dimensions"
    },
    
    // --- 10 Questions for Vectors & Scalars ---
    {
        q: "Which of the following is a scalar quantity?",
        options: ["Displacement", "Velocity", "Mass", "Force"],
        ans: "Mass",
        topic: "Vectors & Scalars"
    },
    {
        q: "The resultant of two vectors vec A and vec B can be found using the:",
        options: ["Pythagorean theorem only", "Parallelogram law", "Ohm's law", "Boyle's law"],
        ans: "Parallelogram law",
        topic: "Vectors & Scalars"
    },
    {
        q: "If the angle between two vectors is 90^{ degrees}, their dot product is:",
        options: ["Maximum", "Zero", "Minimum", "Negative"],
        ans: "Zero",
        topic: "Vectors & Scalars"
    },
    {
        q: "Velocity is classified as a:",
        options: ["Scalar quantity", "Fundamental quantity", "Vector quantity", "Unit quantity"],
        ans: "Vector quantity",
        topic: "Vectors & Scalars"
    },
    {
        q: "The vector product (vec A  x  vec B) of two parallel vectors is:",
        options: ["Zero", "Maximum", "A scalar quantity", "Perpendicular to A and B"],
        ans: "Zero",
        topic: "Vectors & Scalars"
    },
    {
        q: "Distance is the magnitude of:",
        options: ["Acceleration", "Displacement", "Force", "Velocity"],
        ans: "Displacement",
        topic: "Vectors & Scalars"
    },
    {
        q: "If vec A = 3i + 4j, what is the magnitude of vec A?",
        options: ["3", "4", "5", "7"],
        ans: "5",
        topic: "Vectors & Scalars"
    },
    {
        q: "The subtraction of a vector vec A - vec B is equivalent to:",
        options: ["vec B - vec A", "vec A + (-vec B)", "|A| - |B|", "vec A  x  vec B"],
        ans: "vec A + (-vec B)",
        topic: "Vectors & Scalars"
    },
    {
        q: "What is the angle between vec A and vec B if their cross product is maximum?",
        options: ["0^{ degrees}", "45^{ degrees}", "90^{ degrees}", "180^{ degrees}"],
        ans: "90^{ degrees}",
        topic: "Vectors & Scalars"
    },
    {
        q: "Torque (a turning force) is an example of a:",
        options: ["Scalar", "Vector", "Derived scalar", "Unit vector"],
        ans: "Vector",
        topic: "Vectors & Scalars"
    },
    
    // --- 10 Questions for Newton’s Laws ---
    {
        q: "Newton's first law is also known as the law of:",
        options: ["Momentum", "Inertia", "Action and Reaction", "Conservation of Energy"],
        ans: "Inertia",
        topic: "Newton’s Laws"
    },
    {
        q: "Newton's second law states that F = :",
        options: ["ma", "mg", "m * v", "1/2 m v^2"],
        ans: "ma",
        topic: "Newton’s Laws"
    },
    {
        q: "For every action, there is an equal and opposite reaction. This is Newton's:",
        options: ["First Law", "Second Law", "Third Law", "Law of Universal Gravitation"],
        ans: "Third Law",
        topic: "Newton’s Laws"
    },
    {
        q: "A body of mass 10 kg is accelerated by a net force of 50 N. What is the acceleration?",
        options: ["0.2 m/s²", "5 m/s²", "10 m/s²", "500 m/s²"],
        ans: "5 m/s²",
        topic: "Newton’s Laws"
    },
    {
        q: "In the absence of a net force, an object will maintain a constant velocity.",
        options: ["True", "False"],
        ans: "True",
        topic: "Newton’s Laws"
    },
    {
        q: "The force of gravity acting on an object is called its:",
        options: ["Mass", "Momentum", "Inertia", "Weight"],
        ans: "Weight",
        topic: "Newton’s Laws"
    },
    {
        q: "Friction is an example of an ________ force.",
        options: ["Applied", "Internal", "Fictitious", "External"],
        ans: "External",
        topic: "Newton’s Laws"
    },
    {
        q: "What is the SI unit of impulse?",
        options: ["Newton (N)", "Newton-second (N·s)", "Joule (J)", "Watt (W)"],
        ans: "Newton-second (N·s)",
        topic: "Newton’s Laws"
    },
    {
        q: "The resistance of an object to a change in its state of motion is called:",
        options: ["Momentum", "Weight", "Inertia", "Force"],
        ans: "Inertia",
        topic: "Newton’s Laws"
    },
    {
        q: "The momentum of an object is defined as the product of its mass and:",
        options: ["Acceleration", "Force", "Velocity", "Energy"],
        ans: "Velocity",
        topic: "Newton’s Laws"
    },
    
    // --- 10 Questions for Kinematics ---
    {
        q: "The rate of change of displacement is:",
        options: ["Speed", "Acceleration", "Velocity", "Distance"],
        ans: "Velocity",
        topic: "Kinematics"
    },
    {
        q: "A car accelerates from rest at 2 m/s^2. What is its speed after 5 seconds?",
        options: ["5 m/s", "10 m/s", "25 m/s", "50 m/s"],
        ans: "10 m/s",
        topic: "Kinematics"
    },
    {
        q: "Which of the following is an equation of motion with constant acceleration?",
        options: ["v = u + at^2", "v = u + at", "v = 1/2at^2", "v^2 = u^2 + at"],
        ans: "v = u + at",
        topic: "Kinematics"
    },
    {
        q: "An object thrown vertically upwards has zero velocity at its:",
        options: ["Starting point", "Mid-point", "Highest point", "Return point"],
        ans: "Highest point",
        topic: "Kinematics"
    },
    {
        q: "The slope of a displacement-time graph represents:",
        options: ["Acceleration", "Force", "Velocity", "Distance"],
        ans: "Velocity",
        topic: "Kinematics"
    },
    {
        q: "What is the displacement of an object that moves 5m east and then 5m west?",
        options: ["10 m", "5 m", "0 m", "25 m"],
        ans: "0 m",
        topic: "Kinematics"
    },
    {
        q: "Free fall is motion under the influence of only:",
        options: ["Air resistance", "Gravity", "Applied force", "Tension"],
        ans: "Gravity",
        topic: "Kinematics"
    },
    {
        q: "A projectile's horizontal velocity is constant assuming no air resistance.",
        options: ["True", "False"],
        ans: "True",
        topic: "Kinematics"
    },
    {
        q: "The acceleration of a body moving at constant velocity is:",
        options: ["Constant", "Zero", "Increasing", "Negative"],
        ans: "Zero",
        topic: "Kinematics"
    },
    {
        q: "If the velocity of an object is uniform, its speed is:",
        options: ["Changing", "Zero", "Increasing", "Constant"],
        ans: "Constant",
        topic: "Kinematics"
    },
    {
  q: "Projectile motion is the motion of an object projected into air under the influence of:",
  options: ["Gravity only", "Air resistance", "Magnetic force", "Electric force"],
  ans: "Gravity only",
  topic: "Projectile Motion"
},
{
  q: "The path followed by a projectile is:",
  options: ["Parabolic", "Circular", "Straight", "Elliptical"],
  ans: "Parabolic",
  topic: "Projectile Motion"
},
{
  q: "In projectile motion, acceleration is always:",
  options: ["Downward", "Upward", "Horizontal", "Zero"],
  ans: "Downward",
  topic: "Projectile Motion"
},
{
  q: "The horizontal component of velocity in projectile motion is:",
  options: ["Constant", "Increasing", "Decreasing", "Zero"],
  ans: "Constant",
  topic: "Projectile Motion"
},
{
  q: "The vertical component of velocity at the highest point is:",
  options: ["Zero", "Maximum", "Negative", "Constant"],
  ans: "Zero",
  topic: "Projectile Motion"
},
{
  q: "Which angle gives maximum range on level ground?",
  options: ["45°", "30°", "60°", "90°"],
  ans: "45°",
  topic: "Projectile Motion"
},
{
  q: "Range of a projectile depends on:",
  options: [
    "Initial velocity and angle of projection",
    "Mass of projectile",
    "Shape of object",
    "Color of object"
  ],
  ans: "Initial velocity and angle of projection",
  topic: "Projectile Motion"
},
{
  q: "Time of flight depends on:",
  options: [
    "Vertical component of velocity",
    "Horizontal component only",
    "Mass",
    "Range only"
  ],
  ans: "Vertical component of velocity",
  topic: "Projectile Motion"
},
{
  q: "At the point of projection, the velocity makes an angle θ with:",
  options: ["Horizontal", "Vertical", "Ground", "Gravity"],
  ans: "Horizontal",
  topic: "Projectile Motion"
},
{
  q: "The acceleration of a projectile at its highest point is:",
  options: ["g downward", "Zero", "Upward", "Horizontal"],
  ans: "g downward",
  topic: "Projectile Motion"
},
{
  q: "If air resistance is neglected, the horizontal velocity remains:",
  options: ["Constant", "Zero", "Increasing", "Decreasing"],
  ans: "Constant",
  topic: "Projectile Motion"
},
{
  q: "The maximum height reached by a projectile depends on:",
  options: [
    "Vertical component of velocity",
    "Horizontal component",
    "Mass",
    "Range"
  ],
  ans: "Vertical component of velocity",
  topic: "Projectile Motion"
},
{
  q: "At what point is the speed of a projectile minimum?",
  options: ["At the highest point", "At launch", "At landing", "Never"],
  ans: "At the highest point",
  topic: "Projectile Motion"
},
{
  q: "Two projectiles projected at complementary angles have the same:",
  options: ["Range", "Time of flight", "Maximum height", "Speed"],
  ans: "Range",
  topic: "Projectile Motion"
},
{
  q: "If a projectile is thrown vertically upward, its horizontal velocity is:",
  options: ["Zero", "Maximum", "Constant", "Negative"],
  ans: "Zero",
  topic: "Projectile Motion"
},
{
  q: "The motion of a projectile can be resolved into:",
  options: [
    "Horizontal and vertical motions",
    "Two vertical motions",
    "Two horizontal motions",
    "Circular motion"
  ],
  ans: "Horizontal and vertical motions",
  topic: "Projectile Motion"
},
{
  q: "Which of the following quantities remains unchanged in projectile motion?",
  options: ["Horizontal velocity", "Vertical velocity", "Speed", "Momentum"],
  ans: "Horizontal velocity",
  topic: "Projectile Motion"
},
{
  q: "The angle between velocity and horizontal at the highest point is:",
  options: ["0°", "45°", "90°", "60°"],
  ans: "0°",
  topic: "Projectile Motion"
},
{
  q: "Range of a projectile on level ground is maximum when angle of projection is:",
  options: ["45°", "30°", "60°", "90°"],
  ans: "45°",
  topic: "Projectile Motion"
},
{
  q: "Projectile motion is an example of:",
  options: [
    "Two-dimensional motion",
    "One-dimensional motion",
    "Circular motion",
    "Uniform motion"
  ],
  ans: "Two-dimensional motion",
  topic: "Projectile Motion"
},
    
{
  q: "Angular velocity is defined as the rate of change of:",
  options: ["Angular displacement", "Linear displacement", "Velocity", "Acceleration"],
  ans: "Angular displacement",
  topic: "Angular Velocity"
},
{
  q: "The SI unit of angular velocity is:",
  options: ["rad/s", "m/s", "rev/s", "deg/s"],
  ans: "rad/s",
  topic: "Angular Velocity"
},
{
  q: "Angular velocity is denoted by:",
  options: ["ω", "θ", "v", "a"],
  ans: "ω",
  topic: "Angular Velocity"
},
{
  q: "A body completes one revolution in 2 seconds. Calculate its angular velocity.",
  options: ["π rad/s", "2π rad/s", "0.5π rad/s", "4π rad/s"],
  ans: "π rad/s",
  topic: "Angular Velocity"
},
{
  q: "The relationship between linear velocity v and angular velocity ω is:",
  options: ["v = ωr", "v = r/ω", "ω = vr", "ω = v/r²"],
  ans: "v = ωr",
  topic: "Angular Velocity"
},
{
  q: "If a wheel rotates at 5 rev/s, its angular velocity is:",
  options: ["10π rad/s", "5π rad/s", "2.5π rad/s", "20π rad/s"],
  ans: "10π rad/s",
  topic: "Angular Velocity"
},
{
  q: "Angular velocity is a:",
  options: ["Vector quantity", "Scalar quantity", "Constant", "Dimensionless quantity"],
  ans: "Vector quantity",
  topic: "Angular Velocity"
},
{
  q: "A particle moves in a circle of radius 2 m with speed 6 m/s. Find ω.",
  options: ["3 rad/s", "6 rad/s", "12 rad/s", "1.5 rad/s"],
  ans: "3 rad/s",
  topic: "Angular Velocity"
},
{
  q: "Which quantity remains constant in uniform circular motion?",
  options: ["Angular speed", "Linear velocity", "Direction of motion", "Acceleration"],
  ans: "Angular speed",
  topic: "Angular Velocity"
},
{
  q: "Angular displacement is measured in:",
  options: ["Radians", "Meters", "Seconds", "Newtons"],
  ans: "Radians",
  topic: "Angular Velocity"
},
{
  q: "If angular velocity doubles, linear velocity:",
  options: ["Doubles", "Halves", "Remains same", "Becomes zero"],
  ans: "Doubles",
  topic: "Angular Velocity"
},
{
  q: "The angular velocity of Earth about its axis is approximately:",
  options: ["7.3×10⁻⁵ rad/s", "3.1×10⁻³ rad/s", "1 rad/s", "0.1 rad/s"],
  ans: "7.3×10⁻⁵ rad/s",
  topic: "Angular Velocity"
},
{
  q: "Which of the following has the greatest angular velocity?",
  options: ["Fast spinning wheel", "Slow wheel", "Stationary object", "Falling stone"],
  ans: "Fast spinning wheel",
  topic: "Angular Velocity"
},
{
  q: "The angular velocity of a fan rotating at 300 rpm is:",
  options: ["10π rad/s", "5π rad/s", "20π rad/s", "30π rad/s"],
  ans: "10π rad/s",
  topic: "Angular Velocity"
},
{
  q: "When radius increases while ω remains constant, linear speed:",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  ans: "Increases",
  topic: "Angular Velocity"
},
{
  q: "Angular velocity can be calculated using:",
  options: ["ω = θ/t", "ω = v/t", "ω = a/t", "ω = r/t"],
  ans: "ω = θ/t",
  topic: "Angular Velocity"
},
{
  q: "Which instrument measures angular velocity?",
  options: ["Tachometer", "Barometer", "Thermometer", "Ammeter"],
  ans: "Tachometer",
  topic: "Angular Velocity"
},
{
  q: "The direction of angular velocity is given by:",
  options: ["Right-hand rule", "Left-hand rule", "Fleming's rule", "Hooke's law"],
  ans: "Right-hand rule",
  topic: "Angular Velocity"
},
{
  q: "Angular velocity is zero when the body is:",
  options: ["At rest", "Moving straight", "Accelerating", "Falling"],
  ans: "At rest",
  topic: "Angular Velocity"
},
{
  q: "The faster the rotation, the ______ the angular velocity.",
  options: ["Greater", "Smaller", "Zero", "Constant"],
  ans: "Greater",
  topic: "Angular Velocity"
},
    {
  q: "A body is in equilibrium when:",
  options: ["Net force is zero", "It is moving", "Acceleration is maximum", "Velocity is increasing"],
  ans: "Net force is zero",
  topic: "Equilibrium"
},
{
  q: "Equilibrium can be:",
  options: ["Static or dynamic", "Only static", "Only dynamic", "Only rotational"],
  ans: "Static or dynamic",
  topic: "Equilibrium"
},
{
  q: "In static equilibrium, the body is:",
  options: ["At rest", "Moving uniformly", "Accelerating", "Rotating"],
  ans: "At rest",
  topic: "Equilibrium"
},
{
  q: "For rotational equilibrium, the net:",
  options: ["Torque is zero", "Force is maximum", "Velocity is zero", "Mass is constant"],
  ans: "Torque is zero",
  topic: "Equilibrium"
},
{
  q: "The principle of moments states:",
  options: ["Clockwise moments = Anticlockwise moments", "Forces are equal", "Mass is constant", "Energy is conserved"],
  ans: "Clockwise moments = Anticlockwise moments",
  topic: "Equilibrium"
},
{
  q: "A see-saw balances when:",
  options: ["Moments are equal", "Masses are equal", "Lengths are equal", "Forces are zero"],
  ans: "Moments are equal",
  topic: "Equilibrium"
},
{
  q: "Stable equilibrium occurs when a body returns to its original position after:",
  options: ["Small displacement", "Large displacement", "Rotation", "Translation"],
  ans: "Small displacement",
  topic: "Equilibrium"
},
{
  q: "Unstable equilibrium occurs when a body:",
  options: ["Moves away after displacement", "Returns after displacement", "Does not move", "Oscillates"],
  ans: "Moves away after displacement",
  topic: "Equilibrium"
},
{
  q: "Neutral equilibrium occurs when a body:",
  options: ["Stays in new position", "Returns to original", "Falls", "Oscillates"],
  ans: "Stays in new position",
  topic: "Equilibrium"
},
{
  q: "The center of gravity is the point where:",
  options: ["Weight acts", "Mass is maximum", "Volume is highest", "Density changes"],
  ans: "Weight acts",
  topic: "Equilibrium"
},
{
  q: "Lower center of gravity gives:",
  options: ["Greater stability", "Less stability", "No effect", "Rotation"],
  ans: "Greater stability",
  topic: "Equilibrium"
},
{
  q: "Which object is most stable?",
  options: ["Wide base object", "Tall object", "Narrow base", "Thin rod"],
  ans: "Wide base object",
  topic: "Equilibrium"
},
{
  q: "Torque is defined as:",
  options: ["Force × perpendicular distance", "Mass × velocity", "Energy per time", "Pressure × area"],
  ans: "Force × perpendicular distance",
  topic: "Equilibrium"
},
{
  q: "Unit of torque is:",
  options: ["Nm", "N", "J", "kgm"],
  ans: "Nm",
  topic: "Equilibrium"
},
{
  q: "A ladder resting against a wall illustrates:",
  options: ["Equilibrium of forces", "Projectile motion", "SHM", "Circular motion"],
  ans: "Equilibrium of forces",
  topic: "Equilibrium"
},
{
  q: "Dynamic equilibrium involves:",
  options: ["Constant velocity", "Zero velocity", "Acceleration", "Rest"],
  ans: "Constant velocity",
  topic: "Equilibrium"
},
{
  q: "For equilibrium, resultant force must be:",
  options: ["Zero", "Maximum", "Minimum", "Infinite"],
  ans: "Zero",
  topic: "Equilibrium"
},
{
  q: "A balanced beam shows:",
  options: ["Rotational equilibrium", "Linear motion", "Acceleration", "Oscillation"],
  ans: "Rotational equilibrium",
  topic: "Equilibrium"
},
{
  q: "Which factor improves stability?",
  options: ["Low center of gravity", "High center of gravity", "Small base", "Large height"],
  ans: "Low center of gravity",
  topic: "Equilibrium"
},
{
  q: "A body topples when its line of action of weight:",
  options: ["Falls outside base", "Passes through base", "Is vertical", "Is horizontal"],
  ans: "Falls outside base",
  topic: "Equilibrium"
},
{
  q: "Simple harmonic motion is motion in which:",
  options: ["Restoring force is proportional to displacement", "Velocity is constant", "Acceleration is zero", "Energy is lost"],
  ans: "Restoring force is proportional to displacement",
  topic: "Simple Harmonic Motion"
},
{
  q: "The restoring force in SHM acts:",
  options: ["Towards equilibrium", "Away from equilibrium", "Randomly", "Upward only"],
  ans: "Towards equilibrium",
  topic: "Simple Harmonic Motion"
},
{
  q: "Which system exhibits SHM?",
  options: ["Mass on spring", "Car on road", "Rocket", "Stone thrown up"],
  ans: "Mass on spring",
  topic: "Simple Harmonic Motion"
},
{
  q: "The period of SHM is:",
  options: ["Time for one complete oscillation", "Half oscillation", "Distance moved", "Speed"],
  ans: "Time for one complete oscillation",
  topic: "Simple Harmonic Motion"
},
{
  q: "Unit of frequency is:",
  options: ["Hertz", "Second", "Meter", "Newton"],
  ans: "Hertz",
  topic: "Simple Harmonic Motion"
},
{
  q: "Frequency is the inverse of:",
  options: ["Period", "Amplitude", "Velocity", "Energy"],
  ans: "Period",
  topic: "Simple Harmonic Motion"
},
{
  q: "Maximum displacement from equilibrium is called:",
  options: ["Amplitude", "Period", "Frequency", "Phase"],
  ans: "Amplitude",
  topic: "Simple Harmonic Motion"
},
{
  q: "Velocity is maximum at:",
  options: ["Equilibrium position", "Extreme position", "Turning point", "Any point"],
  ans: "Equilibrium position",
  topic: "Simple Harmonic Motion"
},
{
  q: "Acceleration is maximum at:",
  options: ["Extreme position", "Equilibrium", "Midpoint", "Zero"],
  ans: "Extreme position",
  topic: "Simple Harmonic Motion"
},
{
  q: "Which energy is maximum at equilibrium?",
  options: ["Kinetic energy", "Potential energy", "Elastic energy", "Thermal energy"],
  ans: "Kinetic energy",
  topic: "Simple Harmonic Motion"
},
{
  q: "Which energy is maximum at extreme position?",
  options: ["Potential energy", "Kinetic energy", "Mechanical energy", "Heat energy"],
  ans: "Potential energy",
  topic: "Simple Harmonic Motion"
},
{
  q: "The motion of a pendulum approximates SHM when:",
  options: ["Angle is small", "Angle is large", "Mass is heavy", "String is thick"],
  ans: "Angle is small",
  topic: "Simple Harmonic Motion"
},
{
  q: "The period of a simple pendulum depends on:",
  options: ["Length", "Mass", "Amplitude", "Density"],
  ans: "Length",
  topic: "Simple Harmonic Motion"
},
{
  q: "The formula for period of a pendulum is:",
  options: ["2π√(l/g)", "2π√(g/l)", "√(l/g)", "πl/g"],
  ans: "2π√(l/g)",
  topic: "Simple Harmonic Motion"
},
{
  q: "Total energy in SHM is:",
  options: ["Constant", "Increasing", "Decreasing", "Zero"],
  ans: "Constant",
  topic: "Simple Harmonic Motion"
},
{
  q: "The unit of angular frequency is:",
  options: ["rad s⁻¹", "Hz", "s", "m"],
  ans: "rad s⁻¹",
  topic: "Simple Harmonic Motion"
},
{
  q: "Angular frequency is related to frequency by:",
  options: ["ω = 2πf", "ω = f/2π", "ω = f²", "ω = πf"],
  ans: "ω = 2πf",
  topic: "Simple Harmonic Motion"
},
{
  q: "SHM is a type of:",
  options: ["Periodic motion", "Linear motion", "Random motion", "Circular motion"],
  ans: "Periodic motion",
  topic: "Simple Harmonic Motion"
},
{
  q: "A complete oscillation consists of:",
  options: ["To and fro motion", "One direction", "Half motion", "Circular motion"],
  ans: "To and fro motion",
  topic: "Simple Harmonic Motion"
},
{
  q: "Damping causes the amplitude to:",
  options: ["Decrease", "Increase", "Remain constant", "Reverse"],
  ans: "Decrease",
  topic: "Simple Harmonic Motion"
},
{
  q: "A fluid is a substance that can:",
  options: ["Flow", "Maintain shape", "Resist deformation", "Remain rigid"],
  ans: "Flow",
  topic: "Fluid Dynamics"
},
{
  q: "The SI unit of pressure is:",
  options: ["Pascal", "Newton", "Joule", "Watt"],
  ans: "Pascal",
  topic: "Fluid Dynamics"
},
{
  q: "Pressure in a liquid increases with:",
  options: ["Depth", "Temperature", "Area", "Density decrease"],
  ans: "Depth",
  topic: "Fluid Dynamics"
},
{
  q: "Pressure in a fluid is given by:",
  options: ["ρgh", "mgh", "F/A²", "mv²"],
  ans: "ρgh",
  topic: "Fluid Dynamics"
},
{
  q: "Upthrust on a body in a fluid equals:",
  options: ["Weight of displaced fluid", "Weight of object", "Pressure", "Volume"],
  ans: "Weight of displaced fluid",
  topic: "Fluid Dynamics"
},
{
  q: "Archimedes’ principle applies to:",
  options: ["Fluids", "Solids only", "Gases only", "Vacuum"],
  ans: "Fluids",
  topic: "Fluid Dynamics"
},
{
  q: "A body floats when:",
  options: ["Upthrust equals weight", "Weight > upthrust", "Density is high", "Volume is large"],
  ans: "Upthrust equals weight",
  topic: "Fluid Dynamics"
},
{
  q: "The continuity equation relates to:",
  options: ["Flow rate", "Pressure only", "Temperature", "Mass"],
  ans: "Flow rate",
  topic: "Fluid Dynamics"
},
{
  q: "Bernoulli’s principle relates:",
  options: ["Pressure, velocity and height", "Mass and time", "Force and energy", "Density only"],
  ans: "Pressure, velocity and height",
  topic: "Fluid Dynamics"
},
{
  q: "Viscosity is a measure of:",
  options: ["Resistance to flow", "Density", "Pressure", "Upthrust"],
  ans: "Resistance to flow",
  topic: "Fluid Dynamics"
},
{
  q: "Which fluid has highest viscosity?",
  options: ["Honey", "Water", "Air", "Petrol"],
  ans: "Honey",
  topic: "Fluid Dynamics"
},
{
  q: "Hydraulic machines work based on:",
  options: ["Pascal’s principle", "Bernoulli’s principle", "Archimedes’ principle", "Newton’s laws"],
  ans: "Pascal’s principle",
  topic: "Fluid Dynamics"
},
{
  q: "Pressure applied to a confined fluid is transmitted:",
  options: ["Equally", "Upward only", "Downward only", "Randomly"],
  ans: "Equally",
  topic: "Fluid Dynamics"
},
{
  q: "Which is an application of Bernoulli’s principle?",
  options: ["Atomizer", "Thermometer", "Spring balance", "Lever"],
  ans: "Atomizer",
  topic: "Fluid Dynamics"
},
{
  q: "Density is defined as:",
  options: ["Mass per volume", "Volume per mass", "Weight per area", "Pressure per height"],
  ans: "Mass per volume",
  topic: "Fluid Dynamics"
},
{
  q: "Unit of density is:",
  options: ["kgm⁻³", "kg", "Nm⁻²", "m³"],
  ans: "kgm⁻³",
  topic: "Fluid Dynamics"
},
{
  q: "A body sinks if:",
  options: ["Its density is greater than fluid", "Upthrust > weight", "Volume is large", "Pressure is high"],
  ans: "Its density is greater than fluid",
  topic: "Fluid Dynamics"
},
{
  q: "Which quantity affects buoyant force?",
  options: ["Volume displaced", "Mass of object", "Shape only", "Temperature"],
  ans: "Volume displaced",
  topic: "Fluid Dynamics"
},
{
  q: "Hydraulic press multiplies:",
  options: ["Force", "Velocity", "Energy", "Mass"],
  ans: "Force",
  topic: "Fluid Dynamics"
},
{
  q: "Liquids exert pressure:",
  options: ["In all directions", "Downward only", "Upward only", "Sideways only"],
  ans: "In all directions",
  topic: "Fluid Dynamics"
},
    {
  q: "The scalar (dot) product of two vectors A and B is given by:",
  options: ["ABcosθ", "ABsinθ", "A+B", "A×B"],
  ans: "ABcosθ",
  topic: "Dot Product of Vectors"
},
{
  q: "The dot product of two perpendicular vectors is:",
  options: ["Zero", "Maximum", "Negative", "Infinite"],
  ans: "Zero",
  topic: "Dot Product of Vectors"
},
{
  q: "Which quantity is a scalar product?",
  options: ["Work done", "Velocity", "Displacement", "Force"],
  ans: "Work done",
  topic: "Dot Product of Vectors"
},
{
  q: "If A·B = 0, then the angle between A and B is:",
  options: ["90°", "0°", "45°", "180°"],
  ans: "90°",
  topic: "Dot Product of Vectors"
},
{
  q: "The dot product of a vector with itself equals:",
  options: ["Square of its magnitude", "Zero", "Its magnitude", "Its direction"],
  ans: "Square of its magnitude",
  topic: "Dot Product of Vectors"
},
{
  q: "Unit of work done is:",
  options: ["Joule", "Newton", "Watt", "Meter"],
  ans: "Joule",
  topic: "Dot Product of Vectors"
},
{
  q: "If A = 3i + 4j, the magnitude of A is:",
  options: ["5", "7", "1", "25"],
  ans: "5",
  topic: "Dot Product of Vectors"
},
{
  q: "A·B is maximum when θ equals:",
  options: ["0°", "90°", "180°", "45°"],
  ans: "0°",
  topic: "Dot Product of Vectors"
},
{
  q: "Which is NOT a vector?",
  options: ["Energy", "Velocity", "Acceleration", "Force"],
  ans: "Energy",
  topic: "Dot Product of Vectors"
},
{
  q: "If force acts perpendicular to displacement, work done is:",
  options: ["Zero", "Maximum", "Negative", "Positive"],
  ans: "Zero",
  topic: "Dot Product of Vectors"
},
{
  q: "The dot product gives a:",
  options: ["Scalar quantity", "Vector quantity", "Tensor", "Direction"],
  ans: "Scalar quantity",
  topic: "Dot Product of Vectors"
},
{
  q: "Which expression represents work?",
  options: ["F·s", "F×s", "Fs²", "F/s"],
  ans: "F·s",
  topic: "Dot Product of Vectors"
},
{
  q: "The dot product of two parallel vectors is:",
  options: ["Maximum", "Zero", "Negative", "Undefined"],
  ans: "Maximum",
  topic: "Dot Product of Vectors"
},
{
  q: "cos180° equals:",
  options: ["-1", "0", "1", "0.5"],
  ans: "-1",
  topic: "Dot Product of Vectors"
},
{
  q: "If θ > 90°, the dot product is:",
  options: ["Negative", "Positive", "Zero", "Constant"],
  ans: "Negative",
  topic: "Dot Product of Vectors"
},
{
  q: "Unit vectors have magnitude:",
  options: ["1", "0", "10", "100"],
  ans: "1",
  topic: "Dot Product of Vectors"
},
{
  q: "The dot product is commutative:",
  options: ["Yes", "No", "Sometimes", "Never"],
  ans: "Yes",
  topic: "Dot Product of Vectors"
},
{
  q: "The angle between identical vectors is:",
  options: ["0°", "90°", "45°", "180°"],
  ans: "0°",
  topic: "Dot Product of Vectors"
},
{
  q: "Work done moving in a circle at constant speed is:",
  options: ["Zero", "Maximum", "Negative", "Positive"],
  ans: "Zero",
  topic: "Dot Product of Vectors"
},
{
  q: "Which involves dot product?",
  options: ["Power = F·v", "Torque", "Angular momentum", "Rotation"],
  ans: "Power = F·v",
  topic: "Dot Product of Vectors"
}
    // ... Kinematics, Work, Energy, Power, and Thermodynamics need 10 questions each...
],

"CHM101": [
{
  q: "The enthalpy change when 1 mole of a substance is formed from its elements is called:",
  options: ["Standard enthalpy of formation", "Standard enthalpy of combustion", "Lattice enthalpy", "Bond enthalpy"],
  ans: "Standard enthalpy of formation",
  topic: "Energetics"
},
{
  q: "The enthalpy change when 1 mole of a substance is completely burned in oxygen is called:",
  options: ["Standard enthalpy of combustion", "Standard enthalpy of formation", "Lattice enthalpy", "Activation energy"],
  ans: "Standard enthalpy of combustion",
  topic: "Energetics"
},
{
  q: "Which of the following is always exothermic?",
  options: ["Combustion", "Photosynthesis", "Dissolving KCl in water", "Melting ice"],
  ans: "Combustion",
  topic: "Energetics"
},
{
  q: "Endothermic reactions:",
  options: ["Absorb heat", "Release heat", "Have negative ΔH", "Occur spontaneously always"],
  ans: "Absorb heat",
  topic: "Energetics"
},
{
  q: "Exothermic reactions:",
  options: ["Release heat", "Absorb heat", "Have positive ΔH", "Decrease stability"],
  ans: "Release heat",
  topic: "Energetics"
},
{
  q: "The energy required to break 1 mole of bonds in gaseous molecules is called:",
  options: ["Bond dissociation energy", "Lattice energy", "Ionization energy", "Electron affinity"],
  ans: "Bond dissociation energy",
  topic: "Energetics"
},
{
  q: "Lattice enthalpy is always:",
  options: ["Exothermic", "Endothermic", "Zero", "Dependent on solvent only"],
  ans: "Exothermic",
  topic: "Energetics"
},
{
  q: "Which of the following increases entropy?",
  options: ["Melting of ice", "Freezing of water", "Condensation of steam", "Deposition of frost"],
  ans: "Melting of ice",
  topic: "Energetics"
},
{
  q: "The enthalpy change when 1 mole of ionic solid is dissolved in water is called:",
  options: ["Enthalpy of solution", "Enthalpy of formation", "Combustion enthalpy", "Bond energy"],
  ans: "Enthalpy of solution",
  topic: "Energetics"
},
{
  q: "Hess’s law is based on the principle that:",
  options: ["Enthalpy is a state function", "Entropy always increases", "Gibbs free energy is zero", "Activation energy is constant"],
  ans: "Enthalpy is a state function",
  topic: "Energetics"
},
{
  q: "The enthalpy change when 1 mole of gaseous ions forms 1 mole of ionic solid is called:",
  options: ["Lattice enthalpy", "Bond enthalpy", "Enthalpy of solution", "Activation energy"],
  ans: "Lattice enthalpy",
  topic: "Energetics"
},
{
  q: "Which reaction is usually exothermic?",
  options: ["Neutralization of acid and base", "Photosynthesis", "Electrolysis of water", "Melting of ice"],
  ans: "Neutralization of acid and base",
  topic: "Energetics"
},
{
  q: "Activation energy is the:",
  options: ["Minimum energy required for a reaction", "Total energy released", "Energy absorbed by surroundings", "Heat content of products"],
  ans: "Minimum energy required for a reaction",
  topic: "Energetics"
},
{
  q: "In an exothermic reaction, the products are:",
  options: ["Lower in energy than reactants", "Higher in energy than reactants", "Same energy as reactants", "Unstable always"],
  ans: "Lower in energy than reactants",
  topic: "Energetics"
},
{
  q: "The standard enthalpy of formation of an element in its most stable form is:",
  options: ["Zero", "Positive", "Negative", "Equal to bond energy"],
  ans: "Zero",
  topic: "Energetics"
},
{
  q: "Which of the following is endothermic?",
  options: ["Photosynthesis", "Combustion of methane", "Neutralization of HCl and NaOH", "Condensation of steam"],
  ans: "Photosynthesis",
  topic: "Energetics"
},
{
  q: "The enthalpy change accompanying the formation of 1 mole of ionic solid from its gaseous ions is called:",
  options: ["Lattice enthalpy", "Bond enthalpy", "Enthalpy of hydration", "Combustion enthalpy"],
  ans: "Lattice enthalpy",
  topic: "Energetics"
},
{
  q: "ΔH for a reaction is negative. The reaction is:",
  options: ["Exothermic", "Endothermic", "Spontaneous always", "Non-spontaneous"],
  ans: "Exothermic",
  topic: "Energetics"
},
{
  q: "The enthalpy change when 1 mole of gaseous ions is dissolved in water is called:",
  options: ["Enthalpy of hydration", "Enthalpy of formation", "Bond enthalpy", "Lattice enthalpy"],
  ans: "Enthalpy of hydration",
  topic: "Energetics"
},
{
  q: "The total energy change of a reaction is independent of the pathway followed. This is called:",
  options: ["Hess’s law", "First law of thermodynamics", "Le Chatelier’s principle", "Entropy change"],
  ans: "Hess’s law",
  topic: "Energetics"
},
// ===============================
// ELECTRONIC CONFIGURATION (20 QUESTIONS)
// ===============================

{
  q: "Electronic configuration describes the arrangement of:",
  options: [
    "Neutrons in an atom",
    "Protons in an atom",
    "Electrons in atomic orbitals",
    "Atoms in a molecule"
  ],
  ans: "Electrons in atomic orbitals",
  topic: "Electronic Configuration"
},

{
  q: "The maximum number of electrons that can occupy an s-orbital is:",
  options: ["1", "2", "6", "10"],
  ans: "2",
  topic: "Electronic Configuration"
},

{
  q: "Which subshell can hold a maximum of 6 electrons?",
  options: ["s", "p", "d", "f"],
  ans: "p",
  topic: "Electronic Configuration"
},

{
  q: "The electronic configuration of hydrogen (Z = 1) is:",
  options: ["1s¹", "1s²", "2s¹", "2p¹"],
  ans: "1s¹",
  topic: "Electronic Configuration"
},

{
  q: "Which principle states that electrons fill the lowest energy orbital first?",
  options: [
    "Pauli exclusion principle",
    "Hund’s rule",
    "Aufbau principle",
    "Heisenberg uncertainty principle"
  ],
  ans: "Aufbau principle",
  topic: "Electronic Configuration"
},

{
  q: "The Pauli exclusion principle states that:",
  options: [
    "No two electrons can have the same energy",
    "Electrons occupy orbitals singly first",
    "No two electrons in an atom can have the same four quantum numbers",
    "Electrons move in circular orbits"
  ],
  ans: "No two electrons in an atom can have the same four quantum numbers",
  topic: "Electronic Configuration"
},

{
  q: "Hund’s rule of maximum multiplicity states that electrons:",
  options: [
    "Pair up before occupying orbitals",
    "Occupy degenerate orbitals singly first",
    "Always occupy s-orbitals first",
    "Move randomly in orbitals"
  ],
  ans: "Occupy degenerate orbitals singly first",
  topic: "Electronic Configuration"
},

{
  q: "What is the electronic configuration of helium (Z = 2)?",
  options: ["1s¹", "1s²", "2s²", "2p²"],
  ans: "1s²",
  topic: "Electronic Configuration"
},

{
  q: "Which subshell has the highest energy among the following?",
  options: ["2s", "2p", "3s", "3p"],
  ans: "3p",
  topic: "Electronic Configuration"
},

{
  q: "The maximum number of electrons in the third shell is:",
  options: ["8", "18", "32", "2"],
  ans: "18",
  topic: "Electronic Configuration"
},

{
  q: "The electronic configuration of sodium (Z = 11) is:",
  options: [
    "1s² 2s² 2p⁶ 3s¹",
    "1s² 2s² 2p⁵ 3s²",
    "1s² 2s² 2p⁶ 3p¹",
    "1s² 2s² 2p⁶"
  ],
  ans: "1s² 2s² 2p⁶ 3s¹",
  topic: "Electronic Configuration"
},

{
  q: "Which element has the electronic configuration 1s² 2s² 2p⁶?",
  options: ["Neon", "Oxygen", "Fluorine", "Nitrogen"],
  ans: "Neon",
  topic: "Electronic Configuration"
},

{
  q: "Valence electrons are electrons in the:",
  options: [
    "Innermost shell",
    "Nucleus",
    "Outermost shell",
    "Second shell only"
  ],
  ans: "Outermost shell",
  topic: "Electronic Configuration"
},

{
  q: "The number of valence electrons in magnesium (Z = 12) is:",
  options: ["1", "2", "6", "8"],
  ans: "2",
  topic: "Electronic Configuration"
},

{
  q: "Which element has two electrons in its outermost shell?",
  options: ["Sodium", "Magnesium", "Aluminium", "Chlorine"],
  ans: "Magnesium",
  topic: "Electronic Configuration"
},

{
  q: "The electronic configuration of chlorine (Z = 17) ends in:",
  options: ["3s²", "3p³", "3p⁵", "3p⁶"],
  ans: "3p⁵",
  topic: "Electronic Configuration"
},

{
  q: "Which subshell is filled last in potassium (Z = 19)?",
  options: ["3p", "4s", "3d", "4p"],
  ans: "4s",
  topic: "Electronic Configuration"
},

{
  q: "An element with electronic configuration ending in p⁶ belongs to:",
  options: [
    "Alkali metals",
    "Alkaline earth metals",
    "Halogens",
    "Noble gases"
  ],
  ans: "Noble gases",
  topic: "Electronic Configuration"
},

{
  q: "Which orbital is filled before 3d according to the Aufbau principle?",
  options: ["4s", "4p", "3p", "5s"],
  ans: "4s",
  topic: "Electronic Configuration"
},

{
  q: "Electronic configuration is useful in predicting:",
  options: [
    "Atomic mass only",
    "Chemical properties of elements",
    "Neutron number",
    "Nuclear reactions"
  ],
  ans: "Chemical properties of elements",
  topic: "Electronic Configuration"
},
{
  q: "Oxidation involves:",
  options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"],
  ans: "Loss of electrons",
  topic: "Redox Reaction"
},
{
  q: "Reduction involves:",
  options: ["Gain of electrons", "Loss of electrons", "Gain of oxygen", "Loss of hydrogen"],
  ans: "Gain of electrons",
  topic: "Redox Reaction"
},
{
  q: "Which is the oxidizing agent?",
  options: ["Substance reduced", "Substance oxidized", "Electron donor", "Reducing agent"],
  ans: "Substance reduced",
  topic: "Redox Reaction"
},
{
  q: "In Zn + Cu²⁺ → Zn²⁺ + Cu, Zn is:",
  options: ["Oxidized", "Reduced", "Catalyst", "Neutral"],
  ans: "Oxidized",
  topic: "Redox Reaction"
},
{
  q: "In Zn + Cu²⁺ → Zn²⁺ + Cu, Cu²⁺ is:",
  options: ["Oxidized", "Reduced", "Neutral", "Catalyst"],
  ans: "Reduced",
  topic: "Redox Reaction"
},
{
  q: "Reducing agent is the substance that:",
  options: ["Gets oxidized", "Gets reduced", "Remains unchanged", "Absorbs heat"],
  ans: "Gets oxidized",
  topic: "Redox Reaction"
},
{
  q: "Oxidizing agent is the substance that:",
  options: ["Gets reduced", "Gets oxidized", "Remains unchanged", "Loses heat"],
  ans: "Gets reduced",
  topic: "Redox Reaction"
},
{
  q: "Assign oxidation number to S in H2S:",
  options: ["-2", "+2", "0", "+1"],
  ans: "-2",
  topic: "Redox Reaction"
},
{
  q: "Assign oxidation number to N in NO3⁻:",
  options: ["+5", "+3", "-3", "+1"],
  ans: "+5",
  topic: "Redox Reaction"
},
{
  q: "In MnO4⁻ → Mn²⁺, Mn is:",
  options: ["Reduced", "Oxidized", "Unchanged", "Catalyst"],
  ans: "Reduced",
  topic: "Redox Reaction"
},
{
  q: "In Cl2 + 2NaBr → 2NaCl + Br2, Br⁻ is:",
  options: ["Oxidized", "Reduced", "Neutral", "Catalyst"],
  ans: "Oxidized",
  topic: "Redox Reaction"
},
{
  q: "In Cl2 + 2NaBr → 2NaCl + Br2, Cl2 is:",
  options: ["Oxidized", "Reduced", "Neutral", "Catalyst"],
  ans: "Reduced",
  topic: "Redox Reaction"
},
{
  q: "A redox reaction always involves:",
  options: ["Both oxidation and reduction", "Only oxidation", "Only reduction", "No electron transfer"],
  ans: "Both oxidation and reduction",
  topic: "Redox Reaction"
},
{
  q: "Oxidation number of Fe in Fe2O3 is:",
  options: ["+3", "+2", "0", "-3"],
  ans: "+3",
  topic: "Redox Reaction"
},
{
  q: "Oxidation number of O in H2O2 is:",
  options: ["-1", "-2", "0", "+1"],
  ans: "-1",
  topic: "Redox Reaction"
},
{
  q: "In 2H2 + O2 → 2H2O, O2 is:",
  options: ["Reduced", "Oxidized", "Neutral", "Catalyst"],
  ans: "Reduced",
  topic: "Redox Reaction"
},
{
  q: "In 2H2 + O2 → 2H2O, H2 is:",
  options: ["Oxidized", "Reduced", "Neutral", "Catalyst"],
  ans: "Oxidized",
  topic: "Redox Reaction"
},
{
  q: "Which of the following is a redox indicator?",
  options: ["KMnO4", "Phenolphthalein", "Methyl orange", "Bromothymol blue"],
  ans: "KMnO4",
  topic: "Redox Reaction"
},
{
  q: "Disproportionation reaction involves:",
  options: ["Same element is oxidized and reduced", "Only oxidation", "Only reduction", "No redox change"],
  ans: "Same element is oxidized and reduced",
  topic: "Redox Reaction"
},
{
  q: "Electron donor in redox reaction is:",
  options: ["Reducing agent", "Oxidizing agent", "Catalyst", "Solvent"],
  ans: "Reducing agent",
  topic: "Redox Reaction"
},    
    
    // ===============================
// CORROSION OF METALS (20 QUESTIONS)
// ===============================

{
  q: "Corrosion is best defined as:",
  options: [
    "The physical breaking of a metal",
    "The gradual destruction of a metal by chemical or electrochemical action",
    "The melting of metals at high temperature",
    "The purification of metals"
  ],
  ans: "The gradual destruction of a metal by chemical or electrochemical action",
  topic: "Corrosion of Metals"
},

{
  q: "Which of the following metals is most prone to corrosion?",
  options: ["Gold", "Copper", "Iron", "Platinum"],
  ans: "Iron",
  topic: "Corrosion of Metals"
},

{
  q: "Rusting of iron occurs in the presence of:",
  options: [
    "Oxygen only",
    "Water only",
    "Oxygen and water",
    "Carbon dioxide only"
  ],
  ans: "Oxygen and water",
  topic: "Corrosion of Metals"
},

{
  q: "The reddish-brown substance formed during rusting of iron is:",
  options: [
    "Iron(II) oxide",
    "Iron(III) oxide",
    "Hydrated iron(III) oxide",
    "Iron carbonate"
  ],
  ans: "Hydrated iron(III) oxide",
  topic: "Corrosion of Metals"
},

{
  q: "Which gas accelerates the corrosion of metals in moist air?",
  options: ["Nitrogen", "Hydrogen", "Carbon dioxide", "Helium"],
  ans: "Carbon dioxide",
  topic: "Corrosion of Metals"
},

{
  q: "The anode reaction during rusting of iron is:",
  options: [
    "Fe → Fe²⁺ + 2e⁻",
    "O₂ + 2H₂O + 4e⁻ → 4OH⁻",
    "Fe²⁺ + 2e⁻ → Fe",
    "H₂O → H⁺ + OH⁻"
  ],
  ans: "Fe → Fe²⁺ + 2e⁻",
  topic: "Corrosion of Metals"
},

{
  q: "The cathode reaction during rusting involves the reduction of:",
  options: ["Iron", "Hydrogen ions", "Oxygen", "Carbon dioxide"],
  ans: "Oxygen",
  topic: "Corrosion of Metals"
},

{
  q: "Which of the following conditions will prevent rusting?",
  options: [
    "High humidity",
    "Presence of salt",
    "Painting the metal surface",
    "Exposure to air"
  ],
  ans: "Painting the metal surface",
  topic: "Corrosion of Metals"
},

{
  q: "Galvanization is the process of coating iron with:",
  options: ["Copper", "Tin", "Zinc", "Aluminium"],
  ans: "Zinc",
  topic: "Corrosion of Metals"
},

{
  q: "Why is zinc used to protect iron from rusting?",
  options: [
    "Zinc is more expensive",
    "Zinc is less reactive than iron",
    "Zinc is more reactive than iron",
    "Zinc does not corrode"
  ],
  ans: "Zinc is more reactive than iron",
  topic: "Corrosion of Metals"
},

{
  q: "Cathodic protection prevents corrosion by:",
  options: [
    "Coating the metal with paint",
    "Making the metal the cathode",
    "Removing oxygen from air",
    "Increasing temperature"
  ],
  ans: "Making the metal the cathode",
  topic: "Corrosion of Metals"
},

{
  q: "Which metal is commonly used as a sacrificial anode?",
  options: ["Silver", "Copper", "Zinc", "Gold"],
  ans: "Zinc",
  topic: "Corrosion of Metals"
},

{
  q: "Corrosion that occurs uniformly over the entire metal surface is called:",
  options: [
    "Pitting corrosion",
    "Uniform corrosion",
    "Crevice corrosion",
    "Stress corrosion"
  ],
  ans: "Uniform corrosion",
  topic: "Corrosion of Metals"
},

{
  q: "Pitting corrosion is particularly dangerous because it:",
  options: [
    "Occurs slowly",
    "Is easily detected",
    "Causes sudden failure",
    "Forms protective layers"
  ],
  ans: "Causes sudden failure",
  topic: "Corrosion of Metals"
},

{
  q: "Stainless steel resists corrosion mainly due to the presence of:",
  options: ["Iron", "Nickel", "Chromium", "Carbon"],
  ans: "Chromium",
  topic: "Corrosion of Metals"
},

{
  q: "Which environment promotes corrosion most rapidly?",
  options: [
    "Dry air",
    "Vacuum",
    "Salty water",
    "Pure water"
  ],
  ans: "Salty water",
  topic: "Corrosion of Metals"
},

{
  q: "The protective oxide layer on aluminium is:",
  options: [
    "Porous",
    "Non-adherent",
    "Adherent and stable",
    "Easily removable"
  ],
  ans: "Adherent and stable",
  topic: "Corrosion of Metals"
},

{
  q: "Which of the following is NOT a method of preventing corrosion?",
  options: [
    "Electroplating",
    "Alloying",
    "Increasing moisture",
    "Cathodic protection"
  ],
  ans: "Increasing moisture",
  topic: "Corrosion of Metals"
},

{
  q: "Electrochemical corrosion involves:",
  options: [
    "Only physical changes",
    "Redox reactions",
    "Neutralization reactions",
    "Thermal decomposition"
  ],
  ans: "Redox reactions",
  topic: "Corrosion of Metals"
},

{
  q: "Which pair of metals will reduce corrosion when in contact?",
  options: [
    "Iron and copper",
    "Iron and zinc",
    "Iron and silver",
    "Iron and gold"
  ],
  ans: "Iron and zinc",
  topic: "Corrosion of Metals"
},
    {
  q: "Colligative properties of solutions depend on:",
  options: ["Number of solute particles", "Nature of solute", "Nature of solvent", "Type of solution"],
  ans: "Number of solute particles",
  topic: "Colligative Properties"
},
{
  q: "Which of the following is NOT a colligative property?",
  options: ["Boiling point elevation", "Osmotic pressure", "Lowering of vapour pressure", "Viscosity"],
  ans: "Viscosity",
  topic: "Colligative Properties"
},
{
  q: "Addition of a non-volatile solute to a solvent causes the vapour pressure to:",
  options: ["Decrease", "Increase", "Remain constant", "Become zero"],
  ans: "Decrease",
  topic: "Colligative Properties"
},
{
  q: "The boiling point of a solution is always _____ than that of the pure solvent.",
  options: ["Higher", "Lower", "Equal", "Unpredictable"],
  ans: "Higher",
  topic: "Colligative Properties"
},
{
  q: "Which law explains the lowering of vapour pressure?",
  options: ["Raoult’s law", "Henry’s law", "Boyle’s law", "Dalton’s law"],
  ans: "Raoult’s law",
  topic: "Colligative Properties"
},
{
  q: "Freezing point depression occurs because solute particles:",
  options: ["Disrupt crystal formation", "Increase vapour pressure", "Increase density", "React with solvent"],
  ans: "Disrupt crystal formation",
  topic: "Colligative Properties"
},
{
  q: "Which expression represents boiling point elevation?",
  options: ["ΔTb = Kb m", "ΔTf = Kf m", "π = MRT", "P = XpP⁰"],
  ans: "ΔTb = Kb m",
  topic: "Colligative Properties"
},
{
  q: "Molality is preferred in colligative property calculations because it:",
  options: ["Is temperature independent", "Uses volume", "Depends on pressure", "Is easier to calculate"],
  ans: "Is temperature independent",
  topic: "Colligative Properties"
},
{
  q: "What happens to freezing point when salt is added to ice?",
  options: ["It decreases", "It increases", "It remains constant", "It becomes zero"],
  ans: "It decreases",
  topic: "Colligative Properties"
},
{
  q: "Which colligative property is used to determine molecular mass?",
  options: ["Osmotic pressure", "Viscosity", "Density", "Surface tension"],
  ans: "Osmotic pressure",
  topic: "Colligative Properties"
},
{
  q: "The osmotic pressure of a solution increases when:",
  options: ["Concentration increases", "Temperature decreases", "Solvent increases", "Solute decreases"],
  ans: "Concentration increases",
  topic: "Colligative Properties"
},
{
  q: "Which expression represents osmotic pressure?",
  options: ["π = MRT", "ΔTb = Kb m", "ΔTf = Kf m", "PV = nRT"],
  ans: "π = MRT",
  topic: "Colligative Properties"
},
{
  q: "A solution freezes at -2°C. If pure water freezes at 0°C, the freezing point depression is:",
  options: ["2°C", "-2°C", "0°C", "1°C"],
  ans: "2°C",
  topic: "Colligative Properties"
},
{
  q: "Which solution will have the highest boiling point?",
  options: ["0.5m NaCl", "0.5m glucose", "0.5m urea", "Pure water"],
  ans: "0.5m NaCl",
  topic: "Colligative Properties"
},
{
  q: "Electrolytes show greater colligative effects because they:",
  options: ["Dissociate into ions", "Have higher mass", "React with solvent", "Are volatile"],
  ans: "Dissociate into ions",
  topic: "Colligative Properties"
},
{
  q: "Which factor does NOT affect colligative properties?",
  options: ["Chemical nature of solute", "Number of particles", "Degree of dissociation", "Concentration"],
  ans: "Chemical nature of solute",
  topic: "Colligative Properties"
},
{
  q: "Antifreeze in car radiators works mainly by:",
  options: ["Lowering freezing point", "Increasing density", "Increasing pressure", "Reducing corrosion"],
  ans: "Lowering freezing point",
  topic: "Colligative Properties"
},
{
  q: "If a solution boils at 102°C and pure solvent boils at 100°C, the boiling point elevation is:",
  options: ["2°C", "102°C", "100°C", "1°C"],
  ans: "2°C",
  topic: "Colligative Properties"
},
{
  q: "Which of the following is an example of osmotic pressure in daily life?",
  options: ["Preservation of food with salt", "Rusting of iron", "Combustion", "Electrolysis"],
  ans: "Preservation of food with salt",
  topic: "Colligative Properties"
},
{
  q: "Osmosis occurs through a:",
  options: ["Semi-permeable membrane", "Permeable membrane", "Metallic surface", "Glass tube"],
  ans: "Semi-permeable membrane",
  topic: "Colligative Properties"
},
    
    
    {
  q: "How many Faradays of electricity are required to deposit 108 g of silver? (Ag = 108)",
  options: ["1 F", "2 F", "0.5 F", "3 F"],
  ans: "1 F",
  topic: "Electrolysis"
},
{
  q: "A current of 5 A flows for 1930 s through CuSO₄ solution. Calculate the mass of copper deposited. (Cu=64, F=96500C)",
  options: ["3.2 g", "6.4 g", "1.6 g", "12.8 g"],
  ans: "6.4 g",
  topic: "Electrolysis"
},
{
  q: "Which law of electrolysis states that mass deposited is proportional to charge passed?",
  options: ["Faraday's First Law", "Faraday's Second Law", "Ohm's Law", "Avogadro's Law"],
  ans: "Faraday's First Law",
  topic: "Electrolysis"
},
{
  q: "Calculate the charge required to deposit 27 g of aluminum. (Al=27, valency=3)",
  options: ["3 F", "1 F", "9 F", "0.5 F"],
  ans: "3 F",
  topic: "Electrolysis"
},
{
  q: "A current of 2 A is passed for 965 s. How many Faradays is this?",
  options: ["0.02 F", "0.1 F", "0.5 F", "1 F"],
  ans: "0.02 F",
  topic: "Electrolysis"
},
{
  q: "The mass deposited during electrolysis depends on all EXCEPT:",
  options: ["Time", "Current", "Temperature", "Equivalent mass"],
  ans: "Temperature",
  topic: "Electrolysis"
},
{
  q: "How long will it take a 10 A current to deposit 108 g of silver?",
  options: ["9650 s", "965 s", "1930 s", "483 s"],
  ans: "9650 s",
  topic: "Electrolysis"
},
{
  q: "Which electrode is connected to the positive terminal?",
  options: ["Anode", "Cathode", "Electrolyte", "Salt bridge"],
  ans: "Anode",
  topic: "Electrolysis"
},
{
  q: "During electrolysis, reduction occurs at the:",
  options: ["Cathode", "Anode", "Electrolyte", "Power source"],
  ans: "Cathode",
  topic: "Electrolysis"
},
{
  q: "Calculate the mass of copper deposited by 1 Faraday. (Cu=64, valency=2)",
  options: ["32 g", "64 g", "16 g", "128 g"],
  ans: "32 g",
  topic: "Electrolysis"
},
{
  q: "A current of 4 A flows for 2412.5 s. How many Faradays are passed?",
  options: ["0.1 F", "0.5 F", "1 F", "2 F"],
  ans: "0.1 F",
  topic: "Electrolysis"
},
{
  q: "Which gas is liberated at the anode during electrolysis of acidified water?",
  options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"],
  ans: "Oxygen",
  topic: "Electrolysis"
},
{
  q: "What volume of hydrogen is produced by 1 Faraday at STP?",
  options: ["11.2 dm³", "22.4 dm³", "5.6 dm³", "44.8 dm³"],
  ans: "11.2 dm³",
  topic: "Electrolysis"
},
{
  q: "Which ion is discharged at the cathode during electrolysis of CuSO₄?",
  options: ["Cu²⁺", "SO₄²⁻", "H⁺", "OH⁻"],
  ans: "Cu²⁺",
  topic: "Electrolysis"
},
{
  q: "Electroplating is mainly used to:",
  options: ["Prevent corrosion", "Increase weight", "Change color only", "Produce heat"],
  ans: "Prevent corrosion",
  topic: "Electrolysis"
},
{
  q: "Calculate the mass of zinc deposited by 2 Faradays. (Zn=65, valency=2)",
  options: ["65 g", "130 g", "32.5 g", "260 g"],
  ans: "65 g",
  topic: "Electrolysis"
},
{
  q: "Which factor does NOT affect electrolysis?",
  options: ["Nature of electrolyte", "Current", "Time", "Pressure"],
  ans: "Pressure",
  topic: "Electrolysis"
},
{
  q: "Which substance is used as electrolyte in electroplating?",
  options: ["Salt of the metal", "Water", "Acid", "Base"],
  ans: "Salt of the metal",
  topic: "Electrolysis"
},
{
  q: "Faraday's second law relates mass deposited to:",
  options: ["Equivalent mass", "Density", "Volume", "Temperature"],
  ans: "Equivalent mass",
  topic: "Electrolysis"
},
{
  q: "Electrolysis of molten NaCl produces sodium at the:",
  options: ["Cathode", "Anode", "Electrolyte", "Surface"],
  ans: "Cathode",
  topic: "Electrolysis"
},
   {
  q: "Chemical equilibrium is best described as a state where:",
  options: [
    "The rate of forward reaction equals the rate of backward reaction",
    "The reaction has stopped completely",
    "Only products are formed",
    "Reactants are completely used up"
  ],
  ans: "The rate of forward reaction equals the rate of backward reaction",
  topic: "Chemical Equilibrium"
},
{
  q: "A reversible reaction is one that:",
  options: [
    "Can proceed in both forward and backward directions",
    "Occurs only once",
    "Produces heat only",
    "Occurs very fast"
  ],
  ans: "Can proceed in both forward and backward directions",
  topic: "Chemical Equilibrium"
},
{
  q: "At equilibrium, the concentration of reactants and products:",
  options: [
    "Remain constant with time",
    "Are always equal",
    "Are zero",
    "Increase continuously"
  ],
  ans: "Remain constant with time",
  topic: "Chemical Equilibrium"
},
{
  q: "Which of the following reactions can attain equilibrium?",
  options: [
    "N₂ + 3H₂ ⇌ 2NH₃",
    "Combustion of petrol",
    "Rusting of iron",
    "Explosion of TNT"
  ],
  ans: "N₂ + 3H₂ ⇌ 2NH₃",
  topic: "Chemical Equilibrium"
},
{
  q: "The equilibrium constant (Kc) of a reaction is:",
  options: [
    "The ratio of product concentration to reactant concentration at equilibrium",
    "The rate of forward reaction",
    "The time taken to reach equilibrium",
    "Always equal to 1"
  ],
  ans: "The ratio of product concentration to reactant concentration at equilibrium",
  topic: "Chemical Equilibrium"
},
{
  q: "For the reaction: aA + bB ⇌ cC + dD, the equilibrium constant expression is:",
  options: [
    "[C]^c [D]^d / [A]^a [B]^b",
    "[A]^a [B]^b / [C]^c [D]^d",
    "[A + B] / [C + D]",
    "[A][B][C][D]"
  ],
  ans: "[C]^c [D]^d / [A]^a [B]^b",
  topic: "Chemical Equilibrium"
},
{
  q: "Which factor does NOT affect chemical equilibrium?",
  options: [
    "Catalyst",
    "Concentration",
    "Pressure",
    "Temperature"
  ],
  ans: "Catalyst",
  topic: "Chemical Equilibrium"
},
{
  q: "A catalyst in an equilibrium reaction:",
  options: [
    "Speeds up both forward and backward reactions equally",
    "Shifts equilibrium to the right",
    "Changes equilibrium constant",
    "Stops the reaction"
  ],
  ans: "Speeds up both forward and backward reactions equally",
  topic: "Chemical Equilibrium"
},
{
  q: "According to Le Chatelier’s principle, when a system at equilibrium is disturbed:",
  options: [
    "The system shifts to oppose the disturbance",
    "The system stops reacting",
    "The reaction rate becomes zero",
    "The equilibrium constant changes"
  ],
  ans: "The system shifts to oppose the disturbance",
  topic: "Chemical Equilibrium"
},
{
  q: "Increasing the concentration of reactants in an equilibrium reaction will:",
  options: [
    "Shift equilibrium towards products",
    "Shift equilibrium towards reactants",
    "Have no effect",
    "Stop the reaction"
  ],
  ans: "Shift equilibrium towards products",
  topic: "Chemical Equilibrium"
},
{
  q: "Increasing the pressure of an equilibrium system favors the side with:",
  options: [
    "Fewer moles of gas",
    "More moles of gas",
    "Equal moles of gas",
    "Higher temperature"
  ],
  ans: "Fewer moles of gas",
  topic: "Chemical Equilibrium"
},
{
  q: "Increasing temperature favors the direction of a reaction that is:",
  options: [
    "Endothermic",
    "Exothermic",
    "Neutral",
    "Catalyzed"
  ],
  ans: "Endothermic",
  topic: "Chemical Equilibrium"
},
{
  q: "If a reaction is exothermic, increasing temperature will:",
  options: [
    "Shift equilibrium to the left",
    "Shift equilibrium to the right",
    "Have no effect",
    "Increase Kc"
  ],
  ans: "Shift equilibrium to the left",
  topic: "Chemical Equilibrium"
},
{
  q: "The value of equilibrium constant depends on:",
  options: [
    "Temperature only",
    "Pressure only",
    "Concentration only",
    "Catalyst only"
  ],
  ans: "Temperature only",
  topic: "Chemical Equilibrium"
},
{
  q: "When Kc is very large, the reaction favors:",
  options: [
    "Products",
    "Reactants",
    "Neither side",
    "Both equally"
  ],
  ans: "Products",
  topic: "Chemical Equilibrium"
},
{
  q: "When Kc is very small, the reaction favors:",
  options: [
    "Reactants",
    "Products",
    "Both equally",
    "Neither"
  ],
  ans: "Reactants",
  topic: "Chemical Equilibrium"
},
{
  q: "Which of the following statements about equilibrium is TRUE?",
  options: [
    "Equilibrium is dynamic",
    "Reactions stop at equilibrium",
    "Only products are present",
    "Only reactants are present"
  ],
  ans: "Equilibrium is dynamic",
  topic: "Chemical Equilibrium"
},
{
  q: "In a closed system at equilibrium:",
  options: [
    "Forward and backward reactions continue",
    "Reaction has stopped",
    "Only backward reaction occurs",
    "Only forward reaction occurs"
  ],
  ans: "Forward and backward reactions continue",
  topic: "Chemical Equilibrium"
},
{
  q: "Which condition is necessary for equilibrium to be established?",
  options: [
    "The system must be closed",
    "The reaction must be fast",
    "The temperature must be high",
    "The pressure must be low"
  ],
  ans: "The system must be closed",
  topic: "Chemical Equilibrium"
},
{
  q: "If equilibrium is disturbed by removing products, the system will:",
  options: [
    "Produce more products",
    "Produce more reactants",
    "Stop reacting",
    "Remain unchanged"
  ],
  ans: "Produce more products",
  topic: "Chemical Equilibrium"
},
    /* ================= ATOMIC STRUCTURE (15) ================= */
    {
    q: "The smallest unit of an element that retains its properties is:",
    options: ["Atom", "Molecule", "Ion", "Compound"],
    ans: "Atom",
    topic: "Atomic Structure"
    },
    {
    q: "The nucleus of an atom contains:",
    options: ["Electrons only", "Protons only", "Neutrons only", "Protons and neutrons"],
    ans: "Protons and neutrons",
    topic: "Atomic Structure"
    },
    {
    q: "Electrons are found in the:",
    options: ["Nucleus", "Orbitals", "Protons", "Neutrons"],
    ans: "Orbitals",
    topic: "Atomic Structure"
    },
    {
    q: "The atomic number represents the number of:",
    options: ["Neutrons", "Electrons", "Protons", "Nucleons"],
    ans: "Protons",
    topic: "Atomic Structure"
    },
    {
    q: "Isotopes of an element have the same:",
    options: ["Mass number", "Atomic number", "Number of neutrons", "Mass"],
    ans: "Atomic number",
    topic: "Atomic Structure"
    },
    {
    q: "Which particle has a negative charge?",
    options: ["Proton", "Electron", "Neutron", "Nucleus"],
    ans: "Electron",
    topic: "Atomic Structure"
    },
    {
    q: "The mass number is the sum of:",
    options: ["Protons and electrons", "Neutrons only", "Protons and neutrons", "Electrons only"],
    ans: "Protons and neutrons",
    topic: "Atomic Structure"
    },
    {
    q: "Which model introduced electron shells?",
    options: ["Dalton", "Rutherford", "Bohr", "Thomson"],
    ans: "Bohr",
    topic: "Atomic Structure"
    },
    {
    q: "Neutrons have:",
    options: ["Positive charge", "Negative charge", "No charge", "Variable charge"],
    ans: "No charge",
    topic: "Atomic Structure"
    },
    {
    q: "The relative mass of an electron is approximately:",
    options: ["1", "1/1836", "1/12", "0"],
    ans: "1/1836",
    topic: "Atomic Structure"
    },
    {
    q: "Which particle determines chemical properties?",
    options: ["Neutrons", "Protons", "Electrons", "Nucleus"],
    ans: "Electrons",
    topic: "Atomic Structure"
    },
    {
    q: "An atom is electrically neutral because:",
    options: ["Protons = electrons", "Neutrons = electrons", "Protons = neutrons", "Electrons = neutrons"],
    ans: "Protons = electrons",
    topic: "Atomic Structure"
    },
    {
    q: "The maximum number of electrons in the first shell is:",
    options: ["2", "8", "18", "32"],
    ans: "2",
    topic: "Atomic Structure"
    },
    {
    q: "Which shell is closest to the nucleus?",
    options: ["L", "M", "N", "K"],
    ans: "K",
    topic: "Atomic Structure"
    },
    {
    q: "Atomic structure explains:",
    options: ["Bonding", "Reactivity", "Spectra", "All"],
    ans: "All",
    topic: "Atomic Structure"
    },
    
    /* ================= CHEMICAL BONDING (15) ================= */
    {
    q: "A chemical bond is formed by:",
    options: ["Neutrons", "Electrons", "Protons", "Nucleus"],
    ans: "Electrons",
    topic: "Chemical Bonding"
    },
    {
    q: "Ionic bonding involves:",
    options: ["Sharing electrons", "Transfer of electrons", "Sharing protons", "Transfer of neutrons"],
    ans: "Transfer of electrons",
    topic: "Chemical Bonding"
    },
    {
    q: "Covalent bonding involves:",
    options: ["Electron transfer", "Electron sharing", "Ion formation", "Metal ions"],
    ans: "Electron sharing",
    topic: "Chemical Bonding"
    },
    {
    q: "Which bond exists in NaCl?",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    ans: "Ionic",
    topic: "Chemical Bonding"
    },
    {
    q: "A bond formed between metals is called:",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    ans: "Metallic",
    topic: "Chemical Bonding"
    },
    {
    q: "Hydrogen bonding occurs in:",
    options: ["NaCl", "H2O", "CO2", "O2"],
    ans: "H2O",
    topic: "Chemical Bonding"
    },
    {
    q: "Which compound has covalent bonds?",
    options: ["NaCl", "MgO", "HCl", "KBr"],
    ans: "HCl",
    topic: "Chemical Bonding"
    },
    {
    q: "Electrovalent bond is another name for:",
    options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    ans: "Ionic bond",
    topic: "Chemical Bonding"
    },
    {
    q: "Bond length refers to:",
    options: ["Distance between nuclei", "Bond energy", "Bond angle", "Electron cloud"],
    ans: "Distance between nuclei",
    topic: "Chemical Bonding"
    },
    {
    q: "Which bond is strongest?",
    options: ["Hydrogen", "Ionic", "Covalent", "Metallic"],
    ans: "Covalent",
    topic: "Chemical Bonding"
    },
    {
    q: "Valence electrons are found in:",
    options: ["Inner shell", "Middle shell", "Outer shell", "Nucleus"],
    ans: "Outer shell",
    topic: "Chemical Bonding"
    },
    {
    q: "A molecule formed by electron sharing is:",
    options: ["Ionic", "Covalent", "Metallic", "None"],
    ans: "Covalent",
    topic: "Chemical Bonding"
    },
    {
    q: "Which element forms metallic bonds?",
    options: ["Oxygen", "Sodium", "Chlorine", "Nitrogen"],
    ans: "Sodium",
    topic: "Chemical Bonding"
    },
    {
    q: "Bond energy is the energy required to:",
    options: ["Form bond", "Break bond", "Transfer electrons", "Share protons"],
    ans: "Break bond",
    topic: "Chemical Bonding"
    },
    {
    q: "Chemical bonding explains:",
    options: ["Stability of atoms", "Reactivity", "Structure of compounds", "All"],
    ans: "All",
    topic: "Chemical Bonding"
    },
    
    /* ================= STOICHIOMETRY (15) ================= */
    {
    q: "Stoichiometry deals with:",
    options: ["Energy changes", "Reaction quantities", "Atomic structure", "Bonding"],
    ans: "Reaction quantities",
    topic: "Stoichiometry"
    },
    {
    q: "The mole is a unit for:",
    options: ["Mass", "Volume", "Amount of substance", "Density"],
    ans: "Amount of substance",
    topic: "Stoichiometry"
    },
    {
    q: "One mole contains:",
    options: ["6.02 × 10²² particles", "6.02 × 10²³ particles", "6.02 × 10²¹ particles", "6.02 × 10²⁰ particles"],
    ans: "6.02 × 10²³ particles",
    topic: "Stoichiometry"
    },
    {
    q: "Molar mass is expressed in:",
    options: ["g", "g/mol", "kg", "mol"],
    ans: "g/mol",
    topic: "Stoichiometry"
    },
    {
    q: "Which law supports stoichiometry?",
    options: ["Boyle’s law", "Law of conservation of mass", "Charles law", "Avogadro’s law"],
    ans: "Law of conservation of mass",
    topic: "Stoichiometry"
    },
    {
    q: "The empirical formula shows:",
    options: ["Actual number of atoms", "Simplest ratio", "Total mass", "Structure"],
    ans: "Simplest ratio",
    topic: "Stoichiometry"
    },
    {
    q: "The molecular formula shows:",
    options: ["Simplest ratio", "Actual number of atoms", "Mass only", "Ions only"],
    ans: "Actual number of atoms",
    topic: "Stoichiometry"
    },
    {
    q: "Limiting reagent determines:",
    options: ["Rate", "Yield", "Energy", "Temperature"],
    ans: "Yield",
    topic: "Stoichiometry"
    },
    {
    q: "Percentage yield is calculated as:",
    options: ["Actual/Theoretical × 100", "Theoretical/Actual × 100", "Actual + theoretical", "Difference"],
    ans: "Actual/Theoretical × 100",
    topic: "Stoichiometry"
    },
    {
    q: "Balanced chemical equations obey:",
    options: ["Mass conservation", "Energy loss", "Volume change", "Temperature rise"],
    ans: "Mass conservation",
    topic: "Stoichiometry"
    },
    {
    q: "Which is required to balance equations?",
    options: ["Mass", "Atoms", "Volume", "Energy"],
    ans: "Atoms",
    topic: "Stoichiometry"
    },
    {
    q: "Moles can be calculated using:",
    options: ["Mass/molar mass", "Volume × density", "Mass × volume", "Energy"],
    ans: "Mass/molar mass",
    topic: "Stoichiometry"
    },
    {
    q: "Which unit measures amount of substance?",
    options: ["Gram", "Mole", "Liter", "Kilogram"],
    ans: "Mole",
    topic: "Stoichiometry"
    },
    {
    q: "Stoichiometry calculations are based on:",
    options: ["Balanced equations", "Unbalanced equations", "Assumptions", "Guessing"],
    ans: "Balanced equations",
    topic: "Stoichiometry"
    },
    {
    q: "Avogadro’s number relates mole to:",
    options: ["Mass", "Particles", "Volume", "Energy"],
    ans: "Particles",
    topic: "Stoichiometry"
    },
    
    /* ================= ACIDS AND BASES (15) ================= */
    {
    q: "According to Arrhenius, an acid is a substance that:",
    options: ["Accepts protons", "Donates protons", "Produces H⁺ in water", "Produces OH⁻"],
    ans: "Produces H⁺ in water",
    topic: "Acids and Bases"
    },
    {
    q: "According to Arrhenius, a base produces:",
    options: ["H⁺", "OH⁻", "Electrons", "Protons"],
    ans: "OH⁻",
    topic: "Acids and Bases"
    },
    {
    q: "Brønsted–Lowry acid is a:",
    options: ["Proton donor", "Proton acceptor", "Electron donor", "Electron acceptor"],
    ans: "Proton donor",
    topic: "Acids and Bases"
    },
    {
    q: "Brønsted–Lowry base is a:",
    options: ["Proton donor", "Electron acceptor", "Proton acceptor", "Hydrogen producer"],
    ans: "Proton acceptor",
    topic: "Acids and Bases"
    },
    {
    q: "Lewis acid is a substance that:",
    options: ["Donates electrons", "Accepts electrons", "Produces H⁺", "Produces OH⁻"],
    ans: "Accepts electrons",
    topic: "Acids and Bases"
    },
    {
    q: "Lewis base is a substance that:",
    options: ["Accepts electrons", "Donates electrons", "Produces H⁺", "Produces salt"],
    ans: "Donates electrons",
    topic: "Acids and Bases"
    },
    {
    q: "pH is a measure of:",
    options: ["Basicity", "Acidity", "Temperature", "Pressure"],
    ans: "Acidity",
    topic: "Acids and Bases"
    },
    {
    q: "pH is calculated using:",
    options: ["−log[H⁺]", "log[H⁺]", "1/[H⁺]", "H⁺ × log"],
    ans: "−log[H⁺]",
    topic: "Acids and Bases"
    },
    {
    q: "If [H⁺] = 1 × 10⁻³ mol/dm³, pH is:",
    options: ["3", "7", "10", "11"],
    ans: "3",
    topic: "Acids and Bases"
    },
    {
    q: "A solution with pH 7 is:",
    options: ["Acidic", "Basic", "Neutral", "Strong acid"],
    ans: "Neutral",
    topic: "Acids and Bases"
    },
    {
    q: "If pH < 7, the solution is:",
    options: ["Neutral", "Basic", "Acidic", "Salt"],
    ans: "Acidic",
    topic: "Acids and Bases"
    },
    {
    q: "If [H⁺] = 1 × 10⁻⁵, pH equals:",
    options: ["5", "7", "9", "10"],
    ans: "5",
    topic: "Acids and Bases"
    },
    {
    q: "Which is a strong acid?",
    options: ["CH₃COOH", "HCl", "NH₄OH", "H₂O"],
    ans: "HCl",
    topic: "Acids and Bases"
    },
    {
    q: "Which is a strong base?",
    options: ["NaOH", "NH₃", "H₂CO₃", "CH₃COOH"],
    ans: "NaOH",
    topic: "Acids and Bases"
    },
    {
    q: "As pH increases, acidity:",
    options: ["Increases", "Decreases", "Remains same", "Becomes neutral"],
    ans: "Decreases",
    topic: "Acids and Bases"
    },
    
    /* ================= REACTION KINETICS (15) ================= */
    {
    q: "Reaction kinetics studies:",
    options: ["Reaction energy", "Reaction rate", "Equilibrium", "Bonding"],
    ans: "Reaction rate",
    topic: "Reaction Kinetics"
    },
    {
    q: "Rate of reaction depends on:",
    options: ["Temperature", "Concentration", "Catalyst", "All"],
    ans: "All",
    topic: "Reaction Kinetics"
    },
    {
    q: "Increasing temperature generally:",
    options: ["Slows reaction", "Stops reaction", "Increases reaction rate", "Has no effect"],
    ans: "Increases reaction rate",
    topic: "Reaction Kinetics"
    },
    {
    q: "A catalyst works by:",
    options: ["Increasing activation energy", "Lowering activation energy", "Stopping reaction", "Changing products"],
    ans: "Lowering activation energy",
    topic: "Reaction Kinetics"
    },
    {
    q: "Activation energy is:",
    options: ["Total energy", "Minimum energy for reaction", "Bond energy", "Heat energy"],
    ans: "Minimum energy for reaction",
    topic: "Reaction Kinetics"
    },
    {
    q: "Increasing concentration increases:",
    options: ["Collision frequency", "Mass", "Volume", "Energy loss"],
    ans: "Collision frequency",
    topic: "Reaction Kinetics"
    },
    {
    q: "Rate of reaction is measured as:",
    options: ["Change in concentration/time", "Mass/time", "Energy/time", "Volume/time"],
    ans: "Change in concentration/time",
    topic: "Reaction Kinetics"
    },
    {
    q: "Which factor does NOT affect reaction rate?",
    options: ["Temperature", "Pressure", "Catalyst", "Color"],
    ans: "Color",
    topic: "Reaction Kinetics"
    },
    {
    q: "Fast reactions have:",
    options: ["High activation energy", "Low activation energy", "No energy", "Zero collisions"],
    ans: "Low activation energy",
    topic: "Reaction Kinetics"
    },
    {
    q: "Collision theory states that reactions occur when particles:",
    options: ["Collide effectively", "Touch lightly", "Mix randomly", "Stay apart"],
    ans: "Collide effectively",
    topic: "Reaction Kinetics"
    },
    {
    q: "Pressure affects reactions involving:",
    options: ["Solids", "Liquids", "Gases", "All"],
    ans: "Gases",
    topic: "Reaction Kinetics"
    },
    {
    q: "A catalyst remains:",
    options: ["Consumed", "Changed", "Unchanged", "Destroyed"],
    ans: "Unchanged",
    topic: "Reaction Kinetics"
    },
    {
    q: "Which reaction is fastest?",
    options: ["High temperature", "Low temperature", "Low concentration", "No catalyst"],
    ans: "High temperature",
    topic: "Reaction Kinetics"
    },
    {
    q: "Reaction rate increases with:",
    options: ["Lower temperature", "Lower surface area", "Higher surface area", "Lower pressure"],
    ans: "Higher surface area",
    topic: "Reaction Kinetics"
    },
    {
    q: "Kinetics helps predict:",
    options: ["Speed of reaction", "Products", "Bond type", "Atomic number"],
    ans: "Speed of reaction",
    topic: "Reaction Kinetics"
    },
    
    
    
    // --- 10 Questions for Atomic Structure ---
    {
        q: "The particle responsible for the unique identity of an element is the:",
        options: ["Electron", "Neutron", "Proton", "Ion"],
        ans: "Proton",
        topic: "Atomic Structure"
    },
    {
        q: "The mass number of an atom is the sum of:",
        options: ["Protons and Electrons", "Neutrons and Electrons", "Protons and Neutrons", "Valence Electrons"],
        ans: "Protons and Neutrons",
        topic: "Atomic Structure"
    },
    {
        q: "Isotopes are atoms of the same element with a different number of:",
        options: ["Protons", "Electrons", "Neutrons", "Shells"],
        ans: "Neutrons",
        topic: "Atomic Structure"
    },
    {
        q: "The region around the nucleus where electrons are most likely to be found is called the:",
        options: ["Orbital", "Shell", "Subshell", "Nucleon"],
        ans: "Orbital",
        topic: "Atomic Structure"
    },
    {
        q: "The maximum number of electrons that can occupy the third energy shell (n=3) is:",
        options: ["2", "8", "18", "32"],
        ans: "18",
        topic: "Atomic Structure"
    },
    {
        q: "Who proposed the 'plum pudding' model of the atom?",
        options: ["Ernest Rutherford", "Niels Bohr", "J.J. Thomson", "John Dalton"],
        ans: "J.J. Thomson",
        topic: "Atomic Structure"
    },
    {
        q: "The atomic number is equal to the number of:",
        options: ["Neutrons", "Protons", "Nucleons", "Valence electrons"],
        ans: "Protons",
        topic: "Atomic Structure"
    },
    {
        q: "Rutherford's gold foil experiment led to the discovery of the:",
        options: ["Electron", "Proton", "Neutron", "Atomic nucleus"],
        ans: "Atomic nucleus",
        topic: "Atomic Structure"
    },
    {
        q: "The Pauli Exclusion Principle states that no two electrons in an atom can have the same set of:",
        options: ["Valence electrons", "Orbital types", "Quantum numbers", "Spin values"],
        ans: "Quantum numbers",
        topic: "Atomic Structure"
    },
    {
        q: "An ion with a positive charge is called a:",
        options: ["Anion", "Isotope", "Cation", "Molecule"],
        ans: "Cation",
        topic: "Atomic Structure"
    },

    // --- 10 Questions for Chemical Bonding ---
    {
        q: "The force of attraction between oppositely charged ions is a(n):",
        options: ["Covalent bond", "Hydrogen bond", "Metallic bond", "Ionic bond"],
        ans: "Ionic bond",
        topic: "Chemical Bonding"
    },
    {
        q: "A bond formed by the sharing of electron pairs between atoms is a:",
        options: ["Ionic bond", "Covalent bond", "Dative bond", "Van der Waals force"],
        ans: "Covalent bond",
        topic: "Chemical Bonding"
    },
    {
        q: "The tendency of atoms to achieve 8 electrons in their outermost shell is called the:",
        options: ["Octet rule", "Pauli principle", "Hund's rule", "Aufbau principle"],
        ans: "Octet rule",
        topic: "Chemical Bonding"
    },
    {
        q: "Which molecule exhibits a triple bond?",
        options: ["O_2", "H_2O", "N_2", "CO_2"],
        ans: "N_2",
        topic: "Chemical Bonding"
    },
    {
        q: "The VSEPR theory is used to predict the _______ of molecules.",
        options: ["Polarity", "Mass", "Geometry", "Reactivity"],
        ans: "Geometry",
        topic: "Chemical Bonding"
    },
    {
        q: "The compound formed between a metal and a non-metal is usually:",
        options: ["Metallic", "Covalent", "Ionic", "Dative"],
        ans: "Ionic",
        topic: "Chemical Bonding"
    },
    {
        q: "Which type of bond involves a free-moving 'sea' of electrons?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        ans: "Metallic",
        topic: "Chemical Bonding"
    },
    {
        q: "In a polar covalent bond, electrons are shared:",
        options: ["Equally", "Unequally", "Completely", "Not at all"],
        ans: "Unequally",
        topic: "Chemical Bonding"
    },
    {
        q: "The electron affinity is a measure of an atom's tendency to:",
        options: ["Lose an electron", "Gain an electron", "Share electrons", "Attract a proton"],
        ans: "Gain an electron",
        topic: "Chemical Bonding"
    },
    {
        q: "The geometry of the water molecule (H_2O) is:",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
        ans: "Bent",
        topic: "Chemical Bonding"
    },
    
    // ... Stoichiometry, Acids and Bases, and Reaction Kinetics need 10 questions each...
],

// --- Sample structure for other subjects ---
"COS101": [
   
    
    /* ============ COMPUTER BASICS (15) ============ */
    {
    q: "A computer is best described as a machine that:",
    options: ["Thinks like humans", "Processes data into information", "Stores electricity", "Controls humans"],
    ans: "Processes data into information",
    topic: "Computer Basics"
    },
    {
    q: "Data refers to:",
    options: ["Processed facts", "Raw facts", "Information", "Results"],
    ans: "Raw facts",
    topic: "Computer Basics"
    },
    {
    q: "Information is:",
    options: ["Unprocessed data", "Raw numbers", "Processed data", "Random facts"],
    ans: "Processed data",
    topic: "Computer Basics"
    },
    {
    q: "Which of the following is NOT a characteristic of a computer?",
    options: ["Speed", "Accuracy", "Intelligence", "Storage"],
    ans: "Intelligence",
    topic: "Computer Basics"
    },
    {
    q: "The main advantage of computers is their ability to:",
    options: ["Think", "Make decisions", "Process data quickly", "Sleep"],
    ans: "Process data quickly",
    topic: "Computer Basics"
    },
    {
    q: "IPO in computing stands for:",
    options: ["Input–Process–Output", "Input–Program–Output", "Internal–Process–Output", "Input–Power–Output"],
    ans: "Input–Process–Output",
    topic: "Computer Basics"
    },
    {
    q: "Which device is used to input data?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    ans: "Keyboard",
    topic: "Computer Basics"
    },
    {
    q: "Which device displays output?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    ans: "Monitor",
    topic: "Computer Basics"
    },
    {
    q: "The brain of the computer is the:",
    options: ["RAM", "Hard disk", "CPU", "Monitor"],
    ans: "CPU",
    topic: "Computer Basics"
    },
    {
    q: "A computer without software is:",
    options: ["Fast", "Useless", "Accurate", "Automatic"],
    ans: "Useless",
    topic: "Computer Basics"
    },
    {
    q: "Computers operate based on:",
    options: ["Electricity", "Human intelligence", "Instructions", "Guessing"],
    ans: "Instructions",
    topic: "Computer Basics"
    },
    {
    q: "Which of the following is an output device?",
    options: ["Scanner", "Keyboard", "Printer", "Mouse"],
    ans: "Printer",
    topic: "Computer Basics"
    },
    {
    q: "A laptop is an example of:",
    options: ["Supercomputer", "Mainframe", "Microcomputer", "Minicomputer"],
    ans: "Microcomputer",
    topic: "Computer Basics"
    },
    {
    q: "The physical parts of a computer are called:",
    options: ["Software", "Programs", "Hardware", "Data"],
    ans: "Hardware",
    topic: "Computer Basics"
    },
    {
    q: "Computer speed is measured in:",
    options: ["Watts", "Hertz", "Bytes", "Pixels"],
    ans: "Hertz",
    topic: "Computer Basics"
    },
    
    /* ============ COMPUTER HARDWARE (15) ============ */
    {
    q: "Hardware refers to:",
    options: ["Programs", "Physical components", "Data", "Instructions"],
    ans: "Physical components",
    topic: "Hardware"
    },
    {
    q: "Which is NOT hardware?",
    options: ["Keyboard", "Monitor", "Mouse", "Operating system"],
    ans: "Operating system",
    topic: "Hardware"
    },
    {
    q: "The CPU consists of:",
    options: ["RAM and ROM", "ALU and Control Unit", "Hard disk and RAM", "Monitor and keyboard"],
    ans: "ALU and Control Unit",
    topic: "Hardware"
    },
    {
    q: "ALU stands for:",
    options: ["Automatic Logic Unit", "Arithmetic Logic Unit", "Advanced Logic Unit", "Array Logic Unit"],
    ans: "Arithmetic Logic Unit",
    topic: "Hardware"
    },
    {
    q: "Which component stores data temporarily?",
    options: ["Hard disk", "ROM", "RAM", "Flash drive"],
    ans: "RAM",
    topic: "Hardware"
    },
    {
    q: "ROM is mainly used to store:",
    options: ["User data", "Temporary files", "Startup instructions", "Movies"],
    ans: "Startup instructions",
    topic: "Hardware"
    },
    {
    q: "Which is a secondary storage device?",
    options: ["RAM", "CPU", "Hard disk", "Cache"],
    ans: "Hard disk",
    topic: "Hardware"
    },
    {
    q: "A mouse is an example of:",
    options: ["Output device", "Input device", "Storage device", "Processing device"],
    ans: "Input device",
    topic: "Hardware"
    },
    {
    q: "Which device is used to scan documents?",
    options: ["Printer", "Scanner", "Monitor", "Speaker"],
    ans: "Scanner",
    topic: "Hardware"
    },
    {
    q: "The control unit does the following EXCEPT:",
    options: ["Direct operations", "Interpret instructions", "Perform calculations", "Coordinate activities"],
    ans: "Perform calculations",
    topic: "Hardware"
    },
    {
    q: "Which device produces sound?",
    options: ["Speaker", "Keyboard", "Scanner", "Mouse"],
    ans: "Speaker",
    topic: "Hardware"
    },
    {
    q: "The main memory of a computer is:",
    options: ["ROM", "Hard disk", "RAM", "Flash"],
    ans: "RAM",
    topic: "Hardware"
    },
    {
    q: "Which of these is NOT an input device?",
    options: ["Mouse", "Scanner", "Monitor", "Keyboard"],
    ans: "Monitor",
    topic: "Hardware"
    },
    {
    q: "CPU speed is measured in:",
    options: ["Bytes", "Hertz", "Volts", "Inches"],
    ans: "Hertz",
    topic: "Hardware"
    },
    {
    q: "Which stores data permanently?",
    options: ["RAM", "Cache", "Hard disk", "Registers"],
    ans: "Hard disk",
    topic: "Hardware"
    },
    
    /* ============ COMPUTER SOFTWARE (15) ============ */
    {
    q: "Software refers to:",
    options: ["Physical devices", "Programs and instructions", "Electric current", "Hardware parts"],
    ans: "Programs and instructions",
    topic: "Software"
    },
    {
    q: "Which is system software?",
    options: ["MS Word", "Excel", "Windows", "Chrome"],
    ans: "Windows",
    topic: "Software"
    },
    {
    q: "Application software is used to:",
    options: ["Control hardware", "Solve user problems", "Start computer", "Manage memory"],
    ans: "Solve user problems",
    topic: "Software"
    },
    {
    q: "Which of the following is application software?",
    options: ["Linux", "Windows", "MS Excel", "BIOS"],
    ans: "MS Excel",
    topic: "Software"
    },
    {
    q: "Operating system functions include:",
    options: ["Memory management", "Process control", "File management", "All"],
    ans: "All",
    topic: "Software"
    },
    {
    q: "BIOS is stored in:",
    options: ["RAM", "ROM", "Hard disk", "Cache"],
    ans: "ROM",
    topic: "Software"
    },
    {
    q: "Which software manages computer resources?",
    options: ["Application", "System software", "Utility", "Compiler"],
    ans: "System software",
    topic: "Software"
    },
    {
    q: "A compiler is used to:",
    options: ["Translate high-level language", "Store data", "Manage hardware", "Display output"],
    ans: "Translate high-level language",
    topic: "Software"
    },
    {
    q: "Utility software is used for:",
    options: ["Games", "Maintenance", "Writing letters", "Browsing"],
    ans: "Maintenance",
    topic: "Software"
    },
    {
    q: "Which is NOT a programming language?",
    options: ["Python", "Java", "HTML", "Keyboard"],
    ans: "Keyboard",
    topic: "Software"
    },
    {
    q: "MS Word is used for:",
    options: ["Calculations", "Word processing", "Presentations", "Databases"],
    ans: "Word processing",
    topic: "Software"
    },
    {
    q: "Software piracy refers to:",
    options: ["Software development", "Illegal copying of software", "Software testing", "Installation"],
    ans: "Illegal copying of software",
    topic: "Software"
    },
    {
    q: "Which software is used for spreadsheets?",
    options: ["Word", "PowerPoint", "Excel", "Access"],
    ans: "Excel",
    topic: "Software"
    },
    {
    q: "System software starts when:",
    options: ["User clicks mouse", "Computer boots", "Application opens", "Internet connects"],
    ans: "Computer boots",
    topic: "Software"
    },
    {
    q: "The OS acts as an interface between:",
    options: ["User and hardware", "Hardware and power", "Software and data", "Memory and CPU"],
    ans: "User and hardware",
    topic: "Software"
    },
    
   
    {
        q: "The process of breaking down a problem into smaller, manageable subproblems is called:",
        options: ["Abstraction", "Recursion", "Decomposition", "Encapsulation"],
        ans: "Decomposition",
        topic: "Introduction to Algorithms"
    },
  
    {
        q: "What is the time complexity of the following recurrence relation: T(n) = 2T(n/2) + n?",
        options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
        ans: "O(n log n)",
        topic: "Programming Fundamentals"
    },
    {
        q: "In memory management, what is the 'Dangling Pointer' problem?",
        options: ["A pointer pointing to a deallocated memory location", "A pointer that has not been initialized", "A pointer pointing to the NULL address", "A pointer that causes a Stack Overflow"],
        ans: "A pointer pointing to a deallocated memory location",
        topic: "Programming Fundamentals"
    },
    {
        q: "Dry-run this logic: integer x = 7, y = 3; x = x + y; y = x - y; x = x - y; What are the final values of x and y?",
        options: ["x=3, y=7", "x=7, y=3", "x=10, y=4", "x=4, y=10"],
        ans: "x=3, y=7",
        topic: "Programming Fundamentals"
    },
    {
        q: "What is the result of the bitwise operation (12 & 10) in binary-based programming?",
        options: ["8", "14", "2", "10"],
        ans: "8",
        topic: "Programming Fundamentals"
    },
    {
        q: "Which data structure is primarily used to implement Recursion in a compiler?",
        options: ["Stack", "Queue", "Linked List", "Binary Tree"],
        ans: "Stack",
        topic: "Programming Fundamentals"
    },
    {
        q: "A recursive function without a 'Base Case' will eventually result in what?",
        options: ["Stack Overflow", "Heap Corruption", "Infinite loop with no error", "Syntax Error"],
        ans: "Stack Overflow",
        topic: "Programming Fundamentals"
    },
    {
        q: "In Object-Oriented Programming, 'Method Overloading' is an example of:",
        options: ["Compile-time Polymorphism", "Run-time Polymorphism", "Encapsulation", "Multiple Inheritance"],
        ans: "Compile-time Polymorphism",
        topic: "Programming Fundamentals"
    },
    {
        q: "What is the output of 5 + '5' - 1 in a loosely typed language like JavaScript?",
        options: ["54", "9", "11", "Error"],
        ans: "54",
        topic: "Programming Fundamentals"
    },
    {
        q: "What is the space complexity of a recursive Fibonacci function without memoization?",
        options: ["O(n)", "O(2^n)", "O(1)", "O(log n)"],
        ans: "O(n)",
        topic: "Programming Fundamentals"
    },
    {
        q: "Which sorting algorithm has a worst-case time complexity of O(n²)?",
        options: ["Quick Sort", "Merge Sort", "Heap Sort", "None of the above"],
        ans: "Quick Sort",
        topic: "Programming Fundamentals"
    },
    {
        q: "If a function is called 'Tail Recursive', where is the recursive call located?",
        options: ["As the very last action of the function", "Inside a loop only", "At the beginning of the function", "In a separate thread"],
        ans: "As the very last action of the function",
        topic: "Programming Fundamentals"
    },
    {
        q: "In C/C++, what does the 'volatile' keyword signify to the compiler?",
        options: ["The variable can be changed by external hardware, so don't optimize it", "The variable is constant", "The variable should be stored in a register", "The variable is visible only to one thread"],
        ans: "The variable can be changed by external hardware, so don't optimize it",
        topic: "Programming Fundamentals"
    },
    {
        q: "In Short-circuit evaluation, what happens in the expression (True || X)?",
        options: ["X is never evaluated", "X is evaluated first", "The program crashes", "The compiler throws a warning"],
        ans: "X is never evaluated",
        topic: "Programming Fundamentals"
    },
    {
        q: "A 'Pass-by-Reference' function call does what?",
        options: ["Passes the address of the variable", "Creates a local copy of the variable", "Only works for integers", "Increases memory usage significantly"],
        ans: "Passes the address of the variable",
        topic: "Programming Fundamentals"
    },
    {
        q: "Which of the following is an 'Idempotent' operation in programming?",
        options: ["Assigning x = 5", "Incrementing x++", "Printing to console", "Deleting a file twice"],
        ans: "Assigning x = 5",
        topic: "Programming Fundamentals"
    },
    {
        q: "What is the purpose of a 'Semaphore' in concurrent programming?",
        options: ["To control access to a common resource by multiple processes", "To speed up floating point math", "To link external libraries", "To allocate memory on the heap"],
        ans: "To control access to a common resource by multiple processes",
        topic: "Programming Fundamentals"
    },
    {
        q: "The 'Big-Endian' system stores the most significant byte at:",
        options: ["The smallest memory address", "The largest memory address", "Random addresses", "Only in registers"],
        ans: "The smallest memory address",
        topic: "Programming Fundamentals"
    },
    {
        q: "In Python, what is the 'GIL'?",
        options: ["Global Interpreter Lock", "Graphical Interface Link", "General Iteration Loop", "Garbage Internal Linker"],
        ans: "Global Interpreter Lock",
        topic: "Programming Fundamentals"
    },
    {
        q: "What does the 'break' statement do in a nested loop?",
        options: ["Exits the innermost loop only", "Exits all loops", "Skips the current iteration", "Terminates the program"],
        ans: "Exits the innermost loop only",
        topic: "Programming Fundamentals"
    },
    {
        q: "In an array-based list, what is the cost of inserting an element at index 0?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        ans: "O(n)",
        topic: "Programming Fundamentals"
    },
    // --- 15 Questions for History of computer ---
    { q: "Who is widely recognized as the 'Father of the Computer'?", options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Blaise Pascal"], ans: "Charles Babbage", topic: "History of computer" },
    { q: "The first generation of computers used which technology for circuitry?", options: ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"], ans: "Vacuum Tubes", topic: "History of computer" },
    { q: "Which counting device is considered the earliest precursor to the modern computer?", options: ["Pascaline", "Abacus", "Slide Rule", "Analytical Engine"], ans: "Abacus", topic: "History of computer" },
    { q: "Who was the world's first computer programmer?", options: ["Grace Hopper", "Ada Lovelace", "Bill Gates", "Steve Jobs"], ans: "Ada Lovelace", topic: "History of computer" },
    { q: "The transition from the 1st to the 2nd generation was marked by the invention of:", options: ["The Internet", "The Transistor", "Silicon Chips", "Artificial Intelligence"], ans: "The Transistor", topic: "History of computer" },
    { q: "Which computer was the first general-purpose electronic digital computer (1946)?", options: ["UNIVAC", "ENIAC", "EDVAC", "IBM PC"], ans: "ENIAC", topic: "History of computer" },
    { q: "Third-generation computers (1964-1971) were characterized by:", options: ["Vacuum Tubes", "Magnetic Tapes", "Integrated Circuits (ICs)", "VLSI"], ans: "Integrated Circuits (ICs)", topic: "History of computer" },
    { q: "The Fourth Generation of computers introduced which major component?", options: ["The Microprocessor", "Punch Cards", "Assembly Language", "Machine Code"], ans: "The Microprocessor", topic: "History of computer" },
    { q: "Which generation of computers is primarily focused on Artificial Intelligence (AI)?", options: ["Third", "Fourth", "Fifth", "Sixth"], ans: "Fifth", topic: "History of computer" },
    { q: "The 'Difference Engine' was designed by which pioneer?", options: ["Herman Hollerith", "Charles Babbage", "Jack Kilby", "Lee de Forest"], ans: "Charles Babbage", topic: "History of computer" },
    { q: "Which machine used punched cards to process the 1890 US Census?", options: ["Pascaline", "Analytical Engine", "Hollerith’s Tabulating Machine", "Z3"], ans: "Hollerith’s Tabulating Machine", topic: "History of computer" },
    { q: "The first commercially available computer was the:", options: ["ENIAC", "UNIVAC I", "Apple I", "Altair 8800"], ans: "UNIVAC I", topic: "History of computer" },
    { q: "Who proposed the 'Stored Program Concept' used in modern architecture?", options: ["Steve Wozniak", "John von Neumann", "Tim Berners-Lee", "Dennis Ritchie"], ans: "John von Neumann", topic: "History of computer" },
    { q: "In what year was the first IBM Personal Computer (PC) introduced?", options: ["1975", "1981", "1985", "1990"], ans: "1981", topic: "History of computer" },
    { q: "Which inventor created the 'Pascaline', one of the first mechanical calculators?", options: ["Gottfried Leibniz", "Blaise Pascal", "Joseph Jacquard", "Napier"], ans: "Blaise Pascal", topic: "History of computer" },
// --- 15 Questions for Basic components of computer ---
    { q: "Which component is known as the 'Brain' of the computer?", options: ["RAM", "Hard Drive", "CPU", "Motherboard"], ans: "CPU", topic: "Basic components of computer" },
    { q: "Which part of the CPU performs mathematical calculations and logical comparisons?", options: ["Control Unit", "ALU", "Registers", "Cache"], ans: "ALU", topic: "Basic components of computer" },
    { q: "Which of the following is considered volatile memory?", options: ["ROM", "Hard Disk", "RAM", "Flash Drive"], ans: "RAM", topic: "Basic components of computer" },
    { q: "The physical circuit board that connects all computer components is called the:", options: ["Sound Card", "Motherboard", "Expansion Bus", "CPU socket"], ans: "Motherboard", topic: "Basic components of computer" },
    { q: "Which component stores the BIOS/firmware and is non-volatile?", options: ["RAM", "ROM", "Cache", "SSD"], ans: "ROM", topic: "Basic components of computer" },
    { q: "Which of the following is an input device?", options: ["Monitor", "Printer", "Scanner", "Speaker"], ans: "Scanner", topic: "Basic components of computer" },
    { q: "What is the primary function of the Control Unit (CU) in the CPU?", options: ["Perform addition", "Store files", "Direct operation of the processor", "Display images"], ans: "Direct operation of the processor", topic: "Basic components of computer" },
    { q: "Which storage type has no moving parts and is faster than a traditional HDD?", options: ["Magnetic Tape", "SSD", "Floppy Disk", "CD-ROM"], ans: "SSD", topic: "Basic components of computer" },
    { q: "A 'bit' is a single unit of data representing:", options: ["A letter", "0 or 1", "8 numbers", "A pixel"], ans: "0 or 1", topic: "Basic components of computer" },
    { q: "How many bits make up one byte?", options: ["4", "8", "16", "32"], ans: "8", topic: "Basic components of computer" },
    { q: "Which device is used to convert digital signals to analog for internet transmission via phone lines?", options: ["Router", "Switch", "Modem", "Hub"], ans: "Modem", topic: "Basic components of computer" },
    { q: "Where is the 'Cache' memory usually located for fastest access?", options: ["On the Hard Drive", "Inside the CPU", "On the RAM stick", "In the Cloud"], ans: "Inside the CPU", topic: "Basic components of computer" },
    { q: "Which port is most commonly used to connect a mouse or keyboard today?", options: ["VGA", "Serial Port", "USB", "Parallel Port"], ans: "USB", topic: "Basic components of computer" },
    { q: "The speed of a modern CPU is typically measured in:", options: ["Megabytes (MB)", "Gigahertz (GHz)", "Pixels", "Watts"], ans: "Gigahertz (GHz)", topic: "Basic components of computer" },
    { q: "Which of the following is a secondary storage device?", options: ["Register", "Cache", "Hard Disk Drive", "L1 Memory"], ans: "Hard Disk Drive", topic: "Basic components of computer" },
// --- 15 Questions for Operating Systems ---
    { q: "Which of the following is NOT an operating system?", options: ["Windows", "Linux", "Microsoft Office", "macOS"], ans: "Microsoft Office", topic: "Operating Systems" },
    { q: "The core part of the Operating System that manages hardware and memory is the:", options: ["Shell", "Kernel", "GUI", "Compiler"], ans: "Kernel", topic: "Operating Systems" },
    { q: "What does 'GUI' stand for?", options: ["General User Interface", "Graphical User Interface", "Global Unit Integration", "Graphic User Interaction"], ans: "Graphical User Interface", topic: "Operating Systems" },
    { q: "The process of starting or restarting a computer is called:", options: ["Booting", "Loading", "Formatting", "Compiling"], ans: "Booting", topic: "Operating Systems" },
    { q: "Which feature allows multiple applications to run at the same time?", options: ["Multithreading", "Multitasking", "Multi-user", "Multiplexing"], ans: "Multitasking", topic: "Operating Systems" },
    { q: "In Windows, where are deleted files temporarily stored?", options: ["C: Drive", "Recycle Bin", "Control Panel", "Documents"], ans: "Recycle Bin", topic: "Operating Systems" },
    { q: "What is the primary purpose of an Operating System?", options: ["To play games", "To manage hardware and software resources", "To browse the internet", "To type documents"], ans: "To manage hardware and software resources", topic: "Operating Systems" },
    { q: "Which OS is open-source and widely used for servers?", options: ["Windows 10", "iOS", "Linux", "macOS"], ans: "Linux", topic: "Operating Systems" },
    { q: "The interface that allows users to type commands is called the:", options: ["GUI", "Command Line Interface (CLI)", "Desktop", "Menu bar"], ans: "Command Line Interface (CLI)", topic: "Operating Systems" },
    { q: "When the RAM is full, the OS uses a portion of the hard drive as:", options: ["Virtual Memory", "Cache", "ROM", "Flash"], ans: "Virtual Memory", topic: "Operating Systems" },
    { q: "Which software manages the communication between the OS and a specific piece of hardware (e.g., a printer)?", options: ["Application", "Device Driver", "Utility", "BIOS"], ans: "Device Driver", topic: "Operating Systems" },
    { q: "A situation where two processes are waiting for each other to release resources is a:", options: ["Lockout", "Deadlock", "Crash", "Loop"], ans: "Deadlock", topic: "Operating Systems" },
    { q: "Which OS is developed by Apple for its computers?", options: ["Android", "macOS", "Windows", "Unix"], ans: "macOS", topic: "Operating Systems" },
    { q: "What is a 'File System'?", options: ["A drawer for papers", "How the OS organizes and stores files on a disk", "The antivirus software", "The size of a folder"], ans: "How the OS organizes and stores files on a disk", topic: "Operating Systems" },
    { q: "Which part of the OS handles the allocation of the CPU to different processes?", options: ["File Manager", "Scheduler", "Device Manager", "Memory Manager"], ans: "Scheduler", topic: "Operating Systems" },
    // --- 15 Questions for internet and its application ---
    { q: "What does 'WWW' stand for?", options: ["World Wide Web", "World Web Works", "Wide World Web", "Web World Wide"], ans: "World Wide Web", topic: "internet and its application" },
    { q: "Which protocol is used for securely browsing the web?", options: ["FTP", "SMTP", "HTTPS", "IP"], ans: "HTTPS", topic: "internet and its application" },
    { q: "Every device on the internet must have a unique address called an:", options: ["URL", "Email address", "IP Address", "MAC Address"], ans: "IP Address", topic: "internet and its application" },
    { q: "What does 'DNS' stand for?", options: ["Data Network Service", "Domain Name System", "Digital Network System", "Direct Node Serial"], ans: "Domain Name System", topic: "internet and its application" },
    { q: "Which of these is a web browser?", options: ["Google", "Windows", "Chrome", "HTML"], ans: "Chrome", topic: "internet and its application" },
    { q: "The 'language' used to create the structure of web pages is:", options: ["C++", "HTML", "HTTP", "Python"], ans: "HTML", topic: "internet and its application" },
    { q: "What is a 'Search Engine'?", options: ["A hardware device", "A website used to find information", "A type of browser", "The core of an OS"], ans: "A website used to find information", topic: "internet and its application" },
    { q: "What is the main function of an Email (Electronic Mail)?", options: ["Watch videos", "Exchanging messages over the internet", "Playing games", "Typing documents"], ans: "Exchanging messages over the internet", topic: "internet and its application" },
    { q: "Which protocol is used for sending emails?", options: ["HTTP", "SMTP", "FTP", "POP3"], ans: "SMTP", topic: "internet and its application" },
    { q: "What is 'Cloud Computing'?", options: ["Storing data on local hard drives", "Accessing services and storage over the internet", "A type of weather software", "Coding in the rain"], ans: "Accessing services and storage over the internet", topic: "internet and its application" },
    { q: "A 'Hyperlink' is used to:", options: ["Connect to a printer", "Navigate between web pages", "Secure a password", "Install software"], ans: "Navigate between web pages", topic: "internet and its application" },
    { q: "The first page of a website is typically called the:", options: ["Start page", "Home page", "End page", "Index file"], ans: "Home page", topic: "internet and its application" },
    { q: "What is 'Phishing'?", options: ["A game on the internet", "A method to steal sensitive data via fake emails", "Downloading files faster", "Connecting to a router"], ans: "A method to steal sensitive data via fake emails", topic: "internet and its application" },
    { q: "Which of these is a social networking site?", options: ["Google", "Facebook", "Wikipedia", "Amazon"], ans: "Facebook", topic: "internet and its application" },
    { q: "What does 'URL' stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Link", "User Resource Link"], ans: "Uniform Resource Locator", topic: "internet and its application" },
// --- 15 Questions for Data Structures ---
    { q: "Which data structure follows the LIFO (Last-In, First-Out) principle?", options: ["Queue", "Stack", "Array", "Linked List"], ans: "Stack", topic: "Data Structures" },
    { q: "Which data structure follows the FIFO (First-In, First-Out) principle?", options: ["Stack", "Queue", "Binary Tree", "Graph"], ans: "Queue", topic: "Data Structures" },
    { q: "An 'Array' is a collection of elements that are:", options: ["Of different types", "Stored in non-contiguous memory", "Of the same type and indexed", "Always sorted"], ans: "Of the same type and indexed", topic: "Data Structures" },
    { q: "In a 'Linked List', each element (node) contains a data field and a:", options: ["Counter", "Pointer to the next node", "Copy of the header", "Random number"], ans: "Pointer to the next node", topic: "Data Structures" },
    { q: "What is the top-most node in a Tree data structure called?", options: ["Leaf", "Branch", "Root", "Parent"], ans: "Root", topic: "Data Structures" },
    { q: "A data structure consisting of nodes and edges, used to model networks, is a:", options: ["Stack", "Array", "Graph", "Queue"], ans: "Graph", topic: "Data Structures" },
    { q: "The process of visiting every node in a data structure once is called:", options: ["Searching", "Sorting", "Traversal", "Deletion"], ans: "Traversal", topic: "Data Structures" },
    { q: "What is the index of the first element in most programming arrays?", options: ["1", "0", "-1", "Depends on the user"], ans: "0", topic: "Data Structures" },
    { q: "A 'Binary Search Tree' ensures that the left child of a node is always:", options: ["Larger than the parent", "Smaller than the parent", "Equal to the parent", "Empty"], ans: "Smaller than the parent", topic: "Data Structures" },
    { q: "Which operation is used to add an item to a Stack?", options: ["Enqueue", "Pop", "Push", "Insert"], ans: "Push", topic: "Data Structures" },
    { q: "Which operation is used to remove an item from a Queue?", options: ["Dequeue", "Push", "Pop", "Peek"], ans: "Dequeue", topic: "Data Structures" },
    { q: "A 'Leaf' in a tree structure is a node that:", options: ["Has no children", "Is the root", "Has two children", "Is the largest node"], ans: "Has no children", topic: "Data Structures" },
    { q: "Which data structure is best for implementing Undo/Redo functionality?", options: ["Queue", "Stack", "Graph", "Array"], ans: "Stack", topic: "Data Structures" },
    { q: "In a 'Double Linked List', each node points to:", options: ["The next node only", "The previous node only", "Both next and previous nodes", "The root node"], ans: "Both next and previous nodes", topic: "Data Structures" },
    { q: "The process of arranging data in a specific order (e.g., ascending) is:", options: ["Searching", "Sorting", "Filtering", "Merging"], ans: "Sorting", topic: "Data Structures" },
    // ... (Add 10 questions per COS101 topic) ...
],
"STA111": [
    // --- 15 Questions for errors and approximation ---
    { q: "The difference between the true value and the measured value is the:", options: ["Relative Error", "Absolute Error", "Percentage Error", "Standard Error"], ans: "Absolute Error", topic: "errors and approximation" },
    { q: "Relative error is calculated as:", options: ["Absolute Error / True Value", "True Value - Measured Value", "Measured Value / 100", "Sum of all errors"], ans: "Absolute Error / True Value", topic: "errors and approximation" },
    { q: "Rounding 4.567 to two decimal places gives:", options: ["4.56", "4.57", "4.60", "4.50"], ans: "4.57", topic: "errors and approximation" },
    { q: "Truncating 9.876 to one decimal place gives:", options: ["9.9", "9.8", "10.0", "9.0"], ans: "9.8", topic: "errors and approximation" },
    { q: "Significant figures in 0.0045 are:", options: ["1", "2", "4", "5"], ans: "2", topic: "errors and approximation" },
    { q: "How many significant figures are in 500.0?", options: ["1", "3", "4", "2"], ans: "4", topic: "errors and approximation" },
    { q: "Percentage Error is simply:", options: ["Absolute error * 100", "Relative error * 100", "Measured value / True value", "True value / 100"], ans: "Relative error * 100", topic: "errors and approximation" },
    { q: "If the true value is 10 and the measured value is 9, the absolute error is:", options: ["1", "-1", "0.1", "10%"], ans: "1", topic: "errors and approximation" },
    { q: "Which error occurs due to the limitation of the measuring instrument?", options: ["Human error", "Instrumental error", "Random error", "Systematic error"], ans: "Instrumental error", topic: "errors and approximation" },
    { q: "Rounding 0.0825 to two significant figures gives:", options: ["0.08", "0.083", "0.082", "0.1"], ans: "0.083", topic: "errors and approximation" },
    { q: "Errors that can be eliminated by careful calibration are:", options: ["Random errors", "Systematic errors", "Gross errors", "Statistical errors"], ans: "Systematic errors", topic: "errors and approximation" },
    { q: "Approximating 1234 to the nearest hundred gives:", options: ["1200", "1230", "1300", "1000"], ans: "1200", topic: "errors and approximation" },
    { q: "Which of these is NOT a source of error in statistics?", options: ["Sampling error", "Measurement error", "Exact Calculation", "Data entry error"], ans: "Exact Calculation", topic: "errors and approximation" },
    { q: "In scientific notation, 45,000 is written as:", options: ["4.5 x 10^3", "4.5 x 10^4", "45 x 10^3", "0.45 x 10^5"], ans: "4.5 x 10^4", topic: "errors and approximation" },
    { q: "A 'Mistake' made by a researcher (like misreading a scale) is called a:", options: ["Systematic error", "Random error", "Gross error (Blunder)", "Relative error"], ans: "Gross error (Blunder)", topic: "errors and approximation" },
    // --- 15 Questions for Probability Theory ---
    { q: "The probability of an event that is certain to happen is:", options: ["0", "0.5", "1", "-1"], ans: "1", topic: "Probability Theory" },
    { q: "The probability of an impossible event is:", options: ["1", "0", "0.5", "Infinite"], ans: "0", topic: "Probability Theory" },
    { q: "The set of all possible outcomes of an experiment is called the:", options: ["Event", "Sample Space", "Factorial", "Likelihood"], ans: "Sample Space", topic: "Probability Theory" },
    { q: "If you flip a fair coin, what is the probability of getting heads?", options: ["0.25", "1", "0.5", "0.75"], ans: "0.5", topic: "Probability Theory" },
    { q: "Two events that cannot happen at the same time are called:", options: ["Independent", "Mutually Exclusive", "Dependent", "Conditional"], ans: "Mutually Exclusive", topic: "Probability Theory" },
    { q: "The range of probability values is always between:", options: ["-1 and 1", "0 and 100", "0 and 1", "1 and 10"], ans: "0 and 1", topic: "Probability Theory" },
    { q: "What is the probability of rolling a 4 on a standard 6-sided die?", options: ["1/4", "1/6", "4/6", "1/2"], ans: "1/6", topic: "Probability Theory" },
    { q: "In probability, P(A') represents the probability of:", options: ["Event A happening", "Event A NOT happening", "Both A and B", "A or B"], ans: "Event A NOT happening", topic: "Probability Theory" },
    { q: "If P(A) = 0.3, what is P(A')?", options: ["0.3", "0.7", "1.3", "0"], ans: "0.7", topic: "Probability Theory" },
    { q: "For two independent events A and B, P(A and B) is:", options: ["P(A) + P(B)", "P(A) - P(B)", "P(A) * P(B)", "P(A) / P(B)"], ans: "P(A) * P(B)", topic: "Probability Theory" },
    { q: "What is the probability of drawing an Ace from a standard deck of 52 cards?", options: ["1/52", "4/52 (1/13)", "1/4", "13/52"], ans: "4/52 (1/13)", topic: "Probability Theory" },
    { q: "The 'Addition Rule' for mutually exclusive events states P(A or B) = :", options: ["P(A) * P(B)", "P(A) + P(B)", "P(A) / P(B)", "1 - P(A)"], ans: "P(A) + P(B)", topic: "Probability Theory" },
    { q: "An experiment with only two possible outcomes (Success/Failure) is a:", options: ["Normal trial", "Bernoulli trial", "Poisson trial", "Uniform trial"], ans: "Bernoulli trial", topic: "Probability Theory" },
    { q: "What is the probability of rolling an even number on a die?", options: ["1/6", "1/2", "3/6", "Both 1/2 and 3/6"], ans: "Both 1/2 and 3/6", topic: "Probability Theory" },
    { q: "Conditional probability P(A|B) means the probability of A occurring:", options: ["Regardless of B", "Given that B has already occurred", "Before B occurs", "Only if B does not occur"], ans: "Given that B has already occurred", topic: "Probability Theory" },
    
    // --- 15 Questions for Data Collection ---
    { q: "Data collected directly from the source by the researcher is called:", options: ["Secondary Data", "Primary Data", "Raw Data", "Census Data"], ans: "Primary Data", topic: "Data Collection" },
    { q: "Which method involves collecting data from every member of a population?", options: ["Sampling", "Interview", "Census", "Survey"], ans: "Census", topic: "Data Collection" },
    { q: "Data obtained from existing records, journals, or reports is known as:", options: ["Primary Data", "Secondary Data", "Grouped Data", "Qualitative Data"], ans: "Secondary Data", topic: "Data Collection" },
    { q: "A subset of a population selected for a study is called a:", options: ["Census", "Parameter", "Sample", "Variable"], ans: "Sample", topic: "Data Collection" },
    { q: "Which of these is a qualitative variable?", options: ["Height", "Eye Color", "Weight", "Income"], ans: "Eye Color", topic: "Data Collection" },
    { q: "In a 'Simple Random Sample', every member has:", options: ["An equal chance of selection", "No chance of selection", "A fixed position", "A varied probability"], ans: "An equal chance of selection", topic: "Data Collection" },
    { q: "What is 'Discrete Data'?", options: ["Data that can take any value", "Data that can only take specific, countable values", "Descriptive data", "Continuous data"], ans: "Data that can only take specific, countable values", topic: "Data Collection" },
    { q: "Age, weight, and distance are examples of:", options: ["Continuous Data", "Discrete Data", "Nominal Data", "Categorical Data"], ans: "Continuous Data", topic: "Data Collection" },
    { q: "Which scale of measurement classifies data into mutually exclusive categories with no order?", options: ["Ordinal", "Nominal", "Interval", "Ratio"], ans: "Nominal", topic: "Data Collection" },
    { q: "The 'Ordinal' scale of measurement is characterized by:", options: ["Ranking/Ordering", "Equal intervals only", "Absolute zero", "Names only"], ans: "Ranking/Ordering", topic: "Data Collection" },
    { q: "Which data collection tool uses a set of written questions?", options: ["Observation", "Interview", "Questionnaire", "Experiment"], ans: "Questionnaire", topic: "Data Collection" },
    { q: "The group of all items under consideration in a study is the:", options: ["Sample", "Population", "Frequency", "Variable"], ans: "Population", topic: "Data Collection" },
    { q: "What is a 'Pilot Study'?", options: ["A study on airplanes", "A small-scale trial run before the main study", "The final report", "A census"], ans: "A small-scale trial run before the main study", topic: "Data Collection" },
    { q: "Bias in data collection occurs when:", options: ["The sample is random", "The sample is not representative of the population", "The data is primary", "The sample size is large"], ans: "The sample is not representative of the population", topic: "Data Collection" },
    { q: "Which sampling method divides the population into groups (strata) before sampling?", options: ["Cluster", "Stratified", "Systematic", "Convenience"], ans: "Stratified", topic: "Data Collection" },
    /* ============ BASIC STATISTICS (15) ============ */
    {
    q: "Statistics is the science of:",
    options: ["Numbers", "Data collection and analysis", "Mathematics", "Calculations"],
    ans: "Data collection and analysis",
    topic: "Basics"
    },
    {
    q: "Data refers to:",
    options: ["Processed facts", "Raw facts", "Information", "Results"],
    ans: "Raw facts",
    topic: "Basics"
    },
    {
    q: "Statistics is divided into:",
    options: ["Two branches", "Three branches", "Four branches", "One branch"],
    ans: "Two branches",
    topic: "Basics"
    },
    {
    q: "The two branches of statistics are:",
    options: ["Math and science", "Descriptive and inferential", "Algebra and geometry", "Theory and practical"],
    ans: "Descriptive and inferential",
    topic: "Basics"
    },
    {
    q: "Descriptive statistics deals with:",
    options: ["Predictions", "Data summary", "Hypothesis testing", "Probability"],
    ans: "Data summary",
    topic: "Basics"
    },
    {
    q: "Inferential statistics deals with:",
    options: ["Data collection", "Data organization", "Drawing conclusions", "Tables"],
    ans: "Drawing conclusions",
    topic: "Basics"
    },
    {
    q: "Population refers to:",
    options: ["Entire data set", "Part of data", "Sample", "Survey"],
    ans: "Entire data set",
    topic: "Basics"
    },
    {
    q: "A sample is:",
    options: ["Entire population", "Part of population", "Census", "Complete data"],
    ans: "Part of population",
    topic: "Basics"
    },
    {
    q: "Census involves:",
    options: ["Part of population", "Entire population", "Guessing", "Sampling"],
    ans: "Entire population",
    topic: "Basics"
    },
    {
    q: "A parameter is used for:",
    options: ["Sample", "Population", "Tables", "Graphs"],
    ans: "Population",
    topic: "Basics"
    },
    {
    q: "A statistic is used for:",
    options: ["Population", "Sample", "Census", "Theory"],
    ans: "Sample",
    topic: "Basics"
    },
    {
    q: "Which is qualitative data?",
    options: ["Height", "Weight", "Gender", "Age"],
    ans: "Gender",
    topic: "Basics"
    },
    {
    q: "Which is quantitative data?",
    options: ["Color", "Religion", "Height", "Marital status"],
    ans: "Height",
    topic: "Basics"
    },
    {
    q: "Primary data is collected from:",
    options: ["Books", "Internet", "Original source", "Journals"],
    ans: "Original source",
    topic: "Basics"
    },
    {
    q: "Secondary data is obtained from:",
    options: ["Experiments", "Original source", "Published materials", "Field work"],
    ans: "Published materials",
    topic: "Basics"
    },
    
    /* ============ MEASURES OF CENTRAL TENDENCY (15) ============ */
    {
    q: "Mean is calculated as:",
    options: ["Sum / frequency", "Sum / number of observations", "Middle value", "Most frequent"],
    ans: "Sum / number of observations",
    topic: "Central Tendency"
    },
    {
    q: "Median is the:",
    options: ["Average", "Most frequent value", "Middle value", "Total"],
    ans: "Middle value",
    topic: "Central Tendency"
    },
    {
    q: "Mode is the:",
    options: ["Middle value", "Average", "Most frequent value", "Least value"],
    ans: "Most frequent value",
    topic: "Central Tendency"
    },
    {
    q: "Which measure is affected by extreme values?",
    options: ["Median", "Mode", "Mean", "Range"],
    ans: "Mean",
    topic: "Central Tendency"
    },
    {
    q: "The mean of 2, 4, 6 is:",
    options: ["3", "4", "6", "12"],
    ans: "4",
    topic: "Central Tendency"
    },
    {
    q: "The median of 3, 5, 7 is:",
    options: ["3", "5", "7", "15"],
    ans: "5",
    topic: "Central Tendency"
    },
    {
    q: "The mode of 2, 4, 4, 6 is:",
    options: ["2", "4", "6", "None"],
    ans: "4",
    topic: "Central Tendency"
    },
    {
    q: "Which data set has no mode?",
    options: ["1,1,2", "2,2,3", "1,2,3", "3,3,4"],
    ans: "1,2,3",
    topic: "Central Tendency"
    },
    {
    q: "Mean is also called:",
    options: ["Median", "Average", "Mode", "Range"],
    ans: "Average",
    topic: "Central Tendency"
    },
    {
    q: "Which measure divides data into two equal parts?",
    options: ["Mean", "Mode", "Median", "Range"],
    ans: "Median",
    topic: "Central Tendency"
    },
    {
    q: "For skewed data, the best measure is:",
    options: ["Mean", "Median", "Mode", "Range"],
    ans: "Median",
    topic: "Central Tendency"
    },
    {
    q: "Mode is useful for:",
    options: ["Qualitative data", "Quantitative data", "Interval data", "Ratio data"],
    ans: "Qualitative data",
    topic: "Central Tendency"
    },
    {
    q: "Mean requires:",
    options: ["Ordered data", "Calculation", "Frequency only", "Guessing"],
    ans: "Calculation",
    topic: "Central Tendency"
    },
    {
    q: "Median is affected by extreme values?",
    options: ["Yes", "No", "Sometimes", "Always"],
    ans: "No",
    topic: "Central Tendency"
    },
    {
    q: "Mode can have:",
    options: ["One value only", "Two values", "More than one value", "None only"],
    ans: "More than one value",
    topic: "Central Tendency"
    },
    
    
    {
        q: "The middle value in an ordered set of data is called the:",
        options: ["Mean", "Mode", "Median", "Range"],
        ans: "Median",
        topic: "Measures of Central Tendency"
    }
    ],
"STA121": [
    
    /* ============ POPULATION AND SAMPLE (15) ============ */
    {
    q: "In statistics, a population refers to:",
    options: ["A sample", "A subset of data", "The entire group under study", "A random selection"],
    ans: "The entire group under study",
    topic: "Population and sample"
    },
    {
    q: "A sample is defined as:",
    options: ["The whole population", "A part of the population", "A census", "A parameter"],
    ans: "A part of the population",
    topic: "Population and sample"
    },
    {
    q: "A census involves:",
    options: ["Part of the population", "Random sampling", "The entire population", "Estimation"],
    ans: "The entire population",
    topic: "Population and sample"
    },
    {
    q: "Which of the following is an advantage of sampling?",
    options: ["More expensive", "Time-consuming", "Less cost", "More errors"],
    ans: "Less cost",
    topic: "Population and sample"
    },
    {
    q: "A parameter is a numerical value that describes a:",
    options: ["Sample", "Population", "Table", "Graph"],
    ans: "Population",
    topic: "Population and sample"
    },
    {
    q: "A statistic is a numerical value that describes a:",
    options: ["Population", "Sample", "Census", "Frame"],
    ans: "Sample",
    topic: "Population and sample"
    },
    {
    q: "Which of the following is a sampling method?",
    options: ["Census", "Observation", "Random sampling", "Interview"],
    ans: "Random sampling",
    topic: "Population and sample"
    },
    {
    q: "Simple random sampling ensures that:",
    options: ["Some elements are favored", "All elements have equal chance", "Only large samples are chosen", "Only small samples are chosen"],
    ans: "All elements have equal chance",
    topic: "Population and sample"
    },
    {
    q: "A sampling frame is:",
    options: ["A sample", "A list of population elements", "A table", "A statistic"],
    ans: "A list of population elements",
    topic: "Population and sample"
    },
    {
    q: "Which sampling method divides the population into groups?",
    options: ["Systematic", "Random", "Stratified", "Convenience"],
    ans: "Stratified",
    topic: "Population and sample"
    },
    {
    q: "Bias in sampling occurs when:",
    options: ["All members are included", "Some members have no chance of selection", "Sample is random", "Sample is large"],
    ans: "Some members have no chance of selection",
    topic: "Population and sample"
    },
    {
    q: "Which of the following is NOT a sampling technique?",
    options: ["Cluster sampling", "Stratified sampling", "Random sampling", "Census"],
    ans: "Census",
    topic: "Population and sample"
    },
    {
    q: "The main goal of sampling is to:",
    options: ["Increase cost", "Reduce accuracy", "Make inference about population", "Avoid data collection"],
    ans: "Make inference about population",
    topic: "Population and sample"
    },
    {
    q: "A good sample should be:",
    options: ["Biased", "Representative", "Very small", "Very large only"],
    ans: "Representative",
    topic: "Population and sample"
    },
    {
    q: "Which sampling method selects every kth element?",
    options: ["Random", "Stratified", "Systematic", "Cluster"],
    ans: "Systematic",
    topic: "Population and sample"
    },
    
    /* ============ SAMPLE DISTRIBUTION AND PROPORTION (15) ============ */
    {
    q: "A sampling distribution refers to:",
    options: ["Population distribution", "Distribution of sample statistics", "Raw data", "Grouped data"],
    ans: "Distribution of sample statistics",
    topic: "Sample distribution and proportion"
    },
    {
    q: "The mean of the sampling distribution of the mean equals the:",
    options: ["Sample mean", "Population mean", "Sample variance", "Standard error"],
    ans: "Population mean",
    topic: "Sample distribution and proportion"
    },
    {
    q: "The standard deviation of a sampling distribution is called:",
    options: ["Variance", "Error", "Standard error", "Mean deviation"],
    ans: "Standard error",
    topic: "Sample distribution and proportion"
    },
    {
    q: "As sample size increases, the standard error:",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    ans: "Decreases",
    topic: "Sample distribution and proportion"
    },
    {
    q: "The Central Limit Theorem applies to:",
    options: ["Small samples only", "Large samples only", "Sampling distribution of the mean", "Raw data"],
    ans: "Sampling distribution of the mean",
    topic: "Sample distribution and proportion"
    },
    {
    q: "The sampling distribution of proportion is approximately normal when:",
    options: ["n is small", "np and nq ≥ 5", "p = 0.5 only", "q = 0"],
    ans: "np and nq ≥ 5",
    topic: "Sample distribution and proportion"
    },
    {
    q: "Sample proportion is denoted by:",
    options: ["p", "q", "p̂", "μ"],
    ans: "p̂",
    topic: "Sample distribution and proportion"
    },
    {
    q: "Population proportion is represented by:",
    options: ["p", "p̂", "q̂", "x̄"],
    ans: "p",
    topic: "Sample distribution and proportion"
    },
    {
    q: "Which factor affects the shape of sampling distribution?",
    options: ["Sample size", "Population size only", "Type of data", "Units"],
    ans: "Sample size",
    topic: "Sample distribution and proportion"
    },
    {
    q: "The variance of sample proportion is:",
    options: ["pq/n", "p/n", "q/n", "n/pq"],
    ans: "pq/n",
    topic: "Sample distribution and proportion"
    },
    {
    q: "Sampling error arises due to:",
    options: ["Wrong calculation", "Use of sample instead of population", "Data entry error", "Measurement error"],
    ans: "Use of sample instead of population",
    topic: "Sample distribution and proportion"
    },
    {
    q: "Which distribution is used for large sample proportions?",
    options: ["Binomial", "Poisson", "Normal", "Uniform"],
    ans: "Normal",
    topic: "Sample distribution and proportion"
    },
    {
    q: "As n → ∞, sampling distribution becomes:",
    options: ["Skewed", "Uniform", "Normal", "Irregular"],
    ans: "Normal",
    topic: "Sample distribution and proportion"
    },
    {
    q: "Sampling distribution is useful for:",
    options: ["Data collection", "Inference", "Data entry", "Data storage"],
    ans: "Inference",
    topic: "Sample distribution and proportion"
    },
    {
    q: "The mean of sampling distribution of proportion equals:",
    options: ["q", "p̂", "p", "pq"],
    ans: "p",
    topic: "Sample distribution and proportion"
    },
    
    /* ============ REGRESSION AND CORRELATION (15) ============ */
    {
    q: "Correlation measures the:",
    options: ["Cause-effect relationship", "Strength of relationship", "Difference between variables", "Frequency"],
    ans: "Strength of relationship",
    topic: "Regression and correlation"
    },
    {
    q: "Correlation coefficient ranges from:",
    options: ["0 to 1", "-1 to 1", "1 to 10", "-∞ to +∞"],
    ans: "-1 to 1",
    topic: "Regression and correlation"
    },
    {
    q: "A correlation coefficient of 0 indicates:",
    options: ["Perfect correlation", "Strong relationship", "No linear relationship", "Negative relationship"],
    ans: "No linear relationship",
    topic: "Regression and correlation"
    },
    {
    q: "Positive correlation means:",
    options: ["One increases, other decreases", "Both increase together", "No relationship", "Random movement"],
    ans: "Both increase together",
    topic: "Regression and correlation"
    },
    {
    q: "Negative correlation means:",
    options: ["Both increase", "One increases, other decreases", "No relationship", "Constant values"],
    ans: "One increases, other decreases",
    topic: "Regression and correlation"
    },
    {
    q: "Regression analysis is used for:",
    options: ["Prediction", "Classification", "Sorting", "Sampling"],
    ans: "Prediction",
    topic: "Regression and correlation"
    },
    {
    q: "The dependent variable is usually denoted by:",
    options: ["x", "y", "r", "p"],
    ans: "y",
    topic: "Regression and correlation"
    },
    {
    q: "The independent variable is denoted by:",
    options: ["x", "y", "r", "μ"],
    ans: "x",
    topic: "Regression and correlation"
    },
    {
    q: "Correlation does not imply:",
    options: ["Relationship", "Association", "Causation", "Dependence"],
    ans: "Causation",
    topic: "Regression and correlation"
    },
    {
    q: "Perfect positive correlation has value:",
    options: ["0", "-1", "1", "0.5"],
    ans: "1",
    topic: "Regression and correlation"
    },
    {
    q: "Perfect negative correlation has value:",
    options: ["0", "-1", "1", "-0.5"],
    ans: "-1",
    topic: "Regression and correlation"
    },
    {
    q: "Scatter diagram is used to show:",
    options: ["Frequency", "Distribution", "Relationship", "Variation"],
    ans: "Relationship",
    topic: "Regression and correlation"
    },
    {
    q: "Regression line of y on x is used to predict:",
    options: ["x", "y", "r", "μ"],
    ans: "y",
    topic: "Regression and correlation"
    },
    {
    q: "If r = 0.8, the relationship is:",
    options: ["Weak", "Moderate", "Strong", "None"],
    ans: "Strong",
    topic: "Regression and correlation"
    },
    {
    q: "Regression assumes relationship between variables is:",
    options: ["Random", "Linear", "Curved", "None"],
    ans: "Linear",
    topic: "Regression and correlation"
    },
    
    /* ============ PROBABILITY AND ELEMENTARY TIME ANALYSIS (15) ============ */
    {
    q: "Probability of an event ranges between:",
    options: ["-1 and 1", "0 and 1", "1 and 2", "0 and ∞"],
    ans: "0 and 1",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "The probability of a sure event is:",
    options: ["0", "0.5", "1", "-1"],
    ans: "1",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "The probability of an impossible event is:",
    options: ["1", "0", "0.5", "-1"],
    ans: "0",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Sample space is the set of:",
    options: ["Events", "Outcomes", "Probabilities", "Experiments"],
    ans: "Outcomes",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "An event is a:",
    options: ["Subset of sample space", "Sample space", "Outcome", "Trial"],
    ans: "Subset of sample space",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Probability of an event A is given by:",
    options: ["n(S)/n(A)", "n(A)/n(S)", "n(A)n(S)", "n(S)-n(A)"],
    ans: "n(A)/n(S)",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Two events are mutually exclusive if:",
    options: ["They occur together", "They cannot occur together", "They are independent", "They are equal"],
    ans: "They cannot occur together",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Independent events mean:",
    options: ["One affects the other", "They depend on each other", "Occurrence of one does not affect the other", "They are mutually exclusive"],
    ans: "Occurrence of one does not affect the other",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "P(A ∪ B) equals:",
    options: ["P(A)+P(B)", "P(A)+P(B)-P(A∩B)", "P(A)P(B)", "P(A)/P(B)"],
    ans: "P(A)+P(B)-P(A∩B)",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Elementary time series analysis deals with:",
    options: ["Random data", "Data over time", "Grouped data", "Qualitative data"],
    ans: "Data over time",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Time series data is arranged in:",
    options: ["Rows", "Columns", "Chronological order", "Random order"],
    ans: "Chronological order",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Trend shows the:",
    options: ["Seasonal effect", "Long-term movement", "Random variation", "Cyclic effect"],
    ans: "Long-term movement",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Seasonal variation occurs within:",
    options: ["Many years", "One year", "Ten years", "Randomly"],
    ans: "One year",
    topic: "Probability and elementary time analysis"
    },
    {
    q: "Cyclical variation occurs over:",
    options: ["Short periods", "Irregular periods", "Long periods", "Daily periods"],
    ans: "Long periods",
    topic: "Probability and elementary time analysis"
    },
    // --- 15 Questions for Probability and elementary time analysis ---
    { q: "A sequence of data points recorded at regular time intervals is a:", options: ["Regression", "Time Series", "Cross-sectional data", "Histogram"], ans: "Time Series", topic: "Probability and elementary time analysis " },
    { q: "The long-term upward or downward movement in time series data is the:", options: ["Seasonal variation", "Cyclical variation", "Trend", "Irregular variation"], ans: "Trend", topic: "Probability and elementary time analysis " },
    { q: "Patterns that repeat within a single year (e.g., higher ice cream sales in summer) are:", options: ["Trends", "Seasonal variations", "Cyclical variations", "Random noise"], ans: "Seasonal variations", topic: "Probability and elementary time analysis " },
    { q: "The multi-year waves in economic data (like recessions) are known as:", options: ["Seasonal", "Irregular", "Cyclical variations", "Linear trends"], ans: "Cyclical variations", topic: "Probability and elementary time analysis " },
    { q: "Unpredictable, short-term fluctuations in time series are called:", options: ["Trends", "Secular variation", "Irregular/Random variations", "Periodic movement"], ans: "Irregular/Random variations", topic: "Probability and elementary time analysis " },
    { q: "Which technique is used to smooth out short-term fluctuations in time series?", options: ["Standard Deviation", "Moving Averages", "Integration", "Hypothesis testing"], ans: "Moving Averages", topic: "Probability and elementary time analysis " },
    { q: "In probability, P(A | B) denotes:", options: ["Probability of A and B", "Probability of A or B", "Conditional probability of A given B", "Probability of B given A"], ans: "Conditional probability of A given B", topic: "Probability and elementary time analysis " },
    { q: "If P(A) = 0.4 and P(B) = 0.5, and they are independent, P(A and B) is:", options: ["0.9", "0.1", "0.2", "0.45"], ans: "0.2", topic: "Probability and elementary time analysis " },
    { q: "The 'Multiplicative Model' for time series is expressed as:", options: ["Y = T + S + C + I", "Y = T * S * C * I", "Y = T / S", "Y = T - I"], ans: "Y = T * S * C * I", topic: "Probability and elementary time analysis " },
    { q: "An 'Additive Model' is appropriate when seasonal variations are:", options: ["Increasing over time", "Constant regardless of the trend", "Zero", "Random"], ans: "Constant regardless of the trend", topic: "Probability and elementary time analysis " },
    { q: "A '3-period moving average' for periods 1, 2, 3 is the average of:", options: ["Period 1 only", "Periods 1, 2, 3", "Periods 2, 3, 4", "The whole series"], ans: "Periods 1, 2, 3", topic: "Probability and elementary time analysis " },
    { q: "Bayes' Theorem is used to update:", options: ["The mean", "Probabilities based on new evidence", "Sample size", "Trends"], ans: "Probabilities based on new evidence", topic: "Probability and elementary time analysis " },
    { q: "The sum of probabilities of all possible outcomes in a sample space is:", options: ["0", "0.5", "1", "100"], ans: "1", topic: "Probability and elementary time analysis " },
    { q: "Which component of time series is most difficult to predict?", options: ["Trend", "Seasonal", "Irregular", "Cyclical"], ans: "Irregular", topic: "Probability and elementary time analysis " },
    { q: "A 'Stationary' time series is one whose statistical properties:", options: ["Change constantly", "Do not change over time", "Only increase", "Are always zero"], ans: "Do not change over time", topic: "Probability and elementary time analysis " },
    {
    q: "Random variation is caused by:",
    options: ["Trend", "Season", "Unpredictable factors", "Cycles"],
    ans: "Unpredictable factors",
    topic: "Probability and elementary time analysis"
    },
    
 // --- 15 Questions for Hypothesis Testing ---
    { q: "The statement being tested, usually representing 'no effect' or 'no difference', is the:", options: ["Alternative Hypothesis", "Null Hypothesis", "Research Hypothesis", "Significant Hypothesis"], ans: "Null Hypothesis", topic: "Hypothesis Testing" },
    { q: "The symbol for the Null Hypothesis is:", options: ["H1", "Ha", "H0", "Hn"], ans: "H0", topic: "Hypothesis Testing" },
    { q: "Rejecting a true Null Hypothesis is a:", options: ["Type I Error", "Type II Error", "Correct Decision", "Standard Error"], ans: "Type I Error", topic: "Hypothesis Testing" },
    { q: "Failing to reject a false Null Hypothesis is a:", options: ["Type I Error", "Type II Error", "Significant result", "Confidence level"], ans: "Type II Error", topic: "Hypothesis Testing" },
    { q: "The probability of committing a Type I error is denoted by:", options: ["Beta (β)", "Alpha (α)", "Sigma (σ)", "P-value"], ans: "Alpha (α)", topic: "Hypothesis Testing" },
    { q: "The probability of committing a Type II error is denoted by:", options: ["Alpha (α)", "Beta (β)", "Gamma (γ)", "Delta (δ)"], ans: "Beta (β)", topic: "Hypothesis Testing" },
    { q: "The 'Level of Significance' is most commonly set at:", options: ["0.5", "0.05", "1.0", "0.95"], ans: "0.05", topic: "Hypothesis Testing" },
    { q: "If the P-value is less than alpha (α), we:", options: ["Accept the null", "Reject the null", "Increase sample size", "Do nothing"], ans: "Reject the null", topic: "Hypothesis Testing" },
    { q: "A hypothesis test where the rejection region is in both tails is a:", options: ["One-tailed test", "Two-tailed test", "Z-test", "T-test"], ans: "Two-tailed test", topic: "Hypothesis Testing" },
    { q: "The range of values that leads to the rejection of the null hypothesis is the:", options: ["Confidence region", "Critical region", "Normal region", "Mean"], ans: "Critical region", topic: "Hypothesis Testing" },
    { q: "Which test is used when the population standard deviation is unknown and sample size is small?", options: ["Z-test", "T-test", "Chi-square test", "F-test"], ans: "T-test", topic: "Hypothesis Testing" },
    { q: "The value that separates the rejection region from the non-rejection region is the:", options: ["Test statistic", "Critical value", "P-value", "Mean"], ans: "Critical value", topic: "Hypothesis Testing" },
    { q: "What is the 'Power of a Test'?", options: ["Alpha", "1 - Alpha", "1 - Beta", "Beta"], ans: "1 - Beta", topic: "Hypothesis Testing" },
    { q: "A Z-test is appropriate when the population variance is:", options: ["Known", "Unknown", "Zero", "Negative"], ans: "Known", topic: "Hypothesis Testing" },
    { q: "A test to determine if a new drug is *better* than the old one is usually a:", options: ["One-tailed test", "Two-tailed test", "Null test", "Median test"], ans: "One-tailed test", topic: "Hypothesis Testing" }
   
  
    // ... (Add 10 questions per STA111/121 topic) ...
],
"BIO101":[
    {
  q: "Cell division that produces identical daughter cells is:",
  options: ["Mitosis", "Meiosis", "Fertilization", "Mutation"],
  ans: "Mitosis",
  topic: "Cell Division"
},
{
  q: "Meiosis results in the formation of:",
  options: ["Gametes", "Somatic cells", "Tissues", "Organs"],
  ans: "Gametes",
  topic: "Cell Division"
},
{
  q: "Mitosis is important for:",
  options: ["Growth and repair", "Sexual reproduction", "Variation", "Mutation"],
  ans: "Growth and repair",
  topic: "Cell Division"
},
{
  q: "Which phase of mitosis involves separation of chromatids?",
  options: ["Anaphase", "Prophase", "Metaphase", "Telophase"],
  ans: "Anaphase",
  topic: "Cell Division"
},
{
  q: "Crossing over occurs during:",
  options: ["Prophase I", "Metaphase II", "Anaphase I", "Telophase II"],
  ans: "Prophase I",
  topic: "Cell Division"
},
{
  q: "Meiosis produces cells with:",
  options: ["Half the chromosome number", "Double chromosomes", "Same chromosomes", "No chromosomes"],
  ans: "Half the chromosome number",
  topic: "Cell Division"
},
{
  q: "The stage where chromosomes align at the equator is:",
  options: ["Metaphase", "Prophase", "Anaphase", "Telophase"],
  ans: "Metaphase",
  topic: "Cell Division"
},
{
  q: "Which cell division leads to variation?",
  options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
  ans: "Meiosis",
  topic: "Cell Division"
},
{
  q: "Cytokinesis involves division of:",
  options: ["Cytoplasm", "Nucleus", "Chromosomes", "DNA"],
  ans: "Cytoplasm",
  topic: "Cell Division"
},
{
  q: "Meiosis occurs in:",
  options: ["Reproductive organs", "Skin", "Muscle", "Brain"],
  ans: "Reproductive organs",
  topic: "Cell Division"
},
{
  q: "Prophase is characterized by:",
  options: ["Chromosome condensation", "Chromosome separation", "Cytoplasm division", "Spindle disappearance"],
  ans: "Chromosome condensation",
  topic: "Cell Division"
},
{
  q: "Telophase marks the:",
  options: ["Formation of two nuclei", "Chromosome condensation", "DNA replication", "Spindle formation"],
  ans: "Formation of two nuclei",
  topic: "Cell Division"
},
{
  q: "Interphase is:",
  options: ["Preparation for division", "Actual division", "Cytokinesis", "Chromosome segregation"],
  ans: "Preparation for division",
  topic: "Cell Division"
},
{
  q: "S phase of interphase involves:",
  options: ["DNA replication", "Protein synthesis", "Mitosis", "Cytokinesis"],
  ans: "DNA replication",
  topic: "Cell Division"
},
{
  q: "G1 phase is mainly for:",
  options: ["Cell growth", "DNA synthesis", "Mitosis", "Cytokinesis"],
  ans: "Cell growth",
  topic: "Cell Division"
},
{
  q: "Which phase immediately follows metaphase?",
  options: ["Anaphase", "Telophase", "Prophase", "Interphase"],
  ans: "Anaphase",
  topic: "Cell Division"
},
{
  q: "Spindle fibers attach to chromosomes at:",
  options: ["Centromere", "Telomere", "Nucleolus", "Cytoplasm"],
  ans: "Centromere",
  topic: "Cell Division"
},
{
  q: "Binary fission occurs in:",
  options: ["Prokaryotes", "Eukaryotes", "Plants", "Animals"],
  ans: "Prokaryotes",
  topic: "Cell Division"
},
{
  q: "Mitosis occurs in:",
  options: ["Somatic cells", "Gametes", "Bacteria", "Viruses"],
  ans: "Somatic cells",
  topic: "Cell Division"
},
{
  q: "End result of meiosis is:",
  options: ["Four haploid cells", "Two diploid cells", "One cell", "Three cells"],
  ans: "Four haploid cells",
  topic: "Cell Division"
},
{
  q: "A mutation is a:",
  options: ["Change in DNA sequence", "Cell division", "Protein synthesis", "Energy production"],
  ans: "Change in DNA sequence",
  topic: "Mutation"
},
{
  q: "Mutations can be caused by:",
  options: ["Radiation", "Chemicals", "Viruses", "All of the above"],
  ans: "All of the above",
  topic: "Mutation"
},
{
  q: "A change in a single nucleotide is called a:",
  options: ["Point mutation", "Frame-shift mutation", "Chromosomal mutation", "Deletion"],
  ans: "Point mutation",
  topic: "Mutation"
},
{
  q: "Deletion mutation results in:",
  options: ["Loss of DNA segment", "Addition of DNA", "Inversion of gene", "Duplication of gene"],
  ans: "Loss of DNA segment",
  topic: "Mutation"
},
{
  q: "Duplication mutation involves:",
  options: ["Repeating a DNA segment", "Removing a DNA segment", "Changing a base", "Swapping genes"],
  ans: "Repeating a DNA segment",
  topic: "Mutation"
},
{
  q: "Silent mutation is:",
  options: ["No change in protein", "Protein destroyed", "Chromosome lost", "Frameshift"],
  ans: "No change in protein",
  topic: "Mutation"
},
{
  q: "Missense mutation causes:",
  options: ["A different amino acid", "No amino acid change", "Early stop codon", "Chromosome break"],
  ans: "A different amino acid",
  topic: "Mutation"
},
{
  q: "Nonsense mutation leads to:",
  options: ["Stop codon formation", "Protein elongation", "DNA repair", "Chromosome duplication"],
  ans: "Stop codon formation",
  topic: "Mutation"
},
{
  q: "Mutations in germ cells are:",
  options: ["Heritable", "Non-heritable", "Temporary", "Always lethal"],
  ans: "Heritable",
  topic: "Mutation"
},
{
  q: "Mutations in somatic cells are:",
  options: ["Non-heritable", "Always passed to offspring", "Invisible", "Always beneficial"],
  ans: "Non-heritable",
  topic: "Mutation"
},
{
  q: "Frame-shift mutations occur due to:",
  options: ["Insertion or deletion", "Base substitution", "Duplication", "Inversion"],
  ans: "Insertion or deletion",
  topic: "Mutation"
},
{
  q: "Mutagens are:",
  options: ["Agents that cause mutations", "Enzymes", "Chromosomes", "Nucleotides"],
  ans: "Agents that cause mutations",
  topic: "Mutation"
},
{
  q: "Examples of physical mutagens include:",
  options: ["UV light, X-rays", "Viruses", "Bacteria", "Hormones"],
  ans: "UV light, X-rays",
  topic: "Mutation"
},
{
  q: "Chemical mutagens include:",
  options: ["Alkylating agents, Base analogs", "Water", "Salt", "Sugar"],
  ans: "Alkylating agents, Base analogs",
  topic: "Mutation"
},
{
  q: "Beneficial mutations can lead to:",
  options: ["Evolution", "Disease", "Death", "No effect"],
  ans: "Evolution",
  topic: "Mutation"
},
{
  q: "Harmful mutations can cause:",
  options: ["Genetic disorders", "Improved traits", "Evolution", "Nothing"],
  ans: "Genetic disorders",
  topic: "Mutation"
},
{
  q: "Neutral mutations are:",
  options: ["Neither beneficial nor harmful", "Always lethal", "Always helpful", "Virus-induced"],
  ans: "Neither beneficial nor harmful",
  topic: "Mutation"
},
{
  q: "Gene mutation affects:",
  options: ["Single gene", "Whole chromosome", "Cell membrane", "Protein folding"],
  ans: "Single gene",
  topic: "Mutation"
},
{
  q: "Chromosomal mutation affects:",
  options: ["Whole chromosome or part of it", "Single nucleotide", "Protein only", "Cytoplasm"],
  ans: "Whole chromosome or part of it",
  topic: "Mutation"
},
{
  q: "Mutations are essential for:",
  options: ["Genetic diversity", "Cell death", "Cloning", "Photosynthesis"],
  ans: "Genetic diversity",
  topic: "Mutation"
},
    
{
  q: "Adaptation is:",
  options: ["A feature that increases survival", "A type of mutation", "A disease", "A cell process"],
  ans: "A feature that increases survival",
  topic: "Adaptation"
},
{
  q: "Plants in deserts often have:",
  options: ["Thick cuticle", "Large leaves", "No roots", "Thin stems"],
  ans: "Thick cuticle",
  topic: "Adaptation"
},
{
  q: "Cacti store water in:",
  options: ["Stems", "Leaves", "Roots", "Flowers"],
  ans: "Stems",
  topic: "Adaptation"
},
{
  q: "Animals in cold regions have:",
  options: ["Thick fur", "Thin skin", "No fat", "No fur"],
  ans: "Thick fur",
  topic: "Adaptation"
},
{
  q: "Camouflage in animals helps to:",
  options: ["Avoid predators", "Find mates", "Produce offspring", "Migrate"],
  ans: "Avoid predators",
  topic: "Adaptation"
},
{
  q: "Succulent plants store water in:",
  options: ["Leaves and stems", "Roots only", "Flowers", "Seeds"],
  ans: "Leaves and stems",
  topic: "Adaptation"
},
{
  q: "Aquatic animals have:",
  options: ["Webbed feet or fins", "Wings", "Fur", "Thick skin"],
  ans: "Webbed feet or fins",
  topic: "Adaptation"
},
{
  q: "Animals with long necks (like giraffes) are adapted to:",
  options: ["Reach high leaves", "Run fast", "Swim", "Hide"],
  ans: "Reach high leaves",
  topic: "Adaptation"
},
{
  q: "Desert animals are often:",
  options: ["Nocturnal", "Diurnal", "Arboreal", "Aquatic"],
  ans: "Nocturnal",
  topic: "Adaptation"
},
{
  q: "Polar animals have:",
  options: ["Blubber", "Thick scales", "Sweat glands", "Thin fur"],
  ans: "Blubber",
  topic: "Adaptation"
},
{
  q: "Epiphytic plants grow on:",
  options: ["Other plants", "Rocks only", "Soil only", "Water only"],
  ans: "Other plants",
  topic: "Adaptation"
},
{
  q: "Animals that migrate to avoid harsh conditions are showing:",
  options: ["Behavioral adaptation", "Structural adaptation", "Physiological adaptation", "Genetic mutation"],
  ans: "Behavioral adaptation",
  topic: "Adaptation"
},
{
  q: "Plants in waterlogged areas often have:",
  options: ["Aerenchyma tissue", "Thick cuticle", "Spines", "No roots"],
  ans: "Aerenchyma tissue",
  topic: "Adaptation"
},
{
  q: "Thick bark in trees helps to:",
  options: ["Prevent water loss and fire damage", "Attract pollinators", "Photosynthesis", "Reproduction"],
  ans: "Prevent water loss and fire damage",
  topic: "Adaptation"
},
{
  q: "Birds with hooked beaks are adapted for:",
  options: ["Tearing flesh", "Eating seeds", "Catching fish", "Filter feeding"],
  ans: "Tearing flesh",
  topic: "Adaptation"
},
{
  q: "Plants with deep roots are adapted to:",
  options: ["Drought conditions", "Flooded areas", "Shade", "Cold regions"],
  ans: "Drought conditions",
  topic: "Adaptation"
},
{
  q: "Bright colors in flowers attract:",
  options: ["Pollinators", "Predators", "Herbivores", "None"],
  ans: "Pollinators",
  topic: "Adaptation"
},
{
  q: "Hibernation in animals is a form of:",
  options: ["Physiological adaptation", "Structural adaptation", "Behavioral adaptation", "Mutation"],
  ans: "Physiological adaptation",
  topic: "Adaptation"
},
{
  q: "Thorns in plants are for:",
  options: ["Protection from herbivores", "Water storage", "Reproduction", "Photosynthesis"],
  ans: "Protection from herbivores",
  topic: "Adaptation"
},
{
  q: "Webbed feet in aquatic birds help to:",
  options: ["Swim efficiently", "Fly faster", "Build nests", "Catch insects"],
  ans: "Swim efficiently",
  topic: "Adaptation"
},

{
  q: "Which organ is primarily responsible for respiration in humans?",
  options: ["Lungs", "Heart", "Liver", "Kidneys"],
  ans: "Lungs",
  topic: "Vital Activities"
},
{
  q: "The process of converting food into energy is called:",
  options: ["Respiration", "Excretion", "Circulation", "Digestion"],
  ans: "Respiration",
  topic: "Vital Activities"
},
{
  q: "The functional unit of the kidney is called:",
  options: ["Nephron", "Neuron", "Alveolus", "Ventricle"],
  ans: "Nephron",
  topic: "Vital Activities"
},
{
  q: "Excretion in humans helps to:",
  options: ["Remove metabolic wastes", "Produce energy", "Make hormones", "Transport oxygen"],
  ans: "Remove metabolic wastes",
  topic: "Vital Activities"
},
{
  q: "Blood circulation is maintained by the:",
  options: ["Heart", "Lungs", "Kidney", "Liver"],
  ans: "Heart",
  topic: "Vital Activities"
},
{
  q: "Red blood cells transport:",
  options: ["Oxygen", "Carbon dioxide only", "Nutrients", "Hormones"],
  ans: "Oxygen",
  topic: "Vital Activities"
},
{
  q: "Which part of the digestive system absorbs most nutrients?",
  options: ["Small intestine", "Stomach", "Large intestine", "Esophagus"],
  ans: "Small intestine",
  topic: "Vital Activities"
},
{
  q: "Plants carry out gaseous exchange through:",
  options: ["Stomata", "Roots only", "Leaves veins", "Flowers"],
  ans: "Stomata",
  topic: "Vital Activities"
},
{
  q: "Osmoregulation in humans is controlled by:",
  options: ["Kidneys", "Liver", "Lungs", "Heart"],
  ans: "Kidneys",
  topic: "Vital Activities"
},
{
  q: "Sexual reproduction involves:",
  options: ["Fusion of gametes", "Budding", "Fragmentation", "Binary fission"],
  ans: "Fusion of gametes",
  topic: "Vital Activities"
},
{
  q: "Asexual reproduction produces:",
  options: ["Genetically identical offspring", "Variation", "Gametes only", "Mutations"],
  ans: "Genetically identical offspring",
  topic: "Vital Activities"
},
{
  q: "The hormone responsible for stimulating ovulation is:",
  options: ["LH (Luteinizing Hormone)", "FSH", "Insulin", "Adrenaline"],
  ans: "LH (Luteinizing Hormone)",
  topic: "Vital Activities"
},
{
  q: "The main excretory product of humans is:",
  options: ["Urea", "Ammonia", "Carbon dioxide", "Oxygen"],
  ans: "Urea",
  topic: "Vital Activities"
},
{
  q: "In plants, excess water is removed through:",
  options: ["Transpiration", "Excretion", "Respiration", "Photosynthesis"],
  ans: "Transpiration",
  topic: "Vital Activities"
},
{
  q: "Respiration that requires oxygen is called:",
  options: ["Aerobic respiration", "Anaerobic respiration", "Fermentation", "Photosynthesis"],
  ans: "Aerobic respiration",
  topic: "Vital Activities"
},
{
  q: "The main function of white blood cells is:",
  options: ["Fight infection", "Transport oxygen", "Clot blood", "Excrete wastes"],
  ans: "Fight infection",
  topic: "Vital Activities"
},
{
  q: "The diaphragm helps in:",
  options: ["Breathing", "Digestion", "Circulation", "Excretion"],
  ans: "Breathing",
  topic: "Vital Activities"
},
{
  q: "The large intestine absorbs:",
  options: ["Water and minerals", "Proteins", "Fats", "Oxygen"],
  ans: "Water and minerals",
  topic: "Vital Activities"
},
{
  q: "Pollination in plants is a step towards:",
  options: ["Reproduction", "Excretion", "Respiration", "Photosynthesis"],
  ans: "Reproduction",
  topic: "Vital Activities"
},
{
  q: "Circulatory system helps to:",
  options: ["Transport nutrients and oxygen", "Produce hormones", "Digest food", "Excrete wastes"],
  ans: "Transport nutrients and oxygen",
  topic: "Vital Activities"
},
    /* ============ THE CELL (15) ============ */
    {
    q: "The cell is best described as the:",
    options: ["Smallest atom of life", "Basic unit of life", "Smallest tissue", "Building block of organs"],
    ans: "Basic unit of life",
    topic: "The Cell"
    },
    {
    q: "Who discovered the cell in 1665?",
    options: ["Louis Pasteur", "Robert Hooke", "Charles Darwin", "Gregor Mendel"],
    ans: "Robert Hooke",
    topic: "The Cell"
    },
    {
    q: "Which structure controls all activities of the cell?",
    options: ["Ribosome", "Mitochondrion", "Nucleus", "Cytoplasm"],
    ans: "Nucleus",
    topic: "The Cell"
    },
    {
    q: "The cell membrane is also known as:",
    options: ["Cell wall", "Plasma membrane", "Nuclear membrane", "Cytoskeleton"],
    ans: "Plasma membrane",
    topic: "The Cell"
    },
    {
    q: "Which organelle is responsible for energy production?",
    options: ["Nucleus", "Mitochondrion", "Ribosome", "Golgi body"],
    ans: "Mitochondrion",
    topic: "The Cell"
    },
    {
    q: "Ribosomes are involved in:",
    options: ["Respiration", "Protein synthesis", "Photosynthesis", "Digestion"],
    ans: "Protein synthesis",
    topic: "The Cell"
    },
    {
    q: "Plant cells differ from animal cells because plant cells have:",
    options: ["Nucleus", "Mitochondria", "Cell wall", "Ribosomes"],
    ans: "Cell wall",
    topic: "The Cell"
    },
    {
    q: "Which organelle contains chlorophyll?",
    options: ["Chloroplast", "Mitochondrion", "Vacuole", "Nucleus"],
    ans: "Chloroplast",
    topic: "The Cell"
    },
    {
    q: "Cytoplasm is best described as:",
    options: ["Solid structure", "Jelly-like substance", "Rigid wall", "Fluid in nucleus"],
    ans: "Jelly-like substance",
    topic: "The Cell"
    },
    {
    q: "The Golgi apparatus is involved in:",
    options: ["Protein packaging", "Energy production", "Cell division", "Respiration"],
    ans: "Protein packaging",
    topic: "The Cell"
    },
    {
    q: "Which structure stores materials in plant cells?",
    options: ["Vacuole", "Nucleus", "Mitochondrion", "Ribosome"],
    ans: "Vacuole",
    topic: "The Cell"
    },
    {
    q: "Prokaryotic cells lack:",
    options: ["Cytoplasm", "Cell membrane", "True nucleus", "Ribosomes"],
    ans: "True nucleus",
    topic: "The Cell"
    },
    {
    q: "Which of the following is a prokaryote?",
    options: ["Amoeba", "Bacteria", "Paramecium", "Fungus"],
    ans: "Bacteria",
    topic: "The Cell"
    },
    {
    q: "Cell division in body cells is called:",
    options: ["Meiosis", "Binary fission", "Mitosis", "Fertilization"],
    ans: "Mitosis",
    topic: "The Cell"
    },
    {
    q: "Which organelle is known as the powerhouse of the cell?",
    options: ["Nucleus", "Chloroplast", "Mitochondrion", "Ribosome"],
    ans: "Mitochondrion",
    topic: "The Cell"
    },
    
    /* ============ GENETICS (15) ============ */
    {
    q: "Genetics is the study of:",
    options: ["Cells", "Heredity", "Evolution", "Ecology"],
    ans: "Heredity",
    topic: "Genetics"
    },
    {
    q: "The father of genetics is:",
    options: ["Darwin", "Mendel", "Pasteur", "Hooke"],
    ans: "Mendel",
    topic: "Genetics"
    },
    {
    q: "Traits are passed from parents to offspring through:",
    options: ["Blood", "Genes", "Cells", "Organs"],
    ans: "Genes",
    topic: "Genetics"
    },
    {
    q: "Genes are located on:",
    options: ["Nucleus", "Chromosomes", "Ribosomes", "Cytoplasm"],
    ans: "Chromosomes",
    topic: "Genetics"
    },
    {
    q: "An organism with two identical alleles is said to be:",
    options: ["Heterozygous", "Hybrid", "Homozygous", "Dominant"],
    ans: "Homozygous",
    topic: "Genetics"
    },
    {
    q: "Which trait shows itself in a heterozygous condition?",
    options: ["Recessive", "Dominant", "Hidden", "Incomplete"],
    ans: "Dominant",
    topic: "Genetics"
    },
    {
    q: "The outward appearance of an organism is its:",
    options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
    ans: "Phenotype",
    topic: "Genetics"
    },
    {
    q: "The genetic makeup of an organism is called:",
    options: ["Phenotype", "Allele", "Genotype", "Trait"],
    ans: "Genotype",
    topic: "Genetics"
    },
    {
    q: "A cross involving one trait is called:",
    options: ["Dihybrid cross", "Monohybrid cross", "Test cross", "Back cross"],
    ans: "Monohybrid cross",
    topic: "Genetics"
    },
    {
    q: "The recessive trait appears only when:",
    options: ["Dominant allele is present", "Two recessive alleles are present", "One allele is present", "Genes are absent"],
    ans: "Two recessive alleles are present",
    topic: "Genetics"
    },
    {
    q: "Which blood group is a universal donor?",
    options: ["A", "B", "AB", "O"],
    ans: "O",
    topic: "Genetics"
    },
    {
    q: "Sex determination in humans is controlled by:",
    options: ["Autosomes", "Sex chromosomes", "Genes only", "Cytoplasm"],
    ans: "Sex chromosomes",
    topic: "Genetics"
    },
    {
    q: "Which chromosome combination produces a male?",
    options: ["XX", "YY", "XY", "XO"],
    ans: "XY",
    topic: "Genetics"
    },
    {
    q: "Albinism is an example of:",
    options: ["Dominant trait", "Sex-linked trait", "Recessive trait", "Acquired trait"],
    ans: "Recessive trait",
    topic: "Genetics"
    },
    {
    q: "Variation refers to:",
    options: ["Similarity among organisms", "Differences among individuals", "Growth", "Reproduction"],
    ans: "Differences among individuals",
    topic: "Genetics"
    },
    
    /* ============ ECOLOGY (15) ============ */
    {
    q: "Ecology is the study of:",
    options: ["Cells", "Living organisms and their environment", "Genes", "Evolution"],
    ans: "Living organisms and their environment",
    topic: "Ecology"
    },
    {
    q: "A group of organisms of the same species living together is called:",
    options: ["Community", "Population", "Habitat", "Ecosystem"],
    ans: "Population",
    topic: "Ecology"
    },
    {
    q: "The place where an organism lives is its:",
    options: ["Niche", "Habitat", "Community", "Ecosystem"],
    ans: "Habitat",
    topic: "Ecology"
    },
    {
    q: "Plants are classified as:",
    options: ["Consumers", "Decomposers", "Producers", "Parasites"],
    ans: "Producers",
    topic: "Ecology"
    },
    {
    q: "Animals that eat plants are called:",
    options: ["Carnivores", "Omnivores", "Herbivores", "Decomposers"],
    ans: "Herbivores",
    topic: "Ecology"
    },
    {
    q: "An organism that feeds on both plants and animals is:",
    options: ["Herbivore", "Carnivore", "Omnivore", "Parasite"],
    ans: "Omnivore",
    topic: "Ecology"
    },
    {
    q: "The relationship where both organisms benefit is:",
    options: ["Parasitism", "Commensalism", "Mutualism", "Competition"],
    ans: "Mutualism",
    topic: "Ecology"
    },
    {
    q: "Which organism breaks down dead organic matter?",
    options: ["Producer", "Consumer", "Decomposer", "Parasite"],
    ans: "Decomposer",
    topic: "Ecology"
    },
    {
    q: "Energy in an ecosystem flows from:",
    options: ["Consumers to producers", "Producers to consumers", "Animals to plants", "Decomposers to producers"],
    ans: "Producers to consumers",
    topic: "Ecology"
    },
    {
    q: "A food chain always begins with:",
    options: ["Herbivores", "Carnivores", "Producers", "Decomposers"],
    ans: "Producers",
    topic: "Ecology"
    },
    {
    q: "Competition occurs when organisms:",
    options: ["Cooperate", "Share resources freely", "Fight for limited resources", "Live separately"],
    ans: "Fight for limited resources",
    topic: "Ecology"
    },
    {
    q: "Deforestation affects the ecosystem by:",
    options: ["Increasing biodiversity", "Reducing habitat", "Improving soil fertility", "Increasing rainfall"],
    ans: "Reducing habitat",
    topic: "Ecology"
    },
    {
    q: "Biotic factors include:",
    options: ["Water", "Temperature", "Plants and animals", "Soil"],
    ans: "Plants and animals",
    topic: "Ecology"
    },
    {
    q: "Abiotic factors include:",
    options: ["Plants", "Animals", "Microorganisms", "Temperature"],
    ans: "Temperature",
    topic: "Ecology"
    },
    {
    q: "Pollution is best defined as:",
    options: ["Use of land", "Introduction of harmful substances", "Natural disaster", "Recycling"],
    ans: "Introduction of harmful substances",
    topic: "Ecology"
    },
    
    /* ============ PLANT & ANIMAL PHYSIOLOGY (15) ============ */
    {
    q: "Physiology is the study of:",
    options: ["Structure", "Functions of living organisms", "Cells only", "Environment"],
    ans: "Functions of living organisms",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Photosynthesis occurs mainly in the:",
    options: ["Root", "Stem", "Leaf", "Flower"],
    ans: "Leaf",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "The green pigment used in photosynthesis is:",
    options: ["Haemoglobin", "Chlorophyll", "Carotene", "Melanin"],
    ans: "Chlorophyll",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "The opening and closing of stomata controls:",
    options: ["Respiration only", "Transpiration", "Growth", "Reproduction"],
    ans: "Transpiration",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Water transport in plants occurs through:",
    options: ["Phloem", "Xylem", "Cambium", "Cortex"],
    ans: "Xylem",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Food transport in plants occurs through:",
    options: ["Xylem", "Phloem", "Root hair", "Stem"],
    ans: "Phloem",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Respiration is the process of:",
    options: ["Energy release", "Food manufacture", "Gas exchange", "Growth"],
    ans: "Energy release",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "The main organ of respiration in humans is the:",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    ans: "Lungs",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Blood transports:",
    options: ["Only oxygen", "Nutrients and gases", "Waste only", "Water only"],
    ans: "Nutrients and gases",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "The organ that pumps blood is the:",
    options: ["Liver", "Brain", "Heart", "Kidney"],
    ans: "Heart",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Digestion of food begins in the:",
    options: ["Stomach", "Mouth", "Small intestine", "Oesophagus"],
    ans: "Mouth",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "The enzyme in saliva is:",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    ans: "Amylase",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Excretion is the removal of:",
    options: ["Undigested food", "Metabolic waste", "Water only", "Oxygen"],
    ans: "Metabolic waste",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "The kidney is responsible for:",
    options: ["Breathing", "Digestion", "Excretion", "Circulation"],
    ans: "Excretion",
    topic: "Plant and Animal Physiology"
    },
    {
    q: "Hormones are produced by:",
    options: ["Nerves", "Glands", "Muscles", "Bones"],
    ans: "Glands",
    topic: "Plant and Animal Physiology"
    },
   /* ============ Taxonomy(15) ============ */

  {
    q: "Taxonomy is the branch of biology that deals with:",
    options: ["Cell division", "Classification of organisms", "Study of tissues", "Inheritance"],
    ans: "Classification of organisms",
    topic: "Taxonomy"
  },
  {
    q: "The scientist known as the father of taxonomy is:",
    options: ["Charles Darwin", "Gregor Mendel", "Carolus Linnaeus", "Aristotle"],
    ans: "Carolus Linnaeus",
    topic: "Taxonomy"
  },
  {
    q: "The highest taxonomic rank is:",
    options: ["Kingdom", "Phylum", "Domain", "Class"],
    ans: "Domain",
    topic: "Taxonomy"
  },
  {
    q: "Which of the following is the correct order of classification?",
    options: [
      "Kingdom, Phylum, Class, Order, Family, Genus, Species",
      "Kingdom, Class, Phylum, Order, Genus, Family, Species",
      "Phylum, Kingdom, Class, Order, Family, Species, Genus",
      "Class, Order, Family, Kingdom, Genus, Species, Phylum"
    ],
    ans: "Kingdom, Phylum, Class, Order, Family, Genus, Species",
    topic: "Taxonomy"
  },
  {
    q: "Binomial nomenclature was introduced by:",
    options: ["Darwin", "Linnaeus", "Mendel", "Hooke"],
    ans: "Linnaeus",
    topic: "Taxonomy"
  },
  {
    q: "In binomial nomenclature, the first name represents the:",
    options: ["Species", "Family", "Genus", "Order"],
    ans: "Genus",
    topic: "Taxonomy"
  },
  {
    q: "The second name in binomial nomenclature is the:",
    options: ["Genus", "Order", "Species", "Family"],
    ans: "Species",
    topic: "Taxonomy"
  },
  {
    q: "Scientific names are written in:",
    options: ["Capital letters", "Italic form", "Bold letters", "Quotation marks"],
    ans: "Italic form",
    topic: "Taxonomy"
  },
  {
    q: "Which kingdom contains unicellular organisms without a true nucleus?",
    options: ["Protista", "Fungi", "Monera", "Plantae"],
    ans: "Monera",
    topic: "Taxonomy"
  },
  {
    q: "Animals belong to which kingdom?",
    options: ["Plantae", "Animalia", "Fungi", "Protista"],
    ans: "Animalia",
    topic: "Taxonomy"
  },
  {
    q: "Plants are classified under the kingdom:",
    options: ["Protista", "Fungi", "Plantae", "Animalia"],
    ans: "Plantae",
    topic: "Taxonomy"
  },
  {
    q: "Which taxonomic rank is directly above species?",
    options: ["Family", "Order", "Genus", "Class"],
    ans: "Genus",
    topic: "Taxonomy"
  },
  {
    q: "Organisms in the same genus have:",
    options: ["Same family only", "Similar characteristics", "No relationship", "Different structures"],
    ans: "Similar characteristics",
    topic: "Taxonomy"
  },
  {
    q: "Which kingdom includes mushrooms?",
    options: ["Plantae", "Protista", "Fungi", "Animalia"],
    ans: "Fungi",
    topic: "Taxonomy"
  },
  {
    q: "Viruses are not classified because they:",
    options: ["Are too small", "Lack cellular structure", "Are plants", "Are animals"],
    ans: "Lack cellular structure",
    topic: "Taxonomy"
  },
  {
    q: "The scientific name of man is:",
    options: ["Homo erectus", "Homo sapiens", "Homo habilis", "Australopithecus"],
    ans: "Homo sapiens",
    topic: "Taxonomy"
  },
  {
    q: "Which of these is a taxonomic rank?",
    options: ["Cell", "Organ", "Family", "Tissue"],
    ans: "Family",
    topic: "Taxonomy"
  },
  {
    q: "Classification helps biologists to:",
    options: ["Confuse organisms", "Identify organisms easily", "Destroy organisms", "Change organisms"],
    ans: "Identify organisms easily",
    topic: "Taxonomy"
  },
  {
    q: "Closely related organisms are grouped into the same:",
    options: ["Kingdom", "Species", "Genus", "Phylum"],
    ans: "Genus",
    topic: "Taxonomy"
  },
  {
    q: "Which kingdom consists mainly of multicellular autotrophs?",
    options: ["Animalia", "Plantae", "Fungi", "Protista"],
    ans: "Plantae",
    topic: "Taxonomy"
  },
   
    /* ============ Mitosisaand meiosis(15) ============ */
{
    q: "Mitosis is a type of cell division that produces:",
    options: ["Four haploid cells", "Two identical diploid cells", "Gametes only", "Different cells"],
    ans: "Two identical diploid cells",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Meiosis results in the formation of:",
    options: ["Somatic cells", "Zygotes", "Four haploid cells", "Two diploid cells"],
    ans: "Four haploid cells",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Which type of cell division is responsible for growth and repair?",
    options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
    ans: "Mitosis",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "The first stage of mitosis is:",
    options: ["Metaphase", "Prophase", "Anaphase", "Telophase"],
    ans: "Prophase",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Crossing over occurs during:",
    options: ["Prophase I of meiosis", "Metaphase II", "Anaphase I", "Prophase of mitosis"],
    ans: "Prophase I of meiosis",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Which process leads to genetic variation?",
    options: ["Mitosis", "Cytokinesis", "Crossing over", "Interphase"],
    ans: "Crossing over",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Chromosomes align at the equatorial plate during:",
    options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    ans: "Metaphase",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Homologous chromosomes separate during:",
    options: ["Anaphase I", "Anaphase II", "Metaphase I", "Telophase II"],
    ans: "Anaphase I",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Sister chromatids separate during:",
    options: ["Anaphase I", "Metaphase I", "Anaphase II", "Prophase I"],
    ans: "Anaphase II",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Mitosis maintains the:",
    options: ["Haploid number", "Chromosome number", "Genetic variation", "Sex cells"],
    ans: "Chromosome number",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "The chromosome number is reduced by half during:",
    options: ["Mitosis", "Meiosis I", "Meiosis II", "Interphase"],
    ans: "Meiosis I",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Which of the following occurs in meiosis but not mitosis?",
    options: ["DNA replication", "Crossing over", "Cytokinesis", "Spindle formation"],
    ans: "Crossing over",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Meiosis occurs in cells that produce:",
    options: ["Body cells", "Gametes", "Tissues", "Organs"],
    ans: "Gametes",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Mitosis occurs in:",
    options: ["Gamete-producing cells", "Somatic cells", "Reproductive cells only", "Zygotes only"],
    ans: "Somatic cells",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Which division is known as reduction division?",
    options: ["Mitosis", "Meiosis I", "Meiosis II", "Cytokinesis"],
    ans: "Meiosis I",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Meiosis II is similar to:",
    options: ["Binary fission", "Mitosis", "Budding", "Fertilization"],
    ans: "Mitosis",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Independent assortment occurs during:",
    options: ["Prophase I", "Metaphase I", "Anaphase II", "Telophase I"],
    ans: "Metaphase I",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "The main function of meiosis is to:",
    options: ["Repair tissues", "Produce gametes", "Increase cell number", "Replace damaged cells"],
    ans: "Produce gametes",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "After mitosis, daughter cells are:",
    options: ["Haploid", "Genetically identical", "Genetically different", "Gametes"],
    ans: "Genetically identical",
    topic: "Mitosis and Meiosis"
  },
  {
    q: "Which of the following does NOT occur in mitosis?",
    options: ["Chromosome replication", "Crossing over", "Spindle formation", "Cytokinesis"],
    ans: "Crossing over",
    topic: "Mitosis and Meiosis"
  }
],
"GST": [
      /* ============ LANGUAGE (15) ============ */
    {
    q: "Language is best defined as:",
    options: ["A system of sounds", "A means of communication", "A collection of words", "A subject"],
    ans: "A means of communication",
    topic: "Language"
    },
    {
    q: "Language is primarily used for:",
    options: ["Punishment", "Communication", "Confusion", "Entertainment only"],
    ans: "Communication",
    topic: "Language"
    },
    {
    q: "Which of the following is a function of language?",
    options: ["Sleeping", "Communication", "Walking", "Eating"],
    ans: "Communication",
    topic: "Language"
    },
    {
    q: "Human language is different from animal communication because it is:",
    options: ["Instinctive", "Limited", "Creative", "Fixed"],
    ans: "Creative",
    topic: "Language"
    },
    {
    q: "The study of language is called:",
    options: ["Literature", "Grammar", "Linguistics", "Syntax"],
    ans: "Linguistics",
    topic: "Language"
    },
    {
    q: "Which of the following is NOT a feature of language?",
    options: ["Arbitrariness", "Creativity", "Productivity", "Instinct"],
    ans: "Instinct",
    topic: "Language"
    },
    {
    q: "Language changes over time due to:",
    options: ["Culture and society", "Weather", "Age", "Sleep"],
    ans: "Culture and society",
    topic: "Language"
    },
    {
    q: "A language used by a community is called:",
    options: ["Idiolect", "Dialect", "Sociolect", "Register"],
    ans: "Dialect",
    topic: "Language"
    },
    {
    q: "The smallest meaningful unit of language is:",
    options: ["Sound", "Word", "Morpheme", "Sentence"],
    ans: "Morpheme",
    topic: "Language"
    },
    {
    q: "Language is said to be arbitrary because:",
    options: ["It has no rules", "Words have no natural connection to meaning", "It is difficult", "It is universal"],
    ans: "Words have no natural connection to meaning",
    topic: "Language"
    },
    {
    q: "Which of these is a spoken language?",
    options: ["Sign language", "English", "Symbols", "Codes"],
    ans: "English",
    topic: "Language"
    },
    {
    q: "Written language is mainly used for:",
    options: ["Immediate feedback", "Permanent records", "Gestures", "Sound"],
    ans: "Permanent records",
    topic: "Language"
    },
    {
    q: "The language used in academic writing should be:",
    options: ["Slang", "Informal", "Formal", "Colloquial"],
    ans: "Formal",
    topic: "Language"
    },
    {
    q: "Language reflects a people’s:",
    options: ["Weather", "Culture", "Food", "Housing"],
    ans: "Culture",
    topic: "Language"
    },
    {
    q: "Which of the following is NOT a form of language?",
    options: ["Speech", "Writing", "Gesture", "Noise"],
    ans: "Noise",
    topic: "Language"
    },
 
    {
        q: "The director, as well as his assistants, _______ to be held responsible for the discrepancy in the accounts.",
        options: ["is", "are", "were", "have"],
        ans: "is",
        topic: "Lexis and Structure"
    },
    {
        q: "Had I known of your arrival, I _______ you at the airport.",
        options: ["would have met", "will meet", "would meet", "had met"],
        ans: "would have met",
        topic: "Lexis and Structure"
    },
    {
        q: "It is high time the government _______ something about the rising inflation.",
        options: ["did", "does", "has done", "should do"],
        ans: "did",
        topic: "Lexis and Structure"
    },
    {
        q: "The judge insisted that the witness _______ the truth.",
        options: ["tell", "tells", "told", "should have told"],
        ans: "tell",
        topic: "Lexis and Structure"
    },
    {
        q: "The new law has _______ the previous regulations regarding land acquisition.",
        options: ["superseded", "supplanted", "suspended", "surmounted"],
        ans: "superseded",
        topic: "Lexis and Structure"
    },
    {
        q: "Hardly _______ the podium when the audience started cheering.",
        options: ["had he mounted", "he had mounted", "did he mount", "he mounted"],
        ans: "had he mounted",
        topic: "Lexis and Structure"
    },
    {
        q: "None of the students _______ able to solve the complex calculus problem.",
        options: ["was", "were", "is", "have been"],
        ans: "was",
        topic: "Lexis and Structure"
    },
    {
        q: "I would rather you _______ the secret to anyone.",
        options: ["didn't tell", "don't tell", "haven't told", "not to tell"],
        ans: "didn't tell",
        topic: "Lexis and Structure"
    },
    {
        q: "The investigation was so _______ that no stone was left unturned.",
        options: ["thorough", "though", "tough", "through"],
        ans: "thorough",
        topic: "Lexis and Structure"
    },
    {
        q: "The news of the president's resignation _______ across the country like wildfire.",
        options: ["spread", "spreaded", "was spreaded", "is spreading"],
        ans: "spread",
        topic: "Lexis and Structure"
    },
    {
        q: "He is a man of _______ integrity who cannot be bribed.",
        options: ["unimpeachable", "unavoidable", "unaccountable", "unattached"],
        ans: "unimpeachable",
        topic: "Lexis and Structure"
    },
    {
        q: "Neither the manager nor the employees _______ aware of the security breach.",
        options: ["were", "was", "is", "has been"],
        ans: "were",
        topic: "Lexis and Structure"
    },
    {
        q: "The candidate's speech was full of _______, making it difficult to understand his actual points.",
        options: ["verbiage", "verbosity", "vernacular", "veracity"],
        ans: "verbiage",
        topic: "Lexis and Structure"
    },
    {
        q: "If he _______ more careful, he wouldn't have crashed the car.",
        options: ["had been", "was", "were", "is"],
        ans: "had been",
        topic: "Lexis and Structure"
    },
    {
        q: "You _______ see a doctor if that cough persists.",
        options: ["had better", "would better", "should better", "have better"],
        ans: "had better",
        topic: "Lexis and Structure"
    },
    {
        q: "The principal congratulated the students _______ their excellent performance.",
        options: ["on", "for", "at", "about"],
        ans: "on",
        topic: "Lexis and Structure"
    },
    {
        q: "To _______ much is given, much is expected.",
        options: ["whom", "who", "whose", "whomever"],
        ans: "whom",
        topic: "Lexis and Structure"
    },
    {
        q: "Choose the correctly spelled word:",
        options: ["Maintenance", "Maintainance", "Maintenence", "Maintennance"],
        ans: "Maintenance",
        topic: "Lexis and Structure"
    },
    {
        q: "I haven't seen him _______ the last two years.",
        options: ["for", "since", "during", "at"],
        ans: "for",
        topic: "Lexis and Structure"
    },
    {
        q: "The meeting was _______ because the chairman was indisposed.",
        options: ["adjourned", "postponed", "cancelled", "prorogued"],
        ans: "adjourned",
        topic: "Lexis and Structure"
    },

    /* ============ LISTENING AND SPEAKING SKILLS (15) ============ */
    {
    q: "Listening is different from hearing because listening involves:",
    options: ["Sound", "Attention", "Noise", "Ears only"],
    ans: "Attention",
    topic: "Listening and speaking skills"
    },
    {
    q: "Effective listening requires:",
    options: ["Talking", "Concentration", "Interrupting", "Arguing"],
    ans: "Concentration",
    topic: "Listening and speaking skills"
    },
    {
    q: "Which of the following is a barrier to listening?",
    options: ["Attention", "Noise", "Understanding", "Interest"],
    ans: "Noise",
    topic: "Listening and speaking skills"
    },
    {
    q: "Good speaking skills require:",
    options: ["Confidence", "Fear", "Speed", "Silence"],
    ans: "Confidence",
    topic: "Listening and speaking skills"
    },
    {
    q: "Pronunciation refers to:",
    options: ["Spelling of words", "Meaning of words", "Correct production of sounds", "Grammar"],
    ans: "Correct production of sounds",
    topic: "Listening and speaking skills"
    },
    {
    q: "Clear speech depends largely on:",
    options: ["Volume", "Speed", "Articulation", "Accent"],
    ans: "Articulation",
    topic: "Listening and speaking skills"
    },
    {
    q: "Which of the following improves listening skills?",
    options: ["Interrupting speaker", "Maintaining eye contact", "Daydreaming", "Arguing"],
    ans: "Maintaining eye contact",
    topic: "Listening and speaking skills"
    },
    {
    q: "Speaking too fast can cause:",
    options: ["Clarity", "Understanding", "Miscommunication", "Confidence"],
    ans: "Miscommunication",
    topic: "Listening and speaking skills"
    },
    {
    q: "Public speaking involves:",
    options: ["Private discussion", "Audience interaction", "Silence", "Writing only"],
    ans: "Audience interaction",
    topic: "Listening and speaking skills"
    },
    {
    q: "Tone of voice can show:",
    options: ["Emotion", "Grammar", "Spelling", "Vocabulary"],
    ans: "Emotion",
    topic: "Listening and speaking skills"
    },
    {
    q: "Listening for main ideas is called:",
    options: ["Critical listening", "Attentive listening", "Selective listening", "Passive listening"],
    ans: "Selective listening",
    topic: "Listening and speaking skills"
    },
    {
    q: "Which is an example of non-verbal communication?",
    options: ["Writing", "Speaking", "Gestures", "Reading"],
    ans: "Gestures",
    topic: "Listening and speaking skills"
    },
    {
    q: "Eye contact during speech shows:",
    options: ["Fear", "Confidence", "Anger", "Confusion"],
    ans: "Confidence",
    topic: "Listening and speaking skills"
    },
    {
    q: "Effective speaking requires proper:",
    options: ["Posture", "Noise", "Argument", "Silence"],
    ans: "Posture",
    topic: "Listening and speaking skills"
    },
    {
    q: "Listening is important because it helps to:",
    options: ["Argue", "Understand message", "Interrupt", "Ignore speaker"],
    ans: "Understand message",
    topic: "Listening and speaking skills"
    },
  {
    q: "Listening differs from hearing because listening involves:",
    options: ["Noise", "Understanding", "Sound waves", "Silence"],
    ans: "Understanding",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Effective communication requires:",
    options: ["Speaking only", "Listening only", "Both listening and speaking", "Writing only"],
    ans: "Both listening and speaking",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "One major barrier to effective listening is:",
    options: ["Interest", "Attention", "Noise", "Understanding"],
    ans: "Noise",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Feedback in communication means:",
    options: ["Noise", "Response from receiver", "Message", "Gesture"],
    ans: "Response from receiver",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Good speakers usually speak with:",
    options: ["Poor posture", "Confidence", "Confusion", "Speed only"],
    ans: "Confidence",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Maintaining eye contact improves:",
    options: ["Noise", "Listening skill", "Speed", "Accent"],
    ans: "Listening skill",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Public speaking mainly involves:",
    options: ["Whispering", "Clear articulation", "Silence", "Writing"],
    ans: "Clear articulation",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Listening for facts and information is called:",
    options: ["Critical listening", "Informational listening", "Passive listening", "Selective listening"],
    ans: "Informational listening",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Interrupting a speaker shows:",
    options: ["Good listening", "Poor listening", "Interest", "Confidence"],
    ans: "Poor listening",
    topic: "Listening and Speaking Skills"
  },
  {
    q: "Effective speaking requires:",
    options: ["Mumbling", "Poor pronunciation", "Proper intonation", "Low voice"],
    ans: "Proper intonation",
    topic: "Listening and Speaking Skills"
  },

    /* ============ SPEECH SOUNDS (15) ============ */
    {
    q: "Speech sounds are studied in:",
    options: ["Syntax", "Phonetics", "Semantics", "Morphology"],
    ans: "Phonetics",
    topic: "Speech sounds"
    },
    {
    q: "English has how many vowel sounds?",
    options: ["12", "20", "24", "44"],
    ans: "20",
    topic: "Speech sounds"
    },
    {
    q: "English consonant sounds are:",
    options: ["20", "24", "44", "12"],
    ans: "24",
    topic: "Speech sounds"
    },
    {
    q: "Vowel sounds are produced with:",
    options: ["Obstruction", "No obstruction", "Nasal cavity only", "Tongue only"],
    ans: "No obstruction",
    topic: "Speech sounds"
    },
    {
    q: "Consonant sounds are produced with:",
    options: ["No obstruction", "Partial or total obstruction", "Free airflow", "Vibration only"],
    ans: "Partial or total obstruction",
    topic: "Speech sounds"
    },
    {
    q: "Which is a vowel sound?",
    options: ["/b/", "/t/", "/iː/", "/k/"],
    ans: "/iː/",
    topic: "Speech sounds"
    },
    {
    q: "Which is a consonant sound?",
    options: ["/a/", "/e/", "/p/", "/ɔː/"],
    ans: "/p/",
    topic: "Speech sounds"
    },
    {
    q: "The International Phonetic Alphabet (IPA) is used for:",
    options: ["Spelling", "Pronunciation", "Grammar", "Writing"],
    ans: "Pronunciation",
    topic: "Speech sounds"
    },
    {
    q: "Diphthongs are:",
    options: ["Single vowel sounds", "Double consonants", "Combination of two vowel sounds", "Silent letters"],
    ans: "Combination of two vowel sounds",
    topic: "Speech sounds"
    },
    {
    q: "Which is a diphthong?",
    options: ["/iː/", "/æ/", "/eɪ/", "/ʊ/"],
    ans: "/eɪ/",
    topic: "Speech sounds"
    },
    {
    q: "Voiced sounds involve:",
    options: ["No vibration", "Tongue only", "Vocal cord vibration", "Teeth only"],
    ans: "Vocal cord vibration",
    topic: "Speech sounds"
    },
    {
    q: "Voiceless sounds involve:",
    options: ["Vocal cord vibration", "No vibration", "Lips only", "Tongue only"],
    ans: "No vibration",
    topic: "Speech sounds"
    },
    {
    q: "Which of these is a voiceless sound?",
    options: ["/b/", "/d/", "/z/", "/s/"],
    ans: "/s/",
    topic: "Speech sounds"
    },
    {
    q: "Speech sounds help in:",
    options: ["Spelling only", "Clear communication", "Writing", "Grammar"],
    ans: "Clear communication",
    topic: "Speech sounds"
    },
    {
    q: "Phonetics focuses on:",
    options: ["Meaning", "Sentence structure", "Sound production", "Word formation"],
    ans: "Sound production",
    topic: "Speech sounds"
    },
   /* ============ Comprenshion (15) ============ */

  {
    q: "Comprehension refers to the ability to:",
    options: ["Read aloud", "Understand a passage", "Write fast", "Memorize words"],
    ans: "Understand a passage",
    topic: "Comprehension"
  },
  {
    q: "The main idea of a passage is found in the:",
    options: ["Last word", "Topic sentence", "Middle line", "Title only"],
    ans: "Topic sentence",
    topic: "Comprehension"
  },
  {
    q: "Skimming helps readers to:",
    options: ["Read every word", "Get main ideas", "Memorize details", "Translate text"],
    ans: "Get main ideas",
    topic: "Comprehension"
  },
  {
    q: "Scanning is used to:",
    options: ["Read slowly", "Find specific information", "Understand tone", "Analyze style"],
    ans: "Find specific information",
    topic: "Comprehension"
  },
  {
    q: "Reading between the lines is called:",
    options: ["Guessing", "Inference", "Scanning", "Skimming"],
    ans: "Inference",
    topic: "Comprehension"
  },
  {
    q: "A story passage is called:",
    options: ["Narrative", "Argumentative", "Descriptive", "Expository"],
    ans: "Narrative",
    topic: "Comprehension"
  },
  {
    q: "Details in a passage serve to:",
    options: ["Confuse readers", "Support ideas", "Replace conclusion", "Decorate text"],
    ans: "Support ideas",
    topic: "Comprehension"
  },
  {
    q: "The writer’s attitude is known as:",
    options: ["Mood", "Tone", "Theme", "Voice"],
    ans: "Tone",
    topic: "Comprehension"
  },
  {
    q: "Context clues help readers to:",
    options: ["Skip words", "Understand unfamiliar words", "Ignore meaning", "Translate text"],
    ans: "Understand unfamiliar words",
    topic: "Comprehension"
  },
  {
    q: "Good comprehension improves:",
    options: ["Speed only", "Understanding", "Pronunciation", "Spelling"],
    ans: "Understanding",
    topic: "Comprehension"
  },
   /* ============ Stress (15) ============ */

  {
    q: "Stress in speech refers to:",
    options: ["Loud speaking", "Emphasis on syllables", "Fast talking", "Body tension"],
    ans: "Emphasis on syllables",
    topic: "Stress"
  },
  {
    q: "Wrong stress can lead to:",
    options: ["Clarity", "Misunderstanding", "Accuracy", "Fluency"],
    ans: "Misunderstanding",
    topic: "Stress"
  },
  {
    q: "Sentence stress helps to identify:",
    options: ["All words", "Important words", "Grammar", "Punctuation"],
    ans: "Important words",
    topic: "Stress"
  },
  {
    q: "English is a ______ language.",
    options: ["Syllable-timed", "Stress-timed", "Tone-timed", "Silent"],
    ans: "Stress-timed",
    topic: "Stress"
  },
  {
    q: "Content words are usually:",
    options: ["Unstressed", "Ignored", "Stressed", "Silent"],
    ans: "Stressed",
    topic: "Stress"
  },
  {
    q: "Function words are usually:",
    options: ["Stressed", "Unstressed", "Long", "Emphasized"],
    ans: "Unstressed",
    topic: "Stress"
  },
  {
    q: "Correct stress improves:",
    options: ["Noise", "Meaning", "Speed", "Spelling"],
    ans: "Meaning",
    topic: "Stress"
  },
  {
    q: "Word stress affects:",
    options: ["Grammar", "Pronunciation", "Vocabulary", "Spelling"],
    ans: "Pronunciation",
    topic: "Stress"
  },
  {
    q: "Stress occurs mostly on:",
    options: ["Every syllable", "Important syllables", "Last letters", "Vowels only"],
    ans: "Important syllables",
    topic: "Stress"
  },
  {
    q: "Correct stress leads to:",
    options: ["Confusion", "Effective communication", "Silence", "Errors"],
    ans: "Effective communication",
    topic: "Stress"
  }
],
    
"GES151": [
    /* ============ AGRICULTURAL SYSTEMS (20) ============ */
      // --- TOPIC 1: CULTURAL PRACTICES (15 Questions) ---
        {
            q: "Which cultural practice involves the removal of weeds from a farm to prevent competition for nutrients?",
            options: ["Pruning", "Mulching", "Weeding", "Thinning"],
            ans: "Weeding",
            topic: "Cultural Practices"
        },
        {
            q: "What is the primary purpose of 'Mulching' in crop production?",
            options: ["To add color to the soil", "To conserve soil moisture and suppress weeds", "To kill insect pests", "To increase the height of the crop"],
            ans: "To conserve soil moisture and suppress weeds",
            topic: "Cultural Practices"
        },
        {
            q: "The practice of removing excess seedlings from a stand to allow others grow better is called:",
            options: ["Supplying", "Thinning", "Pruning", "Staking"],
            ans: "Thinning",
            topic: "Cultural Practices"
        },
        {
            q: "Which practice involves replacing seeds that failed to germinate after planting?",
            options: ["Supplying", "Thinning", "Transplanting", "Harvesting"],
            ans: "Supplying",
            topic: "Cultural Practices"
        },
        {
            q: "The process of moving seedlings from a nursery to the main field is known as:",
            options: ["Seeding", "Transplanting", "Broadcasting", "Mulching"],
            ans: "Transplanting",
            topic: "Cultural Practices"
        },
        {
            q: "What is the benefit of 'Crop Rotation'?",
            options: ["It makes the farm look beautiful", "It helps maintain soil fertility and break pest cycles", "It reduces the need for seeds", "It allows farmers to sleep more"],
            ans: "It helps maintain soil fertility and break pest cycles",
            topic: "Cultural Practices"
        },
        {
            q: "Applying organic or inorganic materials to the soil to improve its nutrient status is called:",
            options: ["Irrigation", "Fertilization", "Pruning", "Harrowing"],
            ans: "Fertilization",
            topic: "Cultural Practices"
        },
        {
            q: "Staking is most commonly practiced in the cultivation of which crop?",
            options: ["Maize", "Yam", "Rice", "Wheat"],
            ans: "Yam",
            topic: "Cultural Practices"
        },
        {
            q: "Pruning is essential in tree crop management to:",
            options: ["Reduce plant height", "Remove dead or diseased parts and improve yield", "Make the tree die faster", "Decorate the farm"],
            ans: "Remove dead or diseased parts and improve yield",
            topic: "Cultural Practices"
        },
        {
            q: "What is 'Bush Fallowing'?",
            options: ["Burning the bush every day", "Leaving land uncultivated for a period to regain fertility", "Planting trees in rows", "Flooding the farm"],
            ans: "Leaving land uncultivated for a period to regain fertility",
            topic: "Cultural Practices"
        },
        {
            q: "The artificial application of water to soil for crop growth is called:",
            options: ["Rainfall", "Irrigation", "Flooding", "Drainage"],
            ans: "Irrigation",
            topic: "Cultural Practices"
        },
        {
            q: "Continuous cropping on the same piece of land without rest is likely to lead to:",
            options: ["Soil enrichment", "Soil exhaustion and nutrient depletion", "Increased pest resistance", "Higher profits forever"],
            ans: "Soil exhaustion and nutrient depletion",
            topic: "Cultural Practices"
        },
        {
            q: "Mixed cropping is defined as:",
            options: ["Growing only one crop", "Growing two or more crops simultaneously on the same land", "Mixing seeds with fertilizer", "Planting in different seasons"],
            ans: "Growing two or more crops simultaneously on the same land",
            topic: "Cultural Practices"
        },
        {
            q: "Which operation is performed to prevent soil erosion and provide support to root crops?",
            options: ["Mounding or Ridging", "Weeding", "Thinning", "Pruning"],
            ans: "Mounding or Ridging",
            topic: "Cultural Practices"
        },
        {
            q: "Pest control through the use of chemicals is known as:",
            options: ["Biological control", "Cultural control", "Chemical control", "Physical control"],
            ans: "Chemical control",
            topic: "Cultural Practices"
        },

        // --- TOPIC 2: AQUACULTURE (15 Questions) ---
        {
            q: "Aquaculture is defined as the farming of:",
            options: ["Land animals", "Aquatic organisms including fish and mollusks", "Bees for honey", "Birds for meat"],
            ans: "Aquatic organisms including fish and mollusks",
            topic: "Aquaculture"
        },
        {
            q: "Which of the following is the most popular fish species farmed in Nigeria?",
            options: ["Shark", "Catfish (Clarias/Heterobranchus)", "Salmon", "Tuna"],
            ans: "Catfish (Clarias/Heterobranchus)",
            topic: "Aquaculture"
        },
        {
            q: "The process of releasing young fish into a pond is called:",
            options: ["Harvesting", "Stocking", "Spawning", "Culling"],
            ans: "Stocking",
            topic: "Aquaculture"
        },
        {
            q: "Young fish used for stocking a pond are commonly called:",
            options: ["Chicks", "Fingerlings", "Calves", "Seedlings"],
            ans: "Fingerlings",
            topic: "Aquaculture"
        },
        {
            q: "Which aquaculture system uses flowing water to provide oxygen and remove waste?",
            options: ["Stagnant ponds", "Raceways", "Earthen ponds", "Concrete tanks"],
            ans: "Raceways",
            topic: "Aquaculture"
        },
        {
            q: "What is 'Monoculture' in fish farming?",
            options: ["Raising only one species of fish in a pond", "Raising fish and crops together", "Raising many fish species together", "Using only one type of feed"],
            ans: "Raising only one species of fish in a pond",
            topic: "Aquaculture"
        },
        {
            q: "The practice of raising fish along with crops or other livestock is called:",
            options: ["Integrated Aquaculture", "Monoculture", "Extensive system", "Caged culture"],
            ans: "Integrated Aquaculture",
            topic: "Aquaculture"
        },
        {
            q: "Which water quality parameter is most critical for fish survival?",
            options: ["Color of water", "Dissolved Oxygen", "Depth of the pond", "Number of stones in the pond"],
            ans: "Dissolved Oxygen",
            topic: "Aquaculture"
        },
        {
            q: "What is the primary purpose of 'Liming' a fish pond?",
            options: ["To make the water white", "To regulate pH and improve soil/water quality", "To kill the fish", "To increase water temperature"],
            ans: "To regulate pH and improve soil/water quality",
            topic: "Aquaculture"
        },
        {
            q: "Fertilizing a pond helps to promote the growth of:",
            options: ["Large trees", "Plankton (natural fish food)", "Harmful bacteria", "Water lilies"],
            ans: "Plankton (natural fish food)",
            topic: "Aquaculture"
        },
        {
            q: "A concrete tank is an example of an ________ aquaculture system.",
            options: ["Extensive", "Intensive", "Natural", "Open water"],
            ans: "Intensive",
            topic: "Aquaculture"
        },
        {
            q: "Which of these is a common method of fish preservation in Nigeria?",
            options: ["Smoking", "Boiling", "Deep frying", "Wrapping in leaves"],
            ans: "Smoking",
            topic: "Aquaculture"
        },
        {
            q: "The term 'Fry' refers to:",
            options: ["Cooking fish", "Very young fish just after hatching", "Large adult fish", "Dead fish"],
            ans: "Very young fish just after hatching",
            topic: "Aquaculture"
        },
        {
            q: "What is 'Polyculture'?",
            options: ["Raising many types of fish in different ponds", "Raising two or more different fish species in the same pond", "Using many colors of feed", "Farming fish in the sea"],
            ans: "Raising two or more different fish species in the same pond",
            topic: "Aquaculture"
        },
        {
            q: "Overfeeding fish in a pond can lead to:",
            options: ["Faster growth only", "Water pollution and oxygen depletion", "Clearer water", "Higher water levels"],
            ans: "Water pollution and oxygen depletion",
            topic: "Aquaculture"
        },

        // --- TOPIC 3: LIVESTOCK PRODUCTION AND MANAGEMENT (15 Questions) ---
        {
            q: "Which of the following is a 'Monogastric' animal?",
            options: ["Cattle", "Pig", "Sheep", "Goat"],
            ans: "Pig",
            topic: "Livestock Management"
        },
        {
            q: "Ruminant animals are characterized by having:",
            options: ["One stomach compartment", "Four stomach compartments", "No stomach", "Two hearts"],
            ans: "Four stomach compartments",
            topic: "Livestock Management"
        },
        {
            q: "The first milk produced by a mother animal after birth, rich in antibodies, is called:",
            options: ["Cream", "Colostrum", "Skimmed milk", "Yogurt"],
            ans: "Colostrum",
            topic: "Livestock Management"
        },
        {
            q: "What is the primary reason for 'Dehorning' cattle?",
            options: ["To make them look pretty", "To prevent injuries to other animals and handlers", "To increase milk production", "To make them grow faster"],
            ans: "To prevent injuries to other animals and handlers",
            topic: "Livestock Management"
        },
        {
            q: "The removal of the testes of a male animal to prevent breeding and improve meat quality is called:",
            options: ["Vaccination", "Castration", "Culling", "Docking"],
            ans: "Castration",
            topic: "Livestock Management"
        },
        {
            q: "A 'Broiler' is a type of chicken raised specifically for:",
            options: ["Egg production", "Meat production", "Feather production", "Racing"],
            ans: "Meat production",
            topic: "Livestock Management"
        },
        {
            q: "What is 'Culling' in livestock management?",
            options: ["Feeding animals", "Removing unproductive or diseased animals from the herd", "Painting the animals", "Taking animals to the market"],
            ans: "Removing unproductive or diseased animals from the herd",
            topic: "Livestock Management"
        },
        {
            q: "Which system of livestock management involves animals roaming freely for food?",
            options: ["Intensive system", "Extensive (Pastoral) system", "Semi-intensive system", "Battery cage system"],
            ans: "Extensive (Pastoral) system",
            topic: "Livestock Management"
        },
        {
            q: "The period from conception to birth in animals is known as:",
            options: ["Lactation", "Gestation", "Puberty", "Incubation"],
            ans: "Gestation",
            topic: "Livestock Management"
        },
        {
            q: "Vaccination is done to:",
            options: ["Treat an existing disease", "Prevent the occurrence of diseases", "Make the animal sleep", "Increase animal size"],
            ans: "Prevent the occurrence of diseases",
            topic: "Livestock Management"
        },
        {
            q: "The practice of cutting the tail of sheep or pigs is called:",
            options: ["Pruning", "Docking", "Thinning", "Castration"],
            ans: "Docking",
            topic: "Livestock Management"
        },
        {
            q: "Poultry 'Layers' are kept primarily for:",
            options: ["Meat", "Eggs", "Manure", "Shows"],
            ans: "Eggs",
            topic: "Livestock Management"
        },
        {
            q: "In livestock nutrition, 'Roughages' are feeds high in:",
            options: ["Protein", "Fiber", "Water", "Fat"],
            ans: "Fiber",
            topic: "Livestock Management"
        },
        {
            q: "What is the function of the 'Gizzard' in poultry?",
            options: ["To store food", "To grind food using swallowed grit", "To produce eggs", "To help the bird fly"],
            ans: "To grind food using swallowed grit",
            topic: "Livestock Management"
        },
        {
            q: "Artificial Insemination (AI) is used to:",
            options: ["Feed animals automatically", "Introduce superior genetic material without the physical presence of a male", "Wash the animals", "Identify animals"],
            ans: "Introduce superior genetic material without the physical presence of a male",
            topic: "Livestock Management"
        },

// --- TOPIC 1: HISTORICAL DEVELOPMENT OF AGRICULTURE (15 Questions) ---
        {
            q: "In the pre-colonial era, what was the primary objective of agricultural production?",
            options: ["Exportation to Europe", "Subsistence (feeding the family)", "Industrial raw material supply", "Large-scale commercialization"],
            ans: "Subsistence (feeding the family)",
            topic: "Historical Development"
        },
        {
            q: "Which of the following was a characteristic feature of pre-colonial agriculture in Nigeria?",
            options: ["Use of heavy machinery", "Shifting cultivation and bush fallowing", "Extensive use of chemical fertilizers", "Mono-cropping for export"],
            ans: "Shifting cultivation and bush fallowing",
            topic: "Historical Development"
        },
        {
            q: "The main tools used by pre-colonial Nigerian farmers included:",
            options: ["Tractors and Harvesters", "Hoes and Cutlasses", "Ploughs and Seeders", "Irrigation pumps"],
            ans: "Hoes and Cutlasses",
            topic: "Historical Development"
        },
        {
            q: "What was the major focus of the British colonial government regarding Nigerian agriculture?",
            options: ["Achieving food security for Nigerians", "Production of cash crops for British industries", "Developing local food processing plants", "Banning the use of traditional tools"],
            ans: "Production of cash crops for British industries",
            topic: "Historical Development"
        },
        {
            q: "The first formal Department of Agriculture in Nigeria was established in which year?",
            options: ["1890", "1910", "1960", "1945"],
            ans: "1910",
            topic: "Historical Development"
        },
        {
            q: "Moor Plantation, the first agricultural research station in Nigeria, is located in:",
            options: ["Zaria", "Ibadan", "Benin", "Enugu"],
            ans: "Ibadan",
            topic: "Historical Development"
        },
        {
            q: "Which colonial policy led to the creation of Marketing Boards?",
            options: ["Land Use Act", "Export crop stabilization", "Structural Adjustment Program", "Operation Feed the Nation"],
            ans: "Export crop stabilization",
            topic: "Historical Development"
        },
        {
            q: "The 'Operation Feed the Nation' (OFN) program was launched in 1976 by which administration?",
            options: ["Yakubu Gowon", "Olusegun Obasanjo", "Shehu Shagari", "Ibrahim Babangida"],
            ans: "Olusegun Obasanjo",
            topic: "Historical Development"
        },
        {
            q: "What was the primary goal of the 'Green Revolution' launched in 1980?",
            options: ["To promote forest conservation", "To attain self-sufficiency in food production", "To build rural roads", "To export more crude oil"],
            ans: "To attain self-sufficiency in food production",
            topic: "Historical Development"
        },
        {
            q: "The Agricultural Development Programmes (ADPs) were largely funded through a partnership between Nigeria and:",
            options: ["The IMF", "The World Bank", "UNESCO", "ECOWAS"],
            ans: "The World Bank",
            topic: "Historical Development"
        },
        {
            q: "Which agency was created in 1986 to focus on rural infrastructure like roads and water?",
            options: ["NALDA", "DFRRI (Directorate of Food, Roads and Rural Infrastructure)", "FADAMA", "River Basin Development Authority"],
            ans: "DFRRI (Directorate of Food, Roads and Rural Infrastructure)",
            topic: "Historical Development"
        },
        {
            q: "The 'Land Use Act' of 1978 was designed to:",
            options: ["Give land back to traditional rulers", "Vest ownership of all land in the State Government", "Sell all land to foreign investors", "Abolish farming in urban areas"],
            ans: "Vest ownership of all land in the State Government",
            topic: "Historical Development"
        },
        {
            q: "In the post-colonial era, the 'River Basin Development Authorities' (RBDAs) were primarily focused on:",
            options: ["Snail farming", "Irrigation and water resource management", "Road construction", "Primary education"],
            ans: "Irrigation and water resource management",
            topic: "Historical Development"
        },
        {
            q: "The National Agricultural Land Development Authority (NALDA) was established to address:",
            options: ["Pest control", "Chronic land under-utilization", "Fertilizer distribution", "Fish pond construction"],
            ans: "Chronic land under-utilization",
            topic: "Historical Development"
        },
        {
            q: "The shift from agriculture to petroleum as the main revenue source is often called:",
            options: ["The Green Revolution", "The Dutch Disease", "Economic Boom", "Industrialization"],
            ans: "The Dutch Disease",
            topic: "Historical Development"
        },

        // --- TOPIC 2: IMPORTANCE AND CHALLENGES (15 Questions) ---
        {
            q: "Which of the following is NOT listed as a primary role of agriculture in Nigeria's development?",
            options: ["Provision of food", "Source of foreign exchange", "Sole provider of electricity", "Employment generation"],
            ans: "Sole provider of electricity",
            topic: "Importance and Challenges"
        },
        {
            q: "Agricultural 'Raw Materials' are supplied to industries such as:",
            options: ["Textiles and Beverage plants", "Software companies", "Airlines", "Telecommunications"],
            ans: "Textiles and Beverage plants",
            topic: "Importance and Challenges"
        },
        {
            q: "Which is an 'Intangible' benefit of agriculture mentioned in the text?",
            options: ["Food items", "Foreign exchange", "Environmental beautification", "Raw materials"],
            ans: "Environmental beautification",
            topic: "Importance and Challenges"
        },
        {
            q: "What is a major challenge facing agricultural development in Nigeria?",
            options: ["Excessive mechanization", "Inadequate infrastructure and funding", "Lack of land", "Over-saturation of skilled labor"],
            ans: "Inadequate infrastructure and funding",
            topic: "Importance and Challenges"
        },
        {
            q: "The 'Land Tenure System' is a challenge because:",
            options: ["Land is too expensive", "Fragmentation makes mechanization difficult", "Land is all owned by the federal government", "Farmers are banned from owning land"],
            ans: "Fragmentation makes mechanization difficult",
            topic: "Importance and Challenges"
        },
        {
            q: "What is the effect of poor storage facilities on agricultural produce?",
            options: ["Higher crop yields", "High post-harvest losses", "Increased prices for farmers", "Better quality crops"],
            ans: "High post-harvest losses",
            topic: "Importance and Challenges"
        },
        {
            q: "Extension services are crucial because they:",
            options: ["Lend money to farmers", "Disseminate new techniques to small-scale farmers", "Buy crops from farmers", "Build roads in villages"],
            ans: "Disseminate new techniques to small-scale farmers",
            topic: "Importance and Challenges"
        },
        {
            q: "Most Nigerian farmers are 'smallholders', typically cultivating:",
            options: ["More than 100 hectares", "Less than 2-5 hectares", "Only in urban areas", "Without any tools"],
            ans: "Less than 2-5 hectares",
            topic: "Importance and Challenges"
        },
        {
            q: "Biological challenges to crop production include:",
            options: ["High interest rates", "Pests and diseases", "Lack of tractors", "Bad roads"],
            ans: "Pests and diseases",
            topic: "Importance and Challenges"
        },
        {
            q: "Market instability in agriculture refers to:",
            options: ["Fixed prices", "Fluctuating prices that discourage farmers", "Lack of physical markets", "Too many sellers"],
            ans: "Fluctuating prices that discourage farmers",
            topic: "Importance and Challenges"
        },
        {
            q: "How does agriculture provide foreign exchange?",
            options: ["By buying foreign seeds", "By exporting surplus crops like Cocoa and Oil Palm", "By traveling abroad", "By printing dollars"],
            ans: "By exporting surplus crops like Cocoa and Oil Palm",
            topic: "Importance and Challenges"
        },
        {
            q: "A social importance of agriculture in Nigeria is:",
            options: ["Increasing urban population", "Reducing rural-urban migration", "Promoting industrial strikes", "Encouraging deforestation"],
            ans: "Reducing rural-urban migration",
            topic: "Importance and Challenges"
        },
        {
            q: "Climate change affects Nigerian agriculture primarily through:",
            options: ["More internet usage", "Unpredictable rainfall and desertification", "Cheaper labor", "Higher demand for cocoa"],
            ans: "Unpredictable rainfall and desertification",
            topic: "Importance and Challenges"
        },
        {
            q: "Lack of modern implements and machinery is a constraint to:",
            options: ["Traditional farming", "Agricultural productivity", "Manual labor", "Small-scale hoeing"],
            ans: "Agricultural productivity",
            topic: "Importance and Challenges"
        },
        {
            q: "Inadequate credit facilities means farmers have difficulty:",
            options: ["Finding land", "Accessing loans for inputs", "Hiring manual labor", "Selling their harvest"],
            ans: "Accessing loans for inputs",
            topic: "Importance and Challenges"
        },

        // --- TOPIC 3: ECONOMIC OPPORTUNITIES (15 Questions) ---
        {
            q: "Snail farming is technically referred to as:",
            options: ["Pisciculture", "Heliculture", "Apiculture", "Floriculture"],
            ans: "Heliculture",
            topic: "Economic Opportunities"
        },
        {
            q: "Which of these is a 'Non-traditional' livestock with high economic potential?",
            options: ["Cattle", "Snail", "Goat", "Sheep"],
            ans: "Snail",
            topic: "Economic Opportunities"
        },
        {
            q: "Mushroom production is economically viable because it:",
            options: ["Requires heavy machinery", "Grows on agricultural wastes", "Takes years to harvest", "Needs vast amounts of land"],
            ans: "Grows on agricultural wastes",
            topic: "Economic Opportunities"
        },
        {
            q: "Rabbit farming (Rabbitry) is recommended due to:",
            options: ["Their large size", "Short gestation period and high prolificacy", "Their slow growth", "Low meat quality"],
            ans: "Short gestation period and high prolificacy",
            topic: "Economic Opportunities"
        },
        {
            q: "The primary species of fish farmed in Nigerian aquaculture are:",
            options: ["Sharks", "Catfish and Tilapia", "Salmon", "Tuna"],
            ans: "Catfish and Tilapia",
            topic: "Economic Opportunities"
        },
        {
            q: "Apiculture refers to the farming of:",
            options: ["Birds", "Bees", "Fish", "Rabbits"],
            ans: "Bees",
            topic: "Economic Opportunities"
        },
        {
            q: "Floriculture deals with the production of:",
            options: ["Flour", "Flowers and ornamental plants", "Forest trees", "Fruit juices"],
            ans: "Flowers and ornamental plants",
            topic: "Economic Opportunities"
        },
        {
            q: "Which crop is a major source of vegetable oil in Nigeria?",
            options: ["Wheat", "Oil Palm", "Cocoa", "Rubber"],
            ans: "Oil Palm",
            topic: "Economic Opportunities"
        },
        {
            q: "Pig production faces challenges in some Nigerian regions due to:",
            options: ["Lack of water", "Religious and cultural beliefs", "Pig infertility", "High cost of grass"],
            ans: "Religious and cultural beliefs",
            topic: "Economic Opportunities"
        },
        {
            q: "A 'Value-added' opportunity in Cassava production is:",
            options: ["Planting stems", "Processing into Garri or Flour", "Weeding", "Uprooting tubers"],
            ans: "Processing into Garri or Flour",
            topic: "Economic Opportunities"
        },
        {
            q: "Livestock 'hides and skins' are used in which industry?",
            options: ["Pharmaceutical", "Leather and Footwear", "Textile", "Electronics"],
            ans: "Leather and Footwear",
            topic: "Economic Opportunities"
        },
        {
            q: "Viticulture refers to the cultivation of:",
            options: ["Vegetables", "Grapes", "Vitamins", "Vinegar"],
            ans: "Grapes",
            topic: "Economic Opportunities"
        },
        {
            q: "Grasscutter (Greater Cane Rat) farming is popular because:",
            options: ["It produces milk", "Its meat is high in protein and low in cholesterol", "It acts as a pet", "It helps plow the soil"],
            ans: "Its meat is high in protein and low in cholesterol",
            topic: "Economic Opportunities"
        },
        {
            q: "Poultry production primarily involves:",
            options: ["Wool and hides", "Egg and broiler production", "Honey and wax", "Milk and cheese"],
            ans: "Egg and broiler production",
            topic: "Economic Opportunities"
        },
        {
            q: "Aquaculture is the farming of:",
            options: ["Bees", "Fish and aquatic organisms", "Snails", "Mushrooms"],
            ans: "Fish and aquatic organisms",
            topic: "Economic Opportunities"
        },

        // --- TOPIC 4: FORESTRY, WILDLIFE, AND FISHERIES (15 Questions) ---
        {
            q: "Deforestation is defined as:",
            options: ["Planting trees", "Removal of forest cover without replenishing it", "Selective harvesting", "Bush burning for grazing"],
            ans: "Removal of forest cover without replenishing it",
            topic: "Forestry and Environment"
        },
        {
            q: "Afforestation refers to:",
            options: ["Clearing land", "Establishing forest plantations on land not previously forested", "Natural regeneration", "Logging for timber"],
            ans: "Establishing forest plantations on land not previously forested",
            topic: "Forestry and Environment"
        },
        {
            q: "Which of these is a 'Non-Timber Forest Product' (NTFP)?",
            options: ["Sawn planks", "Snails and medicinal herbs", "Plywood", "Teak poles"],
            ans: "Snails and medicinal herbs",
            topic: "Forestry and Environment"
        },
        {
            q: "Tangible forest products include:",
            options: ["Climate regulation", "Timber and fuelwood", "Erosion control", "Fresh air"],
            ans: "Timber and fuelwood",
            topic: "Forestry and Environment"
        },
        {
            q: "Wildlife management involves:",
            options: ["Killing wild animals", "Balancing animal populations with their habitats", "Turning forests into zoos", "Exterminating predators"],
            ans: "Balancing animal populations with their habitats",
            topic: "Forestry and Environment"
        },
        {
            q: "A major threat to wildlife conservation in Nigeria is:",
            options: ["Too much funding", "Game poaching and bush burning", "Over-researching", "Strict law enforcement"],
            ans: "Game poaching and bush burning",
            topic: "Forestry and Environment"
        },
        {
            q: "Silviculture is the art and science of:",
            options: ["Silver mining", "Growing forest trees", "Raising silkworms", "Hunting"],
            ans: "Growing forest trees",
            topic: "Forestry and Environment"
        },
        {
            q: "A 'Forest Reserve' is an area:",
            options: ["Set for urban expansion", "Protected by law for permanent forest cover", "Where logging is unrestricted", "Used for waste disposal"],
            ans: "Protected by law for permanent forest cover",
            topic: "Forestry and Environment"
        },
        {
            q: "Intangible services from forests include:",
            options: ["Charcoal", "Watershed protection and erosion control", "Resins", "Poles"],
            ans: "Watershed protection and erosion control",
            topic: "Forestry and Environment"
        },
        {
            q: "The 'Great Green Wall' project aims to combat:",
            options: ["Flooding", "Desertification in the North", "Oil spills", "Urbanization"],
            ans: "Desertification in the North",
            topic: "Forestry and Environment"
        },
        {
            q: "Fisheries management involves regulating:",
            options: ["Fish prices only", "Fishing methods and seasons to ensure sustainability", "The color of boats", "The taste of fish"],
            ans: "Fishing methods and seasons to ensure sustainability",
            topic: "Forestry and Environment"
        },
        {
            q: "Overfishing leads to:",
            options: ["Better water quality", "Depletion of fish stocks", "Faster fish growth", "More income for all"],
            ans: "Depletion of fish stocks",
            topic: "Forestry and Environment"
        },
        {
            q: "Sustainable forest management ensures:",
            options: ["Immediate profit only", "Future generations benefit from forest resources", "All trees are cut down", "Forests are replaced by farms"],
            ans: "Future generations benefit from forest resources",
            topic: "Forestry and Environment"
        },
        {
            q: "Which forest product is used as a major source of energy in rural Nigeria?",
            options: ["Coal", "Fuelwood (Firewood)", "Natural gas", "Electricity"],
            ans: "Fuelwood (Firewood)",
            topic: "Forestry and Environment"
        },
        {
            q: "Biodiversity refers to:",
            options: ["Planting one type of tree", "The variety of life forms in an environment", "Building roads in forests", "Clearing land for cattle"],
            ans: "The variety of life forms in an environment",
            topic: "Forestry and Environment"
        },

        // --- TOPIC 5: RURAL DEVELOPMENT AND POVERTY (15 Questions) ---
        {
            q: "Rural Development is defined as:",
            options: ["Urbanizing villages", "Improving the quality of life in rural areas", "Moving villagers to cities", "Increasing taxes in villages"],
            ans: "Improving the quality of life in rural areas",
            topic: "Rural Development"
        },
        {
            q: "A key indicator of rural development is:",
            options: ["Number of cars", "Access to clean water and health services", "Number of skyscrapers", "Stock market indices"],
            ans: "Access to clean water and health services",
            topic: "Rural Development"
        },
        {
            q: "The 'Urban-bias' theory states that:",
            options: ["Rural areas get more funding", "Policies often favor cities over rural areas", "Villagers hate the city", "Farmers are richer than bankers"],
            ans: "Policies often favor cities over rural areas",
            topic: "Rural Development"
        },
        {
            q: "Rural poverty is often caused by:",
            options: ["Too much rain", "Lack of infrastructure and modern inputs", "Lack of wild animals", "Too much land"],
            ans: "Lack of infrastructure and modern inputs",
            topic: "Rural Development"
        },
        {
            q: "The 'Bottom-up' approach to development is effective because:",
            options: ["It is faster", "It involves the community in decision making", "It requires no money", "Government officials do everything"],
            ans: "It involves the community in decision making",
            topic: "Rural Development"
        },
        {
            q: "Rural-Urban migration is primarily driven by:",
            options: ["Orders from kings", "Search for social amenities and jobs", "Desire to start farming", "Too much village food"],
            ans: "Search for social amenities and jobs",
            topic: "Rural Development"
        },
        {
            q: "The primary occupation in Nigeria's rural areas is:",
            options: ["Banking", "Agriculture", "Mining", "Teaching"],
            ans: "Agriculture",
            topic: "Rural Development"
        },
        {
            q: "What is the role of Microfinance in rural areas?",
            options: ["Printing money", "Providing small loans for farmers and traders", "Building dams", "Stock market regulation"],
            ans: "Providing small loans for farmers and traders",
            topic: "Rural Development"
        },
        {
            q: "Cooperative societies help farmers by:",
            options: ["Taking their land", "Pooling resources for inputs and marketing", "Banning farming", "Building city walls"],
            ans: "Pooling resources for inputs and marketing",
            topic: "Rural Development"
        },
        {
            q: "Feeder roads are important for:",
            options: ["International travel", "Transporting farm produce to markets", "City racing", "Limiting village access"],
            ans: "Transporting farm produce to markets",
            topic: "Rural Development"
        },
        {
            q: "Literacy rates are often ________ in rural areas compared to urban areas.",
            options: ["Higher", "Lower", "Identical", "Irrelevant"],
            ans: "Lower",
            topic: "Rural Development"
        },
        {
            q: "Sustainable rural development must include:",
            options: ["Total deforestation", "Environmental conservation", "Exclusive use of chemicals", "Urbanizing all land"],
            ans: "Environmental conservation",
            topic: "Rural Development"
        },
        {
            q: "An example of a rural social amenity is:",
            options: ["A primary health center", "An international airport", "A five-star hotel", "A subway system"],
            ans: "A primary health center",
            topic: "Rural Development"
        },
        {
            q: "The 'Top-down' approach often fails because:",
            options: ["It ignores the actual needs of rural dwellers", "It is too expensive", "It is too participatory", "Villagers are too rich"],
            ans: "It ignores the actual needs of rural dwellers",
            topic: "Rural Development"
        },
        {
            q: "Modern Agriculture contributes to rural development by:",
            options: ["Reducing food supply", "Increasing income and food security", "Destroying soil", "Promoting migration"],
            ans: "Increasing income and food security",
            topic: "Rural Development"
        },

        // --- TOPIC 6: FARM MACHINERY AND MECHANIZATION (15 Questions) ---
        {
            q: "Which part of the tractor should be checked daily for coolant levels?",
            options: ["The Gearbox", "The Radiator", "The Differential", "The Fuel Tank"],
            ans: "The Radiator",
            topic: "Farm Machinery"
        },
        {
            q: "What is a 'Daily Check' for tractor tires?",
            options: ["Painting the rims", "Checking for correct inflation pressure", "Washing them with soap", "Removing the tires entirely"],
            ans: "Checking for correct inflation pressure",
            topic: "Farm Machinery"
        },
        {
            q: "The battery electrolyte level should be checked to ensure:",
            options: ["The battery is clean", "The battery can hold and provide charge", "The tractor is shiny", "The fuel is flowing"],
            ans: "The battery can hold and provide charge",
            topic: "Farm Machinery"
        },
        {
            q: "Greasing points on a machine should be attended to regularly to:",
            options: ["Increase fuel usage", "Reduce friction and wear between moving parts", "Make the tractor smell good", "Increase the tractor's weight"],
            ans: "Reduce friction and wear between moving parts",
            topic: "Farm Machinery"
        },
        {
            q: "Loose bolts, nuts, and pins should be tightened primarily to:",
            options: ["Increase speed", "Prevent mechanical failure and accidents", "Reduce the tractor's age", "Improve tire grip"],
            ans: "Prevent mechanical failure and accidents",
            topic: "Farm Machinery"
        },
        {
            q: "Mechanization refers to:",
            options: ["Hand-hoeing only", "The use of machines and implements to replace manual labor", "Banning tools", "Planting seeds by hand"],
            ans: "The use of machines and implements to replace manual labor",
            topic: "Farm Machinery"
        },
        {
            q: "A primary benefit of agricultural mechanization is:",
            options: ["Increased drudgery", "Increased efficiency and timeliness of farm operations", "Reduced yields", "Higher labor costs"],
            ans: "Increased efficiency and timeliness of farm operations",
            topic: "Farm Machinery"
        },
        {
            q: "Which of the following is a 'primary tillage' implement?",
            options: ["Harrow", "Mouldboard Plough", "Seed drill", "Cultivator"],
            ans: "Mouldboard Plough",
            topic: "Farm Machinery"
        },
        {
            q: "A 'Harrow' is typically used for:",
            options: ["Deep plowing", "Breaking soil clods and leveling the seedbed", "Harvesting maize", "Milking cows"],
            ans: "Breaking soil clods and leveling the seedbed",
            topic: "Farm Machinery"
        },
        {
            q: "Which of these is a constraint to mechanization in Nigeria?",
            options: ["Too many tractors", "High cost of purchase and maintenance", "Small farm sizes only", "Lack of fertile land"],
            ans: "High cost of purchase and maintenance",
            topic: "Farm Machinery"
        },
        {
            q: "The air cleaner of a tractor engine should be cleaned to:",
            options: ["Improve fuel color", "Prevent dust from damaging the engine cylinders", "Make the engine quieter", "Increase cabin cooling"],
            ans: "Prevent dust from damaging the engine cylinders",
            topic: "Farm Machinery"
        },
        {
            q: "Fuel levels should be checked before starting a tractor to avoid:",
            options: ["Losing the keys", "Air entering the fuel system (air-locking)", "Overheating the radiator", "Damaging the gearbox"],
            ans: "Air entering the fuel system (air-locking)",
            topic: "Farm Machinery"
        },
        {
            q: "An implement used for planting seeds in rows is called a:",
            options: ["Planter or Seed Drill", "Plough", "Ridger", "Harrow"],
            ans: "Planter or Seed Drill",
            topic: "Farm Machinery"
        },
        {
            q: "What is the purpose of a 'Ridger'?",
            options: ["Flattening the land", "Creating heaps or ridges for planting tubers", "Cutting grass", "Digging wells"],
            ans: "Creating heaps or ridges for planting tubers",
            topic: "Farm Machinery"
        },
        {
            q: "Proper storage of farm implements involves:",
            options: ["Leaving them in the rain", "Cleaning and applying anti-rust oil before storage", "Burying them in soil", "Using them daily"],
            ans: "Cleaning and applying anti-rust oil before storage",
            topic: "Farm Machinery"
        }, 
/* ============ AGRICULTURAL SYSTEMS (20) ============ */
    {
    q: "Agriculture can best be defined as:",
    options: ["The study of plants only", "The cultivation of crops and rearing of animals", "Trading of farm produce", "Soil management only"],
    ans: "The cultivation of crops and rearing of animals",
    topic: "Agricultural Systems"
    },
    {
    q: "Which of the following is an agricultural system?",
    options: ["Subsistence farming", "Mining", "Fishing only", "Manufacturing"],
    ans: "Subsistence farming",
    topic: "Agricultural Systems"
    },
    {
    q: "Subsistence farming is characterized by:",
    options: ["Large-scale production", "Production mainly for family use", "Export-oriented farming", "Use of heavy machinery"],
    ans: "Production mainly for family use",
    topic: "Agricultural Systems"
    },
    {
    q: "Commercial agriculture mainly aims at:",
    options: ["Family feeding", "Export and profit", "Cultural practice", "Soil conservation"],
    ans: "Export and profit",
    topic: "Agricultural Systems"
    },
    {
    q: "Mixed farming involves:",
    options: ["Only crops", "Only livestock", "Crop and livestock production", "Fishing and hunting"],
    ans: "Crop and livestock production",
    topic: "Agricultural Systems"
    },
    {
    q: "Which farming system involves moving from place to place?",
    options: ["Mixed farming", "Shifting cultivation", "Commercial farming", "Plantation farming"],
    ans: "Shifting cultivation",
    topic: "Agricultural Systems"
    },
    {
    q: "Mechanized farming is characterized by:",
    options: ["Manual labor only", "Use of machines", "Primitive tools", "Low capital"],
    ans: "Use of machines",
    topic: "Agricultural Systems"
    },
    {
    q: "Crop rotation helps to:",
    options: ["Reduce soil fertility", "Increase pest attack", "Maintain soil fertility", "Destroy crops"],
    ans: "Maintain soil fertility",
    topic: "Agricultural Systems"
    },
    {
    q: "Monocropping refers to:",
    options: ["Growing many crops", "Growing one crop repeatedly", "Mixed cropping", "Crop rotation"],
    ans: "Growing one crop repeatedly",
    topic: "Agricultural Systems"
    },
    {
    q: "Intercropping means:",
    options: ["Growing crops separately", "Growing two or more crops together", "Planting one crop yearly", "Harvesting early"],
    ans: "Growing two or more crops together",
    topic: "Agricultural Systems"
    },
    {
    q: "Bush fallowing helps soil by:",
    options: ["Increasing erosion", "Allowing soil to regain nutrients", "Reducing organic matter", "Destroying microbes"],
    ans: "Allowing soil to regain nutrients",
    topic: "Agricultural Systems"
    },
    {
    q: "Which farming system is common in rural Nigeria?",
    options: ["Subsistence farming", "Plantation farming", "Mechanized farming", "Hydroponics"],
    ans: "Subsistence farming",
    topic: "Agricultural Systems"
    },
    {
    q: "Large-scale farming usually requires:",
    options: ["Low capital", "High capital", "No labor", "Primitive tools"],
    ans: "High capital",
    topic: "Agricultural Systems"
    },
    {
    q: "Organic farming avoids the use of:",
    options: ["Manure", "Compost", "Synthetic chemicals", "Crop rotation"],
    ans: "Synthetic chemicals",
    topic: "Agricultural Systems"
    },
    {
    q: "Plantation farming mainly involves:",
    options: ["Food crops", "Tree crops", "Livestock", "Fishing"],
    ans: "Tree crops",
    topic: "Agricultural Systems"
    },
    {
    q: "Which crop is commonly grown on plantations?",
    options: ["Maize", "Cocoa", "Rice", "Beans"],
    ans: "Cocoa",
    topic: "Agricultural Systems"
    },
    {
    q: "The main advantage of mechanized farming is:",
    options: ["Low yield", "High labor cost", "Increased productivity", "Soil degradation"],
    ans: "Increased productivity",
    topic: "Agricultural Systems"
    },
    {
    q: "Which system uses scientific methods in farming?",
    options: ["Traditional farming", "Subsistence farming", "Modern farming", "Bush fallowing"],
    ans: "Modern farming",
    topic: "Agricultural Systems"
    },
    {
    q: "The major problem of subsistence farming is:",
    options: ["High yield", "Low productivity", "Over mechanization", "High profit"],
    ans: "Low productivity",
    topic: "Agricultural Systems"
    },
    {
    q: "Agricultural extension services help farmers by:",
    options: ["Tax collection", "Providing farming information", "Land seizure", "Selling crops"],
    ans: "Providing farming information",
    topic: "Agricultural Systems"
    },

/* ===============================
   PLANT PRODUCTION (10)
================================ */
{
  q: "Plant production deals with the cultivation of:",
  options: ["Animals", "Crops", "Fish", "Microorganisms"],
  ans: "Crops",
  topic: "Plant Production"
},
{
  q: "The process of growing plants for food and raw materials is called:",
  options: ["Harvesting", "Plant production", "Animal husbandry", "Processing"],
  ans: "Plant production",
  topic: "Plant Production"
},
{
  q: "Seeds are mainly used for:",
  options: ["Storage", "Reproduction", "Decoration", "Processing"],
  ans: "Reproduction",
  topic: "Plant Production"
},
{
  q: "Which of the following is a cereal crop?",
  options: ["Beans", "Rice", "Groundnut", "Cowpea"],
  ans: "Rice",
  topic: "Plant Production"
},
{
  q: "Leguminous plants help to:",
  options: ["Reduce soil fertility", "Fix nitrogen in soil", "Cause erosion", "Dry the soil"],
  ans: "Fix nitrogen in soil",
  topic: "Plant Production"
},
{
  q: "Planting crops at the right time is important to:",
  options: ["Waste seeds", "Increase pests", "Ensure good yield", "Reduce growth"],
  ans: "Ensure good yield",
  topic: "Plant Production"
},
{
  q: "Which of these is a cash crop?",
  options: ["Yam", "Cassava", "Cocoa", "Maize"],
  ans: "Cocoa",
  topic: "Plant Production"
},
{
  q: "Weeding is done to:",
  options: ["Increase pests", "Remove unwanted plants", "Harvest crops", "Dry the soil"],
  ans: "Remove unwanted plants",
  topic: "Plant Production"
},
{
  q: "Harvesting is best done when crops are:",
  options: ["Immature", "Over-ripe", "Mature", "Dry seeds only"],
  ans: "Mature",
  topic: "Plant Production"
},
{
  q: "Which factor affects plant growth?",
  options: ["Soil", "Water", "Sunlight", "All of the above"],
  ans: "All of the above",
  topic: "Plant Production"
},

/* ===============================
   SOIL SCIENCE (10)
================================ */
{
  q: "Soil is formed mainly from:",
  options: ["Plants", "Rocks", "Animals", "Water"],
  ans: "Rocks",
  topic: "Soil Science"
},
{
  q: "The topmost layer of soil is called:",
  options: ["Subsoil", "Parent rock", "Topsoil", "Bedrock"],
  ans: "Topsoil",
  topic: "Soil Science"
},
{
  q: "Which soil type has the highest water retention?",
  options: ["Sandy soil", "Clay soil", "Loamy soil", "Gravel"],
  ans: "Clay soil",
  topic: "Soil Science"
},
{
  q: "Loamy soil is best for farming because it:",
  options: ["Is too dry", "Is too wet", "Has balanced nutrients", "Contains stones"],
  ans: "Has balanced nutrients",
  topic: "Soil Science"
},
{
  q: "Soil fertility refers to the soil's ability to:",
  options: ["Hold stones", "Support plant growth", "Cause erosion", "Dry quickly"],
  ans: "Support plant growth",
  topic: "Soil Science"
},
{
  q: "Which of these improves soil fertility?",
  options: ["Deforestation", "Erosion", "Manuring", "Overgrazing"],
  ans: "Manuring",
  topic: "Soil Science"
},
{
  q: "Soil erosion is caused by:",
  options: ["Wind and water", "Fertilizer", "Seeds", "Manure"],
  ans: "Wind and water",
  topic: "Soil Science"
},
{
  q: "Which farming practice prevents soil erosion?",
  options: ["Bush burning", "Overgrazing", "Contour ploughing", "Deforestation"],
  ans: "Contour ploughing",
  topic: "Soil Science"
},
{
  q: "Humus in soil comes from:",
  options: ["Dead plants and animals", "Rocks", "Water", "Sand"],
  ans: "Dead plants and animals",
  topic: "Soil Science"
},
{
  q: "Soil pH affects:",
  options: ["Seed colour", "Nutrient availability", "Rainfall", "Crop height only"],
  ans: "Nutrient availability",
  topic: "Soil Science"
},

/* ===============================
   CROP PRODUCTION (10)
================================ */
{
  q: "Crop production focuses on:",
  options: ["Animal care", "Growing crops", "Fish farming", "Food processing"],
  ans: "Growing crops",
  topic: "Crop Production"
},
{
  q: "Which of these is a root crop?",
  options: ["Rice", "Maize", "Cassava", "Wheat"],
  ans: "Cassava",
  topic: "Crop Production"
},
{
  q: "Crop rotation helps to:",
  options: ["Reduce yield", "Improve soil fertility", "Increase pests", "Destroy soil"],
  ans: "Improve soil fertility",
  topic: "Crop Production"
},
{
  q: "Monocropping means growing:",
  options: ["Many crops", "One crop type", "Animals only", "Trees only"],
  ans: "One crop type",
  topic: "Crop Production"
},
{
  q: "Which is an example of a tuber crop?",
  options: ["Yam", "Rice", "Millet", "Sorghum"],
  ans: "Yam",
  topic: "Crop Production"
},
{
  q: "Fertilizers are applied to:",
  options: ["Kill crops", "Add nutrients to soil", "Dry plants", "Increase erosion"],
  ans: "Add nutrients to soil",
  topic: "Crop Production"
},
{
  q: "Irrigation is the supply of:",
  options: ["Air", "Fertilizer", "Water", "Seeds"],
  ans: "Water",
  topic: "Crop Production"
},
{
  q: "Which crop is mainly grown for oil?",
  options: ["Groundnut", "Maize", "Rice", "Cassava"],
  ans: "Groundnut",
  topic: "Crop Production"
},
{
  q: "Harvest index relates to:",
  options: ["Yield efficiency", "Soil type", "Seed colour", "Rainfall"],
  ans: "Yield efficiency",
  topic: "Crop Production"
},
{
  q: "Poor crop yield may result from:",
  options: ["Good soil", "Adequate rainfall", "Pests and diseases", "Proper spacing"],
  ans: "Pests and diseases",
  topic: "Crop Production"
},

/* ===============================
   ANIMAL HUSBANDRY (10)
================================ */
{
  q: "Animal husbandry deals with:",
  options: ["Crop cultivation", "Animal care and management", "Soil study", "Fishing"],
  ans: "Animal care and management",
  topic: "Animal Husbandry"
},
{
  q: "Which of these is a farm animal?",
  options: ["Lion", "Goat", "Elephant", "Tiger"],
  ans: "Goat",
  topic: "Animal Husbandry"
},
{
  q: "Livestock provide all EXCEPT:",
  options: ["Meat", "Milk", "Wool", "Fertilizer"],
  ans: "Fertilizer",
  topic: "Animal Husbandry"
},
{
  q: "Animal feeding is important to:",
  options: ["Reduce growth", "Maintain health", "Cause diseases", "Kill animals"],
  ans: "Maintain health",
  topic: "Animal Husbandry"
},
{
  q: "Which animal is mainly reared for milk?",
  options: ["Sheep", "Cow", "Goat", "Pig"],
  ans: "Cow",
  topic: "Animal Husbandry"
},
{
  q: "Housing animals properly helps to:",
  options: ["Expose them to rain", "Prevent diseases", "Reduce comfort", "Cause stress"],
  ans: "Prevent diseases",
  topic: "Animal Husbandry"
},
{
  q: "Poultry farming involves rearing:",
  options: ["Goats", "Cattle", "Chickens", "Sheep"],
  ans: "Chickens",
  topic: "Animal Husbandry"
},
{
  q: "Which disease affects livestock?",
  options: ["Malaria", "Foot and mouth disease", "Cholera", "Typhoid"],
  ans: "Foot and mouth disease",
  topic: "Animal Husbandry"
},
{
  q: "Veterinary services help to:",
  options: ["Treat animal diseases", "Harvest crops", "Improve soil", "Control erosion"],
  ans: "Treat animal diseases",
  topic: "Animal Husbandry"
},
{
  q: "Proper animal management increases:",
  options: ["Mortality rate", "Productivity", "Diseases", "Losses"],
  ans: "Productivity",
  topic: "Animal Husbandry"
}
     // ... (Add 10 questions per AGR101 topic) ...
]
};



    /* --- II. GLOBAL VARIABLES --- */
    let quizData = []; 
    let userAnswers = [];
    let currentQuestionIndex = 0;
    let currentMode;
    let selectedSubject;
    let totalQuestionsCount;

    let timerInterval; 
    let startTime; 
    let totalTime; 
    let timeLeft;

    /* --- III. HELPER FUNCTIONS --- */
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    // Fisher-Yates Shuffle Algorithm to randomize questions
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /* --- IV. DATA LOADING AND INITIALIZATION --- */
    function loadData() {
        const requestedTopic = getQueryParameter('topics'); 
        const requestedCount = parseInt(getQueryParameter('count'));

        let allSubjectQuestions = CBT_DATA[selectedSubject] || [];
        let filteredQuestions = [];

        if (currentMode === 'practice') {
            // In practice mode, filter by specific topic
            filteredQuestions = allSubjectQuestions.filter(q => q.topic === requestedTopic);
        } else if (currentMode === 'exam') {
            // In exam mode, use ALL questions from the subject
            filteredQuestions = [...allSubjectQuestions]; 
        }
        
        // Randomize the questions
        shuffleArray(filteredQuestions);
        
        // Select the requested number of questions
        quizData = filteredQuestions.slice(0, requestedCount);
        
        totalQuestionsCount = quizData.length;
        userAnswers = Array(totalQuestionsCount).fill(null);

        if (totalQuestionsCount === 0) {
            alert(`Error: No questions found for ${selectedSubject}. Returning home.`);
            window.location.href = 'home.html';
        }
    }

    function initializeTest() {
        selectedSubject = getQueryParameter('subject');
        currentMode = getQueryParameter('mode');

        if (!selectedSubject || !currentMode) {
            alert("Configuration Error. Please select subject and mode first.");
            window.location.href = 'home.html';
            return;
        }
        
        document.getElementById('subjectTitle').textContent = selectedSubject;
        
        loadData();
        
        // Timer Setup
        let requestedTime = parseInt(getQueryParameter('time'));

        // Start timer ONLY if a valid time is requested (e.g., > 0 minutes)
        if (!isNaN(requestedTime) && requestedTime > 0) {
            totalTime = requestedTime * 60; // Convert minutes to seconds
            timeLeft = totalTime;
            startTime = Date.now();

            // SHOW TIMER BOXES
            document.getElementById('timerBox').style.display = 'block';
            document.getElementById('mobileTimerBox').style.display = 'flex';

            updateTimerDisplay(); // Initial display
            startTimer();
        } else {
            // HIDE TIMER BOXES if time is 0 or invalid
            document.getElementById('timerBox').style.display = 'none';
            document.getElementById('mobileTimerBox').style.display = 'none';
            startTime = Date.now();
        }

        // Event Listeners
        document.getElementById('prevBtn').addEventListener('click', () => navigateQuestion(-1));
        document.getElementById('nextBtn').addEventListener('click', () => navigateQuestion(1));
        
        renderQuestion();
        renderQuestionNavigator();
        updateProgressBar();
    }

    /* --- V. TEST FLOW AND RENDERING --- */
    function renderQuestion() {
        if (quizData.length === 0) return;

        const qData = quizData[currentQuestionIndex];

        // Update Question Info
        document.getElementById('questionNumber').innerHTML = `Question ${currentQuestionIndex + 1} of ${totalQuestionsCount}`;
        document.getElementById('questionTopic').textContent = `Topic: ${qData.topic}`;
        document.getElementById('questionText').innerHTML = qData.q; 

        // Update Options
        const optionsList = document.getElementById('optionsList');
        optionsList.innerHTML = '';
        const currentAnswer = userAnswers[currentQuestionIndex];

        qData.options.forEach((option, index) => {
            const optionLetter = String.fromCharCode(65 + index);
            const listItem = document.createElement('li');
            listItem.className = 'option-item';
            
            const radioId = `q${currentQuestionIndex}-opt${index}`;
            const isChecked = option === currentAnswer;

            listItem.innerHTML = `
                <input type="radio" id="${radioId}" name="question-option" value="${option}" ${isChecked ? 'checked' : ''} />
                <label for="${radioId}" class="option-label">
                    (${optionLetter}) ${option}
                </label>
            `;
            optionsList.appendChild(listItem);
        });

        // Add event listeners to the new radio buttons
        optionsList.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', recordAnswer);
        });

        // Update Navigation Buttons
        document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
        document.getElementById('nextBtn').disabled = currentQuestionIndex === totalQuestionsCount - 1;

        renderQuestionNavigator();
    }
    
    function navigateQuestion(direction) {
        if (currentQuestionIndex + direction >= 0 && currentQuestionIndex + direction < totalQuestionsCount) {
            currentQuestionIndex += direction;
            renderQuestion();
        }
    }
function toggleCalculator() {
    const calc = document.getElementById('calculator');
    calc.style.display = calc.style.display === 'block' ? 'none' : 'block';
}

function calcInput(value) {
    document.getElementById('calcDisplay').value += value;
}
function squareRoot() {
    const display = document.getElementById('calcDisplay');
    if (display.value !== "") {
        display.value = Math.sqrt(display.value);
    }
}
function calculate() {
    try {
        document.getElementById('calcDisplay').value =
            eval(document.getElementById('calcDisplay').value);
    } catch {
        document.getElementById('calcDisplay').value = "Error";
    }
}
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function startDrag(e) {
    isDragging = true;

    const calc = document.getElementById("calculator");
    const event = e.touches ? e.touches[0] : e;

    offsetX = event.clientX - calc.offsetLeft;
    offsetY = event.clientY - calc.offsetTop;

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", stopDrag);
}

function drag(e) {
    if (!isDragging) return;

    const calc = document.getElementById("calculator");
    const event = e.touches ? e.touches[0] : e;

    calc.style.left = (event.clientX - offsetX) + "px";
    calc.style.top = (event.clientY - offsetY) + "px";
    calc.style.bottom = "auto";
    calc.style.right = "auto";
}

function stopDrag() {
    isDragging = false;

    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", stopDrag);
}
function clearCalc() {
    document.getElementById('calcDisplay').value = "";
}
    function recordAnswer(event) {
        const selectedOption = event.target.value;
        userAnswers[currentQuestionIndex] = selectedOption;
        updateProgressBar();
        renderQuestionNavigator(); 
    }

    function renderQuestionNavigator() {
        const navContainer = document.getElementById('navContainer');
        navContainer.innerHTML = ''; 

        quizData.forEach((q, index) => {
            const button = document.createElement('button');
            button.textContent = index + 1;
            button.className = 'nav-button';
            
            const answer = userAnswers[index];
            if (answer !== null) {
                button.classList.add('answered');
            } 
            if (index === currentQuestionIndex) {
                button.classList.add('current');
            }

            button.onclick = () => {
                currentQuestionIndex = index;
                renderQuestion();
            };
            navContainer.appendChild(button);
        });
    }

    /* --- VI. TIMER AND PROGRESS --- */
    function startTimer() {
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                updateTimerDisplay();
                alert("Time is up! The test will now be submitted.");
                submitTest();
                return;
            }

            timeLeft--;
            updateTimerDisplay();
        }, 1000);
    }

    function updateTimerDisplay() {
        // FIXED: Timer display now updates regardless of mode, as long as timer logic is active
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Update both the desktop sidebar timer and the mobile header timer
        document.getElementById('timerDisplay').textContent = displayTime;
        document.getElementById('timerDisplayMobile').textContent = displayTime;

        // Apply warning styles to both containers/text fields if time is low
        const timerBox = document.getElementById('timerBox');
        const mobileTimerBox = document.getElementById('mobileTimerBox');
        const isWarning = (timeLeft <= 300 && timeLeft > 0); // 5 minutes warning
        
        timerBox.classList.toggle('warning', isWarning);
        mobileTimerBox.classList.toggle('warning', isWarning);
        document.getElementById('timerDisplay').classList.toggle('warning-text', isWarning);
        document.getElementById('timerDisplayMobile').classList.toggle('warning-text', isWarning);
    }

    function updateProgressBar() {
        const answeredCount = userAnswers.filter(ans => ans !== null).length;
        
        document.getElementById('progressCount').textContent = `${answeredCount} / ${totalQuestionsCount}`;

        const percentage = (answeredCount / totalQuestionsCount) * 100;
        const progressBar = document.getElementById('progressBarInner');
        
        progressBar.style.width = `${percentage}%`;
        
        progressBar.classList.toggle('high-progress', percentage > 75);
    }

    /* --- VII. SUBMISSION LOGIC --- */
    function confirmSubmission() {
        const unanswered = userAnswers.filter(ans => ans === null).length;
        let confirmationMessage = "Are you sure you want to finish the test?";
        
        if (unanswered > 0) {
            confirmationMessage = `You have ${unanswered} unanswered questions. Submit anyway?`;
        }

        if (confirm(confirmationMessage)) {
            submitTest();
        }
    }

// REPLACE your current submitTest() with this:

/* --- VII. SUBMISSION LOGIC --- */

// NEW FUNCTION: Saves test summary data to the historical log
function saveToHistory(newResult) {
    // 1. Retrieve the existing history array, or initialize an empty array if none exists
    let history = JSON.parse(localStorage.getItem('cbtHistory')) || [];
    
    // 2. Add the new result (summary data for stats.html)
    history.push(newResult);
    
    // 3. Save the updated history array back to Local Storage
    localStorage.setItem('cbtHistory', JSON.stringify(history));
}

function confirmSubmission() {
    const unanswered = userAnswers.filter(ans => ans === null).length;
    let confirmationMessage = "Are you sure you want to finish the test?";
    
    if (unanswered > 0) {
        confirmationMessage = `You have ${unanswered} unanswered questions. Submit anyway?`;
    }

    if (confirm(confirmationMessage)) {
        submitTest();
    }
}

function submitTest() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    let score = 0;
    
    // Calculate final score
    quizData.forEach((qData, index) => {
        if (userAnswers[index] === qData.ans) {
            score++;
        }
    });
    
    const answeredCount = userAnswers.filter(ans => ans !== null).length;
    const unanswered = totalQuestionsCount - answeredCount;
    // Calculate incorrect based on answered questions minus correct score
    const incorrect = answeredCount - score; 
    
    const percentage = Math.round((score / totalQuestionsCount) * 100);

    // Calculate total duration
    const duration = Math.floor((Date.now() - startTime) / 1000); // Duration in seconds

    // --- 1. Historical Result Object (Summary Only for Stats Page) ---
    const historyResult = {
        date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        timestamp: Date.now(),
        subject: selectedSubject,
        mode: currentMode,
        score: score,
        totalQuestions: totalQuestionsCount,
        incorrect: incorrect,
        unanswered: unanswered,
        percentage: percentage,
        duration: duration,
        // Crucially, this is the light object saved to history
    };
    
    // --- 2. Save Results for Immediate Display (Detailed for results.html) ---
    const detailedResults = {
        ...historyResult, // Include all summary data
        questions: quizData, // Add question details for review
        userAnswers: userAnswers // Add user answers for review
    };

    localStorage.setItem('cbtResults', JSON.stringify(detailedResults));
    
// --- 3. Save Results to Historical Log (This is the fix) ---
    saveToHistory(historyResult);
    // --- 4. INCREMENT TRIAL COUNTER (IF NOT UNLOCKED) ---
    const isUnlocked = localStorage.getItem(`unlocked_${selectedSubject}`) === 'true';
    if (!isUnlocked) {
        const trialKey = `trials_${selectedSubject}`;
        const currentTrials = parseInt(localStorage.getItem(trialKey) || '0');
        const newTrials = currentTrials + 1;
        localStorage.setItem(trialKey, newTrials.toString());
        console.log(`[Trial Tracked] ${selectedSubject}: ${newTrials}/3 trials used`);
    }
    // Navigate to results page
    window.location.href = 'results.html';
}


document.addEventListener('DOMContentLoaded',
initializeTest);