import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

export default function Methodology() {
    const { t } = useLanguage();

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return Database;
            case 1: return Brain;
            case 2: return Rocket;
            default: return Database;
        }
    };

    const steps = (t('methodology.steps') as any) || [];

    return (
        <div className="section">
            <div className="shell">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="eyebrow mb-3"
                    >
                        {t('methodology.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
                        className="title-xl"
                    >
                        {t('methodology.subtitle')}
                    </motion.p>
                </div>

                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {Array.isArray(steps) && steps.map((step: any, index: number) => {
                            const Icon = getIcon(index);
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
                                    className={`relative card card-hover${index % 2 ? ' card-quiet' : ''}`}
                                >
                                    <div className="absolute inset-0 hidden"></div>
                                    <div className="relative h-full">
                                        <div className="mb-4">
                                            <span className="icon-tile">
                                                <Icon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <p className="eyebrow mb-3">{index + 1}</p>
                                        <h3 className="title-lg mb-3">{step.title}</h3>
                                        <p className="text-[0.95rem] text-ink-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
