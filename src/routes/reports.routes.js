const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reports.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

// All report routes require authentication
router.use(authenticate);

// Results and turnout available to ADMIN, OFFICER, and CANDIDATE
router.get('/turnout', authorize(['ADMIN', 'OFFICER', 'CANDIDATE']), reportsController.getTurnout);
router.get('/results', authorize(['ADMIN', 'OFFICER', 'CANDIDATE']), reportsController.getResults);

// Audit log only for ADMIN
router.get('/audit', authorize('ADMIN'), reportsController.getAuditLog);
router.get('/export/:type', authorize('ADMIN'), reportsController.exportReport);

module.exports = router;
