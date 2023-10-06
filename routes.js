import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
    .always(({ renderWithApp }) => renderWithApp())
    .use(edgioRoutes)