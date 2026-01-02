How to Run the Project
Install dependencies
npm install
Start the server
node index.js
OR (Developer mode with auto-reload)
npm run dev
Server runs at:
http://localhost:3000
API Endpoints
Get all students
GET /students
Get a single student by ID
GET /students/:id
Add a new student
POST /students
Example Body
json
{
  "id": 11,
  "name": "havya",
  "age": 20,
  "roll": "Ak011",
  "department": "MECH"
}
Update a single student
PUT /students/:id
Example Body:
{
  "name": "Updated Name",
  "department": "ECE"
}
Update multiple students (Bulk Update)
PUT /students
Example Body (Array):
[
  { "id": 1, "name": Natchitha" },
  { "id": 3, "department": "ECE" },
  { "id": 7, "roll": "HN007X" }
]
Delete a student
DELETE /students/:id
🔗 GitHub Repository Link
https://github.com/natchitha712/Student-management-app-

 
