# Branching Strategy

This project follows the GitFlow branching model for version control and release management.

## Main Branches

### `main`
- Production-ready code only
- All code is thoroughly tested and stable
- Tagged with version numbers for releases
- No direct commits allowed

### `development`
- Integration branch for features
- Contains latest delivered development changes
- Source branch for feature branches
- Code may be unstable

## Supporting Branches

### Feature Branches
- Branch from: `development`
- Merge back into: `development`
- Naming convention: `feature/[issue-id]-[feature-name]`
- Used for developing new features
- Example: `feature/VM-123-voice-analysis`

### Release Branches
- Branch from: `development`
- Merge back into: `main` and `development`
- Naming convention: `release/[version]`
- Used for release preparation
- Only bug fixes and documentation
- Example: `release/1.2.0`

### Hotfix Branches
- Branch from: `main`
- Merge back into: `main` and `development`
- Naming convention: `hotfix/[issue-id]-[description]`
- Used for urgent production fixes
- Example: `hotfix/VM-456-auth-issue`

## Workflow

1. Create feature branch from `development`
2. Develop and test feature
3. Create pull request to `development`
4. Code review and approval
5. Merge feature into `development`
6. Create release branch when ready
7. Test and fix issues in release branch
8. Merge release into `main` and `development`

## Version Numbers

We follow Semantic Versioning (SemVer):
- MAJOR.MINOR.PATCH (e.g., 1.2.3)
- Major: Breaking changes
- Minor: New features, backward compatible
- Patch: Bug fixes, backward compatible

## Pull Request Process

1. Update documentation
2. Add/update tests
3. Pass all CI checks
4. Get approval from at least one reviewer
5. Ensure branch is up to date with target branch