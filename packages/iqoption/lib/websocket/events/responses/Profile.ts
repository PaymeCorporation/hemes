import { Response } from '../Response'

import { Balance } from './GetBalances'

export interface Profile {
  account_status: string
  address: string
  auth_two_factor: string
  avatar: string
  balance: number
  balance_id: number
  balance_type: number
  balances: Balance[]
  birthdate: number
  bonus_total_wager: number
  bonus_wager: number
  cashback_level_info: { enabled: boolean }
  city: string
  client_category_id: number
  company_id: number
  confirmation_required: number
  confirmed_phones: string[]
  country_id: number
  created: number
  currency: string
  currency_char: string
  currency_id: number
  demo: number
  deposit_count: number
  deposit_in_one_click: boolean
  email: string
  finance_state: number
  first_name: string
  flag: string
  forget_status: {
    status: string
    created: string
    expires: string
  }
  functions: any[]
  gender: string
  group_id: number
  id: number
  infeed: number
  is_activated: boolean
  is_islamic: boolean
  is_vip_group: boolean
  kyc: {
    status: number
    isPhoneFilled: boolean
    isPhoneNeeded: boolean
    isProfileFilled: boolean
    isProfileNeeded: boolean
    isRegulatedUser: boolean
    daysLeftToVerify: number
    isPhoneConfirmed: boolean
    isDocumentsNeeded: boolean
    isDocumentsApproved: boolean
    isDocumentsDeclined: boolean
    isDocumentsUploaded: boolean
    isDocumentPoaUploaded: boolean
    isDocumentPoiUploaded: boolean
    isDocumentsUploadSkipped: boolean
    isPhoneConfirmationSkipped: false
  }
  kyc_confirmed: boolean
  last_name: string
  last_visit: boolean
  locale: string
  mask: string
  messages: number
  money: { deposit: [Object]; withdraw: [Object] }
  name: string
  nationality: string
  need_phone_confirmation: boolean
  new_email: string
  nickname: string
  personal_data_policy: {
    is_call_accepted: [Object]
    is_push_accepted: [Object]
    is_email_accepted: [Object]
    is_agreement_accepted: [Object]
    is_thirdparty_accepted: [Object]
  }
  phone: string
  popup: []
  postal_index: string
  public: number
  rate_in_one_click: boolean
  site_id: number
  skey: string
  socials: {}
  ssid: boolean
  tc: true
  timediff: number
  tin: string
  tournaments_ids: number
  trade_restricted: boolean
  trial: boolean
  tz: string
  tz_offset: number
  user_circle: null
  user_group: string
  user_id: number
  welcome_splash: number
}

export class ProfileResponse extends Response<Profile> {
  public get name(): string {
    return 'profile'
  }
}