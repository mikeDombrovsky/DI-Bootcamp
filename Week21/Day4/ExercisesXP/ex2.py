import json
import os
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

company = json.loads(sampleJson)

    
# Access the nested “salary” key from the JSON-string above.
print(company['company']['employee']['payable']['salary'])

# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
company['company']['employee']['birth_date'] = '2012-12-12'

print(company)
# Save the dictionary as JSON to a file. 
with open('company.json', 'w') as file_obj:
    json.dump(company, file_obj)
    
