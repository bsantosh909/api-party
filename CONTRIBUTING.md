# Contributing

If you wish to contribute to this repository, feel free to fork the repository and submit a
pull request. We welcome any contribution; small or big, code or no-code.

## Setup

To get ready to work on the codebase, please do the following:

1. Fork & clone the repository, and make sure you're on the **main** branch
2. Run `yarn --immutable` ([install](https://yarnpkg.com/getting-started/install))
3. Run `yarn dev -o` to run the development server
4. Make the changes you want to make
5. Run `yarn format` to format all the code to a specified standard
6. Submit a pull request

## Adding a new API entry

Adding a new API entry to the list is just as easy as following the steps below:

- Create a new file as `content/apis/{category}/{api_name}.md`
  - Here `{category}` is the main category of the API and `{api_name}` is a slug like name of the API
  - NOTE: **If the directory matching the category doesn't exists, you can create one**
  - NOTE: **If an API can have multiple directory, you can put the new file into either directory (only one)**
- Copy the content (template) of `content/sample-api.md` to the new file you just created
- Update the details with the actual data
  - For the image, if the API has a logo, add the image file in `public/logo/{api-name}`
  - In the api file's logo key, add the filename with extension of the image you just added in the `public/logo` directory.
