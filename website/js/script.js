const roadmapData = [
            {
                id: 1,
                title: "Fundamentos",
                duration: "3-4 meses",
                description: "Lógica, Algoritmos e Estruturas de Dados",
                topics: [
                    { name: "Lógica de Programação e Algoritmos", duration: "4 semanas", details: "Variáveis, estruturas condicionais, loops, funções" },
                    { name: "Estruturas de Dados", duration: "4 semanas", details: "Arrays, listas, pilhas, filas, árvores, grafos" },
                    { name: "Algoritmos e Complexidade", duration: "3 semanas", details: "Big O, busca, ordenação, programação dinâmica" },
                    { name: "Git e Controle de Versão", duration: "1 semana", details: "Comandos básicos, branches, GitHub, GitFlow" }
                ]
            },
            {
                id: 2,
                title: "Desenvolvimento Frontend",
                duration: "2-3 meses",
                description: "HTML, CSS, JavaScript e React",
                topics: [
                    { name: "HTML5 e Semântica Web", duration: "2 semanas", details: "Tags semânticas, formulários, acessibilidade, SEO" },
                    { name: "CSS3 e Design Responsivo", duration: "3 semanas", details: "Flexbox, Grid, animações, Sass, Tailwind" },
                    { name: "JavaScript Moderno (ES6+)", duration: "4 semanas", details: "Arrow functions, promises, async/await, DOM" },
                    { name: "TypeScript", duration: "2 semanas", details: "Tipos, interfaces, generics, configuração" },
                    { name: "React 18+", duration: "5 semanas", details: "Hooks, Context API, Router, performance, Next.js" },
                    { name: "Frontend Tooling", duration: "1 semana", details: "Vite, Webpack, ESLint, Testing" }
                ]
            },
            {
                id: 3,
                title: "Desenvolvimento Backend",
                duration: "3-4 meses",
                description: "Node.js, APIs e Bancos de Dados",
                topics: [
                    { name: "Node.js e Fundamentos Backend", duration: "3 semanas", details: "Event loop, módulos nativos, npm" },
                    { name: "Express.js e APIs RESTful", duration: "4 semanas", details: "Rotas, middlewares, validação, CORS" },
                    { name: "Bancos de Dados Relacionais", duration: "4 semanas", details: "SQL, PostgreSQL, ORMs, normalização" },
                    { name: "Bancos de Dados NoSQL", duration: "2 semanas", details: "MongoDB, Redis, quando usar" },
                    { name: "Autenticação e Autorização", duration: "3 semanas", details: "JWT, OAuth, bcrypt, RBAC, 2FA" },
                    { name: "GraphQL", duration: "2 semanas", details: "Schema, queries, mutations, resolvers" },
                    { name: "Testes Backend", duration: "2 semanas", details: "Jest, testes unitários, integração, E2E" }
                ]
            },
            {
                id: 4,
                title: "DevOps e Infraestrutura",
                duration: "3-4 meses",
                description: "Docker, Kubernetes e Cloud",
                topics: [
                    { name: "Linux e Linha de Comando", duration: "3 semanas", details: "Comandos essenciais, shell scripting, SSH" },
                    { name: "Docker e Containerização", duration: "4 semanas", details: "Dockerfile, Docker Compose, volumes, networks" },
                    { name: "Kubernetes (K8s)", duration: "4 semanas", details: "Pods, deployments, services, Helm" },
                    { name: "CI/CD", duration: "4 semanas", details: "GitHub Actions, pipelines, deploy automatizado" },
                    { name: "Cloud Computing (AWS/Azure/GCP)", duration: "4 semanas", details: "EC2, S3, Lambda, RDS, VPC" },
                    { name: "Infrastructure as Code (IaC)", duration: "3 semanas", details: "Terraform, CloudFormation, modules" },
                    { name: "Monitoramento e Observabilidade", duration: "2 semanas", details: "Prometheus, Grafana, ELK, alerting" }
                ]
            },
            {
                id: 5,
                title: "Cibersegurança",
                duration: "3-4 meses",
                description: "Segurança em Aplicações e Infraestrutura",
                topics: [
                    { name: "Fundamentos de Segurança", duration: "3 semanas", details: "CIA Triad, OWASP Top 10, criptografia" },
                    { name: "Segurança em Aplicações Web", duration: "4 semanas", details: "SQL Injection, XSS, CSRF, security headers" },
                    { name: "Segurança em Infraestrutura", duration: "3 semanas", details: "Hardening, firewalls, VPN, secrets management" },
                    { name: "DevSecOps", duration: "3 semanas", details: "SAST, DAST, SCA, security gates" },
                    { name: "Testes de Penetração Básicos", duration: "3 semanas", details: "Metodologia pentest, Metasploit, HackTheBox" },
                    { name: "Incident Response", duration: "2 semanas", details: "Detecção, análise de logs, contenção" },
                    { name: "Compliance e Frameworks", duration: "1 semana", details: "LGPD, GDPR, ISO 27001, PCI-DSS" }
                ]
            },
            {
                id: 6,
                title: "Arquitetura e Padrões",
                duration: "2-3 meses",
                description: "Design Patterns e Sistemas Escaláveis",
                topics: [
                    { name: "Design Patterns", duration: "3 semanas", details: "Creational, Structural, Behavioral patterns" },
                    { name: "Arquitetura de Software", duration: "4 semanas", details: "Microservices, DDD, Clean Architecture, CQRS" },
                    { name: "Performance e Escalabilidade", duration: "2 semanas", details: "Profiling, caching, load balancing, sharding" },
                    { name: "Metodologias Ágeis", duration: "1 semana", details: "Scrum, Kanban, code review, pair programming" }
                ]
            },
            {
                id: 7,
                title: "Projetos Práticos e Portfólio",
                duration: "2-3 meses",
                description: "Aplicações Reais e Open Source",
                topics: [
                    { name: "Aplicação Full-Stack Completa", duration: "4 semanas", details: "Next.js + PostgreSQL + Auth + Deploy" },
                    { name: "Microservices com DevOps", duration: "4 semanas", details: "3+ serviços + K8s + CI/CD + Monitoring" },
                    { name: "DevSecOps Pipeline", duration: "2 semanas", details: "Pipeline com security gates e compliance" },
                    { name: "Contribuição Open Source", duration: "Contínuo", details: "3+ projetos, biblioteca própria, documentação" }
                ]
            }
        ];

        let progress = JSON.parse(localStorage.getItem('roadmapProgress')) || {};
        let currentFilter = 'all';

        function initializeProgress() {
            roadmapData.forEach(phase => {
                if (!progress[phase.id]) {
                    progress[phase.id] = {
                        topics: {},
                        startDate: null
                    };
                }
                phase.topics.forEach((topic, index) => {
                    if (progress[phase.id].topics[index] === undefined) {
                        progress[phase.id].topics[index] = false;
                    }
                });
            });
            saveProgress();
        }

        function saveProgress() {
            localStorage.setItem('roadmapProgress', JSON.stringify(progress));
            updateStats();
        }

        function renderPhases() {
            const container = document.getElementById('phasesContainer');
            container.innerHTML = '';

            roadmapData.forEach(phase => {
                const completedTopics = Object.values(progress[phase.id].topics).filter(v => v).length;
                const totalTopics = phase.topics.length;
                const phaseProgress = (completedTopics / totalTopics) * 100;

                let phaseStatus = 'not-started';
                if (completedTopics === totalTopics) phaseStatus = 'completed';
                else if (completedTopics > 0) phaseStatus = 'in-progress';

                if (currentFilter !== 'all' && currentFilter !== phaseStatus) return;

                const phaseEl = document.createElement('div');
                phaseEl.className = `phase ${phaseStatus}`;
                phaseEl.innerHTML = `
                    <div class="phase-header" onclick="togglePhase(${phase.id})">
                        <div class="phase-title">
                            <div class="phase-number">${phase.id}</div>
                            <div class="phase-info">
                                <h3>${phase.title}</h3>
                                <div class="phase-meta">
                                    <span>⏱️ ${phase.duration}</span>
                                    <span>📋 ${completedTopics}/${totalTopics} concluídos</span>
                                    <span>📊 ${phaseProgress.toFixed(0)}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="phase-toggle">▼</div>
                    </div>
                    <div class="phase-content">
                        <div class="topics-list">
                            ${phase.topics.map((topic, index) => {
                                const isCompleted = progress[phase.id].topics[index];
                                return `
                                    <div class="topic ${isCompleted ? 'completed' : ''}" data-topic="${topic.name.toLowerCase()}">
                                        <input type="checkbox" 
                                               class="topic-checkbox" 
                                               ${isCompleted ? 'checked' : ''}
                                               onchange="toggleTopic(${phase.id}, ${index})">
                                        <div class="topic-content">
                                            <div class="topic-name">${topic.name}</div>
                                            <div class="topic-details">${topic.details}</div>
                                        </div>
                                        <div class="topic-duration">${topic.duration}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
                container.appendChild(phaseEl);
            });
        }

        function togglePhase(phaseId) {
            const phases = document.querySelectorAll('.phase');
            phases.forEach(phase => {
                const phaseNumber = parseInt(phase.querySelector('.phase-number').textContent);
                if (phaseNumber === phaseId) {
                    phase.classList.toggle('open');
                }
            });
        }

        function toggleTopic(phaseId, topicIndex) {
            progress[phaseId].topics[topicIndex] = !progress[phaseId].topics[topicIndex];
            
            if (progress[phaseId].topics[topicIndex] && !progress[phaseId].startDate) {
                progress[phaseId].startDate = new Date().toISOString();
            }
            
            saveProgress();
            renderPhases();
        }

        function updateStats() {
            let totalTopics = 0;
            let completedTopics = 0;
            let completedPhases = 0;

            roadmapData.forEach(phase => {
                const phaseTopics = Object.values(progress[phase.id].topics);
                totalTopics += phaseTopics.length;
                const phaseCompleted = phaseTopics.filter(v => v).length;
                completedTopics += phaseCompleted;
                
                if (phaseCompleted === phaseTopics.length) {
                    completedPhases++;
                }
            });

            const totalProgress = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

            document.getElementById('totalProgress').textContent = totalProgress.toFixed(1) + '%';
            document.getElementById('completedTopics').textContent = `${completedTopics}/${totalTopics}`;
            document.getElementById('completedPhases').textContent = `${completedPhases}/7`;
            document.getElementById('progressBar').style.width = totalProgress + '%';
            document.getElementById('progressBar').textContent = totalProgress.toFixed(1) + '%';

            const startDates = Object.values(progress)
                .map(p => p.startDate)
                .filter(d => d)
                .map(d => new Date(d));
            
            if (startDates.length > 0) {
                const earliest = new Date(Math.min(...startDates));
                const monthsDiff = Math.floor((new Date() - earliest) / (1000 * 60 * 60 * 24 * 30));
                document.getElementById('timeInvested').textContent = `${monthsDiff} meses`;
            }
        }

        function exportProgress() {
            const dataStr = JSON.stringify(progress, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `roadmap-progress-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
        }

        function importProgress() {
            document.getElementById('importFile').click();
        }

        document.getElementById('importFile').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        progress = JSON.parse(event.target.result);
                        saveProgress();
                        renderPhases();
                        alert('✅ Progresso importado com sucesso!');
                    } catch (error) {
                        alert('❌ Erro ao importar arquivo. Verifique se é um arquivo JSON válido.');
                    }
                };
                reader.readAsText(file);
            }
        });

        function resetProgress() {
            document.getElementById('resetModal').classList.add('active');
        }

        function confirmReset() {
            progress = {};
            initializeProgress();
            renderPhases();
            closeModal();
            alert('✅ Progresso resetado com sucesso!');
        }

        function closeModal() {
            document.getElementById('resetModal').classList.remove('active');
        }

        document.getElementById('resetModal').addEventListener('click', (e) => {
            if (e.target.id === 'resetModal') {
                closeModal();
            }
        });

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                renderPhases();
            });
        });

        const searchBox = document.getElementById('searchBox');
        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const topics = document.querySelectorAll('.topic');
            
            topics.forEach(topic => {
                const topicName = topic.dataset.topic;
                if (topicName.includes(searchTerm)) {
                    topic.style.display = 'flex';
                } else {
                    topic.style.display = 'none';
                }
            });

            if (searchTerm === '') {
                topics.forEach(topic => topic.style.display = 'flex');
            }
        });

        initializeProgress();
        renderPhases();
        updateStats();

        setInterval(() => {
            const progressFill = document.getElementById('progressBar');
            progressFill.style.background = `linear-gradient(90deg, 
                hsl(${Math.random() * 60 + 140}, 70%, 50%), 
                hsl(${Math.random() * 60 + 200}, 70%, 50%))`;
        }, 5000);