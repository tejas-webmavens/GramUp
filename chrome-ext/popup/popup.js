const whenLogged = async () => {

  const { user } = await instagram.request({
    method: 'get_user_info',
    params: [ 'instagram' ]
  })

  console.log('@instagram', user.pk, user)

  // const follow = await instagram.callMethod('follow', user.pk)

  // console.log('follow request', follow)

  await updateView()
}

const openControlPanel = () => {
  const WEBSITE_URL = `http://localhost/GramUp/`
  window.open(WEBSITE_URL)
}

const updateView = async () => {
  try {
    const { user } = await instagram.request({
      method: 'check_login'
    })

    console.log('update view, user =', user)

    const logged_in = !!user.pk

    setView({
      logged_in,
      user,
    })
  } catch (err) {
    setView({
      logged_in: false,
      user: null,
    })
  }
}

const setView = ({ logged_in, user = {}} = {}) => {
  const changeDisplay = (elem, isShown) => isShown
    ? elem.classList.remove("hide")
    : elem.classList.add("hide")

  if (logged_in) {
    document.querySelectorAll('.logged_in')    .forEach(elem => changeDisplay(elem, true))
    document.querySelectorAll('.not_logged_in').forEach(elem => changeDisplay(elem, false))
  }
  else {
    document.querySelectorAll('.logged_in')    .forEach(elem => changeDisplay(elem, false))
    document.querySelectorAll('.not_logged_in').forEach(elem => changeDisplay(elem, true))
  }

  if (user) {
    document.querySelector('.username-field').innerText = user.username
  }

}

window.onload = async () => {
  const login_form = document.forms.instalogin

  if (!login_form) return

  await updateView()

  document.querySelector('#exit').onclick = async () => {
    await clearCredentials()

    await instagram.request({
      method: 'exit',
    })

    await updateView()
  }

  login_form.onsubmit = async (event) => {
    event.preventDefault()

    const { username, password } = instalogin.elements

    try {
      const res = await instagram.request({
        method: 'login',
        params: [ username.value, password.value ]
      })

      await saveCredentials(username.value, password.value)
      await whenLogged()
      openControlPanel()
    } catch (err) {
      if (err.message.includes(`status code 400`)) {
        alert(`InstagramError: Probably wrong password:` + err.message)
      } else {
        alert(err.message)
      }
      console.error(err)
    }
  }
}
