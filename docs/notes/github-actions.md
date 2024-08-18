# GitHub Actions

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production.

# The components of GitHub Actions

- **Workflow:** A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.
<br>
Workflows are defined in the `.github/workflows` directory in a repository. A repository can have multiple workflows, each which can perform a different set of tasks such as: Building and testing pull requests, Deploying your application every time a release is created, Adding a label whenever a new issue is opened, etc.
<br>
You can reference a workflow within another workflow. For more information, see [Reusing workflows](https://docs.github.com/en/actions/sharing-automations/reusing-workflows).
<br>
See [Writing workflows](https://docs.github.com/en/actions/writing-workflows) to learn more.

- **Events:** An event is a specific activity in a repository that triggers a workflow run. For example, an activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository. You can also trigger a workflow to run on a [schedule](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule), by [posting to a REST API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#create-a-repository-dispatch-event), or manually.
<br>
To learn more see [events that trigger workflows](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows).

- **Jobs:** A job is a set of steps in a workflow that is executed on the same runner. Each step is either a shell script that will be executed, or an action that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. For example, you can have a step that builds your application followed by a step that tests the application that was built.
<br>
You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel. When a job takes a dependency on another job, it waits for the dependent job to complete before running.
<br>
For more information, see [Choosing what your workflow does](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does)

- **Actions:** An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. An action can pull your Git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.
<br>
You can write your own actions, or you can find actions to use in your workflows in the GitHub Marketplace.
<br>
For more information on actions, see [Sharing automations](https://docs.github.com/en/actions/sharing-automations).

- **Runners:** A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time. GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows. Each workflow run executes in a fresh, newly-provisioned virtual machine.
<br>
GitHub also offers larger runners, which are available in larger configurations. For more information, see [About larger runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-larger-runners).
<br>
If you need a different operating system or require a specific hardware configuration, you can host your own runners.
<br>
For more information about self-hosted runners, see [Hosting your own runners](https://docs.github.com/en/actions/hosting-your-own-runners).