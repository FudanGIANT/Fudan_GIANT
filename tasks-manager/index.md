---
layout: default
title: Task Manager
---

# Task Manager

<script>
    function checkPassword() {
        const password = document.getElementById("password").value;
        if (password === "200438") { // 替换为你的密码
            document.getElementById("protected-content").style.display = "block";
            document.getElementById("password-form").style.display = "none";
        } else {
            alert("Incorrect password!");
        }
    }
</script>

<div id="password-form">
    <h2>Enter Password</h2>
    <input type="password" id="password" placeholder="Enter password">
    <button onclick="checkPassword()">Submit</button>
</div>

<div id="protected-content" style="display: none;">
    欢迎来到任务管理系统！以下是当前任务状态：

    <div id="task-list">加载任务中...</div>

    <script src="assets/script.js"></script>
</div>