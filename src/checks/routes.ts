import * as express from 'express'
import * as path from 'path'
import multer from 'multer'
import { ChecksController } from './checks.controller'

const router = express.Router()

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads', 'comprobantes'))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname)
    cb(null, `check-${uniqueSuffix}${ext}`)
  },
})

const upload = multer({ storage })

router.get('/', ChecksController.getChecks)
router.get('/:id', ChecksController.getCheckById)
router.post('/', upload.single('image'), ChecksController.createCheck)
router.patch('/:id', ChecksController.updateCheck)
router.delete('/:id', ChecksController.deleteCheck)

// Secure endpoint for images
router.get('/image/:filename', ChecksController.serveImage)

export default router

