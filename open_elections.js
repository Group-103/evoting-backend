const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function openElections() {
    try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        console.log(`Opening all elections...`);
        console.log(`Start: ${yesterday.toISOString()}`);
        console.log(`End:   ${tomorrow.toISOString()}`);

        const result = await prisma.position.updateMany({
            data: {
                votingOpens: yesterday,
                votingCloses: tomorrow,
                nominationOpens: yesterday,
                nominationCloses: tomorrow // Ensure nominations are also "valid" history-wise
            }
        });

        console.log(`Updated ${result.count} positions to be currently active.`);

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

openElections();
