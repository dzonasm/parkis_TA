export interface SectionValues {
    id: string;
    text: string;
}

export interface FAQSections {
    title: SectionValues;
    header: SectionValues;
    description: SectionValues;
};

const sectionData: FAQSections = {
    title: {
        id: '[ta-id="faq_161669206"]',
        text: 'Frequently asked questions',
    },
    header: {
        id: '[ta-id="faq_409356808"]',
        text: 'Mercer IndigoSM is an integrated benefits platform tailored for non-traditional workers.',
    },
    description: {
        id: '[ta-id="faq_146432569"]',
        text: 'We’re changing how non-traditional workers get the most out of their benefits for a brighter future. Independent workers and small business owners are leading the way in non-traditional work but are not eligible for employer-sponsored total rewards programs. All workers deserve the opportunity to access benefit options to cover themselves, their families, their employees, and their businesses.',
    }
};

export function mapFAQSections(sectionName: string): SectionValues {
    return sectionData[sectionName];
};