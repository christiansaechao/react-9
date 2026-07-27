# Debugging Your Code

## Verifications and Checks

- Do multiple checks within your functions. Any points of failure have a check / if statement, it'll help you debug your code. (make them unique to the function or what data you're trying to get. ie: if(!fails) console.log("This failed trying to get the user name"))
- Make sure you're passing your props/parameters to your components/functions
- Import what you're trying to use first, before you use it (library, component, function, etc...)
- Read the error messages (they usually give you hints as to what's causing the problems, on what file and on what line in your code)
- If there's no error messages. Slowly back track and comment out the last things you were working on until it's working again, and you should figure out where the error is.
- If you still can't figure it out by this point, reach out to a mentor
- If it's been longer than 20 minutes and the mentor hasn't responded, throw your code in chatgpt lol (last resort), but understand what the issue was and write the code. Don't copy and paste it.