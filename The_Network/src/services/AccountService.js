import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
      this.getAccountUser(res.data.id)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(account){
    const res = api.put('account', account)
    logger.log(res.data)
  }

  async getAccountUser(id) {
    const res = await api.get('api/profiles/' + id)
    console.log(res.data);
    AppState.accountUser = res.data
  }
}

export const accountService = new AccountService()
