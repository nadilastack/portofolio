import React, { useState } from 'react';
import { Code, LineChart, Database, Wrench, Sparkles } from 'lucide-react';

export default function SkillsSection({ skillGroups, skills }) {
    const [activeTab, setActiveTab] = useState('all');

    const getGroupIcon = (id) => {
        switch (id) {
            case 'fullstack':
                return <Code className="w-5 h-5 text-indigo-500" />;
            case 'analysis':
                return <LineChart className="w-5 h-5 text-teal-500" />;
            case 'data':
                return <Database className="w-5 h-5 text-amber-500" />;
            case 'tools':
                return <Wrench className="w-5 h-5 text-purple-500" />;
            default:
                return null;
        }
    };

    const filteredGroups = activeTab === 'all'
        ? skillGroups
        : skillGroups.filter(g => g.id === activeTab);

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{skills.badge}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {skills.title}
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
                            {skills.subtitle}
                        </p>
                    </div>

                    {/* Filter Tabs dengan Counter Badge */}
                    <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 self-start md:self-auto">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                                activeTab === 'all'
                                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            <span>{skills.allTab}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300">
                                {skillGroups.reduce((acc, g) => acc + g.skills.length, 0)}
                            </span>
                        </button>
                        {skillGroups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => setActiveTab(group.id)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                                    activeTab === group.id
                                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                <span>{group.name}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300">
                                    {group.skills.length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredGroups.map((group) => (
                        <div
                            key={group.id}
                            className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                                    {getGroupIcon(group.id)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {group.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        {group.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {group.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={`group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                                            skill.highlight
                                                ? 'bg-indigo-50/50 dark:bg-indigo-950/30 text-slate-900 dark:text-slate-100 border-indigo-200/80 dark:border-indigo-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-2xs'
                                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                        }`}
                                    >
                                        {skill.highlight && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                                        )}
                                        <span className="font-semibold">{skill.name}</span>
                                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
