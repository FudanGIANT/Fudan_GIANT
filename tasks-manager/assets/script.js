// 加载 tasks-manager/issues.json 数据并渲染任务列表
fetch("issues.json")
    .then((response) => response.json())
    .then((data) => {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = ""; // 清空

        data.forEach((task) => {
            const taskDiv = document.createElement("div");
            taskDiv.style = "margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9;";

            taskDiv.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.body || "No description provided"}</p>
                <p><strong>Created:</strong> ${task.created_at}</p>
                <p><strong>Last Updated:</strong> ${task.updated_at}</p>
                <p><strong>Latest Comment:</strong> ${task.latest_comment.body || "No comments"}</p>
                <a href="${task.html_url}" target="_blank">View on GitHub</a>
            `;

            taskList.appendChild(taskDiv);
        });
    })
    .catch((error) => {
        console.error("Error fetching tasks:", error);
        document.getElementById("task-list").innerText = "Failed to load tasks.";
    });