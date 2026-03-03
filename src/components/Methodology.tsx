import { motion } from 'framer-motion';
import { Database, Brain, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import { formatSEOText } from '../utils/seo';

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
        <div className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-base text-blue-600 font-semibold tracking-wide uppercase"
                    >
                        {t('methodology.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        {t('methodology.subtitle')}
                    </motion.p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {Array.isArray(steps) && steps.map((step: any, index: number) => {
                            const Icon = getIcon(index);
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="absolute h-full w-full bg-white rounded-2xl shadow-lg transform -skew-x-6 rotate-3"></div>
                                    <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col items-center text-center border border-gray-100 hover:border-blue-100 transition-colors">
                                        <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                            <Icon className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(step.title) }} />
                                        <p className="text-gray-500 leading-relaxed text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: formatSEOText(step.description) }} />
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
