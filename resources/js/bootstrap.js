import _ from 'lodash'
import axios from 'axios'
import * as bootstrap from 'bootstrap'

window._ = _
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.bootstrap = bootstrap
