export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}

export function splitTech(tech) {
    let techArray = [];
  
    if (typeof tech === 'string') {
      let splitTech = tech.split(",");
  
      for (let i = 0; i < splitTech.length; i++) {
        techArray.push(splitTech[i].trim());
      }
    }
  
    return techArray;
  }
  
  
  export function typeColor(tech) {
    
    let techToLowerCase = tech.toLowerCase().toString()
  
    switch (techToLowerCase) {
      case "javascript":
        return "bg-yellow-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
      case "react":
        return "bg-blue-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
      case "next.js":
        return "bg-gray-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
      case "php":
        return "bg-purple-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
      case "java":
        return "bg-red-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
      default:
        return "";
    }
  }