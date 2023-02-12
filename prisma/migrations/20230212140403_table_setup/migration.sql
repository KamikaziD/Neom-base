-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `access_level` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRegions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usersId` INTEGER NULL,
    `regionsId` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `region_name` VARCHAR(191) NOT NULL,
    `region_code` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `regionTypesId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegionTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccessLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserRegions` ADD CONSTRAINT `UserRegions_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRegions` ADD CONSTRAINT `UserRegions_regionsId_fkey` FOREIGN KEY (`regionsId`) REFERENCES `Regions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regions` ADD CONSTRAINT `Regions_regionTypesId_fkey` FOREIGN KEY (`regionTypesId`) REFERENCES `RegionTypes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
