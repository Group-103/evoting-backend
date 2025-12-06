const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixData() {
    try {
        console.log('Fixing constituencies...');

        // Fix Class Rep Arts
        const arts = await prisma.position.updateMany({
            where: { name: { contains: 'Arts' } },
            data: { constituency: 'Arts' }
        });
        console.log(`Updated ${arts.count} Arts positions.`);

        // Fix Class Rep Sciences
        const science = await prisma.position.updateMany({
            where: { name: { contains: 'Sciences' } },
            data: { constituency: 'Science' }
        });
        console.log(`Updated ${science.count} Science positions.`);

        // Ensure President is General
        const president = await prisma.position.updateMany({
            where: { name: { contains: 'President' } },
            data: { constituency: null }
        });
        console.log(`Updated ${president.count} President positions (General).`);

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

fixData();
