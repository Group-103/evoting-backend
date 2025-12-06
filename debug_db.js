const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkData() {
    try {
        console.log('--- VOTER S24D14/009 ---');
        const voter = await prisma.eligibleVoter.findUnique({
            where: { regNo: 'S24D14/009' }
        });
        console.log(`RegNo: ${voter.regNo}`);
        console.log(`Constituency: '${voter.constituency}'`); // Quote to see empty strings/nulls

        console.log('\n--- ALL POSITIONS ---');
        const positions = await prisma.position.findMany();
        positions.forEach(p => {
            console.log(`[${p.name}] ID: ${p.id}`);
            console.log(`   Constituency: '${p.constituency}' (${p.constituency === null ? 'GENERAL' : 'SPECIFIC'})`);
        });

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

checkData();
