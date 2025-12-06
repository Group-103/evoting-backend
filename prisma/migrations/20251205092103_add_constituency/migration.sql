-- AlterTable
ALTER TABLE `eligible_voters` ADD COLUMN `constituency` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `positions` ADD COLUMN `constituency` VARCHAR(191) NULL;
