use ('sigmaDatabase')

db.getCollection('course').insertMany([
  { "instructor": "Raghav", "name": "machine learning (llm)" },
  { "instructor": "Aarav", "name": "data science" },
  { "instructor": "Deepak", "name": "sql" },
  { "instructor": "Meera", "name": "python basics" },
  { "instructor": "Kiran", "name": "java advanced" },
  { "instructor": "Nikita", "name": "data visualization" },
  { "instructor": "Rohit", "name": "deep learning" },
  { "instructor": "Sneha", "name": "nlp fundamentals" },
  { "instructor": "Harsh", "name": "generative ai" },
  { "instructor": "Tanya", "name": "cloud computing" }
]);

console.log("Added all instances of documents")
