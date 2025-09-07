import React from 'react';
import { Timeline } from '../ui/timeline';
import { spineProblems } from '../../data/diagnoses';
import { useLanguage } from '../../contexts/LanguageContext';

const DiagnosisTimeline = () => {
  const { t, language } = useLanguage();
  
  // English descriptions for diagnoses
  const getEnglishDescription = (id: string) => {
    const descriptions = {
      'skolioza': 'Scoliosis represents a lateral curvature of the spine that can occur at any age. This condition significantly affects body posture and can cause pain or movement limitations. Early diagnosis and properly chosen therapy are key to successful treatment.',
      'hernia': 'Disc herniation occurs when an intervertebral disc moves out of its natural position and presses on surrounding nerves. This condition can cause intense pain and movement limitations. Properly chosen rehabilitation can significantly reduce symptoms and often prevent the need for surgery.',
      'stenoza': 'Spinal stenosis represents a narrowing of the space in the spine where nerves pass. This condition can significantly affect quality of life, cause pain and limit mobility. Early intervention and proper exercises can significantly reduce symptoms and slow disease progression.',
      'hyperlordoza': 'Hyperlordosis and hyperkyphosis are conditions where there is excessive curvature of the spine in the anteroposterior direction. Hyperlordosis manifests as excessive arching in the lumbar region, while hyperkyphosis causes pronounced bulging in the thoracic part.',
      'spondylolisteza': 'Spondylolisthesis is a condition where one vertebra shifts relative to another. This shift can cause pressure on surrounding nerves and lead to pain or limited mobility.',
      'scheuermann': 'Scheuermann\'s disease is a developmental disorder of the spine that manifests mainly during the growth period. It causes excessive bulging (kyphosis) in the thoracic region of the spine, leading to typical hunching.'
    };
    return descriptions[id] || '';
  };

  // Create timeline items with translations
  const timelineItems = spineProblems.map(diagnosis => ({
    title: t(`diagnosis.${diagnosis.id}.title`) || diagnosis.title,
    subtitle: t(`diagnosis.${diagnosis.id}.subtitle`) || diagnosis.subtitle,
    content: (
      <div>
        <p className="leading-relaxed">
          {language === 'en' ? getEnglishDescription(diagnosis.id) : diagnosis.description}
        </p>
      </div>
    ),
    image: diagnosis.id === 'skolioza' ? '/assets/images/skolioza-image.png' :
           diagnosis.id === 'hernia' ? '/assets/images/hernia-disku-image.png' :
           undefined
  }));

  return (
    <div className="py-12 md:py-20">
      <Timeline items={timelineItems} />
    </div>
  );
};

export default DiagnosisTimeline;