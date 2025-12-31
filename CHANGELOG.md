# Changelog

## 1.3.0 (2025-12-31)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/withzeusai/hercules-sdk-typescript/compare/v1.2.0...v1.3.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** set default apiVersion to '2025-12-09' in client options ([71673d7](https://github.com/withzeusai/hercules-sdk-typescript/commit/71673d79d76f6d9184b403f8cc6462e51d1cb205))
* **api:** update api ([a8c96e9](https://github.com/withzeusai/hercules-sdk-typescript/commit/a8c96e9e8144198c8da3855c05869709f0007c3f))
* **api:** update api ([be510f7](https://github.com/withzeusai/hercules-sdk-typescript/commit/be510f7655dc4832e422b05d58244b9e5dc76d8c))
* **api:** update api ([da6a7c4](https://github.com/withzeusai/hercules-sdk-typescript/commit/da6a7c44511a2dbbeeadee43c88f0a02342b2ea8))
* **api:** update api ([4b93efa](https://github.com/withzeusai/hercules-sdk-typescript/commit/4b93efa103a52b01ed3467690973a63eaeaee5e5))
* **api:** update api ([6470aef](https://github.com/withzeusai/hercules-sdk-typescript/commit/6470aef15cd1440681e9d5697bc8ad879c2092fc))
* **api:** update api ([bd77f3a](https://github.com/withzeusai/hercules-sdk-typescript/commit/bd77f3a2c6fa6240893339941132e0511fc2a37d))
* **api:** update api ([b295ad9](https://github.com/withzeusai/hercules-sdk-typescript/commit/b295ad91b1daebc6060abbaf8c6cb66d99d23862))
* **api:** update api ([1ebe729](https://github.com/withzeusai/hercules-sdk-typescript/commit/1ebe72908b1d5bfacfb665a1c5af30af16147d8c))
* **api:** update api ([8f4a933](https://github.com/withzeusai/hercules-sdk-typescript/commit/8f4a933c264b22d4fcef2f569a11bc678044bbb7))
* **api:** update api ([9ca84c9](https://github.com/withzeusai/hercules-sdk-typescript/commit/9ca84c96862d62181ac9e781726c7b641c6e27cf))
* **api:** update api ([6f3a42b](https://github.com/withzeusai/hercules-sdk-typescript/commit/6f3a42b85045705abc7a7223bfefd4f9e49455d3))
* **api:** update api ([b5e363f](https://github.com/withzeusai/hercules-sdk-typescript/commit/b5e363fb5d9a289ebd04fb3249038c3b1392c5e5))
* **api:** update api ([039884f](https://github.com/withzeusai/hercules-sdk-typescript/commit/039884fd1a045b2aaf601ff838a1ffed23c5a5e2))
* **api:** update api ([a8f9978](https://github.com/withzeusai/hercules-sdk-typescript/commit/a8f99785bfe28ee98d9342fb106f29af5d531005))
* **api:** update api ([d0b2863](https://github.com/withzeusai/hercules-sdk-typescript/commit/d0b286385863db37ffcdb567c283ef8552d49757))
* **cli:** binary request bodies ([a2fde43](https://github.com/withzeusai/hercules-sdk-typescript/commit/a2fde432ab8aa47fbdfa98769155b4d979d4f605))
* **files:** add support for string alternative to file upload type ([44459a8](https://github.com/withzeusai/hercules-sdk-typescript/commit/44459a83f3ec585c04f2aeef0e85933029604e23))


### Bug Fixes

* **cli:** fix compilation on Windows ([1e9a8c0](https://github.com/withzeusai/hercules-sdk-typescript/commit/1e9a8c0b7a9de1013939f0b624b0a3c20decb249))
* **cli:** remove `*.exe` files from customer SDK changes ([efe9b59](https://github.com/withzeusai/hercules-sdk-typescript/commit/efe9b59315129694ea48a386d143b2984d4cfcfa))
* **cli:** when encoutering scalar body root parameter, don't treat it as binary ([aff64ae](https://github.com/withzeusai/hercules-sdk-typescript/commit/aff64ae6cdb899136e28490ee8b69b1a608a9d7f))
* **docs:** correct snippets for requests with arbitrary and specific params mixed together ([41159f5](https://github.com/withzeusai/hercules-sdk-typescript/commit/41159f57eb7f2a013aa728125ef0fdd5abf3743f))
* **docs:** remove extraneous example object fields ([3646639](https://github.com/withzeusai/hercules-sdk-typescript/commit/36466396bb4d7d0c6a4d2f3d3f62bb658f160943))
* fix paginated endpoints for primitive types ([7a3cd4e](https://github.com/withzeusai/hercules-sdk-typescript/commit/7a3cd4e14624054925b97a459aad2bf17efadba6))
* **mcp:** add client instantiation options to code tool ([91e717a](https://github.com/withzeusai/hercules-sdk-typescript/commit/91e717a00a6654826d36f62a72eeee6b40a75e4f))


### Chores

* **cli:** add `*.exe` files back to `.gitignore` ([9490e88](https://github.com/withzeusai/hercules-sdk-typescript/commit/9490e88bd6b1875b29973161f3eb062a3da72820))
* **cli:** move `jsonview` subpackage to `internal` ([888004c](https://github.com/withzeusai/hercules-sdk-typescript/commit/888004c5ce16569a6a93a37fa9369dc3888a0ba5))
* **cli:** run pre-codegen tests on Windows ([ec6b39a](https://github.com/withzeusai/hercules-sdk-typescript/commit/ec6b39ab6c3ae566f9d8d0e27626796f12cdd8fe))
* **internal:** codegen related update ([e80fa2d](https://github.com/withzeusai/hercules-sdk-typescript/commit/e80fa2d7e7c504bbbf470ff6f49ee487b3af72f8))
* **internal:** codegen related update ([62595a5](https://github.com/withzeusai/hercules-sdk-typescript/commit/62595a5fbbf98e04b8331840680f502c3e096dc0))
* **internal:** codegen related update ([9efcd3d](https://github.com/withzeusai/hercules-sdk-typescript/commit/9efcd3d58b7b9b5b74e5e8c76f59a88188abc1de))
* **internal:** codegen related update ([e6bc741](https://github.com/withzeusai/hercules-sdk-typescript/commit/e6bc74142e26a8ddaa4f30e060b2e31c1e7761c6))
* **internal:** codegen related update ([3648a8a](https://github.com/withzeusai/hercules-sdk-typescript/commit/3648a8a09d9f783503a085e9af568973d25acd11))
* **internal:** codegen related update ([950f810](https://github.com/withzeusai/hercules-sdk-typescript/commit/950f810907222a0a43afe0731aad7499206863e9))
* **internal:** codegen related update ([aed2f08](https://github.com/withzeusai/hercules-sdk-typescript/commit/aed2f08b63ea50a9a37f2c246a78878e49b37fb8))
* **internal:** codegen related update ([b6c9791](https://github.com/withzeusai/hercules-sdk-typescript/commit/b6c9791c469b55862790cd019b3fcdaa5790bf99))
* **internal:** codegen related update ([c9e44cf](https://github.com/withzeusai/hercules-sdk-typescript/commit/c9e44cf9a8fd1906b2050538d89fbbf3df7b4a58))
* **internal:** codegen related update ([933ec25](https://github.com/withzeusai/hercules-sdk-typescript/commit/933ec256be6999177013ba2040ae3ff46ba496fd))
* **internal:** codegen related update ([5d77208](https://github.com/withzeusai/hercules-sdk-typescript/commit/5d772082a91a35500604d78b366cc45878de2ac5))
* **internal:** codegen related update ([e69e26d](https://github.com/withzeusai/hercules-sdk-typescript/commit/e69e26d3e4ca4bccd93a8f8289357a98a0d02bcd))
* **internal:** codegen related update ([dbb8cce](https://github.com/withzeusai/hercules-sdk-typescript/commit/dbb8cce468041359c3d6574cd168408c7d1d878f))
* **internal:** codegen related update ([7c7e3ba](https://github.com/withzeusai/hercules-sdk-typescript/commit/7c7e3bae9a71e13227c034daf13f0c34a578faa2))
* **internal:** codegen related update ([96eea59](https://github.com/withzeusai/hercules-sdk-typescript/commit/96eea595881c2216f7d723cafe989e0252ab017b))
* **internal:** codegen related update ([19cec5a](https://github.com/withzeusai/hercules-sdk-typescript/commit/19cec5a519091fcd38ce3b0743e03a541047212a))
* **internal:** codegen related update ([6dccd8c](https://github.com/withzeusai/hercules-sdk-typescript/commit/6dccd8cf2f67810ca46dab49cfbd33557e4b5235))
* **internal:** codegen related update ([99fc5a9](https://github.com/withzeusai/hercules-sdk-typescript/commit/99fc5a9e7da237689b8b751921fcc6bca75ff6d6))
* **internal:** codegen related update ([8c1cd1a](https://github.com/withzeusai/hercules-sdk-typescript/commit/8c1cd1a53d3de36840c3794858a2f2d06cd14dac))
* **internal:** codegen related update ([401ca1c](https://github.com/withzeusai/hercules-sdk-typescript/commit/401ca1cae358e1a308b2a4fd0a307fe5ffc963a1))
* **internal:** codegen related update ([2db4a4c](https://github.com/withzeusai/hercules-sdk-typescript/commit/2db4a4ce3716b148ebd5d87d0093fb97584499bd))
* **internal:** codegen related update ([af326af](https://github.com/withzeusai/hercules-sdk-typescript/commit/af326af76c554f484011dd6b0931d9ff3e3a913f))
* **internal:** codegen related update ([63e9027](https://github.com/withzeusai/hercules-sdk-typescript/commit/63e9027b8be49e8551bb7329da85f0e3bed392fb))
* **internal:** codegen related update ([b96320f](https://github.com/withzeusai/hercules-sdk-typescript/commit/b96320f45d7e6cf0af4f342eb406cddbefccae8f))
* **internal:** codegen related update ([758d764](https://github.com/withzeusai/hercules-sdk-typescript/commit/758d7644f26be8116e7f0a734f00d609b2ee6adf))
* **internal:** codegen related update ([620a93d](https://github.com/withzeusai/hercules-sdk-typescript/commit/620a93dee6dc367d5e3fd28a44868b6832f9656f))
* **internal:** codegen related update ([d4eeca7](https://github.com/withzeusai/hercules-sdk-typescript/commit/d4eeca7a29724c7a443ecabb567ddda89589442c))
* **internal:** codegen related update ([d7b2e6a](https://github.com/withzeusai/hercules-sdk-typescript/commit/d7b2e6a119a8ac3a4c9040d6a243e4f382334384))
* **internal:** codegen related update ([d4f4c22](https://github.com/withzeusai/hercules-sdk-typescript/commit/d4f4c2270802c112358ac2cbacf8f977abb3fb11))
* **internal:** codegen related update ([0056027](https://github.com/withzeusai/hercules-sdk-typescript/commit/0056027593db8a6fcb00d15df7b5015a89554961))
* **internal:** codegen related update ([7cf8adc](https://github.com/withzeusai/hercules-sdk-typescript/commit/7cf8adce2f8b5b8caac2d4519cb308e183766c24))
* **internal:** codegen related update ([229b6ae](https://github.com/withzeusai/hercules-sdk-typescript/commit/229b6ae55e6b6d9a6431e74eff9165ba78133f20))
* **internal:** codegen related update ([cd8f340](https://github.com/withzeusai/hercules-sdk-typescript/commit/cd8f340452ec0d39fc7bde992bc47d13fb662f77))
* **internal:** codegen related update ([d6c00d0](https://github.com/withzeusai/hercules-sdk-typescript/commit/d6c00d0488d9fc57b296e689f3271cf21359ab0c))
* **internal:** codegen related update ([97d4beb](https://github.com/withzeusai/hercules-sdk-typescript/commit/97d4beb85a0a4a2899af3ff48deb3e7af1cba7d2))
* **internal:** codegen related update ([b817aa6](https://github.com/withzeusai/hercules-sdk-typescript/commit/b817aa6cb4c146e41688390f0de69cb7565854fa))
* **internal:** codegen related update ([9213fe8](https://github.com/withzeusai/hercules-sdk-typescript/commit/9213fe8b5cc28ccd3ba68be59f01213c6777e9dd))
* **internal:** codegen related update ([ee2f1fe](https://github.com/withzeusai/hercules-sdk-typescript/commit/ee2f1fe899e66ddff8a9f1c284ce5dc6af889727))
* **internal:** codegen related update ([893bf15](https://github.com/withzeusai/hercules-sdk-typescript/commit/893bf15284adf17efb94c5e9370b2cc630a6045b))
* **internal:** codegen related update ([47c1d58](https://github.com/withzeusai/hercules-sdk-typescript/commit/47c1d58b9c6a24fe5316bb7ed46565e6ff8c9fec))
* **internal:** codegen related update ([0d0ed1c](https://github.com/withzeusai/hercules-sdk-typescript/commit/0d0ed1c8c155f9c790f3e784f9995ea52c9d541c))
* **internal:** codegen related update ([4dc0603](https://github.com/withzeusai/hercules-sdk-typescript/commit/4dc0603578e4be68f98aa096d59b49c6cdf4c360))
* **internal:** codegen related update ([a428d9b](https://github.com/withzeusai/hercules-sdk-typescript/commit/a428d9b86e544400de031c9666d2bf41ff56ce79))
* **internal:** codegen related update ([61b9fcd](https://github.com/withzeusai/hercules-sdk-typescript/commit/61b9fcd3c3f67d850229b01db04a774cdb8f4631))
* **internal:** codegen related update ([f9e8dab](https://github.com/withzeusai/hercules-sdk-typescript/commit/f9e8dab7415aed5e975054982540f7830cf48b5e))
* **internal:** codegen related update ([814aa7c](https://github.com/withzeusai/hercules-sdk-typescript/commit/814aa7c0020678127ae2aa2d15a637458aa4fee0))
* **internal:** codegen related update ([7d360c5](https://github.com/withzeusai/hercules-sdk-typescript/commit/7d360c5d403f06e0d1ab32696d1b89944e560cad))
* **internal:** codegen related update ([c52acc7](https://github.com/withzeusai/hercules-sdk-typescript/commit/c52acc7e4bdcfdc6cf1b2f9a28d883257f5c25a4))
* **internal:** codegen related update ([82edf33](https://github.com/withzeusai/hercules-sdk-typescript/commit/82edf3309704e31a5ab8244f62a85c3216cbef83))
* **internal:** codegen related update ([0e44fcc](https://github.com/withzeusai/hercules-sdk-typescript/commit/0e44fcc5fbde3a7c9f7231ba6b33f4d209c80f78))
* **internal:** codegen related update ([8e82f45](https://github.com/withzeusai/hercules-sdk-typescript/commit/8e82f45e4cc5404c7533cb82b89ca83aba4c77c0))
* **internal:** codegen related update ([c206a11](https://github.com/withzeusai/hercules-sdk-typescript/commit/c206a110d649250db9fae2e83f2bebab6f5965d5))
* **internal:** codegen related update ([1a4af66](https://github.com/withzeusai/hercules-sdk-typescript/commit/1a4af667b13386c4a5d91b01cebbad12036aa2d0))
* **internal:** codegen related update ([cb364d8](https://github.com/withzeusai/hercules-sdk-typescript/commit/cb364d8597b6284d1686cbeb6506443a520e36ff))
* **internal:** codegen related update ([fca24a4](https://github.com/withzeusai/hercules-sdk-typescript/commit/fca24a49a62d2a00c28fe0ffa95332262b4ff68d))
* **internal:** codegen related update ([e501d3a](https://github.com/withzeusai/hercules-sdk-typescript/commit/e501d3a179874a4997a83a770f17bc2153944927))
* **internal:** codegen related update ([d962875](https://github.com/withzeusai/hercules-sdk-typescript/commit/d962875f6ce4771b21275b2e7a78963ade451346))
* **internal:** codegen related update ([389c858](https://github.com/withzeusai/hercules-sdk-typescript/commit/389c85861f0412b58f25493db5c0dab432cf3a13))
* **internal:** codegen related update ([f0cef40](https://github.com/withzeusai/hercules-sdk-typescript/commit/f0cef401232c659686eb4768cabbb29f02f93b37))
* **internal:** codegen related update ([0ef708f](https://github.com/withzeusai/hercules-sdk-typescript/commit/0ef708f406bc1029eb1d66708d1faa22105eca82))
* **internal:** codegen related update ([1dce83c](https://github.com/withzeusai/hercules-sdk-typescript/commit/1dce83c268b9de085bcb119b79183d5a7c569046))
* **internal:** codegen related update ([1076a33](https://github.com/withzeusai/hercules-sdk-typescript/commit/1076a33fc1c465caa6b2634fa2fd6d4821c09600))
* **internal:** codegen related update ([ae70ff5](https://github.com/withzeusai/hercules-sdk-typescript/commit/ae70ff52f8a14c9141390daf3a73e654ea89fca7))
* **internal:** codegen related update ([101915e](https://github.com/withzeusai/hercules-sdk-typescript/commit/101915ed40b7e031cfb7fb5613752bb0bfd158e4))
* **internal:** codegen related update ([81f611a](https://github.com/withzeusai/hercules-sdk-typescript/commit/81f611a9e6d8b287e781927443b44a60176fe357))
* **mcp:** remove deprecated tool schemes ([6c97882](https://github.com/withzeusai/hercules-sdk-typescript/commit/6c978828bb807b4054349a1297bd13d47245f1bb))
* **mcp:** update lockfile ([bd04d99](https://github.com/withzeusai/hercules-sdk-typescript/commit/bd04d99b38413349fbed739fa5e741d2268c80da))
* remove custom code ([9695c4f](https://github.com/withzeusai/hercules-sdk-typescript/commit/9695c4f39cf8d76044252a241ad621430f010f0f))
* use `stretchr/testify` assertion helpers in tests ([4a05921](https://github.com/withzeusai/hercules-sdk-typescript/commit/4a05921a98968592bb920464e3d840f69d9c51e6))

## 1.2.0 (2025-12-10)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/withzeusai/hercules-sdk-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** update api ([ce19f0a](https://github.com/withzeusai/hercules-sdk-typescript/commit/ce19f0a9b5072176bd06a52c4fd05cfa53edecd3))

## 1.1.0 (2025-12-10)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/withzeusai/hercules-sdk-typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** update api ([1dfe068](https://github.com/withzeusai/hercules-sdk-typescript/commit/1dfe0681efc89edc207e95b4228d6344fc30dec9))


### Chores

* update SDK settings ([6e60dfe](https://github.com/withzeusai/hercules-sdk-typescript/commit/6e60dfe1e5d56b9a6d2120c2817652edf9aa9a02))

## 1.0.0 (2025-12-10)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/withzeusai/hercules-sdk-typescript/compare/v0.0.1...v1.0.0)

### Features

* **api:** update api ([dc336f1](https://github.com/withzeusai/hercules-sdk-typescript/commit/dc336f164abd1789db4807a5405ed13df1632440))
* **api:** update api ([9d18a4b](https://github.com/withzeusai/hercules-sdk-typescript/commit/9d18a4b41320ac3a1750fd6cdbcc3b4313b89377))
* **api:** update api ([cee7899](https://github.com/withzeusai/hercules-sdk-typescript/commit/cee789908b00d69cc33ae1068d0936d996f20a09))
* **api:** update api ([57d9b08](https://github.com/withzeusai/hercules-sdk-typescript/commit/57d9b08fb4b86f42902232c2ef3716515a28b232))
* **api:** update api ([edea462](https://github.com/withzeusai/hercules-sdk-typescript/commit/edea46296fe3fe7f6dd5bd046fc7ed3c401abb09))


### Chores

* update SDK settings ([d77bb00](https://github.com/withzeusai/hercules-sdk-typescript/commit/d77bb009df380e5ca9d6897ca880654898de361c))
