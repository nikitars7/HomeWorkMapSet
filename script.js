function unique(arr) {
   const set = new Set(arr)
  const filteredArr = [...set]
  return filteredArr;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare,Krishna,:-O