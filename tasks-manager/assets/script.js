const repoOwner = "FudanGIANT"; // 替换为你的 GitHub 用户名
const repoName = "Fudan_GIANT"; // 替换为你的仓库名称
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

async function fetchTasks() {
    try {
        const response = await fetch(apiUrl);
        const issues = await response.json();

        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";

        issues.forEach(issue => {
            const taskDiv = document.createElement("div");
            taskDiv.className = `task ${issue.state}`;

            const title = document.createElement("div");
            title.className = "task-title";
            title.textContent = issue.title;

            const labels = issue.labels.map(label => {
                const labelSpan = document.createElement("span");
                labelSpan.className = "task-label";
                labelSpan.textContent = label.name;
                labelSpan.style.backgroundColor = `#${label.color}`;
                return labelSpan;
            });

            const description = document.createElement("div");
            description.textContent = issue.body;

            taskDiv.appendChild(title);
            labels.forEach(label => taskDiv.appendChild(label));
            taskDiv.appendChild(description);

            taskList.appendChild(taskDiv);
        });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        document.getElementById("task-list").textContent =
            "无法加载任务，请稍后重试。";
    }
}

fetchTasks();