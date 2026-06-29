// ========== AI就业建议模块 ==========
// 使用智能规则系统，根据用户的专业和就业数据提供个性化建议
// 无需API密钥，可直接运行

const AIAdvisor = {
    // 专业建议模板库
    adviceTemplates: {
        // 计算机类
        "cs": {
            strength: ["编程能力强", "逻辑思维优秀", "技术更新快"],
            weakness: ["竞争激烈", "技术更新快需持续学习", "工作压力大"],
            suggestions: [
                "建议在校期间多参与开源项目，积累实战经验",
                "可以考虑考研深造，提升算法和理论基础",
                "关注AI、大数据等新兴技术方向",
                "建议考取相关技术认证（如软考、AWS认证等）"
            ],
            careerPath: ["后端开发", "前端开发", "全栈工程师", "技术管理", "架构师"],
            hotSkills: ["Python", "Java", "Go", "云计算", "微服务", "AI/ML"]
        },
        "se": {
            strength: ["就业率高", "薪资水平优秀", "需求稳定"],
            weakness: ["工作强度大", "需持续学习新技术"],
            suggestions: [
                "重视软件工程规范和团队协作能力",
                "可以往产品管理或技术管理方向发展",
                "建议关注DevOps和云原生技术"
            ],
            careerPath: ["软件工程师", "系统架构师", "产品经理", "技术总监"],
            hotSkills: ["敏捷开发", "Docker", "K8s", "微服务", "系统设"]
        },
        "ai": {
            strength: ["薪资最高", "前景广阔", "国家政策支持"],
            weakness: ["学历要求高", "技术门槛高", "竞争激烈"],
            suggestions: [
                "建议攻读研究生，AI领域对学历要求较高",
                "重视数学和算法基础",
                "参与AI竞赛（如Kaggle）提升实战能力",
                "关注大模型、计算机视觉、NLP等热门方向"
            ],
            careerPath: ["算法工程师", "机器学习工程师", "AI研究员", "数据科学家"],
            hotSkills: ["深度学习", "PyTorch", "TensorFlow", "大模型", "数据挖掘"]
        },
        // 新闻学
        "journalism": {
            strength: ["沟通能力强", "文字功底扎实", "适应能力强"],
            weakness: ["薪资相对较低", "传统媒体萎缩", "工作不稳定"],
            suggestions: [
                "建议培养全媒体技能（视频拍摄、数据分析、社交媒体运营）",
                "可以考虑往新媒体、自媒体方向发展",
                "重视实习经历，积累作品集",
                "可以考虑考研，提升理论水平和竞争力"
            ],
            careerPath: ["记者", "编辑", "新媒体运营", "公关专员", "内容策划"],
            hotSkills: ["视频剪辑", "数据分析", "社交媒体", "全媒体", "英语"]
        },
        // 通用模板（其他专业使用）
        "general": {
            strength: ["专业基础扎实"],
            weakness: ["需要提升实践能力"],
            suggestions: [
                "重视实习实践，积累工作经验",
                "关注行业动态，了解市场需求",
                "可以考虑考研提升学历竞争力",
                "培养跨学科能力，提升综合竞争力"
            ],
            careerPath: ["专业对口岗位", "跨行业发展", "自主创业"],
            hotSkills: ["专业技能", "沟通能力", "团队合作", "创新思维"]
        }
    },

    // 获取专业建议
    getAdvice(majorId, majorData) {
        const template = this.adviceTemplates[majorId] || this.adviceTemplates["general"];
        const rate = majorData.rate;
        const salary = majorData.salary;
        
        // 根据就业率和薪资生成个性化建议
        let personalizedSuggestions = [...template.suggestions];
        
        if (rate < 85) {
            personalizedSuggestions.unshift("⚠️ 该专业就业率相对较低，建议：1) 提升专业技能 2) 考虑跨专业就业 3) 考研深造");
        }
        
        if (salary < 8000) {
            personalizedSuggestions.unshift("💡 该专业起薪相对较低，建议：1) 积累经验后跳槽 2) 往高薪城市（北上深）发展 3) 创业或自由职业");
        }
        
        if (rate >= 90 && salary >= 10000) {
            personalizedSuggestions.unshift("🌟 该专业就业前景优秀！建议：1) 保持学习热情 2) 可以考虑冲击名校研究生 3) 关注行业内顶尖公司");
        }
        
        return {
            majorName: majorData.name,
            employmentRate: rate,
            avgSalary: salary,
            strength: template.strength,
            weakness: template.weakness,
            suggestions: personalizedSuggestions,
            careerPath: template.careerPath,
            hotSkills: template.hotSkills,
            overallRating: this.calculateRating(rate, salary)
        };
    },

    // 计算综合评分
    calculateRating(rate, salary) {
        const rateScore = rate / 100 * 50; // 就业率占50分
        const salaryScore = Math.min(salary / 20000 * 50, 50); // 薪资占50分（上限50分）
        const total = Math.round(rateScore + salaryScore);
        
        if (total >= 80) return { score: total, level: "优秀", color: "#27ae60" };
        if (total >= 60) return { score: total, level: "良好", color: "#2e86c1" };
        if (total >= 40) return { score: total, level: "一般", color: "#f39c12" };
        return { score: total, level: "待提升", color: "#e74c3c" };
    },

    // 生成完整的就业规划报告
    generateReport(majorId, year, universityId = null) {
        const majorData = this.getMajorData(majorId, year, universityId);
        if (!majorData) return null;
        
        const advice = this.getAdvice(majorId, majorData);
        
        // 生成HTML报告
        const reportHTML = `
            <div class="ai-report">
                <div class="report-header">
                    <h2>🤖 AI就业建议报告</h2>
                    <div class="report-meta">
                        <span>专业：${advice.majorName}</span>
                        <span>年份：${year}届</span>
                        ${universityId ? `<span>院校：${DATA.universities.find(u => u.id === universityId)?.name || ''}</span>` : ''}
                    </div>
                </div>

                <div class="report-overview">
                    <div class="rating-card" style="border-left: 4px solid ${advice.overallRating.color};">
                        <div class="rating-score">${advice.overallRating.score}</div>
                        <div class="rating-level">综合评分 · ${advice.overallRating.level}</div>
                    </div>
                    <div class="overview-stats">
                        <div class="stat-item">
                            <span class="stat-label">就业率</span>
                            <span class="stat-value">${advice.employmentRate}%</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">平均月薪</span>
                            <span class="stat-value">¥${advice.avgSalary.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div class="report-section">
                    <h3>✅ 专业优势</h3>
                    <ul>
                        ${advice.strength.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>

                <div class="report-section">
                    <h3>⚠️ 面临挑战</h3>
                    <ul>
                        ${advice.weakness.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>

                <div class="report-section">
                    <h3>💡 个性化建议</h3>
                    <ol>
                        ${advice.suggestions.map(s => `<li>${s}</li>`).join('')}
                    </ol>
                </div>

                <div class="report-section">
                    <h3>🚀 职业发展路径</h3>
                    <div class="career-path">
                        ${advice.careerPath.map((path, i) => `
                            <div class="path-node">
                                <div class="path-icon">${i + 1}</div>
                                <div class="path-text">${path}</div>
                            </div>
                            ${i < advice.careerPath.length - 1 ? '<div class="path-arrow">→</div>' : ''}
                        `).join('')}
                    </div>
                </div>

                <div class="report-section">
                    <h3>🔥 热门技能</h3>
                    <div class="hot-skills">
                        ${advice.hotSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="report-footer">
                    <p>📌 以上建议由AI根据历年就业数据智能生成，仅供参考。</p>
                    <p>💪 祝你前程似锦，未来可期！</p>
                </div>
            </div>
        `;
        
        return reportHTML;
    },

    // 获取专业数据
    getMajorData(majorId, year, universityId) {
        let data = null;
        
        // 优先使用院校数据
        if (universityId && DATA.univEmployment[universityId] && DATA.univEmployment[universityId][majorId]) {
            const univData = DATA.univEmployment[universityId][majorId];
            const major = DATA.majors.find(m => m.id === majorId);
            data = {
                name: major ? major.name : majorId,
                rate: univData.rate,
                salary: univData.salary
            };
        } else {
            // 使用总体数据
            const emp = DATA.employment[year];
            const item = emp ? emp.find(e => e.major === majorId) : null;
            if (item) {
                data = {
                    name: item.major,
                    rate: item.rate,
                    salary: item.salary
                };
            }
        }
        
        return data;
    }
};

// ========== AI建议弹窗功能 ==========
function showAISuggestion() {
    const majorId = document.getElementById('majorSelect').value;
    const year = document.getElementById('yearSelect').value;
    const universityId = document.getElementById('universitySelect').value;
    
    if (!majorId) {
        showToast('请先选择专业', 'warning');
        return;
    }
    
    // 显示加载动画
    showLoading();
    
    // 模拟AI思考（1-2秒）
    setTimeout(() => {
        const reportHTML = AIAdvisor.generateReport(majorId, year, universityId);
        
        if (!reportHTML) {
            hideLoading();
            showToast('生成建议失败，请重试', 'error');
            return;
        }
        
        // 创建模态框
        const modal = document.createElement('div');
        modal.id = 'aiModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
            animation: fadeIn 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                width: 90%;
                max-width: 800px;
                max-height: 90vh;
                overflow-y: auto;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                position: relative;
            ">
                <button onclick="document.getElementById('aiModal').remove()" style="
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    border: none;
                    background: #f0f0f0;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
                
                ${reportHTML}
            </div>
        `;
        
        document.body.appendChild(modal);
        hideLoading();
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // 添加CSS动画
        if (!document.getElementById('aiStyles')) {
            const style = document.createElement('style');
            style.id = 'aiStyles';
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .ai-report {
                    font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
                    line-height: 1.8;
                }
                
                .report-header {
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #e0e6ed;
                }
                
                .report-header h2 {
                    color: #1a5276;
                    margin-bottom: 10px;
                }
                
                .report-meta {
                    display: flex;
                    gap: 20px;
                    color: #7f8c8d;
                    font-size: 14px;
                }
                
                .report-overview {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: #f8fafc;
                    border-radius: 12px;
                }
                
                .rating-card {
                    padding: 20px;
                    background: white;
                    border-radius: 12px;
                    min-width: 150px;
                    text-align: center;
                }
                
                .rating-score {
                    font-size: 48px;
                    font-weight: 800;
                    color: #1a5276;
                }
                
                .rating-level {
                    font-size: 14px;
                    color: #7f8c8d;
                    margin-top: 5px;
                }
                
                .overview-stats {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 15px;
                }
                
                .stat-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                }
                
                .stat-label {
                    color: #7f8c8d;
                }
                
                .stat-value {
                    font-weight: 700;
                    color: #1a5276;
                    font-size: 18px;
                }
                
                .report-section {
                    margin-bottom: 25px;
                }
                
                .report-section h3 {
                    color: #1a5276;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
                
                .report-section ul, .report-section ol {
                    padding-left: 20px;
                }
                
                .report-section li {
                    margin-bottom: 10px;
                    color: #2c2c2c;
                }
                
                .career-path {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                    padding: 20px;
                    background: #f8fafc;
                    border-radius: 12px;
                }
                
                .path-node {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .path-icon {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #1a5276, #2e86c1);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                }
                
                .path-text {
                    font-weight: 600;
                    color: #1a5276;
                }
                
                .path-arrow {
                    font-size: 24px;
                    color: #7f8c8d;
                }
                
                .hot-skills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .skill-tag {
                    padding: 8px 16px;
                    background: linear-gradient(135deg, #e8f4fd, #d4e6f7);
                    color: #2e86c1;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                }
                
                .report-footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #e0e6ed;
                    text-align: center;
                    color: #7f8c8d;
                    font-size: 14px;
                }
                
                @media (max-width: 768px) {
                    .report-overview {
                        flex-direction: column;
                    }
                    
                    .career-path {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .path-arrow {
                        transform: rotate(90deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }, 1500); // 1.5秒延迟，模拟AI思考
}

// 导出给全局使用
window.AIAdvisor = AIAdvisor;
window.showAISuggestion = showAISuggestion;
