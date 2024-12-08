function signup(userName) {
    const registeredUsers = ["Alice", "Bob", "Charlie"];
    
    if (registeredUsers.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        registeredUsers.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Example usage:
console.log(signup("Alice")); // User Already Registered, Please Login
console.log(signup("David")); // Signup Successful, Please Login
