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

function login(userName, password) {
    const registeredUsers = ["Alice", "Bob", "Charlie"];
    const correctPassword = "Emp@123";
    
    if (registeredUsers.includes(userName)) {
        if (password === correctPassword) {
            return "Login Successful...";
        } else {
            return "Wrong Password...";
        }
    } else {
        return "User Not Found, Please Signup";
    }
}

// Example usage:
console.log(login("Alice", "Emp@123")); // Login Successful...
console.log(login("David", "Emp@123")); // User Not Found, Please Signup
console.log(login("Bob", "wrongPassword")); // Wrong Password...

