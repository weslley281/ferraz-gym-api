/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `gyms` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `instructors_gym_id_fkey` ON `instructors`;

-- DropIndex
DROP INDEX `users_gym_id_fkey` ON `users`;

-- AlterTable
ALTER TABLE `gyms` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password_hash` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `gyms_email_key` ON `gyms`(`email`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `instructors` ADD CONSTRAINT `instructors_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
