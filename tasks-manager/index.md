---
layout: default
title: Task Manager
---

# Task Manager

<p>This page is password-protected. Please enter the password below to access:</p>

<input type="password" id="password-input" placeholder="Enter password" />
<button onclick="verifyPassword()">Submit</button>

<div id="task-container" style="display: none;">
    <h2>Task List</h2>
    <div id="task-list">Loading tasks...</div>
</div>

<script src="assets/script.js"></script>
<script>
    const PASSWORD = "200438"; // Replace with your desired password

    function verifyPassword() {
        const input = document.getElementById("password-input").value;
        if (input === PASSWORD) {
            document.getElementById("task-container").style.display = "block";
            document.getElementById("password-input").style.display = "none";
        } else {
            alert("Incorrect password");
        }
    }
</script>