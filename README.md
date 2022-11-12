<a name="readme-top"></a>

# gotrxx-admin

![Svelte](https://img.shields.io/badge/Svelte-4A4A55?logo=svelte&logoColor=FF3E00)
[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

gotrxx-admin is a simple clicky-clicky web ui for gotrxx instances.


## Using the github pages hosted version 

Go to https://eisenwinter.github.io/gotrxx-admin/ to use the hosted version.

Ensure you have added the hosted version to your gotrxx instance by doing 

```
gotrxx app create -c public -f authorization_code -f refresh_token -o offline_access -n gotrxx-admin -r https://eisenwinter.github.io/gotrxx-admin/#/oidc-callback -t implicit_granted -p  gotrxxadmin
```

The user you are logging in with needs to be in the `admin` group.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Running locally

Close the repository and run

```
yarn
yarn dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setting up the gotrxx instance

For gotrxx admin to work, you need to create an application in your gotrxx instance for it, you can do so by running

```
gotrxx app create -c public -f authorization_code -f refresh_token -o offline_access -n adminui -r https://YOUR-GOTRXX-ADMIN-INSTANCE/#/oidc-callback -t implicit_granted -p  gotrxxadmin
```

Also be sure that the user you are using is in the `admin` group when signing in.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue for further questions or recommendations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the BSD-2-Clause license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>