angular.module('starter.services', [])

.factory('ones', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var ones = [{
    id: 0,
    code: "BIO 1311",
    course: "Introduction to Biology",
    duration: "12 weeks",
    effort: "7-14 Hours/Week",
    link: "https://www.edx.org/course/introduction-biology-secret-life-mitx-7-00x-4"
    }, {
    id: 1,
    code: "CHEM 1311",
    course: "Principles of Chemistry",
    duration: "15 Weeks",
    effort: "4-6 Hours/Week",
    link: "http://ocw.mit.edu/courses/chemistry/5-111-principles-of-chemical-science-fall-2008/"
    }, {
    id: 2,
    code: "COMP 1311a",
    course: "CS 1 - Python 1",
    duration: "5 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/interactive-python-1"
    }, {
    id: 3,
    code: "COMP 1311b",
    course: "CS 1 - Python 2",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/interactive-python-2"
    }, {
    id: 4,
    code: "COMP 1311c",
    course: "CS 1 - Principles of Computing 1",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/principles-of-computing-1"
    }, {
    id: 5,
    code: "COMP 1311d",
    course: "CS 1 - Principles of Computing 2",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/principles-of-computing-2"
    }, {
    id: 6,
    code: "MATH 1311",
    course: "Calculus 1",
    duration: "16 Weeks	",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/calculus1"
    }, {
    id: 7,
    code: "MATH 1312",
    course: "Mathematics for CS",
    duration: "13 Weeks",
    effort: "6 Hours/Week",
    link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/index.htm"
    }];

  return {
    all: function() {
      return ones;
    },
    remove: function(one) {
      ones.splice(ones.indexOf(one), 1);
    },
    get: function(oneId) {
      for (var i = 0; i < ones.length; i++) {
        if (ones[i].id === parseInt(oneId)) {
          return ones[i];
        }
      }
      return null;
    }
  };
})

.factory('twos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var twos = [{
    id: 0,
    code: "BIO 2311",
    course: "Biochemistry",
    duration: "15 Weeks",
    effort: "4-6 Hours/Week",
    link: "https://www.edx.org/course/principles-biochemistry-harvardx-mcb63x"
    }, {
    id: 1,
    code: "CHEM 2311",
    course: "Organic Chemistry",
    duration: "15 Weeks",
    effort: "4-6 Hours/Week",
    link: "https://ocw.mit.edu/courses/chemistry/5-12-organic-chemistry-i-spring-2005/"
    }, {
    id: 2,
    code: "COMP 2311",
    course: "CS 2 - Object Oriented Java",
    duration: "6 Weeks",
    effort: "4-6 Hours/Week",
    link: "https://www.coursera.org/learn/object-oriented-java"
    }, {
    id: 3,
    code: "MATH 2311",
    course: "Calculus 2",
    duration: "8 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/advanced-calculus"
    }, {
    id: 4,
    code: "COMP 2312",
    course: "Introduction to Databases",
    duration: "10 Weeks",
    effort: "8-12 Hours/Week",
    link: "https://lagunita.stanford.edu/courses/Engineering/db/2014_1/about"
    }, {
    id: 5,
    code: "MATH 2312",
    course: "Linear Algebra",
    duration: "15 Weeks",
    effort: "8 Hours/Week",
    link: "https://www.edx.org/course/linear-algebra-foundations-frontiers-utaustinx-ut-5-04x"
    }, {
    id: 6,
    code: "COMP 2313",
    course: "Introduction to Linux",
    duration: "8 Weeks",
    effort: "5-7 Hours/Week",
    link: "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-0"
    }, {
    id: 7,
    code: "MATH 2313",
    course: "Descriptive Statistics",
    duration: "5 Weeks",
    effort: "8 Hours/Week",
    link: "https://www.edx.org/course/introduction-statistics-descriptive-uc-berkeleyx-stat2-1x#!"
    }];

  return {
    all: function() {
      return twos;
    },
    remove: function(two) {
      twos.splice(twos.indexOf(two), 1);
    },
    get: function(twoId) {
      for (var i = 0; i < twos.length; i++) {
        if (twos[i].id === parseInt(twoId)) {
          return twos[i];
        }
      }
      return null;
    }
  };
})

.factory('threes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var threes = [{
    id: 0,
    code: "BIO 3311",
    course: "Genetics 1",
    duration: "7 Weeks",
    effort: "6-8 Hours/Week",
    link: "https://www.edx.org/course/useful-genetics-part-1-how-genes-shape-ubcx-usegen-1x-0"
    }, {
    id: 1,
    code: "COMP 3311a",
    course: "Algorithmic Thinking 1",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/algorithmic-thinking-1"
    }, {
    id: 2,
    code: "COMP 3311b",
    course: "Algorithmic Thinking 2",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/algorithmic-thinking-2"
    }, {
    id: 3,
    code: "MATH 3311",
    course: "Probability",
    duration: "5 Weeks",
    effort: "8 Hours/Week",
    link: "https://www.edx.org/course/introduction-statistics-probability-uc-berkeleyx-stat2-2x"
    }, {
    id: 4,
    code: "BIO 3312",
    course: "Cell Biology",
    duration: "- Weeks",
    effort: "- Hours/Week",
    link: "https://ocw.mit.edu/courses/biology/7-06-cell-biology-spring-2007/"
    }, {
    id: 5,
    code: "MATH 3312",
    course: "Differential Equations",
    duration: "7 Weeks",
    effort: "8-10 Hours/Week",
    link: "https://www.edx.org/course/introduction-differential-equations-bux-math226-1x-0"
    }, {
    id: 6,
    code: "BIO 3313a",
    course: "Biostatistics 1",
    duration: "4 Weeks",
    effort: "3-5 Hours/Week",
    link: "https://www.coursera.org/learn/biostatistics"
    }, {
    id: 7,
    code: "BIO 3313b",
    course: "Biostatistics 2",
    duration: "4 Weeks",
    effort: "3-5 Hours/Week",
    link: "https://www.coursera.org/learn/biostatistics-2"
    }];

  return {
    all: function() {
      return threes;
    },
    remove: function(three) {
      threes.splice(threes.indexOf(three), 1);
    },
    get: function(threeId) {
      for (var i = 0; i < threes.length; i++) {
        if (threes[i].id === parseInt(threeId)) {
          return threes[i];
        }
      }
      return null;
    }
  };
})

.factory('fours', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var fours = [{
    id: 0,
    code: "BIO 4311",
    course: "Genetics 2",
    duration: "5 Weeks",
    effort: "6-8 Hours/Week",
    link: "https://www.edx.org/course/useful-genetics-part-2-genes-genetic-ubcx-usegen-2x-0"
    }, {
    id: 1,
    code: "COMP 4311",
    course: "Data Science",
    duration: "13 Weeks",
    effort: "10 Hours/Week",
    link: "https://cs109.github.io/2015/"
    }, {
    id: 2,
    code: "MATH 4311",
    course: "Inferential Statistics",
    duration: "5 Weeks",
    effort: "8 Hours/Week",
    link: "https://www.edx.org/course/introduction-statistics-inference-uc-berkeleyx-stat2-3x"
    }, {
    id: 3,
    code: "BIO 4312a",
    course: "Molecular Biology 1",
    duration: "8 Weeks",
    effort: "4-8 Hours/Week",
    link: "https://www.edx.org/course/molecular-biology-part-1-dna-replication-mitx-7-28-1x1-0"
    }, {
    id: 4,
    code: "BIO 4312b",
    course: "Molecular Biology 2",
    duration: "6 Weeks",
    effort: "4-8 Hours/Week",
    link: "https://www.edx.org/course/molecular-biology-part-2-transcription-mitx-7-28-2x-0"
    }, {
    id: 5,
    code: "BIO 4312c",
    course: "Molecular Biology 3",
    duration: "4 Weeks",
    effort: "4-10 Hours/Week",
    link: "https://www.coursera.org/learn/dna-analysis"
    }, {
    id: 6,
    code: "COMP 4312a",
    course: "Bioinformatics 1",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/genome-sequencing"
    }, {
    id: 7,
    code: "COMP 4312b",
    course: "Bioinformatics 2",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/comparing-genomes"
    }, {
    id: 8,
    code: "COMP 4312c",
    course: "Bioinformatics 3",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/molecular-evolution"
    }, {
    id: 9,
    code: "COMP 4312d",
    course: "Bioinformatics 4",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/genomic-data"
    }, {
    id: 10,
    code: "COMP 4312e",
    course: "Bioinformatics 5",
    duration: "4 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/learn/dna-mutations"
    }, {
    id: 11,
    code: "COMP 4312f",
    course: "Bioinformatics 6",
    duration: "3 Weeks",
    effort: "3-4 Hours/Week",
    link: "https://www.coursera.org/learn/bioinformatics-project"
    }, {
    id: 12,
    code: "BIO 4313",
    course: "Evolution",
    duration: "11 Weeks",
    effort: "4-6 Hours/Week",
    link: "https://www.coursera.org/learn/genetics-evolution"
    }];

  return {
    all: function() {
      return fours;
    },
    remove: function(four) {
      fours.splice(fours.indexOf(four), 1);
    },
    get: function(fourId) {
      for (var i = 0; i < fours.length; i++) {
        if (fours[i].id === parseInt(fourId)) {
          return fours[i];
        }
      }
      return null;
    }
  };
})

.factory('exs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var exs = [{
    id: 0,
    code: "COMP 5311",
    course: "Introduction to Machine Learning",
    duration: "10 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.udacity.com/course/intro-to-machine-learning--ud120"
    }, {
    id: 1,
    code: "COMP 5312",
    course: "Deep Learning",
    duration: "8 Weeks",
    effort: "6 Hours/Week",
    link: "https://www.udacity.com/course/deep-learning--ud730"
    }, {
    id: 2,
    code: "Extension",
    course: "Genomic Data Science Specialization",
    duration: "32 Week",
    effort: "6 Hours/Week",
    link: "https://www.coursera.org/specializations/genomic-data-science"
    }];

  return {
    all: function() {
      return exs;
    },
    remove: function(ex) {
      exs.splice(exs.indexOf(ex), 1);
    },
    get: function(exId) {
      for (var i = 0; i < exs.length; i++) {
        if (exs[i].id === parseInt(exId)) {
          return exs[i];
        }
      }
      return null;
    }
  };
})
