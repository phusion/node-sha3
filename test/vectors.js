/* eslint max-lines: ["off"] */

const { describe, it } = require('mocha');
const assert = require('assert');
const SHA3 = require('../src');

const newBuffer = (input, encoding) => {
  try {
    return Buffer.from(input, encoding);
  } catch (error) {
    return new Buffer(input, encoding);
  }
};

// eslint-disable-next-line max-statements
describe('Known Test Vectors', () => {
  it('produces the expected result for ShortMsgKAT_224 8', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cc', 'hex'));
    assert.equal(instance.digest('hex'), 'a9cab59eb40a10b246290f2d6086e32e3689faf1d26b470c899f2802');
  });


  it('produces the expected result for ShortMsgKAT_224 16', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('41fb', 'hex'));
    assert.equal(instance.digest('hex'), '615ba367afdc35aac397bc7eb5d58d106a734b24986d5d978fefd62c');
  });


  it('produces the expected result for ShortMsgKAT_224 24', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1f877c', 'hex'));
    assert.equal(instance.digest('hex'), '6f9d2898efd096baaaaab2e97482ddb6389b8e6caa964b7a0e347e13');
  });


  it('produces the expected result for ShortMsgKAT_224 32', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c1ecfdfc', 'hex'));
    assert.equal(instance.digest('hex'), 'e405869da1464a705700a3cbce131aabeeba9c8d2fe6576b21bcbe16');
  });


  it('produces the expected result for ShortMsgKAT_224 40', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('21f134ac57', 'hex'));
    assert.equal(instance.digest('hex'), '5573da2b02216a860389a581f6e9fb8d805e9e02f6fa911701eee298');
  });


  it('produces the expected result for ShortMsgKAT_224 48', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c6f50bb74e29', 'hex'));
    assert.equal(instance.digest('hex'), '163c9060163aa66b8b7c0cfaa65d934bff219bcbc267187caba0042f');
  });


  it('produces the expected result for ShortMsgKAT_224 56', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('119713cc83eeef', 'hex'));
    assert.equal(instance.digest('hex'), 'cfc04c6f8463ddab24cdf8b8652bd11df23dd1b95f118328dd01580e');
  });


  it('produces the expected result for ShortMsgKAT_224 64', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4a4f202484512526', 'hex'));
    assert.equal(instance.digest('hex'), '7a5c2cb3f999dd00eff7399963314ca647dd0e5ae1bddec611f8338d');
  });


  it('produces the expected result for ShortMsgKAT_224 72', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1f66ab4185ed9b6375', 'hex'));
    assert.equal(instance.digest('hex'), 'a5a75806083aa9307074ef8fbd7df592985e5f714611e812216c0449');
  });


  it('produces the expected result for ShortMsgKAT_224 80', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('eed7422227613b6f53c9', 'hex'));
    assert.equal(instance.digest('hex'), 'ac78fc53a1db90a634f1aaaf90119c889c8c24b59b98b7366029cc73');
  });


  it('produces the expected result for ShortMsgKAT_224 88', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('eaeed5cdffd89dece455f1', 'hex'));
    assert.equal(instance.digest('hex'), '672ca6826686bedb258532830d606b258c6de60154ec0957cd8b858b');
  });


  it('produces the expected result for ShortMsgKAT_224 96', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5be43c90f22902e4fe8ed2d3', 'hex'));
    assert.equal(instance.digest('hex'), 'd98ca07e172b0bc53d679d2f8d002c63fd24a6307f2b7e1eeef28be0');
  });


  it('produces the expected result for ShortMsgKAT_224 104', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a746273228122f381c3b46e4f1', 'hex'));
    assert.equal(instance.digest('hex'), 'f122be39c91a6c17cd5900f531e680d54cedefd4f0e3d113d26543d4');
  });


  it('produces the expected result for ShortMsgKAT_224 112', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3c5871cd619c69a63b540eb5a625', 'hex'));
    assert.equal(instance.digest('hex'), '2a26d2ad2015c67cabb7895ec5fa25473d4d1433fae92b9b2cda31f0');
  });


  it('produces the expected result for ShortMsgKAT_224 120', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fa22874bcc068879e8ef11a69f0722', 'hex'));
    assert.equal(instance.digest('hex'), 'a69e4ec1648cbbd595558ee4ea345e4196c2881e85e853739b1f4604');
  });


  it('produces the expected result for ShortMsgKAT_224 128', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('52a608ab21ccdd8a4457a57ede782176', 'hex'));
    assert.equal(instance.digest('hex'), '5679cd509c5120af54795cf477149641cf27b2ebb6a5f90340704e57');
  });


  it('produces the expected result for ShortMsgKAT_224 136', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('82e192e4043ddcd12ecf52969d0f807eed', 'hex'));
    assert.equal(instance.digest('hex'), '455584a1a3bbfbb977ae08ddee93da5acae0f2f4c3cdaaf089728aae');
  });


  it('produces the expected result for ShortMsgKAT_224 144', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('75683dcb556140c522543bb6e9098b21a21e', 'hex'));
    assert.equal(instance.digest('hex'), 'bb779e7267caf0e891547ee3e3babf17837671cf731ed56334f61cc3');
  });


  it('produces the expected result for ShortMsgKAT_224 152', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('06e4efe45035e61faaf4287b4d8d1f12ca97e5', 'hex'));
    assert.equal(instance.digest('hex'), 'e7b181daec132d3b6c9dfbf61841135b87fb995be20957b8cd095e2b');
  });


  it('produces the expected result for ShortMsgKAT_224 160', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e26193989d06568fe688e75540aea06747d9f851', 'hex'));
    assert.equal(instance.digest('hex'), '44729646a05ad0503a876b448f88f177a0a263ab746ca6e30676adb2');
  });


  it('produces the expected result for ShortMsgKAT_224 168', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d8dc8fdefbdce9d44e4cbafe78447bae3b5436102a', 'hex'));
    assert.equal(instance.digest('hex'), '05e15793e417dd4e02cd6c5636d42c1638c164d70b79f717f25d1a15');
  });


  it('produces the expected result for ShortMsgKAT_224 176', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('57085fd7e14216ab102d8317b0cb338a786d5fc32d8f', 'hex'));
    assert.equal(instance.digest('hex'), '2c4077a8858966ef79aac3ec6d82855ead22867ba45d617a68cb926e');
  });


  it('produces the expected result for ShortMsgKAT_224 184', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a05404df5dbb57697e2c16fa29defac8ab3560d6126fa0', 'hex'));
    assert.equal(instance.digest('hex'), '2e897b479fbcbf42d2139f6768df147a3b85c36a5b3f3c066eb0565e');
  });


  it('produces the expected result for ShortMsgKAT_224 192', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('aecbb02759f7433d6fcb06963c74061cd83b5b3ffa6f13c6', 'hex'));
    assert.equal(instance.digest('hex'), 'ba76ffefd006b81ef5991e697d0425621b16818ea27c11056e00904e');
  });


  it('produces the expected result for ShortMsgKAT_224 200', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('aafdc9243d3d4a096558a360cc27c8d862f0be73db5e88aa55', 'hex'));
    assert.equal(instance.digest('hex'), '1c1e758d87399a36bf7c8a2e6a55ce6a4f0c498737956959959fd2ac');
  });


  it('produces the expected result for ShortMsgKAT_224 208', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7bc84867f6f9e9fdc3e1046cae3a52c77ed485860ee260e30b15', 'hex'));
    assert.equal(instance.digest('hex'), 'ddea76409c61f6d1873f01a34251c74c37b34f28f7f482a84395b5f3');
  });


  it('produces the expected result for ShortMsgKAT_224 216', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fac523575a99ec48279a7a459e98ff901918a475034327efb55843', 'hex'));
    assert.equal(instance.digest('hex'), '777c523cf42d0006ed1f88f1bd0c3a5ef21814723794b8461a375c3a');
  });


  it('produces the expected result for ShortMsgKAT_224 224', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0f8b2d8fcfd9d68cffc17ccfb117709b53d26462a3f346fb7c79b85e', 'hex'));
    assert.equal(instance.digest('hex'), '8d7474ed6dea4626ad3c1d06d2ad5b198caad07b12077c680cf6d89b');
  });


  it('produces the expected result for ShortMsgKAT_224 232', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a963c3e895ff5a0be4824400518d81412f875fa50521e26e85eac90c04', 'hex'));
    assert.equal(instance.digest('hex'), 'f525d4515d3ca54a2fab9c679e93561fe151ea0960751352cd7f591a');
  });


  it('produces the expected result for ShortMsgKAT_224 240', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('03a18688b10cc0edf83adf0a84808a9718383c4070c6c4f295098699ac2c', 'hex'));
    assert.equal(instance.digest('hex'), '9a8455f41f693b91b3de46bf66ff09d42dc300b856b1dc2dfd12555c');
  });


  it('produces the expected result for ShortMsgKAT_224 248', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('84fb51b517df6c5accb5d022f8f28da09b10232d42320ffc32dbecc3835b29', 'hex'));
    assert.equal(instance.digest('hex'), '81af3a7a5bd4c1f948d6af4b96f93c3b0cf9c0e7a6da6fcd71eec7f6');
  });


  it('produces the expected result for ShortMsgKAT_224 256', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9f2fcc7c90de090d6b87cd7e9718c1ea6cb21118fc2d5de9f97e5db6ac1e9c10', 'hex'));
    assert.equal(instance.digest('hex'), 'a27a051a36a1501974ad8e9873e9df231aa9ad90ec1d7a8bbf8f639a');
  });


  it('produces the expected result for ShortMsgKAT_224 264', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('de8f1b3faa4b7040ed4563c3b8e598253178e87e4d0df75e4ff2f2dedd5a0be046', 'hex'));
    assert.equal(instance.digest('hex'), 'f217812e362ec64d4dc5eacfabc165184bfa456e5c32c2c7900253d0');
  });


  it('produces the expected result for ShortMsgKAT_224 272', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('62f154ec394d0bc757d045c798c8b87a00e0655d0481a7d2d9fb58d93aedc676b5a0', 'hex'));
    assert.equal(instance.digest('hex'), '5ca92b5f5830e1e5f8df4391339df7df1f23bb31aa05437c103f1652');
  });


  it('produces the expected result for ShortMsgKAT_224 280', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b2dcfe9ff19e2b23ce7da2a4207d3e5ec7c6112a8a22aec9675a886378e14e5bfbad4e', 'hex'));
    assert.equal(instance.digest('hex'), '9f01f07d930f40a26407760104efd10d4436295f6b8c41fe2a4e09ea');
  });


  it('produces the expected result for ShortMsgKAT_224 288', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('47f5697ac8c31409c0868827347a613a3562041c633cf1f1f86865a576e02835ed2c2492', 'hex'));
    assert.equal(instance.digest('hex'), '22a3fed1f4e298c37a1d7ba0c80e994b11d95f290f3945a3ceb2e2e6');
  });


  it('produces the expected result for ShortMsgKAT_224 296', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('512a6d292e67ecb2fe486bfe92660953a75484ff4c4f2eca2b0af0edcdd4339c6b2ee4e542', 'hex'));
    assert.equal(instance.digest('hex'), '35f1ab1263211f738d3f97d0e4840c387e09369f23bf9239150d0306');
  });


  it('produces the expected result for ShortMsgKAT_224 304', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('973cf2b4dcf0bfa872b41194cb05bb4e16760a1840d8343301802576197ec19e2a1493d8f4fb', 'hex'));
    assert.equal(instance.digest('hex'), '34cc708b874d40478e82324bf3aa32fe9f85aff8c60b4badf97003e3');
  });


  it('produces the expected result for ShortMsgKAT_224 312', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('80beebcd2e3f8a9451d4499961c9731ae667cdc24ea020ce3b9aa4bbc0a7f79e30a934467da4b0', 'hex'));
    assert.equal(instance.digest('hex'), '5f339b2f87e7f695b236267c819ba1705d97644ad72e0871c7e3a913');
  });


  it('produces the expected result for ShortMsgKAT_224 320', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7abaa12ec2a7347674e444140ae0fb659d08e1c66decd8d6eae925fa451d65f3c0308e29446b8ed3', 'hex'));
    assert.equal(instance.digest('hex'), '8e20d5c83cda8226b58cefd74c293ca7579cbb3949ca9eb2f61565b8');
  });


  it('produces the expected result for ShortMsgKAT_224 328', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c88dee9927679b8af422abcbacf283b904ff31e1cac58c7819809f65d5807d46723b20f67ba610c2b7', 'hex'));
    assert.equal(instance.digest('hex'), '606255348812cfb5082f4d4bb6bbc2feef044e381feb0e346061aa4f');
  });


  it('produces the expected result for ShortMsgKAT_224 336', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('01e43fe350fcec450ec9b102053e6b5d56e09896e0ddd9074fe138e6038210270c834ce6eadc2bb86bf6', 'hex'));
    assert.equal(instance.digest('hex'), 'c885274cc3bf110995fef1154a86772f28b41e745e86e935b4e3a03f');
  });


  it('produces the expected result for ShortMsgKAT_224 344', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('337023370a48b62ee43546f17c4ef2bf8d7ecd1d49f90bab604b839c2e6e5bd21540d29ba27ab8e309a4b7', 'hex'));
    assert.equal(instance.digest('hex'), 'efa7f7e7bffa6a5e7f7d1c24e7a0a9dc9a6f72b3e9550a0aaa06cce6');
  });


  it('produces the expected result for ShortMsgKAT_224 352', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6892540f964c8c74bd2db02c0ad884510cb38afd4438af31fc912756f3efec6b32b58ebc38fc2a6b913596a8', 'hex'));
    assert.equal(instance.digest('hex'), 'aca7dccc6b809d511f4c248caa5d1374e734c1ed6b995760cc3c56d2');
  });


  it('produces the expected result for ShortMsgKAT_224 360', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f5961dfd2b1ffffda4ffbf30560c165bfedab8ce0be525845deb8dc61004b7db38467205f5dcfb34a2acfe96c0', 'hex'));
    assert.equal(instance.digest('hex'), '6f1ef55ccc6ef9b68de54c14448487901022452ab761f84644e9a127');
  });


  it('produces the expected result for ShortMsgKAT_224 368', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ca061a2eb6ceed8881ce2057172d869d73a1951e63d57261384b80ceb5451e77b06cf0f5a0ea15ca907ee1c27eba', 'hex'));
    assert.equal(instance.digest('hex'), 'b297f61ff06021bfe1b9d350b3f54d810bc16ade17001bae1b4cd4a2');
  });


  it('produces the expected result for ShortMsgKAT_224 376', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1743a77251d69242750c4f1140532cd3c33f9b5ccdf7514e8584d4a5f9fbd730bcf84d0d4726364b9bf95ab251d9bb', 'hex'));
    assert.equal(instance.digest('hex'), 'be9a75436c3988fb2fe21d0c10ead9b9c807de2e13a9bd8437f13332');
  });


  it('produces the expected result for ShortMsgKAT_224 384', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d8faba1f5194c4db5f176fabfff856924ef627a37cd08cf55608bba8f1e324d7c7f157298eabc4dce7d89ce5162499f9', 'hex'));
    assert.equal(instance.digest('hex'), '4304582c3892942b1960822c965788b22de19f1c6d5e204476adfd26');
  });


  it('produces the expected result for ShortMsgKAT_224 392', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('be9684be70340860373c9c482ba517e899fc81baaa12e5c6d7727975d1d41ba8bef788cdb5cf4606c9c1c7f61aed59f97d', 'hex'));
    assert.equal(instance.digest('hex'), '0480ef8519c32f89c65b8dd450025ec49cbdada6c4cfcfc6fb4f1c61');
  });


  it('produces the expected result for ShortMsgKAT_224 400', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7e15d2b9ea74ca60f66c8dfab377d9198b7b16deb6a1ba0ea3c7ee2042f89d3786e779cf053c77785aa9e692f821f14a7f51', 'hex'));
    assert.equal(instance.digest('hex'), '0bde9cd50d70f00eed97cce40c3df22bb4904c08c4177c3a95985d97');
  });


  it('produces the expected result for ShortMsgKAT_224 408', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9a219be43713bd578015e9fda66c0f2d83cac563b776ab9f38f3e4f7ef229cb443304fba401efb2bdbd7ece939102298651c86', 'hex'));
    assert.equal(instance.digest('hex'), '3bf3addb761ab32a38b7b47047ad45b68edfd88ed475227447ea1b1e');
  });


  it('produces the expected result for ShortMsgKAT_224 416', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c8f2b693bd0d75ef99caebdc22adf4088a95a3542f637203e283bbc3268780e787d68d28cc3897452f6a22aa8573ccebf245972a', 'hex'));
    assert.equal(instance.digest('hex'), '6182614c8257eb05e9ac0950e15e6044872e5c0ab2af4540764ca0c8');
  });


  it('produces the expected result for ShortMsgKAT_224 424', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ec0f99711016c6a2a07ad80d16427506ce6f441059fd269442baaa28c6ca037b22eeac49d5d894c0bf66219f2c08e9d0e8ab21de52', 'hex'));
    assert.equal(instance.digest('hex'), '0b5dc722eea2c348325fd9b3d7f08f365b71d5b582c27beb79b51d5d');
  });


  it('produces the expected result for ShortMsgKAT_224 432', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0dc45181337ca32a8222fe7a3bf42fc9f89744259cff653504d6051fe84b1a7ffd20cb47d4696ce212a686bb9be9a8ab1c697b6d6a33', 'hex'));
    assert.equal(instance.digest('hex'), '29c2b817c75b6417bc89c262af9d58f0c18fbd991f59f4181f237038');
  });


  it('produces the expected result for ShortMsgKAT_224 440', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('de286ba4206e8b005714f80fb1cdfaebde91d29f84603e4a3ebc04686f99a46c9e880b96c574825582e8812a26e5a857ffc6579f63742f', 'hex'));
    assert.equal(instance.digest('hex'), '62c5876694d88007709b50900ee2e6ca9505cc90067efbf4c1d95b0b');
  });


  it('produces the expected result for ShortMsgKAT_224 448', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('eebcc18057252cbf3f9c070f1a73213356d5d4bc19ac2a411ec8cdeee7a571e2e20eaf61fd0c33a0ffeb297ddb77a97f0a415347db66bcaf', 'hex'));
    assert.equal(instance.digest('hex'), 'd362be7896b2ac3ca4dc3161b7f6c5b3fbe65f32d040402b8d306b15');
  });


  it('produces the expected result for ShortMsgKAT_224 456', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('416b5cdc9fe951bd361bd7abfc120a5054758eba88fdd68fd84e39d3b09ac25497d36b43cbe7b85a6a3cebda8db4e5549c3ee51bb6fcb6ac1e', 'hex'));
    assert.equal(instance.digest('hex'), 'd420c7bdf8d86d7b1cbd1af7868ebc4ff17245595b94959a0714333c');
  });


  it('produces the expected result for ShortMsgKAT_224 464', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5c5faf66f32e0f8311c32e8da8284a4ed60891a5a7e50fb2956b3cbaa79fc66ca376460e100415401fc2b8518c64502f187ea14bfc9503759705', 'hex'));
    assert.equal(instance.digest('hex'), '2e04dae6e3fdf2a47ff40e6f3e61b371f3e51a5864a31cc11d127620');
  });


  it('produces the expected result for ShortMsgKAT_224 472', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7167e1e02be1a7ca69d788666f823ae4eef39271f3c26a5cf7cee05bca83161066dc2e217b330df821103799df6d74810eed363adc4ab99f36046a', 'hex'));
    assert.equal(instance.digest('hex'), '22817a21cfcec4fd2348b6be8a7042a37754d76a3f33a8f818312cc7');
  });


  it('produces the expected result for ShortMsgKAT_224 480', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2fda311dbba27321c5329510fae6948f03210b76d43e7448d1689a063877b6d14c4f6d0eaa96c150051371f7dd8a4119f7da5c483cc3e6723c01fb7d', 'hex'));
    assert.equal(instance.digest('hex'), '68caf2203317a8bed30c1792e888910124f2f0ee1d24d47274bcc856');
  });


  it('produces the expected result for ShortMsgKAT_224 488', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('95d1474a5aab5d2422aca6e481187833a6212bd2d0f91451a67dd786dfc91dfed51b35f47e1deb8a8ab4b9cb67b70179cc26f553ae7b569969ce151b8d', 'hex'));
    assert.equal(instance.digest('hex'), '7bbac0c0f192d2c479348358d2247e4c08966a512f73d40445b52ec7');
  });


  it('produces the expected result for ShortMsgKAT_224 496', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c71bd7941f41df044a2927a8ff55b4b467c33d089f0988aa253d294addbdb32530c0d4208b10d9959823f0c0f0734684006df79f7099870f6bf53211a88d', 'hex'));
    assert.equal(instance.digest('hex'), 'd226d9e1f36ec4222693699b6d0383c1452e391c41efd7645289f8e3');
  });


  it('produces the expected result for ShortMsgKAT_224 504', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f57c64006d9ea761892e145c99df1b24640883da79d9ed5262859dcda8c3c32e05b03d984f1ab4a230242ab6b78d368dc5aaa1e6d3498d53371e84b0c1d4ba', 'hex'));
    assert.equal(instance.digest('hex'), '294a1e5a0629a2736f188691a35fe1abb55472785daff6cd88c6d537');
  });


  it('produces the expected result for ShortMsgKAT_224 512', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e926ae8b0af6e53176dbffcc2a6b88c6bd765f939d3d178a9bde9ef3aa131c61e31c1e42cdfaf4b4dcde579a37e150efbef5555b4c1cb40439d835a724e2fae7', 'hex'));
    assert.equal(instance.digest('hex'), 'c533dcf88cd1a5dff22b914d3875bd57fc17b2e1f474ae360c3877d2');
  });


  it('produces the expected result for ShortMsgKAT_224 520', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('16e8b3d8f988e9bb04de9c96f2627811c973ce4a5296b4772ca3eefeb80a652bdf21f50df79f32db23f9f73d393b2d57d9a0297f7a2f2e79cfda39fa393df1ac00', 'hex'));
    assert.equal(instance.digest('hex'), 'c9b7ad7a32b70dfb5a8a2ff9d98b300e484b996ed752a732d84db6f7');
  });


  it('produces the expected result for ShortMsgKAT_224 528', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fc424eeb27c18a11c01f39c555d8b78a805b88dba1dc2a42ed5e2c0ec737ff68b2456d80eb85e11714fa3f8eabfb906d3c17964cb4f5e76b29c1765db03d91be37fc', 'hex'));
    assert.equal(instance.digest('hex'), 'cf646d5e5c81818c97a01f393f8033ce3cb7ccd07fdac9988766bd1c');
  });


  it('produces the expected result for ShortMsgKAT_224 536', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('abe3472b54e72734bdba7d9158736464251c4f21b33fbbc92d7fac9a35c4e3322ff01d2380cbaa4ef8fb07d21a2128b7b9f5b6d9f34e13f39c7ffc2e72e47888599ba5', 'hex'));
    assert.equal(instance.digest('hex'), 'd411e8a7cf50aaf91076a8cc5f01bf5b6bb2ccae8046bf47871891fd');
  });


  it('produces the expected result for ShortMsgKAT_224 544', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('36f9f0a65f2ca498d739b944d6eff3da5ebba57e7d9c41598a2b0e4380f3cf4b479ec2348d015ffe6256273511154afcf3b4b4bf09d6c4744fdd0f62d75079d440706b05', 'hex'));
    assert.equal(instance.digest('hex'), 'e094c0303d1841c6e4c0864857cf36cfc980e3cb4d78f18e301117c4');
  });


  it('produces the expected result for ShortMsgKAT_224 552', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('abc87763cae1ca98bd8c5b82caba54ac83286f87e9610128ae4de68ac95df5e329c360717bd349f26b872528492ca7c94c2c1e1ef56b74dbb65c2ac351981fdb31d06c77a4', 'hex'));
    assert.equal(instance.digest('hex'), '51948e1772c2c2ee49158d02a975b27477bd041262954c3e60f5acc2');
  });


  it('produces the expected result for ShortMsgKAT_224 560', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('94f7ca8e1a54234c6d53cc734bb3d3150c8ba8c5f880eab8d25fed13793a9701ebe320509286fd8e422e931d99c98da4df7e70ae447bab8cffd92382d8a77760a259fc4fbd72', 'hex'));
    assert.equal(instance.digest('hex'), '8214a2b0e8bb60cd3e4dfb0d0855d0f6c4ba6d2728d0687bdf75f79e');
  });


  it('produces the expected result for ShortMsgKAT_224 568', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('13bd2811f6ed2b6f04ff3895aceed7bef8dcd45eb121791bc194a0f806206bffc3b9281c2b308b1a729ce008119dd3066e9378acdcc50a98a82e20738800b6cddbe5fe9694ad6d', 'hex'));
    assert.equal(instance.digest('hex'), '8a2ae6b9aa7b1e08f8c7dc3bf5ae876660d30f79391714a175381091');
  });


  it('produces the expected result for ShortMsgKAT_224 576', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1eed9cba179a009ec2ec5508773dd305477ca117e6d569e66b5f64c6bc64801ce25a8424ce4a26d575b8a6fb10ead3fd1992edddeec2ebe7150dc98f63adc3237ef57b91397aa8a7', 'hex'));
    assert.equal(instance.digest('hex'), '702b1906a63d0f924afec3bb5e5c5742e85f9834ea6f5306644811a1');
  });


  it('produces the expected result for ShortMsgKAT_224 584', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ba5b67b5ec3a3ffae2c19dd8176a2ef75c0cd903725d45c9cb7009a900c0b0ca7a2967a95ae68269a6dbf8466c7b6844a1d608ac661f7eff00538e323db5f2c644b78b2d48de1a08aa', 'hex'));
    assert.equal(instance.digest('hex'), 'bf2101511220b7dfe54b127c2476eaadfd4eab7fd0f6bdd193078ac8');
  });


  it('produces the expected result for ShortMsgKAT_224 592', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0efa26ac5673167dcacab860932ed612f65ff49b80fa9ae65465e5542cb62075df1c5ae54fba4db807be25b070033efa223bdd5b1d3c94c6e1909c02b620d4b1b3a6c9fed24d70749604', 'hex'));
    assert.equal(instance.digest('hex'), 'b07adbed912723a07fa5353f665ec14ff82d85e90be3e5a1f5c90fff');
  });


  it('produces the expected result for ShortMsgKAT_224 600', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('bbfd933d1fd7bf594ac7f435277dc17d8d5a5b8e4d13d96d2f64e771abbd51a5a8aea741beccbddb177bcea05243ebd003cfdeae877cca4da94605b67691919d8b033f77d384ca01593c1b', 'hex'));
    assert.equal(instance.digest('hex'), 'd1718f0d387ac427111a7e90e575de5f04778ea2ba147a8451914ff0');
  });


  it('produces the expected result for ShortMsgKAT_224 608', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('90078999fd3c35b8afbf4066cbde335891365f0fc75c1286cdd88fa51fab94f9b8def7c9ac582a5dbcd95817afb7d1b48f63704e19c2baa4df347f48d4a6d603013c23f1e9611d595ebac37c', 'hex'));
    assert.equal(instance.digest('hex'), 'faf7d793024e6d05e77c5231712478822c915292fcc1427e6acfd3cf');
  });


  it('produces the expected result for ShortMsgKAT_224 616', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('64105eca863515c20e7cfbaa0a0b8809046164f374d691cdbd6508aaabc1819f9ac84b52bafc1b0fe7cddbc554b608c01c8904c669d8db316a0953a4c68ece324ec5a49ffdb59a1bd6a292aa0e', 'hex'));
    assert.equal(instance.digest('hex'), 'a375d756a8f39c72f67ca489c95f99350ffd0515b151a3bff288caaa');
  });


  it('produces the expected result for ShortMsgKAT_224 624', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d4654be288b9f3b711c2d02015978a8cc57471d5680a092aa534f7372c71ceaab725a383c4fcf4d8deaa57fca3ce056f312961eccf9b86f14981ba5bed6ab5b4498e1f6c82c6cae6fc14845b3c8a', 'hex'));
    assert.equal(instance.digest('hex'), '1bd1b6f3144a3dee93dea1df03c0e958f485b8ae164dcee55f973413');
  });


  it('produces the expected result for ShortMsgKAT_224 632', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('12d9394888305ac96e65f2bf0e1b18c29c90fe9d714dd59f651f52b88b3008c588435548066ea2fc4c101118c91f32556224a540de6efddbca296ef1fb00341f5b01fecfc146bdb251b3bdad556cd2', 'hex'));
    assert.equal(instance.digest('hex'), 'be88b495d0cd90281af2094b8d7e72eb417288ca16f751c09694b682');
  });


  it('produces the expected result for ShortMsgKAT_224 640', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('871a0d7a5f36c3da1dfce57acd8ab8487c274fad336bc137ebd6ff4658b547c1dcfab65f037aa58f35ef16aff4abe77ba61f65826f7be681b5b6d5a1ea8085e2ae9cd5cf0991878a311b549a6d6af230', 'hex'));
    assert.equal(instance.digest('hex'), '7dac046254808464024617d63a038267fe2ca65052bdeb569a0a9c15');
  });


  it('produces the expected result for ShortMsgKAT_224 648', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e90b4ffef4d457bc7711ff4aa72231ca25af6b2e206f8bf859d8758b89a7cd36105db2538d06da83bad5f663ba11a5f6f61f236fd5f8d53c5e89f183a3cec615b50c7c681e773d109ff7491b5cc22296c5', 'hex'));
    assert.equal(instance.digest('hex'), '89f6b320efabe42ce13c9e20e4829f31a7848eee3fc854e603fbd46f');
  });


  it('produces the expected result for ShortMsgKAT_224 656', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e728de62d75856500c4c77a428612cd804f30c3f10d36fb219c5ca0aa30726ab190e5f3f279e0733d77e7267c17be27d21650a9a4d1e32f649627638dbada9702c7ca303269ed14014b2f3cf8b894eac8554', 'hex'));
    assert.equal(instance.digest('hex'), 'a805dbd3b8df5e03e05efffde1b94b35a23c5d77c2797d984e56656f');
  });


  it('produces the expected result for ShortMsgKAT_224 664', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6348f229e7b1df3b770c77544e5166e081850fa1c6c88169db74c76e42eb983facb276ad6a0d1fa7b50d3e3b6fcd799ec97470920a7abed47d288ff883e24ca21c7f8016b93bb9b9e078bdb9703d2b781b616e', 'hex'));
    assert.equal(instance.digest('hex'), 'f05742cc1db422a3113ac49602e8d0dd6cb472e7ed26bce40bba09bd');
  });


  it('produces the expected result for ShortMsgKAT_224 672', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4b127fde5de733a1680c2790363627e63ac8a3f1b4707d982caea258655d9bf18f89afe54127482ba01e08845594b671306a025c9a5c5b6f93b0a39522dc877437be5c2436cbf300ce7ab6747934fcfc30aeaaf6', 'hex'));
    assert.equal(instance.digest('hex'), '45945f867b7e1e75ee496e0fc4aaff71a0cc539841d153439aed4dfc');
  });


  it('produces the expected result for ShortMsgKAT_224 680', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('08461f006cff4cc64b752c957287e5a0faabc05c9bff89d23fd902d324c79903b48fcb8f8f4b01f3e4ddb483593d25f000386698f5ade7faade9615fdc50d32785ea51d49894e45baa3dc707e224688c6408b68b11', 'hex'));
    assert.equal(instance.digest('hex'), '5a8ac7533e1354068b564ccd214eb2a2e097dd60e08bd69fc782b0af');
  });


  it('produces the expected result for ShortMsgKAT_224 688', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('68c8f8849b120e6e0c9969a5866af591a829b92f33cd9a4a3196957a148c49138e1e2f5c7619a6d5edebe995acd81ec8bb9c7b9cfca678d081ea9e25a75d39db04e18d475920ce828b94e72241f24db72546b352a0e4', 'hex'));
    assert.equal(instance.digest('hex'), '059f7eb983362fd44e94e2bfd59cced43cae959c9a483ebd5e6e2036');
  });


  it('produces the expected result for ShortMsgKAT_224 696', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b8d56472954e31fb54e28fca743f84d8dc34891cb564c64b08f7b71636debd64ca1edbdba7fc5c3e40049ce982bba8c7e0703034e331384695e9de76b5104f2fbc4535ecbeebc33bc27f29f18f6f27e8023b0fbb6f563c', 'hex'));
    assert.equal(instance.digest('hex'), '22d62ad272fefc89f73256eaace00c7b8e998fb322c8eb67dc1eac6a');
  });


  it('produces the expected result for ShortMsgKAT_224 704', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0d58ac665fa84342e60cefee31b1a4eacdb092f122dfc68309077aed1f3e528f578859ee9e4cefb4a728e946324927b675cd4f4ac84f64db3dacfe850c1dd18744c74ceccd9fe4dc214085108f404eab6d8f452b5442a47d', 'hex'));
    assert.equal(instance.digest('hex'), 'a396ea905eb612554bd00e4fc1bb4c5247d73fde4bbaf5380ed42dd0');
  });


  it('produces the expected result for ShortMsgKAT_224 712', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1755e2d2e5d1c1b0156456b539753ff416651d44698e87002dcf61dcfa2b4e72f264d9ad591df1fdee7b41b2eb00283c5aebb3411323b672eaa145c5125185104f20f335804b02325b6dea65603f349f4d5d8b782dd3469ccd', 'hex'));
    assert.equal(instance.digest('hex'), 'd8b5b24b9e92326fde5db1058eedbeedb0b65982925734b6e2844036');
  });


  it('produces the expected result for ShortMsgKAT_224 720', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b180de1a611111ee7584ba2c4b020598cd574ac77e404e853d15a101c6f5a2e5c801d7d85dc95286a1804c870bb9f00fd4dcb03aa8328275158819dcad7253f3e3d237aeaa7979268a5db1c6ce08a9ec7c2579783c8afc1f91a7', 'hex'));
    assert.equal(instance.digest('hex'), 'fdb9015b20db446f79575e6b8c73a98eac731cfe2e59bd46dbda0e35');
  });


  it('produces the expected result for ShortMsgKAT_224 728', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cf3583cbdfd4cbc17063b1e7d90b02f0e6e2ee05f99d77e24e560392535e47e05077157f96813544a17046914f9efb64762a23cf7a49fe52a0a4c01c630cfe8727b81fb99a89ff7cc11dca5173057e0417b8fe7a9efba6d95c555f', 'hex'));
    assert.equal(instance.digest('hex'), 'df1b47e73e8cbd2ca852cf58ad68b5f8baa1169c0795961041e8a918');
  });


  it('produces the expected result for ShortMsgKAT_224 736', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('072fc02340ef99115bad72f92c01e4c093b9599f6cfc45cb380ee686cb5eb019e806ab9bd55e634ab10aa62a9510cc0672cd3eddb589c7df2b67fcd3329f61b1a4441eca87a33c8f55da4fbbad5cf2b2527b8e983bb31a2fadec7523', 'hex'));
    assert.equal(instance.digest('hex'), '1e8a90918d6ead31e446d4ee2673871ecc5c7da9b18ed511e1632e0d');
  });


  it('produces the expected result for ShortMsgKAT_224 744', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('76eecf956a52649f877528146de33df249cd800e21830f65e90f0f25ca9d6540fde40603230eca6760f1139c7f268deba2060631eea92b1fff05f93fd5572fbe29579ecd48bc3a8d6c2eb4a6b26e38d6c5fbf2c08044aeea470a8f2f26', 'hex'));
    assert.equal(instance.digest('hex'), '1060afd1e1b9f7f41291a4861774b3b0c95a812788a41d7ebef4a893');
  });


  it('produces the expected result for ShortMsgKAT_224 752', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7adc0b6693e61c269f278e6944a5a2d8300981e40022f839ac644387bfac9086650085c2cdc585fea47b9d2e52d65a2b29a7dc370401ef5d60dd0d21f9e2b90fae919319b14b8c5565b0423cefb827d5f1203302a9d01523498a4db10374', 'hex'));
    assert.equal(instance.digest('hex'), 'ea91edc393491b4cbc035b8538df08e3c6b8cad18338053c81fe2e08');
  });


  it('produces the expected result for ShortMsgKAT_224 760', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e1fffa9826cce8b86bccefb8794e48c46cdf372013f782eced1e378269b7be2b7bf51374092261ae120e822be685f2e7a83664bcfbe38fe8633f24e633ffe1988e1bc5acf59a587079a57a910bda60060e85b5f5b6f776f0529639d9cce4bd', 'hex'));
    assert.equal(instance.digest('hex'), 'df1af149e5c92cb29174c1edb6ed891ebce4366010dc7cbfc9b1d757');
  });


  it('produces the expected result for ShortMsgKAT_224 768', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('69f9abba65592ee01db4dce52dbab90b08fc04193602792ee4daa263033d59081587b09bbe49d0b49c9825d22840b2ff5d9c5155f975f8f2c2e7a90c75d2e4a8040fe39f63bbafb403d9e28cc3b86e04e394a9c9e8065bd3c85fa9f0c7891600', 'hex'));
    assert.equal(instance.digest('hex'), '5f698408bff0246b05bad96cb342b2fd2f11b6804ef2fa07a81b0920');
  });


  it('produces the expected result for ShortMsgKAT_224 776', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('38a10a352ca5aedfa8e19c64787d8e9c3a75dbf3b8674bfab29b5dbfc15a63d10fae66cd1a6e6d2452d557967eaad89a4c98449787b0b3164ca5b717a93f24eb0b506ceb70cbbcb8d72b2a72993f909aad92f044e0b5a2c9ac9cb16a0ca2f81f49', 'hex'));
    assert.equal(instance.digest('hex'), 'ebe6d61e8a946e0d45d3889f9e360acd3a1a7d6c4b1307448e6e7357');
  });


  it('produces the expected result for ShortMsgKAT_224 784', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6d8c6e449bc13634f115749c248c17cd148b72157a2c37bf8969ea83b4d6ba8c0ee2711c28ee11495f43049596520ce436004b026b6c1f7292b9c436b055cbb72d530d860d1276a1502a5140e3c3f54a93663e4d20edec32d284e25564f624955b52', 'hex'));
    assert.equal(instance.digest('hex'), '1b7f6bcb2271ac9c3b558e95f85285ee756b03b767a01ac57d7c6e94');
  });


  it('produces the expected result for ShortMsgKAT_224 792', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6efcbcaf451c129dbe00b9cef0c3749d3ee9d41c7bd500ade40cdc65dedbbbadb885a5b14b32a0c0d087825201e303288a733842fa7e599c0c514e078f05c821c7a4498b01c40032e9f1872a1c925fa17ce253e8935e4c3c71282242cb716b2089ccc1', 'hex'));
    assert.equal(instance.digest('hex'), '436d1bcd6b3de2677a72b93e2cedb60c84a4fe125a802e2997eb2e67');
  });


  it('produces the expected result for ShortMsgKAT_224 800', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('433c5303131624c0021d868a30825475e8d0bd3052a022180398f4ca4423b98214b6beaac21c8807a2c33f8c93bd42b092cc1b06cedf3224d5ed1ec29784444f22e08a55aa58542b524b02cd3d5d5f6907afe71c5d7462224a3f9d9e53e7e0846dcbb4ce', 'hex'));
    assert.equal(instance.digest('hex'), '62b10f1b6236ebc2da72957742a8d4e48e213b5f8934604bfd4d2c3a');
  });


  it('produces the expected result for ShortMsgKAT_224 808', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a873e0c67ca639026b6683008f7aa6324d4979550e9bce064ca1e1fb97a30b147a24f3f666c0a72d71348ede701cf2d17e2253c34d1ec3b647dbcef2f879f4eb881c4830b791378c901eb725ea5c172316c6d606e0af7df4df7f76e490cd30b2badf45685f', 'hex'));
    assert.equal(instance.digest('hex'), '1186bea0880d0a96f6a56bbb431f4d264838bb0180dcf66ef0b599ca');
  });


  it('produces the expected result for ShortMsgKAT_224 816', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('006917b64f9dcdf1d2d87c8a6173b64f6587168e80faa80f82d84f60301e561e312d9fbce62f39a6fb476e01e925f26bcc91de621449be6504c504830aae394096c8fc7694651051365d4ee9070101ec9b68086f2ea8f8ab7b811ea8ad934d5c9b62c60a4771', 'hex'));
    assert.equal(instance.digest('hex'), '383d2f41ecfda5994e815432999d192e1a282ff5663196a4a268a67d');
  });


  it('produces the expected result for ShortMsgKAT_224 824', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f13c972c52cb3cc4a4df28c97f2df11ce089b815466be88863243eb318c2adb1a417cb1041308598541720197b9b1cb5ba2318bd5574d1df2174af14884149ba9b2f446d609df240ce335599957b8ec80876d9a085ae084907bc5961b20bf5f6ca58d5dab38adb', 'hex'));
    assert.equal(instance.digest('hex'), 'e2594a633b2dc671fd0ddfd3bf7238332c425520827c524fb0e19778');
  });


  it('produces the expected result for ShortMsgKAT_224 832', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e35780eb9799ad4c77535d4ddb683cf33ef367715327cf4c4a58ed9cbdcdd486f669f80189d549a9364fa82a51a52654ec721bb3aab95dceb4a86a6afa93826db923517e928f33e3fba850d45660ef83b9876accafa2a9987a254b137c6e140a21691e1069413848', 'hex'));
    assert.equal(instance.digest('hex'), '234764aae8c39b1571d7741bb176ff86246070ec9ac97a1b2eb35472');
  });


  it('produces the expected result for ShortMsgKAT_224 840', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('64ec021c9585e01ffe6d31bb50d44c79b6993d72678163db474947a053674619d158016adb243f5c8d50aa92f50ab36e579ff2dabb780a2b529370daa299207cfbcdd3a9a25006d19c4f1fe33e4b1eaec315d8c6ee1e730623fd1941875b924eb57d6d0c2edc4e78d6', 'hex'));
    assert.equal(instance.digest('hex'), 'a634d7ebaa2bc0043eb5e237690e38ff1e05ee5a042882a233a2d92a');
  });


  it('produces the expected result for ShortMsgKAT_224 848', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5954bab512cf327d66b5d9f296180080402624ad7628506b555eea8382562324cf452fba4a2130de3e165d11831a270d9cb97ce8c2d32a96f50d71600bb4ca268cf98e90d6496b0a6619a5a8c63db6d8a0634dfc6c7ec8ea9c006b6c456f1b20cd19e781af20454ac880', 'hex'));
    assert.equal(instance.digest('hex'), 'ef03fbb1ef3296eecfb98909e416d113b5741e44962ec57993c6da5d');
  });


  it('produces the expected result for ShortMsgKAT_224 856', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('03d9f92b2c565709a568724a0aff90f8f347f43b02338f94a03ed32e6f33666ff5802da4c81bdce0d0e86c04afd4edc2fc8b4141c2975b6f07639b1994c973d9a9afce3d9d365862003498513bfa166d2629e314d97441667b007414e739d7febf0fe3c32c17aa188a8683', 'hex'));
    assert.equal(instance.digest('hex'), '210d245cc8b5a7b4c1b118a9890ecddc34a66ea92805b7a7c19a944a');
  });


  it('produces the expected result for ShortMsgKAT_224 864', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f31e8b4f9e0621d531d22a380be5d9abd56faec53cbd39b1fab230ea67184440e5b1d15457bd25f56204fa917fa48e669016cb48c1ffc1e1e45274b3b47379e00a43843cf8601a5551411ec12503e5aac43d8676a1b2297ec7a0800dbfee04292e937f21c005f17411473041', 'hex'));
    assert.equal(instance.digest('hex'), '517bae010715a020435cfdb531b856c5704e0ec611360f60d5b76161');
  });


  it('produces the expected result for ShortMsgKAT_224 872', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('758ea3fea738973db0b8be7e599bbef4519373d6e6dcd7195ea885fc991d896762992759c2a09002912fb08e0cb5b76f49162aeb8cf87b172cf3ad190253df612f77b1f0c532e3b5fc99c2d31f8f65011695a087a35ee4eee5e334c369d8ee5d29f695815d866da99df3f79403', 'hex'));
    assert.equal(instance.digest('hex'), '79d478b4bc5e6fc2d406bb1c3834a5ce397a88e80135f55d8fe32c5e');
  });


  it('produces the expected result for ShortMsgKAT_224 880', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('47c6e0c2b74948465921868804f0f7bd50dd323583dc784f998a93cd1ca4c6ef84d41dc81c2c40f34b5bee6a93867b3bdba0052c5f59e6f3657918c382e771d33109122cc8bb0e1e53c4e3d13b43ce44970f5e0c079d2ad7d7a3549cd75760c21bb15b447589e86e8d76b1e9ced2', 'hex'));
    assert.equal(instance.digest('hex'), 'f7ba7a56afc1c58e62841c3b98f5677199f24b534b0d52d9a5c95495');
  });


  it('produces the expected result for ShortMsgKAT_224 888', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f690a132ab46b28edfa6479283d6444e371c6459108afd9c35dbd235e0b6b6ff4c4ea58e7554bd002460433b2164ca51e868f7947d7d7a0d792e4abf0be5f450853cc40d85485b2b8857ea31b5ea6e4ccfa2f3a7ef3380066d7d8979fdac618aad3d7e886dea4f005ae4ad05e5065f', 'hex'));
    assert.equal(instance.digest('hex'), '78a90b769e9a326c93d5a6a6105aee031dceb2c8d222b36e02f27db6');
  });


  it('produces the expected result for ShortMsgKAT_224 896', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('58d6a99bc6458824b256916770a8417040721cccfd4b79eacd8b65a3767ce5ba7e74104c985ac56b8cc9aebd16febd4cda5adb130b0ff2329cc8d611eb14dac268a2f9e633c99de33997fea41c52a7c5e1317d5b5daed35eba7d5a60e45d1fa7eaabc35f5c2b0a0f2379231953322c4e', 'hex'));
    assert.equal(instance.digest('hex'), '3d9d5c2fd2f60f4bb89e11fd3bc2fbd65602eb3f3f38d6fa03bdce2c');
  });


  it('produces the expected result for ShortMsgKAT_224 904', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('befab574396d7f8b6705e2d5b58b2c1c820bb24e3f4bae3e8fbcd36dbf734ee14e5d6ab972aedd3540235466e825850ee4c512ea9795abfd33f330d9fd7f79e62bbb63a6ea85de15beaeea6f8d204a28956059e2632d11861dfb0e65bc07ac8a159388d5c3277e227286f65ff5e5b5aec1', 'hex'));
    assert.equal(instance.digest('hex'), 'e1fabe16152560387fadad3324cbb94d8af968786c3c994c8f926d32');
  });


  it('produces the expected result for ShortMsgKAT_224 912', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8e58144fa9179d686478622ce450c748260c95d1ba43b8f9b59abeca8d93488da73463ef40198b4d16fb0b0707201347e0506ff19d01bea0f42b8af9e71a1f1bd168781069d4d338fdef00bf419fbb003031df671f4a37979564f69282de9c65407847dd0da505ab1641c02dea4f0d834986', 'hex'));
    assert.equal(instance.digest('hex'), 'cef84f1966215b1511f5e0db564d6827898184fbcb88be0213fc563f');
  });


  it('produces the expected result for ShortMsgKAT_224 920', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b55c10eae0ec684c16d13463f29291bf26c82e2fa0422a99c71db4af14dd9c7f33eda52fd73d017cc0f2dbe734d831f0d820d06d5f89dacc485739144f8cfd4799223b1aff9031a105cb6a029ba71e6e5867d85a554991c38df3c9ef8c1e1e9a7630be61caabca69280c399c1fb7a12d12aefc', 'hex'));
    assert.equal(instance.digest('hex'), '8e4b5a2b79fc1e7d0526aacb5b9ac01a569635644c9249dffee3b927');
  });


  it('produces the expected result for ShortMsgKAT_224 928', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2eeea693f585f4ed6f6f8865bbae47a6908aecd7c429e4bec4f0de1d0ca0183fa201a0cb14a529b7d7ac0e6ff6607a3243ee9fb11bcf3e2304fe75ffcddd6c5c2e2a4cd45f63c962d010645058d36571404a6d2b4f44755434d76998e83409c3205aa1615db44057db991231d2cb42624574f545', 'hex'));
    assert.equal(instance.digest('hex'), 'baff55cdad66aa77ad677e13a138b2f17286b504ea6b94effd9d9a95');
  });


  it('produces the expected result for ShortMsgKAT_224 936', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('dab11dc0b047db0420a585f56c42d93175562852428499f66a0db811fcdddab2f7cdffed1543e5fb72110b64686bc7b6887a538ad44c050f1e42631bc4ec8a9f2a047163d822a38989ee4aab01b4c1f161b062d873b1cfa388fd301514f62224157b9bef423c7783b7aac8d30d65cd1bba8d689c2d', 'hex'));
    assert.equal(instance.digest('hex'), 'b4efbe1167755f5a75b72cf15e0601662d036a16cac8602a909fb328');
  });


  it('produces the expected result for ShortMsgKAT_224 944', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('42e99a2f80aee0e001279a2434f731e01d34a44b1a8101726921c0590c30f3120eb83059f325e894a5ac959dca71ce2214799916424e859d27d789437b9d27240bf8c35adbafcecc322b48aa205b293962d858652abacbd588bcf6cbc388d0993bd622f96ed54614c25b6a9aa527589eaaffcf17ddf7', 'hex'));
    assert.equal(instance.digest('hex'), 'fa4bb608f8f60841e1189f8770051695cdc9935bda7187c36419228a');
  });


  it('produces the expected result for ShortMsgKAT_224 952', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3c9b46450c0f2cae8e3823f8bdb4277f31b744ce2eb17054bddc6dff36af7f49fb8a2320cc3bdf8e0a2ea29ad3a55de1165d219adeddb5175253e2d1489e9b6fdd02e2c3d3a4b54d60e3a47334c37913c5695378a669e9b72dec32af5434f93f46176ebf044c4784467c700470d0c0b40c8a088c815816', 'hex'));
    assert.equal(instance.digest('hex'), 'b3a877231519c24e2efa424e6057128ea105b54c65e58074b5b1583c');
  });


  it('produces the expected result for ShortMsgKAT_224 960', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d1e654b77cb155f5c77971a64df9e5d34c26a3cad6c7f6b300d39deb1910094691adaa095be4ba5d86690a976428635d5526f3e946f7dc3bd4dbc78999e653441187a81f9adcd5a3c5f254bc8256b0158f54673dcc1232f6e918ebfc6c51ce67eaeb042d9f57eec4bfe910e169af78b3de48d137df4f2840', 'hex'));
    assert.equal(instance.digest('hex'), '9f385c0b645db8db8b73c98c40be264ffee6151c7b5a0964e67daa9f');
  });


  it('produces the expected result for ShortMsgKAT_224 968', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('626f68c18a69a6590159a9c46be03d5965698f2dac3de779b878b3d9c421e0f21b955a16c715c1ec1e22ce3eb645b8b4f263f60660ea3028981eebd6c8c3a367285b691c8ee56944a7cd1217997e1d9c21620b536bdbd5de8925ff71dec6fbc06624ab6b21e329813de90d1e572dfb89a18120c3f606355d25', 'hex'));
    assert.equal(instance.digest('hex'), 'bd6c865993082ec7b3808c13fd140fe0c0667b3ee51b9f8f1f4dffd8');
  });


  it('produces the expected result for ShortMsgKAT_224 976', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('651a6fb3c4b80c7c68c6011675e6094eb56abf5fc3057324ebc6477825061f9f27e7a94633abd1fa598a746e4a577caf524c52ec1788471f92b8c37f23795ca19d559d446cab16cbcdce90b79fa1026cee77bf4ab1b503c5b94c2256ad75b3eac6fd5dcb96aca4b03a834bfb4e9af988cecbf2ae597cb9097940', 'hex'));
    assert.equal(instance.digest('hex'), '8ca844acfcaabd3b969f86c2f1ecdf1620574ec8c24426be2dcc1bb5');
  });


  it('produces the expected result for ShortMsgKAT_224 984', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8aaf072fce8a2d96bc10b3c91c809ee93072fb205ca7f10abd82ecd82cf040b1bc49ea13d1857815c0e99781de3adbb5443ce1c897e55188ceaf221aa9681638de05ae1b322938f46bce51543b57ecdb4c266272259d1798de13be90e10efec2d07484d9b21a3870e2aa9e06c21aa2d0c9cf420080a80a91dee16f', 'hex'));
    assert.equal(instance.digest('hex'), 'e8d549ff8d53745a4c5c75bdad92314025da877a77ce49ea134840fa');
  });


  it('produces the expected result for ShortMsgKAT_224 992', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('53f918fd00b1701bd504f8cdea803acca21ac18c564ab90c2a17da592c7d69688f6580575395551e8cd33e0fef08ca6ed4588d4d140b3e44c032355df1c531564d7f4835753344345a6781e11cd5e095b73df5f82c8ae3ad00877936896671e947cc52e2b29dcd463d90a0c9929128da222b5a211450bbc0e02448e2', 'hex'));
    assert.equal(instance.digest('hex'), 'e6bd80787f8704fff73112e8b368adfba3a1109162c769491349dcef');
  });


  it('produces the expected result for ShortMsgKAT_224 1000', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a64599b8a61b5ccec9e67aed69447459c8da3d1ec6c7c7c82a7428b9b584fa67e90f68e2c00fbbed4613666e5168da4a16f395f7a3c3832b3b134bfc9cbaa95d2a0fe252f44ac6681eb6d40ab91c1d0282fed6701c57463d3c5f2bb8c6a7301fb4576aa3b5f15510db8956ff77478c26a7c09bea7b398cfc83503f538e', 'hex'));
    assert.equal(instance.digest('hex'), 'bd7d9e6cf9d2c1030f892533e01b72b5288e174b0864d81d71f8c6e6');
  });


  it('produces the expected result for ShortMsgKAT_224 1008', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0e3ab0e054739b00cdb6a87bd12cae024b54cb5e550e6c425360c2e87e59401f5ec24ef0314855f0f56c47695d56a7fb1417693af2a1ed5291f2fee95f75eed54a1b1c2e81226fbff6f63ade584911c71967a8eb70933bc3f5d15bc91b5c2644d9516d3c3a8c154ee48e118bd1442c043c7a0dba5ac5b1d5360aae5b9065', 'hex'));
    assert.equal(instance.digest('hex'), 'a5312e8c7f0a3594a8ecd1abc5cbc14b2585f0b1fe32a4e1fa0a2e25');
  });


  it('produces the expected result for ShortMsgKAT_224 1016', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a62fc595b4096e6336e53fcdfc8d1cc175d71dac9d750a6133d23199eaac288207944cea6b16d27631915b4619f743da2e30a0c00bbdb1bbb35ab852ef3b9aec6b0a8dcc6e9e1abaa3ad62ac0a6c5de765de2c3711b769e3fde44a74016fff82ac46fa8f1797d3b2a726b696e3dea5530439acee3a45c2a51bc32dd055650b', 'hex'));
    assert.equal(instance.digest('hex'), '2e0d739386aaaf37980ee421aa8c19b19af52e70f59dc0a6988471f5');
  });


  it('produces the expected result for ShortMsgKAT_224 1024', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2b6db7ced8665ebe9deb080295218426bdaa7c6da9add2088932cdffbaa1c14129bccdd70f369efb149285858d2b1d155d14de2fdb680a8b027284055182a0cae275234cc9c92863c1b4ab66f304cf0621cd54565f5bff461d3b461bd40df28198e3732501b4860eadd503d26d6e69338f4e0456e9e9baf3d827ae685fb1d817', 'hex'));
    assert.equal(instance.digest('hex'), 'af3e0cc6e64501f10fd39722e852355fd6d80d32190631e2f06c22ad');
  });


  it('produces the expected result for ShortMsgKAT_224 1032', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('10db509b2cdcaba6c062ae33be48116a29eb18e390e1bbada5ca0a2718afbcd23431440106594893043cc7f2625281bf7de2655880966a23705f0c5155c2f5cca9f2c2142e96d0a2e763b70686cd421b5db812daced0c6d65035fde558e94f26b3e6dde5bd13980cc80292b723013bd033284584bff27657871b0cf07a849f4ae2', 'hex'));
    assert.equal(instance.digest('hex'), 'f009e05d1afe2d33d2c5f4008b46f31468a7bf5299d4f0ab0efe4fd3');
  });


  it('produces the expected result for ShortMsgKAT_224 1040', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9334de60c997bda6086101a6314f64e4458f5ff9450c509df006e8c547983c651ca97879175aaba0c539e82d05c1e02c480975cbb30118121061b1ebac4f8d9a3781e2db6b18042e01ecf9017a64a0e57447ec7fcbe6a7f82585f7403ee2223d52d37b4bf426428613d6b4257980972a0acab508a7620c1cb28eb4e9d30fc41361ec', 'hex'));
    assert.equal(instance.digest('hex'), '76281bd1613843a3adbcbc78d1923afb5b8aa2dcbc48934deec84aaa');
  });


  it('produces the expected result for ShortMsgKAT_224 1048', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e88ab086891693aa535ceb20e64c7ab97c7dd3548f3786339897a5f0c39031549ca870166e477743ccfbe016b4428d89738e426f5ffe81626137f17aecff61b72dbee2dc20961880cfe281dfab5ee38b1921881450e16032de5e4d55ad8d4fca609721b0692bac79be5a06e177fe8c80c0c83519fb3347de9f43d5561cb8107b9b5edc', 'hex'));
    assert.equal(instance.digest('hex'), 'da7c79e04fca2b69aaa58199ca69105b6b18fe67e29f380501aa7fa8');
  });


  it('produces the expected result for ShortMsgKAT_224 1056', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fd19e01a83eb6ec810b94582cb8fbfa2fcb992b53684fb748d2264f020d3b960cb1d6b8c348c2b54a9fcea72330c2aaa9a24ecdb00c436abc702361a82bb8828b85369b8c72ece0082fe06557163899c2a0efa466c33c04343a839417057399a63a3929be1ee4805d6ce3e5d0d0967fe9004696a5663f4cac9179006a2ceb75542d75d68', 'hex'));
    assert.equal(instance.digest('hex'), '70ecb261757371a282903c696715dc03f106a339f076203bab436e94');
  });


  it('produces the expected result for ShortMsgKAT_224 1064', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('59ae20b6f7e0b3c7a989afb28324a40fca25d8651cf1f46ae383ef6d8441587aa1c04c3e3bf88e8131ce6145cfb8973d961e8432b202fa5af3e09d625faad825bc19da9b5c6c20d02abda2fcc58b5bd3fe507bf201263f30543819510c12bc23e2ddb4f711d087a86edb1b355313363a2de996b891025e147036087401ccf3ca7815bf3c49', 'hex'));
    assert.equal(instance.digest('hex'), '740d3cb455133173ec652aa04709ef0f549f19a9d4cc6bec9e876b5a');
  });


  it('produces the expected result for ShortMsgKAT_224 1072', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('77ee804b9f3295ab2362798b72b0a1b2d3291dceb8139896355830f34b3b328561531f8079b79a6e9980705150866402fdc176c05897e359a6cb1a7ab067383eb497182a7e5aef7038e4c96d133b2782917417e391535b5e1b51f47d8ed7e4d4025fe98dc87b9c1622614bff3d1029e68e372de719803857ca52067cddaad958951cb2068cc6', 'hex'));
    assert.equal(instance.digest('hex'), '663835a81a2a38d5ad3a37bd9bc96618d27ca32286e9091834a0871a');
  });


  it('produces the expected result for ShortMsgKAT_224 1080', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b771d5cef5d1a41a93d15643d7181d2a2ef0a8e84d91812f20ed21f147bef732bf3a60ef4067c3734b85bc8cd471780f10dc9e8291b58339a677b960218f71e793f2797aea349406512829065d37bb55ea796fa4f56fd8896b49b2cd19b43215ad967c712b24e5032d065232e02c127409d2ed4146b9d75d763d52db98d949d3b0fed6a8052fbb', 'hex'));
    assert.equal(instance.digest('hex'), '2594153ac2de681f4dee340fa344ec388773a377d5b89e503254fd2e');
  });


  it('produces the expected result for ShortMsgKAT_224 1088', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b32d95b0b9aad2a8816de6d06d1f86008505bd8c14124f6e9a163b5a2ade55f835d0ec3880ef50700d3b25e42cc0af050ccd1be5e555b23087e04d7bf9813622780c7313a1954f8740b6ee2d3f71f768dd417f520482bd3a08d4f222b4ee9dbd015447b33507dd50f3ab4247c5de9a8abd62a8decea01e3b87c8b927f5b08beb37674c6f8e380c04', 'hex'));
    assert.equal(instance.digest('hex'), '42275c296937745758ff2b7bee9a897191ae87e42bd10198d9466c19');
  });


  it('produces the expected result for ShortMsgKAT_224 1096', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('04410e31082a47584b406f051398a6abe74e4da59bb6f85e6b49e8a1f7f2ca00dfba5462c2cd2bfde8b64fb21d70c083f11318b56a52d03b81cac5eec29eb31bd0078b6156786da3d6d8c33098c5c47bb67ac64db14165af65b44544d806dde5f487d5373c7f9792c299e9686b7e5821e7c8e2458315b996b5677d926dac57b3f22da873c601016a0d', 'hex'));
    assert.equal(instance.digest('hex'), '143f9055eb1f736729c77721fb65ed5ee142f6e969132fb22989c11f');
  });


  it('produces the expected result for ShortMsgKAT_224 1104', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8b81e9badde026f14d95c019977024c9e13db7a5cd21f9e9fc491d716164bbacdc7060d882615d411438aea056c340cdf977788f6e17d118de55026855f93270472d1fd18b9e7e812bae107e0dfde7063301b71f6cfe4e225cab3b232905a56e994f08ee2891ba922d49c3dafeb75f7c69750cb67d822c96176c46bd8a29f1701373fb09a1a6e3c7158f', 'hex'));
    assert.equal(instance.digest('hex'), '449a0313ccab4427032b6be9d66f827ffb4c71b538b2104f9d14d14a');
  });


  it('produces the expected result for ShortMsgKAT_224 1112', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fa6eed24da6666a22208146b19a532c2ec9ba94f09f1def1e7fc13c399a48e41acc2a589d099276296348f396253b57cb0e40291bd282773656b6e0d8bea1cda084a3738816a840485fcf3fb307f777fa5feac48695c2af4769720258c77943fb4556c362d9cba8bf103aeb9034baa8ea8bfb9c4f8e6742ce0d52c49ea8e974f339612e830e9e7a9c29065', 'hex'));
    assert.equal(instance.digest('hex'), '21e2760644a19ed18ed0cd74c4e4c071d770132ad215eb6f7d42b01d');
  });


  it('produces the expected result for ShortMsgKAT_224 1120', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9bb4af1b4f09c071ce3cafa92e4eb73ce8a6f5d82a85733440368dee4eb1cbc7b55ac150773b6fe47dbe036c45582ed67e23f4c74585dab509df1b83610564545642b2b1ec463e18048fc23477c6b2aa035594ecd33791af6af4cbc2a1166aba8d628c57e707f0b0e8707caf91cd44bdb915e0296e0190d56d33d8dde10b5b60377838973c1d943c22ed335e', 'hex'));
    assert.equal(instance.digest('hex'), 'd5534c72be2e4b1faaa813118b0d29dbb86f624067ea34515afa08be');
  });


  it('produces the expected result for ShortMsgKAT_224 1128', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2167f02118cc62043e9091a647cadbed95611a521fe0d64e8518f16c808ab297725598ae296880a773607a798f7c3cfce80d251ebec6885015f9abf7eaabae46798f82cb5926de5c23f44a3f9f9534b3c6f405b5364c2f8a8bdc5ca49c749bed8ce4ba48897062ae8424ca6dde5f55c0e42a95d1e292ca54fb46a84fbc9cd87f2d0c9e7448de3043ae22fdd229', 'hex'));
    assert.equal(instance.digest('hex'), 'c0cd413b1ce000a1bbe3a2cd103c7f8f95925ac6c8a5c922afb5f96d');
  });


  it('produces the expected result for ShortMsgKAT_224 1136', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('94b7fa0bc1c44e949b1d7617d31b4720cbe7ca57c6fa4f4094d4761567e389ecc64f6968e4064df70df836a47d0c713336b5028b35930d29eb7a7f9a5af9ad5cf441745baec9bb014ceeff5a41ba5c1ce085feb980bab9cf79f2158e03ef7e63e29c38d7816a84d4f71e0f548b7fc316085ae38a060ff9b8dec36f91ad9ebc0a5b6c338cbb8f6659d342a24368cf', 'hex'));
    assert.equal(instance.digest('hex'), '93c6bf585e994b1669184ac71dc8e772b53443e668da0786d528090b');
  });


  it('produces the expected result for ShortMsgKAT_224 1144', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ea40e83cb18b3a242c1ecc6ccd0b7853a439dab2c569cfc6dc38a19f5c90acbf76aef9ea3742ff3b54ef7d36eb7ce4ff1c9ab3bc119cff6be93c03e208783335c0ab8137be5b10cdc66ff3f89a1bddc6a1eed74f504cbe7290690bb295a872b9e3fe2cee9e6c67c41db8efd7d863cf10f840fe618e7936da3dca5ca6df933f24f6954ba0801a1294cd8d7e66dfafec', 'hex'));
    assert.equal(instance.digest('hex'), 'bfe15bb51f680f2f489f0fdeb32f271090a09d1563f29feaf92104e0');
  });


  it('produces the expected result for ShortMsgKAT_224 1152', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('157d5b7e4507f66d9a267476d33831e7bb768d4d04cc3438da12f9010263ea5fcafbde2579db2f6b58f911d593d5f79fb05fe3596e3fa80ff2f761d1b0e57080055c118c53e53cdb63055261d7c9b2b39bd90acc32520cbbdbda2c4fd8856dbcee173132a2679198daf83007a9b5c51511ae49766c792a29520388444ebefe28256fb33d4260439cba73a9479ee00c63', 'hex'));
    assert.equal(instance.digest('hex'), '6d735fb7579135f61b771b2bb0d81514cde9c977accf6feaf6edebf0');
  });


  it('produces the expected result for ShortMsgKAT_224 1160', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('836b34b515476f613fe447a4e0c3f3b8f20910ac89a3977055c960d2d5d2b72bd8acc715a9035321b86703a411dde0466d58a59769672aa60ad587b8481de4bba552a1645779789501ec53d540b904821f32b0bd1855b04e4848f9f8cfe9ebd8911be95781a759d7ad9724a7102dbe576776b7c632bc39b9b5e19057e226552a5994c1dbb3b5c7871a11f5537011044c53', 'hex'));
    assert.equal(instance.digest('hex'), '6d93153145904cebe0e8a66c272bedf4f0d0a3c53ab30264135431a7');
  });


  it('produces the expected result for ShortMsgKAT_224 1168', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cc7784a4912a7ab5ad3620aab29ba87077cd3cb83636adc9f3dc94f51edf521b2161ef108f21a0a298557981c0e53ce6ced45bdf782c1ef200d29bab81dd6460586964edab7cebdbbec75fd7925060f7da2b853b2b089588fa0f8c16ec6498b14c55dcee335cb3a91d698e4d393ab8e8eac0825f8adebeee196df41205c011674e53426caa453f8de1cbb57932b0b741d4c6', 'hex'));
    assert.equal(instance.digest('hex'), 'afe30535675a7021bf618941d94ddffccefcaa1ef06cde306d5d7a75');
  });


  it('produces the expected result for ShortMsgKAT_224 1176', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7639b461fff270b2455ac1d1afce782944aea5e9087eb4a39eb96bb5c3baaf0e868c8526d3404f9405e79e77bfac5ffb89bf1957b523e17d341d7323c302ea7083872dd5e8705694acdda36d5a1b895aaa16eca6104c82688532c8bfe1790b5dc9f4ec5fe95baed37e1d287be710431f1e5e8ee105bc42ed37d74b1e55984bf1c09fe6a1fa13ef3b96faeaed6a2a1950a12153', 'hex'));
    assert.equal(instance.digest('hex'), '916501614891bd99400a8aeaabf69326fa98b833aed82386ab19e507');
  });


  it('produces the expected result for ShortMsgKAT_224 1184', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('eb6513fc61b30cfba58d4d7e80f94d14589090cf1d80b1df2e68088dc6104959ba0d583d585e9578ab0aec0cf36c48435eb52ed9ab4bbce7a5abe679c97ae2dbe35e8cc1d45b06dda3cf418665c57cbee4bbb47fa4caf78f4ee656fec237fe4eebbafa206e1ef2bd0ee4ae71bd0e9b2f54f91daadf1febfd7032381d636b733dcb3bf76fb14e23aff1f68ed3dbcf75c9b99c6f26', 'hex'));
    assert.equal(instance.digest('hex'), '9c3759905e47e49cc7057c9237545d444f758535f991f7e8728f3a51');
  });


  it('produces the expected result for ShortMsgKAT_224 1192', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1594d74bf5dde444265d4c04dad9721ff3e34cbf622daf341fe16b96431f6c4df1f760d34f296eb97d98d560ad5286fec4dce1724f20b54fd7df51d4bf137add656c80546fb1bf516d62ee82baa992910ef4cc18b70f3f8698276fcfb44e0ec546c2c39cfd8ee91034ff9303058b4252462f86c823eb15bf481e6b79cc3a02218595b3658e8b37382bd5048eaed5fd02c37944e73b', 'hex'));
    assert.equal(instance.digest('hex'), '733acdf9ced47f2e43936ed6c2ac0f824f4f5b5d2942522d4de5f6fc');
  });


  it('produces the expected result for ShortMsgKAT_224 1200', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4cfa1278903026f66fedd41374558be1b585d03c5c55dac94361df286d4bd39c7cb8037ed3b267b07c346626449d0cc5b0dd2cf221f7e4c3449a4be99985d2d5e67bff2923357ddeab5abcb4619f3a3a57b2cf928a022eb27676c6cf805689004fca4d41ea6c2d0a4789c7605f7bb838dd883b3ad3e6027e775bcf262881428099c7fff95b14c095ea130e0b9938a5e22fc52650f591', 'hex'));
    assert.equal(instance.digest('hex'), '530438b7a86b16434c82713ef7392d25c5cf814c7c6408368c4f2eaf');
  });


  it('produces the expected result for ShortMsgKAT_224 1208', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d3e65cb92cfa79662f6af493d696a07ccf32aaadcceff06e73e8d9f6f909209e66715d6e978788c49efb9087b170ecf3aa86d2d4d1a065ae0efc8924f365d676b3cb9e2bec918fd96d0b43dee83727c9a93bf56ca2b2e59adba85696546a815067fc7a78039629d4948d157e7b0d826d1bf8e81237bab7321312fdaa4d521744f988db6fdf04549d0fdca393d639c729af716e9c8bba48', 'hex'));
    assert.equal(instance.digest('hex'), '84944eb018f8a124e3c969c037464ee32bacf8e58901d2e22291df9a');
  });


  it('produces the expected result for ShortMsgKAT_224 1216', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('842cc583504539622d7f71e7e31863a2b885c56a0ba62db4c2a3f2fd12e79660dc7205ca29a0dc0a87db4dc62ee47a41db36b9ddb3293b9ac4baae7df5c6e7201e17f717ab56e12cad476be49608ad2d50309e7d48d2d8de4fa58ac3cfeafeee48c0a9eec88498e3efc51f54d300d828dddccb9d0b06dd021a29cf5cb5b2506915beb8a11998b8b886e0f9b7a80e97d91a7d01270f9a7717', 'hex'));
    assert.equal(instance.digest('hex'), '1311da757c405f2a0eab110b0c515f05fcd59f5495a9704252da5ab8');
  });


  it('produces the expected result for ShortMsgKAT_224 1224', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6c4b0a0719573e57248661e98febe326571f9a1ca813d3638531ae28b4860f23c3a3a8ac1c250034a660e2d71e16d3acc4bf9ce215c6f15b1c0fc7e77d3d27157e66da9ceec9258f8f2bf9e02b4ac93793dd6e29e307ede3695a0df63cbdc0fc66fb770813eb149ca2a916911bee4902c47c7802e69e405fe3c04ceb5522792a5503fa829f707272226621f7c488a7698c0d69aa561be9f378', 'hex'));
    assert.equal(instance.digest('hex'), 'b5fdaead7e68333cedb5d4ad636ae7059eb31305e2c831787fd51265');
  });


  it('produces the expected result for ShortMsgKAT_224 1232', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('51b7dbb7ce2ffeb427a91ccfe5218fd40f9e0b7e24756d4c47cd55606008bdc27d16400933906fd9f30effdd4880022d081155342af3fb6cd53672ab7fb5b3a3bcbe47be1fd3a2278cae8a5fd61c1433f7d350675dd21803746cadca574130f01200024c6340ab0cc2cf74f2234669f34e9009ef2eb94823d62b31407f4ba46f1a1eec41641e84d77727b59e746b8a671bef936f05be820759fa', 'hex'));
    assert.equal(instance.digest('hex'), '2919fd6c376aec9f502893a9970b9ac6591855227c0e137be01705ac');
  });


  it('produces the expected result for ShortMsgKAT_224 1240', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('83599d93f5561e821bd01a472386bc2ff4efbd4aed60d5821e84aae74d8071029810f5e286f8f17651cd27da07b1eb4382f754cd1c95268783ad09220f5502840370d494beb17124220f6afce91ec8a0f55231f9652433e5ce3489b727716cf4aeba7dcda20cd29aa9a859201253f948dd94395aba9e3852bd1d60dda7ae5dc045b283da006e1cbad83cc13292a315db5553305c628dd091146597', 'hex'));
    assert.equal(instance.digest('hex'), '8910e7abc3daa506974ec13e35c43133ebfa91deec99bfad4954447e');
  });


  it('produces the expected result for ShortMsgKAT_224 1248', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2be9bf526c9d5a75d565dd11ef63b979d068659c7f026c08bea4af161d85a462d80e45040e91f4165c074c43ac661380311a8cbed59cc8e4c4518e80cd2c78ab1cabf66bff83eab3a80148550307310950d034a6286c93a1ece8929e6385c5e3bb6ea8a7c0fb6d6332e320e71cc4eb462a2a62e2bfe08f0ccad93e61bedb5dd0b786a728ab666f07e0576d189c92bf9fb20dca49ac2d3956d47385e2', 'hex'));
    assert.equal(instance.digest('hex'), 'f8b4a4a6fbb8c8432712b5b815b36685c86656c3f67d05bdbb44b49a');
  });


  it('produces the expected result for ShortMsgKAT_224 1256', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ca76d3a12595a817682617006848675547d3e8f50c2210f9af906c0e7ce50b4460186fe70457a9e879e79fd4d1a688c70a347361c847ba0dd6aa52936eaf8e58a1be2f5c1c704e20146d366aeb3853bed9de9befe9569ac8aaea37a9fb7139a1a1a7d5c748605a8defb297869ebedd71d615a5da23496d11e11abbb126b206fa0a7797ee7de117986012d0362dcef775c2fe145ada6bda1ccb326bf644', 'hex'));
    assert.equal(instance.digest('hex'), '926fe0044b12422d3e4bfa52c59252acc91dbf09c488ae9d31c7eb63');
  });


  it('produces the expected result for ShortMsgKAT_224 1264', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f76b85dc67421025d64e93096d1d712b7baf7fb001716f02d33b2160c2c882c310ef13a576b1c2d30ef8f78ef8d2f465007109aad93f74cb9e7d7bef7c9590e8af3b267c89c15db238138c45833c98cc4a471a7802723ef4c744a853cf80a0c2568dd4ed58a2c9644806f42104cee53628e5bdf7b63b0b338e931e31b87c24b146c6d040605567ceef5960df9e022cb469d4c787f4cba3c544a1ac91f95f', 'hex'));
    assert.equal(instance.digest('hex'), 'a4e4b4a573f7b8865d77d7e57f7d840a55261a96e5fedd763d0811f4');
  });


  it('produces the expected result for ShortMsgKAT_224 1272', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('25b8c9c032ea6bcd733ffc8718fbb2a503a4ea8f71dea1176189f694304f0ff68e862a8197b839957549ef243a5279fc2646bd4c009b6d1edebf24738197abb4c992f6b1dc9ba891f570879accd5a6b18691a93c7d0a8d38f95b639c1daeb48c4c2f15ccf5b9d508f8333c32de78781b41850f261b855c4bebcc125a380c54d501c5d3bd07e6b52102116088e53d76583b0161e2a58d0778f091206aabd5a1', 'hex'));
    assert.equal(instance.digest('hex'), 'ebfd796b29f6059931732f98602185b6377c4e6e40bd26c810d6da96');
  });


  it('produces the expected result for ShortMsgKAT_224 1280', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('21cfdc2a7ccb7f331b3d2eefff37e48ad9fa9c788c3f3c200e0173d99963e1cbca93623b264e920394ae48bb4c3a5bb96ffbc8f0e53f30e22956adabc2765f57fb761e147ecbf8567533db6e50c8a1f894310a94edf806dd8ca6a0e141c0fa7c9fae6c6ae65f18c93a8529e6e5b553bf55f25be2e80a9882bd37f145fecbeb3d447a3c4e46c21524cc55cdd62f521ab92a8ba72b897996c49bb273198b7b1c9e', 'hex'));
    assert.equal(instance.digest('hex'), '3fb7392a6621b852312a374c14a679afb0e3d2ec6a2d147bd5e873f6');
  });


  it('produces the expected result for ShortMsgKAT_224 1288', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4e452ba42127dcc956ef4f8f35dd68cb225fb73b5bc7e1ec5a898bba2931563e74faff3b67314f241ec49f4a7061e3bd0213ae826bab380f1f14faab8b0efddd5fd1bb49373853a08f30553d5a55ccbbb8153de4704f29ca2bdeef0419468e05dd51557ccc80c0a96190bbcc4d77ecff21c66bdf486459d427f986410f883a80a5bcc32c20f0478bb9a97a126fc5f95451e40f292a4614930d054c851acd019ccf', 'hex'));
    assert.equal(instance.digest('hex'), '8b3750655af5eca10cc4f291043590e2d19759253047a4c1dbc86577');
  });


  it('produces the expected result for ShortMsgKAT_224 1296', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fa85671df7dadf99a6ffee97a3ab9991671f5629195049880497487867a6c446b60087fac9a0f2fcc8e3b24e97e42345b93b5f7d3691829d3f8ccd4bb36411b85fc2328eb0c51cb3151f70860ad3246ce0623a8dc8b3c49f958f8690f8e3860e71eb2b1479a5cea0b3f8befd87acaf5362435eaeccb52f38617bc6c5c2c6e269ead1fbd69e941d4ad2012da2c5b21bcfbf98e4a77ab2af1f3fda3233f046d38f1dc8', 'hex'));
    assert.equal(instance.digest('hex'), 'd3a5004477bbb21cf7d0fca84e51a7a57e93fae7222570c01b00e89a');
  });


  it('produces the expected result for ShortMsgKAT_224 1304', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e90847ae6797fbc0b6b36d6e588c0a743d725788ca50b6d792352ea8294f5ba654a15366b8e1b288d84f5178240827975a763bc45c7b0430e8a559df4488505e009c63da994f1403f407958203cebb6e37d89c94a5eacf6039a327f6c4dbbc7a2a307d976aa39e41af6537243fc218dfa6ab4dd817b6a397df5ca69107a9198799ed248641b63b42cb4c29bfdd7975ac96edfc274ac562d0474c60347a078ce4c25e88', 'hex'));
    assert.equal(instance.digest('hex'), '75b77c36e394711dfd35c11aec8c033dcd7c18712f3b06d1fedc1077');
  });


  it('produces the expected result for ShortMsgKAT_224 1312', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f6d5c2b6c93954fc627602c00c4ca9a7d3ed12b27173f0b2c9b0e4a5939398a665e67e69d0b12fb7e4ceb253e8083d1ceb724ac07f009f094e42f2d6f2129489e846eaff0700a8d4453ef453a3eddc18f408c77a83275617fabc4ea3a2833aa73406c0e966276079d38e8e38539a70e194cc5513aaa457c699383fd1900b1e72bdfb835d1fd321b37ba80549b078a49ea08152869a918ca57f5b54ed71e4fd3ac5c06729', 'hex'));
    assert.equal(instance.digest('hex'), 'e52df7fdf957269ca0b0f46553d554fe2e6367019b379a1e4f4c7a9f');
  });


  it('produces the expected result for ShortMsgKAT_224 1320', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cf8562b1bed89892d67ddaaf3deeb28246456e972326dbcdb5cf3fb289aca01e68da5d59896e3a6165358b071b304d6ab3d018944be5049d5e0e2bb819acf67a6006111089e6767132d72dd85beddcbb2d64496db0cc92955ab4c6234f1eea24f2d51483f2e209e4589bf9519fac51b4d061e801125e605f8093bb6997bc163d551596fe4ab7cfae8fb9a90f6980480ce0c229fd1675409bd788354daf316240cfe0af93eb', 'hex'));
    assert.equal(instance.digest('hex'), '41853cd54692dbd478bb1e2d6cedcda1d139c838ac956a37c87f098f');
  });


  it('produces the expected result for ShortMsgKAT_224 1328', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2ace31abb0a2e3267944d2f75e1559985db7354c6e605f18dc8470423fca30b7331d9b33c4a4326783d1caae1b4f07060eff978e4746bf0c7e30cd61040bd5ec2746b29863eb7f103ebda614c4291a805b6a4c8214230564a0557bc7102e0bd3ed23719252f7435d64d210ee2aafc585be903fa41e1968c50fd5d5367926df7a05e3a42cf07e656ff92de73b036cf8b19898c0cb34557c0c12c2d8b84e91181af467bc75a9d1', 'hex'));
    assert.equal(instance.digest('hex'), '1f2727d5132c453bd321a9fc7aa46fb8b3341d90988c41de8439d2f1');
  });


  it('produces the expected result for ShortMsgKAT_224 1336', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0d8d09aed19f1013969ce5e7eb92f83a209ae76be31c754844ea9116ceb39a22ebb6003017bbcf26555fa6624185187db8f0cb3564b8b1c06bf685d47f3286eda20b83358f599d2044bbf0583fab8d78f854fe0a596183230c5ef8e54426750eaf2cc4e29d3bdd037e734d863c2bd9789b4c243096138f7672c232314effdfc6513427e2da76916b5248933be312eb5dde4cf70804fb258ac5fb82d58d08177ac6f4756017fff5', 'hex'));
    assert.equal(instance.digest('hex'), '5e745f8966d91eee013b061281bc20c79b0323000a15bbde7e0d25ae');
  });


  it('produces the expected result for ShortMsgKAT_224 1344', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c3236b73deb7662bf3f3daa58f137b358ba610560ef7455785a9befdb035a066e90704f929bd9689cef0ce3bda5acf4480bceb8d09d10b098ad8500d9b6071dfc3a14af6c77511d81e3aa8844986c3bea6f469f9e02194c92868cd5f51646256798ff0424954c1434bdfed9facb390b07d342e992936e0f88bfd0e884a0ddb679d0547ccdec6384285a45429d115ac7d235a717242021d1dc35641f5f0a48e8445dba58e6cb2c8ea', 'hex'));
    assert.equal(instance.digest('hex'), 'cd2eeb7d48d0260986badf16f15aa09b5229b7830c73ee95b8cbf85a');
  });


  it('produces the expected result for ShortMsgKAT_224 1352', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b39feb8283eadc63e8184b51df5ae3fd41aac8a963bb0be1cd08aa5867d8d910c669221e73243360646f6553d1ca05a84e8dc0de05b6419ec349ca994480193d01c92525f3fb3dcefb08afc6d26947bdbbfd85193f53b50609c6140905c53a6686b58e53a319a57b962331ede98149af3de3118a819da4d76706a0424b4e1d2910b0ed26af61d150ebcb46595d4266a0bd7f651ba47d0c7f179ca28545007d92e8419d48fdfbd744ce', 'hex'));
    assert.equal(instance.digest('hex'), '3322fa727a0089f500a6a99d67419a76c7af77ef2893e8d385b42720');
  });


  it('produces the expected result for ShortMsgKAT_224 1360', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a983d54f503803e8c7999f4edbbe82e9084f422143a932ddddc47a17b0b7564a7f37a99d0786e99476428d29e29d3c197a72bfab1342c12a0fc4787fd7017d7a6174049ea43b5779169ef7472bdbbd941dcb82fc73aac45a8a94c9f2bd3477f61fd3b796f02a1b8264a214c6fea74b7051b226c722099ec7883a462b83b6afdd4009248b8a237f605fe5a08fe7d8b45321421ebba67bd70a0b00ddbf94baab7f359d5d1eea105f28dcfb', 'hex'));
    assert.equal(instance.digest('hex'), '234c1bc03fd4c3d38dd4c736b59a9107911210d54e98b3a372f57236');
  });


  it('produces the expected result for ShortMsgKAT_224 1368', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e4d1c1897a0a866ce564635b74222f9696bf2c7f640dd78d7e2aca66e1b61c642bb03ea7536aae597811e9bf4a7b453ede31f97b46a5f0ef51a071a2b3918df16b152519ae3776f9f1edab4c2a377c3292e96408359d3613844d5eb393000283d5ad3401a318b12fd1474b8612f2bb50fb6a8b9e023a54d7dde28c43d6d8854c8d9d1155935c199811dbfc87e9e0072e90eb88681cc7529714f8fb8a2c9d88567adfb974ee205a9bf7b848', 'hex'));
    assert.equal(instance.digest('hex'), 'bf229f4017e1674d4cb87b70d3d777c7114f085d77216437b860d641');
  });


  it('produces the expected result for ShortMsgKAT_224 1376', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b10c59723e3dcadd6d75df87d0a1580e73133a9b7d00cb95ec19f5547027323be75158b11f80b6e142c6a78531886d9047b08e551e75e6261e79785366d7024bd7cd9cf322d9be7d57fb661069f2481c7bb759cd71b4b36ca2bc2df6d3a328faebdb995a9794a8d72155ed551a1f87c80bf6059b43fc764900b18a1c2441f7487743cf84e565f61f8dd2ece6b6ccc9444049197aaaf53e926fbee3bfca8be588ec77f29d211be89de18b15f6', 'hex'));
    assert.equal(instance.digest('hex'), 'f95de3f40e5faf58d3320b5b24acec7de6b4b7e54c2f80f6d314ab5a');
  });


  it('produces the expected result for ShortMsgKAT_224 1384', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('db11f609baba7b0ca634926b1dd539c8cbada24967d7add4d9876f77c2d80c0f4dcefbd7121548373582705cca2495bd2a43716fe64ed26d059cfb566b3364bd49ee0717bdd9810dd14d8fad80dbbdc4cafb37cc60fb0fe2a80fb4541b8ca9d59dce457738a9d3d8f641af8c3fd6da162dc16fc01aac527a4a0255b4d231c0be50f44f0db0b713af03d968fe7f0f61ed0824c55c4b5265548febd6aad5c5eedf63efe793489c39b8fd29d104ce', 'hex'));
    assert.equal(instance.digest('hex'), '04b3bbbddfeba441005a48cebdbb1c6b6a674c2d9b224da29844374d');
  });


  it('produces the expected result for ShortMsgKAT_224 1392', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('bebd4f1a84fc8b15e4452a54bd02d69e304b7f32616aadd90537937106ae4e28de9d8aab02d19bc3e2fde1d651559e296453e4dba94370a14dbbb2d1d4e2022302ee90e208321efcd8528ad89e46dc839ea9df618ea8394a6bff308e7726bae0c19bcd4be52da6258e2ef4e96aa21244429f49ef5cb486d7ff35cac1bacb7e95711944bccb2ab34700d42d1eb38b5d536b947348a458ede3dc6bd6ec547b1b0cae5b257be36a7124e1060c170ffa', 'hex'));
    assert.equal(instance.digest('hex'), '6c1809cd88a0edb211986359498e0ac37e25e8eb62946938c37d3c26');
  });


  it('produces the expected result for ShortMsgKAT_224 1400', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5aca56a03a13784bdc3289d9364f79e2a85c12276b49b92db0adaa4f206d5028f213f678c3510e111f9dc4c1c1f8b6acb17a6413aa227607c515c62a733817ba5e762cc6748e7e0d6872c984d723c9bb3b117eb8963185300a80bfa65cde495d70a46c44858605fccbed086c2b45cef963d33294dbe9706b13af22f1b7c4cd5a001cfec251fba18e722c6e1c4b1166918b4f6f48a98b64b3c07fc86a6b17a6d0480ab79d4e6415b520f1c484d675b1', 'hex'));
    assert.equal(instance.digest('hex'), 'd2744a1bbb34718fcbb614c21e1fccd0ff88615cb82aa03803ab9460');
  });


  it('produces the expected result for ShortMsgKAT_224 1408', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a5aad0e4646a32c85cfcac73f02fc5300f1982fabb2f2179e28303e447854094cdfc854310e5c0f60993ceff54d84d6b46323d930adb07c17599b35b505f09e784bca5985e0172257797fb53649e2e9723efd16865c31b5c3d5113b58bb0bfc8920fabdda086d7537e66d709d050bd14d0c960873f156fad5b3d3840cdfcdc9be6af519db262a27f40896ab25cc39f96984d650611c0d5a3080d5b3a1bf186abd42956588b3b58cd948970d298776060', 'hex'));
    assert.equal(instance.digest('hex'), 'f6115f635d98b572fd1ba85763eccf8bf273fbf7b96f0db0120ca8ad');
  });


  it('produces the expected result for ShortMsgKAT_224 1416', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('06cbbe67e94a978203ead6c057a1a5b098478b4b4cbef5a97e93c8e42f5572713575fc2a884531d7622f8f879387a859a80f10ef02708cd8f7413ab385afc357678b9578c0ebf641ef076a1a30f1f75379e9dcb2a885bdd295905ee80c0168a62a9597d10cf12dd2d8cee46645c7e5a141f6e0e23aa482abe5661c16e69ef1e28371e2e236c359ba4e92c25626a7b7ff13f6ea4ae906e1cfe163e91719b1f750a96cbde5fbc953d9e576cd216afc90323a', 'hex'));
    assert.equal(instance.digest('hex'), '5ee73a4f13a08a2d9b1e52df88972ffb9f03b843a387ee52b00edcee');
  });


  it('produces the expected result for ShortMsgKAT_224 1424', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f1c528cf7739874707d4d8ad5b98f7c77169de0b57188df233b2dc8a5b31eda5db4291dd9f68e6bad37b8d7f6c9c0044b3bf74bbc3d7d1798e138709b0d75e7c593d3cccdc1b20c7174b4e692add820ace262d45ccfae2077e878796347168060a162ecca8c38c1a88350bd63bb539134f700fd4addd5959e255337daa06bc86358fabcbefdfb5bc889783d843c08aadc6c4f6c36f65f156e851c9a0f917e4a367b5ad93d874812a1de6a7b93cd53ad97232', 'hex'));
    assert.equal(instance.digest('hex'), '44bc64559bdb910b7079e0261ff8b49dba141b32ecbcb70b3abdfbf9');
  });


  it('produces the expected result for ShortMsgKAT_224 1432', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9d9f3a7ecd51b41f6572fd0d0881e30390dfb780991dae7db3b47619134718e6f987810e542619dfaa7b505c76b7350c6432d8bf1cfebdf1069b90a35f0d04cbdf130b0dfc7875f4a4e62cdb8e525aadd7ce842520a482ac18f09442d78305fe85a74e39e760a4837482ed2f437dd13b2ec1042afcf9decdc3e877e50ff4106ad10a525230d11920324a81094da31deab6476aa42f20c84843cfc1c58545ee80352bdd3740dd6a16792ae2d86f11641bb717c2', 'hex'));
    assert.equal(instance.digest('hex'), 'de82adde823c312f83b3d4c0bd35aa0395ab747abbc22a70973e2a6c');
  });


  it('produces the expected result for ShortMsgKAT_224 1440', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5179888724819fbad3afa927d3577796660e6a81c52d98e9303261d5a4a83232f6f758934d50aa83ff9e20a5926dfebaac49529d006eb923c5ae5048ed544ec471ed7191edf46363383824f915769b3e688094c682b02151e5ee01e510b431c8865aff8b6b6f2f59cb6d129da79e97c6d2b8fa6c6da3f603199d2d1bcab547682a81cd6cf65f6551121391d78bcc23b5bd0e922ec6d8bf97c952e84dd28aef909aba31edb903b28fbfc33b7703cd996215a11238', 'hex'));
    assert.equal(instance.digest('hex'), 'b1ba910c9f5e126607ff2531affecba791261e354e2c1a81fda7a756');
  });


  it('produces the expected result for ShortMsgKAT_224 1448', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('576ef3520d30b7a4899b8c0d5e359e45c5189add100e43be429a02fb3de5ff4f8fd0e79d9663acca72cd29c94582b19292a557c5b1315297d168fbb54e9e2ecd13809c2b5fce998edc6570545e1499dbe7fb74d47cd7f35823b212b05bf3f5a79caa34224fdd670d335fcb106f5d92c3946f44d3afcbae2e41ac554d8e6759f332b76be89a0324aa12c5482d1ea3ee89ded4936f3e3c080436f539fa137e74c6d3389bdf5a45074c47bc7b20b0948407a66d855e2f', 'hex'));
    assert.equal(instance.digest('hex'), '3ef8d4a6bb8e172374e806e8d65d5f81b3fdb36299de1c0ccc26dc65');
  });


  it('produces the expected result for ShortMsgKAT_224 1456', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0df2152fa4f4357c8741529dd77e783925d3d76e95bafa2b542a2c33f3d1d117d159cf473f82310356fee4c90a9e505e70f8f24859656368ba09381fa245eb6c3d763f3093f0c89b972e66b53d59406d9f01aea07f8b3b615cac4ee4d05f542e7d0dab45d67ccccd3a606ccbeb31ea1fa7005ba07176e60dab7d78f6810ef086f42f08e595f0ec217372b98970cc6321576d92ce38f7c397a403bada1548d205c343ac09deca86325373c3b76d9f32028fea8eb32515', 'hex'));
    assert.equal(instance.digest('hex'), '1c89d6460b3f13584bf8319ee538f24c850ca771a51ecc547652bae3');
  });


  it('produces the expected result for ShortMsgKAT_224 1464', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3e15350d87d6ebb5c8ad99d42515cfe17980933c7a8f6b8bbbf0a63728cefaad2052623c0bd5931839112a48633fb3c2004e0749c87a41b26a8b48945539d1ff41a4b269462fd199bfecd45374756f55a9116e92093ac99451aefb2af9fd32d6d7f5fbc7f7a540d5097c096ebc3b3a721541de073a1cc02f7fb0fb1b9327fb0b1218ca49c9487ab5396622a13ae546c97abdef6b56380dda7012a8384091b6656d0ab272d363cea78163ff765cdd13ab1738b940d16cae', 'hex'));
    assert.equal(instance.digest('hex'), '99981766cfe3b1888f2a008efa1088016cb29993567f9bb74b5c4d3c');
  });


  it('produces the expected result for ShortMsgKAT_224 1472', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c38d6b0b757cb552be40940ece0009ef3b0b59307c1451686f1a22702922800d58bce7a636c1727ee547c01b214779e898fc0e560f8ae7f61bef4d75eaa696b921fd6b735d171535e9edd267c192b99880c87997711002009095d8a7a437e258104a41a505e5ef71e5613ddd2008195f0c574e6ba3fe40099cfa116e5f1a2fa8a6da04badcb4e2d5d0de31fdc4800891c45781a0aac7c907b56d631fca5ce8b2cde620d11d1777ed9fa603541de794ddc5758fcd5fad78c0', 'hex'));
    assert.equal(instance.digest('hex'), '0215e91ef992dcc7e82d16a2c9b27921c1310c182f59df8bed5151e8');
  });


  it('produces the expected result for ShortMsgKAT_224 1480', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8d2de3f0b37a6385c90739805b170057f091cd0c7a0bc951540f26a5a75b3e694631bb64c7635eed316f51318e9d8de13c70a2aba04a14836855f35e480528b776d0a1e8a23b547c8b8d6a0d09b241d3be9377160cca4e6793d00a515dc2992cb7fc741daca171431da99cce6f7789f129e2ac5cf65b40d703035cd2185bb936c82002daf8cbc27a7a9e554b06196630446a6f0a14ba155ed26d95bd627b7205c072d02b60db0fd7e49ea058c2e0ba202daff0de91e845cf79', 'hex'));
    assert.equal(instance.digest('hex'), 'e52ea6714a3978810dc19e999c32516d4acf0cbcd67e917a4feb56d0');
  });


  it('produces the expected result for ShortMsgKAT_224 1488', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c464bbdad275c50dcd983b65ad1019b9ff85a1e71c807f3204bb2c921dc31fbcd8c5fc45868ae9ef85b6c9b83bba2a5a822201ed68586ec5ec27fb2857a5d1a2d09d09115f22dcc39fe61f5e1ba0ff6e8b4acb4c6da748be7f3f0839739394ff7fa8e39f7f7e84a33c3866875c01bcb1263c9405d91908e9e0b50e7459fabb63d8c6bbb73d8e3483c099b55bc30ff092ff68b6adedfd477d63570c9f5515847f36e24ba0b705557130cec57ebad1d0b31a378e91894ee26e3a04', 'hex'));
    assert.equal(instance.digest('hex'), '4c3d6321133ef74810e60d3190fff3cf20c8521caea6ff782d7e3bab');
  });


  it('produces the expected result for ShortMsgKAT_224 1496', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8b8d68bb8a75732fe272815a68a1c9c5aa31b41dedc8493e76525d1d013d33cebd9e21a5bb95db2616976a8c07fcf411f5f6bc6f7e0b57aca78cc2790a6f9b898858ac9c79b165ff24e66677531e39f572be5d81eb3264524181115f32780257bfb9aeec6af12af28e587cac068a1a2953b59ad680f4c245b2e3ec36f59940d37e1d3db38e13edb29b5c0f404f6ff87f80fc8be7a225ff22fbb9c8b6b1d7330c57840d24bc75b06b80d30dad6806544d510af6c4785e823ac3e0b8', 'hex'));
    assert.equal(instance.digest('hex'), 'b9f006dbf853c023debe2f40035a7e83c49cde656ec86a4621950f3e');
  });


  it('produces the expected result for ShortMsgKAT_224 1504', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6b018710446f368e7421f1bc0ccf562d9c1843846bc8d98d1c9bf7d9d6fcb48bfc3bf83b36d44c4fa93430af75cd190bde36a7f92f867f58a803900df8018150384d85d82132f123006ac2aeba58e02a037fe6afbd65eca7c44977dd3dc74f48b6e7a1bfd5cc4dcf24e4d52e92bd4455848e4928b0eac8b7476fe3cc03e862aa4dff4470dbfed6de48e410f25096487ecfc32a27277f3f5023b2725ade461b1355889554a8836c9cf53bd767f5737d55184eea1ab3f53edd0976c485', 'hex'));
    assert.equal(instance.digest('hex'), '0a5aa6bc564b8cb2f5fd7255455c0e7a5dace0050c3bbd259fde2ab9');
  });


  it('produces the expected result for ShortMsgKAT_224 1512', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c9534a24714bd4be37c88a3da1082eda7cabd154c309d7bd670dccd95aa535594463058a29f79031d6ecaa9f675d1211e9359be82669a79c855ea8d89dd38c2c761ddd0ec0ce9e97597432e9a1beae062cdd71edfdfd464119be9e69d18a7a7fd7ce0e2106f0c8b0abf4715e2ca48ef9f454dc203c96656653b727083513f8efb86e49c513bb758b3b052fe21f1c05bb33c37129d6cc81f1aef6adc45b0e8827a830fe545cf57d0955802c117d23ccb55ea28f95c0d8c2f9c5a242b33f', 'hex'));
    assert.equal(instance.digest('hex'), '8ca4e085f04956b5b16520e3a767f8ba937364fe5f4460288ad4f231');
  });


  it('produces the expected result for ShortMsgKAT_224 1520', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('07906c87297b867abf4576e9f3cc7f82f22b154afcbf293b9319f1b0584da6a40c27b32e0b1b7f412c4f1b82480e70a9235b12ec27090a5a33175a2bb28d8adc475cefe33f7803f8ce27967217381f02e67a3b4f84a71f1c5228e0c2ad971373f6f672624fcea8d1a9f85170fad30fa0bbd25035c3b41a6175d467998bd1215f6f3866f53847f9cf68ef3e2fbb54bc994de2302b829c5eea68ec441fcbafd7d16ae4fe9fff98bf00e5bc2ad54dd91ff9fda4dd77b6c754a91955d1fbaad0', 'hex'));
    assert.equal(instance.digest('hex'), 'c0aa34391cb3104c41995f3de782f012d421585e5384e047a997062f');
  });


  it('produces the expected result for ShortMsgKAT_224 1528', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('588e94b9054abc2189df69b8ba34341b77cdd528e7860e5defcaa79b0c9a452ad4b82aa306be84536eb7cedcbe058d7b84a6aef826b028b8a0271b69ac3605a9635ea9f5ea0aa700f3eb7835bc54611b922964300c953efe7491e3677c2cebe0822e956cd16433b02c68c4a23252c3f9e151a416b4963257b783e038f6b4d5c9f110f871652c7a649a7bcedcbccc6f2d0725bb903cc196ba76c76aa9f10a190b1d1168993baa9ffc96a1655216773458bec72b0e39c9f2c121378feab4e76a', 'hex'));
    assert.equal(instance.digest('hex'), '33c10010a0b810386ae62f3f927deafc0d5af0af3dc7a8355cb779cd');
  });


  it('produces the expected result for ShortMsgKAT_224 1536', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('08959a7e4baae874928813364071194e2939772f20db7c3157078987c557c2a6d5abe68d520eef3dc491692e1e21bcd880adebf63bb4213b50897fa005256ed41b5690f78f52855c8d9168a4b666fce2da2b456d7a7e7c17ab5f2fb1ee90b79e698712e963715983fd07641ae4b4e9dc73203fac1ae11fa1f8c7941fcc82eab247addb56e2638447e9d609e610b60ce086656aaebf1da3c8a231d7d94e2fd0afe46b391ff14a72eaeb3f44ad4df85866def43d4781a0b3578bc996c87970b132', 'hex'));
    assert.equal(instance.digest('hex'), '842a2e13d2728ca55b42d784bb6bc4b889e56775ad56bf75789cc57a');
  });


  it('produces the expected result for ShortMsgKAT_224 1544', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cb2a234f45e2ecd5863895a451d389a369aab99cfef0d5c9ffca1e6e63f763b5c14fb9b478313c8e8c0efeb3ac9500cf5fd93791b789e67eac12fd038e2547cc8e0fc9db591f33a1e4907c64a922dda23ec9827310b306098554a4a78f050262db5b545b159e1ff1dca6eb734b872343b842c57eafcfda8405eedbb48ef32e99696d135979235c3a05364e371c2d76f1902f1d83146df9495c0a6c57d7bf9ee77e80f9787aee27be1fe126cdc9ef893a4a7dcbbc367e40fe4e1ee90b42ea25af01', 'hex'));
    assert.equal(instance.digest('hex'), 'a576281cfaa89dcefb1d37772400ba4cabceef33cba2f833336a74f2');
  });


  it('produces the expected result for ShortMsgKAT_224 1552', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d16beadf02ab1d4dc6f88b8c4554c51e866df830b89c06e786a5f8757e8909310af51c840efe8d20b35331f4355d80f73295974653ddd620cdde4730fb6c8d0d2dcb2b45d92d4fbdb567c0a3e86bd1a8a795af26fbf29fc6c65941cddb090ff7cd230ac5268ab4606fccba9eded0a2b5d014ee0c34f0b2881ac036e24e151be89eeb6cd9a7a790afccff234d7cb11b99ebf58cd0c589f20bdac4f9f0e28f75e3e04e5b3debce607a496d848d67fa7b49132c71b878fd5557e082a18eca1fbda94d4b', 'hex'));
    assert.equal(instance.digest('hex'), 'b1579476972d42fa388feeb8424834672c4d1a4225ee2db89dea7359');
  });


  it('produces the expected result for ShortMsgKAT_224 1560', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8f65f6bc59a85705016e2bae7fe57980de3127e5ab275f573d334f73f8603106ec3553016608ef2dd6e69b24be0b7113bf6a760ba6e9ce1c48f9e186012cf96a1d4849d75df5bb8315387fd78e9e153e76f8ba7ec6c8849810f59fb4bb9b004318210b37f1299526866f44059e017e22e96cbe418699d014c6ea01c9f0038b10299884dbec3199bb05adc94e955a1533219c1115fed0e5f21228b071f40dd57c4240d98d37b73e412fe0fa4703120d7c0c67972ed233e5deb300a22605472fa3a3ba86', 'hex'));
    assert.equal(instance.digest('hex'), 'a32ec69648b4fd9ba2431ed0fef036188c19788d7ddf0d25b6b03ecd');
  });


  it('produces the expected result for ShortMsgKAT_224 1568', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('84891e52e0d451813210c3fd635b39a03a6b7a7317b221a7abc270dfa946c42669aacbbbdf801e1584f330e28c729847ea14152bd637b3d0f2b38b4bd5bf9c791c58806281103a3eabbaede5e711e539e6a8b2cf297cf351c078b4fa8f7f35cf61bebf8814bf248a01d41e86c5715ea40c63f7375379a7eb1d78f27622fb468ab784aaaba4e534a6dfd1df6fa15511341e725ed2e87f98737ccb7b6a6dfae416477472b046bf1811187d151bfa9f7b2bf9acdb23a3be507cdf14cfdf517d2cb5fb9e4ab6', 'hex'));
    assert.equal(instance.digest('hex'), '2b8cf4c8d9e6717ebce4f0584ada59a8acdfab98ad7e33f355b77095');
  });


  it('produces the expected result for ShortMsgKAT_224 1576', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fdd7a9433a3b4afabd7a3a5e3457e56debf78e84b7a0b0ca0e8c6d53bd0c2dae31b2700c6128334f43981be3b213b1d7a118d59c7e6b6493a86f866a1635c12859cfb9ad17460a77b4522a5c1883c3d6acc86e6162667ec414e9a104aa892053a2b1d72165a855bacd8faf8034a5dd9b716f47a0818c09bb6baf22aa503c06b4ca261f557761989d2afbd88b6a678ad128af68672107d0f1fc73c5ca740459297b3292b281e93bceb761bde7221c3a55708e5ec84472cddcaa84ecf23723cc0991355c6280', 'hex'));
    assert.equal(instance.digest('hex'), 'e583849474f3c759b7a3093c7abadd61425073aea2678e278215708d');
  });


  it('produces the expected result for ShortMsgKAT_224 1584', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('70a40bfbef92277a1aad72f6b79d0177197c4ebd432668cfec05d099accb651062b5dff156c0b27336687a94b26679cfdd9daf7ad204338dd9c4d14114033a5c225bd11f217b5f4732da167ee3f939262d4043fc9cba92303b7b5e96aea12adda64859df4b86e9ee0b58e39091e6b188b408ac94e1294a8911245ee361e60e601eff58d1d37639f3753bec80ebb4efde25817436076623fc65415fe51d1b0280366d12c554d86743f3c3b6572e400361a60726131441ba493a83fbe9afda90f7af1ae717238d', 'hex'));
    assert.equal(instance.digest('hex'), '10795d3abcc077f4a1f5b5653c478f9db42110ea9f34925470b3cd11');
  });


  it('produces the expected result for ShortMsgKAT_224 1592', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('74356e449f4bf8644f77b14f4d67cb6bd9c1f5ae357621d5b8147e562b65c66585caf2e491b48529a01a34d226d436959153815380d5689e30b35357cdac6e08d3f2b0e88e200600d62bd9f5eaf488df86a4470ea227006182e44809009868c4c280c43d7d64a5268fa719074960087b3a6abc837882f882c837834535929389a12b2c78187e2ea07ef8b8eef27dc85002c3ae35f1a50bee6a1c48ba7e175f3316670b27983472aa6a61eed0a683a39ee323080620ea44a9f74411ae5ce99030528f9ab49c79f2', 'hex'));
    assert.equal(instance.digest('hex'), '31a843b4a9f332f3b6b099843540aa70651b26b80e0bd75b77f3aa9b');
  });


  it('produces the expected result for ShortMsgKAT_224 1600', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8c3798e51bc68482d7337d3abb75dc9ffe860714a9ad73551e120059860dde24ab87327222b64cf774415a70f724cdf270de3fe47dda07b61c9ef2a3551f45a5584860248fabde676e1cd75f6355aa3eaeabe3b51dc813d9fb2eaa4f0f1d9f834d7cad9c7c695ae84b329385bc0bef895b9f1edf44a03d4b410cc23a79a6b62e4f346a5e8dd851c2857995ddbf5b2d717aeb847310e1f6a46ac3d26a7f9b44985af656d2b7c9406e8a9e8f47dcb4ef6b83caacf9aefb6118bfcff7e44bef6937ebddc89186839b77', 'hex'));
    assert.equal(instance.digest('hex'), '1029ca117957d80f3c859e8394dd34969331ca3bcedc436b1eab0849');
  });


  it('produces the expected result for ShortMsgKAT_224 1608', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fa56bf730c4f8395875189c10c4fb251605757a8fecc31f9737e3c2503b02608e6731e85d7a38393c67de516b85304824bfb135e33bf22b3a23b913bf6acd2b7ab85198b8187b2bcd454d5e3318cacb32fd6261c31ae7f6c54ef6a7a2a4c9f3ecb81ce3555d4f0ad466dd4c108a90399d70041997c3b25345a9653f3c9a6711ab1b91d6a9d2216442da2c973cbd685ee7643bfd77327a2f7ae9cb283620a08716dfb462e5c1d65432ca9d56a90e811443cd1ecb8f0de179c9cb48ba4f6fec360c66f252f6e64edc96b', 'hex'));
    assert.equal(instance.digest('hex'), '6096e9914c1ac93a6809de7ad91119c637b00bbd64dcc3e1fac1e1ed');
  });


  it('produces the expected result for ShortMsgKAT_224 1616', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b6134f9c3e91dd8000740d009dd806240811d51ab1546a974bcb18d344642baa5cd5903af84d58ec5ba17301d5ec0f10ccd0509cbb3fd3fff9172d193af0f782252fd1338c7244d40e0e42362275b22d01c4c3389f19dd69bdf958ebe28e31a4ffe2b5f18a87831cfb7095f58a87c9fa21db72ba269379b2dc2384b3da953c7925761fed324620acea435e52b424a7723f6a2357374157a34cd8252351c25a1b232826cefe1bd3e70ffc15a31e7c0598219d7f00436294d11891b82497bc78aa5363892a2495df8c1eef', 'hex'));
    assert.equal(instance.digest('hex'), 'f583f07df2327887c6f10a9b1d509a744f3c294a4227976e3c3722e8');
  });


  it('produces the expected result for ShortMsgKAT_224 1624', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c941cdb9c28ab0a791f2e5c8e8bb52850626aa89205bec3a7e22682313d198b1fa33fc7295381354858758ae6c8ec6fac3245c6e454d16fa2f51c4166fab51df272858f2d603770c40987f64442d487af49cd5c3991ce858ea2a60dab6a65a34414965933973ac2457089e359160b7cdedc42f29e10a91921785f6b7224ee0b349393cdcff6151b50b377d609559923d0984cda6000829b916ab6896693ef6a2199b3c22f7dc5500a15b8258420e314c222bc000bc4e5413e6dd82c993f8330f5c6d1be4bc79f08a1a0a46', 'hex'));
    assert.equal(instance.digest('hex'), 'a9f43b9621fc5902df2458fd53d0cde90aae7000855c67d853c7937a');
  });


  it('produces the expected result for ShortMsgKAT_224 1632', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4499efffac4bcea52747efd1e4f20b73e48758be915c88a1ffe5299b0b005837a46b2f20a9cb3c6e64a9e3c564a27c0f1c6ad1960373036ec5bfe1a8fc6a435c2185ed0f114c50e8b3e4c7ed96b06a036819c9463e864a58d6286f785e32a804443a56af0b4df6abc57ed5c2b185ddee8489ea080deeee66aa33c2e6dab36251c402682b6824821f998c32163164298e1fafd31babbcffb594c91888c6219079d907fdb438ed89529d6d96212fd55abe20399dbefd342248507436931cdead496eb6e4a80358acc78647d043', 'hex'));
    assert.equal(instance.digest('hex'), 'e9675faac37c93aa61ff9730679a3d1209adbad4652582dff5b1baaf');
  });


  it('produces the expected result for ShortMsgKAT_224 1640', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('eecbb8fdfa4da62170fd06727f697d81f83f601ff61e478105d3cb7502f2c89bf3e8f56edd469d049807a38882a7eefbc85fc9a950952e9fa84b8afebd3ce782d4da598002827b1eb98882ea1f0a8f7aa9ce013a6e9bc462fb66c8d4a18da21401e1b93356eb12f3725b6db1684f2300a98b9a119e5d27ff704affb618e12708e77e6e5f34139a5a41131fd1d6336c272a8fc37080f041c71341bee6ab550cb4a20a6ddb6a8e0299f2b14bc730c54b8b1c1c487b494bdccfd3a53535ab2f231590bf2c4062fd2ad58f906a2d0d', 'hex'));
    assert.equal(instance.digest('hex'), 'cdb500740812a0d70c68d0097dcc7aca86ec066c89d36642879a74a5');
  });


  it('produces the expected result for ShortMsgKAT_224 1648', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e64f3e4ace5c8418d65fec2bc5d2a303dd458034736e3b0df719098be7a206deaf52d6ba82316caf330ef852375188cde2b39cc94aa449578a7e2a8e3f5a9d68e816b8d16889fbc0ebf0939d04f63033ae9ae2bdab73b88c26d6bd25ee460ee1ef58fb0afa92cc539f8c76d3d097e7a6a63ebb9b5887edf3cf076028c5bbd5b9db3211371ad3fe121d4e9bf44229f4e1ecf5a0f9f0eba4d5ceb72878ab22c3f0eb5a625323ac66f7061f4a81fac834471e0c59553f108475fe290d43e6a055ae3ee46fb67422f814a68c4be3e8c9', 'hex'));
    assert.equal(instance.digest('hex'), '66f205d7147991a940affb7401b692275338519a97608c584362ffee');
  });


  it('produces the expected result for ShortMsgKAT_224 1656', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d2cb2d733033f9e91395312808383cc4f0ca974e87ec68400d52e96b3fa6984ac58d9ad0938dde5a973008d818c49607d9de2284e7618f1b8aed8372fbd52ed54557af4220fac09dfa8443011699b97d743f8f2b1aef3537ebb45dcc9e13dfb438428ee190a4efdb3caeb7f3933117bf63abdc7e57beb4171c7e1ad260ab0587806c4d137b6316b50abc9cce0dff3acada47bbb86be777e617bbe578ff4519844db360e0a96c6701290e76bb95d26f0f804c8a4f2717eac4e7de9f2cff3bbc55a17e776c0d02856032a6cd10ad2838', 'hex'));
    assert.equal(instance.digest('hex'), '909fb29277ab2c4ce4279c485d4fba7e18ff1a88c66daf7acf630310');
  });


  it('produces the expected result for ShortMsgKAT_224 1664', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f2998955613dd414cc111df5ce30a995bb792e260b0e37a5b1d942fe90171a4ac2f66d4928d7ad377f4d0554cbf4c523d21f6e5f379d6f4b028cdcb9b1758d3b39663242ff3cb6ede6a36a6f05db3bc41e0d861b384b6dec58bb096d0a422fd542df175e1be1571fb52ae66f2d86a2f6824a8cfaacbac4a7492ad0433eeb15454af8f312b3b2a577750e3efbd370e8a8cac1582581971fba3ba4bd0d76e718dacf8433d33a59d287f8cc92234e7a271041b526e389efb0e40b6a18b3aaf658e82ed1c78631fd23b4c3eb27c3faec8685', 'hex'));
    assert.equal(instance.digest('hex'), 'ed535ec075c983a08f7d7ad5714ebc846f25e8661492b2b31978edf2');
  });


  it('produces the expected result for ShortMsgKAT_224 1672', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('447797e2899b72a356ba55bf4df3acca6cdb1041eb477bd1834a9f9acbc340a294d729f2f97df3a610be0ff15edb9c6d5db41644b9874360140fc64f52aa03f0286c8a640670067a84e017926a70438db1bb361defee7317021425f8821def26d1efd77fc853b818545d055adc9284796e583c76e6fe74c9ac2587aa46aa8f8804f2feb5836cc4b3ababab8429a5783e17d5999f32242eb59ef30cd7adabc16d72dbdb097623047c98989f88d14eaf02a7212be16ec2d07981aaa99949ddf89ecd90333a77bc4e1988a82abf7c7caf3291', 'hex'));
    assert.equal(instance.digest('hex'), '87f15cc2aec24168d8bbaf188825f3bb0178cfb5c5899f2fd042ce89');
  });


  it('produces the expected result for ShortMsgKAT_224 1680', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9f2c18ade9b380c784e170fb763e9aa205f64303067eb1bcea93df5dac4bf5a2e00b78195f808df24fc76e26cb7be31dc35f0844cded1567bba29858cffc97fb29010331b01d6a3fb3159cc1b973d255da9843e34a0a4061cabdb9ed37f241bfabb3c20d32743f4026b59a4ccc385a2301f83c0b0a190b0f2d01acb8f0d41111e10f2f4e149379275599a52dc089b35fdd5234b0cfb7b6d8aebd563ca1fa653c5c021dfd6f5920e6f18bfafdbecbf0ab00281333ed50b9a999549c1c8f8c63d7626c48322e9791d5ff72294049bde91e73f8', 'hex'));
    assert.equal(instance.digest('hex'), '31bb872545217fdbf11077e86b1ee451475c31dc5e0e636efbe50825');
  });


  it('produces the expected result for ShortMsgKAT_224 1688', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ae159f3fa33619002ae6bcce8cbbdd7d28e5ed9d61534595c4c9f43c402a9bb31f3b301cbfd4a43ce4c24cd5c9849cc6259eca90e2a79e01ffbac07ba0e147fa42676a1d668570e0396387b5bcd599e8e66aaed1b8a191c5a47547f61373021fa6deadcb55363d233c24440f2c73dbb519f7c9fa5a8962efd5f6252c0407f190dfefad707f3c7007d69ff36b8489a5b6b7c557e79dd4f50c06511f599f56c896b35c917b63ba35c6ff8092baf7d1658e77fc95d8a6a43eeb4c01f33f03877f92774be89c1114dd531c011e53a34dc248a2f0e6', 'hex'));
    assert.equal(instance.digest('hex'), '26d69f0ae8e4dc61c6354ff570fdd913caf21c18697f0371f2d323af');
  });


  it('produces the expected result for ShortMsgKAT_224 1696', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3b8e97c5ffc2d6a40fa7de7fcefc90f3b12c940e7ab415321e29ee692dfac799b009c99dcddb708fce5a178c5c35ee2b8617143edc4c40b4d313661f49abdd93cea79d117518805496fe6acf292c4c2a1f76b403a97d7c399daf85b46ad84e16246c67d6836757bde336c290d5d401e6c1386ab32797af6bb251e9b2d8fe754c47482b72e0b394eab76916126fd68ea7d65eb93d59f5b4c5ac40f7c3b37e7f3694f29424c24af8c8f0ef59cd9dbf1d28e0e10f799a6f78cad1d45b9db3d7dee4a7059abe99182714983b9c9d44d7f5643596d4f3', 'hex'));
    assert.equal(instance.digest('hex'), '175393534d90b614b158105c95e18a1052a56d0e775ea1cf51ad5853');
  });


  it('produces the expected result for ShortMsgKAT_224 1704', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3434ec31b10fafdbfeec0dd6bd94e80f7ba9dca19ef075f7eb017512af66d6a4bcf7d16ba0819a1892a6372f9b35bcc7ca8155ee19e8428bc22d214856ed5fa9374c3c09bde169602cc219679f65a1566fc7316f4cc3b631a18fb4449fa6afa16a3db2bc4212eff539c67cf184680826535589c7111d73bffce431b4c40492e763d9279560aaa38eb2dc14a212d723f994a1fe656ff4dd14551ce4e7c621b2aa5604a10001b2878a897a28a08095c325e10a26d2fb1a75bfd64c250309bb55a44f23bbac0d5516a1c687d3b41ef2fbbf9cc56d4739', 'hex'));
    assert.equal(instance.digest('hex'), '3decd71da22639985cf242f2fae7172459042c826495c8d8d95c3719');
  });


  it('produces the expected result for ShortMsgKAT_224 1712', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7c7953d81c8d208fd1c97681d48f49dd003456de60475b84070ef4847c333b74575b1fc8d2a186964485a3b8634feaa3595aaa1a2f4595a7d6b6153563dee31bbac443c8a33eed6d5d956a980a68366c2527b550ee950250dfb691eacbd5d56ae14b970668be174c89df2fea43ae52f13142639c884fd62a3683c0c3792f0f24ab1318bcb27e21f4737fab62c77ea38bc8fd1cf41f7dab64c13febe7152bf5bb7ab5a78f5346d43cc741cb6f72b7b8980f268b68bf62abdfb1577a52438fe14b591498cc95f071228460c7c5d5ceb4a7bde588e7f21c', 'hex'));
    assert.equal(instance.digest('hex'), '2d0a56864bbec6449fbf7b2eae53da46647183b56fa4edb1602e5163');
  });


  it('produces the expected result for ShortMsgKAT_224 1720', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7a6a4f4fdc59a1d223381ae5af498d74b7252ecf59e389e49130c7eaee626e7bd9897effd92017f4ccde66b0440462cdedfd352d8153e6a4c8d7a0812f701cc737b5178c2556f07111200eb627dbc299caa792dfa58f35935299fa3a3519e9b03166dffa159103ffa35e8577f7c0a86c6b46fe13db8e2cdd9dcfba85bdddcce0a7a8e155f81f712d8e9fe646153d3d22c811bd39f830433b2213dd46301941b59293fd0a33e2b63adbd95239bc01315c46fdb678875b3c81e053a40f581cfbec24a1404b1671a1b88a6d06120229518fb13a74ca0ac5ae', 'hex'));
    assert.equal(instance.digest('hex'), 'a0ff9e11fbb451943a17e3ac510de0b582bb072b16dc4e03f9e4019f');
  });


  it('produces the expected result for ShortMsgKAT_224 1728', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d9faa14cebe9b7de551b6c0765409a33938562013b5e8e0e1e0a6418df7399d0a6a771fb81c3ca9bd3bb8e2951b0bc792525a294ebd1083688806fe5e7f1e17fd4e3a41d00c89e8fcf4a363caedb1acb558e3d562f1302b3d83bb886ed27b76033798131dab05b4217381eaaa7ba15ec820bb5c13b516dd640eaec5a27d05fdfca0f35b3a5312146806b4c0275bcd0aaa3b2017f346975db566f9b4d137f4ee10644c2a2da66deeca5342e236495c3c6280528bfd32e90af4cd9bb908f34012b52b4bc56d48cc8a6b59bab014988eabd12e1a0a1c2e170e7', 'hex'));
    assert.equal(instance.digest('hex'), '4fefbe74645949a1291c6f6f05eaf4b780ea01ec5ea5105ecdcb984a');
  });


  it('produces the expected result for ShortMsgKAT_224 1736', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2d8427433d0c61f2d96cfe80cf1e932265a191365c3b61aaa3d6dcc039f6ba2ad52a6a8cc30fc10f705e6b7705105977fa496c1c708a277a124304f1fc40911e7441d1b5e77b951aad7b01fd5db1b377d165b05bbf898042e39660caf8b279fe5229d1a8db86c0999ed65e53d01ccbc4b43173ccf992b3a14586f6ba42f5fe30afa8ae40c5df29966f9346da5f8b35f16a1de3ab6de0f477d8d8660918060e88b9b9e9ca6a4207033b87a812dbf5544d39e4882010f82b6ce005f8e8ff6fe3c3806bc2b73c2b83afb704345629304f9f86358712e9fae3ca3e', 'hex'));
    assert.equal(instance.digest('hex'), '7cc9eebbe0df46a398233fa31286f8a530292b53e48ba54b6ae40472');
  });


  it('produces the expected result for ShortMsgKAT_224 1744', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5e19d97887fcaac0387e22c6f803c34a3dacd2604172433f7a8a7a526ca4a2a1271ecfc5d5d7be5ac0d85d921095350dfc65997d443c21c8094e0a3fefd2961bcb94aed03291ae310ccda75d8ace4bc7d89e7d3e5d1650bda5d668b8b50bfc8e608e184f4d3a9a2badc4ff5f07e0c0bc8a9f2e0b2a26fd6d8c550008faaab75fd71af2a424bec9a7cd9d83fad4c8e9319115656a8717d3b523a68ff8004258b9990ed362308461804ba3e3a7e92d8f2ffae5c2fba55ba5a3c27c0a2f71bd711d2fe1799c2adb31b200035481e9ee5c4adf2ab9c0fa50b23975cf', 'hex'));
    assert.equal(instance.digest('hex'), '03d718da677c4018e52288bb30e4e6e732a16144931176f0a8c73970');
  });


  it('produces the expected result for ShortMsgKAT_224 1752', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c8e976ab4638909387ce3b8d4e510c3230e5690e02c45093b1d297910abc481e56eea0f296f98379dfc9080af69e73b2399d1c143bee80ae1328162ce1ba7f6a8374679b20aacd380eb4e61382c99998704d62701afa914f9a2705cdb065885f50d086c3eb5753700c387118bb142f3e6da1e988dfb31ac75d7368931e45d1391a274b22f83ceb072f9bcabc0b216685bfd789f5023971024b1878a205442522f9ea7d8797a4102a3df41703768251fd5e017c85d1200a464118aa35654e7ca39f3c375b8ef8cbe7534dbc64bc20befb417cf60ec92f63d9ee7397', 'hex'));
    assert.equal(instance.digest('hex'), 'a9abb430fc1b3d8c6cdeb5319878e7b12b118e2e03f40562a376418c');
  });


  it('produces the expected result for ShortMsgKAT_224 1760', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7145fa124b7429a1fc2231237a949ba7201bcc1822d3272de005b682398196c25f7e5cc2f289fbf44415f699cb7fe6757791b1443410234ae061edf623359e2b4e32c19bf88450432dd01caa5eb16a1dc378f391ca5e3c4e5f356728bddd4975db7c890da8bbc84cc73ff244394d0d48954978765e4a00b593f70f2ca082673a261ed88dbcef1127728d8cd89bc2c597e9102ced6010f65fa75a14ebe467fa57ce3bd4948b6867d74a9df5c0ec6f530cbf2ee61ce6f06bc8f2864dff5583776b31df8c7ffcb61428a56bf7bd37188b4a5123bbf338393af46eda85e6', 'hex'));
    assert.equal(instance.digest('hex'), '4a7a58b337872189a06b53b6bcc50c29ef9d0bbc491832907af14ec8');
  });


  it('produces the expected result for ShortMsgKAT_224 1768', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7fdfadcc9d29bad23ae038c6c65cda1aef757221b8872ed3d75ff8df7da0627d266e224e812c39f7983e4558bfd0a1f2bef3feb56ba09120ef762917b9c093867948547aee98600d10d87b20106878a8d22c64378bf634f7f75900c03986b077b0bf8b740a82447b61b99fee5376c5eb6680ec9e3088f0bdd0c56883413d60c1357d3c811950e5890e7600103c916341b80c743c6a852b7b4fb60c3ba21f3bc15b8382437a68454779cf3cd7f9f90ccc8ef28d0b706535b1e4108eb5627bb45d719cb046839aee311ca1abdc8319e050d67972cb35a6b1601b25dbf487', 'hex'));
    assert.equal(instance.digest('hex'), '808e01cd273919ba1bff011e0e7094ec6d5c4962912b08f11965ab58');
  });


  it('produces the expected result for ShortMsgKAT_224 1776', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('988638219fd3095421f826f56e4f09e356296b628c3ce6930c9f2e758fd1a80c8273f2f61e4daae65c4f110d3e7ca0965ac7d24e34c0dc4ba2d6ff0bf5bbe93b3585f354d7543cb542a1aa54674d375077f2d360a8f4d42f3db131c3b7ab7306267ba107659864a90c8c909460a73621d1f5d9d3fd95beb19b23db1cb6c0d0fba91d36891529b8bd8263caa1bab56a4affaed44962df096d8d5b1eb845ef31188b3e10f1af811a13f156beb7a288aae593ebd1471b624aa1a7c6adf01e2200b3d72d88a3aed3100c88231e41efc376906f0b580dc895f080fda5741db1cb', 'hex'));
    assert.equal(instance.digest('hex'), 'dcbcc30b6909fdf00650f1a10cfbbd419408f9d37f378c5ca693b803');
  });


  it('produces the expected result for ShortMsgKAT_224 1784', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5aab62756d307a669d146aba988d9074c5a159b3de85151a819b117ca1ff6597f6156e80fdd28c9c3176835164d37da7da11d94e09add770b68a6e081cd22ca0c004bfe7cd283bf43a588da91f509b27a6584c474a4a2f3ee0f1f56447379240a5ab1fb77fdca49b305f07ba86b62756fb9efb4fc225c86845f026ea542076b91a0bc2cdd136e122c659be259d98e5841df4c2f60330d4d8cdee7bf1a0a244524eecc68ff2aef5bf0069c9e87a11c6e519de1a4062a10c83837388f7ef58598a3846f49d499682b683c4a062b421594fafbc1383c943ba83bdef515efcf10d', 'hex'));
    assert.equal(instance.digest('hex'), 'be077f12762ef51859b6c520b19231e30442ac268ce4fd47366ff9f1');
  });


  it('produces the expected result for ShortMsgKAT_224 1792', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('47b8216aa0fbb5d67966f2e82c17c07aa2d6327e96fcd83e3de7333689f3ee79994a1bf45082c4d725ed8d41205cb5bcdf5c341f77facb1da46a5b9b2cbc49eadf786bcd881f371a95fa17df73f606519aea0ff79d5a11427b98ee7f13a5c00637e2854134691059839121fea9abe2cd1bcbbbf27c74caf3678e05bfb1c949897ea01f56ffa4dafbe8644611685c617a3206c7a7036e4ac816799f693dafe7f19f303ce4eba09d21e03610201bfc665b72400a547a1e00fa9b7ad8d84f84b34aef118515e74def11b9188bd1e1f97d9a12c30132ec2806339bdadacda2fd8b78', 'hex'));
    assert.equal(instance.digest('hex'), '25c425265ab07d0a8ec659d4d5ee618bde87003b7255ff4b5315f1c7');
  });


  it('produces the expected result for ShortMsgKAT_224 1800', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8cff1f67fe53c098896d9136389bd8881816ccab34862bb67a656e3d98896f3ce6ffd4da73975809fcdf9666760d6e561c55238b205d8049c1cedeef374d1735daa533147bfa960b2cce4a4f254176bb4d1bd1e89654432b8dbe1a135c42115b394b024856a2a83dc85d6782be4b444239567ccec4b184d4548eae3ff6a192f343292ba2e32a0f267f31cc26719eb85245d415fb897ac2da433ee91a99424c9d7f1766a44171d1651001c38fc79294accc68ceb5665d36218454d3ba169ae058a831338c17743603f81ee173bfc0927464f9bd728dee94c6aeab7aae6ee3a627e8', 'hex'));
    assert.equal(instance.digest('hex'), '046cf62c41ce9b0f54b667558063023f59887bada9cc288414adee7f');
  });


  it('produces the expected result for ShortMsgKAT_224 1808', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('eacd07971cff9b9939903f8c1d8cbb5d4db1b548a85d04e037514a583604e787f32992bf2111b97ac5e8a938233552731321522ab5e8583561260b7d13ebeef785b23a41fd8576a6da764a8ed6d822d4957a545d5244756c18aa80e1aad4d1f9c20d259dee1711e2cc8fd013169fb7cc4ce38b362f8e0936ae9198b7e838dcea4f7a5b9429bb3f6bbcf2dc92565e3676c1c5e6eb3dd2a0f86aa23edd3d0891f197447692794b3dfa269611ad97f72b795602b4fdb198f3fd3eb41b415064256e345e8d8c51c555dc8a21904a9b0f1ad0effab7786aac2da3b196507e9f33ca356427', 'hex'));
    assert.equal(instance.digest('hex'), '37e3844080986179fda99e9b8c54e294643060795b66e810e3e25d9e');
  });


  it('produces the expected result for ShortMsgKAT_224 1816', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('23ac4e9a42c6ef45c3336ce6dfc2ff7de8884cd23dc912fef0f7756c09d335c189f3ad3a23697abda851a81881a0c8ccafc980ab2c702564c2be15fe4c4b9f10dfb2248d0d0cb2e2887fd4598a1d4acda897944a2ffc580ff92719c95cf2aa42dc584674cb5a9bc5765b9d6ddf5789791d15f8dd925aa12bffafbce60827b490bb7df3dda6f2a143c8bf96abc903d83d59a791e2d62814a89b8080a28060568cf24a80ae61179fe84e0ffad00388178cb6a617d37efd54cc01970a4a41d1a8d3ddce46edbba4ab7c90ad565398d376f431189ce8c1c33e132feae6a8cd17a61c630012', 'hex'));
    assert.equal(instance.digest('hex'), '3b503d615e54132b42cac1a0450a0d7e2edc63ed87bf109c509c7987');
  });


  it('produces the expected result for ShortMsgKAT_224 1824', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0172df732282c9d488669c358e3492260cbe91c95cfbc1e3fea6c4b0ec129b45f242ace09f152fc6234e1bee8aab8cd56e8b486e1dcba9c05407c2f95da8d8f1c0af78ee2ed82a3a79ec0cb0709396ee62aadb84f8a4ee8a7ccca3c1ee84e302a09ea802204afecf04097e67d0f8e8a9d2651126c0a598a37081e42d168b0ae8a71951c524259e4e2054e535b779679bdade566fe55700858618e626b4a0faf895bcce9011504a49e05fd56127eae3d1f8917afb548ecadabda1020111fec9314c413498a360b08640549a22cb23c731ace743252a8227a0d2689d4c6001606678dfb921', 'hex'));
    assert.equal(instance.digest('hex'), 'cb40837daf4a882538464dec0a999da482b4aae08708ea6d5d7ff461');
  });


  it('produces the expected result for ShortMsgKAT_224 1832', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3875b9240cf3e0a8b59c658540f26a701cf188496e2c2174788b126fd29402d6a75453ba0635284d08835f40051a2a9683dc92afb9383719191231170379ba6f4adc816fecbb0f9c446b785bf520796841e58878b73c58d3ebb097ce4761fdeabe15de2f319dfbaf1742cdeb389559c788131a6793e193856661376c81ce9568da19aa6925b47ffd77a43c7a0e758c37d69254909ff0fbd415ef8eb937bcd49f91468b49974c07dc819abd67395db0e05874ff83dddab895344abd0e7111b2df9e58d76d85ad98106b36295826be04d435615595605e4b4bb824b33c4afeb5e7bb0d19f909', 'hex'));
    assert.equal(instance.digest('hex'), 'eae911e66661dcd3472b458a48b74730468923c7abcac7f311f02463');
  });


  it('produces the expected result for ShortMsgKAT_224 1840', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('747cc1a59fefba94a9c75ba866c30dc5c1cb0c0f8e9361d98484956dd5d1a40f6184afbe3dac9f76028d1caeccfbf69199c6ce2b4c092a3f4d2a56fe5a33a00757f4d7dee5dfb0524311a97ae0668a47971b95766e2f6dd48c3f57841f91f04a00ad5ea70f2d479a2620dc5cd78eaab3a3b011719b7e78d19ddf70d9423798af77517ebc55392fcd01fc600d8d466b9e7a7a85bf33f9cc5419e9bd874ddfd60981150ddaf8d7febaa4374f0872a5628d318000311e2f5655365ad4d407c20e5c04df17a222e7deec79c5ab1116d8572f91cd06e1ccc7ced53736fc867fd49ecebe6bf8082e8a', 'hex'));
    assert.equal(instance.digest('hex'), '307d5a8ba5865a4d281acb2f3c5ef16e3b11bcd8c0f82d22d47c2cc8');
  });


  it('produces the expected result for ShortMsgKAT_224 1848', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('57af971fccaec97435dc2ec9ef0429bcedc6b647729ea168858a6e49ac1071e706f4a5a645ca14e8c7746d65511620682c906c8b86ec901f3dded4167b3f00b06cbfac6aee3728051b3e5ff10b4f9ed8bd0b8da94303c833755b3ca3aeddf0b54bc8d6632138b5d25bab03d17b3458a9d782108006f5bb7de75b5c0ba854b423d8bb801e701e99dc4feaad59bc1c7112453b04d33ea3635639fb802c73c2b71d58a56bbd671b18fe34ed2e3dca38827d63fdb1d4fb3285405004b2b3e26081a8ff08cd6d2b08f8e7b7e90a2ab1ed7a41b1d0128522c2f8bff56a7fe67969422ce839a9d4608f03', 'hex'));
    assert.equal(instance.digest('hex'), '58666b325d81cbe6a4bbad91720e2ba93c70ea114e7f77323c5be486');
  });


  it('produces the expected result for ShortMsgKAT_224 1856', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('04e16dedc1227902baaf332d3d08923601bdd64f573faa1bb7201918cfe16b1e10151dae875da0c0d63c59c3dd050c4c6a874011b018421afc4623ab0381831b2da2a8ba42c96e4f70864ac44e106f94311051e74c77c1291bf5db9539e69567bf6a11cf6932bbbad33f8946bf5814c066d851633d1a513510039b349939bfd42b858c21827c8ff05f1d09b1b0765dc78a135b5ca4dfba0801bcaddfa175623c8b647eacfb4444b85a44f73890607d06d507a4f8393658788669f6ef4deb58d08c50ca0756d5e2f49d1a7ad73e0f0b3d3b5f090acf622b1878c59133e4a848e05153592ea81c6fbf', 'hex'));
    assert.equal(instance.digest('hex'), 'bc296ffd39381cf1c96228a9f380f41c871b8788c654ed9b384c17fe');
  });


  it('produces the expected result for ShortMsgKAT_224 1864', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('7c815c384eee0f288ece27cced52a01603127b079c007378bc5d1e6c5e9e6d1c735723acbbd5801ac49854b2b569d4472d33f40bbb8882956245c366dc3582d71696a97a4e19557e41e54dee482a14229005f93afd2c4a7d8614d10a97a9dfa07f7cd946fa45263063ddd29db8f9e34db60daa32684f0072ea2a9426ecebfa5239fb67f29c18cbaa2af6ed4bf4283936823ac1790164fec5457a9cba7c767ca59392d94cab7448f50eb34e9a93a80027471ce59736f099c886dea1ab4cba4d89f5fc7ae2f21ccd27f611eca4626b2d08dc22382e92c1efb2f6afdc8fdc3d2172604f5035c46b8197d3', 'hex'));
    assert.equal(instance.digest('hex'), '0cceae713e5e39bcefe7a2273004816fe005d5edfb2a965cc9ac9948');
  });


  it('produces the expected result for ShortMsgKAT_224 1872', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e29d505158dbdd937d9e3d2145658ee6f5992a2fc790f4f608d9cdb44a091d5b94b88e81fac4fdf5c49442f13b911c55886469629551189eaff62488f1a479b7db11a1560e198ddccccf50159093425ff7f1cb8d1d1246d0978764087d6bac257026b090efae8cec5f22b6f21c59ace1ac7386f5b8837ca6a12b6fbf5534dd0560ef05ca78104d3b943ddb220feaec89aa5e692a00f822a2ab9a2fe60350d75e7be16ff2526dc643872502d01f42f188abed0a6e9a6f5fd0d1ce7d5755c9ffa66b0af0b20bd806f08e06156690d81ac811778ca3dac2c249b96002017fce93e507e3b953acf99964b847', 'hex'));
    assert.equal(instance.digest('hex'), '7997fdf30837d8b25e85fc01316e31b61ee814490da002a04816d7ca');
  });


  it('produces the expected result for ShortMsgKAT_224 1880', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d85588696f576e65eca0155f395f0cfacd83f36a99111ed5768df2d116d2121e32357ba4f54ede927f189f297d3a97fad4e9a0f5b41d8d89dd7fe20156799c2b7b6bf9c957ba0d6763f5c3bc5129747bbb53652b49290cff1c87e2cdf2c4b95d8aaee09bc8fbfa6883e62d237885810491bfc101f1d8c636e3d0ede838ad05c207a3df4fad76452979eb99f29afaecedd1c63b8d36cf378454a1bb67a741c77ac6b6b3f95f4f02b64dabc15438613ea49750df42ee90101f115aa9abb9ff64324dde9dabbb01054e1bd6b4bcdc7930a44c2300d87ca78c06924d0323ad7887e46c90e8c4d100acd9eed21e', 'hex'));
    assert.equal(instance.digest('hex'), '9897b479871ac73dabbe6221e27bfa67278f2bb044e3d0726fcb2b81');
  });


  it('produces the expected result for ShortMsgKAT_224 1888', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3a12f8508b40c32c74492b66323375dcfe49184c78f73179f3314b79e63376b8ac683f5a51f1534bd729b02b04d002f55cbd8e8fc9b5ec1ea6bbe6a0d0e7431518e6ba45d124035f9d3dce0a8bb7bf1430a9f657e0b4ea9f20eb20c786a58181a1e20a96f1628f8728a13bdf7a4b4b32fc8aa7054cc4881ae7fa19afa65c6c3ee1b3ade3192af42054a8a911b8ec1826865d46d93f1e7c5e2b7813c92a506e53886f3d4701bb93d2a681ad109c845904bb861af8af0646b6e399b38b614051d34f6842563a0f37ec00cb3d865fc5d746c4987de2a65071100883a2a9c7a2bfe1e2dd603d9ea24dc7c5fd06be', 'hex'));
    assert.equal(instance.digest('hex'), 'ead2620fbc4bdfb14aec8c7b9aa882ba3eb2aacc9a15d7d36dba086d');
  });


  it('produces the expected result for ShortMsgKAT_224 1896', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1861edce46fa5ad17e1ff1deae084dec580f97d0a67885dfe834b9dfac1ae076742ce9e267512ca51f6df5a455af0c5fd6abf94acea103a3370c354485a7846fb84f3ac7c2904b5b2fbf227002ce512133bb7e1c4e50057bfd1e44db33c7cdb969a99e284b184f50a14b068a1fc5009d9b298dbe92239572a7627aac02abe8f3e3b473417f36d4d2505d16b7577f4526c9d94a270a2dfe450d06da8f6fa956879a0a55cfe99e742ea555ea477ba3e9b44ccd508c375423611af92e55345dc215779b2d5119eba49c71d49b9fe3f1569fa24e5ca3e332d042422a8b8158d3ec66a80012976f31ffdf305f0c9c5e', 'hex'));
    assert.equal(instance.digest('hex'), '545e59812c7aea1bd1cd48880d6650117dfd9e58a791dac1072b19da');
  });


  it('produces the expected result for ShortMsgKAT_224 1904', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('08d0ffde3a6e4ef65608ea672e4830c12943d7187ccff08f4941cfc13e545f3b9c7ad5eebbe2b01642b486caf855c2c73f58c1e4e3391da8e2d63d96e15fd84953ae5c231911b00ad6050cd7aafdaac9b0f663ae6aab45519d0f5391a541707d479034e73a6ad805ae3598096af078f1393301493d663dd71f83869ca27ba508b7e91e81e128c1716dc3acfe3084b2201e04cf8006617eecf1b640474a5d45cfde9f4d3ef92d6d055b909892194d8a8218db6d8203a84261d200d71473d7488f3427416b6896c137d455f231071cacbc86e0415ab88aec841d96b7b8af41e05bb461a40645bf176601f1e760de5f', 'hex'));
    assert.equal(instance.digest('hex'), '7c2fa00961bcf020b95a0ed7193ea3583340bbd37898ef6a464c1940');
  });


  it('produces the expected result for ShortMsgKAT_224 1912', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d782abb72a5be3392757be02d3e45be6e2099d6f000d042c8a543f50ed6ebc055a7f133b0dd8e9bc348536edcaae2e12ec18e8837df7a1b3c87ec46d50c241dee820fd586197552dc20beea50f445a07a38f1768a39e2b2ff05dddedf751f1def612d2e4d810daa3a0cc904516f9a43af660315385178a529e51f8aae141808c8bc5d7b60cac26bb984ac1890d0436ef780426c547e94a7b08f01acbfc4a3825eae04f520a9016f2fb8bf5165ed12736fc71e36a49a73614739eaa3ec834069b1b40f1350c2b3ab885c02c640b9f7686ed5f99527e41cfcd796fe4c256c9173186c226169ff257954ebda81c0e5f99', 'hex'));
    assert.equal(instance.digest('hex'), '232db22eb2c19109afefb71918ea2daa7c0d76652e1884ea7a8ae646');
  });


  it('produces the expected result for ShortMsgKAT_224 1920', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5fce8109a358570e40983e1184e541833bb9091e280f258cfb144387b05d190e431cb19baa67273ba0c58abe91308e1844dcd0b3678baa42f335f2fa05267a0240b3c718a5942b3b3e3bfa98a55c25a1466e8d7a603722cb2bbf03afa54cd769a99f310735ee5a05dae2c22d397bd95635f58c48a67f90e1b73aafcd3f82117f0166657838691005b18da6f341d6e90fc1cdb352b30fae45d348294e501b63252de14740f2b85ae5299ddec3172de8b6d0ba219a20a23bb5e10ff434d39db3f583305e9f5c039d98569e377b75a70ab837d1df269b8a4b566f40bb91b577455fd3c356c914fa06b9a7ce24c7317a172d', 'hex'));
    assert.equal(instance.digest('hex'), 'db85af5cfce746240e6d44e73cef66a72ce5968284d35ffef7fbff6c');
  });


  it('produces the expected result for ShortMsgKAT_224 1928', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6172f1971a6e1e4e6170afbad95d5fec99bf69b24b674bc17dd78011615e502de6f56b86b1a71d3f4348087218ac7b7d09302993be272e4a591968aef18a1262d665610d1070ee91cc8da36e1f841a69a7a682c580e836941d21d909a3afc1f0b963e1ca5ab193e124a1a53df1c587470e5881fb54dae1b0d840f0c8f9d1b04c645ba1041c7d8dbf22030a623aa15638b3d99a2c400ff76f3252079af88d2b37f35ee66c1ad7801a28d3d388ac450b97d5f0f79e4541755356b3b1a5696b023f39ab7ab5f28df4202936bc97393b93bc915cb159ea1bd7a0a414cb4b7a1ac3af68f50d79f0c9c7314e750f7d02faa58bfa', 'hex'));
    assert.equal(instance.digest('hex'), 'a1eb42fb0792361f0d6809a2e8dc062f09f2855b39bc2c4b7f54311e');
  });


  it('produces the expected result for ShortMsgKAT_224 1936', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5668ecd99dfbe215c4118398ac9c9eaf1a1433fab4ccdd3968064752b625ea944731f75d48a27d047d67547f14dd0ffaa55fa5e29f7af0d161d85eafc4f2029b717c918eab9d304543290bdba7158b68020c0ba4e079bc95b5bc0fc044a992b94b4ccd3bd66d0eabb5dbbab904d62e00752c4e3b0091d773bcf4c14b4377da3efff824b1cb2fa01b32d1e46c909e626ed2dae920f4c7dbeb635bc754facbd8d49beba3f23c1c41ccbfcd0ee0c114e69737f5597c0bf1d859f0c767e18002ae8e39c26261ffde2920d3d0baf0e906138696cfe5b7e32b600f45df3aaa39932f3a7df95b60fa8712a2271fcaf3911ce7b511b1', 'hex'));
    assert.equal(instance.digest('hex'), '1af4a3ab9a07cf064c254d122cc7de15e0f0d3ca3dfa50ea1c43a78d');
  });


  it('produces the expected result for ShortMsgKAT_224 1944', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('03d625488354df30e3f875a68edfcf340e8366a8e1ab67f9d5c5486a96829dfac0578289082b2a62117e1cf418b43b90e0adc881fc6ae8105c888e9ecd21aea1c9ae1a4038dfd17378fed71d02ae492087d7cdcd98f746855227967cb1ab4714261ee3bead3f4db118329d3ebef4bc48a875c19ba763966da0ebea800e01b2f50b00e9dd4caca6dcb314d00184ef71ea2391d760c950710db4a70f9212ffc54861f9dc752ce18867b8ad0c48df8466ef7231e7ac567f0eb55099e622ebb86cb237520190a61c66ad34f1f4e289cb3282ae3eaac6152ed24d2c92bae5a7658252a53c49b7b02dfe54fdb2e90074b6cf310ac661', 'hex'));
    assert.equal(instance.digest('hex'), 'c14d43525e18892c79142d887d2ad3992848b72ccc087f64f0f1d621');
  });


  it('produces the expected result for ShortMsgKAT_224 1952', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2edc282ffb90b97118dd03aaa03b145f363905e3cbd2d50ecd692b37bf000185c651d3e9726c690d3773ec1e48510e42b17742b0b0377e7de6b8f55e00a8a4db4740cee6db0830529dd19617501dc1e9359aa3bcf147e0a76b3ab70c4984c13e339e6806bb35e683af8527093670859f3d8a0fc7d493bcba6bb12b5f65e71e705ca5d6c948d66ed3d730b26db395b3447737c26fad089aa0ad0e306cb28bf0acf106f89af3745f0ec72d534968cca543cd2ca50c94b1456743254e358c1317c07a07bf2b0eca438a709367fafc89a57239028fc5fecfd53b8ef958ef10ee0608b7f5cb9923ad97058ec067700cc746c127a61ee3', 'hex'));
    assert.equal(instance.digest('hex'), '116c0462d50d57f948015ec74be9015707313712b45883c02fe84e1e');
  });


  it('produces the expected result for ShortMsgKAT_224 1960', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('90b28a6aa1fe533915bcb8e81ed6cacdc10962b7ff82474f845eeb86977600cf70b07ba8e3796141ee340e3fce842a38a50afbe90301a3bdcc591f2e7d9de53e495525560b908c892439990a2ca2679c5539ffdf636777ad9c1cdef809cda9e8dcdb451abb9e9c17efa4379abd24b182bd981cafc792640a183b61694301d04c5b3eaad694a6bd4cc06ef5da8fa23b4fa2a64559c5a68397930079d250c51bcf00e2b16a6c49171433b0aadfd80231276560b80458dd77089b7a1bbcc9e7e4b9f881eacd6c92c4318348a13f4914eb27115a1cfc5d16d7fd94954c3532efaca2cab025103b2d02c6fd71da3a77f417d7932685888a', 'hex'));
    assert.equal(instance.digest('hex'), '96f7111176641f6373701ba594090079146d4220f30b5120c12498ba');
  });


  it('produces the expected result for ShortMsgKAT_224 1968', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2969447d175490f2aa9bb055014dbef2e6854c95f8d60950bfe8c0be8de254c26b2d31b9e4de9c68c9adf49e4ee9b1c2850967f29f5d08738483b417bb96b2a56f0c8aca632b552059c59aac3f61f7b45c966b75f1d9931ff4e596406378cee91aaa726a3a84c33f37e9cdbe626b5745a0b06064a8a8d56e53aaf102d23dd9df0a3fdf7a638509a6761a33fa42fa8ddbd8e16159c93008b53765019c3f0e9f10b144ce2ac57f5d7297f9c9949e4ff68b70d339f87501ce8550b772f32c6da8ad2ce2100a895d8b08fa1eead7c376b407709703c510b50f87e73e43f8e7348f87c3832a547ef2bbe5799abedcf5e1f372ea809233f006', 'hex'));
    assert.equal(instance.digest('hex'), '9eddab2c9c60b122503c1c30ec6e74050ee13c7e103a05f9ed41d992');
  });


  it('produces the expected result for ShortMsgKAT_224 1976', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('721645633a44a2c78b19024eaecf58575ab23c27190833c26875dc0f0d50b46aea9c343d82ea7d5b3e50ec700545c615daeaea64726a0f05607576dcd396d812b03fb6551c641087856d050b10e6a4d5577b82a98afb89cee8594c9dc19e79feff0382fcfd127f1b803a4b9946f4ac9a4378e1e6e041b1389a53e3450cd32d9d2941b0cbabdb50da8ea2513145164c3ab6bcbd251c448d2d4b087ac57a59c2285d564f16da4ed5e607ed979592146ffb0ef3f3db308fb342df5eb5924a48256fc763141a278814c82d6d6348577545870ae3a83c7230ac02a1540fe1798f7ef09e335a865a2ae0949b21e4f748fb8a51f44750e213a8fb', 'hex'));
    assert.equal(instance.digest('hex'), '54cc87b9655180c0e1c6672350ae1952ddf51ee5d7e215569652aa2e');
  });


  it('produces the expected result for ShortMsgKAT_224 1984', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6b860d39725a14b498bb714574b4d37ca787404768f64c648b1751b353ac92bac2c3a28ea909fdf0423336401a02e63ec24325300d823b6864bb701f9d7c7a1f8ec9d0ae3584aa6dd62ea1997cd831b4babd9a4da50932d4efda745c61e4130890e156aee6113716daf95764222a91187db2effea49d5d0596102d619bd26a616bbfda8335505fbb0d90b4c180d1a2335b91538e1668f9f9642790b4e55f9cab0fe2bdd2935d001ee6419abab5457880d0dbff20ed8758f4c20fe759efb33141cf0e892587fe8187e5fbc57786b7e8b089612c936dfc03d27efbbe7c8673f1606bd51d5ff386f4a7ab68edf59f385eb1291f117bfe717399', 'hex'));
    assert.equal(instance.digest('hex'), '4629c97f9ba98698e0ddeca5e0a3b6de210ea9e84bf942c2ccf4ec68');
  });


  it('produces the expected result for ShortMsgKAT_224 1992', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6a01830af3889a25183244decb508bd01253d5b508ab490d3124afbf42626b2e70894e9b562b288d0a2450cfacf14a0ddae5c04716e5a0082c33981f6037d23d5e045ee1ef2283fb8b6378a914c5d9441627a722c282ff452e25a7ea608d69cee4393a0725d17963d0342684f255496d8a18c2961145315130549311fc07f0312fb78e6077334f87eaa873bee8aa95698996eb21375eb2b4ef53c14401207deb4568398e5dd9a7cf97e8c9663e23334b46912f8344c19efcf8c2ba6f04325f1a27e062b62a58d0766fc6db4d2c6a1928604b0175d872d16b7908ebc041761187cc785526c2a3873feac3a642bb39f5351550af9770c328af7b', 'hex'));
    assert.equal(instance.digest('hex'), 'f45034aa94c1a2686eb849ef4262f2f5ba9acdd0e8ea32401e060b43');
  });


  it('produces the expected result for ShortMsgKAT_224 2000', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b3c5e74b69933c2533106c563b4ca20238f2b6e675e8681e34a389894785bdade59652d4a73d80a5c85bd454fd1e9ffdad1c3815f5038e9ef432aac5c3c4fe840cc370cf86580a6011778bbedaf511a51b56d1a2eb68394aa299e26da9ada6a2f39b9faff7fba457689b9c1a577b2a1e505fdf75c7a0a64b1df81b3a356001bf0df4e02a1fc59f651c9d585ec6224bb279c6beba2966e8882d68376081b987468e7aed1ef90ebd090ae825795cdca1b4f09a979c8dfc21a48d8a53cdbb26c4db547fc06efe2f9850edd2685a4661cb4911f165d4b63ef25b87d0a96d3dff6ab0758999aad214d07bd4f133a6734fde445fe474711b69a98f7e2b', 'hex'));
    assert.equal(instance.digest('hex'), '62153f592c49d3c0485f80073319049a510c730327940cd9d52f3698');
  });


  it('produces the expected result for ShortMsgKAT_224 2008', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('83af34279ccb5430febec07a81950d30f4b66f484826afee7456f0071a51e1bbc55570b5cc7ec6f9309c17bf5befdd7c6ba6e968cf218a2b34bd5cf927ab846e38a40bbd81759e9e33381016a755f699df35d660007b5eadf292feefb735207ebf70b5bd17834f7bfa0e16cb219ad4af524ab1ea37334aa66435e5d397fc0a065c411ebbce32c240b90476d307ce802ec82c1c49bc1bec48c0675ec2a6c6f3ed3e5b741d13437095707c565e10d8a20b8c20468ff9514fcf31b4249cd82dcee58c0a2af538b291a87e3390d737191a07484a5d3f3fb8c8f15ce056e5e5f8febe5e1fb59d6740980aa06ca8a0c20f5712b4cde5d032e92ab89f0ae1', 'hex'));
    assert.equal(instance.digest('hex'), 'ecde4d6eb0cf28010b45d0d310e7d05f08b80afc44b8a359be7e1923');
  });


  it('produces the expected result for ShortMsgKAT_224 2016', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a7ed84749ccc56bb1dfba57119d279d412b8a986886d810f067af349e8749e9ea746a60b03742636c464fc1ee233acc52c1983914692b64309edfdf29f1ab912ec3e8da074d3f1d231511f5756f0b6eead3e89a6a88fe330a10face267bffbfc3e3090c7fd9a850561f363ad75ea881e7244f80ff55802d5ef7a1a4e7b89fcfa80f16df54d1b056ee637e6964b9e0ffd15b6196bdd7db270c56b47251485348e49813b4eb9ed122a01b3ea45ad5e1a929df61d5c0f3e77e1fdc356b63883a60e9cbb9fc3e00c2f32dbd469659883f690c6772e335f617bc33f161d6f6984252ee12e62b6000ac5231e0c9bc65be223d8dfd94c5004a101af9fd6c0fb', 'hex'));
    assert.equal(instance.digest('hex'), '3bfc5018cf15cb88007929924b3e014635ef135c91f9671b29be8731');
  });


  it('produces the expected result for ShortMsgKAT_224 2024', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a6fe30dcfcda1a329e82ab50e32b5f50eb25c873c5d2305860a835aecee6264aa36a47429922c4b8b3afd00da16035830edb897831c4e7b00f2c23fc0b15fdc30d85fb70c30c431c638e1a25b51caf1d7e8b050b7f89bfb30f59f0f20fecff3d639abc4255b3868fc45dd81e47eb12ab40f2aac735df5d1dc1ad997cefc4d836b854cee9ac02900036f3867fe0d84afff37bde3308c2206c62c4743375094108877c73b87b2546fe05ea137bedfc06a2796274099a0d554da8f7d7223a48cbf31b7decaa1ebc8b145763e3673168c1b1b715c1cd99ecd3ddb238b06049885ecad9347c2436dff32c771f34a38587a44a82c5d3d137a03caa27e66c8ff6', 'hex'));
    assert.equal(instance.digest('hex'), '22715559ad15717722b1fa0583996090c79c3df16cc1e6e0f6d3e898');
  });


  it('produces the expected result for ShortMsgKAT_224 2032', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('83167ff53704c3aa19e9fb3303539759c46dd4091a52ddae9ad86408b69335989e61414bc20ab4d01220e35241eff5c9522b079fba597674c8d716fe441e566110b6211531ceccf8fd06bc8e511d00785e57788ed9a1c5c73524f01830d2e1148c92d0edc97113e3b7b5cd3049627abdb8b39dd4d6890e0ee91993f92b03354a88f52251c546e64434d9c3d74544f23fb93e5a2d2f1fb15545b4e1367c97335b0291944c8b730ad3d4789273fa44fb98d78a36c3c3764abeeac7c569c1e43a352e5b770c3504f87090dee075a1c4c85c0c39cf421bdcc615f9eff6cb4fe6468004aece5f30e1ecc6db22ad9939bb2b0ccc96521dfbf4ae008b5b46bc006e', 'hex'));
    assert.equal(instance.digest('hex'), '2f36ff8ab7264f7a5766de025018e19b5a64d90994b743b8fbfbdcca');
  });


  it('produces the expected result for ShortMsgKAT_224 2040', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3a3a819c48efde2ad914fbf00e18ab6bc4f14513ab27d0c178a188b61431e7f5623cb66b23346775d386b50e982c493adbbfc54b9a3cd383382336a1a0b2150a15358f336d03ae18f666c7573d55c4fd181c29e6ccfde63ea35f0adf5885cfc0a3d84a2b2e4dd24496db789e663170cef74798aa1bbcd4574ea0bba40489d764b2f83aadc66b148b4a0cd95246c127d5871c4f11418690a5ddf01246a0c80a43c70088b6183639dcfda4125bd113a8f49ee23ed306faac576c3fb0c1e256671d817fc2534a52f5b439f72e424de376f4c565cca82307dd9ef76da5b7c4eb7e085172e328807c02d011ffbf33785378d79dc266f6a5be6bb0e4a92eceebaeb1', 'hex'));
    assert.equal(instance.digest('hex'), '5af56987ea9cf11fcd0eac5ebc14b037365e9b1123e31cb2dfc7929a');
  });


  it('produces the expected result for ShortMsgKAT_256 8', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('cc', 'hex'));
    assert.equal(instance.digest('hex'), 'eead6dbfc7340a56caedc044696a168870549a6a7f6f56961e84a54bd9970b8a');
  });


  it('produces the expected result for ShortMsgKAT_256 16', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('41fb', 'hex'));
    assert.equal(instance.digest('hex'), 'a8eaceda4d47b3281a795ad9e1ea2122b407baf9aabcb9e18b5717b7873537d2');
  });


  it('produces the expected result for ShortMsgKAT_256 24', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1f877c', 'hex'));
    assert.equal(instance.digest('hex'), '627d7bc1491b2ab127282827b8de2d276b13d7d70fb4c5957fdf20655bc7ac30');
  });


  it('produces the expected result for ShortMsgKAT_256 32', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c1ecfdfc', 'hex'));
    assert.equal(instance.digest('hex'), 'b149e766d7612eaf7d55f74e1a4fdd63709a8115b14f61fcd22aa4abc8b8e122');
  });


  it('produces the expected result for ShortMsgKAT_256 40', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('21f134ac57', 'hex'));
    assert.equal(instance.digest('hex'), '67f05544dbe97d5d6417c1b1ea9bc0e3a99a541381d1cd9b08a9765687eb5bb4');
  });


  it('produces the expected result for ShortMsgKAT_256 48', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c6f50bb74e29', 'hex'));
    assert.equal(instance.digest('hex'), '923062c4e6f057597220d182dbb10e81cd25f60b54005b2a75dd33d6dac518d0');
  });


  it('produces the expected result for ShortMsgKAT_256 56', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('119713cc83eeef', 'hex'));
    assert.equal(instance.digest('hex'), 'feb8405dcd315d48c6cbf7a3504996de8e25cc22566efec67433712eda99894f');
  });


  it('produces the expected result for ShortMsgKAT_256 64', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('4a4f202484512526', 'hex'));
    assert.equal(instance.digest('hex'), 'e620d8f2982b24fedaaa3baa9b46c3f9ce204ee356666553ecb35e15c3ff9bf9');
  });


  it('produces the expected result for ShortMsgKAT_256 72', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1f66ab4185ed9b6375', 'hex'));
    assert.equal(instance.digest('hex'), '9e03f7c9a3d055eca1d786ed6fb624d93f1cf0ac27f9c2b6c05e509fac9e7fca');
  });


  it('produces the expected result for ShortMsgKAT_256 80', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('eed7422227613b6f53c9', 'hex'));
    assert.equal(instance.digest('hex'), 'caad8e1ed546630748a12f5351b518a9a431cda6ba56cbfc3ccbdd8aae5092f7');
  });


  it('produces the expected result for ShortMsgKAT_256 88', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('eaeed5cdffd89dece455f1', 'hex'));
    assert.equal(instance.digest('hex'), 'd61708bdb3211a9aab28d4df01dfa4b29ed40285844d841042257e97488617b0');
  });


  it('produces the expected result for ShortMsgKAT_256 96', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5be43c90f22902e4fe8ed2d3', 'hex'));
    assert.equal(instance.digest('hex'), '0f53be55990780b3fad9870f04f7d8153c3ae605c057c85abb5d71765043aaa8');
  });


  it('produces the expected result for ShortMsgKAT_256 104', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a746273228122f381c3b46e4f1', 'hex'));
    assert.equal(instance.digest('hex'), '32215ae88204a782b62d1810d945de49948de458600f5e1e3896ceca2ed3292b');
  });


  it('produces the expected result for ShortMsgKAT_256 112', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3c5871cd619c69a63b540eb5a625', 'hex'));
    assert.equal(instance.digest('hex'), '9510da68e58ebb8d2ab9de8485bb408e358299a9c011ae8544b0d0faf9d4a4ea');
  });


  it('produces the expected result for ShortMsgKAT_256 120', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fa22874bcc068879e8ef11a69f0722', 'hex'));
    assert.equal(instance.digest('hex'), 'f20b3bcf743aa6fa084038520791c364cb6d3d1dd75841f8d7021cd98322bd8f');
  });


  it('produces the expected result for ShortMsgKAT_256 128', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('52a608ab21ccdd8a4457a57ede782176', 'hex'));
    assert.equal(instance.digest('hex'), '0e32defa2071f0b5ac0e6a108b842ed0f1d3249712f58ee0ddf956fe332a5f95');
  });


  it('produces the expected result for ShortMsgKAT_256 136', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('82e192e4043ddcd12ecf52969d0f807eed', 'hex'));
    assert.equal(instance.digest('hex'), '9204550677b9aa770e6e93e319b9958540d54ff4dccb063c8561302cd8aff676');
  });


  it('produces the expected result for ShortMsgKAT_256 144', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('75683dcb556140c522543bb6e9098b21a21e', 'hex'));
    assert.equal(instance.digest('hex'), 'a6d5444cb7aa61f5106cdedb39d5e1dd7d608f102798d7e818ac87289123a1db');
  });


  it('produces the expected result for ShortMsgKAT_256 152', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('06e4efe45035e61faaf4287b4d8d1f12ca97e5', 'hex'));
    assert.equal(instance.digest('hex'), '5796b993d0bd1257cf26782b4e58fafb22b0986d88684ab5a2e6cec6706275f9');
  });


  it('produces the expected result for ShortMsgKAT_256 160', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e26193989d06568fe688e75540aea06747d9f851', 'hex'));
    assert.equal(instance.digest('hex'), 'cfbe73c6585be6204dd473abe356b539477174c4b770bfc91e9fdbcbc57086e6');
  });


  it('produces the expected result for ShortMsgKAT_256 168', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d8dc8fdefbdce9d44e4cbafe78447bae3b5436102a', 'hex'));
    assert.equal(instance.digest('hex'), '31c8006b0ec35e690674297cb27476db6066b5fa9825c60728e9e0bb338fb7c3');
  });


  it('produces the expected result for ShortMsgKAT_256 176', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('57085fd7e14216ab102d8317b0cb338a786d5fc32d8f', 'hex'));
    assert.equal(instance.digest('hex'), '3b8fa3904fe1b837565a50d0fbf03e487d6d72fc3cea41adcce33df1b835d247');
  });


  it('produces the expected result for ShortMsgKAT_256 184', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a05404df5dbb57697e2c16fa29defac8ab3560d6126fa0', 'hex'));
    assert.equal(instance.digest('hex'), '37febc4df9d50daeabd0caa6578812a687e55f1ac0b109d2512810d00548c85b');
  });


  it('produces the expected result for ShortMsgKAT_256 192', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('aecbb02759f7433d6fcb06963c74061cd83b5b3ffa6f13c6', 'hex'));
    assert.equal(instance.digest('hex'), '2329810b5a4735bcd49c10e6456c0b1ded5eac258af47cbb797ca162ab6d1ba8');
  });


  it('produces the expected result for ShortMsgKAT_256 200', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('aafdc9243d3d4a096558a360cc27c8d862f0be73db5e88aa55', 'hex'));
    assert.equal(instance.digest('hex'), '6fffa070b865be3ee766dc2db49b6aa55c369f7de3703ada2612d754145c01e6');
  });


  it('produces the expected result for ShortMsgKAT_256 208', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7bc84867f6f9e9fdc3e1046cae3a52c77ed485860ee260e30b15', 'hex'));
    assert.equal(instance.digest('hex'), 'b30761c053e926f150b9dce7e005b4d87811ccfb9e3b6edb0221022f01711cf0');
  });


  it('produces the expected result for ShortMsgKAT_256 216', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fac523575a99ec48279a7a459e98ff901918a475034327efb55843', 'hex'));
    assert.equal(instance.digest('hex'), '04f1b3c1e25ba5d012e22ad144e5a8719d94322d05ad9ef61e7db49b59959b3a');
  });


  it('produces the expected result for ShortMsgKAT_256 224', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0f8b2d8fcfd9d68cffc17ccfb117709b53d26462a3f346fb7c79b85e', 'hex'));
    assert.equal(instance.digest('hex'), 'aeef4b4da420834ffced26db291248fb2d01e765e2b0564057f8e6c2030ac37f');
  });


  it('produces the expected result for ShortMsgKAT_256 232', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a963c3e895ff5a0be4824400518d81412f875fa50521e26e85eac90c04', 'hex'));
    assert.equal(instance.digest('hex'), '03d26aeeb4a7bdddbff7cff667198c425941a2776922df2bec545f5304e2c61c');
  });


  it('produces the expected result for ShortMsgKAT_256 240', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('03a18688b10cc0edf83adf0a84808a9718383c4070c6c4f295098699ac2c', 'hex'));
    assert.equal(instance.digest('hex'), '435cfc0d1afd8d5509a9ccbf49706575038685bf08db549d9714548240463ee9');
  });


  it('produces the expected result for ShortMsgKAT_256 248', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('84fb51b517df6c5accb5d022f8f28da09b10232d42320ffc32dbecc3835b29', 'hex'));
    assert.equal(instance.digest('hex'), 'd477fb02caaa95b3280ec8ee882c29d9e8a654b21ef178e0f97571bf9d4d3c1c');
  });


  it('produces the expected result for ShortMsgKAT_256 256', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('9f2fcc7c90de090d6b87cd7e9718c1ea6cb21118fc2d5de9f97e5db6ac1e9c10', 'hex'));
    assert.equal(instance.digest('hex'), '24dd2ee02482144f539f810d2caa8a7b75d0fa33657e47932122d273c3f6f6d1');
  });


  it('produces the expected result for ShortMsgKAT_256 264', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('de8f1b3faa4b7040ed4563c3b8e598253178e87e4d0df75e4ff2f2dedd5a0be046', 'hex'));
    assert.equal(instance.digest('hex'), 'e78c421e6213aff8de1f025759a4f2c943db62bbde359c8737e19b3776ed2dd2');
  });


  it('produces the expected result for ShortMsgKAT_256 272', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('62f154ec394d0bc757d045c798c8b87a00e0655d0481a7d2d9fb58d93aedc676b5a0', 'hex'));
    assert.equal(instance.digest('hex'), 'cce3e3d498328a4d9c5b4dbf9a1209628ab82621ad1a0d0a18680362889e6164');
  });


  it('produces the expected result for ShortMsgKAT_256 280', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b2dcfe9ff19e2b23ce7da2a4207d3e5ec7c6112a8a22aec9675a886378e14e5bfbad4e', 'hex'));
    assert.equal(instance.digest('hex'), 'f871db93c5c92ecd65d4edb96fcb12e4729bc2a1899f7fb029f50bff431cbb72');
  });


  it('produces the expected result for ShortMsgKAT_256 288', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('47f5697ac8c31409c0868827347a613a3562041c633cf1f1f86865a576e02835ed2c2492', 'hex'));
    assert.equal(instance.digest('hex'), '4eb143477431df019311aed936cab91a912ec1e6868b71e9eddb777408d4af34');
  });


  it('produces the expected result for ShortMsgKAT_256 296', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('512a6d292e67ecb2fe486bfe92660953a75484ff4c4f2eca2b0af0edcdd4339c6b2ee4e542', 'hex'));
    assert.equal(instance.digest('hex'), '9a0c1d50a59dbf657f6713c795ed14e1f23b4eaa137c5540aacdb0a7e32c29fc');
  });


  it('produces the expected result for ShortMsgKAT_256 304', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('973cf2b4dcf0bfa872b41194cb05bb4e16760a1840d8343301802576197ec19e2a1493d8f4fb', 'hex'));
    assert.equal(instance.digest('hex'), 'ba062e5d370216d11985c4ca7a2658ddc7328b4be4b40a52dd8fa3ca662f09d1');
  });


  it('produces the expected result for ShortMsgKAT_256 312', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('80beebcd2e3f8a9451d4499961c9731ae667cdc24ea020ce3b9aa4bbc0a7f79e30a934467da4b0', 'hex'));
    assert.equal(instance.digest('hex'), '3a083ae163df42bd51b9c664bee9dc4362f16e63383df16473df71be6dd40c1c');
  });


  it('produces the expected result for ShortMsgKAT_256 320', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7abaa12ec2a7347674e444140ae0fb659d08e1c66decd8d6eae925fa451d65f3c0308e29446b8ed3', 'hex'));
    assert.equal(instance.digest('hex'), '4876e273ac00942576d9608d5b63ecc9a3e75d5e0c42c6abdbcde037785af9a7');
  });


  it('produces the expected result for ShortMsgKAT_256 328', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c88dee9927679b8af422abcbacf283b904ff31e1cac58c7819809f65d5807d46723b20f67ba610c2b7', 'hex'));
    assert.equal(instance.digest('hex'), '4797ba1c7ab7197050d6b2e506f2df4550e4b673df78f18c465424e48df5e997');
  });


  it('produces the expected result for ShortMsgKAT_256 336', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('01e43fe350fcec450ec9b102053e6b5d56e09896e0ddd9074fe138e6038210270c834ce6eadc2bb86bf6', 'hex'));
    assert.equal(instance.digest('hex'), '41c91be98c5813a4c5d8ae7c29b9919c1cc95b4a05f82433948cb99d9a6d039c');
  });


  it('produces the expected result for ShortMsgKAT_256 344', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('337023370a48b62ee43546f17c4ef2bf8d7ecd1d49f90bab604b839c2e6e5bd21540d29ba27ab8e309a4b7', 'hex'));
    assert.equal(instance.digest('hex'), 'ee354290e3f9ce9123c49ba616e1a2684a90f3ddd84e73a1d2c232f740412b18');
  });


  it('produces the expected result for ShortMsgKAT_256 352', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6892540f964c8c74bd2db02c0ad884510cb38afd4438af31fc912756f3efec6b32b58ebc38fc2a6b913596a8', 'hex'));
    assert.equal(instance.digest('hex'), 'fbec0b6d71696eede900b77aa6d7d25f4ab45df8961ca9c8b3f4f9b51af983ab');
  });


  it('produces the expected result for ShortMsgKAT_256 360', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f5961dfd2b1ffffda4ffbf30560c165bfedab8ce0be525845deb8dc61004b7db38467205f5dcfb34a2acfe96c0', 'hex'));
    assert.equal(instance.digest('hex'), '9d24aeea08f9a4b5fb8b6de85a2296f5f4108ddd1eea4f8ee58819cf84edb765');
  });


  it('produces the expected result for ShortMsgKAT_256 368', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('ca061a2eb6ceed8881ce2057172d869d73a1951e63d57261384b80ceb5451e77b06cf0f5a0ea15ca907ee1c27eba', 'hex'));
    assert.equal(instance.digest('hex'), '732034cae3ff1116f07fc18b5a26ef8faf3fe75d3dbca05e48795365e0a17c40');
  });


  it('produces the expected result for ShortMsgKAT_256 376', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1743a77251d69242750c4f1140532cd3c33f9b5ccdf7514e8584d4a5f9fbd730bcf84d0d4726364b9bf95ab251d9bb', 'hex'));
    assert.equal(instance.digest('hex'), 'deac521805bc6a97c0870e9e225d1c4b2fd8f3a9a7f6b39e357c26414821e2dd');
  });


  it('produces the expected result for ShortMsgKAT_256 384', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d8faba1f5194c4db5f176fabfff856924ef627a37cd08cf55608bba8f1e324d7c7f157298eabc4dce7d89ce5162499f9', 'hex'));
    assert.equal(instance.digest('hex'), 'ad55537347b20d9fca02683e6de1032ec10eb84da4cbd501e49744a666292edf');
  });


  it('produces the expected result for ShortMsgKAT_256 392', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('be9684be70340860373c9c482ba517e899fc81baaa12e5c6d7727975d1d41ba8bef788cdb5cf4606c9c1c7f61aed59f97d', 'hex'));
    assert.equal(instance.digest('hex'), 'b1f990204bf630569a3edc634864274786f40ce1c57165ee32d0e29f5d0c6851');
  });


  it('produces the expected result for ShortMsgKAT_256 400', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7e15d2b9ea74ca60f66c8dfab377d9198b7b16deb6a1ba0ea3c7ee2042f89d3786e779cf053c77785aa9e692f821f14a7f51', 'hex'));
    assert.equal(instance.digest('hex'), 'fa460cd51bc611786d364fcabe39052bcd5f009edfa81f4701c5b22b729b0016');
  });


  it('produces the expected result for ShortMsgKAT_256 408', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('9a219be43713bd578015e9fda66c0f2d83cac563b776ab9f38f3e4f7ef229cb443304fba401efb2bdbd7ece939102298651c86', 'hex'));
    assert.equal(instance.digest('hex'), 'f7b0fe5a69ff44060d4f6ad2486e6cde9ed679af9aa1ada613e4cc392442beb5');
  });


  it('produces the expected result for ShortMsgKAT_256 416', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c8f2b693bd0d75ef99caebdc22adf4088a95a3542f637203e283bbc3268780e787d68d28cc3897452f6a22aa8573ccebf245972a', 'hex'));
    assert.equal(instance.digest('hex'), '24204d491f202534859fc0a208237184471a2d801fb3b934d0968d0d843d0345');
  });


  it('produces the expected result for ShortMsgKAT_256 424', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('ec0f99711016c6a2a07ad80d16427506ce6f441059fd269442baaa28c6ca037b22eeac49d5d894c0bf66219f2c08e9d0e8ab21de52', 'hex'));
    assert.equal(instance.digest('hex'), '81147cba0647eee78c4784874c0557621a138ca781fb6f5dcd0d9c609af56f35');
  });


  it('produces the expected result for ShortMsgKAT_256 432', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0dc45181337ca32a8222fe7a3bf42fc9f89744259cff653504d6051fe84b1a7ffd20cb47d4696ce212a686bb9be9a8ab1c697b6d6a33', 'hex'));
    assert.equal(instance.digest('hex'), '5b6d7eda559574fae882e6266f4c2be362133e44b5a947ecb6e75db9fc8567e0');
  });


  it('produces the expected result for ShortMsgKAT_256 440', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('de286ba4206e8b005714f80fb1cdfaebde91d29f84603e4a3ebc04686f99a46c9e880b96c574825582e8812a26e5a857ffc6579f63742f', 'hex'));
    assert.equal(instance.digest('hex'), '86f87e75c87f9be39e4aa6d0c5a37a5964d6ffdc462525c0642c9db010de38ee');
  });


  it('produces the expected result for ShortMsgKAT_256 448', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('eebcc18057252cbf3f9c070f1a73213356d5d4bc19ac2a411ec8cdeee7a571e2e20eaf61fd0c33a0ffeb297ddb77a97f0a415347db66bcaf', 'hex'));
    assert.equal(instance.digest('hex'), '959fe007b57c2947c36d1d66cc0808d80db7df45d68a34852b70d2dda192c25c');
  });


  it('produces the expected result for ShortMsgKAT_256 456', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('416b5cdc9fe951bd361bd7abfc120a5054758eba88fdd68fd84e39d3b09ac25497d36b43cbe7b85a6a3cebda8db4e5549c3ee51bb6fcb6ac1e', 'hex'));
    assert.equal(instance.digest('hex'), '1a93567eebc41cc44d9346cde646005d3e82de8eeeb131e9c1f6d1e4afd260f7');
  });


  it('produces the expected result for ShortMsgKAT_256 464', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5c5faf66f32e0f8311c32e8da8284a4ed60891a5a7e50fb2956b3cbaa79fc66ca376460e100415401fc2b8518c64502f187ea14bfc9503759705', 'hex'));
    assert.equal(instance.digest('hex'), '549db056b65edf7d05bd66661b6d0a39b29b825bc80910f8bf7060a53bff68e1');
  });


  it('produces the expected result for ShortMsgKAT_256 472', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7167e1e02be1a7ca69d788666f823ae4eef39271f3c26a5cf7cee05bca83161066dc2e217b330df821103799df6d74810eed363adc4ab99f36046a', 'hex'));
    assert.equal(instance.digest('hex'), '794abfd7eb622d5608c1c7b3f0a7821a71900b7172847fb0907aa2899972663e');
  });


  it('produces the expected result for ShortMsgKAT_256 480', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2fda311dbba27321c5329510fae6948f03210b76d43e7448d1689a063877b6d14c4f6d0eaa96c150051371f7dd8a4119f7da5c483cc3e6723c01fb7d', 'hex'));
    assert.equal(instance.digest('hex'), '9ce89958cbddd8dcb22f66e8cba5f6091a51953189464803bdc773abc7faa906');
  });


  it('produces the expected result for ShortMsgKAT_256 488', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('95d1474a5aab5d2422aca6e481187833a6212bd2d0f91451a67dd786dfc91dfed51b35f47e1deb8a8ab4b9cb67b70179cc26f553ae7b569969ce151b8d', 'hex'));
    assert.equal(instance.digest('hex'), '6da733817dc826e8da773beca7338131ab7396417104eda25970980c4eb2a15f');
  });


  it('produces the expected result for ShortMsgKAT_256 496', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c71bd7941f41df044a2927a8ff55b4b467c33d089f0988aa253d294addbdb32530c0d4208b10d9959823f0c0f0734684006df79f7099870f6bf53211a88d', 'hex'));
    assert.equal(instance.digest('hex'), '66c9cdc8e8c6c9417d7ffbef3b54b702eee5f01a9bda8dd4e28fe3335debbb51');
  });


  it('produces the expected result for ShortMsgKAT_256 504', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f57c64006d9ea761892e145c99df1b24640883da79d9ed5262859dcda8c3c32e05b03d984f1ab4a230242ab6b78d368dc5aaa1e6d3498d53371e84b0c1d4ba', 'hex'));
    assert.equal(instance.digest('hex'), '24ab37a93674ccb1ceec9e5681efc8bdf9fcc7721cf1cac175e0b20e461575b8');
  });


  it('produces the expected result for ShortMsgKAT_256 512', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e926ae8b0af6e53176dbffcc2a6b88c6bd765f939d3d178a9bde9ef3aa131c61e31c1e42cdfaf4b4dcde579a37e150efbef5555b4c1cb40439d835a724e2fae7', 'hex'));
    assert.equal(instance.digest('hex'), '574271cd13959e8ddeae5bfbdb02a3fdf54f2babfd0cbeb893082a974957d0c1');
  });


  it('produces the expected result for ShortMsgKAT_256 520', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('16e8b3d8f988e9bb04de9c96f2627811c973ce4a5296b4772ca3eefeb80a652bdf21f50df79f32db23f9f73d393b2d57d9a0297f7a2f2e79cfda39fa393df1ac00', 'hex'));
    assert.equal(instance.digest('hex'), '1947e901fa59ea789845775f2a4db9b4848f8a776073d53d84cbd5d927a96bff');
  });


  it('produces the expected result for ShortMsgKAT_256 528', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fc424eeb27c18a11c01f39c555d8b78a805b88dba1dc2a42ed5e2c0ec737ff68b2456d80eb85e11714fa3f8eabfb906d3c17964cb4f5e76b29c1765db03d91be37fc', 'hex'));
    assert.equal(instance.digest('hex'), '0c1b8c1af237e9c5501b50316a80865aac08a34acf4f8bedd4a2d6e7b7bcbb85');
  });


  it('produces the expected result for ShortMsgKAT_256 536', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('abe3472b54e72734bdba7d9158736464251c4f21b33fbbc92d7fac9a35c4e3322ff01d2380cbaa4ef8fb07d21a2128b7b9f5b6d9f34e13f39c7ffc2e72e47888599ba5', 'hex'));
    assert.equal(instance.digest('hex'), 'c4315666c71fea834d8ff27f025f5cc34f37c1aae78604a4b08dac45decd42be');
  });


  it('produces the expected result for ShortMsgKAT_256 544', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('36f9f0a65f2ca498d739b944d6eff3da5ebba57e7d9c41598a2b0e4380f3cf4b479ec2348d015ffe6256273511154afcf3b4b4bf09d6c4744fdd0f62d75079d440706b05', 'hex'));
    assert.equal(instance.digest('hex'), '5ff8734db3f9977eee9cf5e2cf725c57af09926490c55abd9d00a42e91a8c344');
  });


  it('produces the expected result for ShortMsgKAT_256 552', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('abc87763cae1ca98bd8c5b82caba54ac83286f87e9610128ae4de68ac95df5e329c360717bd349f26b872528492ca7c94c2c1e1ef56b74dbb65c2ac351981fdb31d06c77a4', 'hex'));
    assert.equal(instance.digest('hex'), '1e141a171cab085252ea4c2f8f1f1087dd85a75ab3acd0b3c28eaa5735d349af');
  });


  it('produces the expected result for ShortMsgKAT_256 560', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('94f7ca8e1a54234c6d53cc734bb3d3150c8ba8c5f880eab8d25fed13793a9701ebe320509286fd8e422e931d99c98da4df7e70ae447bab8cffd92382d8a77760a259fc4fbd72', 'hex'));
    assert.equal(instance.digest('hex'), 'ef763f22f359dd7f5b3fe6a745c423d6b641ec07ba5235232a0701510f74426e');
  });


  it('produces the expected result for ShortMsgKAT_256 568', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('13bd2811f6ed2b6f04ff3895aceed7bef8dcd45eb121791bc194a0f806206bffc3b9281c2b308b1a729ce008119dd3066e9378acdcc50a98a82e20738800b6cddbe5fe9694ad6d', 'hex'));
    assert.equal(instance.digest('hex'), '6a769f93f255b078fe73aff68f0422a279939920e4690b4aff0e433cfa3d3df3');
  });


  it('produces the expected result for ShortMsgKAT_256 576', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1eed9cba179a009ec2ec5508773dd305477ca117e6d569e66b5f64c6bc64801ce25a8424ce4a26d575b8a6fb10ead3fd1992edddeec2ebe7150dc98f63adc3237ef57b91397aa8a7', 'hex'));
    assert.equal(instance.digest('hex'), 'c06dd4261638c44afcb186f0af5de20ea53aa63316fbb71728f874ff3daceb0d');
  });


  it('produces the expected result for ShortMsgKAT_256 584', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('ba5b67b5ec3a3ffae2c19dd8176a2ef75c0cd903725d45c9cb7009a900c0b0ca7a2967a95ae68269a6dbf8466c7b6844a1d608ac661f7eff00538e323db5f2c644b78b2d48de1a08aa', 'hex'));
    assert.equal(instance.digest('hex'), 'b5d84b1809e83b5e75aa53bdee79e3a97f3fe3a7d3162ebd4908240ff69131d8');
  });


  it('produces the expected result for ShortMsgKAT_256 592', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0efa26ac5673167dcacab860932ed612f65ff49b80fa9ae65465e5542cb62075df1c5ae54fba4db807be25b070033efa223bdd5b1d3c94c6e1909c02b620d4b1b3a6c9fed24d70749604', 'hex'));
    assert.equal(instance.digest('hex'), 'cad7abb5bba5905b5181dd2dbc4e68cfd01ba8659f21c8290d3f835c1a68bbe5');
  });


  it('produces the expected result for ShortMsgKAT_256 600', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('bbfd933d1fd7bf594ac7f435277dc17d8d5a5b8e4d13d96d2f64e771abbd51a5a8aea741beccbddb177bcea05243ebd003cfdeae877cca4da94605b67691919d8b033f77d384ca01593c1b', 'hex'));
    assert.equal(instance.digest('hex'), '83ca09c1f418b5dad0a7f64a904a2e07c3314f7d02d92622f8f4674bc1f6aa3d');
  });


  it('produces the expected result for ShortMsgKAT_256 608', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('90078999fd3c35b8afbf4066cbde335891365f0fc75c1286cdd88fa51fab94f9b8def7c9ac582a5dbcd95817afb7d1b48f63704e19c2baa4df347f48d4a6d603013c23f1e9611d595ebac37c', 'hex'));
    assert.equal(instance.digest('hex'), '330de3ee16aef6711461a994863eed47af71b362d4c2f243534ef432f63a091a');
  });


  it('produces the expected result for ShortMsgKAT_256 616', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('64105eca863515c20e7cfbaa0a0b8809046164f374d691cdbd6508aaabc1819f9ac84b52bafc1b0fe7cddbc554b608c01c8904c669d8db316a0953a4c68ece324ec5a49ffdb59a1bd6a292aa0e', 'hex'));
    assert.equal(instance.digest('hex'), 'b5675197e49b357218f7118cd15ee773b39bd59b224d9a45ca71c6e371d938f1');
  });


  it('produces the expected result for ShortMsgKAT_256 624', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d4654be288b9f3b711c2d02015978a8cc57471d5680a092aa534f7372c71ceaab725a383c4fcf4d8deaa57fca3ce056f312961eccf9b86f14981ba5bed6ab5b4498e1f6c82c6cae6fc14845b3c8a', 'hex'));
    assert.equal(instance.digest('hex'), 'cd9038c1066a59990df5752107b066eebbe672cbca0f60d687d03a9d821934be');
  });


  it('produces the expected result for ShortMsgKAT_256 632', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('12d9394888305ac96e65f2bf0e1b18c29c90fe9d714dd59f651f52b88b3008c588435548066ea2fc4c101118c91f32556224a540de6efddbca296ef1fb00341f5b01fecfc146bdb251b3bdad556cd2', 'hex'));
    assert.equal(instance.digest('hex'), 'd3172ca263aff2b9db6fb13337f2543c5af51151801a76194012f710306c14f6');
  });


  it('produces the expected result for ShortMsgKAT_256 640', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('871a0d7a5f36c3da1dfce57acd8ab8487c274fad336bc137ebd6ff4658b547c1dcfab65f037aa58f35ef16aff4abe77ba61f65826f7be681b5b6d5a1ea8085e2ae9cd5cf0991878a311b549a6d6af230', 'hex'));
    assert.equal(instance.digest('hex'), '9e3d4bcf580eece39bcf13e5716e5bb8f5e8c3fc3723f66246f836d8db1238f1');
  });


  it('produces the expected result for ShortMsgKAT_256 648', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e90b4ffef4d457bc7711ff4aa72231ca25af6b2e206f8bf859d8758b89a7cd36105db2538d06da83bad5f663ba11a5f6f61f236fd5f8d53c5e89f183a3cec615b50c7c681e773d109ff7491b5cc22296c5', 'hex'));
    assert.equal(instance.digest('hex'), 'edc2d3b49c85b8dd75f7b5128da04cd76bf4878779a0077af3f1d7fb44f18931');
  });


  it('produces the expected result for ShortMsgKAT_256 656', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e728de62d75856500c4c77a428612cd804f30c3f10d36fb219c5ca0aa30726ab190e5f3f279e0733d77e7267c17be27d21650a9a4d1e32f649627638dbada9702c7ca303269ed14014b2f3cf8b894eac8554', 'hex'));
    assert.equal(instance.digest('hex'), '80dce7f04dd6ac17ce709b56cf6ea6c0a57190649bb187b5e6d95fa18100c7ac');
  });


  it('produces the expected result for ShortMsgKAT_256 664', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6348f229e7b1df3b770c77544e5166e081850fa1c6c88169db74c76e42eb983facb276ad6a0d1fa7b50d3e3b6fcd799ec97470920a7abed47d288ff883e24ca21c7f8016b93bb9b9e078bdb9703d2b781b616e', 'hex'));
    assert.equal(instance.digest('hex'), '49bbd5435d2706f85fe77b84a5fa15ddd8259e5d2c20fb947f139373e5c86121');
  });


  it('produces the expected result for ShortMsgKAT_256 672', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('4b127fde5de733a1680c2790363627e63ac8a3f1b4707d982caea258655d9bf18f89afe54127482ba01e08845594b671306a025c9a5c5b6f93b0a39522dc877437be5c2436cbf300ce7ab6747934fcfc30aeaaf6', 'hex'));
    assert.equal(instance.digest('hex'), '6b6c11f9731d60789d713daf53d2eb10ab9ccf15430ea5d1249be06edfe2bff6');
  });


  it('produces the expected result for ShortMsgKAT_256 680', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('08461f006cff4cc64b752c957287e5a0faabc05c9bff89d23fd902d324c79903b48fcb8f8f4b01f3e4ddb483593d25f000386698f5ade7faade9615fdc50d32785ea51d49894e45baa3dc707e224688c6408b68b11', 'hex'));
    assert.equal(instance.digest('hex'), '7e738e8eb3d47d18e97d87c7b3fc681f86417883ced92ba93c3077812bbd17e7');
  });


  it('produces the expected result for ShortMsgKAT_256 688', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('68c8f8849b120e6e0c9969a5866af591a829b92f33cd9a4a3196957a148c49138e1e2f5c7619a6d5edebe995acd81ec8bb9c7b9cfca678d081ea9e25a75d39db04e18d475920ce828b94e72241f24db72546b352a0e4', 'hex'));
    assert.equal(instance.digest('hex'), 'a278ba93ba0d7cd2677be08c9dfc5f516a37f722bb06565fa22500f66fe031a9');
  });


  it('produces the expected result for ShortMsgKAT_256 696', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b8d56472954e31fb54e28fca743f84d8dc34891cb564c64b08f7b71636debd64ca1edbdba7fc5c3e40049ce982bba8c7e0703034e331384695e9de76b5104f2fbc4535ecbeebc33bc27f29f18f6f27e8023b0fbb6f563c', 'hex'));
    assert.equal(instance.digest('hex'), '9c0a9f0da113d39f491b7da6c4da5d84fe1cc46367e5acc433ca3e0500951738');
  });


  it('produces the expected result for ShortMsgKAT_256 704', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0d58ac665fa84342e60cefee31b1a4eacdb092f122dfc68309077aed1f3e528f578859ee9e4cefb4a728e946324927b675cd4f4ac84f64db3dacfe850c1dd18744c74ceccd9fe4dc214085108f404eab6d8f452b5442a47d', 'hex'));
    assert.equal(instance.digest('hex'), '6bed496d02fe4cc27d96dceed14a67da7bdf75e19b624896dff6b0b68e4fcc12');
  });


  it('produces the expected result for ShortMsgKAT_256 712', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1755e2d2e5d1c1b0156456b539753ff416651d44698e87002dcf61dcfa2b4e72f264d9ad591df1fdee7b41b2eb00283c5aebb3411323b672eaa145c5125185104f20f335804b02325b6dea65603f349f4d5d8b782dd3469ccd', 'hex'));
    assert.equal(instance.digest('hex'), 'ecd2e3faf4ba4dd67e5a8656cebebdb24611611678e92eb60f7cbd3111d0a345');
  });


  it('produces the expected result for ShortMsgKAT_256 720', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b180de1a611111ee7584ba2c4b020598cd574ac77e404e853d15a101c6f5a2e5c801d7d85dc95286a1804c870bb9f00fd4dcb03aa8328275158819dcad7253f3e3d237aeaa7979268a5db1c6ce08a9ec7c2579783c8afc1f91a7', 'hex'));
    assert.equal(instance.digest('hex'), '634a95a7e8ba58f7818a13903ec8f3411b6ecb7e389ec9aa97c0ecf87fadd588');
  });


  it('produces the expected result for ShortMsgKAT_256 728', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('cf3583cbdfd4cbc17063b1e7d90b02f0e6e2ee05f99d77e24e560392535e47e05077157f96813544a17046914f9efb64762a23cf7a49fe52a0a4c01c630cfe8727b81fb99a89ff7cc11dca5173057e0417b8fe7a9efba6d95c555f', 'hex'));
    assert.equal(instance.digest('hex'), 'a0fe352ba2389b0430edbe1201032eb09c255514c5c5b529c4baafceb1ac9817');
  });


  it('produces the expected result for ShortMsgKAT_256 736', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('072fc02340ef99115bad72f92c01e4c093b9599f6cfc45cb380ee686cb5eb019e806ab9bd55e634ab10aa62a9510cc0672cd3eddb589c7df2b67fcd3329f61b1a4441eca87a33c8f55da4fbbad5cf2b2527b8e983bb31a2fadec7523', 'hex'));
    assert.equal(instance.digest('hex'), '9a0bfe14f9f3127aca86773a620945731df781a6d7dc82930ccde2f69dac8f94');
  });


  it('produces the expected result for ShortMsgKAT_256 744', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('76eecf956a52649f877528146de33df249cd800e21830f65e90f0f25ca9d6540fde40603230eca6760f1139c7f268deba2060631eea92b1fff05f93fd5572fbe29579ecd48bc3a8d6c2eb4a6b26e38d6c5fbf2c08044aeea470a8f2f26', 'hex'));
    assert.equal(instance.digest('hex'), '19e5101bde60b200a8b171e4c3ea3dfd913e10111d96f9682acc7467282b4e31');
  });


  it('produces the expected result for ShortMsgKAT_256 752', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7adc0b6693e61c269f278e6944a5a2d8300981e40022f839ac644387bfac9086650085c2cdc585fea47b9d2e52d65a2b29a7dc370401ef5d60dd0d21f9e2b90fae919319b14b8c5565b0423cefb827d5f1203302a9d01523498a4db10374', 'hex'));
    assert.equal(instance.digest('hex'), '4cc2aff141987f4c2e683fa2de30042bacdcd06087d7a7b014996e9cfeaa58ce');
  });


  it('produces the expected result for ShortMsgKAT_256 760', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e1fffa9826cce8b86bccefb8794e48c46cdf372013f782eced1e378269b7be2b7bf51374092261ae120e822be685f2e7a83664bcfbe38fe8633f24e633ffe1988e1bc5acf59a587079a57a910bda60060e85b5f5b6f776f0529639d9cce4bd', 'hex'));
    assert.equal(instance.digest('hex'), '9a8ce819894efccc2153b239c3adc3f07d0968eac5ec8080ac0174f2d5e6959c');
  });


  it('produces the expected result for ShortMsgKAT_256 768', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('69f9abba65592ee01db4dce52dbab90b08fc04193602792ee4daa263033d59081587b09bbe49d0b49c9825d22840b2ff5d9c5155f975f8f2c2e7a90c75d2e4a8040fe39f63bbafb403d9e28cc3b86e04e394a9c9e8065bd3c85fa9f0c7891600', 'hex'));
    assert.equal(instance.digest('hex'), '8b35768525f59ac77d35522ac885831a9947299e114a8956fe5bca103db7bb2c');
  });


  it('produces the expected result for ShortMsgKAT_256 776', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('38a10a352ca5aedfa8e19c64787d8e9c3a75dbf3b8674bfab29b5dbfc15a63d10fae66cd1a6e6d2452d557967eaad89a4c98449787b0b3164ca5b717a93f24eb0b506ceb70cbbcb8d72b2a72993f909aad92f044e0b5a2c9ac9cb16a0ca2f81f49', 'hex'));
    assert.equal(instance.digest('hex'), '955f1f7e4e54660b26f30086f2dddaedd32813547c1b95d305d882682b4ff7a0');
  });


  it('produces the expected result for ShortMsgKAT_256 784', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6d8c6e449bc13634f115749c248c17cd148b72157a2c37bf8969ea83b4d6ba8c0ee2711c28ee11495f43049596520ce436004b026b6c1f7292b9c436b055cbb72d530d860d1276a1502a5140e3c3f54a93663e4d20edec32d284e25564f624955b52', 'hex'));
    assert.equal(instance.digest('hex'), '8fac5a34ebafa38b55333624a9514fe97d9956e74309c5252cd2090d3bbe2f9e');
  });


  it('produces the expected result for ShortMsgKAT_256 792', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6efcbcaf451c129dbe00b9cef0c3749d3ee9d41c7bd500ade40cdc65dedbbbadb885a5b14b32a0c0d087825201e303288a733842fa7e599c0c514e078f05c821c7a4498b01c40032e9f1872a1c925fa17ce253e8935e4c3c71282242cb716b2089ccc1', 'hex'));
    assert.equal(instance.digest('hex'), '62039e0f53869480f88c87bb3d19a31aad32878f27f2c4e78ff02bbea2b8b0b9');
  });


  it('produces the expected result for ShortMsgKAT_256 800', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('433c5303131624c0021d868a30825475e8d0bd3052a022180398f4ca4423b98214b6beaac21c8807a2c33f8c93bd42b092cc1b06cedf3224d5ed1ec29784444f22e08a55aa58542b524b02cd3d5d5f6907afe71c5d7462224a3f9d9e53e7e0846dcbb4ce', 'hex'));
    assert.equal(instance.digest('hex'), 'ce87a5173bffd92399221658f801d45c294d9006ee9f3f9d419c8d427748dc41');
  });


  it('produces the expected result for ShortMsgKAT_256 808', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a873e0c67ca639026b6683008f7aa6324d4979550e9bce064ca1e1fb97a30b147a24f3f666c0a72d71348ede701cf2d17e2253c34d1ec3b647dbcef2f879f4eb881c4830b791378c901eb725ea5c172316c6d606e0af7df4df7f76e490cd30b2badf45685f', 'hex'));
    assert.equal(instance.digest('hex'), '2ef8907b60108638e50eac535cc46ca02e04581ddb4235fbac5cb5c53583e24b');
  });


  it('produces the expected result for ShortMsgKAT_256 816', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('006917b64f9dcdf1d2d87c8a6173b64f6587168e80faa80f82d84f60301e561e312d9fbce62f39a6fb476e01e925f26bcc91de621449be6504c504830aae394096c8fc7694651051365d4ee9070101ec9b68086f2ea8f8ab7b811ea8ad934d5c9b62c60a4771', 'hex'));
    assert.equal(instance.digest('hex'), 'be8b5bd36518e9c5f4c768fc02461bb3d39a5d00edef82cec7df351df80238e0');
  });


  it('produces the expected result for ShortMsgKAT_256 824', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f13c972c52cb3cc4a4df28c97f2df11ce089b815466be88863243eb318c2adb1a417cb1041308598541720197b9b1cb5ba2318bd5574d1df2174af14884149ba9b2f446d609df240ce335599957b8ec80876d9a085ae084907bc5961b20bf5f6ca58d5dab38adb', 'hex'));
    assert.equal(instance.digest('hex'), '52cbc5dbe49b009663c43f079dd180e38a77533778062a72a29e864a58522922');
  });


  it('produces the expected result for ShortMsgKAT_256 832', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e35780eb9799ad4c77535d4ddb683cf33ef367715327cf4c4a58ed9cbdcdd486f669f80189d549a9364fa82a51a52654ec721bb3aab95dceb4a86a6afa93826db923517e928f33e3fba850d45660ef83b9876accafa2a9987a254b137c6e140a21691e1069413848', 'hex'));
    assert.equal(instance.digest('hex'), '3a8dfcfd1b362003ddfa17910727539e64b18021abba018b5f58d71f7a449733');
  });


  it('produces the expected result for ShortMsgKAT_256 840', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('64ec021c9585e01ffe6d31bb50d44c79b6993d72678163db474947a053674619d158016adb243f5c8d50aa92f50ab36e579ff2dabb780a2b529370daa299207cfbcdd3a9a25006d19c4f1fe33e4b1eaec315d8c6ee1e730623fd1941875b924eb57d6d0c2edc4e78d6', 'hex'));
    assert.equal(instance.digest('hex'), 'fa221deee80e25e53c6c448aa22028b72501f07d1ff2c3fc7f93af9838b2d0a9');
  });


  it('produces the expected result for ShortMsgKAT_256 848', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5954bab512cf327d66b5d9f296180080402624ad7628506b555eea8382562324cf452fba4a2130de3e165d11831a270d9cb97ce8c2d32a96f50d71600bb4ca268cf98e90d6496b0a6619a5a8c63db6d8a0634dfc6c7ec8ea9c006b6c456f1b20cd19e781af20454ac880', 'hex'));
    assert.equal(instance.digest('hex'), 'ed9c8b87fce27be4e95610db1ddd0c035847f4699dfc8c039a798a30343a6059');
  });


  it('produces the expected result for ShortMsgKAT_256 856', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('03d9f92b2c565709a568724a0aff90f8f347f43b02338f94a03ed32e6f33666ff5802da4c81bdce0d0e86c04afd4edc2fc8b4141c2975b6f07639b1994c973d9a9afce3d9d365862003498513bfa166d2629e314d97441667b007414e739d7febf0fe3c32c17aa188a8683', 'hex'));
    assert.equal(instance.digest('hex'), 'a485cc9cf4ca4f659f89a0b791a4423953424ac57146b879d385a9e4062afe52');
  });


  it('produces the expected result for ShortMsgKAT_256 864', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f31e8b4f9e0621d531d22a380be5d9abd56faec53cbd39b1fab230ea67184440e5b1d15457bd25f56204fa917fa48e669016cb48c1ffc1e1e45274b3b47379e00a43843cf8601a5551411ec12503e5aac43d8676a1b2297ec7a0800dbfee04292e937f21c005f17411473041', 'hex'));
    assert.equal(instance.digest('hex'), '93cd4369a7796239a5cdf78bce22ebb2137a631c3a613d5e35816d2a64a34947');
  });


  it('produces the expected result for ShortMsgKAT_256 872', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('758ea3fea738973db0b8be7e599bbef4519373d6e6dcd7195ea885fc991d896762992759c2a09002912fb08e0cb5b76f49162aeb8cf87b172cf3ad190253df612f77b1f0c532e3b5fc99c2d31f8f65011695a087a35ee4eee5e334c369d8ee5d29f695815d866da99df3f79403', 'hex'));
    assert.equal(instance.digest('hex'), '3751ce08750d927eb5c3ae4ca62a703a481d86a4fa1c011e812b4bc0a2fef08d');
  });


  it('produces the expected result for ShortMsgKAT_256 880', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('47c6e0c2b74948465921868804f0f7bd50dd323583dc784f998a93cd1ca4c6ef84d41dc81c2c40f34b5bee6a93867b3bdba0052c5f59e6f3657918c382e771d33109122cc8bb0e1e53c4e3d13b43ce44970f5e0c079d2ad7d7a3549cd75760c21bb15b447589e86e8d76b1e9ced2', 'hex'));
    assert.equal(instance.digest('hex'), 'a88c7ef7b89b7b6f75d83922b8fd00f034d719f97c67884121434447ae9dd3b9');
  });


  it('produces the expected result for ShortMsgKAT_256 888', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f690a132ab46b28edfa6479283d6444e371c6459108afd9c35dbd235e0b6b6ff4c4ea58e7554bd002460433b2164ca51e868f7947d7d7a0d792e4abf0be5f450853cc40d85485b2b8857ea31b5ea6e4ccfa2f3a7ef3380066d7d8979fdac618aad3d7e886dea4f005ae4ad05e5065f', 'hex'));
    assert.equal(instance.digest('hex'), '2b4f8f9ef7d6ed60bb4881e635e0f887a51b0c1a42bab077976b43d2c715e11a');
  });


  it('produces the expected result for ShortMsgKAT_256 896', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('58d6a99bc6458824b256916770a8417040721cccfd4b79eacd8b65a3767ce5ba7e74104c985ac56b8cc9aebd16febd4cda5adb130b0ff2329cc8d611eb14dac268a2f9e633c99de33997fea41c52a7c5e1317d5b5daed35eba7d5a60e45d1fa7eaabc35f5c2b0a0f2379231953322c4e', 'hex'));
    assert.equal(instance.digest('hex'), '586cffdc434313cc4e133e85ac88b3e5dea71818abcac236f0aae418f72b6cde');
  });


  it('produces the expected result for ShortMsgKAT_256 904', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('befab574396d7f8b6705e2d5b58b2c1c820bb24e3f4bae3e8fbcd36dbf734ee14e5d6ab972aedd3540235466e825850ee4c512ea9795abfd33f330d9fd7f79e62bbb63a6ea85de15beaeea6f8d204a28956059e2632d11861dfb0e65bc07ac8a159388d5c3277e227286f65ff5e5b5aec1', 'hex'));
    assert.equal(instance.digest('hex'), '52d14ab96b24aa4a7a55721aa8550b1fccac3653c78234783f7295ae5f39a17a');
  });


  it('produces the expected result for ShortMsgKAT_256 912', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8e58144fa9179d686478622ce450c748260c95d1ba43b8f9b59abeca8d93488da73463ef40198b4d16fb0b0707201347e0506ff19d01bea0f42b8af9e71a1f1bd168781069d4d338fdef00bf419fbb003031df671f4a37979564f69282de9c65407847dd0da505ab1641c02dea4f0d834986', 'hex'));
    assert.equal(instance.digest('hex'), 'b6345edd966030cf70dfb5b7552bc141c42efe7a7e84f957b1baf4671bae4354');
  });


  it('produces the expected result for ShortMsgKAT_256 920', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b55c10eae0ec684c16d13463f29291bf26c82e2fa0422a99c71db4af14dd9c7f33eda52fd73d017cc0f2dbe734d831f0d820d06d5f89dacc485739144f8cfd4799223b1aff9031a105cb6a029ba71e6e5867d85a554991c38df3c9ef8c1e1e9a7630be61caabca69280c399c1fb7a12d12aefc', 'hex'));
    assert.equal(instance.digest('hex'), '0347901965d3635005e75a1095695cca050bc9ed2d440c0372a31b348514a889');
  });


  it('produces the expected result for ShortMsgKAT_256 928', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2eeea693f585f4ed6f6f8865bbae47a6908aecd7c429e4bec4f0de1d0ca0183fa201a0cb14a529b7d7ac0e6ff6607a3243ee9fb11bcf3e2304fe75ffcddd6c5c2e2a4cd45f63c962d010645058d36571404a6d2b4f44755434d76998e83409c3205aa1615db44057db991231d2cb42624574f545', 'hex'));
    assert.equal(instance.digest('hex'), 'f0bf7105870f2382b76863bb97aee79f95ae0e8142675bbccdb3475b0c99352f');
  });


  it('produces the expected result for ShortMsgKAT_256 936', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('dab11dc0b047db0420a585f56c42d93175562852428499f66a0db811fcdddab2f7cdffed1543e5fb72110b64686bc7b6887a538ad44c050f1e42631bc4ec8a9f2a047163d822a38989ee4aab01b4c1f161b062d873b1cfa388fd301514f62224157b9bef423c7783b7aac8d30d65cd1bba8d689c2d', 'hex'));
    assert.equal(instance.digest('hex'), '631c6f5abe50b27c9dea557fc3fbd3fb25781fcb1bbf9f2e010cca20ec52dbc4');
  });


  it('produces the expected result for ShortMsgKAT_256 944', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('42e99a2f80aee0e001279a2434f731e01d34a44b1a8101726921c0590c30f3120eb83059f325e894a5ac959dca71ce2214799916424e859d27d789437b9d27240bf8c35adbafcecc322b48aa205b293962d858652abacbd588bcf6cbc388d0993bd622f96ed54614c25b6a9aa527589eaaffcf17ddf7', 'hex'));
    assert.equal(instance.digest('hex'), '3757a53d195b43b403a796a74aafb2064072a69e372ee5b36cc2b7a791f75c9f');
  });


  it('produces the expected result for ShortMsgKAT_256 952', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3c9b46450c0f2cae8e3823f8bdb4277f31b744ce2eb17054bddc6dff36af7f49fb8a2320cc3bdf8e0a2ea29ad3a55de1165d219adeddb5175253e2d1489e9b6fdd02e2c3d3a4b54d60e3a47334c37913c5695378a669e9b72dec32af5434f93f46176ebf044c4784467c700470d0c0b40c8a088c815816', 'hex'));
    assert.equal(instance.digest('hex'), '0cc903acbced724b221d34877d1d1427182f9493a33df7758720e8bfc7af98ee');
  });


  it('produces the expected result for ShortMsgKAT_256 960', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d1e654b77cb155f5c77971a64df9e5d34c26a3cad6c7f6b300d39deb1910094691adaa095be4ba5d86690a976428635d5526f3e946f7dc3bd4dbc78999e653441187a81f9adcd5a3c5f254bc8256b0158f54673dcc1232f6e918ebfc6c51ce67eaeb042d9f57eec4bfe910e169af78b3de48d137df4f2840', 'hex'));
    assert.equal(instance.digest('hex'), 'f23750c32973f24c2422f4e2b43589d9e76d6a575938e01a96ae8e73d026569c');
  });


  it('produces the expected result for ShortMsgKAT_256 968', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('626f68c18a69a6590159a9c46be03d5965698f2dac3de779b878b3d9c421e0f21b955a16c715c1ec1e22ce3eb645b8b4f263f60660ea3028981eebd6c8c3a367285b691c8ee56944a7cd1217997e1d9c21620b536bdbd5de8925ff71dec6fbc06624ab6b21e329813de90d1e572dfb89a18120c3f606355d25', 'hex'));
    assert.equal(instance.digest('hex'), '1ece87e44a99f59d26411418fb8793689ff8a9c6ef75599056087d8c995bce1e');
  });


  it('produces the expected result for ShortMsgKAT_256 976', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('651a6fb3c4b80c7c68c6011675e6094eb56abf5fc3057324ebc6477825061f9f27e7a94633abd1fa598a746e4a577caf524c52ec1788471f92b8c37f23795ca19d559d446cab16cbcdce90b79fa1026cee77bf4ab1b503c5b94c2256ad75b3eac6fd5dcb96aca4b03a834bfb4e9af988cecbf2ae597cb9097940', 'hex'));
    assert.equal(instance.digest('hex'), '71b4f90ac9215d7474b1197d1b8b24449fd57e9b05483d32edbebcb21a82f866');
  });


  it('produces the expected result for ShortMsgKAT_256 984', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8aaf072fce8a2d96bc10b3c91c809ee93072fb205ca7f10abd82ecd82cf040b1bc49ea13d1857815c0e99781de3adbb5443ce1c897e55188ceaf221aa9681638de05ae1b322938f46bce51543b57ecdb4c266272259d1798de13be90e10efec2d07484d9b21a3870e2aa9e06c21aa2d0c9cf420080a80a91dee16f', 'hex'));
    assert.equal(instance.digest('hex'), '3b3678bb116fadab484291f0cf972606523501f5b45d51063797972928e333c0');
  });


  it('produces the expected result for ShortMsgKAT_256 992', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('53f918fd00b1701bd504f8cdea803acca21ac18c564ab90c2a17da592c7d69688f6580575395551e8cd33e0fef08ca6ed4588d4d140b3e44c032355df1c531564d7f4835753344345a6781e11cd5e095b73df5f82c8ae3ad00877936896671e947cc52e2b29dcd463d90a0c9929128da222b5a211450bbc0e02448e2', 'hex'));
    assert.equal(instance.digest('hex'), '4068246495f508897813332962d3ae0b84685045e832a9a39ad5e94c154d2679');
  });


  it('produces the expected result for ShortMsgKAT_256 1000', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a64599b8a61b5ccec9e67aed69447459c8da3d1ec6c7c7c82a7428b9b584fa67e90f68e2c00fbbed4613666e5168da4a16f395f7a3c3832b3b134bfc9cbaa95d2a0fe252f44ac6681eb6d40ab91c1d0282fed6701c57463d3c5f2bb8c6a7301fb4576aa3b5f15510db8956ff77478c26a7c09bea7b398cfc83503f538e', 'hex'));
    assert.equal(instance.digest('hex'), '82696259536520e5e4d47e106bd1dcb397529aafb75878f332d2af2684493f1b');
  });


  it('produces the expected result for ShortMsgKAT_256 1008', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0e3ab0e054739b00cdb6a87bd12cae024b54cb5e550e6c425360c2e87e59401f5ec24ef0314855f0f56c47695d56a7fb1417693af2a1ed5291f2fee95f75eed54a1b1c2e81226fbff6f63ade584911c71967a8eb70933bc3f5d15bc91b5c2644d9516d3c3a8c154ee48e118bd1442c043c7a0dba5ac5b1d5360aae5b9065', 'hex'));
    assert.equal(instance.digest('hex'), 'b494852603393b2b71845bacbdce89fa1427dfe4af9cdf925d4f93fa83b9966b');
  });


  it('produces the expected result for ShortMsgKAT_256 1016', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a62fc595b4096e6336e53fcdfc8d1cc175d71dac9d750a6133d23199eaac288207944cea6b16d27631915b4619f743da2e30a0c00bbdb1bbb35ab852ef3b9aec6b0a8dcc6e9e1abaa3ad62ac0a6c5de765de2c3711b769e3fde44a74016fff82ac46fa8f1797d3b2a726b696e3dea5530439acee3a45c2a51bc32dd055650b', 'hex'));
    assert.equal(instance.digest('hex'), 'd8a619c0dfbed2a9498a147b53d7b33dd653d390e5c0cd691f02c8608822d06a');
  });


  it('produces the expected result for ShortMsgKAT_256 1024', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2b6db7ced8665ebe9deb080295218426bdaa7c6da9add2088932cdffbaa1c14129bccdd70f369efb149285858d2b1d155d14de2fdb680a8b027284055182a0cae275234cc9c92863c1b4ab66f304cf0621cd54565f5bff461d3b461bd40df28198e3732501b4860eadd503d26d6e69338f4e0456e9e9baf3d827ae685fb1d817', 'hex'));
    assert.equal(instance.digest('hex'), 'd82e257d000dc9fa279a00e2961e3286d2fe1c02ef59833ab8a6a7101bc25054');
  });


  it('produces the expected result for ShortMsgKAT_256 1032', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('10db509b2cdcaba6c062ae33be48116a29eb18e390e1bbada5ca0a2718afbcd23431440106594893043cc7f2625281bf7de2655880966a23705f0c5155c2f5cca9f2c2142e96d0a2e763b70686cd421b5db812daced0c6d65035fde558e94f26b3e6dde5bd13980cc80292b723013bd033284584bff27657871b0cf07a849f4ae2', 'hex'));
    assert.equal(instance.digest('hex'), '8d5b7dbf3947219acdb04fb2e11a84a313c54c22f2ae858dfc8887bf6265f5f3');
  });


  it('produces the expected result for ShortMsgKAT_256 1040', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('9334de60c997bda6086101a6314f64e4458f5ff9450c509df006e8c547983c651ca97879175aaba0c539e82d05c1e02c480975cbb30118121061b1ebac4f8d9a3781e2db6b18042e01ecf9017a64a0e57447ec7fcbe6a7f82585f7403ee2223d52d37b4bf426428613d6b4257980972a0acab508a7620c1cb28eb4e9d30fc41361ec', 'hex'));
    assert.equal(instance.digest('hex'), '607c3f31342c3ee5c93e552a8dd79fa86dccae2c1b58aabac25b5918acfa4da5');
  });


  it('produces the expected result for ShortMsgKAT_256 1048', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e88ab086891693aa535ceb20e64c7ab97c7dd3548f3786339897a5f0c39031549ca870166e477743ccfbe016b4428d89738e426f5ffe81626137f17aecff61b72dbee2dc20961880cfe281dfab5ee38b1921881450e16032de5e4d55ad8d4fca609721b0692bac79be5a06e177fe8c80c0c83519fb3347de9f43d5561cb8107b9b5edc', 'hex'));
    assert.equal(instance.digest('hex'), '0656de9dcd7b7112a86c7ba199637d2c1c9e9cfbb713e4ede79f8862ee69993f');
  });


  it('produces the expected result for ShortMsgKAT_256 1056', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fd19e01a83eb6ec810b94582cb8fbfa2fcb992b53684fb748d2264f020d3b960cb1d6b8c348c2b54a9fcea72330c2aaa9a24ecdb00c436abc702361a82bb8828b85369b8c72ece0082fe06557163899c2a0efa466c33c04343a839417057399a63a3929be1ee4805d6ce3e5d0d0967fe9004696a5663f4cac9179006a2ceb75542d75d68', 'hex'));
    assert.equal(instance.digest('hex'), '4ddd6224858299f3378e3f5a0ecc52fa4c419c8ebb20f635c4c43f36324ecb4e');
  });


  it('produces the expected result for ShortMsgKAT_256 1064', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('59ae20b6f7e0b3c7a989afb28324a40fca25d8651cf1f46ae383ef6d8441587aa1c04c3e3bf88e8131ce6145cfb8973d961e8432b202fa5af3e09d625faad825bc19da9b5c6c20d02abda2fcc58b5bd3fe507bf201263f30543819510c12bc23e2ddb4f711d087a86edb1b355313363a2de996b891025e147036087401ccf3ca7815bf3c49', 'hex'));
    assert.equal(instance.digest('hex'), 'ec096314e2f73b6a7027fffa02104c2f6dd187f20c743445befd4b5c034b3295');
  });


  it('produces the expected result for ShortMsgKAT_256 1072', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('77ee804b9f3295ab2362798b72b0a1b2d3291dceb8139896355830f34b3b328561531f8079b79a6e9980705150866402fdc176c05897e359a6cb1a7ab067383eb497182a7e5aef7038e4c96d133b2782917417e391535b5e1b51f47d8ed7e4d4025fe98dc87b9c1622614bff3d1029e68e372de719803857ca52067cddaad958951cb2068cc6', 'hex'));
    assert.equal(instance.digest('hex'), 'fe71d01c2ee50e054d6b07147ef62954fde7e6959d6eeba68e3c94107eb0084d');
  });


  it('produces the expected result for ShortMsgKAT_256 1080', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b771d5cef5d1a41a93d15643d7181d2a2ef0a8e84d91812f20ed21f147bef732bf3a60ef4067c3734b85bc8cd471780f10dc9e8291b58339a677b960218f71e793f2797aea349406512829065d37bb55ea796fa4f56fd8896b49b2cd19b43215ad967c712b24e5032d065232e02c127409d2ed4146b9d75d763d52db98d949d3b0fed6a8052fbb', 'hex'));
    assert.equal(instance.digest('hex'), 'bd6f5492582a7c1b116304de28314df9fffe95b0da11af52fe9440a717a34859');
  });


  it('produces the expected result for ShortMsgKAT_256 1088', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b32d95b0b9aad2a8816de6d06d1f86008505bd8c14124f6e9a163b5a2ade55f835d0ec3880ef50700d3b25e42cc0af050ccd1be5e555b23087e04d7bf9813622780c7313a1954f8740b6ee2d3f71f768dd417f520482bd3a08d4f222b4ee9dbd015447b33507dd50f3ab4247c5de9a8abd62a8decea01e3b87c8b927f5b08beb37674c6f8e380c04', 'hex'));
    assert.equal(instance.digest('hex'), 'e717a7769448abbe5fef8187954a88ac56ded1d22e63940ab80d029585a21921');
  });


  it('produces the expected result for ShortMsgKAT_256 1096', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('04410e31082a47584b406f051398a6abe74e4da59bb6f85e6b49e8a1f7f2ca00dfba5462c2cd2bfde8b64fb21d70c083f11318b56a52d03b81cac5eec29eb31bd0078b6156786da3d6d8c33098c5c47bb67ac64db14165af65b44544d806dde5f487d5373c7f9792c299e9686b7e5821e7c8e2458315b996b5677d926dac57b3f22da873c601016a0d', 'hex'));
    assert.equal(instance.digest('hex'), 'a95d50b50b4545f0947441df74a1e9d74622eb3baa49c1bbfc3a0cce6619c1aa');
  });


  it('produces the expected result for ShortMsgKAT_256 1104', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8b81e9badde026f14d95c019977024c9e13db7a5cd21f9e9fc491d716164bbacdc7060d882615d411438aea056c340cdf977788f6e17d118de55026855f93270472d1fd18b9e7e812bae107e0dfde7063301b71f6cfe4e225cab3b232905a56e994f08ee2891ba922d49c3dafeb75f7c69750cb67d822c96176c46bd8a29f1701373fb09a1a6e3c7158f', 'hex'));
    assert.equal(instance.digest('hex'), 'ed53d72595ace3a6d5166a4ede41cce362d644bded772be616b87bcf678a6364');
  });


  it('produces the expected result for ShortMsgKAT_256 1112', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fa6eed24da6666a22208146b19a532c2ec9ba94f09f1def1e7fc13c399a48e41acc2a589d099276296348f396253b57cb0e40291bd282773656b6e0d8bea1cda084a3738816a840485fcf3fb307f777fa5feac48695c2af4769720258c77943fb4556c362d9cba8bf103aeb9034baa8ea8bfb9c4f8e6742ce0d52c49ea8e974f339612e830e9e7a9c29065', 'hex'));
    assert.equal(instance.digest('hex'), '810401b247c23529e24655cab86c42df44085da76ca01c9a14618e563b7c41be');
  });


  it('produces the expected result for ShortMsgKAT_256 1120', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('9bb4af1b4f09c071ce3cafa92e4eb73ce8a6f5d82a85733440368dee4eb1cbc7b55ac150773b6fe47dbe036c45582ed67e23f4c74585dab509df1b83610564545642b2b1ec463e18048fc23477c6b2aa035594ecd33791af6af4cbc2a1166aba8d628c57e707f0b0e8707caf91cd44bdb915e0296e0190d56d33d8dde10b5b60377838973c1d943c22ed335e', 'hex'));
    assert.equal(instance.digest('hex'), '9f01e63f2355393ecb1908d0caf39718833004a4bf37ebf4cf8d7319b65172df');
  });


  it('produces the expected result for ShortMsgKAT_256 1128', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2167f02118cc62043e9091a647cadbed95611a521fe0d64e8518f16c808ab297725598ae296880a773607a798f7c3cfce80d251ebec6885015f9abf7eaabae46798f82cb5926de5c23f44a3f9f9534b3c6f405b5364c2f8a8bdc5ca49c749bed8ce4ba48897062ae8424ca6dde5f55c0e42a95d1e292ca54fb46a84fbc9cd87f2d0c9e7448de3043ae22fdd229', 'hex'));
    assert.equal(instance.digest('hex'), '7ec11de7db790a850281f043592779b409195db4ecedeefbb93ba683d3bca851');
  });


  it('produces the expected result for ShortMsgKAT_256 1136', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('94b7fa0bc1c44e949b1d7617d31b4720cbe7ca57c6fa4f4094d4761567e389ecc64f6968e4064df70df836a47d0c713336b5028b35930d29eb7a7f9a5af9ad5cf441745baec9bb014ceeff5a41ba5c1ce085feb980bab9cf79f2158e03ef7e63e29c38d7816a84d4f71e0f548b7fc316085ae38a060ff9b8dec36f91ad9ebc0a5b6c338cbb8f6659d342a24368cf', 'hex'));
    assert.equal(instance.digest('hex'), 'a74af9c523b4a08d9db9692ea89255977a5919b9292b7cd0d92c90c97c98e224');
  });


  it('produces the expected result for ShortMsgKAT_256 1144', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('ea40e83cb18b3a242c1ecc6ccd0b7853a439dab2c569cfc6dc38a19f5c90acbf76aef9ea3742ff3b54ef7d36eb7ce4ff1c9ab3bc119cff6be93c03e208783335c0ab8137be5b10cdc66ff3f89a1bddc6a1eed74f504cbe7290690bb295a872b9e3fe2cee9e6c67c41db8efd7d863cf10f840fe618e7936da3dca5ca6df933f24f6954ba0801a1294cd8d7e66dfafec', 'hex'));
    assert.equal(instance.digest('hex'), '344d129c228359463c40555d94213d015627e5871c04f106a0feef9361cdecb6');
  });


  it('produces the expected result for ShortMsgKAT_256 1152', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('157d5b7e4507f66d9a267476d33831e7bb768d4d04cc3438da12f9010263ea5fcafbde2579db2f6b58f911d593d5f79fb05fe3596e3fa80ff2f761d1b0e57080055c118c53e53cdb63055261d7c9b2b39bd90acc32520cbbdbda2c4fd8856dbcee173132a2679198daf83007a9b5c51511ae49766c792a29520388444ebefe28256fb33d4260439cba73a9479ee00c63', 'hex'));
    assert.equal(instance.digest('hex'), '4ce7c2b935f21fc34c5e56d940a555c593872aec2f896de4e68f2a017060f535');
  });


  it('produces the expected result for ShortMsgKAT_256 1160', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('836b34b515476f613fe447a4e0c3f3b8f20910ac89a3977055c960d2d5d2b72bd8acc715a9035321b86703a411dde0466d58a59769672aa60ad587b8481de4bba552a1645779789501ec53d540b904821f32b0bd1855b04e4848f9f8cfe9ebd8911be95781a759d7ad9724a7102dbe576776b7c632bc39b9b5e19057e226552a5994c1dbb3b5c7871a11f5537011044c53', 'hex'));
    assert.equal(instance.digest('hex'), '24b69d8ab35baccbd92f94e1b70b07c4c0ecf14eaeac4b6b8560966d5be086f3');
  });


  it('produces the expected result for ShortMsgKAT_256 1168', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('cc7784a4912a7ab5ad3620aab29ba87077cd3cb83636adc9f3dc94f51edf521b2161ef108f21a0a298557981c0e53ce6ced45bdf782c1ef200d29bab81dd6460586964edab7cebdbbec75fd7925060f7da2b853b2b089588fa0f8c16ec6498b14c55dcee335cb3a91d698e4d393ab8e8eac0825f8adebeee196df41205c011674e53426caa453f8de1cbb57932b0b741d4c6', 'hex'));
    assert.equal(instance.digest('hex'), '19f34215373e8e80f686953e03ca472b50216719cb515e0667d4e686e45fcf7c');
  });


  it('produces the expected result for ShortMsgKAT_256 1176', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7639b461fff270b2455ac1d1afce782944aea5e9087eb4a39eb96bb5c3baaf0e868c8526d3404f9405e79e77bfac5ffb89bf1957b523e17d341d7323c302ea7083872dd5e8705694acdda36d5a1b895aaa16eca6104c82688532c8bfe1790b5dc9f4ec5fe95baed37e1d287be710431f1e5e8ee105bc42ed37d74b1e55984bf1c09fe6a1fa13ef3b96faeaed6a2a1950a12153', 'hex'));
    assert.equal(instance.digest('hex'), '290bd4808e5676eb0c978084e4cd68e745031659a26807ad615b10cda589b969');
  });


  it('produces the expected result for ShortMsgKAT_256 1184', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('eb6513fc61b30cfba58d4d7e80f94d14589090cf1d80b1df2e68088dc6104959ba0d583d585e9578ab0aec0cf36c48435eb52ed9ab4bbce7a5abe679c97ae2dbe35e8cc1d45b06dda3cf418665c57cbee4bbb47fa4caf78f4ee656fec237fe4eebbafa206e1ef2bd0ee4ae71bd0e9b2f54f91daadf1febfd7032381d636b733dcb3bf76fb14e23aff1f68ed3dbcf75c9b99c6f26', 'hex'));
    assert.equal(instance.digest('hex'), '70999ab9818309afa8f1adc4fea47a071a8abd94012f7ce28cc794a0d997c5cb');
  });


  it('produces the expected result for ShortMsgKAT_256 1192', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1594d74bf5dde444265d4c04dad9721ff3e34cbf622daf341fe16b96431f6c4df1f760d34f296eb97d98d560ad5286fec4dce1724f20b54fd7df51d4bf137add656c80546fb1bf516d62ee82baa992910ef4cc18b70f3f8698276fcfb44e0ec546c2c39cfd8ee91034ff9303058b4252462f86c823eb15bf481e6b79cc3a02218595b3658e8b37382bd5048eaed5fd02c37944e73b', 'hex'));
    assert.equal(instance.digest('hex'), '83120033b0140fe3e3e1cbfebff323abc08535c0aa017803f5d2f4ecb35f5dfb');
  });


  it('produces the expected result for ShortMsgKAT_256 1200', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('4cfa1278903026f66fedd41374558be1b585d03c5c55dac94361df286d4bd39c7cb8037ed3b267b07c346626449d0cc5b0dd2cf221f7e4c3449a4be99985d2d5e67bff2923357ddeab5abcb4619f3a3a57b2cf928a022eb27676c6cf805689004fca4d41ea6c2d0a4789c7605f7bb838dd883b3ad3e6027e775bcf262881428099c7fff95b14c095ea130e0b9938a5e22fc52650f591', 'hex'));
    assert.equal(instance.digest('hex'), '5584bf3e93bc25945c508b9188d0502c6e755bbebabfc8cb907fa7a252ef464a');
  });


  it('produces the expected result for ShortMsgKAT_256 1208', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d3e65cb92cfa79662f6af493d696a07ccf32aaadcceff06e73e8d9f6f909209e66715d6e978788c49efb9087b170ecf3aa86d2d4d1a065ae0efc8924f365d676b3cb9e2bec918fd96d0b43dee83727c9a93bf56ca2b2e59adba85696546a815067fc7a78039629d4948d157e7b0d826d1bf8e81237bab7321312fdaa4d521744f988db6fdf04549d0fdca393d639c729af716e9c8bba48', 'hex'));
    assert.equal(instance.digest('hex'), 'c234b252c21edb842634cc124da5bee8a4749cffba134723f7963b3a9729c0b4');
  });


  it('produces the expected result for ShortMsgKAT_256 1216', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('842cc583504539622d7f71e7e31863a2b885c56a0ba62db4c2a3f2fd12e79660dc7205ca29a0dc0a87db4dc62ee47a41db36b9ddb3293b9ac4baae7df5c6e7201e17f717ab56e12cad476be49608ad2d50309e7d48d2d8de4fa58ac3cfeafeee48c0a9eec88498e3efc51f54d300d828dddccb9d0b06dd021a29cf5cb5b2506915beb8a11998b8b886e0f9b7a80e97d91a7d01270f9a7717', 'hex'));
    assert.equal(instance.digest('hex'), '645f25456752091fffcaade806c34c79dffe72140c7c75d6a6ecfeedf6db401c');
  });


  it('produces the expected result for ShortMsgKAT_256 1224', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6c4b0a0719573e57248661e98febe326571f9a1ca813d3638531ae28b4860f23c3a3a8ac1c250034a660e2d71e16d3acc4bf9ce215c6f15b1c0fc7e77d3d27157e66da9ceec9258f8f2bf9e02b4ac93793dd6e29e307ede3695a0df63cbdc0fc66fb770813eb149ca2a916911bee4902c47c7802e69e405fe3c04ceb5522792a5503fa829f707272226621f7c488a7698c0d69aa561be9f378', 'hex'));
    assert.equal(instance.digest('hex'), '2d7cac697e7410c1f7735dd691624a7d04fa51815858e8ba98b19b0ded0638b5');
  });


  it('produces the expected result for ShortMsgKAT_256 1232', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('51b7dbb7ce2ffeb427a91ccfe5218fd40f9e0b7e24756d4c47cd55606008bdc27d16400933906fd9f30effdd4880022d081155342af3fb6cd53672ab7fb5b3a3bcbe47be1fd3a2278cae8a5fd61c1433f7d350675dd21803746cadca574130f01200024c6340ab0cc2cf74f2234669f34e9009ef2eb94823d62b31407f4ba46f1a1eec41641e84d77727b59e746b8a671bef936f05be820759fa', 'hex'));
    assert.equal(instance.digest('hex'), 'f664f626bc6b7a8cf03be429155ee1f5cd6ecf14816de49a5e229903f89a4dc6');
  });


  it('produces the expected result for ShortMsgKAT_256 1240', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('83599d93f5561e821bd01a472386bc2ff4efbd4aed60d5821e84aae74d8071029810f5e286f8f17651cd27da07b1eb4382f754cd1c95268783ad09220f5502840370d494beb17124220f6afce91ec8a0f55231f9652433e5ce3489b727716cf4aeba7dcda20cd29aa9a859201253f948dd94395aba9e3852bd1d60dda7ae5dc045b283da006e1cbad83cc13292a315db5553305c628dd091146597', 'hex'));
    assert.equal(instance.digest('hex'), '06425e83e4af817d735e9962c0cddce2cd40a087a6b0af3599719e415ab9a72a');
  });


  it('produces the expected result for ShortMsgKAT_256 1248', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2be9bf526c9d5a75d565dd11ef63b979d068659c7f026c08bea4af161d85a462d80e45040e91f4165c074c43ac661380311a8cbed59cc8e4c4518e80cd2c78ab1cabf66bff83eab3a80148550307310950d034a6286c93a1ece8929e6385c5e3bb6ea8a7c0fb6d6332e320e71cc4eb462a2a62e2bfe08f0ccad93e61bedb5dd0b786a728ab666f07e0576d189c92bf9fb20dca49ac2d3956d47385e2', 'hex'));
    assert.equal(instance.digest('hex'), 'e8c329149b075c459e11c8ac1e7e6acfa51ca981c89ec0768ed79d19f4e484fb');
  });


  it('produces the expected result for ShortMsgKAT_256 1256', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('ca76d3a12595a817682617006848675547d3e8f50c2210f9af906c0e7ce50b4460186fe70457a9e879e79fd4d1a688c70a347361c847ba0dd6aa52936eaf8e58a1be2f5c1c704e20146d366aeb3853bed9de9befe9569ac8aaea37a9fb7139a1a1a7d5c748605a8defb297869ebedd71d615a5da23496d11e11abbb126b206fa0a7797ee7de117986012d0362dcef775c2fe145ada6bda1ccb326bf644', 'hex'));
    assert.equal(instance.digest('hex'), 'c86768f6c349eb323bd82db19676e10bd8ae9f7057763556bbb6d0b671e60f2a');
  });


  it('produces the expected result for ShortMsgKAT_256 1264', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f76b85dc67421025d64e93096d1d712b7baf7fb001716f02d33b2160c2c882c310ef13a576b1c2d30ef8f78ef8d2f465007109aad93f74cb9e7d7bef7c9590e8af3b267c89c15db238138c45833c98cc4a471a7802723ef4c744a853cf80a0c2568dd4ed58a2c9644806f42104cee53628e5bdf7b63b0b338e931e31b87c24b146c6d040605567ceef5960df9e022cb469d4c787f4cba3c544a1ac91f95f', 'hex'));
    assert.equal(instance.digest('hex'), 'd97f46f3b7edbfb16e52bfec7dba0815b94d46e4251e48a853eabdf876127714');
  });


  it('produces the expected result for ShortMsgKAT_256 1272', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('25b8c9c032ea6bcd733ffc8718fbb2a503a4ea8f71dea1176189f694304f0ff68e862a8197b839957549ef243a5279fc2646bd4c009b6d1edebf24738197abb4c992f6b1dc9ba891f570879accd5a6b18691a93c7d0a8d38f95b639c1daeb48c4c2f15ccf5b9d508f8333c32de78781b41850f261b855c4bebcc125a380c54d501c5d3bd07e6b52102116088e53d76583b0161e2a58d0778f091206aabd5a1', 'hex'));
    assert.equal(instance.digest('hex'), '51d08e00aaa252812d873357107616055b1b8c5fb2ac7917d0f901dfb01fac47');
  });


  it('produces the expected result for ShortMsgKAT_256 1280', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('21cfdc2a7ccb7f331b3d2eefff37e48ad9fa9c788c3f3c200e0173d99963e1cbca93623b264e920394ae48bb4c3a5bb96ffbc8f0e53f30e22956adabc2765f57fb761e147ecbf8567533db6e50c8a1f894310a94edf806dd8ca6a0e141c0fa7c9fae6c6ae65f18c93a8529e6e5b553bf55f25be2e80a9882bd37f145fecbeb3d447a3c4e46c21524cc55cdd62f521ab92a8ba72b897996c49bb273198b7b1c9e', 'hex'));
    assert.equal(instance.digest('hex'), 'c6a188a6bdaca4dd7b1bc3e41019afe93473063f932c166e3242b7f52a3c6f8e');
  });


  it('produces the expected result for ShortMsgKAT_256 1288', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('4e452ba42127dcc956ef4f8f35dd68cb225fb73b5bc7e1ec5a898bba2931563e74faff3b67314f241ec49f4a7061e3bd0213ae826bab380f1f14faab8b0efddd5fd1bb49373853a08f30553d5a55ccbbb8153de4704f29ca2bdeef0419468e05dd51557ccc80c0a96190bbcc4d77ecff21c66bdf486459d427f986410f883a80a5bcc32c20f0478bb9a97a126fc5f95451e40f292a4614930d054c851acd019ccf', 'hex'));
    assert.equal(instance.digest('hex'), '2b31fbc565110110011ab2c8f6cc3da8fb55d41b1ae5e04310283f207d39682d');
  });


  it('produces the expected result for ShortMsgKAT_256 1296', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fa85671df7dadf99a6ffee97a3ab9991671f5629195049880497487867a6c446b60087fac9a0f2fcc8e3b24e97e42345b93b5f7d3691829d3f8ccd4bb36411b85fc2328eb0c51cb3151f70860ad3246ce0623a8dc8b3c49f958f8690f8e3860e71eb2b1479a5cea0b3f8befd87acaf5362435eaeccb52f38617bc6c5c2c6e269ead1fbd69e941d4ad2012da2c5b21bcfbf98e4a77ab2af1f3fda3233f046d38f1dc8', 'hex'));
    assert.equal(instance.digest('hex'), '1351f5dba46098b9a773381d85d52fad491b3a82af9107f173db81fb35ed91d2');
  });


  it('produces the expected result for ShortMsgKAT_256 1304', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e90847ae6797fbc0b6b36d6e588c0a743d725788ca50b6d792352ea8294f5ba654a15366b8e1b288d84f5178240827975a763bc45c7b0430e8a559df4488505e009c63da994f1403f407958203cebb6e37d89c94a5eacf6039a327f6c4dbbc7a2a307d976aa39e41af6537243fc218dfa6ab4dd817b6a397df5ca69107a9198799ed248641b63b42cb4c29bfdd7975ac96edfc274ac562d0474c60347a078ce4c25e88', 'hex'));
    assert.equal(instance.digest('hex'), 'dffc700f3e4d84d9131cbb1f98fb843dbafcb2ef94a52e89d204d431451a3331');
  });


  it('produces the expected result for ShortMsgKAT_256 1312', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f6d5c2b6c93954fc627602c00c4ca9a7d3ed12b27173f0b2c9b0e4a5939398a665e67e69d0b12fb7e4ceb253e8083d1ceb724ac07f009f094e42f2d6f2129489e846eaff0700a8d4453ef453a3eddc18f408c77a83275617fabc4ea3a2833aa73406c0e966276079d38e8e38539a70e194cc5513aaa457c699383fd1900b1e72bdfb835d1fd321b37ba80549b078a49ea08152869a918ca57f5b54ed71e4fd3ac5c06729', 'hex'));
    assert.equal(instance.digest('hex'), '26726b52242ef8ecf4c66aed9c4b46bf6f5d87044a0b99d4e4af47dc360b9b0e');
  });


  it('produces the expected result for ShortMsgKAT_256 1320', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('cf8562b1bed89892d67ddaaf3deeb28246456e972326dbcdb5cf3fb289aca01e68da5d59896e3a6165358b071b304d6ab3d018944be5049d5e0e2bb819acf67a6006111089e6767132d72dd85beddcbb2d64496db0cc92955ab4c6234f1eea24f2d51483f2e209e4589bf9519fac51b4d061e801125e605f8093bb6997bc163d551596fe4ab7cfae8fb9a90f6980480ce0c229fd1675409bd788354daf316240cfe0af93eb', 'hex'));
    assert.equal(instance.digest('hex'), '25e536315f08a40976adecb54756ebc0b224c38faf11509371b5a692a5269ab5');
  });


  it('produces the expected result for ShortMsgKAT_256 1328', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2ace31abb0a2e3267944d2f75e1559985db7354c6e605f18dc8470423fca30b7331d9b33c4a4326783d1caae1b4f07060eff978e4746bf0c7e30cd61040bd5ec2746b29863eb7f103ebda614c4291a805b6a4c8214230564a0557bc7102e0bd3ed23719252f7435d64d210ee2aafc585be903fa41e1968c50fd5d5367926df7a05e3a42cf07e656ff92de73b036cf8b19898c0cb34557c0c12c2d8b84e91181af467bc75a9d1', 'hex'));
    assert.equal(instance.digest('hex'), 'ab504592ad7184be83cc659efb5d3de88ba04b060b45d16a76f034080dde56c6');
  });


  it('produces the expected result for ShortMsgKAT_256 1336', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0d8d09aed19f1013969ce5e7eb92f83a209ae76be31c754844ea9116ceb39a22ebb6003017bbcf26555fa6624185187db8f0cb3564b8b1c06bf685d47f3286eda20b83358f599d2044bbf0583fab8d78f854fe0a596183230c5ef8e54426750eaf2cc4e29d3bdd037e734d863c2bd9789b4c243096138f7672c232314effdfc6513427e2da76916b5248933be312eb5dde4cf70804fb258ac5fb82d58d08177ac6f4756017fff5', 'hex'));
    assert.equal(instance.digest('hex'), '5d8ee133ec441a3df50a5268a8f393f13f30f23f226ae3a18ec331844402ff54');
  });


  it('produces the expected result for ShortMsgKAT_256 1344', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c3236b73deb7662bf3f3daa58f137b358ba610560ef7455785a9befdb035a066e90704f929bd9689cef0ce3bda5acf4480bceb8d09d10b098ad8500d9b6071dfc3a14af6c77511d81e3aa8844986c3bea6f469f9e02194c92868cd5f51646256798ff0424954c1434bdfed9facb390b07d342e992936e0f88bfd0e884a0ddb679d0547ccdec6384285a45429d115ac7d235a717242021d1dc35641f5f0a48e8445dba58e6cb2c8ea', 'hex'));
    assert.equal(instance.digest('hex'), '712b1cc04c009b52035cc44c9505bb5cb577ba0ad1734ec23620f57eef3d37fb');
  });


  it('produces the expected result for ShortMsgKAT_256 1352', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b39feb8283eadc63e8184b51df5ae3fd41aac8a963bb0be1cd08aa5867d8d910c669221e73243360646f6553d1ca05a84e8dc0de05b6419ec349ca994480193d01c92525f3fb3dcefb08afc6d26947bdbbfd85193f53b50609c6140905c53a6686b58e53a319a57b962331ede98149af3de3118a819da4d76706a0424b4e1d2910b0ed26af61d150ebcb46595d4266a0bd7f651ba47d0c7f179ca28545007d92e8419d48fdfbd744ce', 'hex'));
    assert.equal(instance.digest('hex'), '942e39e230a2251ffdb2f85202871c98597008401b322ff9840cc90cc85b337d');
  });


  it('produces the expected result for ShortMsgKAT_256 1360', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a983d54f503803e8c7999f4edbbe82e9084f422143a932ddddc47a17b0b7564a7f37a99d0786e99476428d29e29d3c197a72bfab1342c12a0fc4787fd7017d7a6174049ea43b5779169ef7472bdbbd941dcb82fc73aac45a8a94c9f2bd3477f61fd3b796f02a1b8264a214c6fea74b7051b226c722099ec7883a462b83b6afdd4009248b8a237f605fe5a08fe7d8b45321421ebba67bd70a0b00ddbf94baab7f359d5d1eea105f28dcfb', 'hex'));
    assert.equal(instance.digest('hex'), 'b542b6cd8ef2dab4ed83b77ac6dc52daf554ecda4ef7ab0a50e546bebe2d8e5a');
  });


  it('produces the expected result for ShortMsgKAT_256 1368', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e4d1c1897a0a866ce564635b74222f9696bf2c7f640dd78d7e2aca66e1b61c642bb03ea7536aae597811e9bf4a7b453ede31f97b46a5f0ef51a071a2b3918df16b152519ae3776f9f1edab4c2a377c3292e96408359d3613844d5eb393000283d5ad3401a318b12fd1474b8612f2bb50fb6a8b9e023a54d7dde28c43d6d8854c8d9d1155935c199811dbfc87e9e0072e90eb88681cc7529714f8fb8a2c9d88567adfb974ee205a9bf7b848', 'hex'));
    assert.equal(instance.digest('hex'), 'f7e9e825722e6554a8619cca3e57f5b5e6b7347431d55ce178372c917bfb3dc2');
  });


  it('produces the expected result for ShortMsgKAT_256 1376', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b10c59723e3dcadd6d75df87d0a1580e73133a9b7d00cb95ec19f5547027323be75158b11f80b6e142c6a78531886d9047b08e551e75e6261e79785366d7024bd7cd9cf322d9be7d57fb661069f2481c7bb759cd71b4b36ca2bc2df6d3a328faebdb995a9794a8d72155ed551a1f87c80bf6059b43fc764900b18a1c2441f7487743cf84e565f61f8dd2ece6b6ccc9444049197aaaf53e926fbee3bfca8be588ec77f29d211be89de18b15f6', 'hex'));
    assert.equal(instance.digest('hex'), '14bb22b98eaf41a4c224fd3c37188a755f9b04f46f3e23a652da3db9e25d2f2c');
  });


  it('produces the expected result for ShortMsgKAT_256 1384', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('db11f609baba7b0ca634926b1dd539c8cbada24967d7add4d9876f77c2d80c0f4dcefbd7121548373582705cca2495bd2a43716fe64ed26d059cfb566b3364bd49ee0717bdd9810dd14d8fad80dbbdc4cafb37cc60fb0fe2a80fb4541b8ca9d59dce457738a9d3d8f641af8c3fd6da162dc16fc01aac527a4a0255b4d231c0be50f44f0db0b713af03d968fe7f0f61ed0824c55c4b5265548febd6aad5c5eedf63efe793489c39b8fd29d104ce', 'hex'));
    assert.equal(instance.digest('hex'), 'eb5668f9941c06e5e38ea01b7fa980638b9536ca1939950c1629f84a6eff3866');
  });


  it('produces the expected result for ShortMsgKAT_256 1392', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('bebd4f1a84fc8b15e4452a54bd02d69e304b7f32616aadd90537937106ae4e28de9d8aab02d19bc3e2fde1d651559e296453e4dba94370a14dbbb2d1d4e2022302ee90e208321efcd8528ad89e46dc839ea9df618ea8394a6bff308e7726bae0c19bcd4be52da6258e2ef4e96aa21244429f49ef5cb486d7ff35cac1bacb7e95711944bccb2ab34700d42d1eb38b5d536b947348a458ede3dc6bd6ec547b1b0cae5b257be36a7124e1060c170ffa', 'hex'));
    assert.equal(instance.digest('hex'), '913014bb6e243fac3a22a185f8227a68c2311dc0b718e276bbbdb73af98be35f');
  });


  it('produces the expected result for ShortMsgKAT_256 1400', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5aca56a03a13784bdc3289d9364f79e2a85c12276b49b92db0adaa4f206d5028f213f678c3510e111f9dc4c1c1f8b6acb17a6413aa227607c515c62a733817ba5e762cc6748e7e0d6872c984d723c9bb3b117eb8963185300a80bfa65cde495d70a46c44858605fccbed086c2b45cef963d33294dbe9706b13af22f1b7c4cd5a001cfec251fba18e722c6e1c4b1166918b4f6f48a98b64b3c07fc86a6b17a6d0480ab79d4e6415b520f1c484d675b1', 'hex'));
    assert.equal(instance.digest('hex'), '0284418c10190f413042e3eceb3954979b94afbf2e545fc7f8a3c7db2c235916');
  });


  it('produces the expected result for ShortMsgKAT_256 1408', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a5aad0e4646a32c85cfcac73f02fc5300f1982fabb2f2179e28303e447854094cdfc854310e5c0f60993ceff54d84d6b46323d930adb07c17599b35b505f09e784bca5985e0172257797fb53649e2e9723efd16865c31b5c3d5113b58bb0bfc8920fabdda086d7537e66d709d050bd14d0c960873f156fad5b3d3840cdfcdc9be6af519db262a27f40896ab25cc39f96984d650611c0d5a3080d5b3a1bf186abd42956588b3b58cd948970d298776060', 'hex'));
    assert.equal(instance.digest('hex'), '8febff801787f5803e151dca3434a5cd44adb49f1c2ffd5d0cd077a9075a492d');
  });


  it('produces the expected result for ShortMsgKAT_256 1416', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('06cbbe67e94a978203ead6c057a1a5b098478b4b4cbef5a97e93c8e42f5572713575fc2a884531d7622f8f879387a859a80f10ef02708cd8f7413ab385afc357678b9578c0ebf641ef076a1a30f1f75379e9dcb2a885bdd295905ee80c0168a62a9597d10cf12dd2d8cee46645c7e5a141f6e0e23aa482abe5661c16e69ef1e28371e2e236c359ba4e92c25626a7b7ff13f6ea4ae906e1cfe163e91719b1f750a96cbde5fbc953d9e576cd216afc90323a', 'hex'));
    assert.equal(instance.digest('hex'), 'ea7511b993b786df59a3b3e0b3cd876c0f056d6ca43cc89c51c1b21ccdc79b42');
  });


  it('produces the expected result for ShortMsgKAT_256 1424', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f1c528cf7739874707d4d8ad5b98f7c77169de0b57188df233b2dc8a5b31eda5db4291dd9f68e6bad37b8d7f6c9c0044b3bf74bbc3d7d1798e138709b0d75e7c593d3cccdc1b20c7174b4e692add820ace262d45ccfae2077e878796347168060a162ecca8c38c1a88350bd63bb539134f700fd4addd5959e255337daa06bc86358fabcbefdfb5bc889783d843c08aadc6c4f6c36f65f156e851c9a0f917e4a367b5ad93d874812a1de6a7b93cd53ad97232', 'hex'));
    assert.equal(instance.digest('hex'), 'baaecb6e9db57971d5c70f5819ff89c5093254de19ef6059c43cc0afda7c5d34');
  });


  it('produces the expected result for ShortMsgKAT_256 1432', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('9d9f3a7ecd51b41f6572fd0d0881e30390dfb780991dae7db3b47619134718e6f987810e542619dfaa7b505c76b7350c6432d8bf1cfebdf1069b90a35f0d04cbdf130b0dfc7875f4a4e62cdb8e525aadd7ce842520a482ac18f09442d78305fe85a74e39e760a4837482ed2f437dd13b2ec1042afcf9decdc3e877e50ff4106ad10a525230d11920324a81094da31deab6476aa42f20c84843cfc1c58545ee80352bdd3740dd6a16792ae2d86f11641bb717c2', 'hex'));
    assert.equal(instance.digest('hex'), '56db69430b8ca852221d55d7bbff477dc83f7cb44ab44ddd64c31a52c483db4f');
  });


  it('produces the expected result for ShortMsgKAT_256 1440', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5179888724819fbad3afa927d3577796660e6a81c52d98e9303261d5a4a83232f6f758934d50aa83ff9e20a5926dfebaac49529d006eb923c5ae5048ed544ec471ed7191edf46363383824f915769b3e688094c682b02151e5ee01e510b431c8865aff8b6b6f2f59cb6d129da79e97c6d2b8fa6c6da3f603199d2d1bcab547682a81cd6cf65f6551121391d78bcc23b5bd0e922ec6d8bf97c952e84dd28aef909aba31edb903b28fbfc33b7703cd996215a11238', 'hex'));
    assert.equal(instance.digest('hex'), 'f8538f597f4463cad7a91905744b87156db33c65ba87b912427fec3669f425d4');
  });


  it('produces the expected result for ShortMsgKAT_256 1448', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('576ef3520d30b7a4899b8c0d5e359e45c5189add100e43be429a02fb3de5ff4f8fd0e79d9663acca72cd29c94582b19292a557c5b1315297d168fbb54e9e2ecd13809c2b5fce998edc6570545e1499dbe7fb74d47cd7f35823b212b05bf3f5a79caa34224fdd670d335fcb106f5d92c3946f44d3afcbae2e41ac554d8e6759f332b76be89a0324aa12c5482d1ea3ee89ded4936f3e3c080436f539fa137e74c6d3389bdf5a45074c47bc7b20b0948407a66d855e2f', 'hex'));
    assert.equal(instance.digest('hex'), '447eda923cfe1112a6f1a3e4c735bf8ee9e4f2aee7de666a472ff8cf0fc65315');
  });


  it('produces the expected result for ShortMsgKAT_256 1456', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0df2152fa4f4357c8741529dd77e783925d3d76e95bafa2b542a2c33f3d1d117d159cf473f82310356fee4c90a9e505e70f8f24859656368ba09381fa245eb6c3d763f3093f0c89b972e66b53d59406d9f01aea07f8b3b615cac4ee4d05f542e7d0dab45d67ccccd3a606ccbeb31ea1fa7005ba07176e60dab7d78f6810ef086f42f08e595f0ec217372b98970cc6321576d92ce38f7c397a403bada1548d205c343ac09deca86325373c3b76d9f32028fea8eb32515', 'hex'));
    assert.equal(instance.digest('hex'), '74d94c13afea4ddd07a637b68b6fe095017c092b3cdccdc498e26035d86d921e');
  });


  it('produces the expected result for ShortMsgKAT_256 1464', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3e15350d87d6ebb5c8ad99d42515cfe17980933c7a8f6b8bbbf0a63728cefaad2052623c0bd5931839112a48633fb3c2004e0749c87a41b26a8b48945539d1ff41a4b269462fd199bfecd45374756f55a9116e92093ac99451aefb2af9fd32d6d7f5fbc7f7a540d5097c096ebc3b3a721541de073a1cc02f7fb0fb1b9327fb0b1218ca49c9487ab5396622a13ae546c97abdef6b56380dda7012a8384091b6656d0ab272d363cea78163ff765cdd13ab1738b940d16cae', 'hex'));
    assert.equal(instance.digest('hex'), 'cc11196c095bffa090a05ba0bc255d38bda7218d9311143f4f200b1852d1bb0d');
  });


  it('produces the expected result for ShortMsgKAT_256 1472', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c38d6b0b757cb552be40940ece0009ef3b0b59307c1451686f1a22702922800d58bce7a636c1727ee547c01b214779e898fc0e560f8ae7f61bef4d75eaa696b921fd6b735d171535e9edd267c192b99880c87997711002009095d8a7a437e258104a41a505e5ef71e5613ddd2008195f0c574e6ba3fe40099cfa116e5f1a2fa8a6da04badcb4e2d5d0de31fdc4800891c45781a0aac7c907b56d631fca5ce8b2cde620d11d1777ed9fa603541de794ddc5758fcd5fad78c0', 'hex'));
    assert.equal(instance.digest('hex'), '8c085b54c213704374ddd920a45168608be65dfd036a562659f47143604144c2');
  });


  it('produces the expected result for ShortMsgKAT_256 1480', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8d2de3f0b37a6385c90739805b170057f091cd0c7a0bc951540f26a5a75b3e694631bb64c7635eed316f51318e9d8de13c70a2aba04a14836855f35e480528b776d0a1e8a23b547c8b8d6a0d09b241d3be9377160cca4e6793d00a515dc2992cb7fc741daca171431da99cce6f7789f129e2ac5cf65b40d703035cd2185bb936c82002daf8cbc27a7a9e554b06196630446a6f0a14ba155ed26d95bd627b7205c072d02b60db0fd7e49ea058c2e0ba202daff0de91e845cf79', 'hex'));
    assert.equal(instance.digest('hex'), 'd2e233264a3773495ffd12159ef7b631660c1b3e53a3da0f24ae14466f167757');
  });


  it('produces the expected result for ShortMsgKAT_256 1488', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c464bbdad275c50dcd983b65ad1019b9ff85a1e71c807f3204bb2c921dc31fbcd8c5fc45868ae9ef85b6c9b83bba2a5a822201ed68586ec5ec27fb2857a5d1a2d09d09115f22dcc39fe61f5e1ba0ff6e8b4acb4c6da748be7f3f0839739394ff7fa8e39f7f7e84a33c3866875c01bcb1263c9405d91908e9e0b50e7459fabb63d8c6bbb73d8e3483c099b55bc30ff092ff68b6adedfd477d63570c9f5515847f36e24ba0b705557130cec57ebad1d0b31a378e91894ee26e3a04', 'hex'));
    assert.equal(instance.digest('hex'), 'ffac7ca5fa067419d1bdb00c0e49c6e1a748880923a23ed5dd67dde63d777edb');
  });


  it('produces the expected result for ShortMsgKAT_256 1496', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8b8d68bb8a75732fe272815a68a1c9c5aa31b41dedc8493e76525d1d013d33cebd9e21a5bb95db2616976a8c07fcf411f5f6bc6f7e0b57aca78cc2790a6f9b898858ac9c79b165ff24e66677531e39f572be5d81eb3264524181115f32780257bfb9aeec6af12af28e587cac068a1a2953b59ad680f4c245b2e3ec36f59940d37e1d3db38e13edb29b5c0f404f6ff87f80fc8be7a225ff22fbb9c8b6b1d7330c57840d24bc75b06b80d30dad6806544d510af6c4785e823ac3e0b8', 'hex'));
    assert.equal(instance.digest('hex'), '5b2eca0920d32b1964bbf5810a6e6e53675ed1b83897fd04600d72e097845859');
  });


  it('produces the expected result for ShortMsgKAT_256 1504', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6b018710446f368e7421f1bc0ccf562d9c1843846bc8d98d1c9bf7d9d6fcb48bfc3bf83b36d44c4fa93430af75cd190bde36a7f92f867f58a803900df8018150384d85d82132f123006ac2aeba58e02a037fe6afbd65eca7c44977dd3dc74f48b6e7a1bfd5cc4dcf24e4d52e92bd4455848e4928b0eac8b7476fe3cc03e862aa4dff4470dbfed6de48e410f25096487ecfc32a27277f3f5023b2725ade461b1355889554a8836c9cf53bd767f5737d55184eea1ab3f53edd0976c485', 'hex'));
    assert.equal(instance.digest('hex'), '68f41fdfc7217e89687ed118bc31ac6ed2d9d1e1a2f1b20a2d429729fa03517b');
  });


  it('produces the expected result for ShortMsgKAT_256 1512', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c9534a24714bd4be37c88a3da1082eda7cabd154c309d7bd670dccd95aa535594463058a29f79031d6ecaa9f675d1211e9359be82669a79c855ea8d89dd38c2c761ddd0ec0ce9e97597432e9a1beae062cdd71edfdfd464119be9e69d18a7a7fd7ce0e2106f0c8b0abf4715e2ca48ef9f454dc203c96656653b727083513f8efb86e49c513bb758b3b052fe21f1c05bb33c37129d6cc81f1aef6adc45b0e8827a830fe545cf57d0955802c117d23ccb55ea28f95c0d8c2f9c5a242b33f', 'hex'));
    assert.equal(instance.digest('hex'), 'fa2f3de31e9cf25ab9a978c82d605a43ee39b68ac8e30f49f9d209cb4e172ab4');
  });


  it('produces the expected result for ShortMsgKAT_256 1520', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('07906c87297b867abf4576e9f3cc7f82f22b154afcbf293b9319f1b0584da6a40c27b32e0b1b7f412c4f1b82480e70a9235b12ec27090a5a33175a2bb28d8adc475cefe33f7803f8ce27967217381f02e67a3b4f84a71f1c5228e0c2ad971373f6f672624fcea8d1a9f85170fad30fa0bbd25035c3b41a6175d467998bd1215f6f3866f53847f9cf68ef3e2fbb54bc994de2302b829c5eea68ec441fcbafd7d16ae4fe9fff98bf00e5bc2ad54dd91ff9fda4dd77b6c754a91955d1fbaad0', 'hex'));
    assert.equal(instance.digest('hex'), 'ba2af506c10da8d7751e67ed766cfcd47d048d6ef9277dbd2abfe2fd5d787b79');
  });


  it('produces the expected result for ShortMsgKAT_256 1528', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('588e94b9054abc2189df69b8ba34341b77cdd528e7860e5defcaa79b0c9a452ad4b82aa306be84536eb7cedcbe058d7b84a6aef826b028b8a0271b69ac3605a9635ea9f5ea0aa700f3eb7835bc54611b922964300c953efe7491e3677c2cebe0822e956cd16433b02c68c4a23252c3f9e151a416b4963257b783e038f6b4d5c9f110f871652c7a649a7bcedcbccc6f2d0725bb903cc196ba76c76aa9f10a190b1d1168993baa9ffc96a1655216773458bec72b0e39c9f2c121378feab4e76a', 'hex'));
    assert.equal(instance.digest('hex'), '3cd33f8811af12183c53e978528f53ae7d559432724029e55fcfa9b990b91713');
  });


  it('produces the expected result for ShortMsgKAT_256 1536', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('08959a7e4baae874928813364071194e2939772f20db7c3157078987c557c2a6d5abe68d520eef3dc491692e1e21bcd880adebf63bb4213b50897fa005256ed41b5690f78f52855c8d9168a4b666fce2da2b456d7a7e7c17ab5f2fb1ee90b79e698712e963715983fd07641ae4b4e9dc73203fac1ae11fa1f8c7941fcc82eab247addb56e2638447e9d609e610b60ce086656aaebf1da3c8a231d7d94e2fd0afe46b391ff14a72eaeb3f44ad4df85866def43d4781a0b3578bc996c87970b132', 'hex'));
    assert.equal(instance.digest('hex'), '3ecc9d27994022045cbeab4fc041f12419cec8060c8f6f9f0372884df6074b5c');
  });


  it('produces the expected result for ShortMsgKAT_256 1544', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('cb2a234f45e2ecd5863895a451d389a369aab99cfef0d5c9ffca1e6e63f763b5c14fb9b478313c8e8c0efeb3ac9500cf5fd93791b789e67eac12fd038e2547cc8e0fc9db591f33a1e4907c64a922dda23ec9827310b306098554a4a78f050262db5b545b159e1ff1dca6eb734b872343b842c57eafcfda8405eedbb48ef32e99696d135979235c3a05364e371c2d76f1902f1d83146df9495c0a6c57d7bf9ee77e80f9787aee27be1fe126cdc9ef893a4a7dcbbc367e40fe4e1ee90b42ea25af01', 'hex'));
    assert.equal(instance.digest('hex'), '1501988a55372ac1b0b78849f3b7e107e0bf1f2cbaf670de7f15acbb1a00ad3d');
  });


  it('produces the expected result for ShortMsgKAT_256 1552', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d16beadf02ab1d4dc6f88b8c4554c51e866df830b89c06e786a5f8757e8909310af51c840efe8d20b35331f4355d80f73295974653ddd620cdde4730fb6c8d0d2dcb2b45d92d4fbdb567c0a3e86bd1a8a795af26fbf29fc6c65941cddb090ff7cd230ac5268ab4606fccba9eded0a2b5d014ee0c34f0b2881ac036e24e151be89eeb6cd9a7a790afccff234d7cb11b99ebf58cd0c589f20bdac4f9f0e28f75e3e04e5b3debce607a496d848d67fa7b49132c71b878fd5557e082a18eca1fbda94d4b', 'hex'));
    assert.equal(instance.digest('hex'), '5c4e860a0175c92c1e6af2cbb3084162403ced073faac901d0d358b6bf5eefa9');
  });


  it('produces the expected result for ShortMsgKAT_256 1560', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8f65f6bc59a85705016e2bae7fe57980de3127e5ab275f573d334f73f8603106ec3553016608ef2dd6e69b24be0b7113bf6a760ba6e9ce1c48f9e186012cf96a1d4849d75df5bb8315387fd78e9e153e76f8ba7ec6c8849810f59fb4bb9b004318210b37f1299526866f44059e017e22e96cbe418699d014c6ea01c9f0038b10299884dbec3199bb05adc94e955a1533219c1115fed0e5f21228b071f40dd57c4240d98d37b73e412fe0fa4703120d7c0c67972ed233e5deb300a22605472fa3a3ba86', 'hex'));
    assert.equal(instance.digest('hex'), '272b4f689263057fbf7605aaa67af012d742267164c4fab68035d99c5829b4f0');
  });


  it('produces the expected result for ShortMsgKAT_256 1568', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('84891e52e0d451813210c3fd635b39a03a6b7a7317b221a7abc270dfa946c42669aacbbbdf801e1584f330e28c729847ea14152bd637b3d0f2b38b4bd5bf9c791c58806281103a3eabbaede5e711e539e6a8b2cf297cf351c078b4fa8f7f35cf61bebf8814bf248a01d41e86c5715ea40c63f7375379a7eb1d78f27622fb468ab784aaaba4e534a6dfd1df6fa15511341e725ed2e87f98737ccb7b6a6dfae416477472b046bf1811187d151bfa9f7b2bf9acdb23a3be507cdf14cfdf517d2cb5fb9e4ab6', 'hex'));
    assert.equal(instance.digest('hex'), '9b28e42b67ef32ec80da10a07b004e1d71c6dce71d8013ffa0305d0d0ce0469d');
  });


  it('produces the expected result for ShortMsgKAT_256 1576', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fdd7a9433a3b4afabd7a3a5e3457e56debf78e84b7a0b0ca0e8c6d53bd0c2dae31b2700c6128334f43981be3b213b1d7a118d59c7e6b6493a86f866a1635c12859cfb9ad17460a77b4522a5c1883c3d6acc86e6162667ec414e9a104aa892053a2b1d72165a855bacd8faf8034a5dd9b716f47a0818c09bb6baf22aa503c06b4ca261f557761989d2afbd88b6a678ad128af68672107d0f1fc73c5ca740459297b3292b281e93bceb761bde7221c3a55708e5ec84472cddcaa84ecf23723cc0991355c6280', 'hex'));
    assert.equal(instance.digest('hex'), 'ee53f83d2e2ccc315c6377eadda5f42f42f3aadd664e3e895c37cbe9d0e9b9de');
  });


  it('produces the expected result for ShortMsgKAT_256 1584', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('70a40bfbef92277a1aad72f6b79d0177197c4ebd432668cfec05d099accb651062b5dff156c0b27336687a94b26679cfdd9daf7ad204338dd9c4d14114033a5c225bd11f217b5f4732da167ee3f939262d4043fc9cba92303b7b5e96aea12adda64859df4b86e9ee0b58e39091e6b188b408ac94e1294a8911245ee361e60e601eff58d1d37639f3753bec80ebb4efde25817436076623fc65415fe51d1b0280366d12c554d86743f3c3b6572e400361a60726131441ba493a83fbe9afda90f7af1ae717238d', 'hex'));
    assert.equal(instance.digest('hex'), '21ccfda65c4b915303012b852ab29481030f87347c29917e21f210f2bd5efc9c');
  });


  it('produces the expected result for ShortMsgKAT_256 1592', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('74356e449f4bf8644f77b14f4d67cb6bd9c1f5ae357621d5b8147e562b65c66585caf2e491b48529a01a34d226d436959153815380d5689e30b35357cdac6e08d3f2b0e88e200600d62bd9f5eaf488df86a4470ea227006182e44809009868c4c280c43d7d64a5268fa719074960087b3a6abc837882f882c837834535929389a12b2c78187e2ea07ef8b8eef27dc85002c3ae35f1a50bee6a1c48ba7e175f3316670b27983472aa6a61eed0a683a39ee323080620ea44a9f74411ae5ce99030528f9ab49c79f2', 'hex'));
    assert.equal(instance.digest('hex'), 'f5bf70710da440edb43afd3eb7698180317ffefa81406bb4df9c2bb8b0b1c034');
  });


  it('produces the expected result for ShortMsgKAT_256 1600', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8c3798e51bc68482d7337d3abb75dc9ffe860714a9ad73551e120059860dde24ab87327222b64cf774415a70f724cdf270de3fe47dda07b61c9ef2a3551f45a5584860248fabde676e1cd75f6355aa3eaeabe3b51dc813d9fb2eaa4f0f1d9f834d7cad9c7c695ae84b329385bc0bef895b9f1edf44a03d4b410cc23a79a6b62e4f346a5e8dd851c2857995ddbf5b2d717aeb847310e1f6a46ac3d26a7f9b44985af656d2b7c9406e8a9e8f47dcb4ef6b83caacf9aefb6118bfcff7e44bef6937ebddc89186839b77', 'hex'));
    assert.equal(instance.digest('hex'), 'e83ea21f5bc0976953af86069a10eb6024a1ac59d609688e4a9759bb8b6c9441');
  });


  it('produces the expected result for ShortMsgKAT_256 1608', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('fa56bf730c4f8395875189c10c4fb251605757a8fecc31f9737e3c2503b02608e6731e85d7a38393c67de516b85304824bfb135e33bf22b3a23b913bf6acd2b7ab85198b8187b2bcd454d5e3318cacb32fd6261c31ae7f6c54ef6a7a2a4c9f3ecb81ce3555d4f0ad466dd4c108a90399d70041997c3b25345a9653f3c9a6711ab1b91d6a9d2216442da2c973cbd685ee7643bfd77327a2f7ae9cb283620a08716dfb462e5c1d65432ca9d56a90e811443cd1ecb8f0de179c9cb48ba4f6fec360c66f252f6e64edc96b', 'hex'));
    assert.equal(instance.digest('hex'), 'a2d93c6367e1862809d367ec37f9da44cb3a8b4319c6a094c5e7d7266fe3a593');
  });


  it('produces the expected result for ShortMsgKAT_256 1616', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b6134f9c3e91dd8000740d009dd806240811d51ab1546a974bcb18d344642baa5cd5903af84d58ec5ba17301d5ec0f10ccd0509cbb3fd3fff9172d193af0f782252fd1338c7244d40e0e42362275b22d01c4c3389f19dd69bdf958ebe28e31a4ffe2b5f18a87831cfb7095f58a87c9fa21db72ba269379b2dc2384b3da953c7925761fed324620acea435e52b424a7723f6a2357374157a34cd8252351c25a1b232826cefe1bd3e70ffc15a31e7c0598219d7f00436294d11891b82497bc78aa5363892a2495df8c1eef', 'hex'));
    assert.equal(instance.digest('hex'), '3c647b195f22dc16d6decc8873017df369ee1c4696340934db158dc4059c76df');
  });


  it('produces the expected result for ShortMsgKAT_256 1624', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c941cdb9c28ab0a791f2e5c8e8bb52850626aa89205bec3a7e22682313d198b1fa33fc7295381354858758ae6c8ec6fac3245c6e454d16fa2f51c4166fab51df272858f2d603770c40987f64442d487af49cd5c3991ce858ea2a60dab6a65a34414965933973ac2457089e359160b7cdedc42f29e10a91921785f6b7224ee0b349393cdcff6151b50b377d609559923d0984cda6000829b916ab6896693ef6a2199b3c22f7dc5500a15b8258420e314c222bc000bc4e5413e6dd82c993f8330f5c6d1be4bc79f08a1a0a46', 'hex'));
    assert.equal(instance.digest('hex'), '3bb394d056d94fde68920cd383378ee3abcc44b7259d3db9cd0a897e021f7e2e');
  });


  it('produces the expected result for ShortMsgKAT_256 1632', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('4499efffac4bcea52747efd1e4f20b73e48758be915c88a1ffe5299b0b005837a46b2f20a9cb3c6e64a9e3c564a27c0f1c6ad1960373036ec5bfe1a8fc6a435c2185ed0f114c50e8b3e4c7ed96b06a036819c9463e864a58d6286f785e32a804443a56af0b4df6abc57ed5c2b185ddee8489ea080deeee66aa33c2e6dab36251c402682b6824821f998c32163164298e1fafd31babbcffb594c91888c6219079d907fdb438ed89529d6d96212fd55abe20399dbefd342248507436931cdead496eb6e4a80358acc78647d043', 'hex'));
    assert.equal(instance.digest('hex'), '43640f408613cbf7393d900b921f22b826357f3b4fdff7168ec45cbfb3ef5eff');
  });


  it('produces the expected result for ShortMsgKAT_256 1640', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('eecbb8fdfa4da62170fd06727f697d81f83f601ff61e478105d3cb7502f2c89bf3e8f56edd469d049807a38882a7eefbc85fc9a950952e9fa84b8afebd3ce782d4da598002827b1eb98882ea1f0a8f7aa9ce013a6e9bc462fb66c8d4a18da21401e1b93356eb12f3725b6db1684f2300a98b9a119e5d27ff704affb618e12708e77e6e5f34139a5a41131fd1d6336c272a8fc37080f041c71341bee6ab550cb4a20a6ddb6a8e0299f2b14bc730c54b8b1c1c487b494bdccfd3a53535ab2f231590bf2c4062fd2ad58f906a2d0d', 'hex'));
    assert.equal(instance.digest('hex'), 'cb3713a5d5abbc6af72f8b38a701c71269b3b51c62ec5116f96ad0d42a10fd90');
  });


  it('produces the expected result for ShortMsgKAT_256 1648', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e64f3e4ace5c8418d65fec2bc5d2a303dd458034736e3b0df719098be7a206deaf52d6ba82316caf330ef852375188cde2b39cc94aa449578a7e2a8e3f5a9d68e816b8d16889fbc0ebf0939d04f63033ae9ae2bdab73b88c26d6bd25ee460ee1ef58fb0afa92cc539f8c76d3d097e7a6a63ebb9b5887edf3cf076028c5bbd5b9db3211371ad3fe121d4e9bf44229f4e1ecf5a0f9f0eba4d5ceb72878ab22c3f0eb5a625323ac66f7061f4a81fac834471e0c59553f108475fe290d43e6a055ae3ee46fb67422f814a68c4be3e8c9', 'hex'));
    assert.equal(instance.digest('hex'), 'b304fc4ca22131857d242eb12fe899ed9e6b55717c3360f113512a84174e6a77');
  });


  it('produces the expected result for ShortMsgKAT_256 1656', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d2cb2d733033f9e91395312808383cc4f0ca974e87ec68400d52e96b3fa6984ac58d9ad0938dde5a973008d818c49607d9de2284e7618f1b8aed8372fbd52ed54557af4220fac09dfa8443011699b97d743f8f2b1aef3537ebb45dcc9e13dfb438428ee190a4efdb3caeb7f3933117bf63abdc7e57beb4171c7e1ad260ab0587806c4d137b6316b50abc9cce0dff3acada47bbb86be777e617bbe578ff4519844db360e0a96c6701290e76bb95d26f0f804c8a4f2717eac4e7de9f2cff3bbc55a17e776c0d02856032a6cd10ad2838', 'hex'));
    assert.equal(instance.digest('hex'), 'a3ca830d4771c1baa7fada76c5fceadd0f3cb9736e19cfec52e9e74f56bfdd55');
  });


  it('produces the expected result for ShortMsgKAT_256 1664', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('f2998955613dd414cc111df5ce30a995bb792e260b0e37a5b1d942fe90171a4ac2f66d4928d7ad377f4d0554cbf4c523d21f6e5f379d6f4b028cdcb9b1758d3b39663242ff3cb6ede6a36a6f05db3bc41e0d861b384b6dec58bb096d0a422fd542df175e1be1571fb52ae66f2d86a2f6824a8cfaacbac4a7492ad0433eeb15454af8f312b3b2a577750e3efbd370e8a8cac1582581971fba3ba4bd0d76e718dacf8433d33a59d287f8cc92234e7a271041b526e389efb0e40b6a18b3aaf658e82ed1c78631fd23b4c3eb27c3faec8685', 'hex'));
    assert.equal(instance.digest('hex'), 'ca158c46370e64a9f032f5ba8e091460fd555ef700edf7087e56bebffa261de7');
  });


  it('produces the expected result for ShortMsgKAT_256 1672', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('447797e2899b72a356ba55bf4df3acca6cdb1041eb477bd1834a9f9acbc340a294d729f2f97df3a610be0ff15edb9c6d5db41644b9874360140fc64f52aa03f0286c8a640670067a84e017926a70438db1bb361defee7317021425f8821def26d1efd77fc853b818545d055adc9284796e583c76e6fe74c9ac2587aa46aa8f8804f2feb5836cc4b3ababab8429a5783e17d5999f32242eb59ef30cd7adabc16d72dbdb097623047c98989f88d14eaf02a7212be16ec2d07981aaa99949ddf89ecd90333a77bc4e1988a82abf7c7caf3291', 'hex'));
    assert.equal(instance.digest('hex'), '5901cda0cd1510db5455d072d2737a6721ad9ee3272953a19c7ab378bf3646c5');
  });


  it('produces the expected result for ShortMsgKAT_256 1680', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('9f2c18ade9b380c784e170fb763e9aa205f64303067eb1bcea93df5dac4bf5a2e00b78195f808df24fc76e26cb7be31dc35f0844cded1567bba29858cffc97fb29010331b01d6a3fb3159cc1b973d255da9843e34a0a4061cabdb9ed37f241bfabb3c20d32743f4026b59a4ccc385a2301f83c0b0a190b0f2d01acb8f0d41111e10f2f4e149379275599a52dc089b35fdd5234b0cfb7b6d8aebd563ca1fa653c5c021dfd6f5920e6f18bfafdbecbf0ab00281333ed50b9a999549c1c8f8c63d7626c48322e9791d5ff72294049bde91e73f8', 'hex'));
    assert.equal(instance.digest('hex'), 'f64562d6273efb5ebd027e0a6f38c3fb204a6dbe894ee01200ea249b747cfe66');
  });


  it('produces the expected result for ShortMsgKAT_256 1688', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('ae159f3fa33619002ae6bcce8cbbdd7d28e5ed9d61534595c4c9f43c402a9bb31f3b301cbfd4a43ce4c24cd5c9849cc6259eca90e2a79e01ffbac07ba0e147fa42676a1d668570e0396387b5bcd599e8e66aaed1b8a191c5a47547f61373021fa6deadcb55363d233c24440f2c73dbb519f7c9fa5a8962efd5f6252c0407f190dfefad707f3c7007d69ff36b8489a5b6b7c557e79dd4f50c06511f599f56c896b35c917b63ba35c6ff8092baf7d1658e77fc95d8a6a43eeb4c01f33f03877f92774be89c1114dd531c011e53a34dc248a2f0e6', 'hex'));
    assert.equal(instance.digest('hex'), 'e7d7a113b3a33175d0abd2cf4f9add8e41dc86c93c9552c5b3588277fbcaa24a');
  });


  it('produces the expected result for ShortMsgKAT_256 1696', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3b8e97c5ffc2d6a40fa7de7fcefc90f3b12c940e7ab415321e29ee692dfac799b009c99dcddb708fce5a178c5c35ee2b8617143edc4c40b4d313661f49abdd93cea79d117518805496fe6acf292c4c2a1f76b403a97d7c399daf85b46ad84e16246c67d6836757bde336c290d5d401e6c1386ab32797af6bb251e9b2d8fe754c47482b72e0b394eab76916126fd68ea7d65eb93d59f5b4c5ac40f7c3b37e7f3694f29424c24af8c8f0ef59cd9dbf1d28e0e10f799a6f78cad1d45b9db3d7dee4a7059abe99182714983b9c9d44d7f5643596d4f3', 'hex'));
    assert.equal(instance.digest('hex'), '3b40c1493af411ae7849904d478df2407254bf62b88e9bffd7b42bd2a60ce0fa');
  });


  it('produces the expected result for ShortMsgKAT_256 1704', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3434ec31b10fafdbfeec0dd6bd94e80f7ba9dca19ef075f7eb017512af66d6a4bcf7d16ba0819a1892a6372f9b35bcc7ca8155ee19e8428bc22d214856ed5fa9374c3c09bde169602cc219679f65a1566fc7316f4cc3b631a18fb4449fa6afa16a3db2bc4212eff539c67cf184680826535589c7111d73bffce431b4c40492e763d9279560aaa38eb2dc14a212d723f994a1fe656ff4dd14551ce4e7c621b2aa5604a10001b2878a897a28a08095c325e10a26d2fb1a75bfd64c250309bb55a44f23bbac0d5516a1c687d3b41ef2fbbf9cc56d4739', 'hex'));
    assert.equal(instance.digest('hex'), 'feeb172aeab2f0deb748fb77801ca22d3ce99b7a9f9789e479b93d1f4b1d227f');
  });


  it('produces the expected result for ShortMsgKAT_256 1712', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7c7953d81c8d208fd1c97681d48f49dd003456de60475b84070ef4847c333b74575b1fc8d2a186964485a3b8634feaa3595aaa1a2f4595a7d6b6153563dee31bbac443c8a33eed6d5d956a980a68366c2527b550ee950250dfb691eacbd5d56ae14b970668be174c89df2fea43ae52f13142639c884fd62a3683c0c3792f0f24ab1318bcb27e21f4737fab62c77ea38bc8fd1cf41f7dab64c13febe7152bf5bb7ab5a78f5346d43cc741cb6f72b7b8980f268b68bf62abdfb1577a52438fe14b591498cc95f071228460c7c5d5ceb4a7bde588e7f21c', 'hex'));
    assert.equal(instance.digest('hex'), 'b240bc52b8af1b502e26bf1d5e75fe2663bfba503faf10f46754dc3d23cb61c1');
  });


  it('produces the expected result for ShortMsgKAT_256 1720', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7a6a4f4fdc59a1d223381ae5af498d74b7252ecf59e389e49130c7eaee626e7bd9897effd92017f4ccde66b0440462cdedfd352d8153e6a4c8d7a0812f701cc737b5178c2556f07111200eb627dbc299caa792dfa58f35935299fa3a3519e9b03166dffa159103ffa35e8577f7c0a86c6b46fe13db8e2cdd9dcfba85bdddcce0a7a8e155f81f712d8e9fe646153d3d22c811bd39f830433b2213dd46301941b59293fd0a33e2b63adbd95239bc01315c46fdb678875b3c81e053a40f581cfbec24a1404b1671a1b88a6d06120229518fb13a74ca0ac5ae', 'hex'));
    assert.equal(instance.digest('hex'), '3ebace41f578fde6603e032fc1c7cfeef1cb79fe938a94d4c7b58b0ba4cb9720');
  });


  it('produces the expected result for ShortMsgKAT_256 1728', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d9faa14cebe9b7de551b6c0765409a33938562013b5e8e0e1e0a6418df7399d0a6a771fb81c3ca9bd3bb8e2951b0bc792525a294ebd1083688806fe5e7f1e17fd4e3a41d00c89e8fcf4a363caedb1acb558e3d562f1302b3d83bb886ed27b76033798131dab05b4217381eaaa7ba15ec820bb5c13b516dd640eaec5a27d05fdfca0f35b3a5312146806b4c0275bcd0aaa3b2017f346975db566f9b4d137f4ee10644c2a2da66deeca5342e236495c3c6280528bfd32e90af4cd9bb908f34012b52b4bc56d48cc8a6b59bab014988eabd12e1a0a1c2e170e7', 'hex'));
    assert.equal(instance.digest('hex'), '65eb4bd5ecca7164ce9b66727f112c1ac6120ddd200dcb5ce75b7487843fcdb8');
  });


  it('produces the expected result for ShortMsgKAT_256 1736', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2d8427433d0c61f2d96cfe80cf1e932265a191365c3b61aaa3d6dcc039f6ba2ad52a6a8cc30fc10f705e6b7705105977fa496c1c708a277a124304f1fc40911e7441d1b5e77b951aad7b01fd5db1b377d165b05bbf898042e39660caf8b279fe5229d1a8db86c0999ed65e53d01ccbc4b43173ccf992b3a14586f6ba42f5fe30afa8ae40c5df29966f9346da5f8b35f16a1de3ab6de0f477d8d8660918060e88b9b9e9ca6a4207033b87a812dbf5544d39e4882010f82b6ce005f8e8ff6fe3c3806bc2b73c2b83afb704345629304f9f86358712e9fae3ca3e', 'hex'));
    assert.equal(instance.digest('hex'), 'd7155f6d3a90801f5e547689389ff62a604c81b7c1583d9204ac6b0194f0e8dd');
  });


  it('produces the expected result for ShortMsgKAT_256 1744', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5e19d97887fcaac0387e22c6f803c34a3dacd2604172433f7a8a7a526ca4a2a1271ecfc5d5d7be5ac0d85d921095350dfc65997d443c21c8094e0a3fefd2961bcb94aed03291ae310ccda75d8ace4bc7d89e7d3e5d1650bda5d668b8b50bfc8e608e184f4d3a9a2badc4ff5f07e0c0bc8a9f2e0b2a26fd6d8c550008faaab75fd71af2a424bec9a7cd9d83fad4c8e9319115656a8717d3b523a68ff8004258b9990ed362308461804ba3e3a7e92d8f2ffae5c2fba55ba5a3c27c0a2f71bd711d2fe1799c2adb31b200035481e9ee5c4adf2ab9c0fa50b23975cf', 'hex'));
    assert.equal(instance.digest('hex'), 'aa7adaf16f39e398b4ab0ada037710556b720b0248d84817b2cfdf7600933595');
  });


  it('produces the expected result for ShortMsgKAT_256 1752', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('c8e976ab4638909387ce3b8d4e510c3230e5690e02c45093b1d297910abc481e56eea0f296f98379dfc9080af69e73b2399d1c143bee80ae1328162ce1ba7f6a8374679b20aacd380eb4e61382c99998704d62701afa914f9a2705cdb065885f50d086c3eb5753700c387118bb142f3e6da1e988dfb31ac75d7368931e45d1391a274b22f83ceb072f9bcabc0b216685bfd789f5023971024b1878a205442522f9ea7d8797a4102a3df41703768251fd5e017c85d1200a464118aa35654e7ca39f3c375b8ef8cbe7534dbc64bc20befb417cf60ec92f63d9ee7397', 'hex'));
    assert.equal(instance.digest('hex'), 'b195463fe22a160802be0a0464ee3ab4d2b117de517b331c7bf04c8ba90c6120');
  });


  it('produces the expected result for ShortMsgKAT_256 1760', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7145fa124b7429a1fc2231237a949ba7201bcc1822d3272de005b682398196c25f7e5cc2f289fbf44415f699cb7fe6757791b1443410234ae061edf623359e2b4e32c19bf88450432dd01caa5eb16a1dc378f391ca5e3c4e5f356728bddd4975db7c890da8bbc84cc73ff244394d0d48954978765e4a00b593f70f2ca082673a261ed88dbcef1127728d8cd89bc2c597e9102ced6010f65fa75a14ebe467fa57ce3bd4948b6867d74a9df5c0ec6f530cbf2ee61ce6f06bc8f2864dff5583776b31df8c7ffcb61428a56bf7bd37188b4a5123bbf338393af46eda85e6', 'hex'));
    assert.equal(instance.digest('hex'), '9f9296c53e753a4de4e5c5a547f51763a96903b083fbc7a7828effe4763a7ce6');
  });


  it('produces the expected result for ShortMsgKAT_256 1768', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7fdfadcc9d29bad23ae038c6c65cda1aef757221b8872ed3d75ff8df7da0627d266e224e812c39f7983e4558bfd0a1f2bef3feb56ba09120ef762917b9c093867948547aee98600d10d87b20106878a8d22c64378bf634f7f75900c03986b077b0bf8b740a82447b61b99fee5376c5eb6680ec9e3088f0bdd0c56883413d60c1357d3c811950e5890e7600103c916341b80c743c6a852b7b4fb60c3ba21f3bc15b8382437a68454779cf3cd7f9f90ccc8ef28d0b706535b1e4108eb5627bb45d719cb046839aee311ca1abdc8319e050d67972cb35a6b1601b25dbf487', 'hex'));
    assert.equal(instance.digest('hex'), '51de4090aec36f6c446476c709253272cab595d9887ca5d52a9b38086854d58f');
  });


  it('produces the expected result for ShortMsgKAT_256 1776', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('988638219fd3095421f826f56e4f09e356296b628c3ce6930c9f2e758fd1a80c8273f2f61e4daae65c4f110d3e7ca0965ac7d24e34c0dc4ba2d6ff0bf5bbe93b3585f354d7543cb542a1aa54674d375077f2d360a8f4d42f3db131c3b7ab7306267ba107659864a90c8c909460a73621d1f5d9d3fd95beb19b23db1cb6c0d0fba91d36891529b8bd8263caa1bab56a4affaed44962df096d8d5b1eb845ef31188b3e10f1af811a13f156beb7a288aae593ebd1471b624aa1a7c6adf01e2200b3d72d88a3aed3100c88231e41efc376906f0b580dc895f080fda5741db1cb', 'hex'));
    assert.equal(instance.digest('hex'), '87a17400f919f2f53232b2205e1e8b14bd5698a76e74b9bdd5638a5c7ba5de1e');
  });


  it('produces the expected result for ShortMsgKAT_256 1784', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5aab62756d307a669d146aba988d9074c5a159b3de85151a819b117ca1ff6597f6156e80fdd28c9c3176835164d37da7da11d94e09add770b68a6e081cd22ca0c004bfe7cd283bf43a588da91f509b27a6584c474a4a2f3ee0f1f56447379240a5ab1fb77fdca49b305f07ba86b62756fb9efb4fc225c86845f026ea542076b91a0bc2cdd136e122c659be259d98e5841df4c2f60330d4d8cdee7bf1a0a244524eecc68ff2aef5bf0069c9e87a11c6e519de1a4062a10c83837388f7ef58598a3846f49d499682b683c4a062b421594fafbc1383c943ba83bdef515efcf10d', 'hex'));
    assert.equal(instance.digest('hex'), '9742536c461d0c3503a6c943fa8105dbcd1e542f728d71ccc0517cffc232ea68');
  });


  it('produces the expected result for ShortMsgKAT_256 1792', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('47b8216aa0fbb5d67966f2e82c17c07aa2d6327e96fcd83e3de7333689f3ee79994a1bf45082c4d725ed8d41205cb5bcdf5c341f77facb1da46a5b9b2cbc49eadf786bcd881f371a95fa17df73f606519aea0ff79d5a11427b98ee7f13a5c00637e2854134691059839121fea9abe2cd1bcbbbf27c74caf3678e05bfb1c949897ea01f56ffa4dafbe8644611685c617a3206c7a7036e4ac816799f693dafe7f19f303ce4eba09d21e03610201bfc665b72400a547a1e00fa9b7ad8d84f84b34aef118515e74def11b9188bd1e1f97d9a12c30132ec2806339bdadacda2fd8b78', 'hex'));
    assert.equal(instance.digest('hex'), 'ae3bf0936497a2955df874b7f2685314c7606030b9c6e7bfb8a8dff9825957b5');
  });


  it('produces the expected result for ShortMsgKAT_256 1800', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('8cff1f67fe53c098896d9136389bd8881816ccab34862bb67a656e3d98896f3ce6ffd4da73975809fcdf9666760d6e561c55238b205d8049c1cedeef374d1735daa533147bfa960b2cce4a4f254176bb4d1bd1e89654432b8dbe1a135c42115b394b024856a2a83dc85d6782be4b444239567ccec4b184d4548eae3ff6a192f343292ba2e32a0f267f31cc26719eb85245d415fb897ac2da433ee91a99424c9d7f1766a44171d1651001c38fc79294accc68ceb5665d36218454d3ba169ae058a831338c17743603f81ee173bfc0927464f9bd728dee94c6aeab7aae6ee3a627e8', 'hex'));
    assert.equal(instance.digest('hex'), '5fe0216dcc1bdb48f3375b9173b7b232939aa2177c6d056e908c8f2b9293b030');
  });


  it('produces the expected result for ShortMsgKAT_256 1808', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('eacd07971cff9b9939903f8c1d8cbb5d4db1b548a85d04e037514a583604e787f32992bf2111b97ac5e8a938233552731321522ab5e8583561260b7d13ebeef785b23a41fd8576a6da764a8ed6d822d4957a545d5244756c18aa80e1aad4d1f9c20d259dee1711e2cc8fd013169fb7cc4ce38b362f8e0936ae9198b7e838dcea4f7a5b9429bb3f6bbcf2dc92565e3676c1c5e6eb3dd2a0f86aa23edd3d0891f197447692794b3dfa269611ad97f72b795602b4fdb198f3fd3eb41b415064256e345e8d8c51c555dc8a21904a9b0f1ad0effab7786aac2da3b196507e9f33ca356427', 'hex'));
    assert.equal(instance.digest('hex'), 'c339904ec865f24fb3f88f142a8786d770934e006eaeddbf45acbb6b38431021');
  });


  it('produces the expected result for ShortMsgKAT_256 1816', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('23ac4e9a42c6ef45c3336ce6dfc2ff7de8884cd23dc912fef0f7756c09d335c189f3ad3a23697abda851a81881a0c8ccafc980ab2c702564c2be15fe4c4b9f10dfb2248d0d0cb2e2887fd4598a1d4acda897944a2ffc580ff92719c95cf2aa42dc584674cb5a9bc5765b9d6ddf5789791d15f8dd925aa12bffafbce60827b490bb7df3dda6f2a143c8bf96abc903d83d59a791e2d62814a89b8080a28060568cf24a80ae61179fe84e0ffad00388178cb6a617d37efd54cc01970a4a41d1a8d3ddce46edbba4ab7c90ad565398d376f431189ce8c1c33e132feae6a8cd17a61c630012', 'hex'));
    assert.equal(instance.digest('hex'), '4ca8b7febdf0a8062e9b76185cf4165071bb30928c18f14338c305626789c6d3');
  });


  it('produces the expected result for ShortMsgKAT_256 1824', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('0172df732282c9d488669c358e3492260cbe91c95cfbc1e3fea6c4b0ec129b45f242ace09f152fc6234e1bee8aab8cd56e8b486e1dcba9c05407c2f95da8d8f1c0af78ee2ed82a3a79ec0cb0709396ee62aadb84f8a4ee8a7ccca3c1ee84e302a09ea802204afecf04097e67d0f8e8a9d2651126c0a598a37081e42d168b0ae8a71951c524259e4e2054e535b779679bdade566fe55700858618e626b4a0faf895bcce9011504a49e05fd56127eae3d1f8917afb548ecadabda1020111fec9314c413498a360b08640549a22cb23c731ace743252a8227a0d2689d4c6001606678dfb921', 'hex'));
    assert.equal(instance.digest('hex'), '23d2614420859b2f13ac084453dd35c33fe47c894dd50c087fd1653fcaeea00b');
  });


  it('produces the expected result for ShortMsgKAT_256 1832', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3875b9240cf3e0a8b59c658540f26a701cf188496e2c2174788b126fd29402d6a75453ba0635284d08835f40051a2a9683dc92afb9383719191231170379ba6f4adc816fecbb0f9c446b785bf520796841e58878b73c58d3ebb097ce4761fdeabe15de2f319dfbaf1742cdeb389559c788131a6793e193856661376c81ce9568da19aa6925b47ffd77a43c7a0e758c37d69254909ff0fbd415ef8eb937bcd49f91468b49974c07dc819abd67395db0e05874ff83dddab895344abd0e7111b2df9e58d76d85ad98106b36295826be04d435615595605e4b4bb824b33c4afeb5e7bb0d19f909', 'hex'));
    assert.equal(instance.digest('hex'), '5590bb75247d7cd0b35620f0062b90ffb2a24de41220ed629d9e9a7abcadfb51');
  });


  it('produces the expected result for ShortMsgKAT_256 1840', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('747cc1a59fefba94a9c75ba866c30dc5c1cb0c0f8e9361d98484956dd5d1a40f6184afbe3dac9f76028d1caeccfbf69199c6ce2b4c092a3f4d2a56fe5a33a00757f4d7dee5dfb0524311a97ae0668a47971b95766e2f6dd48c3f57841f91f04a00ad5ea70f2d479a2620dc5cd78eaab3a3b011719b7e78d19ddf70d9423798af77517ebc55392fcd01fc600d8d466b9e7a7a85bf33f9cc5419e9bd874ddfd60981150ddaf8d7febaa4374f0872a5628d318000311e2f5655365ad4d407c20e5c04df17a222e7deec79c5ab1116d8572f91cd06e1ccc7ced53736fc867fd49ecebe6bf8082e8a', 'hex'));
    assert.equal(instance.digest('hex'), 'e5932441b012e503b0b0c6104703ba02613e472ad65655c085b0adb07656b28f');
  });


  it('produces the expected result for ShortMsgKAT_256 1848', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('57af971fccaec97435dc2ec9ef0429bcedc6b647729ea168858a6e49ac1071e706f4a5a645ca14e8c7746d65511620682c906c8b86ec901f3dded4167b3f00b06cbfac6aee3728051b3e5ff10b4f9ed8bd0b8da94303c833755b3ca3aeddf0b54bc8d6632138b5d25bab03d17b3458a9d782108006f5bb7de75b5c0ba854b423d8bb801e701e99dc4feaad59bc1c7112453b04d33ea3635639fb802c73c2b71d58a56bbd671b18fe34ed2e3dca38827d63fdb1d4fb3285405004b2b3e26081a8ff08cd6d2b08f8e7b7e90a2ab1ed7a41b1d0128522c2f8bff56a7fe67969422ce839a9d4608f03', 'hex'));
    assert.equal(instance.digest('hex'), '21c0d84eb7b61774f97db5d9acf1dffafb662c01ed291a442bec6f14d1334699');
  });


  it('produces the expected result for ShortMsgKAT_256 1856', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('04e16dedc1227902baaf332d3d08923601bdd64f573faa1bb7201918cfe16b1e10151dae875da0c0d63c59c3dd050c4c6a874011b018421afc4623ab0381831b2da2a8ba42c96e4f70864ac44e106f94311051e74c77c1291bf5db9539e69567bf6a11cf6932bbbad33f8946bf5814c066d851633d1a513510039b349939bfd42b858c21827c8ff05f1d09b1b0765dc78a135b5ca4dfba0801bcaddfa175623c8b647eacfb4444b85a44f73890607d06d507a4f8393658788669f6ef4deb58d08c50ca0756d5e2f49d1a7ad73e0f0b3d3b5f090acf622b1878c59133e4a848e05153592ea81c6fbf', 'hex'));
    assert.equal(instance.digest('hex'), '0d1e6bb88188b49af0a9a05eb1af94255e6799515a2f8eb46aa6af9a9dd5b9e0');
  });


  it('produces the expected result for ShortMsgKAT_256 1864', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('7c815c384eee0f288ece27cced52a01603127b079c007378bc5d1e6c5e9e6d1c735723acbbd5801ac49854b2b569d4472d33f40bbb8882956245c366dc3582d71696a97a4e19557e41e54dee482a14229005f93afd2c4a7d8614d10a97a9dfa07f7cd946fa45263063ddd29db8f9e34db60daa32684f0072ea2a9426ecebfa5239fb67f29c18cbaa2af6ed4bf4283936823ac1790164fec5457a9cba7c767ca59392d94cab7448f50eb34e9a93a80027471ce59736f099c886dea1ab4cba4d89f5fc7ae2f21ccd27f611eca4626b2d08dc22382e92c1efb2f6afdc8fdc3d2172604f5035c46b8197d3', 'hex'));
    assert.equal(instance.digest('hex'), '935ded24f5cecc69e1f012b60b7831abce7ef50eeb0bea7f816c3dbf2b4abdc1');
  });


  it('produces the expected result for ShortMsgKAT_256 1872', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('e29d505158dbdd937d9e3d2145658ee6f5992a2fc790f4f608d9cdb44a091d5b94b88e81fac4fdf5c49442f13b911c55886469629551189eaff62488f1a479b7db11a1560e198ddccccf50159093425ff7f1cb8d1d1246d0978764087d6bac257026b090efae8cec5f22b6f21c59ace1ac7386f5b8837ca6a12b6fbf5534dd0560ef05ca78104d3b943ddb220feaec89aa5e692a00f822a2ab9a2fe60350d75e7be16ff2526dc643872502d01f42f188abed0a6e9a6f5fd0d1ce7d5755c9ffa66b0af0b20bd806f08e06156690d81ac811778ca3dac2c249b96002017fce93e507e3b953acf99964b847', 'hex'));
    assert.equal(instance.digest('hex'), '6755bf7e60e4e07965bac24e51b1de93e3dd42ae780f256647d4cc2ef8eff771');
  });


  it('produces the expected result for ShortMsgKAT_256 1880', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d85588696f576e65eca0155f395f0cfacd83f36a99111ed5768df2d116d2121e32357ba4f54ede927f189f297d3a97fad4e9a0f5b41d8d89dd7fe20156799c2b7b6bf9c957ba0d6763f5c3bc5129747bbb53652b49290cff1c87e2cdf2c4b95d8aaee09bc8fbfa6883e62d237885810491bfc101f1d8c636e3d0ede838ad05c207a3df4fad76452979eb99f29afaecedd1c63b8d36cf378454a1bb67a741c77ac6b6b3f95f4f02b64dabc15438613ea49750df42ee90101f115aa9abb9ff64324dde9dabbb01054e1bd6b4bcdc7930a44c2300d87ca78c06924d0323ad7887e46c90e8c4d100acd9eed21e', 'hex'));
    assert.equal(instance.digest('hex'), '62c9f5e5b56e2994327a7f9a03888da7bad67e387593803b1807482b137b4509');
  });


  it('produces the expected result for ShortMsgKAT_256 1888', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3a12f8508b40c32c74492b66323375dcfe49184c78f73179f3314b79e63376b8ac683f5a51f1534bd729b02b04d002f55cbd8e8fc9b5ec1ea6bbe6a0d0e7431518e6ba45d124035f9d3dce0a8bb7bf1430a9f657e0b4ea9f20eb20c786a58181a1e20a96f1628f8728a13bdf7a4b4b32fc8aa7054cc4881ae7fa19afa65c6c3ee1b3ade3192af42054a8a911b8ec1826865d46d93f1e7c5e2b7813c92a506e53886f3d4701bb93d2a681ad109c845904bb861af8af0646b6e399b38b614051d34f6842563a0f37ec00cb3d865fc5d746c4987de2a65071100883a2a9c7a2bfe1e2dd603d9ea24dc7c5fd06be', 'hex'));
    assert.equal(instance.digest('hex'), '9927fa5efd86304e73d54aa4928818c05b01504672c529471394a82e049e5f95');
  });


  it('produces the expected result for ShortMsgKAT_256 1896', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('1861edce46fa5ad17e1ff1deae084dec580f97d0a67885dfe834b9dfac1ae076742ce9e267512ca51f6df5a455af0c5fd6abf94acea103a3370c354485a7846fb84f3ac7c2904b5b2fbf227002ce512133bb7e1c4e50057bfd1e44db33c7cdb969a99e284b184f50a14b068a1fc5009d9b298dbe92239572a7627aac02abe8f3e3b473417f36d4d2505d16b7577f4526c9d94a270a2dfe450d06da8f6fa956879a0a55cfe99e742ea555ea477ba3e9b44ccd508c375423611af92e55345dc215779b2d5119eba49c71d49b9fe3f1569fa24e5ca3e332d042422a8b8158d3ec66a80012976f31ffdf305f0c9c5e', 'hex'));
    assert.equal(instance.digest('hex'), '84e056bf7bdfc73a3aaa95b00a74a136d776069beeb304423bead90120db6350');
  });


  it('produces the expected result for ShortMsgKAT_256 1904', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('08d0ffde3a6e4ef65608ea672e4830c12943d7187ccff08f4941cfc13e545f3b9c7ad5eebbe2b01642b486caf855c2c73f58c1e4e3391da8e2d63d96e15fd84953ae5c231911b00ad6050cd7aafdaac9b0f663ae6aab45519d0f5391a541707d479034e73a6ad805ae3598096af078f1393301493d663dd71f83869ca27ba508b7e91e81e128c1716dc3acfe3084b2201e04cf8006617eecf1b640474a5d45cfde9f4d3ef92d6d055b909892194d8a8218db6d8203a84261d200d71473d7488f3427416b6896c137d455f231071cacbc86e0415ab88aec841d96b7b8af41e05bb461a40645bf176601f1e760de5f', 'hex'));
    assert.equal(instance.digest('hex'), '401c3be59cc373453aef9603f7335c1d5fe669909a1425d7671dcb84a49887ca');
  });


  it('produces the expected result for ShortMsgKAT_256 1912', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('d782abb72a5be3392757be02d3e45be6e2099d6f000d042c8a543f50ed6ebc055a7f133b0dd8e9bc348536edcaae2e12ec18e8837df7a1b3c87ec46d50c241dee820fd586197552dc20beea50f445a07a38f1768a39e2b2ff05dddedf751f1def612d2e4d810daa3a0cc904516f9a43af660315385178a529e51f8aae141808c8bc5d7b60cac26bb984ac1890d0436ef780426c547e94a7b08f01acbfc4a3825eae04f520a9016f2fb8bf5165ed12736fc71e36a49a73614739eaa3ec834069b1b40f1350c2b3ab885c02c640b9f7686ed5f99527e41cfcd796fe4c256c9173186c226169ff257954ebda81c0e5f99', 'hex'));
    assert.equal(instance.digest('hex'), '020485dcd264296afdb7f643ca828c93356f1714cbcc2fbbdd30f9896c3f2789');
  });


  it('produces the expected result for ShortMsgKAT_256 1920', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5fce8109a358570e40983e1184e541833bb9091e280f258cfb144387b05d190e431cb19baa67273ba0c58abe91308e1844dcd0b3678baa42f335f2fa05267a0240b3c718a5942b3b3e3bfa98a55c25a1466e8d7a603722cb2bbf03afa54cd769a99f310735ee5a05dae2c22d397bd95635f58c48a67f90e1b73aafcd3f82117f0166657838691005b18da6f341d6e90fc1cdb352b30fae45d348294e501b63252de14740f2b85ae5299ddec3172de8b6d0ba219a20a23bb5e10ff434d39db3f583305e9f5c039d98569e377b75a70ab837d1df269b8a4b566f40bb91b577455fd3c356c914fa06b9a7ce24c7317a172d', 'hex'));
    assert.equal(instance.digest('hex'), 'f8c43e28816bb41993bdb866888f3cc59efba208390144d3878dbf9fbfa1d57e');
  });


  it('produces the expected result for ShortMsgKAT_256 1928', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6172f1971a6e1e4e6170afbad95d5fec99bf69b24b674bc17dd78011615e502de6f56b86b1a71d3f4348087218ac7b7d09302993be272e4a591968aef18a1262d665610d1070ee91cc8da36e1f841a69a7a682c580e836941d21d909a3afc1f0b963e1ca5ab193e124a1a53df1c587470e5881fb54dae1b0d840f0c8f9d1b04c645ba1041c7d8dbf22030a623aa15638b3d99a2c400ff76f3252079af88d2b37f35ee66c1ad7801a28d3d388ac450b97d5f0f79e4541755356b3b1a5696b023f39ab7ab5f28df4202936bc97393b93bc915cb159ea1bd7a0a414cb4b7a1ac3af68f50d79f0c9c7314e750f7d02faa58bfa', 'hex'));
    assert.equal(instance.digest('hex'), '4ea524e705020284b18284e34683725590e1ee565a6ff598ed4d42b1c987471e');
  });


  it('produces the expected result for ShortMsgKAT_256 1936', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('5668ecd99dfbe215c4118398ac9c9eaf1a1433fab4ccdd3968064752b625ea944731f75d48a27d047d67547f14dd0ffaa55fa5e29f7af0d161d85eafc4f2029b717c918eab9d304543290bdba7158b68020c0ba4e079bc95b5bc0fc044a992b94b4ccd3bd66d0eabb5dbbab904d62e00752c4e3b0091d773bcf4c14b4377da3efff824b1cb2fa01b32d1e46c909e626ed2dae920f4c7dbeb635bc754facbd8d49beba3f23c1c41ccbfcd0ee0c114e69737f5597c0bf1d859f0c767e18002ae8e39c26261ffde2920d3d0baf0e906138696cfe5b7e32b600f45df3aaa39932f3a7df95b60fa8712a2271fcaf3911ce7b511b1', 'hex'));
    assert.equal(instance.digest('hex'), 'e4963e74ae01ff7774b96b4f614d1cb2a4cf8d206ed93c66fa42f71432be2c3f');
  });


  it('produces the expected result for ShortMsgKAT_256 1944', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('03d625488354df30e3f875a68edfcf340e8366a8e1ab67f9d5c5486a96829dfac0578289082b2a62117e1cf418b43b90e0adc881fc6ae8105c888e9ecd21aea1c9ae1a4038dfd17378fed71d02ae492087d7cdcd98f746855227967cb1ab4714261ee3bead3f4db118329d3ebef4bc48a875c19ba763966da0ebea800e01b2f50b00e9dd4caca6dcb314d00184ef71ea2391d760c950710db4a70f9212ffc54861f9dc752ce18867b8ad0c48df8466ef7231e7ac567f0eb55099e622ebb86cb237520190a61c66ad34f1f4e289cb3282ae3eaac6152ed24d2c92bae5a7658252a53c49b7b02dfe54fdb2e90074b6cf310ac661', 'hex'));
    assert.equal(instance.digest('hex'), '0f0d72bf8c0198459e45ece9cc18e930cb86263accf1fc7a00bc857ac9f201ad');
  });


  it('produces the expected result for ShortMsgKAT_256 1952', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2edc282ffb90b97118dd03aaa03b145f363905e3cbd2d50ecd692b37bf000185c651d3e9726c690d3773ec1e48510e42b17742b0b0377e7de6b8f55e00a8a4db4740cee6db0830529dd19617501dc1e9359aa3bcf147e0a76b3ab70c4984c13e339e6806bb35e683af8527093670859f3d8a0fc7d493bcba6bb12b5f65e71e705ca5d6c948d66ed3d730b26db395b3447737c26fad089aa0ad0e306cb28bf0acf106f89af3745f0ec72d534968cca543cd2ca50c94b1456743254e358c1317c07a07bf2b0eca438a709367fafc89a57239028fc5fecfd53b8ef958ef10ee0608b7f5cb9923ad97058ec067700cc746c127a61ee3', 'hex'));
    assert.equal(instance.digest('hex'), 'dd1d2a92b3f3f3902f064365838e1f5f3468730c343e2974e7a9ecfcd84aa6db');
  });


  it('produces the expected result for ShortMsgKAT_256 1960', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('90b28a6aa1fe533915bcb8e81ed6cacdc10962b7ff82474f845eeb86977600cf70b07ba8e3796141ee340e3fce842a38a50afbe90301a3bdcc591f2e7d9de53e495525560b908c892439990a2ca2679c5539ffdf636777ad9c1cdef809cda9e8dcdb451abb9e9c17efa4379abd24b182bd981cafc792640a183b61694301d04c5b3eaad694a6bd4cc06ef5da8fa23b4fa2a64559c5a68397930079d250c51bcf00e2b16a6c49171433b0aadfd80231276560b80458dd77089b7a1bbcc9e7e4b9f881eacd6c92c4318348a13f4914eb27115a1cfc5d16d7fd94954c3532efaca2cab025103b2d02c6fd71da3a77f417d7932685888a', 'hex'));
    assert.equal(instance.digest('hex'), '21bf20664cec2cd2ceb1dffc1d78893d5ca1a7da88eb6bfd0c6efca6190c9e15');
  });


  it('produces the expected result for ShortMsgKAT_256 1968', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('2969447d175490f2aa9bb055014dbef2e6854c95f8d60950bfe8c0be8de254c26b2d31b9e4de9c68c9adf49e4ee9b1c2850967f29f5d08738483b417bb96b2a56f0c8aca632b552059c59aac3f61f7b45c966b75f1d9931ff4e596406378cee91aaa726a3a84c33f37e9cdbe626b5745a0b06064a8a8d56e53aaf102d23dd9df0a3fdf7a638509a6761a33fa42fa8ddbd8e16159c93008b53765019c3f0e9f10b144ce2ac57f5d7297f9c9949e4ff68b70d339f87501ce8550b772f32c6da8ad2ce2100a895d8b08fa1eead7c376b407709703c510b50f87e73e43f8e7348f87c3832a547ef2bbe5799abedcf5e1f372ea809233f006', 'hex'));
    assert.equal(instance.digest('hex'), '6472d7c530b548e4b47d2278d7172b421a0fb6398a2823dd2f2b26208af8942e');
  });


  it('produces the expected result for ShortMsgKAT_256 1976', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('721645633a44a2c78b19024eaecf58575ab23c27190833c26875dc0f0d50b46aea9c343d82ea7d5b3e50ec700545c615daeaea64726a0f05607576dcd396d812b03fb6551c641087856d050b10e6a4d5577b82a98afb89cee8594c9dc19e79feff0382fcfd127f1b803a4b9946f4ac9a4378e1e6e041b1389a53e3450cd32d9d2941b0cbabdb50da8ea2513145164c3ab6bcbd251c448d2d4b087ac57a59c2285d564f16da4ed5e607ed979592146ffb0ef3f3db308fb342df5eb5924a48256fc763141a278814c82d6d6348577545870ae3a83c7230ac02a1540fe1798f7ef09e335a865a2ae0949b21e4f748fb8a51f44750e213a8fb', 'hex'));
    assert.equal(instance.digest('hex'), '2ac7ff80ee36d500995c973b8746d8466715e6d8b0f554aacb5d2876d7f5b874');
  });


  it('produces the expected result for ShortMsgKAT_256 1984', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6b860d39725a14b498bb714574b4d37ca787404768f64c648b1751b353ac92bac2c3a28ea909fdf0423336401a02e63ec24325300d823b6864bb701f9d7c7a1f8ec9d0ae3584aa6dd62ea1997cd831b4babd9a4da50932d4efda745c61e4130890e156aee6113716daf95764222a91187db2effea49d5d0596102d619bd26a616bbfda8335505fbb0d90b4c180d1a2335b91538e1668f9f9642790b4e55f9cab0fe2bdd2935d001ee6419abab5457880d0dbff20ed8758f4c20fe759efb33141cf0e892587fe8187e5fbc57786b7e8b089612c936dfc03d27efbbe7c8673f1606bd51d5ff386f4a7ab68edf59f385eb1291f117bfe717399', 'hex'));
    assert.equal(instance.digest('hex'), '9ff81d575f7bf0c4ef340b4279d56e16ce68821afcdf2a69105d4f9cadadd3cf');
  });


  it('produces the expected result for ShortMsgKAT_256 1992', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('6a01830af3889a25183244decb508bd01253d5b508ab490d3124afbf42626b2e70894e9b562b288d0a2450cfacf14a0ddae5c04716e5a0082c33981f6037d23d5e045ee1ef2283fb8b6378a914c5d9441627a722c282ff452e25a7ea608d69cee4393a0725d17963d0342684f255496d8a18c2961145315130549311fc07f0312fb78e6077334f87eaa873bee8aa95698996eb21375eb2b4ef53c14401207deb4568398e5dd9a7cf97e8c9663e23334b46912f8344c19efcf8c2ba6f04325f1a27e062b62a58d0766fc6db4d2c6a1928604b0175d872d16b7908ebc041761187cc785526c2a3873feac3a642bb39f5351550af9770c328af7b', 'hex'));
    assert.equal(instance.digest('hex'), '09edc465d4fd91c5e86b292f041bcc17571e1f2e17d584dff21dd7dd8d8bff35');
  });


  it('produces the expected result for ShortMsgKAT_256 2000', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('b3c5e74b69933c2533106c563b4ca20238f2b6e675e8681e34a389894785bdade59652d4a73d80a5c85bd454fd1e9ffdad1c3815f5038e9ef432aac5c3c4fe840cc370cf86580a6011778bbedaf511a51b56d1a2eb68394aa299e26da9ada6a2f39b9faff7fba457689b9c1a577b2a1e505fdf75c7a0a64b1df81b3a356001bf0df4e02a1fc59f651c9d585ec6224bb279c6beba2966e8882d68376081b987468e7aed1ef90ebd090ae825795cdca1b4f09a979c8dfc21a48d8a53cdbb26c4db547fc06efe2f9850edd2685a4661cb4911f165d4b63ef25b87d0a96d3dff6ab0758999aad214d07bd4f133a6734fde445fe474711b69a98f7e2b', 'hex'));
    assert.equal(instance.digest('hex'), 'c6d86cc4ccef3bb70bf7bfddec6a9a04a0dd0a68fe1bf51c14648cf506a03e98');
  });


  it('produces the expected result for ShortMsgKAT_256 2008', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('83af34279ccb5430febec07a81950d30f4b66f484826afee7456f0071a51e1bbc55570b5cc7ec6f9309c17bf5befdd7c6ba6e968cf218a2b34bd5cf927ab846e38a40bbd81759e9e33381016a755f699df35d660007b5eadf292feefb735207ebf70b5bd17834f7bfa0e16cb219ad4af524ab1ea37334aa66435e5d397fc0a065c411ebbce32c240b90476d307ce802ec82c1c49bc1bec48c0675ec2a6c6f3ed3e5b741d13437095707c565e10d8a20b8c20468ff9514fcf31b4249cd82dcee58c0a2af538b291a87e3390d737191a07484a5d3f3fb8c8f15ce056e5e5f8febe5e1fb59d6740980aa06ca8a0c20f5712b4cde5d032e92ab89f0ae1', 'hex'));
    assert.equal(instance.digest('hex'), '1afc9ba63eea27603b3a7a5562e12b31e8fe9a96812b531e9d048385fb76d44f');
  });


  it('produces the expected result for ShortMsgKAT_256 2016', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a7ed84749ccc56bb1dfba57119d279d412b8a986886d810f067af349e8749e9ea746a60b03742636c464fc1ee233acc52c1983914692b64309edfdf29f1ab912ec3e8da074d3f1d231511f5756f0b6eead3e89a6a88fe330a10face267bffbfc3e3090c7fd9a850561f363ad75ea881e7244f80ff55802d5ef7a1a4e7b89fcfa80f16df54d1b056ee637e6964b9e0ffd15b6196bdd7db270c56b47251485348e49813b4eb9ed122a01b3ea45ad5e1a929df61d5c0f3e77e1fdc356b63883a60e9cbb9fc3e00c2f32dbd469659883f690c6772e335f617bc33f161d6f6984252ee12e62b6000ac5231e0c9bc65be223d8dfd94c5004a101af9fd6c0fb', 'hex'));
    assert.equal(instance.digest('hex'), '9b5e15531385f0d495fdbe686e3e02eca42b9f1b1ce8837ad3b3e42e6198050a');
  });


  it('produces the expected result for ShortMsgKAT_256 2024', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('a6fe30dcfcda1a329e82ab50e32b5f50eb25c873c5d2305860a835aecee6264aa36a47429922c4b8b3afd00da16035830edb897831c4e7b00f2c23fc0b15fdc30d85fb70c30c431c638e1a25b51caf1d7e8b050b7f89bfb30f59f0f20fecff3d639abc4255b3868fc45dd81e47eb12ab40f2aac735df5d1dc1ad997cefc4d836b854cee9ac02900036f3867fe0d84afff37bde3308c2206c62c4743375094108877c73b87b2546fe05ea137bedfc06a2796274099a0d554da8f7d7223a48cbf31b7decaa1ebc8b145763e3673168c1b1b715c1cd99ecd3ddb238b06049885ecad9347c2436dff32c771f34a38587a44a82c5d3d137a03caa27e66c8ff6', 'hex'));
    assert.equal(instance.digest('hex'), '216fc325f942eed08401527a8f41c088527c6479342622c907ea08ff3290f8c6');
  });


  it('produces the expected result for ShortMsgKAT_256 2032', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('83167ff53704c3aa19e9fb3303539759c46dd4091a52ddae9ad86408b69335989e61414bc20ab4d01220e35241eff5c9522b079fba597674c8d716fe441e566110b6211531ceccf8fd06bc8e511d00785e57788ed9a1c5c73524f01830d2e1148c92d0edc97113e3b7b5cd3049627abdb8b39dd4d6890e0ee91993f92b03354a88f52251c546e64434d9c3d74544f23fb93e5a2d2f1fb15545b4e1367c97335b0291944c8b730ad3d4789273fa44fb98d78a36c3c3764abeeac7c569c1e43a352e5b770c3504f87090dee075a1c4c85c0c39cf421bdcc615f9eff6cb4fe6468004aece5f30e1ecc6db22ad9939bb2b0ccc96521dfbf4ae008b5b46bc006e', 'hex'));
    assert.equal(instance.digest('hex'), '43184b9f2db5b6da5160bc255dbe19a0c94533b884809815b7b326d868589edc');
  });


  it('produces the expected result for ShortMsgKAT_256 2040', () => {
    const instance = new SHA3.SHA3Hash(256);
    instance.update(newBuffer('3a3a819c48efde2ad914fbf00e18ab6bc4f14513ab27d0c178a188b61431e7f5623cb66b23346775d386b50e982c493adbbfc54b9a3cd383382336a1a0b2150a15358f336d03ae18f666c7573d55c4fd181c29e6ccfde63ea35f0adf5885cfc0a3d84a2b2e4dd24496db789e663170cef74798aa1bbcd4574ea0bba40489d764b2f83aadc66b148b4a0cd95246c127d5871c4f11418690a5ddf01246a0c80a43c70088b6183639dcfda4125bd113a8f49ee23ed306faac576c3fb0c1e256671d817fc2534a52f5b439f72e424de376f4c565cca82307dd9ef76da5b7c4eb7e085172e328807c02d011ffbf33785378d79dc266f6a5be6bb0e4a92eceebaeb1', 'hex'));
    assert.equal(instance.digest('hex'), '348fb774adc970a16b1105669442625e6adaa8257a89effdb5a802f161b862ea');
  });


  it('produces the expected result for ShortMsgKAT_384 8', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('cc', 'hex'));
    assert.equal(instance.digest('hex'), '1b84e62a46e5a201861754af5dc95c4a1a69caf4a796ae405680161e29572641f5fa1e8641d7958336ee7b11c58f73e9');
  });


  it('produces the expected result for ShortMsgKAT_384 16', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('41fb', 'hex'));
    assert.equal(instance.digest('hex'), '495cce2714cd72c8c53c3363d22c58b55960fe26be0bf3bbc7a3316dd563ad1db8410e75eefea655e39d4670ec0b1792');
  });


  it('produces the expected result for ShortMsgKAT_384 24', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1f877c', 'hex'));
    assert.equal(instance.digest('hex'), 'b0665c345f45e6de145b0190335ef5d5aa59e0b49fc1425d5eae7355ea442284cb8a2152d565ebdf2810eccab15af04f');
  });


  it('produces the expected result for ShortMsgKAT_384 32', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c1ecfdfc', 'hex'));
    assert.equal(instance.digest('hex'), 'f1850b2abb24f3fd683c701582789d9e92b6a45f9c345f9dae7f7997c8c910e88003e592e59281cf92c92d6b51a1afd1');
  });


  it('produces the expected result for ShortMsgKAT_384 40', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('21f134ac57', 'hex'));
    assert.equal(instance.digest('hex'), '68d437327f158287c304bbaf36f782f497da2c480a1fbb268682362218641f9070a014919ad7331c49beefccb437fe9a');
  });


  it('produces the expected result for ShortMsgKAT_384 48', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c6f50bb74e29', 'hex'));
    assert.equal(instance.digest('hex'), '03566ec003ff55184f0c85beebc6d1ecf5e5d082d8d40137246f8fd42bce097c09418845ef60286fdd894a00fd2d6589');
  });


  it('produces the expected result for ShortMsgKAT_384 56', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('119713cc83eeef', 'hex'));
    assert.equal(instance.digest('hex'), '790d700fa34d6a835be311b639474780148a2f087ac2fa86e8a1a433ec7a04fcbfc5284a3e188b7d91c6d094eafbeecb');
  });


  it('produces the expected result for ShortMsgKAT_384 64', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('4a4f202484512526', 'hex'));
    assert.equal(instance.digest('hex'), '638e65758a297cb09ded1ac5b9e8f779802000ab791f67f33c60be36443793adcc8a4a58e98688157a41784f02a4bcb2');
  });


  it('produces the expected result for ShortMsgKAT_384 72', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1f66ab4185ed9b6375', 'hex'));
    assert.equal(instance.digest('hex'), '308ec6f2ee3f6e01fb3aa06eb7c8cadd199354751b69fd4ba4d4671858f28bb45c94e712ad9d356fcb443067ef5aca2d');
  });


  it('produces the expected result for ShortMsgKAT_384 80', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('eed7422227613b6f53c9', 'hex'));
    assert.equal(instance.digest('hex'), 'a88f2fd112e5f11e775aa7858a3a5202e8fcd259f5d112baa6f568240d2ecc047ead88509e4b8a747d370751ffb2fdc0');
  });


  it('produces the expected result for ShortMsgKAT_384 88', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('eaeed5cdffd89dece455f1', 'hex'));
    assert.equal(instance.digest('hex'), 'a22a31349d7816545be31b80e992bdbb62a29480917ceabd0af5f2fafbf276d4c29b63a04910b830b8757c81e223b7f9');
  });


  it('produces the expected result for ShortMsgKAT_384 96', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5be43c90f22902e4fe8ed2d3', 'hex'));
    assert.equal(instance.digest('hex'), '36ca9cc329f9a00faa5f4f21170a017742174d3cf03c084aeb759f6fa0390349e1b502e435cffb0bce4ed46c0012a65c');
  });


  it('produces the expected result for ShortMsgKAT_384 104', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a746273228122f381c3b46e4f1', 'hex'));
    assert.equal(instance.digest('hex'), '3da54976b291df77f10bf95e9b7ef9fb2f88de075ddf6650ba788590f4e2e3c830d3b7dfc0193656b0a185e3aad9aa5a');
  });


  it('produces the expected result for ShortMsgKAT_384 112', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3c5871cd619c69a63b540eb5a625', 'hex'));
    assert.equal(instance.digest('hex'), 'd21a7cf252358a1159a55934456e67d9e1da538d4e9f9f1ace2fd75f3074b27ae2b356144bda7ba0b1eca1aa201b20de');
  });


  it('produces the expected result for ShortMsgKAT_384 120', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fa22874bcc068879e8ef11a69f0722', 'hex'));
    assert.equal(instance.digest('hex'), '8a0c6331429375f052960afff6d5fe33759f97145d60b262bede86d5254994558fc1800add09d6887c275f4dd3531cb0');
  });


  it('produces the expected result for ShortMsgKAT_384 128', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('52a608ab21ccdd8a4457a57ede782176', 'hex'));
    assert.equal(instance.digest('hex'), '18422ac1d3a1e54bad876883d2d6dd65f65c1d5f33a7125cc4c186405a12ed64ba96672eedda8c5a6331d28683f488eb');
  });


  it('produces the expected result for ShortMsgKAT_384 136', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('82e192e4043ddcd12ecf52969d0f807eed', 'hex'));
    assert.equal(instance.digest('hex'), '4a59da05c6e035d59d93f559d4a130d3ed91c22eada53fd679fb0b0f31398a6ff83a5a9739bfd4e95f57318fccb816f0');
  });


  it('produces the expected result for ShortMsgKAT_384 144', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('75683dcb556140c522543bb6e9098b21a21e', 'hex'));
    assert.equal(instance.digest('hex'), '98e6bcca5f2bb30c554700202e0604f7c86b4941f0345325100c83b1234c45856dfa761e70dcd972ecb1247aeac29259');
  });


  it('produces the expected result for ShortMsgKAT_384 152', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('06e4efe45035e61faaf4287b4d8d1f12ca97e5', 'hex'));
    assert.equal(instance.digest('hex'), 'd3c3d76b3d3926fd4cc4c05a087c2d76992998a5cd8c13fa3d233e0ecb2ad8b81ba4be581e02be91c7f82ccac90013a0');
  });


  it('produces the expected result for ShortMsgKAT_384 160', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e26193989d06568fe688e75540aea06747d9f851', 'hex'));
    assert.equal(instance.digest('hex'), '7c53da060058183ca6204e77f0709aebef73557c8f5e45c195b7e9416e7261365d03b8a2d6c01a102655344e725475c4');
  });


  it('produces the expected result for ShortMsgKAT_384 168', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d8dc8fdefbdce9d44e4cbafe78447bae3b5436102a', 'hex'));
    assert.equal(instance.digest('hex'), '2415c1d053ca207c17d99d02dbd177cd1aa7f00b0d0ca2cf30b4d2098eea1a04a68e5b1c6df2fb25ece157c423ee8ab7');
  });


  it('produces the expected result for ShortMsgKAT_384 176', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('57085fd7e14216ab102d8317b0cb338a786d5fc32d8f', 'hex'));
    assert.equal(instance.digest('hex'), '90da42b0c314445eafd8656b26644addeddc713eab36289bffc6ed4a85be66a10f5acd6b3c61e9c36a17c26260872dc8');
  });


  it('produces the expected result for ShortMsgKAT_384 184', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a05404df5dbb57697e2c16fa29defac8ab3560d6126fa0', 'hex'));
    assert.equal(instance.digest('hex'), 'ee209e98a75a67b09008202cad380917eb1f92c5db4e8f2c64900af8c603d265cab317bf7b8e2251e479f8818d3022ca');
  });


  it('produces the expected result for ShortMsgKAT_384 192', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('aecbb02759f7433d6fcb06963c74061cd83b5b3ffa6f13c6', 'hex'));
    assert.equal(instance.digest('hex'), '1198efa57e1a7884dac827e683255575510e1f92024a135144659be87bbf0d063ed26c987647b923a091cf11680316fe');
  });


  it('produces the expected result for ShortMsgKAT_384 200', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('aafdc9243d3d4a096558a360cc27c8d862f0be73db5e88aa55', 'hex'));
    assert.equal(instance.digest('hex'), '0435e54c016c0791677ddbc6badd55d146754296b31132b0b1c0b5ce4aedb03aeaa9a2dc5157d7af20b8e36d75e1cc00');
  });


  it('produces the expected result for ShortMsgKAT_384 208', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7bc84867f6f9e9fdc3e1046cae3a52c77ed485860ee260e30b15', 'hex'));
    assert.equal(instance.digest('hex'), '88d898ed7e6e54a683812b372f678a5fd73bcf3160a969fe4584651adb3255f9adcc8b85dcca5c3bf8eba3a1b69d9b90');
  });


  it('produces the expected result for ShortMsgKAT_384 216', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fac523575a99ec48279a7a459e98ff901918a475034327efb55843', 'hex'));
    assert.equal(instance.digest('hex'), '7ac343a9369fa7bf45afed43084dc1e275ab1b70034cfaacd4f3cb5e5e2201cfbd1cfff83baad3897a4cb8a0de5c35c4');
  });


  it('produces the expected result for ShortMsgKAT_384 224', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0f8b2d8fcfd9d68cffc17ccfb117709b53d26462a3f346fb7c79b85e', 'hex'));
    assert.equal(instance.digest('hex'), '58877b8dd98c51339e4302abe95cf57662cf05aa01938161cbfb5ddda724517f0c002d54b54eea7ebd64e209daeb8f01');
  });


  it('produces the expected result for ShortMsgKAT_384 232', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a963c3e895ff5a0be4824400518d81412f875fa50521e26e85eac90c04', 'hex'));
    assert.equal(instance.digest('hex'), '1cd638128718be351385e7a156c3f0ee8b210d1565876f8ed46c227b930d188fe8ca27760fe189d3b136836561e9a0ee');
  });


  it('produces the expected result for ShortMsgKAT_384 240', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('03a18688b10cc0edf83adf0a84808a9718383c4070c6c4f295098699ac2c', 'hex'));
    assert.equal(instance.digest('hex'), 'b4dbdfd9922afd1ce46ff1cb27c30e2aeaa967631a04001c7ef2b5eabd3c0678c0ff219be7b9fa04cf83dd40bc1b33b6');
  });


  it('produces the expected result for ShortMsgKAT_384 248', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('84fb51b517df6c5accb5d022f8f28da09b10232d42320ffc32dbecc3835b29', 'hex'));
    assert.equal(instance.digest('hex'), '503dcaa4adda5a9420b2e436dd62d9ab2e0254295c2982ef67fce40f117a2400ab492f7bd5d133c6ec2232268bc27b42');
  });


  it('produces the expected result for ShortMsgKAT_384 256', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('9f2fcc7c90de090d6b87cd7e9718c1ea6cb21118fc2d5de9f97e5db6ac1e9c10', 'hex'));
    assert.equal(instance.digest('hex'), '64d11adc77af5c568f37e44efac5fd03c460391aa833abec4e464237a8937eedd23ec513dd2a71d0329beaa8bef395c9');
  });


  it('produces the expected result for ShortMsgKAT_384 264', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('de8f1b3faa4b7040ed4563c3b8e598253178e87e4d0df75e4ff2f2dedd5a0be046', 'hex'));
    assert.equal(instance.digest('hex'), 'cf38764973f1ec1c34b5433ae75a3aad1aaef6ab197850c56c8617bcd6a882f6666883ac17b2dccdbaa647075d0972b5');
  });


  it('produces the expected result for ShortMsgKAT_384 272', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('62f154ec394d0bc757d045c798c8b87a00e0655d0481a7d2d9fb58d93aedc676b5a0', 'hex'));
    assert.equal(instance.digest('hex'), '882bff904bff1031139503bf6e0274c7a3928c2d73bf474a65b97c22f65f32be26ad1c5f7e4fa35d5b6253aa4076361a');
  });


  it('produces the expected result for ShortMsgKAT_384 280', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b2dcfe9ff19e2b23ce7da2a4207d3e5ec7c6112a8a22aec9675a886378e14e5bfbad4e', 'hex'));
    assert.equal(instance.digest('hex'), '80448b7a76e0f0666048c02165a4fa8dfd250a227ccdd4471c3703d07762362dc1df55fec29e2a31fe70958374271dd7');
  });


  it('produces the expected result for ShortMsgKAT_384 288', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('47f5697ac8c31409c0868827347a613a3562041c633cf1f1f86865a576e02835ed2c2492', 'hex'));
    assert.equal(instance.digest('hex'), '6268cd6b41f4c5123ec4d54d1e6943abb32dbe7bffb8eb95e4fcee5c12d4647be143c27f1281cdd275904920441508da');
  });


  it('produces the expected result for ShortMsgKAT_384 296', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('512a6d292e67ecb2fe486bfe92660953a75484ff4c4f2eca2b0af0edcdd4339c6b2ee4e542', 'hex'));
    assert.equal(instance.digest('hex'), 'c73d18de07a65acc7e2d8b2a51002ae28cbc4b0a6ee7f81a6b483f81a6df8ff6b33f632a6e6312888ca714821c0b13df');
  });


  it('produces the expected result for ShortMsgKAT_384 304', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('973cf2b4dcf0bfa872b41194cb05bb4e16760a1840d8343301802576197ec19e2a1493d8f4fb', 'hex'));
    assert.equal(instance.digest('hex'), '3a0bea62f42f9ceedb348f6e1613f00356ed9766a5c19f0c2eeb05c74de69d3943e16cf72281fdd92715fa3d51515931');
  });


  it('produces the expected result for ShortMsgKAT_384 312', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('80beebcd2e3f8a9451d4499961c9731ae667cdc24ea020ce3b9aa4bbc0a7f79e30a934467da4b0', 'hex'));
    assert.equal(instance.digest('hex'), '1092f63955f3dfef1322cf9516f21540215552bc5709ccda17ad276ecaa091a78451fe9925791b8a9191b5d42010156f');
  });


  it('produces the expected result for ShortMsgKAT_384 320', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7abaa12ec2a7347674e444140ae0fb659d08e1c66decd8d6eae925fa451d65f3c0308e29446b8ed3', 'hex'));
    assert.equal(instance.digest('hex'), '8cd022971d5769761b8e96b442444fa1850f1201aab0ac9f6e8404e2b3ea1d936244eedc7957c80b7fae60b3f216c6a0');
  });


  it('produces the expected result for ShortMsgKAT_384 328', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c88dee9927679b8af422abcbacf283b904ff31e1cac58c7819809f65d5807d46723b20f67ba610c2b7', 'hex'));
    assert.equal(instance.digest('hex'), 'b6575d53d353360521b20aa1f993f6e2b5a262d1f508789d5ce2469e9f3f33cce8848df690ccb0d676fb949eb171a7d7');
  });


  it('produces the expected result for ShortMsgKAT_384 336', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('01e43fe350fcec450ec9b102053e6b5d56e09896e0ddd9074fe138e6038210270c834ce6eadc2bb86bf6', 'hex'));
    assert.equal(instance.digest('hex'), '7358c6a0ae58efa14f65b8e162f07ef2d0ad8dd2006a98293307b76b3ba9e71c308a6694f0b56de8d59e58536c3513e8');
  });


  it('produces the expected result for ShortMsgKAT_384 344', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('337023370a48b62ee43546f17c4ef2bf8d7ecd1d49f90bab604b839c2e6e5bd21540d29ba27ab8e309a4b7', 'hex'));
    assert.equal(instance.digest('hex'), '18030c2b5ea23b6c66bdaf180a41173394540215ca48fb3e758433ff9884efb9e56d2922ba5320ba84be36e6efe6b89d');
  });


  it('produces the expected result for ShortMsgKAT_384 352', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6892540f964c8c74bd2db02c0ad884510cb38afd4438af31fc912756f3efec6b32b58ebc38fc2a6b913596a8', 'hex'));
    assert.equal(instance.digest('hex'), '6f9f9016ac3b6a5978a5dc8c7506c8b4d28742253bc542e79d95824417aa542991eef7e2b9c58cdb0c93616ae9c1f88f');
  });


  it('produces the expected result for ShortMsgKAT_384 360', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f5961dfd2b1ffffda4ffbf30560c165bfedab8ce0be525845deb8dc61004b7db38467205f5dcfb34a2acfe96c0', 'hex'));
    assert.equal(instance.digest('hex'), '424421bb9399bd44ab76500273d7f1e1421a2bfde1a1c130c0b3474409d8ae92b3e38539cfb09ed1d23c62bb32b9364b');
  });


  it('produces the expected result for ShortMsgKAT_384 368', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('ca061a2eb6ceed8881ce2057172d869d73a1951e63d57261384b80ceb5451e77b06cf0f5a0ea15ca907ee1c27eba', 'hex'));
    assert.equal(instance.digest('hex'), 'd07a2caceea869274baeecda43b6020930ef383a897c72a7ac7fbd8ff5cea7f8be655844d9f9bd2b498880fa1527d94f');
  });


  it('produces the expected result for ShortMsgKAT_384 376', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1743a77251d69242750c4f1140532cd3c33f9b5ccdf7514e8584d4a5f9fbd730bcf84d0d4726364b9bf95ab251d9bb', 'hex'));
    assert.equal(instance.digest('hex'), '25d7ab5e930819cf5f59acd2542691ad66481da547eaa9c2add7c8ea69a475f416c430ea1de840974e3236a62520911f');
  });


  it('produces the expected result for ShortMsgKAT_384 384', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d8faba1f5194c4db5f176fabfff856924ef627a37cd08cf55608bba8f1e324d7c7f157298eabc4dce7d89ce5162499f9', 'hex'));
    assert.equal(instance.digest('hex'), '36a6bf2d4eb3cc6fb797914e734b2ca8702ca7cc6d539b4ddb233efafcf068712e845364a4a929d31a440c7daf8b134c');
  });


  it('produces the expected result for ShortMsgKAT_384 392', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('be9684be70340860373c9c482ba517e899fc81baaa12e5c6d7727975d1d41ba8bef788cdb5cf4606c9c1c7f61aed59f97d', 'hex'));
    assert.equal(instance.digest('hex'), 'b69d40a90207edb20c0068f402008c0e64300b89a1b6af7930708b263c790a087f3adbb4c84295d23392e0692f35bdbc');
  });


  it('produces the expected result for ShortMsgKAT_384 400', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7e15d2b9ea74ca60f66c8dfab377d9198b7b16deb6a1ba0ea3c7ee2042f89d3786e779cf053c77785aa9e692f821f14a7f51', 'hex'));
    assert.equal(instance.digest('hex'), 'cddb883b9eadc59d2894178b3ba6f61e5e11c2c415c89e554e20a17e4909f8d960f02aa80e1a5129aeebf2cf975711a4');
  });


  it('produces the expected result for ShortMsgKAT_384 408', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('9a219be43713bd578015e9fda66c0f2d83cac563b776ab9f38f3e4f7ef229cb443304fba401efb2bdbd7ece939102298651c86', 'hex'));
    assert.equal(instance.digest('hex'), 'fbe0056d65af279eff1573f169809a05b6a52112b662d07cdd2570be5e198a28d1ea49cbeaf0c05e76a9f09baf6d1f34');
  });


  it('produces the expected result for ShortMsgKAT_384 416', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c8f2b693bd0d75ef99caebdc22adf4088a95a3542f637203e283bbc3268780e787d68d28cc3897452f6a22aa8573ccebf245972a', 'hex'));
    assert.equal(instance.digest('hex'), '26473de684cf58d559c7c0cfd360a9affdf33900fd69a3a946581484b93ef6fe6ffac461b4551e136beac64cc33a4c15');
  });


  it('produces the expected result for ShortMsgKAT_384 424', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('ec0f99711016c6a2a07ad80d16427506ce6f441059fd269442baaa28c6ca037b22eeac49d5d894c0bf66219f2c08e9d0e8ab21de52', 'hex'));
    assert.equal(instance.digest('hex'), '462ad97bb0156a5da3dd0e9e5bf06d31024fe43bb80c018f6858ee4332f2eb5a78ada06cb55ddc172ad87f88e26d2451');
  });


  it('produces the expected result for ShortMsgKAT_384 432', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0dc45181337ca32a8222fe7a3bf42fc9f89744259cff653504d6051fe84b1a7ffd20cb47d4696ce212a686bb9be9a8ab1c697b6d6a33', 'hex'));
    assert.equal(instance.digest('hex'), '9f890fa80a4c48b67181e89dbf15175ce48b21f9d09405218a8ce3c0759282780e142fc59851157d14509fce79d1b17f');
  });


  it('produces the expected result for ShortMsgKAT_384 440', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('de286ba4206e8b005714f80fb1cdfaebde91d29f84603e4a3ebc04686f99a46c9e880b96c574825582e8812a26e5a857ffc6579f63742f', 'hex'));
    assert.equal(instance.digest('hex'), '2d9a3447d7723d837b8784feaf03b8f9694cde5ffb84c6a6628895a345bb8f3f5ba725416906de063b1cefb722c7e56a');
  });


  it('produces the expected result for ShortMsgKAT_384 448', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('eebcc18057252cbf3f9c070f1a73213356d5d4bc19ac2a411ec8cdeee7a571e2e20eaf61fd0c33a0ffeb297ddb77a97f0a415347db66bcaf', 'hex'));
    assert.equal(instance.digest('hex'), 'af415063a5e25c6e55eca7f9bd1cb0c71a7a059b569737036b339ca559cc9c7466fa239ea57cfb5fcc50944871c008fb');
  });


  it('produces the expected result for ShortMsgKAT_384 456', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('416b5cdc9fe951bd361bd7abfc120a5054758eba88fdd68fd84e39d3b09ac25497d36b43cbe7b85a6a3cebda8db4e5549c3ee51bb6fcb6ac1e', 'hex'));
    assert.equal(instance.digest('hex'), '6811ec07e6e85a289c881722ae84e6aef01fd2761294c6ed9856d2f7ea1c71a89b2fcf4a9e56533360ea22317561ec05');
  });


  it('produces the expected result for ShortMsgKAT_384 464', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5c5faf66f32e0f8311c32e8da8284a4ed60891a5a7e50fb2956b3cbaa79fc66ca376460e100415401fc2b8518c64502f187ea14bfc9503759705', 'hex'));
    assert.equal(instance.digest('hex'), '7c90268e981a3c0ff19e14ce9830a1b9da5fc183950875961582644462059dd2fadcfa68750d7d2f44dfcab9ffce5832');
  });


  it('produces the expected result for ShortMsgKAT_384 472', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7167e1e02be1a7ca69d788666f823ae4eef39271f3c26a5cf7cee05bca83161066dc2e217b330df821103799df6d74810eed363adc4ab99f36046a', 'hex'));
    assert.equal(instance.digest('hex'), '64e9ad357b58c6fa0d26d0d1f48c4ab057b9f80965ac38494e88f542ba41d6b798fc2dd88290f8dde7948c19b5a1f260');
  });


  it('produces the expected result for ShortMsgKAT_384 480', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2fda311dbba27321c5329510fae6948f03210b76d43e7448d1689a063877b6d14c4f6d0eaa96c150051371f7dd8a4119f7da5c483cc3e6723c01fb7d', 'hex'));
    assert.equal(instance.digest('hex'), '3d73b33f001387fd1e752068af39454e476b8407038c772d94400458c93664ec5226ad1bd3a19a6d9a6fbd6e6a62695c');
  });


  it('produces the expected result for ShortMsgKAT_384 488', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('95d1474a5aab5d2422aca6e481187833a6212bd2d0f91451a67dd786dfc91dfed51b35f47e1deb8a8ab4b9cb67b70179cc26f553ae7b569969ce151b8d', 'hex'));
    assert.equal(instance.digest('hex'), 'fc619ca9810caae3639b3fc661388c454167271e65ed0a2e5e8bc718ad21b9ede895a658c946dc2fb15b33354dfe402a');
  });


  it('produces the expected result for ShortMsgKAT_384 496', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c71bd7941f41df044a2927a8ff55b4b467c33d089f0988aa253d294addbdb32530c0d4208b10d9959823f0c0f0734684006df79f7099870f6bf53211a88d', 'hex'));
    assert.equal(instance.digest('hex'), '5843123a28f0b50c082023ac43b7299c4fe67302532df4805be6dec3b84515b1c6c98f8a4e3d6ca826da4a11300c3b9b');
  });


  it('produces the expected result for ShortMsgKAT_384 504', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f57c64006d9ea761892e145c99df1b24640883da79d9ed5262859dcda8c3c32e05b03d984f1ab4a230242ab6b78d368dc5aaa1e6d3498d53371e84b0c1d4ba', 'hex'));
    assert.equal(instance.digest('hex'), '81edf06e9b64f3016b1547535aba4db08760fd23e9580163192f663ff62106001006a1393cf20de4656dbcb029fb6314');
  });


  it('produces the expected result for ShortMsgKAT_384 512', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e926ae8b0af6e53176dbffcc2a6b88c6bd765f939d3d178a9bde9ef3aa131c61e31c1e42cdfaf4b4dcde579a37e150efbef5555b4c1cb40439d835a724e2fae7', 'hex'));
    assert.equal(instance.digest('hex'), '14aa679b0c11f9c363f549330261b45e1e90ce31f4a1b0ce5cb9eb81bd6079a3742d8602356c50985d0d3e540fdfdcfb');
  });


  it('produces the expected result for ShortMsgKAT_384 520', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('16e8b3d8f988e9bb04de9c96f2627811c973ce4a5296b4772ca3eefeb80a652bdf21f50df79f32db23f9f73d393b2d57d9a0297f7a2f2e79cfda39fa393df1ac00', 'hex'));
    assert.equal(instance.digest('hex'), 'e430ce80bcc61d87fde0a278cff54d730c03a03377f4ac10b93ed59c5880117acb20f1705aefd29be033d2f202594655');
  });


  it('produces the expected result for ShortMsgKAT_384 528', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fc424eeb27c18a11c01f39c555d8b78a805b88dba1dc2a42ed5e2c0ec737ff68b2456d80eb85e11714fa3f8eabfb906d3c17964cb4f5e76b29c1765db03d91be37fc', 'hex'));
    assert.equal(instance.digest('hex'), 'c9f74ac47f9146f091de6309357f3c2af3a9c4474cc005aeface3c7a552b6127e34ec82c3afcaacdd83e695cb86241e4');
  });


  it('produces the expected result for ShortMsgKAT_384 536', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('abe3472b54e72734bdba7d9158736464251c4f21b33fbbc92d7fac9a35c4e3322ff01d2380cbaa4ef8fb07d21a2128b7b9f5b6d9f34e13f39c7ffc2e72e47888599ba5', 'hex'));
    assert.equal(instance.digest('hex'), 'c42ecc8863077abff689413ce37b61f0436ddb62e56de4e3333c26d95aee9e9cbe1d8aaa6744c0de6ba9cff0ff01a6bf');
  });


  it('produces the expected result for ShortMsgKAT_384 544', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('36f9f0a65f2ca498d739b944d6eff3da5ebba57e7d9c41598a2b0e4380f3cf4b479ec2348d015ffe6256273511154afcf3b4b4bf09d6c4744fdd0f62d75079d440706b05', 'hex'));
    assert.equal(instance.digest('hex'), 'b15392718cbf4a7c7fad1c15e7f26c446e79d54251404e646b4dca3d42142ed5140d0d30bd836c7d513ce6f5e104d42d');
  });


  it('produces the expected result for ShortMsgKAT_384 552', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('abc87763cae1ca98bd8c5b82caba54ac83286f87e9610128ae4de68ac95df5e329c360717bd349f26b872528492ca7c94c2c1e1ef56b74dbb65c2ac351981fdb31d06c77a4', 'hex'));
    assert.equal(instance.digest('hex'), 'e03294c68edf4e8826b699abddbef75467c49cab56e085e4b83a58b2d9bdfac9d58b45aacc0ec0ce2d6d79686a41ac13');
  });


  it('produces the expected result for ShortMsgKAT_384 560', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('94f7ca8e1a54234c6d53cc734bb3d3150c8ba8c5f880eab8d25fed13793a9701ebe320509286fd8e422e931d99c98da4df7e70ae447bab8cffd92382d8a77760a259fc4fbd72', 'hex'));
    assert.equal(instance.digest('hex'), 'd5539d7aeff9f74dc75b6e95eade063be419b15a4179cfd06d4fd2741e22b2a24395aaa1c0242c995eb5ea891347b4db');
  });


  it('produces the expected result for ShortMsgKAT_384 568', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('13bd2811f6ed2b6f04ff3895aceed7bef8dcd45eb121791bc194a0f806206bffc3b9281c2b308b1a729ce008119dd3066e9378acdcc50a98a82e20738800b6cddbe5fe9694ad6d', 'hex'));
    assert.equal(instance.digest('hex'), 'b115a9968b054c934c396d8188ba0c33a23c7189ce88b1de4a06cd319792d28647eae1d88fb0b87443e46292a5c645e8');
  });


  it('produces the expected result for ShortMsgKAT_384 576', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1eed9cba179a009ec2ec5508773dd305477ca117e6d569e66b5f64c6bc64801ce25a8424ce4a26d575b8a6fb10ead3fd1992edddeec2ebe7150dc98f63adc3237ef57b91397aa8a7', 'hex'));
    assert.equal(instance.digest('hex'), 'c8faef757e6d7b0af46da1e57c71abb4aaf7cc91c5cdc33ba8a738172b95de087ec4c92692cb40ee3787bce3206fb7ea');
  });


  it('produces the expected result for ShortMsgKAT_384 584', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('ba5b67b5ec3a3ffae2c19dd8176a2ef75c0cd903725d45c9cb7009a900c0b0ca7a2967a95ae68269a6dbf8466c7b6844a1d608ac661f7eff00538e323db5f2c644b78b2d48de1a08aa', 'hex'));
    assert.equal(instance.digest('hex'), 'f4f21bb74593aa107dc195ff52a3f90816cceae8d3eb9d4577b28b49c339837a52700a62eb421e8ca1c87f456310f62c');
  });


  it('produces the expected result for ShortMsgKAT_384 592', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0efa26ac5673167dcacab860932ed612f65ff49b80fa9ae65465e5542cb62075df1c5ae54fba4db807be25b070033efa223bdd5b1d3c94c6e1909c02b620d4b1b3a6c9fed24d70749604', 'hex'));
    assert.equal(instance.digest('hex'), '83544511a07f6058d9fe5aad7ea837a9e180d8bbb884c5650b798942983a605a514c21d8d63db0e25aae51d26f410bc5');
  });


  it('produces the expected result for ShortMsgKAT_384 600', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('bbfd933d1fd7bf594ac7f435277dc17d8d5a5b8e4d13d96d2f64e771abbd51a5a8aea741beccbddb177bcea05243ebd003cfdeae877cca4da94605b67691919d8b033f77d384ca01593c1b', 'hex'));
    assert.equal(instance.digest('hex'), '8ecd8459fb904d2eddb14207659c2bf96efbd3e4c8988736ec75088f1cc8115d3fffc8cedf1c01721469d27968a6856b');
  });


  it('produces the expected result for ShortMsgKAT_384 608', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('90078999fd3c35b8afbf4066cbde335891365f0fc75c1286cdd88fa51fab94f9b8def7c9ac582a5dbcd95817afb7d1b48f63704e19c2baa4df347f48d4a6d603013c23f1e9611d595ebac37c', 'hex'));
    assert.equal(instance.digest('hex'), 'be60246e27959dc8065c6d4dcac93eb7f7146b49c759bf1dd5eba46a3ecf074784a9df18deab7a19af7f6290cdaca87b');
  });


  it('produces the expected result for ShortMsgKAT_384 616', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('64105eca863515c20e7cfbaa0a0b8809046164f374d691cdbd6508aaabc1819f9ac84b52bafc1b0fe7cddbc554b608c01c8904c669d8db316a0953a4c68ece324ec5a49ffdb59a1bd6a292aa0e', 'hex'));
    assert.equal(instance.digest('hex'), '9235ba18c55e2cbca0fb1da3bc8d0dfd848ca0e51ddc1020d4becc0f138da1087929fec93af16f5fb29c4a777dd91548');
  });


  it('produces the expected result for ShortMsgKAT_384 624', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d4654be288b9f3b711c2d02015978a8cc57471d5680a092aa534f7372c71ceaab725a383c4fcf4d8deaa57fca3ce056f312961eccf9b86f14981ba5bed6ab5b4498e1f6c82c6cae6fc14845b3c8a', 'hex'));
    assert.equal(instance.digest('hex'), '08739dd866c6216adca26d6121e5d81fdb1f7bcd4802c2b811d73c282277d4014b4936e5589f62279bb33075705795f8');
  });


  it('produces the expected result for ShortMsgKAT_384 632', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('12d9394888305ac96e65f2bf0e1b18c29c90fe9d714dd59f651f52b88b3008c588435548066ea2fc4c101118c91f32556224a540de6efddbca296ef1fb00341f5b01fecfc146bdb251b3bdad556cd2', 'hex'));
    assert.equal(instance.digest('hex'), 'd2a2e858a5dd85d62e6f51af7e42352ac0d7a68a835431bcca47557e3b5c3373f40d3baf85ae416012c7c982b2325790');
  });


  it('produces the expected result for ShortMsgKAT_384 640', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('871a0d7a5f36c3da1dfce57acd8ab8487c274fad336bc137ebd6ff4658b547c1dcfab65f037aa58f35ef16aff4abe77ba61f65826f7be681b5b6d5a1ea8085e2ae9cd5cf0991878a311b549a6d6af230', 'hex'));
    assert.equal(instance.digest('hex'), '2990d7ea068a0307047b151d5dd6b1b2358a9ec8ad9b6b826cf1bef399d488bd68d77df8be99f7df7af14ae0ce636379');
  });


  it('produces the expected result for ShortMsgKAT_384 648', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e90b4ffef4d457bc7711ff4aa72231ca25af6b2e206f8bf859d8758b89a7cd36105db2538d06da83bad5f663ba11a5f6f61f236fd5f8d53c5e89f183a3cec615b50c7c681e773d109ff7491b5cc22296c5', 'hex'));
    assert.equal(instance.digest('hex'), '4b3087f800e4084d7f685737ac635db459cf70c4fa863c711c1143cc10f0c4ab0a2370c099fb282f9c1ce5f015bf3f79');
  });


  it('produces the expected result for ShortMsgKAT_384 656', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e728de62d75856500c4c77a428612cd804f30c3f10d36fb219c5ca0aa30726ab190e5f3f279e0733d77e7267c17be27d21650a9a4d1e32f649627638dbada9702c7ca303269ed14014b2f3cf8b894eac8554', 'hex'));
    assert.equal(instance.digest('hex'), '5d347fddb118fd7db270898407979d2d1531d3ff6642ec4f22917ebbeda6cee0fb0de11432edddfcbf0e2ab9cfa65804');
  });


  it('produces the expected result for ShortMsgKAT_384 664', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6348f229e7b1df3b770c77544e5166e081850fa1c6c88169db74c76e42eb983facb276ad6a0d1fa7b50d3e3b6fcd799ec97470920a7abed47d288ff883e24ca21c7f8016b93bb9b9e078bdb9703d2b781b616e', 'hex'));
    assert.equal(instance.digest('hex'), '954637b87fdcc484f2b61f7f42558068029f96099c1d6b9246585092eae68924e5441b45027248a2728833169bfa5004');
  });


  it('produces the expected result for ShortMsgKAT_384 672', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('4b127fde5de733a1680c2790363627e63ac8a3f1b4707d982caea258655d9bf18f89afe54127482ba01e08845594b671306a025c9a5c5b6f93b0a39522dc877437be5c2436cbf300ce7ab6747934fcfc30aeaaf6', 'hex'));
    assert.equal(instance.digest('hex'), '78726e91ac311f4d104706362b0314c243cd81644125881fbc03670210c89fb8e7bff6c61ff68b234c3171f16b398f36');
  });


  it('produces the expected result for ShortMsgKAT_384 680', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('08461f006cff4cc64b752c957287e5a0faabc05c9bff89d23fd902d324c79903b48fcb8f8f4b01f3e4ddb483593d25f000386698f5ade7faade9615fdc50d32785ea51d49894e45baa3dc707e224688c6408b68b11', 'hex'));
    assert.equal(instance.digest('hex'), '80763fb54688f122269430980aa3abe09091020b8cfa6bde0edc2c63aed8b8ba097cdb79b8fc7f5117508fca4864a14d');
  });


  it('produces the expected result for ShortMsgKAT_384 688', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('68c8f8849b120e6e0c9969a5866af591a829b92f33cd9a4a3196957a148c49138e1e2f5c7619a6d5edebe995acd81ec8bb9c7b9cfca678d081ea9e25a75d39db04e18d475920ce828b94e72241f24db72546b352a0e4', 'hex'));
    assert.equal(instance.digest('hex'), '80447583262ded037da88f3b98698bd8f7aed7d9bf4d99f8132ec3e7d16bb844adad188757ceb32b359c56e5007ea3e4');
  });


  it('produces the expected result for ShortMsgKAT_384 696', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b8d56472954e31fb54e28fca743f84d8dc34891cb564c64b08f7b71636debd64ca1edbdba7fc5c3e40049ce982bba8c7e0703034e331384695e9de76b5104f2fbc4535ecbeebc33bc27f29f18f6f27e8023b0fbb6f563c', 'hex'));
    assert.equal(instance.digest('hex'), 'e5fb4ae5ddfb4ce8221df4be70240b76851e55fae86baf35bad9e7179e24c95da6f0f0695a8a5291a2394b92a6ff7b7c');
  });


  it('produces the expected result for ShortMsgKAT_384 704', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0d58ac665fa84342e60cefee31b1a4eacdb092f122dfc68309077aed1f3e528f578859ee9e4cefb4a728e946324927b675cd4f4ac84f64db3dacfe850c1dd18744c74ceccd9fe4dc214085108f404eab6d8f452b5442a47d', 'hex'));
    assert.equal(instance.digest('hex'), 'ce6b07c0c7da2fa1e6ca05de0652fc9f1f452fc261e73e52457c72bf0d51bac7d66160cff16d6a03527982e7d4393507');
  });


  it('produces the expected result for ShortMsgKAT_384 712', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1755e2d2e5d1c1b0156456b539753ff416651d44698e87002dcf61dcfa2b4e72f264d9ad591df1fdee7b41b2eb00283c5aebb3411323b672eaa145c5125185104f20f335804b02325b6dea65603f349f4d5d8b782dd3469ccd', 'hex'));
    assert.equal(instance.digest('hex'), 'fa76e05f8d2832dadfeba0107a3137b7b9d4d19a77a1e78f8bbfecda7ef46414c363453e8c4902c302a4e18cea4ba157');
  });


  it('produces the expected result for ShortMsgKAT_384 720', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b180de1a611111ee7584ba2c4b020598cd574ac77e404e853d15a101c6f5a2e5c801d7d85dc95286a1804c870bb9f00fd4dcb03aa8328275158819dcad7253f3e3d237aeaa7979268a5db1c6ce08a9ec7c2579783c8afc1f91a7', 'hex'));
    assert.equal(instance.digest('hex'), '1b43b70b6bbbc768c1f4b3ce241667adb5246d29981723846168d2234e19a5130b1f576b4974c613639a449e61b2ca79');
  });


  it('produces the expected result for ShortMsgKAT_384 728', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('cf3583cbdfd4cbc17063b1e7d90b02f0e6e2ee05f99d77e24e560392535e47e05077157f96813544a17046914f9efb64762a23cf7a49fe52a0a4c01c630cfe8727b81fb99a89ff7cc11dca5173057e0417b8fe7a9efba6d95c555f', 'hex'));
    assert.equal(instance.digest('hex'), '938252393a532d9e1f91d5c222e2df2cc7ae102705bfb83fe30dcaebcea82bff9bda7ca67095439859146632494d3ce4');
  });


  it('produces the expected result for ShortMsgKAT_384 736', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('072fc02340ef99115bad72f92c01e4c093b9599f6cfc45cb380ee686cb5eb019e806ab9bd55e634ab10aa62a9510cc0672cd3eddb589c7df2b67fcd3329f61b1a4441eca87a33c8f55da4fbbad5cf2b2527b8e983bb31a2fadec7523', 'hex'));
    assert.equal(instance.digest('hex'), '47633ad0c80af26bf74d9598dbd5bcf77fc6bff1bca015a611d7b8240f597d8767fb8b0bf5c333156580afee121c299c');
  });


  it('produces the expected result for ShortMsgKAT_384 744', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('76eecf956a52649f877528146de33df249cd800e21830f65e90f0f25ca9d6540fde40603230eca6760f1139c7f268deba2060631eea92b1fff05f93fd5572fbe29579ecd48bc3a8d6c2eb4a6b26e38d6c5fbf2c08044aeea470a8f2f26', 'hex'));
    assert.equal(instance.digest('hex'), '04456322e1bf27785edf3f596db33e693aadf76d9d259352d97acd561bc45236506fba3530772242cb369a83a38cd749');
  });


  it('produces the expected result for ShortMsgKAT_384 752', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7adc0b6693e61c269f278e6944a5a2d8300981e40022f839ac644387bfac9086650085c2cdc585fea47b9d2e52d65a2b29a7dc370401ef5d60dd0d21f9e2b90fae919319b14b8c5565b0423cefb827d5f1203302a9d01523498a4db10374', 'hex'));
    assert.equal(instance.digest('hex'), 'f8b1f2c317b9d1898c305dec3c6c0ac45cfe7f995e944968206c1c1b2c92bd1d4fa392ffaa6094c6aff95e47dc259ee9');
  });


  it('produces the expected result for ShortMsgKAT_384 760', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e1fffa9826cce8b86bccefb8794e48c46cdf372013f782eced1e378269b7be2b7bf51374092261ae120e822be685f2e7a83664bcfbe38fe8633f24e633ffe1988e1bc5acf59a587079a57a910bda60060e85b5f5b6f776f0529639d9cce4bd', 'hex'));
    assert.equal(instance.digest('hex'), '4f439197c66439baf65618f826e299a329380b558a52b0711182580bdbadbabb13ad66d60faddb9ded226f0b401aa8be');
  });


  it('produces the expected result for ShortMsgKAT_384 768', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('69f9abba65592ee01db4dce52dbab90b08fc04193602792ee4daa263033d59081587b09bbe49d0b49c9825d22840b2ff5d9c5155f975f8f2c2e7a90c75d2e4a8040fe39f63bbafb403d9e28cc3b86e04e394a9c9e8065bd3c85fa9f0c7891600', 'hex'));
    assert.equal(instance.digest('hex'), '1c8b99bf6a3e80f0b8c67fa9bbf07d19c15d484cde38f8faadb748ae024a02e29fd2d7bdce66d46c1a5239d7453fd3e3');
  });


  it('produces the expected result for ShortMsgKAT_384 776', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('38a10a352ca5aedfa8e19c64787d8e9c3a75dbf3b8674bfab29b5dbfc15a63d10fae66cd1a6e6d2452d557967eaad89a4c98449787b0b3164ca5b717a93f24eb0b506ceb70cbbcb8d72b2a72993f909aad92f044e0b5a2c9ac9cb16a0ca2f81f49', 'hex'));
    assert.equal(instance.digest('hex'), '46f87bc07849e95104e67cc3dc71bdc109c1102bfb1acdfe2f6a23173b52bf836ce00cd7a5a5ffe7d3bb8fab33decedf');
  });


  it('produces the expected result for ShortMsgKAT_384 784', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6d8c6e449bc13634f115749c248c17cd148b72157a2c37bf8969ea83b4d6ba8c0ee2711c28ee11495f43049596520ce436004b026b6c1f7292b9c436b055cbb72d530d860d1276a1502a5140e3c3f54a93663e4d20edec32d284e25564f624955b52', 'hex'));
    assert.equal(instance.digest('hex'), 'fa12b9d070f697fd5391f3fc9c44056ceda63f035d766655aa7d0a575ed55b15ba6baf56300940b565e37a248e2dcab8');
  });


  it('produces the expected result for ShortMsgKAT_384 792', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6efcbcaf451c129dbe00b9cef0c3749d3ee9d41c7bd500ade40cdc65dedbbbadb885a5b14b32a0c0d087825201e303288a733842fa7e599c0c514e078f05c821c7a4498b01c40032e9f1872a1c925fa17ce253e8935e4c3c71282242cb716b2089ccc1', 'hex'));
    assert.equal(instance.digest('hex'), '5304d6db2730fb07b85348b0226b1a81a546ba1fe201ecce1e552dba6afb84cce7a6f954e3100ae1724b82cf1cbc4128');
  });


  it('produces the expected result for ShortMsgKAT_384 800', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('433c5303131624c0021d868a30825475e8d0bd3052a022180398f4ca4423b98214b6beaac21c8807a2c33f8c93bd42b092cc1b06cedf3224d5ed1ec29784444f22e08a55aa58542b524b02cd3d5d5f6907afe71c5d7462224a3f9d9e53e7e0846dcbb4ce', 'hex'));
    assert.equal(instance.digest('hex'), '135114508dd63e279e709c26f7817c0482766cde49132e3edf2eedd8996f4e3596d184100b384868249f1d8b8fdaa2c9');
  });


  it('produces the expected result for ShortMsgKAT_384 808', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a873e0c67ca639026b6683008f7aa6324d4979550e9bce064ca1e1fb97a30b147a24f3f666c0a72d71348ede701cf2d17e2253c34d1ec3b647dbcef2f879f4eb881c4830b791378c901eb725ea5c172316c6d606e0af7df4df7f76e490cd30b2badf45685f', 'hex'));
    assert.equal(instance.digest('hex'), 'd560d54a2881ed47cc8c5af9818feeaf08b621b1aed4569d08807a0b61f902c1691d8b08ff75590feaaed6e75f4c9e3f');
  });


  it('produces the expected result for ShortMsgKAT_384 816', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('006917b64f9dcdf1d2d87c8a6173b64f6587168e80faa80f82d84f60301e561e312d9fbce62f39a6fb476e01e925f26bcc91de621449be6504c504830aae394096c8fc7694651051365d4ee9070101ec9b68086f2ea8f8ab7b811ea8ad934d5c9b62c60a4771', 'hex'));
    assert.equal(instance.digest('hex'), 'fe5f30a315584092a271fdbcf4347a24d14a1f98cadc88df288c36cea8f89e9020019933bcd4f5a7479e3e4a57644c49');
  });


  it('produces the expected result for ShortMsgKAT_384 824', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f13c972c52cb3cc4a4df28c97f2df11ce089b815466be88863243eb318c2adb1a417cb1041308598541720197b9b1cb5ba2318bd5574d1df2174af14884149ba9b2f446d609df240ce335599957b8ec80876d9a085ae084907bc5961b20bf5f6ca58d5dab38adb', 'hex'));
    assert.equal(instance.digest('hex'), 'a4e5ee130fc105818cd1a0de74f1085b9b4d93889c509dc3a208b5230d39d8f304bb403f72bf0cf5e02c4c4a0831f328');
  });


  it('produces the expected result for ShortMsgKAT_384 832', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e35780eb9799ad4c77535d4ddb683cf33ef367715327cf4c4a58ed9cbdcdd486f669f80189d549a9364fa82a51a52654ec721bb3aab95dceb4a86a6afa93826db923517e928f33e3fba850d45660ef83b9876accafa2a9987a254b137c6e140a21691e1069413848', 'hex'));
    assert.equal(instance.digest('hex'), '9fb5700502e01926824f46e9f61894f9487dbcf8ae6217203c85606f975566539376d6239db04aef9bf48ca4f191a90b');
  });


  it('produces the expected result for ShortMsgKAT_384 840', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('64ec021c9585e01ffe6d31bb50d44c79b6993d72678163db474947a053674619d158016adb243f5c8d50aa92f50ab36e579ff2dabb780a2b529370daa299207cfbcdd3a9a25006d19c4f1fe33e4b1eaec315d8c6ee1e730623fd1941875b924eb57d6d0c2edc4e78d6', 'hex'));
    assert.equal(instance.digest('hex'), 'f2e0ff6cf4801cff2eca1703e4e956c007a1f2709430f1f7a0a4fdd16a063522a4dfb6c41fa529c2e325f8cdd4f8da96');
  });


  it('produces the expected result for ShortMsgKAT_384 848', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5954bab512cf327d66b5d9f296180080402624ad7628506b555eea8382562324cf452fba4a2130de3e165d11831a270d9cb97ce8c2d32a96f50d71600bb4ca268cf98e90d6496b0a6619a5a8c63db6d8a0634dfc6c7ec8ea9c006b6c456f1b20cd19e781af20454ac880', 'hex'));
    assert.equal(instance.digest('hex'), '62029d962d2e323688dc5851c549da39ef49cb994d2d6c51c57b9bbab375aa10bd0605208d9946ea472573880230dd2d');
  });


  it('produces the expected result for ShortMsgKAT_384 856', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('03d9f92b2c565709a568724a0aff90f8f347f43b02338f94a03ed32e6f33666ff5802da4c81bdce0d0e86c04afd4edc2fc8b4141c2975b6f07639b1994c973d9a9afce3d9d365862003498513bfa166d2629e314d97441667b007414e739d7febf0fe3c32c17aa188a8683', 'hex'));
    assert.equal(instance.digest('hex'), '25e546f76ea9f98e03e3b2f4ab608185073658e7eda0777bd5b047a59085c3c500916347d4f77e38e35159af133ed638');
  });


  it('produces the expected result for ShortMsgKAT_384 864', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f31e8b4f9e0621d531d22a380be5d9abd56faec53cbd39b1fab230ea67184440e5b1d15457bd25f56204fa917fa48e669016cb48c1ffc1e1e45274b3b47379e00a43843cf8601a5551411ec12503e5aac43d8676a1b2297ec7a0800dbfee04292e937f21c005f17411473041', 'hex'));
    assert.equal(instance.digest('hex'), 'beefceff9e2d0825d60ea20e5271bf49c4ae3a5b54b56050988dd3df5db5eb4f1002efbfbaed2fc72179de44116976b2');
  });


  it('produces the expected result for ShortMsgKAT_384 872', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('758ea3fea738973db0b8be7e599bbef4519373d6e6dcd7195ea885fc991d896762992759c2a09002912fb08e0cb5b76f49162aeb8cf87b172cf3ad190253df612f77b1f0c532e3b5fc99c2d31f8f65011695a087a35ee4eee5e334c369d8ee5d29f695815d866da99df3f79403', 'hex'));
    assert.equal(instance.digest('hex'), '7d18254d46a14d0383ec56ac9ca2fda7885ae673468c9f3b45ba792c2c23c9ff82491e6aeca15d076ad3a3432cfa650c');
  });


  it('produces the expected result for ShortMsgKAT_384 880', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('47c6e0c2b74948465921868804f0f7bd50dd323583dc784f998a93cd1ca4c6ef84d41dc81c2c40f34b5bee6a93867b3bdba0052c5f59e6f3657918c382e771d33109122cc8bb0e1e53c4e3d13b43ce44970f5e0c079d2ad7d7a3549cd75760c21bb15b447589e86e8d76b1e9ced2', 'hex'));
    assert.equal(instance.digest('hex'), '1e3e007ce37792d8a4423b797e876e89859590dedd39711ad0f1de2fd925f4320b44bd57ddc7050427943e3c957d4b6d');
  });


  it('produces the expected result for ShortMsgKAT_384 888', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f690a132ab46b28edfa6479283d6444e371c6459108afd9c35dbd235e0b6b6ff4c4ea58e7554bd002460433b2164ca51e868f7947d7d7a0d792e4abf0be5f450853cc40d85485b2b8857ea31b5ea6e4ccfa2f3a7ef3380066d7d8979fdac618aad3d7e886dea4f005ae4ad05e5065f', 'hex'));
    assert.equal(instance.digest('hex'), 'd1d263b5311b05c7b9f7783e3afd9a2e75791ce0503ed820474b35340d2cc84b0270921bbd965722011aa30ce4352926');
  });


  it('produces the expected result for ShortMsgKAT_384 896', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('58d6a99bc6458824b256916770a8417040721cccfd4b79eacd8b65a3767ce5ba7e74104c985ac56b8cc9aebd16febd4cda5adb130b0ff2329cc8d611eb14dac268a2f9e633c99de33997fea41c52a7c5e1317d5b5daed35eba7d5a60e45d1fa7eaabc35f5c2b0a0f2379231953322c4e', 'hex'));
    assert.equal(instance.digest('hex'), 'e482b0c1b2057f1b6b897bdc230dca2b48ffc0e4600ac40a44dce03e99a8d1df94908a9feba0405da79569e75059f9ce');
  });


  it('produces the expected result for ShortMsgKAT_384 904', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('befab574396d7f8b6705e2d5b58b2c1c820bb24e3f4bae3e8fbcd36dbf734ee14e5d6ab972aedd3540235466e825850ee4c512ea9795abfd33f330d9fd7f79e62bbb63a6ea85de15beaeea6f8d204a28956059e2632d11861dfb0e65bc07ac8a159388d5c3277e227286f65ff5e5b5aec1', 'hex'));
    assert.equal(instance.digest('hex'), 'e54bc3b249dff637001b58d13cbf64f453e01ad68a554ca994f71ec710216ef9769f1c8b463dc7b4a90a0ceaced41e3d');
  });


  it('produces the expected result for ShortMsgKAT_384 912', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8e58144fa9179d686478622ce450c748260c95d1ba43b8f9b59abeca8d93488da73463ef40198b4d16fb0b0707201347e0506ff19d01bea0f42b8af9e71a1f1bd168781069d4d338fdef00bf419fbb003031df671f4a37979564f69282de9c65407847dd0da505ab1641c02dea4f0d834986', 'hex'));
    assert.equal(instance.digest('hex'), '01dc4ced4693b36814443857931c5d3cee8762fda0220f8e9e63ab1ee9a7135ade21c5ab3791821352ffbc322f3ed208');
  });


  it('produces the expected result for ShortMsgKAT_384 920', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b55c10eae0ec684c16d13463f29291bf26c82e2fa0422a99c71db4af14dd9c7f33eda52fd73d017cc0f2dbe734d831f0d820d06d5f89dacc485739144f8cfd4799223b1aff9031a105cb6a029ba71e6e5867d85a554991c38df3c9ef8c1e1e9a7630be61caabca69280c399c1fb7a12d12aefc', 'hex'));
    assert.equal(instance.digest('hex'), '587c8104936bdd74700666663843746015906cf4c681c2a6ffdd07b732e9e7787b165e117da340bce4e27302ba288299');
  });


  it('produces the expected result for ShortMsgKAT_384 928', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2eeea693f585f4ed6f6f8865bbae47a6908aecd7c429e4bec4f0de1d0ca0183fa201a0cb14a529b7d7ac0e6ff6607a3243ee9fb11bcf3e2304fe75ffcddd6c5c2e2a4cd45f63c962d010645058d36571404a6d2b4f44755434d76998e83409c3205aa1615db44057db991231d2cb42624574f545', 'hex'));
    assert.equal(instance.digest('hex'), '51753384c8f9584be3ed4526b9b29a97dc8a87d195d0155e7444950eea55abec5c0d7814f1dfce5ca4bf1d50ebc709ad');
  });


  it('produces the expected result for ShortMsgKAT_384 936', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('dab11dc0b047db0420a585f56c42d93175562852428499f66a0db811fcdddab2f7cdffed1543e5fb72110b64686bc7b6887a538ad44c050f1e42631bc4ec8a9f2a047163d822a38989ee4aab01b4c1f161b062d873b1cfa388fd301514f62224157b9bef423c7783b7aac8d30d65cd1bba8d689c2d', 'hex'));
    assert.equal(instance.digest('hex'), 'bd1e1e9ae80b7fa79adbd47d7a28ba44f4874108cd9be5d327cc93c6ed4dacf8a9e2a3491d4168bffae63fb2f1070de7');
  });


  it('produces the expected result for ShortMsgKAT_384 944', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('42e99a2f80aee0e001279a2434f731e01d34a44b1a8101726921c0590c30f3120eb83059f325e894a5ac959dca71ce2214799916424e859d27d789437b9d27240bf8c35adbafcecc322b48aa205b293962d858652abacbd588bcf6cbc388d0993bd622f96ed54614c25b6a9aa527589eaaffcf17ddf7', 'hex'));
    assert.equal(instance.digest('hex'), '6b7c1144fa984261377dbaaca78a03ae580b7f3a17d69ba0d56ee908dd9ec9f87ea30a7626ed7ccf25b53a6994e121e8');
  });


  it('produces the expected result for ShortMsgKAT_384 952', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3c9b46450c0f2cae8e3823f8bdb4277f31b744ce2eb17054bddc6dff36af7f49fb8a2320cc3bdf8e0a2ea29ad3a55de1165d219adeddb5175253e2d1489e9b6fdd02e2c3d3a4b54d60e3a47334c37913c5695378a669e9b72dec32af5434f93f46176ebf044c4784467c700470d0c0b40c8a088c815816', 'hex'));
    assert.equal(instance.digest('hex'), '76414f3b9e4ff8d150280c8e44bc54056849b25351352d9d9e986b3ecb6ec050542709afe01979d2eb97e51d41217e6e');
  });


  it('produces the expected result for ShortMsgKAT_384 960', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d1e654b77cb155f5c77971a64df9e5d34c26a3cad6c7f6b300d39deb1910094691adaa095be4ba5d86690a976428635d5526f3e946f7dc3bd4dbc78999e653441187a81f9adcd5a3c5f254bc8256b0158f54673dcc1232f6e918ebfc6c51ce67eaeb042d9f57eec4bfe910e169af78b3de48d137df4f2840', 'hex'));
    assert.equal(instance.digest('hex'), '92ac60e5dc492010a45f46aef05f403f7569e1b4e2d0c909c871a783fc12457de281aff4c4cee0207d20eaf546285070');
  });


  it('produces the expected result for ShortMsgKAT_384 968', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('626f68c18a69a6590159a9c46be03d5965698f2dac3de779b878b3d9c421e0f21b955a16c715c1ec1e22ce3eb645b8b4f263f60660ea3028981eebd6c8c3a367285b691c8ee56944a7cd1217997e1d9c21620b536bdbd5de8925ff71dec6fbc06624ab6b21e329813de90d1e572dfb89a18120c3f606355d25', 'hex'));
    assert.equal(instance.digest('hex'), '8f99032cb49bb022ee5fb32446e1d39aa0fcd749741e4796979d4bea5ab1b04d241592ec6058e54b8ec9eab274ee632d');
  });


  it('produces the expected result for ShortMsgKAT_384 976', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('651a6fb3c4b80c7c68c6011675e6094eb56abf5fc3057324ebc6477825061f9f27e7a94633abd1fa598a746e4a577caf524c52ec1788471f92b8c37f23795ca19d559d446cab16cbcdce90b79fa1026cee77bf4ab1b503c5b94c2256ad75b3eac6fd5dcb96aca4b03a834bfb4e9af988cecbf2ae597cb9097940', 'hex'));
    assert.equal(instance.digest('hex'), '8bb4f3cf0390a31d682213d22354dfe7d580c811682259872f2a29a08d373fd998f842334f64f81349364a930c82bad4');
  });


  it('produces the expected result for ShortMsgKAT_384 984', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8aaf072fce8a2d96bc10b3c91c809ee93072fb205ca7f10abd82ecd82cf040b1bc49ea13d1857815c0e99781de3adbb5443ce1c897e55188ceaf221aa9681638de05ae1b322938f46bce51543b57ecdb4c266272259d1798de13be90e10efec2d07484d9b21a3870e2aa9e06c21aa2d0c9cf420080a80a91dee16f', 'hex'));
    assert.equal(instance.digest('hex'), '0bb7dac544569e6eb74acab01a846f74ad2a0f31d8facee4d09fa49c81b93bd83b4f129b96da4c0eaf165fde52ef295b');
  });


  it('produces the expected result for ShortMsgKAT_384 992', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('53f918fd00b1701bd504f8cdea803acca21ac18c564ab90c2a17da592c7d69688f6580575395551e8cd33e0fef08ca6ed4588d4d140b3e44c032355df1c531564d7f4835753344345a6781e11cd5e095b73df5f82c8ae3ad00877936896671e947cc52e2b29dcd463d90a0c9929128da222b5a211450bbc0e02448e2', 'hex'));
    assert.equal(instance.digest('hex'), '10dd9348b2d95889ee613907824a10efc708a101a67672fca4c6539f5156c7df805dbe666fcf4cc578f421ae3cf27122');
  });


  it('produces the expected result for ShortMsgKAT_384 1000', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a64599b8a61b5ccec9e67aed69447459c8da3d1ec6c7c7c82a7428b9b584fa67e90f68e2c00fbbed4613666e5168da4a16f395f7a3c3832b3b134bfc9cbaa95d2a0fe252f44ac6681eb6d40ab91c1d0282fed6701c57463d3c5f2bb8c6a7301fb4576aa3b5f15510db8956ff77478c26a7c09bea7b398cfc83503f538e', 'hex'));
    assert.equal(instance.digest('hex'), '444b8a6f1ee118de3fb3ec76b2fbad9ef31916e1f99077defc51c2e59c8e6a3e207ba48e5edd66c72b5beba67401d794');
  });


  it('produces the expected result for ShortMsgKAT_384 1008', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0e3ab0e054739b00cdb6a87bd12cae024b54cb5e550e6c425360c2e87e59401f5ec24ef0314855f0f56c47695d56a7fb1417693af2a1ed5291f2fee95f75eed54a1b1c2e81226fbff6f63ade584911c71967a8eb70933bc3f5d15bc91b5c2644d9516d3c3a8c154ee48e118bd1442c043c7a0dba5ac5b1d5360aae5b9065', 'hex'));
    assert.equal(instance.digest('hex'), 'f4d17c6299bae7d0e6d15a550b311f30c1b038aef56fe375f3b4bae14f7ea427c5aa987ef93285975ce5f9e46a3e4c20');
  });


  it('produces the expected result for ShortMsgKAT_384 1016', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a62fc595b4096e6336e53fcdfc8d1cc175d71dac9d750a6133d23199eaac288207944cea6b16d27631915b4619f743da2e30a0c00bbdb1bbb35ab852ef3b9aec6b0a8dcc6e9e1abaa3ad62ac0a6c5de765de2c3711b769e3fde44a74016fff82ac46fa8f1797d3b2a726b696e3dea5530439acee3a45c2a51bc32dd055650b', 'hex'));
    assert.equal(instance.digest('hex'), '39f911e9cb2763c8911ac3153040e48f403abfe373e14b709a476868d3ab5841d1088f8393dd728305ba341138365d27');
  });


  it('produces the expected result for ShortMsgKAT_384 1024', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2b6db7ced8665ebe9deb080295218426bdaa7c6da9add2088932cdffbaa1c14129bccdd70f369efb149285858d2b1d155d14de2fdb680a8b027284055182a0cae275234cc9c92863c1b4ab66f304cf0621cd54565f5bff461d3b461bd40df28198e3732501b4860eadd503d26d6e69338f4e0456e9e9baf3d827ae685fb1d817', 'hex'));
    assert.equal(instance.digest('hex'), '3adeb7eeecf9069f143a10151fd4506aeef3a0ef94ca65d4448acf1e892b8ebb0887631804dd64e153ad41fae0127a85');
  });


  it('produces the expected result for ShortMsgKAT_384 1032', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('10db509b2cdcaba6c062ae33be48116a29eb18e390e1bbada5ca0a2718afbcd23431440106594893043cc7f2625281bf7de2655880966a23705f0c5155c2f5cca9f2c2142e96d0a2e763b70686cd421b5db812daced0c6d65035fde558e94f26b3e6dde5bd13980cc80292b723013bd033284584bff27657871b0cf07a849f4ae2', 'hex'));
    assert.equal(instance.digest('hex'), '14830877dfafe6f886a22de7ce9a5fc74733a8fc27ecc523b6b4524e6312cbb22b51d7eb9ddab37ba54bb2c0bfc32a6f');
  });


  it('produces the expected result for ShortMsgKAT_384 1040', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('9334de60c997bda6086101a6314f64e4458f5ff9450c509df006e8c547983c651ca97879175aaba0c539e82d05c1e02c480975cbb30118121061b1ebac4f8d9a3781e2db6b18042e01ecf9017a64a0e57447ec7fcbe6a7f82585f7403ee2223d52d37b4bf426428613d6b4257980972a0acab508a7620c1cb28eb4e9d30fc41361ec', 'hex'));
    assert.equal(instance.digest('hex'), 'd109532bc4217326b3d25ed2d2f3f0d2482cc5bdd054218fa8bedb91cd814f7fd683aa2afcb8342cd34ce54d607e3da0');
  });


  it('produces the expected result for ShortMsgKAT_384 1048', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e88ab086891693aa535ceb20e64c7ab97c7dd3548f3786339897a5f0c39031549ca870166e477743ccfbe016b4428d89738e426f5ffe81626137f17aecff61b72dbee2dc20961880cfe281dfab5ee38b1921881450e16032de5e4d55ad8d4fca609721b0692bac79be5a06e177fe8c80c0c83519fb3347de9f43d5561cb8107b9b5edc', 'hex'));
    assert.equal(instance.digest('hex'), 'de64a37a7456638d3aca1b895f4a88c26817177986a9f2f5b77b49cff2c3e46be2c49abe89d741375db87f4c898f6762');
  });


  it('produces the expected result for ShortMsgKAT_384 1056', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fd19e01a83eb6ec810b94582cb8fbfa2fcb992b53684fb748d2264f020d3b960cb1d6b8c348c2b54a9fcea72330c2aaa9a24ecdb00c436abc702361a82bb8828b85369b8c72ece0082fe06557163899c2a0efa466c33c04343a839417057399a63a3929be1ee4805d6ce3e5d0d0967fe9004696a5663f4cac9179006a2ceb75542d75d68', 'hex'));
    assert.equal(instance.digest('hex'), '8d9743710c171cd399a0d712e9d53374ed8e0a97672a40294c74f0d503f0292d6f41d5cea08fb3c623c4eba56848770d');
  });


  it('produces the expected result for ShortMsgKAT_384 1064', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('59ae20b6f7e0b3c7a989afb28324a40fca25d8651cf1f46ae383ef6d8441587aa1c04c3e3bf88e8131ce6145cfb8973d961e8432b202fa5af3e09d625faad825bc19da9b5c6c20d02abda2fcc58b5bd3fe507bf201263f30543819510c12bc23e2ddb4f711d087a86edb1b355313363a2de996b891025e147036087401ccf3ca7815bf3c49', 'hex'));
    assert.equal(instance.digest('hex'), 'fae998d1074e30f2ea0a8b9fe259fd2e2a36804995ebe7e3a5ad34865b1a3316675297fe8e33eef8adcc02be8c4765be');
  });


  it('produces the expected result for ShortMsgKAT_384 1072', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('77ee804b9f3295ab2362798b72b0a1b2d3291dceb8139896355830f34b3b328561531f8079b79a6e9980705150866402fdc176c05897e359a6cb1a7ab067383eb497182a7e5aef7038e4c96d133b2782917417e391535b5e1b51f47d8ed7e4d4025fe98dc87b9c1622614bff3d1029e68e372de719803857ca52067cddaad958951cb2068cc6', 'hex'));
    assert.equal(instance.digest('hex'), '0aa9ccc3c9cae1603d3da5e95f304adb8fa575833929b09f7c1095d968bea0471dfe8aaad3ad11266daaff95f6667abc');
  });


  it('produces the expected result for ShortMsgKAT_384 1080', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b771d5cef5d1a41a93d15643d7181d2a2ef0a8e84d91812f20ed21f147bef732bf3a60ef4067c3734b85bc8cd471780f10dc9e8291b58339a677b960218f71e793f2797aea349406512829065d37bb55ea796fa4f56fd8896b49b2cd19b43215ad967c712b24e5032d065232e02c127409d2ed4146b9d75d763d52db98d949d3b0fed6a8052fbb', 'hex'));
    assert.equal(instance.digest('hex'), '8ffdf6a4752d17d496f8adee7116bd2af0a4b726bb3f4c5f85be2c9dfc34055a509e4fe016930d9951a7212553e2e908');
  });


  it('produces the expected result for ShortMsgKAT_384 1088', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b32d95b0b9aad2a8816de6d06d1f86008505bd8c14124f6e9a163b5a2ade55f835d0ec3880ef50700d3b25e42cc0af050ccd1be5e555b23087e04d7bf9813622780c7313a1954f8740b6ee2d3f71f768dd417f520482bd3a08d4f222b4ee9dbd015447b33507dd50f3ab4247c5de9a8abd62a8decea01e3b87c8b927f5b08beb37674c6f8e380c04', 'hex'));
    assert.equal(instance.digest('hex'), '278e83cff1ff6cc4b3ac41f3879da87ae63b535b43815e273687a4cc519855b452cb6af0198bb9fd0f3e43739bc0cdd7');
  });


  it('produces the expected result for ShortMsgKAT_384 1096', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('04410e31082a47584b406f051398a6abe74e4da59bb6f85e6b49e8a1f7f2ca00dfba5462c2cd2bfde8b64fb21d70c083f11318b56a52d03b81cac5eec29eb31bd0078b6156786da3d6d8c33098c5c47bb67ac64db14165af65b44544d806dde5f487d5373c7f9792c299e9686b7e5821e7c8e2458315b996b5677d926dac57b3f22da873c601016a0d', 'hex'));
    assert.equal(instance.digest('hex'), 'aa4b5a5fb94fe19578f33323ba1eefc5b6ed70b34bc70193f386c99f73863611af20581b4b1b3ed776df9e235d3d4e45');
  });


  it('produces the expected result for ShortMsgKAT_384 1104', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8b81e9badde026f14d95c019977024c9e13db7a5cd21f9e9fc491d716164bbacdc7060d882615d411438aea056c340cdf977788f6e17d118de55026855f93270472d1fd18b9e7e812bae107e0dfde7063301b71f6cfe4e225cab3b232905a56e994f08ee2891ba922d49c3dafeb75f7c69750cb67d822c96176c46bd8a29f1701373fb09a1a6e3c7158f', 'hex'));
    assert.equal(instance.digest('hex'), '3174cf3754a6fe603631ecda4895171a9dcf7afb02eb72ae270a9e3ebf2a65a72c3436c233fd4f17f7fbafbac0680c63');
  });


  it('produces the expected result for ShortMsgKAT_384 1112', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fa6eed24da6666a22208146b19a532c2ec9ba94f09f1def1e7fc13c399a48e41acc2a589d099276296348f396253b57cb0e40291bd282773656b6e0d8bea1cda084a3738816a840485fcf3fb307f777fa5feac48695c2af4769720258c77943fb4556c362d9cba8bf103aeb9034baa8ea8bfb9c4f8e6742ce0d52c49ea8e974f339612e830e9e7a9c29065', 'hex'));
    assert.equal(instance.digest('hex'), '354813d9823d2f02d75d13893a6abdb44e9e99666533429cc6f7eb3fba10bf9ecd4a18bb9d5188e6e8f91dfddbe8409a');
  });


  it('produces the expected result for ShortMsgKAT_384 1120', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('9bb4af1b4f09c071ce3cafa92e4eb73ce8a6f5d82a85733440368dee4eb1cbc7b55ac150773b6fe47dbe036c45582ed67e23f4c74585dab509df1b83610564545642b2b1ec463e18048fc23477c6b2aa035594ecd33791af6af4cbc2a1166aba8d628c57e707f0b0e8707caf91cd44bdb915e0296e0190d56d33d8dde10b5b60377838973c1d943c22ed335e', 'hex'));
    assert.equal(instance.digest('hex'), 'e2efdc5007e4c13f811043db967a423de02af411b4a251a225cad041e83bd4dd89d8b24198da00096cfe2e1b3f5d1960');
  });


  it('produces the expected result for ShortMsgKAT_384 1128', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2167f02118cc62043e9091a647cadbed95611a521fe0d64e8518f16c808ab297725598ae296880a773607a798f7c3cfce80d251ebec6885015f9abf7eaabae46798f82cb5926de5c23f44a3f9f9534b3c6f405b5364c2f8a8bdc5ca49c749bed8ce4ba48897062ae8424ca6dde5f55c0e42a95d1e292ca54fb46a84fbc9cd87f2d0c9e7448de3043ae22fdd229', 'hex'));
    assert.equal(instance.digest('hex'), 'e44c0856f0c245e002f914cf300e98c496e725a4db561f2995ad9c8b97f341e15625b56b03d4d5880927b8574f5e5d74');
  });


  it('produces the expected result for ShortMsgKAT_384 1136', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('94b7fa0bc1c44e949b1d7617d31b4720cbe7ca57c6fa4f4094d4761567e389ecc64f6968e4064df70df836a47d0c713336b5028b35930d29eb7a7f9a5af9ad5cf441745baec9bb014ceeff5a41ba5c1ce085feb980bab9cf79f2158e03ef7e63e29c38d7816a84d4f71e0f548b7fc316085ae38a060ff9b8dec36f91ad9ebc0a5b6c338cbb8f6659d342a24368cf', 'hex'));
    assert.equal(instance.digest('hex'), '5d290c5dff59a3a3db8bc7320b8f64a4dbf67ca4f5df9a07f235edb6460345fc8971040481c9a5d0f09b62262b9ed9f8');
  });


  it('produces the expected result for ShortMsgKAT_384 1144', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('ea40e83cb18b3a242c1ecc6ccd0b7853a439dab2c569cfc6dc38a19f5c90acbf76aef9ea3742ff3b54ef7d36eb7ce4ff1c9ab3bc119cff6be93c03e208783335c0ab8137be5b10cdc66ff3f89a1bddc6a1eed74f504cbe7290690bb295a872b9e3fe2cee9e6c67c41db8efd7d863cf10f840fe618e7936da3dca5ca6df933f24f6954ba0801a1294cd8d7e66dfafec', 'hex'));
    assert.equal(instance.digest('hex'), 'fe680250cab1fbdb6ac8800ddc28e70100df8daae38da27004872ab05d40b15ae93eb44266e3014f0960038b28252c7b');
  });


  it('produces the expected result for ShortMsgKAT_384 1152', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('157d5b7e4507f66d9a267476d33831e7bb768d4d04cc3438da12f9010263ea5fcafbde2579db2f6b58f911d593d5f79fb05fe3596e3fa80ff2f761d1b0e57080055c118c53e53cdb63055261d7c9b2b39bd90acc32520cbbdbda2c4fd8856dbcee173132a2679198daf83007a9b5c51511ae49766c792a29520388444ebefe28256fb33d4260439cba73a9479ee00c63', 'hex'));
    assert.equal(instance.digest('hex'), '511b13e53fd353fa4d38ef0cf8f1af30da554828a5fd1c53ec41f73d9aca6c54ac7972c933af4a2fc7ab852ca63a1ba6');
  });


  it('produces the expected result for ShortMsgKAT_384 1160', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('836b34b515476f613fe447a4e0c3f3b8f20910ac89a3977055c960d2d5d2b72bd8acc715a9035321b86703a411dde0466d58a59769672aa60ad587b8481de4bba552a1645779789501ec53d540b904821f32b0bd1855b04e4848f9f8cfe9ebd8911be95781a759d7ad9724a7102dbe576776b7c632bc39b9b5e19057e226552a5994c1dbb3b5c7871a11f5537011044c53', 'hex'));
    assert.equal(instance.digest('hex'), '554cf00a9aafe0dfc8d49ea03288b52aed43a5104e22b838e40fde7358491b5774df455cf2ec73c53a7b30627a142a41');
  });


  it('produces the expected result for ShortMsgKAT_384 1168', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('cc7784a4912a7ab5ad3620aab29ba87077cd3cb83636adc9f3dc94f51edf521b2161ef108f21a0a298557981c0e53ce6ced45bdf782c1ef200d29bab81dd6460586964edab7cebdbbec75fd7925060f7da2b853b2b089588fa0f8c16ec6498b14c55dcee335cb3a91d698e4d393ab8e8eac0825f8adebeee196df41205c011674e53426caa453f8de1cbb57932b0b741d4c6', 'hex'));
    assert.equal(instance.digest('hex'), 'c13c177e6453f78e81bc4efea7a10e9ca02273a6eb757497368539bf4ae1f1bbcbae0fff5dad55edca61f474976cbf64');
  });


  it('produces the expected result for ShortMsgKAT_384 1176', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7639b461fff270b2455ac1d1afce782944aea5e9087eb4a39eb96bb5c3baaf0e868c8526d3404f9405e79e77bfac5ffb89bf1957b523e17d341d7323c302ea7083872dd5e8705694acdda36d5a1b895aaa16eca6104c82688532c8bfe1790b5dc9f4ec5fe95baed37e1d287be710431f1e5e8ee105bc42ed37d74b1e55984bf1c09fe6a1fa13ef3b96faeaed6a2a1950a12153', 'hex'));
    assert.equal(instance.digest('hex'), 'c3e5ddf4572a386c99f998e68fccc7f85867a73e13c2058c18391a922416fd352ca6b659bad021e0d9a05789f59d3c67');
  });


  it('produces the expected result for ShortMsgKAT_384 1184', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('eb6513fc61b30cfba58d4d7e80f94d14589090cf1d80b1df2e68088dc6104959ba0d583d585e9578ab0aec0cf36c48435eb52ed9ab4bbce7a5abe679c97ae2dbe35e8cc1d45b06dda3cf418665c57cbee4bbb47fa4caf78f4ee656fec237fe4eebbafa206e1ef2bd0ee4ae71bd0e9b2f54f91daadf1febfd7032381d636b733dcb3bf76fb14e23aff1f68ed3dbcf75c9b99c6f26', 'hex'));
    assert.equal(instance.digest('hex'), '157481d0a24ba9fafa1800c9713e702976167fddf52367a7932aa3cff22f4a2e19a016c7bacbd97cec3ea6b1e87cb3d3');
  });


  it('produces the expected result for ShortMsgKAT_384 1192', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1594d74bf5dde444265d4c04dad9721ff3e34cbf622daf341fe16b96431f6c4df1f760d34f296eb97d98d560ad5286fec4dce1724f20b54fd7df51d4bf137add656c80546fb1bf516d62ee82baa992910ef4cc18b70f3f8698276fcfb44e0ec546c2c39cfd8ee91034ff9303058b4252462f86c823eb15bf481e6b79cc3a02218595b3658e8b37382bd5048eaed5fd02c37944e73b', 'hex'));
    assert.equal(instance.digest('hex'), 'bcdd36ee35c2c771852e27db2cddabc155ab43d28e6289f0aba4f93e793c999f30836c7483fbea5a73f4eeb5d8d32fe3');
  });


  it('produces the expected result for ShortMsgKAT_384 1200', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('4cfa1278903026f66fedd41374558be1b585d03c5c55dac94361df286d4bd39c7cb8037ed3b267b07c346626449d0cc5b0dd2cf221f7e4c3449a4be99985d2d5e67bff2923357ddeab5abcb4619f3a3a57b2cf928a022eb27676c6cf805689004fca4d41ea6c2d0a4789c7605f7bb838dd883b3ad3e6027e775bcf262881428099c7fff95b14c095ea130e0b9938a5e22fc52650f591', 'hex'));
    assert.equal(instance.digest('hex'), 'fa7f66d37c1dc3e81bf55c443abad5cf79a3d9834f77a206291138ae31438b986737dc4599ec5d10f7f005d1833b7d2e');
  });


  it('produces the expected result for ShortMsgKAT_384 1208', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d3e65cb92cfa79662f6af493d696a07ccf32aaadcceff06e73e8d9f6f909209e66715d6e978788c49efb9087b170ecf3aa86d2d4d1a065ae0efc8924f365d676b3cb9e2bec918fd96d0b43dee83727c9a93bf56ca2b2e59adba85696546a815067fc7a78039629d4948d157e7b0d826d1bf8e81237bab7321312fdaa4d521744f988db6fdf04549d0fdca393d639c729af716e9c8bba48', 'hex'));
    assert.equal(instance.digest('hex'), '8f0e47ed680661f1ace9eeee855d935fdfc66b97c2e9a6fc7341f14d9327c8e72bca3fa67e59804cea41f09e1c4f8715');
  });


  it('produces the expected result for ShortMsgKAT_384 1216', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('842cc583504539622d7f71e7e31863a2b885c56a0ba62db4c2a3f2fd12e79660dc7205ca29a0dc0a87db4dc62ee47a41db36b9ddb3293b9ac4baae7df5c6e7201e17f717ab56e12cad476be49608ad2d50309e7d48d2d8de4fa58ac3cfeafeee48c0a9eec88498e3efc51f54d300d828dddccb9d0b06dd021a29cf5cb5b2506915beb8a11998b8b886e0f9b7a80e97d91a7d01270f9a7717', 'hex'));
    assert.equal(instance.digest('hex'), 'f105810e724c2c55162cf71721e3f59871f06010bc7f052ab282bfb6d4a3bf184b892baf8fadd02070f64b9e036dc5f7');
  });


  it('produces the expected result for ShortMsgKAT_384 1224', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6c4b0a0719573e57248661e98febe326571f9a1ca813d3638531ae28b4860f23c3a3a8ac1c250034a660e2d71e16d3acc4bf9ce215c6f15b1c0fc7e77d3d27157e66da9ceec9258f8f2bf9e02b4ac93793dd6e29e307ede3695a0df63cbdc0fc66fb770813eb149ca2a916911bee4902c47c7802e69e405fe3c04ceb5522792a5503fa829f707272226621f7c488a7698c0d69aa561be9f378', 'hex'));
    assert.equal(instance.digest('hex'), 'cbb0fce4af36d14b63bc72d37fb4028327843fb22ec033bfc068e7b081287e31e3451d8a1d97692b379ff9e6acd40240');
  });


  it('produces the expected result for ShortMsgKAT_384 1232', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('51b7dbb7ce2ffeb427a91ccfe5218fd40f9e0b7e24756d4c47cd55606008bdc27d16400933906fd9f30effdd4880022d081155342af3fb6cd53672ab7fb5b3a3bcbe47be1fd3a2278cae8a5fd61c1433f7d350675dd21803746cadca574130f01200024c6340ab0cc2cf74f2234669f34e9009ef2eb94823d62b31407f4ba46f1a1eec41641e84d77727b59e746b8a671bef936f05be820759fa', 'hex'));
    assert.equal(instance.digest('hex'), '44e4f77c0d7bca6ad57d334f974bda8de2e08e104f14a8713280ce73897a945dc23ad058533b85750d9dd9d2d7b5d1af');
  });


  it('produces the expected result for ShortMsgKAT_384 1240', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('83599d93f5561e821bd01a472386bc2ff4efbd4aed60d5821e84aae74d8071029810f5e286f8f17651cd27da07b1eb4382f754cd1c95268783ad09220f5502840370d494beb17124220f6afce91ec8a0f55231f9652433e5ce3489b727716cf4aeba7dcda20cd29aa9a859201253f948dd94395aba9e3852bd1d60dda7ae5dc045b283da006e1cbad83cc13292a315db5553305c628dd091146597', 'hex'));
    assert.equal(instance.digest('hex'), '6913184fae1ef9fa2d57b1b7bd586d51de9a5f387037266e7b4a83f4366498ff86c89934c05332a7e641149ef627fa34');
  });


  it('produces the expected result for ShortMsgKAT_384 1248', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2be9bf526c9d5a75d565dd11ef63b979d068659c7f026c08bea4af161d85a462d80e45040e91f4165c074c43ac661380311a8cbed59cc8e4c4518e80cd2c78ab1cabf66bff83eab3a80148550307310950d034a6286c93a1ece8929e6385c5e3bb6ea8a7c0fb6d6332e320e71cc4eb462a2a62e2bfe08f0ccad93e61bedb5dd0b786a728ab666f07e0576d189c92bf9fb20dca49ac2d3956d47385e2', 'hex'));
    assert.equal(instance.digest('hex'), 'f04ff5aaa68f2558586d2748587dee3cf28bacab5be5f887d24a068311ba2d9e9bc0206c2706b9c109e7162e3ecb6346');
  });


  it('produces the expected result for ShortMsgKAT_384 1256', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('ca76d3a12595a817682617006848675547d3e8f50c2210f9af906c0e7ce50b4460186fe70457a9e879e79fd4d1a688c70a347361c847ba0dd6aa52936eaf8e58a1be2f5c1c704e20146d366aeb3853bed9de9befe9569ac8aaea37a9fb7139a1a1a7d5c748605a8defb297869ebedd71d615a5da23496d11e11abbb126b206fa0a7797ee7de117986012d0362dcef775c2fe145ada6bda1ccb326bf644', 'hex'));
    assert.equal(instance.digest('hex'), 'd4b8cfb2fe5b63bb5bb678b98b465a2dfd23dff498e778ee0535a5c077705aa2ca2f039832baea0f735609b3e4e18cf7');
  });


  it('produces the expected result for ShortMsgKAT_384 1264', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f76b85dc67421025d64e93096d1d712b7baf7fb001716f02d33b2160c2c882c310ef13a576b1c2d30ef8f78ef8d2f465007109aad93f74cb9e7d7bef7c9590e8af3b267c89c15db238138c45833c98cc4a471a7802723ef4c744a853cf80a0c2568dd4ed58a2c9644806f42104cee53628e5bdf7b63b0b338e931e31b87c24b146c6d040605567ceef5960df9e022cb469d4c787f4cba3c544a1ac91f95f', 'hex'));
    assert.equal(instance.digest('hex'), '25b7237da9d40de047d41a30bd37155c0f108d7296b09079957d4ee31224a4ba256af756d154878910c158e49186728b');
  });


  it('produces the expected result for ShortMsgKAT_384 1272', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('25b8c9c032ea6bcd733ffc8718fbb2a503a4ea8f71dea1176189f694304f0ff68e862a8197b839957549ef243a5279fc2646bd4c009b6d1edebf24738197abb4c992f6b1dc9ba891f570879accd5a6b18691a93c7d0a8d38f95b639c1daeb48c4c2f15ccf5b9d508f8333c32de78781b41850f261b855c4bebcc125a380c54d501c5d3bd07e6b52102116088e53d76583b0161e2a58d0778f091206aabd5a1', 'hex'));
    assert.equal(instance.digest('hex'), 'f41b2d02d321f4ba106f931ee27d3f74e8d397bacecb0a1fa90bf5c837aceb2ed8f0feff07b7ebea6a88d0cc54ae8e6a');
  });


  it('produces the expected result for ShortMsgKAT_384 1280', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('21cfdc2a7ccb7f331b3d2eefff37e48ad9fa9c788c3f3c200e0173d99963e1cbca93623b264e920394ae48bb4c3a5bb96ffbc8f0e53f30e22956adabc2765f57fb761e147ecbf8567533db6e50c8a1f894310a94edf806dd8ca6a0e141c0fa7c9fae6c6ae65f18c93a8529e6e5b553bf55f25be2e80a9882bd37f145fecbeb3d447a3c4e46c21524cc55cdd62f521ab92a8ba72b897996c49bb273198b7b1c9e', 'hex'));
    assert.equal(instance.digest('hex'), '9673a1a3535b8975ca0f512cdb0fdcdfb0179ce229e756ad70eaf1e5c3e1a4135e9fa7653edbdca4975ac18b17a662eb');
  });


  it('produces the expected result for ShortMsgKAT_384 1288', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('4e452ba42127dcc956ef4f8f35dd68cb225fb73b5bc7e1ec5a898bba2931563e74faff3b67314f241ec49f4a7061e3bd0213ae826bab380f1f14faab8b0efddd5fd1bb49373853a08f30553d5a55ccbbb8153de4704f29ca2bdeef0419468e05dd51557ccc80c0a96190bbcc4d77ecff21c66bdf486459d427f986410f883a80a5bcc32c20f0478bb9a97a126fc5f95451e40f292a4614930d054c851acd019ccf', 'hex'));
    assert.equal(instance.digest('hex'), '32429cb1b5dad663a0663e49033db2290945019df7e792cdff3723eedb88cd0603b3fae0228a184f8effac45112f453e');
  });


  it('produces the expected result for ShortMsgKAT_384 1296', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fa85671df7dadf99a6ffee97a3ab9991671f5629195049880497487867a6c446b60087fac9a0f2fcc8e3b24e97e42345b93b5f7d3691829d3f8ccd4bb36411b85fc2328eb0c51cb3151f70860ad3246ce0623a8dc8b3c49f958f8690f8e3860e71eb2b1479a5cea0b3f8befd87acaf5362435eaeccb52f38617bc6c5c2c6e269ead1fbd69e941d4ad2012da2c5b21bcfbf98e4a77ab2af1f3fda3233f046d38f1dc8', 'hex'));
    assert.equal(instance.digest('hex'), 'e91deebcd72ba12e2215602b488ded203a1e211d6358cadc6f906fbd89ca928f541222cbd8fc9a20b573ef22fc178778');
  });


  it('produces the expected result for ShortMsgKAT_384 1304', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e90847ae6797fbc0b6b36d6e588c0a743d725788ca50b6d792352ea8294f5ba654a15366b8e1b288d84f5178240827975a763bc45c7b0430e8a559df4488505e009c63da994f1403f407958203cebb6e37d89c94a5eacf6039a327f6c4dbbc7a2a307d976aa39e41af6537243fc218dfa6ab4dd817b6a397df5ca69107a9198799ed248641b63b42cb4c29bfdd7975ac96edfc274ac562d0474c60347a078ce4c25e88', 'hex'));
    assert.equal(instance.digest('hex'), '45290a24291e81ccb8d7840b6c4812ac98983d7bd3afe46b427296ad636862b9e03ecf605b114cb47c0207267bc05958');
  });


  it('produces the expected result for ShortMsgKAT_384 1312', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f6d5c2b6c93954fc627602c00c4ca9a7d3ed12b27173f0b2c9b0e4a5939398a665e67e69d0b12fb7e4ceb253e8083d1ceb724ac07f009f094e42f2d6f2129489e846eaff0700a8d4453ef453a3eddc18f408c77a83275617fabc4ea3a2833aa73406c0e966276079d38e8e38539a70e194cc5513aaa457c699383fd1900b1e72bdfb835d1fd321b37ba80549b078a49ea08152869a918ca57f5b54ed71e4fd3ac5c06729', 'hex'));
    assert.equal(instance.digest('hex'), 'e6bb2faf5abb3edaffe9e47f62586409b443e4c698070d61fc082261053270ecdc2484aa0145c851031e3c99deff2389');
  });


  it('produces the expected result for ShortMsgKAT_384 1320', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('cf8562b1bed89892d67ddaaf3deeb28246456e972326dbcdb5cf3fb289aca01e68da5d59896e3a6165358b071b304d6ab3d018944be5049d5e0e2bb819acf67a6006111089e6767132d72dd85beddcbb2d64496db0cc92955ab4c6234f1eea24f2d51483f2e209e4589bf9519fac51b4d061e801125e605f8093bb6997bc163d551596fe4ab7cfae8fb9a90f6980480ce0c229fd1675409bd788354daf316240cfe0af93eb', 'hex'));
    assert.equal(instance.digest('hex'), '79b792b34da4425bb0b4217abe23e5dbe4e87d3940e2f7ba52ca146618580a62545c44b81e06620af6e273499073e3a8');
  });


  it('produces the expected result for ShortMsgKAT_384 1328', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2ace31abb0a2e3267944d2f75e1559985db7354c6e605f18dc8470423fca30b7331d9b33c4a4326783d1caae1b4f07060eff978e4746bf0c7e30cd61040bd5ec2746b29863eb7f103ebda614c4291a805b6a4c8214230564a0557bc7102e0bd3ed23719252f7435d64d210ee2aafc585be903fa41e1968c50fd5d5367926df7a05e3a42cf07e656ff92de73b036cf8b19898c0cb34557c0c12c2d8b84e91181af467bc75a9d1', 'hex'));
    assert.equal(instance.digest('hex'), '9fa1d0ac7c37831731b71c19ac9e81ea115083ace6d94349ce89fdb79b3462a749d76fdc93892f2f16ab0f7e18cdb79c');
  });


  it('produces the expected result for ShortMsgKAT_384 1336', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0d8d09aed19f1013969ce5e7eb92f83a209ae76be31c754844ea9116ceb39a22ebb6003017bbcf26555fa6624185187db8f0cb3564b8b1c06bf685d47f3286eda20b83358f599d2044bbf0583fab8d78f854fe0a596183230c5ef8e54426750eaf2cc4e29d3bdd037e734d863c2bd9789b4c243096138f7672c232314effdfc6513427e2da76916b5248933be312eb5dde4cf70804fb258ac5fb82d58d08177ac6f4756017fff5', 'hex'));
    assert.equal(instance.digest('hex'), '187cdfdb3757d80010d1e53157a5ccb0fcc34998efc6bb3ce2e60768f5eeaa590656b49c0e036a3f34c9ef25f3be587a');
  });


  it('produces the expected result for ShortMsgKAT_384 1344', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c3236b73deb7662bf3f3daa58f137b358ba610560ef7455785a9befdb035a066e90704f929bd9689cef0ce3bda5acf4480bceb8d09d10b098ad8500d9b6071dfc3a14af6c77511d81e3aa8844986c3bea6f469f9e02194c92868cd5f51646256798ff0424954c1434bdfed9facb390b07d342e992936e0f88bfd0e884a0ddb679d0547ccdec6384285a45429d115ac7d235a717242021d1dc35641f5f0a48e8445dba58e6cb2c8ea', 'hex'));
    assert.equal(instance.digest('hex'), '7043f54f390b6abd0dff06f266e0e7b3e41f8d2e8dd43f899ac456662447a823a567b1b0fb8c2df24e5f6689060cddb4');
  });


  it('produces the expected result for ShortMsgKAT_384 1352', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b39feb8283eadc63e8184b51df5ae3fd41aac8a963bb0be1cd08aa5867d8d910c669221e73243360646f6553d1ca05a84e8dc0de05b6419ec349ca994480193d01c92525f3fb3dcefb08afc6d26947bdbbfd85193f53b50609c6140905c53a6686b58e53a319a57b962331ede98149af3de3118a819da4d76706a0424b4e1d2910b0ed26af61d150ebcb46595d4266a0bd7f651ba47d0c7f179ca28545007d92e8419d48fdfbd744ce', 'hex'));
    assert.equal(instance.digest('hex'), 'd0ce0259aaeea5baeff52929423c3da07a8c75195f86d733a718d1c46a1e40aad404750c41d7a158e79f278830b4c07a');
  });


  it('produces the expected result for ShortMsgKAT_384 1360', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a983d54f503803e8c7999f4edbbe82e9084f422143a932ddddc47a17b0b7564a7f37a99d0786e99476428d29e29d3c197a72bfab1342c12a0fc4787fd7017d7a6174049ea43b5779169ef7472bdbbd941dcb82fc73aac45a8a94c9f2bd3477f61fd3b796f02a1b8264a214c6fea74b7051b226c722099ec7883a462b83b6afdd4009248b8a237f605fe5a08fe7d8b45321421ebba67bd70a0b00ddbf94baab7f359d5d1eea105f28dcfb', 'hex'));
    assert.equal(instance.digest('hex'), 'e4385a3be011af20fe4566c1cebf4aa68270e42be50aaaae65f8f605e980b1d2736fb0e794330d764ca96bc68b8360bc');
  });


  it('produces the expected result for ShortMsgKAT_384 1368', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e4d1c1897a0a866ce564635b74222f9696bf2c7f640dd78d7e2aca66e1b61c642bb03ea7536aae597811e9bf4a7b453ede31f97b46a5f0ef51a071a2b3918df16b152519ae3776f9f1edab4c2a377c3292e96408359d3613844d5eb393000283d5ad3401a318b12fd1474b8612f2bb50fb6a8b9e023a54d7dde28c43d6d8854c8d9d1155935c199811dbfc87e9e0072e90eb88681cc7529714f8fb8a2c9d88567adfb974ee205a9bf7b848', 'hex'));
    assert.equal(instance.digest('hex'), 'c979f00656a09e68485ccf07fbbb9108b00c5fc11d41f5966ff086f26c7102478ec177ee6d78c623c375a9e6f761809a');
  });


  it('produces the expected result for ShortMsgKAT_384 1376', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b10c59723e3dcadd6d75df87d0a1580e73133a9b7d00cb95ec19f5547027323be75158b11f80b6e142c6a78531886d9047b08e551e75e6261e79785366d7024bd7cd9cf322d9be7d57fb661069f2481c7bb759cd71b4b36ca2bc2df6d3a328faebdb995a9794a8d72155ed551a1f87c80bf6059b43fc764900b18a1c2441f7487743cf84e565f61f8dd2ece6b6ccc9444049197aaaf53e926fbee3bfca8be588ec77f29d211be89de18b15f6', 'hex'));
    assert.equal(instance.digest('hex'), '36139336110d1d6c27e4cc1f26f428eb8bdbcba3aa9ffdcecf72009fb46bfaf9e3464c48befa4745be36c697dd3bed8b');
  });


  it('produces the expected result for ShortMsgKAT_384 1384', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('db11f609baba7b0ca634926b1dd539c8cbada24967d7add4d9876f77c2d80c0f4dcefbd7121548373582705cca2495bd2a43716fe64ed26d059cfb566b3364bd49ee0717bdd9810dd14d8fad80dbbdc4cafb37cc60fb0fe2a80fb4541b8ca9d59dce457738a9d3d8f641af8c3fd6da162dc16fc01aac527a4a0255b4d231c0be50f44f0db0b713af03d968fe7f0f61ed0824c55c4b5265548febd6aad5c5eedf63efe793489c39b8fd29d104ce', 'hex'));
    assert.equal(instance.digest('hex'), 'ce3268b8ec923b3331ea2cf85132c0733cf8bf87daa544f8ee386d5de9fbd4d8ad94e00b705ca5b61a3c1790b650080c');
  });


  it('produces the expected result for ShortMsgKAT_384 1392', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('bebd4f1a84fc8b15e4452a54bd02d69e304b7f32616aadd90537937106ae4e28de9d8aab02d19bc3e2fde1d651559e296453e4dba94370a14dbbb2d1d4e2022302ee90e208321efcd8528ad89e46dc839ea9df618ea8394a6bff308e7726bae0c19bcd4be52da6258e2ef4e96aa21244429f49ef5cb486d7ff35cac1bacb7e95711944bccb2ab34700d42d1eb38b5d536b947348a458ede3dc6bd6ec547b1b0cae5b257be36a7124e1060c170ffa', 'hex'));
    assert.equal(instance.digest('hex'), 'ddc398879bd16fb681fae1512e3a1ae7ed2362dad8bee0d12d2256b2d856282043dc0cbbc0f63197b75e9982a1daa8ae');
  });


  it('produces the expected result for ShortMsgKAT_384 1400', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5aca56a03a13784bdc3289d9364f79e2a85c12276b49b92db0adaa4f206d5028f213f678c3510e111f9dc4c1c1f8b6acb17a6413aa227607c515c62a733817ba5e762cc6748e7e0d6872c984d723c9bb3b117eb8963185300a80bfa65cde495d70a46c44858605fccbed086c2b45cef963d33294dbe9706b13af22f1b7c4cd5a001cfec251fba18e722c6e1c4b1166918b4f6f48a98b64b3c07fc86a6b17a6d0480ab79d4e6415b520f1c484d675b1', 'hex'));
    assert.equal(instance.digest('hex'), '350b4b2768020eaa95452b90414439a38be03686131d45612c1b85fe06fd9196f27d221f4ff83251aa8e69aef72f904d');
  });


  it('produces the expected result for ShortMsgKAT_384 1408', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a5aad0e4646a32c85cfcac73f02fc5300f1982fabb2f2179e28303e447854094cdfc854310e5c0f60993ceff54d84d6b46323d930adb07c17599b35b505f09e784bca5985e0172257797fb53649e2e9723efd16865c31b5c3d5113b58bb0bfc8920fabdda086d7537e66d709d050bd14d0c960873f156fad5b3d3840cdfcdc9be6af519db262a27f40896ab25cc39f96984d650611c0d5a3080d5b3a1bf186abd42956588b3b58cd948970d298776060', 'hex'));
    assert.equal(instance.digest('hex'), '4cd1367112c40fb7e3919df20697a4e1cdc55fd0f01be3953b1998b5fcb473e76e9e75d5d82e2973b3db89538554933b');
  });


  it('produces the expected result for ShortMsgKAT_384 1416', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('06cbbe67e94a978203ead6c057a1a5b098478b4b4cbef5a97e93c8e42f5572713575fc2a884531d7622f8f879387a859a80f10ef02708cd8f7413ab385afc357678b9578c0ebf641ef076a1a30f1f75379e9dcb2a885bdd295905ee80c0168a62a9597d10cf12dd2d8cee46645c7e5a141f6e0e23aa482abe5661c16e69ef1e28371e2e236c359ba4e92c25626a7b7ff13f6ea4ae906e1cfe163e91719b1f750a96cbde5fbc953d9e576cd216afc90323a', 'hex'));
    assert.equal(instance.digest('hex'), '878ad52fa09fd4b6465083c9c9e6a2ddb81302e2db0caa934d03a196972addd4bb8ff869bf0069e970d6baeb5bba9b79');
  });


  it('produces the expected result for ShortMsgKAT_384 1424', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f1c528cf7739874707d4d8ad5b98f7c77169de0b57188df233b2dc8a5b31eda5db4291dd9f68e6bad37b8d7f6c9c0044b3bf74bbc3d7d1798e138709b0d75e7c593d3cccdc1b20c7174b4e692add820ace262d45ccfae2077e878796347168060a162ecca8c38c1a88350bd63bb539134f700fd4addd5959e255337daa06bc86358fabcbefdfb5bc889783d843c08aadc6c4f6c36f65f156e851c9a0f917e4a367b5ad93d874812a1de6a7b93cd53ad97232', 'hex'));
    assert.equal(instance.digest('hex'), '60071a7e2ecfaf3b5b2e84a677fb98e44bd3725addeec5c37ec62052d57af7b687a063fd39c8f6e86f79d97f246c757b');
  });


  it('produces the expected result for ShortMsgKAT_384 1432', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('9d9f3a7ecd51b41f6572fd0d0881e30390dfb780991dae7db3b47619134718e6f987810e542619dfaa7b505c76b7350c6432d8bf1cfebdf1069b90a35f0d04cbdf130b0dfc7875f4a4e62cdb8e525aadd7ce842520a482ac18f09442d78305fe85a74e39e760a4837482ed2f437dd13b2ec1042afcf9decdc3e877e50ff4106ad10a525230d11920324a81094da31deab6476aa42f20c84843cfc1c58545ee80352bdd3740dd6a16792ae2d86f11641bb717c2', 'hex'));
    assert.equal(instance.digest('hex'), 'eb929023d66ac20f11bf68ebc43069d27f35077a68d21fab30854ffe53cbd784d7b25776d9f266f106433751e6c38a68');
  });


  it('produces the expected result for ShortMsgKAT_384 1440', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5179888724819fbad3afa927d3577796660e6a81c52d98e9303261d5a4a83232f6f758934d50aa83ff9e20a5926dfebaac49529d006eb923c5ae5048ed544ec471ed7191edf46363383824f915769b3e688094c682b02151e5ee01e510b431c8865aff8b6b6f2f59cb6d129da79e97c6d2b8fa6c6da3f603199d2d1bcab547682a81cd6cf65f6551121391d78bcc23b5bd0e922ec6d8bf97c952e84dd28aef909aba31edb903b28fbfc33b7703cd996215a11238', 'hex'));
    assert.equal(instance.digest('hex'), '6a51975c9ffee8b94135a3bda954dfe14e6267dbc9253f0bb04515a6b7745aec611b7b66ae57d3fd3770aed4f412ec84');
  });


  it('produces the expected result for ShortMsgKAT_384 1448', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('576ef3520d30b7a4899b8c0d5e359e45c5189add100e43be429a02fb3de5ff4f8fd0e79d9663acca72cd29c94582b19292a557c5b1315297d168fbb54e9e2ecd13809c2b5fce998edc6570545e1499dbe7fb74d47cd7f35823b212b05bf3f5a79caa34224fdd670d335fcb106f5d92c3946f44d3afcbae2e41ac554d8e6759f332b76be89a0324aa12c5482d1ea3ee89ded4936f3e3c080436f539fa137e74c6d3389bdf5a45074c47bc7b20b0948407a66d855e2f', 'hex'));
    assert.equal(instance.digest('hex'), 'd2dc49c04553f09a8c3d7db51de890a71dbc10fe4e910c68ba5ca5ddb313d0a68375275c291b4deb41f45e35a558bf77');
  });


  it('produces the expected result for ShortMsgKAT_384 1456', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0df2152fa4f4357c8741529dd77e783925d3d76e95bafa2b542a2c33f3d1d117d159cf473f82310356fee4c90a9e505e70f8f24859656368ba09381fa245eb6c3d763f3093f0c89b972e66b53d59406d9f01aea07f8b3b615cac4ee4d05f542e7d0dab45d67ccccd3a606ccbeb31ea1fa7005ba07176e60dab7d78f6810ef086f42f08e595f0ec217372b98970cc6321576d92ce38f7c397a403bada1548d205c343ac09deca86325373c3b76d9f32028fea8eb32515', 'hex'));
    assert.equal(instance.digest('hex'), 'aab5747d7dcc77bacde81a58c37764f8f41e08f2413b40d4e6c792cefe52e4e2a406338752d7ad1269e7d5284fcb7400');
  });


  it('produces the expected result for ShortMsgKAT_384 1464', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3e15350d87d6ebb5c8ad99d42515cfe17980933c7a8f6b8bbbf0a63728cefaad2052623c0bd5931839112a48633fb3c2004e0749c87a41b26a8b48945539d1ff41a4b269462fd199bfecd45374756f55a9116e92093ac99451aefb2af9fd32d6d7f5fbc7f7a540d5097c096ebc3b3a721541de073a1cc02f7fb0fb1b9327fb0b1218ca49c9487ab5396622a13ae546c97abdef6b56380dda7012a8384091b6656d0ab272d363cea78163ff765cdd13ab1738b940d16cae', 'hex'));
    assert.equal(instance.digest('hex'), '72b526d74cf9521e00d9d6bcdfc1fb1760c6acdf2dd75171305db45d38098ff23c5b8ed3c21da73ffb8df7217ce46dbb');
  });


  it('produces the expected result for ShortMsgKAT_384 1472', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c38d6b0b757cb552be40940ece0009ef3b0b59307c1451686f1a22702922800d58bce7a636c1727ee547c01b214779e898fc0e560f8ae7f61bef4d75eaa696b921fd6b735d171535e9edd267c192b99880c87997711002009095d8a7a437e258104a41a505e5ef71e5613ddd2008195f0c574e6ba3fe40099cfa116e5f1a2fa8a6da04badcb4e2d5d0de31fdc4800891c45781a0aac7c907b56d631fca5ce8b2cde620d11d1777ed9fa603541de794ddc5758fcd5fad78c0', 'hex'));
    assert.equal(instance.digest('hex'), '800cfa48b4647f7783bcd41b2c0f7f7d4d0faa72481a2a42c4e9c43c9f62e27acb4ddb73e318061d396059aade4145e2');
  });


  it('produces the expected result for ShortMsgKAT_384 1480', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8d2de3f0b37a6385c90739805b170057f091cd0c7a0bc951540f26a5a75b3e694631bb64c7635eed316f51318e9d8de13c70a2aba04a14836855f35e480528b776d0a1e8a23b547c8b8d6a0d09b241d3be9377160cca4e6793d00a515dc2992cb7fc741daca171431da99cce6f7789f129e2ac5cf65b40d703035cd2185bb936c82002daf8cbc27a7a9e554b06196630446a6f0a14ba155ed26d95bd627b7205c072d02b60db0fd7e49ea058c2e0ba202daff0de91e845cf79', 'hex'));
    assert.equal(instance.digest('hex'), 'f782ff0de7d5442d562cc500256ee4b5a00e885c8cd86009c53f337ae003854de4b89794281a64375e3f696a415b95d2');
  });


  it('produces the expected result for ShortMsgKAT_384 1488', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c464bbdad275c50dcd983b65ad1019b9ff85a1e71c807f3204bb2c921dc31fbcd8c5fc45868ae9ef85b6c9b83bba2a5a822201ed68586ec5ec27fb2857a5d1a2d09d09115f22dcc39fe61f5e1ba0ff6e8b4acb4c6da748be7f3f0839739394ff7fa8e39f7f7e84a33c3866875c01bcb1263c9405d91908e9e0b50e7459fabb63d8c6bbb73d8e3483c099b55bc30ff092ff68b6adedfd477d63570c9f5515847f36e24ba0b705557130cec57ebad1d0b31a378e91894ee26e3a04', 'hex'));
    assert.equal(instance.digest('hex'), 'de34506ad69085c6357d62b0b127ce66e25e8ec5faca5ba898c75ca19e9af24f02406716c61a71d62bdc28d718c125df');
  });


  it('produces the expected result for ShortMsgKAT_384 1496', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8b8d68bb8a75732fe272815a68a1c9c5aa31b41dedc8493e76525d1d013d33cebd9e21a5bb95db2616976a8c07fcf411f5f6bc6f7e0b57aca78cc2790a6f9b898858ac9c79b165ff24e66677531e39f572be5d81eb3264524181115f32780257bfb9aeec6af12af28e587cac068a1a2953b59ad680f4c245b2e3ec36f59940d37e1d3db38e13edb29b5c0f404f6ff87f80fc8be7a225ff22fbb9c8b6b1d7330c57840d24bc75b06b80d30dad6806544d510af6c4785e823ac3e0b8', 'hex'));
    assert.equal(instance.digest('hex'), '6f4feedba0abb4dbf824302250e6b668cbffdca0b8c338236fe02a8779d8aca391d8d116b2bc43d40e736096470a0bc0');
  });


  it('produces the expected result for ShortMsgKAT_384 1504', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6b018710446f368e7421f1bc0ccf562d9c1843846bc8d98d1c9bf7d9d6fcb48bfc3bf83b36d44c4fa93430af75cd190bde36a7f92f867f58a803900df8018150384d85d82132f123006ac2aeba58e02a037fe6afbd65eca7c44977dd3dc74f48b6e7a1bfd5cc4dcf24e4d52e92bd4455848e4928b0eac8b7476fe3cc03e862aa4dff4470dbfed6de48e410f25096487ecfc32a27277f3f5023b2725ade461b1355889554a8836c9cf53bd767f5737d55184eea1ab3f53edd0976c485', 'hex'));
    assert.equal(instance.digest('hex'), 'a040ce1cbb996723cbcdbdff7a6a5f69289737609534c5af36f6c420a6adfd570794079509d07e62566c58062d8186db');
  });


  it('produces the expected result for ShortMsgKAT_384 1512', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c9534a24714bd4be37c88a3da1082eda7cabd154c309d7bd670dccd95aa535594463058a29f79031d6ecaa9f675d1211e9359be82669a79c855ea8d89dd38c2c761ddd0ec0ce9e97597432e9a1beae062cdd71edfdfd464119be9e69d18a7a7fd7ce0e2106f0c8b0abf4715e2ca48ef9f454dc203c96656653b727083513f8efb86e49c513bb758b3b052fe21f1c05bb33c37129d6cc81f1aef6adc45b0e8827a830fe545cf57d0955802c117d23ccb55ea28f95c0d8c2f9c5a242b33f', 'hex'));
    assert.equal(instance.digest('hex'), 'ff13c29c5e0d746ca27aee38b6b49a13c1b3d70e62875443bcfc22a22e75031e60d68a917e3ae1d42d374d44cdc9f4c8');
  });


  it('produces the expected result for ShortMsgKAT_384 1520', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('07906c87297b867abf4576e9f3cc7f82f22b154afcbf293b9319f1b0584da6a40c27b32e0b1b7f412c4f1b82480e70a9235b12ec27090a5a33175a2bb28d8adc475cefe33f7803f8ce27967217381f02e67a3b4f84a71f1c5228e0c2ad971373f6f672624fcea8d1a9f85170fad30fa0bbd25035c3b41a6175d467998bd1215f6f3866f53847f9cf68ef3e2fbb54bc994de2302b829c5eea68ec441fcbafd7d16ae4fe9fff98bf00e5bc2ad54dd91ff9fda4dd77b6c754a91955d1fbaad0', 'hex'));
    assert.equal(instance.digest('hex'), '3a4418a16896adab7c6dc783a0fc9f8d7e949937be1d68b5ef02574b2b0c9ba902fb9c15ed64fc825d598aafc1b26347');
  });


  it('produces the expected result for ShortMsgKAT_384 1528', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('588e94b9054abc2189df69b8ba34341b77cdd528e7860e5defcaa79b0c9a452ad4b82aa306be84536eb7cedcbe058d7b84a6aef826b028b8a0271b69ac3605a9635ea9f5ea0aa700f3eb7835bc54611b922964300c953efe7491e3677c2cebe0822e956cd16433b02c68c4a23252c3f9e151a416b4963257b783e038f6b4d5c9f110f871652c7a649a7bcedcbccc6f2d0725bb903cc196ba76c76aa9f10a190b1d1168993baa9ffc96a1655216773458bec72b0e39c9f2c121378feab4e76a', 'hex'));
    assert.equal(instance.digest('hex'), '17f84411e60f6bd856d09c0acf314e7546466ab0c1616284d2240d22bccc7240e5a2d656d35257ab49781bdabef6fcf9');
  });


  it('produces the expected result for ShortMsgKAT_384 1536', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('08959a7e4baae874928813364071194e2939772f20db7c3157078987c557c2a6d5abe68d520eef3dc491692e1e21bcd880adebf63bb4213b50897fa005256ed41b5690f78f52855c8d9168a4b666fce2da2b456d7a7e7c17ab5f2fb1ee90b79e698712e963715983fd07641ae4b4e9dc73203fac1ae11fa1f8c7941fcc82eab247addb56e2638447e9d609e610b60ce086656aaebf1da3c8a231d7d94e2fd0afe46b391ff14a72eaeb3f44ad4df85866def43d4781a0b3578bc996c87970b132', 'hex'));
    assert.equal(instance.digest('hex'), 'e577f79b0e05355b8f63ec1e639bc5a51a72bbb0abafe76d3133dec4da9bef9a361f3e3c0adb4c07e2757fe1d4790b9a');
  });


  it('produces the expected result for ShortMsgKAT_384 1544', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('cb2a234f45e2ecd5863895a451d389a369aab99cfef0d5c9ffca1e6e63f763b5c14fb9b478313c8e8c0efeb3ac9500cf5fd93791b789e67eac12fd038e2547cc8e0fc9db591f33a1e4907c64a922dda23ec9827310b306098554a4a78f050262db5b545b159e1ff1dca6eb734b872343b842c57eafcfda8405eedbb48ef32e99696d135979235c3a05364e371c2d76f1902f1d83146df9495c0a6c57d7bf9ee77e80f9787aee27be1fe126cdc9ef893a4a7dcbbc367e40fe4e1ee90b42ea25af01', 'hex'));
    assert.equal(instance.digest('hex'), 'f78106f10e6c1f1ca5190fe541345145ee25bc51d3c1cbaaa04c0db2a3ba2584ddd30f3a889b94bbcb9573cd9417574c');
  });


  it('produces the expected result for ShortMsgKAT_384 1552', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d16beadf02ab1d4dc6f88b8c4554c51e866df830b89c06e786a5f8757e8909310af51c840efe8d20b35331f4355d80f73295974653ddd620cdde4730fb6c8d0d2dcb2b45d92d4fbdb567c0a3e86bd1a8a795af26fbf29fc6c65941cddb090ff7cd230ac5268ab4606fccba9eded0a2b5d014ee0c34f0b2881ac036e24e151be89eeb6cd9a7a790afccff234d7cb11b99ebf58cd0c589f20bdac4f9f0e28f75e3e04e5b3debce607a496d848d67fa7b49132c71b878fd5557e082a18eca1fbda94d4b', 'hex'));
    assert.equal(instance.digest('hex'), '6f42faf87da65516fc0cca70a385f26ebdaa94df64aa5e7a3119ac18c6214e3d0b61158fbd6c2487e0abfb0c6c85ef87');
  });


  it('produces the expected result for ShortMsgKAT_384 1560', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8f65f6bc59a85705016e2bae7fe57980de3127e5ab275f573d334f73f8603106ec3553016608ef2dd6e69b24be0b7113bf6a760ba6e9ce1c48f9e186012cf96a1d4849d75df5bb8315387fd78e9e153e76f8ba7ec6c8849810f59fb4bb9b004318210b37f1299526866f44059e017e22e96cbe418699d014c6ea01c9f0038b10299884dbec3199bb05adc94e955a1533219c1115fed0e5f21228b071f40dd57c4240d98d37b73e412fe0fa4703120d7c0c67972ed233e5deb300a22605472fa3a3ba86', 'hex'));
    assert.equal(instance.digest('hex'), '82fc97ee34a8fcc276ae1c8130555cc2d339aa6cb34003488378855529f9ee3af819ec104dd2de300ab7dbc04b2b4017');
  });


  it('produces the expected result for ShortMsgKAT_384 1568', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('84891e52e0d451813210c3fd635b39a03a6b7a7317b221a7abc270dfa946c42669aacbbbdf801e1584f330e28c729847ea14152bd637b3d0f2b38b4bd5bf9c791c58806281103a3eabbaede5e711e539e6a8b2cf297cf351c078b4fa8f7f35cf61bebf8814bf248a01d41e86c5715ea40c63f7375379a7eb1d78f27622fb468ab784aaaba4e534a6dfd1df6fa15511341e725ed2e87f98737ccb7b6a6dfae416477472b046bf1811187d151bfa9f7b2bf9acdb23a3be507cdf14cfdf517d2cb5fb9e4ab6', 'hex'));
    assert.equal(instance.digest('hex'), '75d140be47e116211f4f668e05add36c83b3e481df9f28064a41898335d97c805471214e29c0b849875845c9b8de25e3');
  });


  it('produces the expected result for ShortMsgKAT_384 1576', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fdd7a9433a3b4afabd7a3a5e3457e56debf78e84b7a0b0ca0e8c6d53bd0c2dae31b2700c6128334f43981be3b213b1d7a118d59c7e6b6493a86f866a1635c12859cfb9ad17460a77b4522a5c1883c3d6acc86e6162667ec414e9a104aa892053a2b1d72165a855bacd8faf8034a5dd9b716f47a0818c09bb6baf22aa503c06b4ca261f557761989d2afbd88b6a678ad128af68672107d0f1fc73c5ca740459297b3292b281e93bceb761bde7221c3a55708e5ec84472cddcaa84ecf23723cc0991355c6280', 'hex'));
    assert.equal(instance.digest('hex'), '1a04cd93747ca583a58ab4a8c7c8c7a33f025ede1b2dd080e5af0c4dc63c8715e436dd57ff7f401decef813f330d6588');
  });


  it('produces the expected result for ShortMsgKAT_384 1584', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('70a40bfbef92277a1aad72f6b79d0177197c4ebd432668cfec05d099accb651062b5dff156c0b27336687a94b26679cfdd9daf7ad204338dd9c4d14114033a5c225bd11f217b5f4732da167ee3f939262d4043fc9cba92303b7b5e96aea12adda64859df4b86e9ee0b58e39091e6b188b408ac94e1294a8911245ee361e60e601eff58d1d37639f3753bec80ebb4efde25817436076623fc65415fe51d1b0280366d12c554d86743f3c3b6572e400361a60726131441ba493a83fbe9afda90f7af1ae717238d', 'hex'));
    assert.equal(instance.digest('hex'), 'fb0626f2b189679dd998bc18f30df82d0907b62aa77c8669e22b53860e3988503d884884163a561739254ca13929b69b');
  });


  it('produces the expected result for ShortMsgKAT_384 1592', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('74356e449f4bf8644f77b14f4d67cb6bd9c1f5ae357621d5b8147e562b65c66585caf2e491b48529a01a34d226d436959153815380d5689e30b35357cdac6e08d3f2b0e88e200600d62bd9f5eaf488df86a4470ea227006182e44809009868c4c280c43d7d64a5268fa719074960087b3a6abc837882f882c837834535929389a12b2c78187e2ea07ef8b8eef27dc85002c3ae35f1a50bee6a1c48ba7e175f3316670b27983472aa6a61eed0a683a39ee323080620ea44a9f74411ae5ce99030528f9ab49c79f2', 'hex'));
    assert.equal(instance.digest('hex'), 'cc2ef9602f80d0734295c7c158ec366608cf60a423d0836644b60831a94e7eaf994c81f19174fd6ca75bb246bbcca200');
  });


  it('produces the expected result for ShortMsgKAT_384 1600', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8c3798e51bc68482d7337d3abb75dc9ffe860714a9ad73551e120059860dde24ab87327222b64cf774415a70f724cdf270de3fe47dda07b61c9ef2a3551f45a5584860248fabde676e1cd75f6355aa3eaeabe3b51dc813d9fb2eaa4f0f1d9f834d7cad9c7c695ae84b329385bc0bef895b9f1edf44a03d4b410cc23a79a6b62e4f346a5e8dd851c2857995ddbf5b2d717aeb847310e1f6a46ac3d26a7f9b44985af656d2b7c9406e8a9e8f47dcb4ef6b83caacf9aefb6118bfcff7e44bef6937ebddc89186839b77', 'hex'));
    assert.equal(instance.digest('hex'), 'b5a7160112e0825a7c03643beb98b1fc2549b81f01c3c4271dff99be57d472a7fad133808d7d2d414d6011e9a2e8dfec');
  });


  it('produces the expected result for ShortMsgKAT_384 1608', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('fa56bf730c4f8395875189c10c4fb251605757a8fecc31f9737e3c2503b02608e6731e85d7a38393c67de516b85304824bfb135e33bf22b3a23b913bf6acd2b7ab85198b8187b2bcd454d5e3318cacb32fd6261c31ae7f6c54ef6a7a2a4c9f3ecb81ce3555d4f0ad466dd4c108a90399d70041997c3b25345a9653f3c9a6711ab1b91d6a9d2216442da2c973cbd685ee7643bfd77327a2f7ae9cb283620a08716dfb462e5c1d65432ca9d56a90e811443cd1ecb8f0de179c9cb48ba4f6fec360c66f252f6e64edc96b', 'hex'));
    assert.equal(instance.digest('hex'), 'e7b3118d7fca9d294f596d820f468cd9027920777a41a706ede877cbeb9517f223b268c5e805a374051822692e9ab44b');
  });


  it('produces the expected result for ShortMsgKAT_384 1616', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b6134f9c3e91dd8000740d009dd806240811d51ab1546a974bcb18d344642baa5cd5903af84d58ec5ba17301d5ec0f10ccd0509cbb3fd3fff9172d193af0f782252fd1338c7244d40e0e42362275b22d01c4c3389f19dd69bdf958ebe28e31a4ffe2b5f18a87831cfb7095f58a87c9fa21db72ba269379b2dc2384b3da953c7925761fed324620acea435e52b424a7723f6a2357374157a34cd8252351c25a1b232826cefe1bd3e70ffc15a31e7c0598219d7f00436294d11891b82497bc78aa5363892a2495df8c1eef', 'hex'));
    assert.equal(instance.digest('hex'), 'c3fa6c9d0ff231198aeca80ea428ac4b32c481d390ce4a90d0f65ff7d58f696c1faada1673d7e2d161462c95c2e2a310');
  });


  it('produces the expected result for ShortMsgKAT_384 1624', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c941cdb9c28ab0a791f2e5c8e8bb52850626aa89205bec3a7e22682313d198b1fa33fc7295381354858758ae6c8ec6fac3245c6e454d16fa2f51c4166fab51df272858f2d603770c40987f64442d487af49cd5c3991ce858ea2a60dab6a65a34414965933973ac2457089e359160b7cdedc42f29e10a91921785f6b7224ee0b349393cdcff6151b50b377d609559923d0984cda6000829b916ab6896693ef6a2199b3c22f7dc5500a15b8258420e314c222bc000bc4e5413e6dd82c993f8330f5c6d1be4bc79f08a1a0a46', 'hex'));
    assert.equal(instance.digest('hex'), 'c4bd1157c093acb27bd3bd7f444f836bfcba0dafe11675104c6437e5981442be999c860dd6e1b75faf6a553e907b61ee');
  });


  it('produces the expected result for ShortMsgKAT_384 1632', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('4499efffac4bcea52747efd1e4f20b73e48758be915c88a1ffe5299b0b005837a46b2f20a9cb3c6e64a9e3c564a27c0f1c6ad1960373036ec5bfe1a8fc6a435c2185ed0f114c50e8b3e4c7ed96b06a036819c9463e864a58d6286f785e32a804443a56af0b4df6abc57ed5c2b185ddee8489ea080deeee66aa33c2e6dab36251c402682b6824821f998c32163164298e1fafd31babbcffb594c91888c6219079d907fdb438ed89529d6d96212fd55abe20399dbefd342248507436931cdead496eb6e4a80358acc78647d043', 'hex'));
    assert.equal(instance.digest('hex'), 'd099f3c8052caa2cf9751b1ed2d472c21fed667892bc1c417600a4c93effe88f1b17b36d37e4d26b9cd65acb13a6db6f');
  });


  it('produces the expected result for ShortMsgKAT_384 1640', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('eecbb8fdfa4da62170fd06727f697d81f83f601ff61e478105d3cb7502f2c89bf3e8f56edd469d049807a38882a7eefbc85fc9a950952e9fa84b8afebd3ce782d4da598002827b1eb98882ea1f0a8f7aa9ce013a6e9bc462fb66c8d4a18da21401e1b93356eb12f3725b6db1684f2300a98b9a119e5d27ff704affb618e12708e77e6e5f34139a5a41131fd1d6336c272a8fc37080f041c71341bee6ab550cb4a20a6ddb6a8e0299f2b14bc730c54b8b1c1c487b494bdccfd3a53535ab2f231590bf2c4062fd2ad58f906a2d0d', 'hex'));
    assert.equal(instance.digest('hex'), '7a9fe13fe3318121babb340a3b045dc89d1be2d0ec05802c9254fec39efcde163c514dcdba3ff93f9b097486c2012385');
  });


  it('produces the expected result for ShortMsgKAT_384 1648', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e64f3e4ace5c8418d65fec2bc5d2a303dd458034736e3b0df719098be7a206deaf52d6ba82316caf330ef852375188cde2b39cc94aa449578a7e2a8e3f5a9d68e816b8d16889fbc0ebf0939d04f63033ae9ae2bdab73b88c26d6bd25ee460ee1ef58fb0afa92cc539f8c76d3d097e7a6a63ebb9b5887edf3cf076028c5bbd5b9db3211371ad3fe121d4e9bf44229f4e1ecf5a0f9f0eba4d5ceb72878ab22c3f0eb5a625323ac66f7061f4a81fac834471e0c59553f108475fe290d43e6a055ae3ee46fb67422f814a68c4be3e8c9', 'hex'));
    assert.equal(instance.digest('hex'), '8aeede5d6e2f9f1c7a6644a8da0f93574df8ca33b2ed9d364615e1f9cf1a801315410733881ce0dad2f6fb5a916a97e1');
  });


  it('produces the expected result for ShortMsgKAT_384 1656', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d2cb2d733033f9e91395312808383cc4f0ca974e87ec68400d52e96b3fa6984ac58d9ad0938dde5a973008d818c49607d9de2284e7618f1b8aed8372fbd52ed54557af4220fac09dfa8443011699b97d743f8f2b1aef3537ebb45dcc9e13dfb438428ee190a4efdb3caeb7f3933117bf63abdc7e57beb4171c7e1ad260ab0587806c4d137b6316b50abc9cce0dff3acada47bbb86be777e617bbe578ff4519844db360e0a96c6701290e76bb95d26f0f804c8a4f2717eac4e7de9f2cff3bbc55a17e776c0d02856032a6cd10ad2838', 'hex'));
    assert.equal(instance.digest('hex'), '29e62d8c1b71f826544a0cbfcdd99cf8aa1c97e153063120d295edf69e2ecb5a2783c66760d0f87bf944516824ccfcb1');
  });


  it('produces the expected result for ShortMsgKAT_384 1664', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('f2998955613dd414cc111df5ce30a995bb792e260b0e37a5b1d942fe90171a4ac2f66d4928d7ad377f4d0554cbf4c523d21f6e5f379d6f4b028cdcb9b1758d3b39663242ff3cb6ede6a36a6f05db3bc41e0d861b384b6dec58bb096d0a422fd542df175e1be1571fb52ae66f2d86a2f6824a8cfaacbac4a7492ad0433eeb15454af8f312b3b2a577750e3efbd370e8a8cac1582581971fba3ba4bd0d76e718dacf8433d33a59d287f8cc92234e7a271041b526e389efb0e40b6a18b3aaf658e82ed1c78631fd23b4c3eb27c3faec8685', 'hex'));
    assert.equal(instance.digest('hex'), 'eb2f1bf2d9ee857b189318dfaf49dc3fad79501189ac9b5765dfb234ec4a62f0b0e34e7ac3f494d6f05c7bb86ae5cda2');
  });


  it('produces the expected result for ShortMsgKAT_384 1672', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('447797e2899b72a356ba55bf4df3acca6cdb1041eb477bd1834a9f9acbc340a294d729f2f97df3a610be0ff15edb9c6d5db41644b9874360140fc64f52aa03f0286c8a640670067a84e017926a70438db1bb361defee7317021425f8821def26d1efd77fc853b818545d055adc9284796e583c76e6fe74c9ac2587aa46aa8f8804f2feb5836cc4b3ababab8429a5783e17d5999f32242eb59ef30cd7adabc16d72dbdb097623047c98989f88d14eaf02a7212be16ec2d07981aaa99949ddf89ecd90333a77bc4e1988a82abf7c7caf3291', 'hex'));
    assert.equal(instance.digest('hex'), '2a9cf2fd012b025616478cef6971b6f9e494a63aab5f53310dde70fc6ed27f1e2d7804aeb8d206f641a73e054da620e6');
  });


  it('produces the expected result for ShortMsgKAT_384 1680', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('9f2c18ade9b380c784e170fb763e9aa205f64303067eb1bcea93df5dac4bf5a2e00b78195f808df24fc76e26cb7be31dc35f0844cded1567bba29858cffc97fb29010331b01d6a3fb3159cc1b973d255da9843e34a0a4061cabdb9ed37f241bfabb3c20d32743f4026b59a4ccc385a2301f83c0b0a190b0f2d01acb8f0d41111e10f2f4e149379275599a52dc089b35fdd5234b0cfb7b6d8aebd563ca1fa653c5c021dfd6f5920e6f18bfafdbecbf0ab00281333ed50b9a999549c1c8f8c63d7626c48322e9791d5ff72294049bde91e73f8', 'hex'));
    assert.equal(instance.digest('hex'), '5f8e2de742036b6ac4a7d8987b47c4c7a1ccb7239e1b3eefd1116d6392c79177d68c66221f31d0faed9134429b89beea');
  });


  it('produces the expected result for ShortMsgKAT_384 1688', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('ae159f3fa33619002ae6bcce8cbbdd7d28e5ed9d61534595c4c9f43c402a9bb31f3b301cbfd4a43ce4c24cd5c9849cc6259eca90e2a79e01ffbac07ba0e147fa42676a1d668570e0396387b5bcd599e8e66aaed1b8a191c5a47547f61373021fa6deadcb55363d233c24440f2c73dbb519f7c9fa5a8962efd5f6252c0407f190dfefad707f3c7007d69ff36b8489a5b6b7c557e79dd4f50c06511f599f56c896b35c917b63ba35c6ff8092baf7d1658e77fc95d8a6a43eeb4c01f33f03877f92774be89c1114dd531c011e53a34dc248a2f0e6', 'hex'));
    assert.equal(instance.digest('hex'), 'b0b1f4058417516a5c5a9683a5d72b489e6ad42273d591791d2cda7360a4008e86c8899369946f7abfe29bf92c9ca965');
  });


  it('produces the expected result for ShortMsgKAT_384 1696', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3b8e97c5ffc2d6a40fa7de7fcefc90f3b12c940e7ab415321e29ee692dfac799b009c99dcddb708fce5a178c5c35ee2b8617143edc4c40b4d313661f49abdd93cea79d117518805496fe6acf292c4c2a1f76b403a97d7c399daf85b46ad84e16246c67d6836757bde336c290d5d401e6c1386ab32797af6bb251e9b2d8fe754c47482b72e0b394eab76916126fd68ea7d65eb93d59f5b4c5ac40f7c3b37e7f3694f29424c24af8c8f0ef59cd9dbf1d28e0e10f799a6f78cad1d45b9db3d7dee4a7059abe99182714983b9c9d44d7f5643596d4f3', 'hex'));
    assert.equal(instance.digest('hex'), '9172aad6c15b4dcd79bbd84fad0601119d8b4e3afed17b594ff38424157985ee27b65826b9905486e767e85aa031e07b');
  });


  it('produces the expected result for ShortMsgKAT_384 1704', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3434ec31b10fafdbfeec0dd6bd94e80f7ba9dca19ef075f7eb017512af66d6a4bcf7d16ba0819a1892a6372f9b35bcc7ca8155ee19e8428bc22d214856ed5fa9374c3c09bde169602cc219679f65a1566fc7316f4cc3b631a18fb4449fa6afa16a3db2bc4212eff539c67cf184680826535589c7111d73bffce431b4c40492e763d9279560aaa38eb2dc14a212d723f994a1fe656ff4dd14551ce4e7c621b2aa5604a10001b2878a897a28a08095c325e10a26d2fb1a75bfd64c250309bb55a44f23bbac0d5516a1c687d3b41ef2fbbf9cc56d4739', 'hex'));
    assert.equal(instance.digest('hex'), 'bafbb3321c4798548f5dd983eac1e16e1f3ef2ba5c9d69a340f6cabc9c7fe9f1fd95a692b7387342304945674d9d2e4a');
  });


  it('produces the expected result for ShortMsgKAT_384 1712', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7c7953d81c8d208fd1c97681d48f49dd003456de60475b84070ef4847c333b74575b1fc8d2a186964485a3b8634feaa3595aaa1a2f4595a7d6b6153563dee31bbac443c8a33eed6d5d956a980a68366c2527b550ee950250dfb691eacbd5d56ae14b970668be174c89df2fea43ae52f13142639c884fd62a3683c0c3792f0f24ab1318bcb27e21f4737fab62c77ea38bc8fd1cf41f7dab64c13febe7152bf5bb7ab5a78f5346d43cc741cb6f72b7b8980f268b68bf62abdfb1577a52438fe14b591498cc95f071228460c7c5d5ceb4a7bde588e7f21c', 'hex'));
    assert.equal(instance.digest('hex'), 'a055e0a9c4575cd4d7ad84a240176f21ed68f484a269e0c9effb6fa93746e31f64b0b90c513d2b57ec78e9e5ba3ba99c');
  });


  it('produces the expected result for ShortMsgKAT_384 1720', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7a6a4f4fdc59a1d223381ae5af498d74b7252ecf59e389e49130c7eaee626e7bd9897effd92017f4ccde66b0440462cdedfd352d8153e6a4c8d7a0812f701cc737b5178c2556f07111200eb627dbc299caa792dfa58f35935299fa3a3519e9b03166dffa159103ffa35e8577f7c0a86c6b46fe13db8e2cdd9dcfba85bdddcce0a7a8e155f81f712d8e9fe646153d3d22c811bd39f830433b2213dd46301941b59293fd0a33e2b63adbd95239bc01315c46fdb678875b3c81e053a40f581cfbec24a1404b1671a1b88a6d06120229518fb13a74ca0ac5ae', 'hex'));
    assert.equal(instance.digest('hex'), '788d19ad68d1b26cb0078389b45fb18b3da35a57a1ec914273158ead43749bf1ab49b1a68d4831ce193f5852d20fd96c');
  });


  it('produces the expected result for ShortMsgKAT_384 1728', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d9faa14cebe9b7de551b6c0765409a33938562013b5e8e0e1e0a6418df7399d0a6a771fb81c3ca9bd3bb8e2951b0bc792525a294ebd1083688806fe5e7f1e17fd4e3a41d00c89e8fcf4a363caedb1acb558e3d562f1302b3d83bb886ed27b76033798131dab05b4217381eaaa7ba15ec820bb5c13b516dd640eaec5a27d05fdfca0f35b3a5312146806b4c0275bcd0aaa3b2017f346975db566f9b4d137f4ee10644c2a2da66deeca5342e236495c3c6280528bfd32e90af4cd9bb908f34012b52b4bc56d48cc8a6b59bab014988eabd12e1a0a1c2e170e7', 'hex'));
    assert.equal(instance.digest('hex'), '9c8a4f5be01ad5ae0946ef7e9f5a82287b6344b966ee28bdedfe4bd43d840d232054d5e216716ea4f80b457cbc110d1a');
  });


  it('produces the expected result for ShortMsgKAT_384 1736', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2d8427433d0c61f2d96cfe80cf1e932265a191365c3b61aaa3d6dcc039f6ba2ad52a6a8cc30fc10f705e6b7705105977fa496c1c708a277a124304f1fc40911e7441d1b5e77b951aad7b01fd5db1b377d165b05bbf898042e39660caf8b279fe5229d1a8db86c0999ed65e53d01ccbc4b43173ccf992b3a14586f6ba42f5fe30afa8ae40c5df29966f9346da5f8b35f16a1de3ab6de0f477d8d8660918060e88b9b9e9ca6a4207033b87a812dbf5544d39e4882010f82b6ce005f8e8ff6fe3c3806bc2b73c2b83afb704345629304f9f86358712e9fae3ca3e', 'hex'));
    assert.equal(instance.digest('hex'), 'a29bcb89fd2b89006782088bf9a4ab939eabaff6f4eefc31b01a66b73cdf0b977d945e051d7e9f02f19cf32ad4beba6c');
  });


  it('produces the expected result for ShortMsgKAT_384 1744', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5e19d97887fcaac0387e22c6f803c34a3dacd2604172433f7a8a7a526ca4a2a1271ecfc5d5d7be5ac0d85d921095350dfc65997d443c21c8094e0a3fefd2961bcb94aed03291ae310ccda75d8ace4bc7d89e7d3e5d1650bda5d668b8b50bfc8e608e184f4d3a9a2badc4ff5f07e0c0bc8a9f2e0b2a26fd6d8c550008faaab75fd71af2a424bec9a7cd9d83fad4c8e9319115656a8717d3b523a68ff8004258b9990ed362308461804ba3e3a7e92d8f2ffae5c2fba55ba5a3c27c0a2f71bd711d2fe1799c2adb31b200035481e9ee5c4adf2ab9c0fa50b23975cf', 'hex'));
    assert.equal(instance.digest('hex'), '61d3b13728925646476d67c8d626d2ece69d9b42503fa6a0df2b24a5f2ab0fb7d74c2f1f7f04304c49ac94bd4e93fda4');
  });


  it('produces the expected result for ShortMsgKAT_384 1752', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('c8e976ab4638909387ce3b8d4e510c3230e5690e02c45093b1d297910abc481e56eea0f296f98379dfc9080af69e73b2399d1c143bee80ae1328162ce1ba7f6a8374679b20aacd380eb4e61382c99998704d62701afa914f9a2705cdb065885f50d086c3eb5753700c387118bb142f3e6da1e988dfb31ac75d7368931e45d1391a274b22f83ceb072f9bcabc0b216685bfd789f5023971024b1878a205442522f9ea7d8797a4102a3df41703768251fd5e017c85d1200a464118aa35654e7ca39f3c375b8ef8cbe7534dbc64bc20befb417cf60ec92f63d9ee7397', 'hex'));
    assert.equal(instance.digest('hex'), '589ab9981d9abd1d712d59c6863d850bb1d412d24a967d76cce78ffc998f8c016dd4b115a1bc4dc49248ab5f758c215a');
  });


  it('produces the expected result for ShortMsgKAT_384 1760', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7145fa124b7429a1fc2231237a949ba7201bcc1822d3272de005b682398196c25f7e5cc2f289fbf44415f699cb7fe6757791b1443410234ae061edf623359e2b4e32c19bf88450432dd01caa5eb16a1dc378f391ca5e3c4e5f356728bddd4975db7c890da8bbc84cc73ff244394d0d48954978765e4a00b593f70f2ca082673a261ed88dbcef1127728d8cd89bc2c597e9102ced6010f65fa75a14ebe467fa57ce3bd4948b6867d74a9df5c0ec6f530cbf2ee61ce6f06bc8f2864dff5583776b31df8c7ffcb61428a56bf7bd37188b4a5123bbf338393af46eda85e6', 'hex'));
    assert.equal(instance.digest('hex'), 'b3cc7224a1dd208e739c5528239b8d335a129ee20e59102621180e6b51714e0d60078f4e7328726434ae41ca273515ba');
  });


  it('produces the expected result for ShortMsgKAT_384 1768', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7fdfadcc9d29bad23ae038c6c65cda1aef757221b8872ed3d75ff8df7da0627d266e224e812c39f7983e4558bfd0a1f2bef3feb56ba09120ef762917b9c093867948547aee98600d10d87b20106878a8d22c64378bf634f7f75900c03986b077b0bf8b740a82447b61b99fee5376c5eb6680ec9e3088f0bdd0c56883413d60c1357d3c811950e5890e7600103c916341b80c743c6a852b7b4fb60c3ba21f3bc15b8382437a68454779cf3cd7f9f90ccc8ef28d0b706535b1e4108eb5627bb45d719cb046839aee311ca1abdc8319e050d67972cb35a6b1601b25dbf487', 'hex'));
    assert.equal(instance.digest('hex'), 'd33ad2a71c712a6f8ad9ac923966b4db8c4818c79cc60f8275367d2452cfd2f5542fd1888d64c9e912b92a186842b000');
  });


  it('produces the expected result for ShortMsgKAT_384 1776', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('988638219fd3095421f826f56e4f09e356296b628c3ce6930c9f2e758fd1a80c8273f2f61e4daae65c4f110d3e7ca0965ac7d24e34c0dc4ba2d6ff0bf5bbe93b3585f354d7543cb542a1aa54674d375077f2d360a8f4d42f3db131c3b7ab7306267ba107659864a90c8c909460a73621d1f5d9d3fd95beb19b23db1cb6c0d0fba91d36891529b8bd8263caa1bab56a4affaed44962df096d8d5b1eb845ef31188b3e10f1af811a13f156beb7a288aae593ebd1471b624aa1a7c6adf01e2200b3d72d88a3aed3100c88231e41efc376906f0b580dc895f080fda5741db1cb', 'hex'));
    assert.equal(instance.digest('hex'), 'c12d450a020cde18c24323fb4e3fb23255714b1d4cbf29719f74da5e6151fae901dc21a6680ad159ffb2e7c0aaabdf5b');
  });


  it('produces the expected result for ShortMsgKAT_384 1784', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5aab62756d307a669d146aba988d9074c5a159b3de85151a819b117ca1ff6597f6156e80fdd28c9c3176835164d37da7da11d94e09add770b68a6e081cd22ca0c004bfe7cd283bf43a588da91f509b27a6584c474a4a2f3ee0f1f56447379240a5ab1fb77fdca49b305f07ba86b62756fb9efb4fc225c86845f026ea542076b91a0bc2cdd136e122c659be259d98e5841df4c2f60330d4d8cdee7bf1a0a244524eecc68ff2aef5bf0069c9e87a11c6e519de1a4062a10c83837388f7ef58598a3846f49d499682b683c4a062b421594fafbc1383c943ba83bdef515efcf10d', 'hex'));
    assert.equal(instance.digest('hex'), 'e5b7a9b41fa0cec3252ff95099523dc845c69b670d8dfeba3e4af6dec659c4b2d4b04f5f7062209485a37c542ccbe7e6');
  });


  it('produces the expected result for ShortMsgKAT_384 1792', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('47b8216aa0fbb5d67966f2e82c17c07aa2d6327e96fcd83e3de7333689f3ee79994a1bf45082c4d725ed8d41205cb5bcdf5c341f77facb1da46a5b9b2cbc49eadf786bcd881f371a95fa17df73f606519aea0ff79d5a11427b98ee7f13a5c00637e2854134691059839121fea9abe2cd1bcbbbf27c74caf3678e05bfb1c949897ea01f56ffa4dafbe8644611685c617a3206c7a7036e4ac816799f693dafe7f19f303ce4eba09d21e03610201bfc665b72400a547a1e00fa9b7ad8d84f84b34aef118515e74def11b9188bd1e1f97d9a12c30132ec2806339bdadacda2fd8b78', 'hex'));
    assert.equal(instance.digest('hex'), '5e2ba5382c357b5a1987bdab9a2a0b053eb75ee770e1994e630f24015ab102e482a95a25b68f5de99fe9748fa48ff696');
  });


  it('produces the expected result for ShortMsgKAT_384 1800', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('8cff1f67fe53c098896d9136389bd8881816ccab34862bb67a656e3d98896f3ce6ffd4da73975809fcdf9666760d6e561c55238b205d8049c1cedeef374d1735daa533147bfa960b2cce4a4f254176bb4d1bd1e89654432b8dbe1a135c42115b394b024856a2a83dc85d6782be4b444239567ccec4b184d4548eae3ff6a192f343292ba2e32a0f267f31cc26719eb85245d415fb897ac2da433ee91a99424c9d7f1766a44171d1651001c38fc79294accc68ceb5665d36218454d3ba169ae058a831338c17743603f81ee173bfc0927464f9bd728dee94c6aeab7aae6ee3a627e8', 'hex'));
    assert.equal(instance.digest('hex'), '0467c2b9f02af8ceaf4f8fe88d1de3ee03d78ec26edee0e34b6e7ee49ac357c35a9ae352ff4932d75e0617b8b0c61c80');
  });


  it('produces the expected result for ShortMsgKAT_384 1808', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('eacd07971cff9b9939903f8c1d8cbb5d4db1b548a85d04e037514a583604e787f32992bf2111b97ac5e8a938233552731321522ab5e8583561260b7d13ebeef785b23a41fd8576a6da764a8ed6d822d4957a545d5244756c18aa80e1aad4d1f9c20d259dee1711e2cc8fd013169fb7cc4ce38b362f8e0936ae9198b7e838dcea4f7a5b9429bb3f6bbcf2dc92565e3676c1c5e6eb3dd2a0f86aa23edd3d0891f197447692794b3dfa269611ad97f72b795602b4fdb198f3fd3eb41b415064256e345e8d8c51c555dc8a21904a9b0f1ad0effab7786aac2da3b196507e9f33ca356427', 'hex'));
    assert.equal(instance.digest('hex'), '87f9ecb906c9d8aafa8dc62af858c99609a8e9590ba5bc91a89205de44f06ae7976a9be918aafc9134de9029117152a1');
  });


  it('produces the expected result for ShortMsgKAT_384 1816', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('23ac4e9a42c6ef45c3336ce6dfc2ff7de8884cd23dc912fef0f7756c09d335c189f3ad3a23697abda851a81881a0c8ccafc980ab2c702564c2be15fe4c4b9f10dfb2248d0d0cb2e2887fd4598a1d4acda897944a2ffc580ff92719c95cf2aa42dc584674cb5a9bc5765b9d6ddf5789791d15f8dd925aa12bffafbce60827b490bb7df3dda6f2a143c8bf96abc903d83d59a791e2d62814a89b8080a28060568cf24a80ae61179fe84e0ffad00388178cb6a617d37efd54cc01970a4a41d1a8d3ddce46edbba4ab7c90ad565398d376f431189ce8c1c33e132feae6a8cd17a61c630012', 'hex'));
    assert.equal(instance.digest('hex'), '510cb484b6d4b47a590f6211c7f33592246a2e05a1c69258b6cf9a24c1a3afc2527841ae3fcd552e5103dd24743ac6b3');
  });


  it('produces the expected result for ShortMsgKAT_384 1824', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('0172df732282c9d488669c358e3492260cbe91c95cfbc1e3fea6c4b0ec129b45f242ace09f152fc6234e1bee8aab8cd56e8b486e1dcba9c05407c2f95da8d8f1c0af78ee2ed82a3a79ec0cb0709396ee62aadb84f8a4ee8a7ccca3c1ee84e302a09ea802204afecf04097e67d0f8e8a9d2651126c0a598a37081e42d168b0ae8a71951c524259e4e2054e535b779679bdade566fe55700858618e626b4a0faf895bcce9011504a49e05fd56127eae3d1f8917afb548ecadabda1020111fec9314c413498a360b08640549a22cb23c731ace743252a8227a0d2689d4c6001606678dfb921', 'hex'));
    assert.equal(instance.digest('hex'), '03f3bb45fd70966ac5efd9598c480ed677c86c7cf00b10261ae6790c5279a5e47386f3d31726d9cb619b92a79ccae25c');
  });


  it('produces the expected result for ShortMsgKAT_384 1832', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3875b9240cf3e0a8b59c658540f26a701cf188496e2c2174788b126fd29402d6a75453ba0635284d08835f40051a2a9683dc92afb9383719191231170379ba6f4adc816fecbb0f9c446b785bf520796841e58878b73c58d3ebb097ce4761fdeabe15de2f319dfbaf1742cdeb389559c788131a6793e193856661376c81ce9568da19aa6925b47ffd77a43c7a0e758c37d69254909ff0fbd415ef8eb937bcd49f91468b49974c07dc819abd67395db0e05874ff83dddab895344abd0e7111b2df9e58d76d85ad98106b36295826be04d435615595605e4b4bb824b33c4afeb5e7bb0d19f909', 'hex'));
    assert.equal(instance.digest('hex'), '68a47c7d124e8aea5cfeef7a9d8ca7aa8df6eee6652de3a385231f29bc4b983aec8af2a61329b64bb59a45b77a38e4df');
  });


  it('produces the expected result for ShortMsgKAT_384 1840', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('747cc1a59fefba94a9c75ba866c30dc5c1cb0c0f8e9361d98484956dd5d1a40f6184afbe3dac9f76028d1caeccfbf69199c6ce2b4c092a3f4d2a56fe5a33a00757f4d7dee5dfb0524311a97ae0668a47971b95766e2f6dd48c3f57841f91f04a00ad5ea70f2d479a2620dc5cd78eaab3a3b011719b7e78d19ddf70d9423798af77517ebc55392fcd01fc600d8d466b9e7a7a85bf33f9cc5419e9bd874ddfd60981150ddaf8d7febaa4374f0872a5628d318000311e2f5655365ad4d407c20e5c04df17a222e7deec79c5ab1116d8572f91cd06e1ccc7ced53736fc867fd49ecebe6bf8082e8a', 'hex'));
    assert.equal(instance.digest('hex'), 'dd3bba1b4f8493e0639151d9303835f492606e2db3af34fe65156a642794196d00a6c34a3a5fea66202c3b5a79980a8a');
  });


  it('produces the expected result for ShortMsgKAT_384 1848', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('57af971fccaec97435dc2ec9ef0429bcedc6b647729ea168858a6e49ac1071e706f4a5a645ca14e8c7746d65511620682c906c8b86ec901f3dded4167b3f00b06cbfac6aee3728051b3e5ff10b4f9ed8bd0b8da94303c833755b3ca3aeddf0b54bc8d6632138b5d25bab03d17b3458a9d782108006f5bb7de75b5c0ba854b423d8bb801e701e99dc4feaad59bc1c7112453b04d33ea3635639fb802c73c2b71d58a56bbd671b18fe34ed2e3dca38827d63fdb1d4fb3285405004b2b3e26081a8ff08cd6d2b08f8e7b7e90a2ab1ed7a41b1d0128522c2f8bff56a7fe67969422ce839a9d4608f03', 'hex'));
    assert.equal(instance.digest('hex'), '50d3b02ac7b907b310c1c0105eb47f6dcf3af0e473785daa54d8037a9a3e74a5d1a41d811202f1e3c8a140173d92f60f');
  });


  it('produces the expected result for ShortMsgKAT_384 1856', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('04e16dedc1227902baaf332d3d08923601bdd64f573faa1bb7201918cfe16b1e10151dae875da0c0d63c59c3dd050c4c6a874011b018421afc4623ab0381831b2da2a8ba42c96e4f70864ac44e106f94311051e74c77c1291bf5db9539e69567bf6a11cf6932bbbad33f8946bf5814c066d851633d1a513510039b349939bfd42b858c21827c8ff05f1d09b1b0765dc78a135b5ca4dfba0801bcaddfa175623c8b647eacfb4444b85a44f73890607d06d507a4f8393658788669f6ef4deb58d08c50ca0756d5e2f49d1a7ad73e0f0b3d3b5f090acf622b1878c59133e4a848e05153592ea81c6fbf', 'hex'));
    assert.equal(instance.digest('hex'), 'a6bbae1ff8e00dce34f640cee2cdb5bcfe4382761be36a940e50eec12b5c2a02b2b6be18a7c87a36fd2194c4d243ec38');
  });


  it('produces the expected result for ShortMsgKAT_384 1864', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('7c815c384eee0f288ece27cced52a01603127b079c007378bc5d1e6c5e9e6d1c735723acbbd5801ac49854b2b569d4472d33f40bbb8882956245c366dc3582d71696a97a4e19557e41e54dee482a14229005f93afd2c4a7d8614d10a97a9dfa07f7cd946fa45263063ddd29db8f9e34db60daa32684f0072ea2a9426ecebfa5239fb67f29c18cbaa2af6ed4bf4283936823ac1790164fec5457a9cba7c767ca59392d94cab7448f50eb34e9a93a80027471ce59736f099c886dea1ab4cba4d89f5fc7ae2f21ccd27f611eca4626b2d08dc22382e92c1efb2f6afdc8fdc3d2172604f5035c46b8197d3', 'hex'));
    assert.equal(instance.digest('hex'), '7ed83eb659536b36061773073b148ed2117512372e49e0a3aee48b96353ec936b32688b150c585944d2008f21366b531');
  });


  it('produces the expected result for ShortMsgKAT_384 1872', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('e29d505158dbdd937d9e3d2145658ee6f5992a2fc790f4f608d9cdb44a091d5b94b88e81fac4fdf5c49442f13b911c55886469629551189eaff62488f1a479b7db11a1560e198ddccccf50159093425ff7f1cb8d1d1246d0978764087d6bac257026b090efae8cec5f22b6f21c59ace1ac7386f5b8837ca6a12b6fbf5534dd0560ef05ca78104d3b943ddb220feaec89aa5e692a00f822a2ab9a2fe60350d75e7be16ff2526dc643872502d01f42f188abed0a6e9a6f5fd0d1ce7d5755c9ffa66b0af0b20bd806f08e06156690d81ac811778ca3dac2c249b96002017fce93e507e3b953acf99964b847', 'hex'));
    assert.equal(instance.digest('hex'), '2516e0015ed162073238996d5a03239087e01c2091f7b03637e6c89a758f565e45c908de873e378caa433baf339d0552');
  });


  it('produces the expected result for ShortMsgKAT_384 1880', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d85588696f576e65eca0155f395f0cfacd83f36a99111ed5768df2d116d2121e32357ba4f54ede927f189f297d3a97fad4e9a0f5b41d8d89dd7fe20156799c2b7b6bf9c957ba0d6763f5c3bc5129747bbb53652b49290cff1c87e2cdf2c4b95d8aaee09bc8fbfa6883e62d237885810491bfc101f1d8c636e3d0ede838ad05c207a3df4fad76452979eb99f29afaecedd1c63b8d36cf378454a1bb67a741c77ac6b6b3f95f4f02b64dabc15438613ea49750df42ee90101f115aa9abb9ff64324dde9dabbb01054e1bd6b4bcdc7930a44c2300d87ca78c06924d0323ad7887e46c90e8c4d100acd9eed21e', 'hex'));
    assert.equal(instance.digest('hex'), '6bae42add06c6a20a05d845e7bf391f1eab83e83a710a18527fc03646104e52a8b417cff375753882081f31b6f2295eb');
  });


  it('produces the expected result for ShortMsgKAT_384 1888', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3a12f8508b40c32c74492b66323375dcfe49184c78f73179f3314b79e63376b8ac683f5a51f1534bd729b02b04d002f55cbd8e8fc9b5ec1ea6bbe6a0d0e7431518e6ba45d124035f9d3dce0a8bb7bf1430a9f657e0b4ea9f20eb20c786a58181a1e20a96f1628f8728a13bdf7a4b4b32fc8aa7054cc4881ae7fa19afa65c6c3ee1b3ade3192af42054a8a911b8ec1826865d46d93f1e7c5e2b7813c92a506e53886f3d4701bb93d2a681ad109c845904bb861af8af0646b6e399b38b614051d34f6842563a0f37ec00cb3d865fc5d746c4987de2a65071100883a2a9c7a2bfe1e2dd603d9ea24dc7c5fd06be', 'hex'));
    assert.equal(instance.digest('hex'), '14690ddb5a48fdf382dbc745ad0330c1486124f6ad2e5ae4a850e38c264f99aeae6f156062ab1946dd07afe1700a8294');
  });


  it('produces the expected result for ShortMsgKAT_384 1896', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('1861edce46fa5ad17e1ff1deae084dec580f97d0a67885dfe834b9dfac1ae076742ce9e267512ca51f6df5a455af0c5fd6abf94acea103a3370c354485a7846fb84f3ac7c2904b5b2fbf227002ce512133bb7e1c4e50057bfd1e44db33c7cdb969a99e284b184f50a14b068a1fc5009d9b298dbe92239572a7627aac02abe8f3e3b473417f36d4d2505d16b7577f4526c9d94a270a2dfe450d06da8f6fa956879a0a55cfe99e742ea555ea477ba3e9b44ccd508c375423611af92e55345dc215779b2d5119eba49c71d49b9fe3f1569fa24e5ca3e332d042422a8b8158d3ec66a80012976f31ffdf305f0c9c5e', 'hex'));
    assert.equal(instance.digest('hex'), '9da6652ba890007a01126f0f65970abf3474c7659c6c80b04da2ca592edf0f399601bc0dad10a0dd6e316a286e2338ef');
  });


  it('produces the expected result for ShortMsgKAT_384 1904', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('08d0ffde3a6e4ef65608ea672e4830c12943d7187ccff08f4941cfc13e545f3b9c7ad5eebbe2b01642b486caf855c2c73f58c1e4e3391da8e2d63d96e15fd84953ae5c231911b00ad6050cd7aafdaac9b0f663ae6aab45519d0f5391a541707d479034e73a6ad805ae3598096af078f1393301493d663dd71f83869ca27ba508b7e91e81e128c1716dc3acfe3084b2201e04cf8006617eecf1b640474a5d45cfde9f4d3ef92d6d055b909892194d8a8218db6d8203a84261d200d71473d7488f3427416b6896c137d455f231071cacbc86e0415ab88aec841d96b7b8af41e05bb461a40645bf176601f1e760de5f', 'hex'));
    assert.equal(instance.digest('hex'), 'b94d578de79a437bead951e9aee912540d0139965cf0142f1fd403534959b75d11e0b2463201b10364b905cf9baa57b3');
  });


  it('produces the expected result for ShortMsgKAT_384 1912', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('d782abb72a5be3392757be02d3e45be6e2099d6f000d042c8a543f50ed6ebc055a7f133b0dd8e9bc348536edcaae2e12ec18e8837df7a1b3c87ec46d50c241dee820fd586197552dc20beea50f445a07a38f1768a39e2b2ff05dddedf751f1def612d2e4d810daa3a0cc904516f9a43af660315385178a529e51f8aae141808c8bc5d7b60cac26bb984ac1890d0436ef780426c547e94a7b08f01acbfc4a3825eae04f520a9016f2fb8bf5165ed12736fc71e36a49a73614739eaa3ec834069b1b40f1350c2b3ab885c02c640b9f7686ed5f99527e41cfcd796fe4c256c9173186c226169ff257954ebda81c0e5f99', 'hex'));
    assert.equal(instance.digest('hex'), 'b85f56f69d3be57a1c2aa553f90bc1b089e8f1c561881be64630ea6ba4dd3bd5301512313a18c26df3e97e056a59edcf');
  });


  it('produces the expected result for ShortMsgKAT_384 1920', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5fce8109a358570e40983e1184e541833bb9091e280f258cfb144387b05d190e431cb19baa67273ba0c58abe91308e1844dcd0b3678baa42f335f2fa05267a0240b3c718a5942b3b3e3bfa98a55c25a1466e8d7a603722cb2bbf03afa54cd769a99f310735ee5a05dae2c22d397bd95635f58c48a67f90e1b73aafcd3f82117f0166657838691005b18da6f341d6e90fc1cdb352b30fae45d348294e501b63252de14740f2b85ae5299ddec3172de8b6d0ba219a20a23bb5e10ff434d39db3f583305e9f5c039d98569e377b75a70ab837d1df269b8a4b566f40bb91b577455fd3c356c914fa06b9a7ce24c7317a172d', 'hex'));
    assert.equal(instance.digest('hex'), '7d9508fb795811ea1442db3ecb779cb0494736e7123b252cf88a9a0b50d57cf00b87a6c4fac27f821cd55979d586aa39');
  });


  it('produces the expected result for ShortMsgKAT_384 1928', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6172f1971a6e1e4e6170afbad95d5fec99bf69b24b674bc17dd78011615e502de6f56b86b1a71d3f4348087218ac7b7d09302993be272e4a591968aef18a1262d665610d1070ee91cc8da36e1f841a69a7a682c580e836941d21d909a3afc1f0b963e1ca5ab193e124a1a53df1c587470e5881fb54dae1b0d840f0c8f9d1b04c645ba1041c7d8dbf22030a623aa15638b3d99a2c400ff76f3252079af88d2b37f35ee66c1ad7801a28d3d388ac450b97d5f0f79e4541755356b3b1a5696b023f39ab7ab5f28df4202936bc97393b93bc915cb159ea1bd7a0a414cb4b7a1ac3af68f50d79f0c9c7314e750f7d02faa58bfa', 'hex'));
    assert.equal(instance.digest('hex'), 'afd94b061f354b04d0718326d7e10a6b598ce31cc39c52d265d6cf04e4d9ee75cc200149367600312e7514a62f0f0964');
  });


  it('produces the expected result for ShortMsgKAT_384 1936', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('5668ecd99dfbe215c4118398ac9c9eaf1a1433fab4ccdd3968064752b625ea944731f75d48a27d047d67547f14dd0ffaa55fa5e29f7af0d161d85eafc4f2029b717c918eab9d304543290bdba7158b68020c0ba4e079bc95b5bc0fc044a992b94b4ccd3bd66d0eabb5dbbab904d62e00752c4e3b0091d773bcf4c14b4377da3efff824b1cb2fa01b32d1e46c909e626ed2dae920f4c7dbeb635bc754facbd8d49beba3f23c1c41ccbfcd0ee0c114e69737f5597c0bf1d859f0c767e18002ae8e39c26261ffde2920d3d0baf0e906138696cfe5b7e32b600f45df3aaa39932f3a7df95b60fa8712a2271fcaf3911ce7b511b1', 'hex'));
    assert.equal(instance.digest('hex'), 'ec63ce9dd979fcd132244be11a45ddb1d00fc8f80160b8cc456f5c5eb89e0c3f675b28b92dd9e6cefaa5da57b4908646');
  });


  it('produces the expected result for ShortMsgKAT_384 1944', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('03d625488354df30e3f875a68edfcf340e8366a8e1ab67f9d5c5486a96829dfac0578289082b2a62117e1cf418b43b90e0adc881fc6ae8105c888e9ecd21aea1c9ae1a4038dfd17378fed71d02ae492087d7cdcd98f746855227967cb1ab4714261ee3bead3f4db118329d3ebef4bc48a875c19ba763966da0ebea800e01b2f50b00e9dd4caca6dcb314d00184ef71ea2391d760c950710db4a70f9212ffc54861f9dc752ce18867b8ad0c48df8466ef7231e7ac567f0eb55099e622ebb86cb237520190a61c66ad34f1f4e289cb3282ae3eaac6152ed24d2c92bae5a7658252a53c49b7b02dfe54fdb2e90074b6cf310ac661', 'hex'));
    assert.equal(instance.digest('hex'), '86301fe98f3ffabb0cb0085aaa1ec61bcad6171459a8623bb780ec32e46f52649946a421ebfc7de90f0e74ec787a3e03');
  });


  it('produces the expected result for ShortMsgKAT_384 1952', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2edc282ffb90b97118dd03aaa03b145f363905e3cbd2d50ecd692b37bf000185c651d3e9726c690d3773ec1e48510e42b17742b0b0377e7de6b8f55e00a8a4db4740cee6db0830529dd19617501dc1e9359aa3bcf147e0a76b3ab70c4984c13e339e6806bb35e683af8527093670859f3d8a0fc7d493bcba6bb12b5f65e71e705ca5d6c948d66ed3d730b26db395b3447737c26fad089aa0ad0e306cb28bf0acf106f89af3745f0ec72d534968cca543cd2ca50c94b1456743254e358c1317c07a07bf2b0eca438a709367fafc89a57239028fc5fecfd53b8ef958ef10ee0608b7f5cb9923ad97058ec067700cc746c127a61ee3', 'hex'));
    assert.equal(instance.digest('hex'), 'ddf8d547bba4f43d8864caef1b1bed77aa12e41f6886a5d8758c654b7ec1fa5b0e77ba4e7680c7830da161e14cb1e65c');
  });


  it('produces the expected result for ShortMsgKAT_384 1960', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('90b28a6aa1fe533915bcb8e81ed6cacdc10962b7ff82474f845eeb86977600cf70b07ba8e3796141ee340e3fce842a38a50afbe90301a3bdcc591f2e7d9de53e495525560b908c892439990a2ca2679c5539ffdf636777ad9c1cdef809cda9e8dcdb451abb9e9c17efa4379abd24b182bd981cafc792640a183b61694301d04c5b3eaad694a6bd4cc06ef5da8fa23b4fa2a64559c5a68397930079d250c51bcf00e2b16a6c49171433b0aadfd80231276560b80458dd77089b7a1bbcc9e7e4b9f881eacd6c92c4318348a13f4914eb27115a1cfc5d16d7fd94954c3532efaca2cab025103b2d02c6fd71da3a77f417d7932685888a', 'hex'));
    assert.equal(instance.digest('hex'), '72953fe4ca34e717e304dc77afd9dede32a8467127b9f78bb0be6191a7ecd051b7dae091b1758907dda3b1d25c0c5883');
  });


  it('produces the expected result for ShortMsgKAT_384 1968', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('2969447d175490f2aa9bb055014dbef2e6854c95f8d60950bfe8c0be8de254c26b2d31b9e4de9c68c9adf49e4ee9b1c2850967f29f5d08738483b417bb96b2a56f0c8aca632b552059c59aac3f61f7b45c966b75f1d9931ff4e596406378cee91aaa726a3a84c33f37e9cdbe626b5745a0b06064a8a8d56e53aaf102d23dd9df0a3fdf7a638509a6761a33fa42fa8ddbd8e16159c93008b53765019c3f0e9f10b144ce2ac57f5d7297f9c9949e4ff68b70d339f87501ce8550b772f32c6da8ad2ce2100a895d8b08fa1eead7c376b407709703c510b50f87e73e43f8e7348f87c3832a547ef2bbe5799abedcf5e1f372ea809233f006', 'hex'));
    assert.equal(instance.digest('hex'), 'f36a9ee455066e562fb675f399d9dcc6bccf68fd1b0ba9f7dcc1edfac1f1e234cb67b5a0f770e55435f75f9ec84a9151');
  });


  it('produces the expected result for ShortMsgKAT_384 1976', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('721645633a44a2c78b19024eaecf58575ab23c27190833c26875dc0f0d50b46aea9c343d82ea7d5b3e50ec700545c615daeaea64726a0f05607576dcd396d812b03fb6551c641087856d050b10e6a4d5577b82a98afb89cee8594c9dc19e79feff0382fcfd127f1b803a4b9946f4ac9a4378e1e6e041b1389a53e3450cd32d9d2941b0cbabdb50da8ea2513145164c3ab6bcbd251c448d2d4b087ac57a59c2285d564f16da4ed5e607ed979592146ffb0ef3f3db308fb342df5eb5924a48256fc763141a278814c82d6d6348577545870ae3a83c7230ac02a1540fe1798f7ef09e335a865a2ae0949b21e4f748fb8a51f44750e213a8fb', 'hex'));
    assert.equal(instance.digest('hex'), '37368f5a074da0e5075845f76b1ac5858df793eef88a854c7dafe3b90720707a145a5dcb0d9266c6148204ce693c5432');
  });


  it('produces the expected result for ShortMsgKAT_384 1984', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6b860d39725a14b498bb714574b4d37ca787404768f64c648b1751b353ac92bac2c3a28ea909fdf0423336401a02e63ec24325300d823b6864bb701f9d7c7a1f8ec9d0ae3584aa6dd62ea1997cd831b4babd9a4da50932d4efda745c61e4130890e156aee6113716daf95764222a91187db2effea49d5d0596102d619bd26a616bbfda8335505fbb0d90b4c180d1a2335b91538e1668f9f9642790b4e55f9cab0fe2bdd2935d001ee6419abab5457880d0dbff20ed8758f4c20fe759efb33141cf0e892587fe8187e5fbc57786b7e8b089612c936dfc03d27efbbe7c8673f1606bd51d5ff386f4a7ab68edf59f385eb1291f117bfe717399', 'hex'));
    assert.equal(instance.digest('hex'), 'daac83b0c5c8f8fc3bccd259c27d964673b4dca790b4b63899e1b6c19cc291fe6f88376281e0fa320adfadc82a8ff4ef');
  });


  it('produces the expected result for ShortMsgKAT_384 1992', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('6a01830af3889a25183244decb508bd01253d5b508ab490d3124afbf42626b2e70894e9b562b288d0a2450cfacf14a0ddae5c04716e5a0082c33981f6037d23d5e045ee1ef2283fb8b6378a914c5d9441627a722c282ff452e25a7ea608d69cee4393a0725d17963d0342684f255496d8a18c2961145315130549311fc07f0312fb78e6077334f87eaa873bee8aa95698996eb21375eb2b4ef53c14401207deb4568398e5dd9a7cf97e8c9663e23334b46912f8344c19efcf8c2ba6f04325f1a27e062b62a58d0766fc6db4d2c6a1928604b0175d872d16b7908ebc041761187cc785526c2a3873feac3a642bb39f5351550af9770c328af7b', 'hex'));
    assert.equal(instance.digest('hex'), '357258fa6579867cc0089c8b3c93ce10677a5ad4dbeee2a27cea90317acebe7254505468875bcb334e0b6f70cfe59082');
  });


  it('produces the expected result for ShortMsgKAT_384 2000', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('b3c5e74b69933c2533106c563b4ca20238f2b6e675e8681e34a389894785bdade59652d4a73d80a5c85bd454fd1e9ffdad1c3815f5038e9ef432aac5c3c4fe840cc370cf86580a6011778bbedaf511a51b56d1a2eb68394aa299e26da9ada6a2f39b9faff7fba457689b9c1a577b2a1e505fdf75c7a0a64b1df81b3a356001bf0df4e02a1fc59f651c9d585ec6224bb279c6beba2966e8882d68376081b987468e7aed1ef90ebd090ae825795cdca1b4f09a979c8dfc21a48d8a53cdbb26c4db547fc06efe2f9850edd2685a4661cb4911f165d4b63ef25b87d0a96d3dff6ab0758999aad214d07bd4f133a6734fde445fe474711b69a98f7e2b', 'hex'));
    assert.equal(instance.digest('hex'), '06e9f892a2716de18dac1b8946604473ade060afc8cb1287e389994076ff92b4bae3d84854470ed061ae31a97b7d0dcf');
  });


  it('produces the expected result for ShortMsgKAT_384 2008', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('83af34279ccb5430febec07a81950d30f4b66f484826afee7456f0071a51e1bbc55570b5cc7ec6f9309c17bf5befdd7c6ba6e968cf218a2b34bd5cf927ab846e38a40bbd81759e9e33381016a755f699df35d660007b5eadf292feefb735207ebf70b5bd17834f7bfa0e16cb219ad4af524ab1ea37334aa66435e5d397fc0a065c411ebbce32c240b90476d307ce802ec82c1c49bc1bec48c0675ec2a6c6f3ed3e5b741d13437095707c565e10d8a20b8c20468ff9514fcf31b4249cd82dcee58c0a2af538b291a87e3390d737191a07484a5d3f3fb8c8f15ce056e5e5f8febe5e1fb59d6740980aa06ca8a0c20f5712b4cde5d032e92ab89f0ae1', 'hex'));
    assert.equal(instance.digest('hex'), '64047790b1656e78953b981b1bbfaeaf9d2b1b8953ab0304791238393f3372c6373a1e087b57be48806229db73e1b1a4');
  });


  it('produces the expected result for ShortMsgKAT_384 2016', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a7ed84749ccc56bb1dfba57119d279d412b8a986886d810f067af349e8749e9ea746a60b03742636c464fc1ee233acc52c1983914692b64309edfdf29f1ab912ec3e8da074d3f1d231511f5756f0b6eead3e89a6a88fe330a10face267bffbfc3e3090c7fd9a850561f363ad75ea881e7244f80ff55802d5ef7a1a4e7b89fcfa80f16df54d1b056ee637e6964b9e0ffd15b6196bdd7db270c56b47251485348e49813b4eb9ed122a01b3ea45ad5e1a929df61d5c0f3e77e1fdc356b63883a60e9cbb9fc3e00c2f32dbd469659883f690c6772e335f617bc33f161d6f6984252ee12e62b6000ac5231e0c9bc65be223d8dfd94c5004a101af9fd6c0fb', 'hex'));
    assert.equal(instance.digest('hex'), '9ca6f39087e6457e12c969d41c8bd66bdd6990ce23d355669e7606b9203d216811237955df6739495d94f0c48ce02845');
  });


  it('produces the expected result for ShortMsgKAT_384 2024', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('a6fe30dcfcda1a329e82ab50e32b5f50eb25c873c5d2305860a835aecee6264aa36a47429922c4b8b3afd00da16035830edb897831c4e7b00f2c23fc0b15fdc30d85fb70c30c431c638e1a25b51caf1d7e8b050b7f89bfb30f59f0f20fecff3d639abc4255b3868fc45dd81e47eb12ab40f2aac735df5d1dc1ad997cefc4d836b854cee9ac02900036f3867fe0d84afff37bde3308c2206c62c4743375094108877c73b87b2546fe05ea137bedfc06a2796274099a0d554da8f7d7223a48cbf31b7decaa1ebc8b145763e3673168c1b1b715c1cd99ecd3ddb238b06049885ecad9347c2436dff32c771f34a38587a44a82c5d3d137a03caa27e66c8ff6', 'hex'));
    assert.equal(instance.digest('hex'), 'fe99f19c79a89080e2ff90981dde91994542d4bcc1276a82d1a2e53850341b9ad5422ceab81e69dae5e91dc5ff60e1a3');
  });


  it('produces the expected result for ShortMsgKAT_384 2032', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('83167ff53704c3aa19e9fb3303539759c46dd4091a52ddae9ad86408b69335989e61414bc20ab4d01220e35241eff5c9522b079fba597674c8d716fe441e566110b6211531ceccf8fd06bc8e511d00785e57788ed9a1c5c73524f01830d2e1148c92d0edc97113e3b7b5cd3049627abdb8b39dd4d6890e0ee91993f92b03354a88f52251c546e64434d9c3d74544f23fb93e5a2d2f1fb15545b4e1367c97335b0291944c8b730ad3d4789273fa44fb98d78a36c3c3764abeeac7c569c1e43a352e5b770c3504f87090dee075a1c4c85c0c39cf421bdcc615f9eff6cb4fe6468004aece5f30e1ecc6db22ad9939bb2b0ccc96521dfbf4ae008b5b46bc006e', 'hex'));
    assert.equal(instance.digest('hex'), '92e1d994fea2fd500a4b7f5139119058a5b70ef6174e553f12fe7bcfca24b00a28391e3761bdcba3fd6b033c1286e28e');
  });


  it('produces the expected result for ShortMsgKAT_384 2040', () => {
    const instance = new SHA3.SHA3Hash(384);
    instance.update(newBuffer('3a3a819c48efde2ad914fbf00e18ab6bc4f14513ab27d0c178a188b61431e7f5623cb66b23346775d386b50e982c493adbbfc54b9a3cd383382336a1a0b2150a15358f336d03ae18f666c7573d55c4fd181c29e6ccfde63ea35f0adf5885cfc0a3d84a2b2e4dd24496db789e663170cef74798aa1bbcd4574ea0bba40489d764b2f83aadc66b148b4a0cd95246c127d5871c4f11418690a5ddf01246a0c80a43c70088b6183639dcfda4125bd113a8f49ee23ed306faac576c3fb0c1e256671d817fc2534a52f5b439f72e424de376f4c565cca82307dd9ef76da5b7c4eb7e085172e328807c02d011ffbf33785378d79dc266f6a5be6bb0e4a92eceebaeb1', 'hex'));
    assert.equal(instance.digest('hex'), '6bff1c8405a3fe594e360e3bccea1ebcd509310dc79b9e45c263783d7a5dd662c6789b18bd567dbdda1554f5bee6a860');
  });


  it('produces the expected result for ShortMsgKAT_512 8', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('cc', 'hex'));
    assert.equal(instance.digest('hex'), '8630c13cbd066ea74bbe7fe468fec1dee10edc1254fb4c1b7c5fd69b646e44160b8ce01d05a0908ca790dfb080f4b513bc3b6225ece7a810371441a5ac666eb9');
  });


  it('produces the expected result for ShortMsgKAT_512 16', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('41fb', 'hex'));
    assert.equal(instance.digest('hex'), '551da6236f8b96fce9f97f1190e901324f0b45e06dbbb5cdb8355d6ed1dc34b3f0eae7dcb68622ff232fa3cece0d4616cdeb3931f93803662a28df1cd535b731');
  });


  it('produces the expected result for ShortMsgKAT_512 24', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1f877c', 'hex'));
    assert.equal(instance.digest('hex'), 'eb7f2a98e00af37d964f7d8c44c1fb6e114d8ee21a7b976ae736539efdc1e3fe43becef5015171e6da30168cae99a82c53fa99042774ef982c01626a540f08c0');
  });


  it('produces the expected result for ShortMsgKAT_512 32', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c1ecfdfc', 'hex'));
    assert.equal(instance.digest('hex'), '952d4c0a6f0ef5ce438c52e3edd345ea00f91cf5da8097c1168a16069e958fc05bad90a0c5fb4dd9ec28e84b226b94a847d6bb89235692ef4c9712f0c7030fae');
  });


  it('produces the expected result for ShortMsgKAT_512 40', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('21f134ac57', 'hex'));
    assert.equal(instance.digest('hex'), '2e76d93affd62b92fc4f29cb83efbe4ba21d88426aa7f075bfc20960ea258787898172e17045af43ab1fe445532be0185fbea84d9be788b05f14dbf4856a5254');
  });


  it('produces the expected result for ShortMsgKAT_512 48', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c6f50bb74e29', 'hex'));
    assert.equal(instance.digest('hex'), '40fa8074e1e509b206448fbe757d9494b9b51e8d6e674a67f53c11ef92e96c3ea08b95ebd4172b020010cd6cf29539a34d6bfa002a2042787aa8d879a0f5b54c');
  });


  it('produces the expected result for ShortMsgKAT_512 56', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('119713cc83eeef', 'hex'));
    assert.equal(instance.digest('hex'), 'd1116786a3c1ea46a8f22d82abb4c5d06dc0691b2e747ac9726d0b290e6959f7b23428519a656b237695e56403855ec4c98db0cf87f31b6ceabf2b9b8589b713');
  });


  it('produces the expected result for ShortMsgKAT_512 64', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('4a4f202484512526', 'hex'));
    assert.equal(instance.digest('hex'), 'f326c7c126ddc277922760feef77c9bab6fb5d3430f652593703d7c5e30135cd0b0575257509a624184330d6ab1f508a666391b5d4690426b4e05301891df897');
  });


  it('produces the expected result for ShortMsgKAT_512 72', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1f66ab4185ed9b6375', 'hex'));
    assert.equal(instance.digest('hex'), '1f5b8a6e8d94f5e2535d46842b9ced467c39c2db323963d3f3d937e9dda76fbc17072dda2ab4771cd7a645145a2aec1b5749bf9efe0cde006cc3ef8936438e0d');
  });


  it('produces the expected result for ShortMsgKAT_512 80', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('eed7422227613b6f53c9', 'hex'));
    assert.equal(instance.digest('hex'), '2aeee7a720c030a820cd7baa8570d72cb90b7a238c38c358676358a7ae9a5cf26635b2320d61c1284899e654f0bfdd0a3a9c343ffbd11838b57465e6c3ad3a57');
  });


  it('produces the expected result for ShortMsgKAT_512 88', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('eaeed5cdffd89dece455f1', 'hex'));
    assert.equal(instance.digest('hex'), '7b1c1bef3b4deb4b4812c81a6e7b3f2c66fa95157fa3b9d2959dc56b8add100170d3c8d1745fd230a31f89fa17889c4c58946b5d746e47b71ed0394b66d1bdb2');
  });


  it('produces the expected result for ShortMsgKAT_512 96', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5be43c90f22902e4fe8ed2d3', 'hex'));
    assert.equal(instance.digest('hex'), 'ee41401af509d6fc0944cd4a0bb29d2dce0dcc862606e669e31381e5d6cecb463143645d696d14e40169cdc71c75686d6e8732b432092626421cc6cc196f80bf');
  });


  it('produces the expected result for ShortMsgKAT_512 104', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a746273228122f381c3b46e4f1', 'hex'));
    assert.equal(instance.digest('hex'), '9b53b410b9f5dce90a77244db407a3d0f4898d112d0044a8f66af933e26666de63ebd2a4322d8fe525ab354ce9676b6a14d0ce6b3d24e6cd5832bea0c5153cef');
  });


  it('produces the expected result for ShortMsgKAT_512 112', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3c5871cd619c69a63b540eb5a625', 'hex'));
    assert.equal(instance.digest('hex'), '2b53fe6583fc24ee8a63801067e4d3bd6e6934ef16bc822fc3a69f4ee13a404d9a3ce2bb4a12c77382bfde4d843f87fd06ed8aecc234a3a24cedfe60bfc06933');
  });


  it('produces the expected result for ShortMsgKAT_512 120', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fa22874bcc068879e8ef11a69f0722', 'hex'));
    assert.equal(instance.digest('hex'), '80946ca68e8c16a9667cd8339d1c5b00f1e0d401d0ecc79458754794838f3ae2949a8cc5fe5584033bca9c5be62c7c08f402ef02f727cefa43bbd374c2a67c52');
  });


  it('produces the expected result for ShortMsgKAT_512 128', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('52a608ab21ccdd8a4457a57ede782176', 'hex'));
    assert.equal(instance.digest('hex'), '4b39d3da5bcdf4d9b769015995644311c14c435bf72b1009d6dd71b01a63b97cfb596418e8e42342d117e07471a8914314ba7b0e264dadf0cea381868cbd43d1');
  });


  it('produces the expected result for ShortMsgKAT_512 136', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('82e192e4043ddcd12ecf52969d0f807eed', 'hex'));
    assert.equal(instance.digest('hex'), 'c37c9dc2e20d8e2f0ae588d7d45a807ccfa000fc948ac42a8ed63bb14f318fc3d4b963f7305980e6a0fd2316b55b63142373b1a29002264855c716c5c9f17f4c');
  });


  it('produces the expected result for ShortMsgKAT_512 144', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('75683dcb556140c522543bb6e9098b21a21e', 'hex'));
    assert.equal(instance.digest('hex'), '9073c62555e6095f17df71ad02babb9100288633898489b21c906a3190875baeaccc83be80abd11466fec371ba2c4623d07f0131defaec13a8c732a9f8417163');
  });


  it('produces the expected result for ShortMsgKAT_512 152', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('06e4efe45035e61faaf4287b4d8d1f12ca97e5', 'hex'));
    assert.equal(instance.digest('hex'), '23e9352856718e1e2d68a21d56d93117ced7628e984ff04ed8c0cb9b10539e4ede284f94fa71bf4b83bbb493435fd6be26eddb09deac39680e6b05acc87b8c4e');
  });


  it('produces the expected result for ShortMsgKAT_512 160', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e26193989d06568fe688e75540aea06747d9f851', 'hex'));
    assert.equal(instance.digest('hex'), '909d753426b1dee09fc474f18cf810d5d5aadbf8a09af495bf6c22aca0c673021bfc5d2ad94f50b24e1569e956694b21cf2cc8b4f3c7ee4cf195e4424cc415dd');
  });


  it('produces the expected result for ShortMsgKAT_512 168', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d8dc8fdefbdce9d44e4cbafe78447bae3b5436102a', 'hex'));
    assert.equal(instance.digest('hex'), '046c6019fc4d628ae0da7092f9910f269b853d3b57052039ad1375c665405f9fd79d57579f42c4fff249bb85ae65113a9f4276cede73e9ccb0c24753935a006e');
  });


  it('produces the expected result for ShortMsgKAT_512 176', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('57085fd7e14216ab102d8317b0cb338a786d5fc32d8f', 'hex'));
    assert.equal(instance.digest('hex'), '51c909a6528949baddaf1ba0b154ea9c33fde5074359505b76d4b7ed54352dd893d40b142a5f802f378cba7b8c3782ecf2a048542be6c5936822214846a8d5e4');
  });


  it('produces the expected result for ShortMsgKAT_512 184', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a05404df5dbb57697e2c16fa29defac8ab3560d6126fa0', 'hex'));
    assert.equal(instance.digest('hex'), 'efc8917e1247742a2d4ec29afeddf1e6ece377b3d8ac6e58c9851ce9c99bd599adebfed657baacd1793fc91b04df2957bf6f1888869286002dc4ad9ac7f76793');
  });


  it('produces the expected result for ShortMsgKAT_512 192', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('aecbb02759f7433d6fcb06963c74061cd83b5b3ffa6f13c6', 'hex'));
    assert.equal(instance.digest('hex'), 'fcef88bcc7ef70d8c3973429ac5139155f9ba643b431013f1817ecd2ff3ab287880f9ea54df7503cb3f73d7cf2b87d2e9bdbd203378fae74ca4bd2667a4aa706');
  });


  it('produces the expected result for ShortMsgKAT_512 200', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('aafdc9243d3d4a096558a360cc27c8d862f0be73db5e88aa55', 'hex'));
    assert.equal(instance.digest('hex'), '470bdd8d709875c8e6f88591b97d6486c5f03b54bfc905757483e013f63a6c56984d4518d45c2d2298eadb44af3a0c35a76b573d452f5747844d3ad8f84a2e85');
  });


  it('produces the expected result for ShortMsgKAT_512 208', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7bc84867f6f9e9fdc3e1046cae3a52c77ed485860ee260e30b15', 'hex'));
    assert.equal(instance.digest('hex'), '429fd438b390ad0224028975467ec228f9adcde71e1738005e3717c58f727aa2b7c61780bf0c5f8b766cc6d34551d87d22a130b8c215614204e607aa82ff8469');
  });


  it('produces the expected result for ShortMsgKAT_512 216', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fac523575a99ec48279a7a459e98ff901918a475034327efb55843', 'hex'));
    assert.equal(instance.digest('hex'), '790a010aeb6f13e019a1dc35574b1219e74ff5db6fbd8746733664ffdbcfe1cc6e8ab39117e3244c4fa3c0a962c9f50030aef88e193e7e0d4c4747345f30cb54');
  });


  it('produces the expected result for ShortMsgKAT_512 224', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0f8b2d8fcfd9d68cffc17ccfb117709b53d26462a3f346fb7c79b85e', 'hex'));
    assert.equal(instance.digest('hex'), 'aaf7a391600270f7b5a2a3bbc7474ac4154ebeac03a790a57fdad96cea2d043c9fa5f6916790b92f8032d668ed9a07112dc5b2373ec816aabca6f577ce60415e');
  });


  it('produces the expected result for ShortMsgKAT_512 232', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a963c3e895ff5a0be4824400518d81412f875fa50521e26e85eac90c04', 'hex'));
    assert.equal(instance.digest('hex'), '3e2880a974e50f98bd6cc0f9d769af348ce3b7e8fa38cf0ca2da5fd704c9c0e57d5500bea3cb7477927f9c394aa3f9bbc01824350291b9a0a0cbf094bb37da55');
  });


  it('produces the expected result for ShortMsgKAT_512 240', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('03a18688b10cc0edf83adf0a84808a9718383c4070c6c4f295098699ac2c', 'hex'));
    assert.equal(instance.digest('hex'), '48e55e0340f20466881a732aa88459ad4bcdef364c3bd045ae099f953d89f15957aef204265c3915ba42fe4235196be3d0f564676227c3c0deacfbaf68f9e717');
  });


  it('produces the expected result for ShortMsgKAT_512 248', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('84fb51b517df6c5accb5d022f8f28da09b10232d42320ffc32dbecc3835b29', 'hex'));
    assert.equal(instance.digest('hex'), '9d8098d8d6edbbaa2bcfc6fb2f89c3eac67fec25cdfe75aa7bd570a648e8c8945ff2ec280f6dcf73386109155c5bbc444c707bb42eab873f5f7476657b1bc1a8');
  });


  it('produces the expected result for ShortMsgKAT_512 256', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('9f2fcc7c90de090d6b87cd7e9718c1ea6cb21118fc2d5de9f97e5db6ac1e9c10', 'hex'));
    assert.equal(instance.digest('hex'), '1eafedce7292ba73b80ae6151745f43ac95bfc9f31694d422473abca2e69d695cb6544db65506078cb20dbe0762f84aa6afd14a60ab597955be73f3f5c50f7a8');
  });


  it('produces the expected result for ShortMsgKAT_512 264', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('de8f1b3faa4b7040ed4563c3b8e598253178e87e4d0df75e4ff2f2dedd5a0be046', 'hex'));
    assert.equal(instance.digest('hex'), '9a7688e31aaf40c15575fc58c6b39267aad3722e696e518a9945cf7f7c0fea84cb3cb2e9f0384a6b5dc671ade7fb4d2b27011173f3eeeaf17cb451cf26542031');
  });


  it('produces the expected result for ShortMsgKAT_512 272', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('62f154ec394d0bc757d045c798c8b87a00e0655d0481a7d2d9fb58d93aedc676b5a0', 'hex'));
    assert.equal(instance.digest('hex'), 'ada5ca5630660003c4d16149f235faeb78132f7f773a631f820cc5c654b08eab4206bb4ea1389d1cf74d3b60b86e484c90c817cdb5dd5dbf327163b4646f7213');
  });


  it('produces the expected result for ShortMsgKAT_512 280', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b2dcfe9ff19e2b23ce7da2a4207d3e5ec7c6112a8a22aec9675a886378e14e5bfbad4e', 'hex'));
    assert.equal(instance.digest('hex'), '71a0801d32587980b09963a0f547b8b6ee3bade224671bf44f12e3da4f21778bac37fcc73ef45fee1c96688baf9020f487b1a16e3ac91b504845d6fba879134f');
  });


  it('produces the expected result for ShortMsgKAT_512 288', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('47f5697ac8c31409c0868827347a613a3562041c633cf1f1f86865a576e02835ed2c2492', 'hex'));
    assert.equal(instance.digest('hex'), 'eba678b7a0e5669dc7fa5eca5d5f19fe625e113e5028da5efb138923cd444757b06078e0ba064b36c72ca2187ab9dd31dda6f24668f46c32f8ec21ac59aafa24');
  });


  it('produces the expected result for ShortMsgKAT_512 296', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('512a6d292e67ecb2fe486bfe92660953a75484ff4c4f2eca2b0af0edcdd4339c6b2ee4e542', 'hex'));
    assert.equal(instance.digest('hex'), '12df92d889d7ba0df05bcd02d9de58c97f4813126967ff78bdf759c66c4cbe9df68ab31a0256c776730bb25deecf91f0997868ac8bb86df7a0fc110cb0a4de5d');
  });


  it('produces the expected result for ShortMsgKAT_512 304', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('973cf2b4dcf0bfa872b41194cb05bb4e16760a1840d8343301802576197ec19e2a1493d8f4fb', 'hex'));
    assert.equal(instance.digest('hex'), 'b8c7ce2be4cb32c140e75b75474248c1dd77d19b0cbca31a3ecc2a35c532e4fa3ed4abbcda27aa68a9dda06b245443e5903a65652a94ed3af15065d3e7736e47');
  });


  it('produces the expected result for ShortMsgKAT_512 312', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('80beebcd2e3f8a9451d4499961c9731ae667cdc24ea020ce3b9aa4bbc0a7f79e30a934467da4b0', 'hex'));
    assert.equal(instance.digest('hex'), 'a0ae9dfb56831fe4a3223c501b697bd8243c471e8343acfd37a6b587feac74571c23deebc9b94a540a02f1b1e2251e01229c9d58c4279f155d5566fb18e81295');
  });


  it('produces the expected result for ShortMsgKAT_512 320', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7abaa12ec2a7347674e444140ae0fb659d08e1c66decd8d6eae925fa451d65f3c0308e29446b8ed3', 'hex'));
    assert.equal(instance.digest('hex'), '631e7847124a70fe6eb293a44a25c50600b5e7e975ca9fab5ae64ab86c7e42c912dd6ec093f01a8debc6e1f5e487af97dc3fd6c53002765050be963ffcd4d989');
  });


  it('produces the expected result for ShortMsgKAT_512 328', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c88dee9927679b8af422abcbacf283b904ff31e1cac58c7819809f65d5807d46723b20f67ba610c2b7', 'hex'));
    assert.equal(instance.digest('hex'), 'b989263bb4e0424f95fdc9a49c83a3769fbf31dcedda7e005ab5f22f43d2718debd39085971f7eb7822c9fa0f67f776cec4e35a9a8b8c835ef4e9ebda1922e4d');
  });


  it('produces the expected result for ShortMsgKAT_512 336', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('01e43fe350fcec450ec9b102053e6b5d56e09896e0ddd9074fe138e6038210270c834ce6eadc2bb86bf6', 'hex'));
    assert.equal(instance.digest('hex'), 'ff6adcb9e1546798d396db78452df1a375b65ee3d54fcc915a8ca3da693e24931999b0fc8a4eb92f6ff85e42bb4cfd9ce7d7863eee709c9ef37642b696174474');
  });


  it('produces the expected result for ShortMsgKAT_512 344', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('337023370a48b62ee43546f17c4ef2bf8d7ecd1d49f90bab604b839c2e6e5bd21540d29ba27ab8e309a4b7', 'hex'));
    assert.equal(instance.digest('hex'), '1051b7ff77274b784e7fb7823e756f0c4355047e489775bbedaa7ce5a75efac331492c016ce02eb2be8ba2fe6b735b9a1484e73ac06de573c5d0b4a58822a36a');
  });


  it('produces the expected result for ShortMsgKAT_512 352', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6892540f964c8c74bd2db02c0ad884510cb38afd4438af31fc912756f3efec6b32b58ebc38fc2a6b913596a8', 'hex'));
    assert.equal(instance.digest('hex'), '5639a2824297ca099ecf2a81eef1753f6314cb663d860f05a39e3e801ff82060bba10628e2c0d9e0a84dd05ed637fc0b65ba03bb66e46fb256f2a5b28d3f41d2');
  });


  it('produces the expected result for ShortMsgKAT_512 360', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f5961dfd2b1ffffda4ffbf30560c165bfedab8ce0be525845deb8dc61004b7db38467205f5dcfb34a2acfe96c0', 'hex'));
    assert.equal(instance.digest('hex'), '97f9d642507e6dd179d56f4b815e92d0d486826f273ec711b8f9cb76afc79f900816fdbc13dd3a59fbecba1f3b6953f879f27c8987b24c6ff8557a2c834076b9');
  });


  it('produces the expected result for ShortMsgKAT_512 368', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('ca061a2eb6ceed8881ce2057172d869d73a1951e63d57261384b80ceb5451e77b06cf0f5a0ea15ca907ee1c27eba', 'hex'));
    assert.equal(instance.digest('hex'), 'afef2af5a01b89be190a0e6e796aa51f1f8c356772c6fc7731f08aab8bd81aee1287c70d564f4f169e37b07f28202a85f468281b4cdc1273cf61eb30e3bdcee1');
  });


  it('produces the expected result for ShortMsgKAT_512 376', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1743a77251d69242750c4f1140532cd3c33f9b5ccdf7514e8584d4a5f9fbd730bcf84d0d4726364b9bf95ab251d9bb', 'hex'));
    assert.equal(instance.digest('hex'), 'f467cca67c387ffc9f1b173a084c451095d01ad0bf3953ac103a76f0f1bc86167305a926a941a53417f1611a505aaa205bcfccbfd343465dad8a6c1e80609a9d');
  });


  it('produces the expected result for ShortMsgKAT_512 384', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d8faba1f5194c4db5f176fabfff856924ef627a37cd08cf55608bba8f1e324d7c7f157298eabc4dce7d89ce5162499f9', 'hex'));
    assert.equal(instance.digest('hex'), '4b389a2a0df5e295ea9444f2739b5492f290c4467b0b4cdc1cc9ed2cefa7a9e527e0627cdaf0bda58f17d13f94af7d2deff6fc5d53dd9157674475527fbb4f86');
  });


  it('produces the expected result for ShortMsgKAT_512 392', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('be9684be70340860373c9c482ba517e899fc81baaa12e5c6d7727975d1d41ba8bef788cdb5cf4606c9c1c7f61aed59f97d', 'hex'));
    assert.equal(instance.digest('hex'), '6590fffb7311ab7dab370fb518ccc19baa9af7c84179adb002f8facd3c44af2830a84df1e2c2402368cc36614a6ea22903063e57d00ec511a46a9a03fe3819f7');
  });


  it('produces the expected result for ShortMsgKAT_512 400', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7e15d2b9ea74ca60f66c8dfab377d9198b7b16deb6a1ba0ea3c7ee2042f89d3786e779cf053c77785aa9e692f821f14a7f51', 'hex'));
    assert.equal(instance.digest('hex'), '895796b2a0824c55f030d82e794925c38d8459f38cf848519f120ff6a9d5a03ebf006c3ea5021e8f3b3408ff12f01bcddf7a085ba0a9a58944fec1f554836df8');
  });


  it('produces the expected result for ShortMsgKAT_512 408', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('9a219be43713bd578015e9fda66c0f2d83cac563b776ab9f38f3e4f7ef229cb443304fba401efb2bdbd7ece939102298651c86', 'hex'));
    assert.equal(instance.digest('hex'), 'e4bbd54bfb99d345471f8ab94271b4b748f5ce70c21c28ae6559e03ee7890a2c814043e624a6bd2944350756b37fa8208fc7473a67b310ceebc17d965ed688b2');
  });


  it('produces the expected result for ShortMsgKAT_512 416', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c8f2b693bd0d75ef99caebdc22adf4088a95a3542f637203e283bbc3268780e787d68d28cc3897452f6a22aa8573ccebf245972a', 'hex'));
    assert.equal(instance.digest('hex'), '80d862ad05428a299213e65b50310463fd22c505e693dd4719e0a120eeaa35c5fc1608a08d22e2ccddeca49878bc26abe55a3c9a546347439a942ed0c1a6a23e');
  });


  it('produces the expected result for ShortMsgKAT_512 424', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('ec0f99711016c6a2a07ad80d16427506ce6f441059fd269442baaa28c6ca037b22eeac49d5d894c0bf66219f2c08e9d0e8ab21de52', 'hex'));
    assert.equal(instance.digest('hex'), '021b3b392deccb9075559f88c0c229026a2048cef8eeb2d4f94803dcf2da0a73e004d7f14e9fd662670b59229ab3883c340f4e3a8c42624ccb90bec1156f95d4');
  });


  it('produces the expected result for ShortMsgKAT_512 432', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0dc45181337ca32a8222fe7a3bf42fc9f89744259cff653504d6051fe84b1a7ffd20cb47d4696ce212a686bb9be9a8ab1c697b6d6a33', 'hex'));
    assert.equal(instance.digest('hex'), '97bf33a5254c8aca27486428440b1034aaafac8b498ecb830c2581dc68518079b65fb0c595997693ddb8d68d9564ea98dc43cd287e2e018db7dfaaaa205c547a');
  });


  it('produces the expected result for ShortMsgKAT_512 440', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('de286ba4206e8b005714f80fb1cdfaebde91d29f84603e4a3ebc04686f99a46c9e880b96c574825582e8812a26e5a857ffc6579f63742f', 'hex'));
    assert.equal(instance.digest('hex'), 'c05fd9c3fa73f80956ff1c3b89160eb520ca640e201b3fe5e6e296220e81b59d530476010d3784ca08692b8c716a3be982b37450a96d30a401d3ba3c390d9de3');
  });


  it('produces the expected result for ShortMsgKAT_512 448', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('eebcc18057252cbf3f9c070f1a73213356d5d4bc19ac2a411ec8cdeee7a571e2e20eaf61fd0c33a0ffeb297ddb77a97f0a415347db66bcaf', 'hex'));
    assert.equal(instance.digest('hex'), 'b980e657c13726dbadb6570ea3a9e633869cadb798eb35c482697a04cb712f1c1e8c5d0bd67e43e52da294e82d5e80a695a74a3d27c0c672adcfe2c928859a6d');
  });


  it('produces the expected result for ShortMsgKAT_512 456', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('416b5cdc9fe951bd361bd7abfc120a5054758eba88fdd68fd84e39d3b09ac25497d36b43cbe7b85a6a3cebda8db4e5549c3ee51bb6fcb6ac1e', 'hex'));
    assert.equal(instance.digest('hex'), '6adfc561835fddd70a9feb57c513165d12aeb3283f0dd7774dd58852da9e969abdaf20dd44856fa60e11bdfa2dbb7e3347669fff7a57a8d8d37431c2b309972d');
  });


  it('produces the expected result for ShortMsgKAT_512 464', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5c5faf66f32e0f8311c32e8da8284a4ed60891a5a7e50fb2956b3cbaa79fc66ca376460e100415401fc2b8518c64502f187ea14bfc9503759705', 'hex'));
    assert.equal(instance.digest('hex'), '0e7459bdc857b949cc59a9c649b9625268bf9a11ea81eeefa4ecdd410e2f6fd2c78289c01365f99034ff8fa8c115ddcebefa26a8d6468f5030e641745950061e');
  });


  it('produces the expected result for ShortMsgKAT_512 472', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7167e1e02be1a7ca69d788666f823ae4eef39271f3c26a5cf7cee05bca83161066dc2e217b330df821103799df6d74810eed363adc4ab99f36046a', 'hex'));
    assert.equal(instance.digest('hex'), '2a8ce9df40879b24dadf61c9131f694e5531ade6b7ab071ca10abdd3c2e4a22c868a52986a329f880137ee76109770927d2658e63eb486d880290ac0782cf5bf');
  });


  it('produces the expected result for ShortMsgKAT_512 480', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2fda311dbba27321c5329510fae6948f03210b76d43e7448d1689a063877b6d14c4f6d0eaa96c150051371f7dd8a4119f7da5c483cc3e6723c01fb7d', 'hex'));
    assert.equal(instance.digest('hex'), 'a83ce5a6a58376d57db4c58da1b46c131ff1bf8ff2de5e8617fb37e5098398edb53f9888b8752a8aff19178f2f6bd7a33fd36c59e4a631906280907fc1c5ab07');
  });


  it('produces the expected result for ShortMsgKAT_512 488', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('95d1474a5aab5d2422aca6e481187833a6212bd2d0f91451a67dd786dfc91dfed51b35f47e1deb8a8ab4b9cb67b70179cc26f553ae7b569969ce151b8d', 'hex'));
    assert.equal(instance.digest('hex'), '9ebfcea2db1676eee6b103119543c6049debd8fb8f1e01a5ab5b348e2919e14c8cfe8e542f2ab747b0fd4a4c3eee4019bb046e24bfe2091fb9c65dca527b71ad');
  });


  it('produces the expected result for ShortMsgKAT_512 496', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c71bd7941f41df044a2927a8ff55b4b467c33d089f0988aa253d294addbdb32530c0d4208b10d9959823f0c0f0734684006df79f7099870f6bf53211a88d', 'hex'));
    assert.equal(instance.digest('hex'), '97b08be7653e9df1b5afa459ea750a3ac9bf3577bcc7e5344fc861184880926def354e4c65b20ec66c47b7affd3e7493958bab0a90724d3d8dd9e1d561fa60c2');
  });


  it('produces the expected result for ShortMsgKAT_512 504', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f57c64006d9ea761892e145c99df1b24640883da79d9ed5262859dcda8c3c32e05b03d984f1ab4a230242ab6b78d368dc5aaa1e6d3498d53371e84b0c1d4ba', 'hex'));
    assert.equal(instance.digest('hex'), 'ef8aaf08159bbcb88efac49a33a5248b7ed0544960d8dd54d748a91c0d84c69f308bb54cb5ec97d3f81cdf76e68e0320815b93f2a00942f2168cbc18e8377708');
  });


  it('produces the expected result for ShortMsgKAT_512 512', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e926ae8b0af6e53176dbffcc2a6b88c6bd765f939d3d178a9bde9ef3aa131c61e31c1e42cdfaf4b4dcde579a37e150efbef5555b4c1cb40439d835a724e2fae7', 'hex'));
    assert.equal(instance.digest('hex'), 'c0a4d8dca967772dbf6e5508c913e7beba1b749a2b1ac963d0676e6f1dcd4ebaa3f909ef87dd849882dc8253347a5f6520b5b9f510973f443976455f923cfcb9');
  });


  it('produces the expected result for ShortMsgKAT_512 520', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('16e8b3d8f988e9bb04de9c96f2627811c973ce4a5296b4772ca3eefeb80a652bdf21f50df79f32db23f9f73d393b2d57d9a0297f7a2f2e79cfda39fa393df1ac00', 'hex'));
    assert.equal(instance.digest('hex'), 'cf03c946eb7022f60fb5439462ac22684e47eaacbffe19b797760b4a24a5238be9d90e17d40ea6fe7b2885cef7dfb8bb489401caa94f2dd6e04592e33e76b9d1');
  });


  it('produces the expected result for ShortMsgKAT_512 528', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fc424eeb27c18a11c01f39c555d8b78a805b88dba1dc2a42ed5e2c0ec737ff68b2456d80eb85e11714fa3f8eabfb906d3c17964cb4f5e76b29c1765db03d91be37fc', 'hex'));
    assert.equal(instance.digest('hex'), '2c35f1a57a17cb29403a2b40fc307bde10ba8f7fec7b94e1e42eb4eeb952aad00ec46a26646cd51db0c6b238189d7d470e21c29bf8710423cb5602cab75e29e7');
  });


  it('produces the expected result for ShortMsgKAT_512 536', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('abe3472b54e72734bdba7d9158736464251c4f21b33fbbc92d7fac9a35c4e3322ff01d2380cbaa4ef8fb07d21a2128b7b9f5b6d9f34e13f39c7ffc2e72e47888599ba5', 'hex'));
    assert.equal(instance.digest('hex'), '505e6e607c90c57bbe7ce52bb42df3d90bc32de554025730c84ed0f89a0132885d7a40fadff7a4b01de4d29735aefe0e0469f4f172b62a0daba889e152308fc4');
  });


  it('produces the expected result for ShortMsgKAT_512 544', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('36f9f0a65f2ca498d739b944d6eff3da5ebba57e7d9c41598a2b0e4380f3cf4b479ec2348d015ffe6256273511154afcf3b4b4bf09d6c4744fdd0f62d75079d440706b05', 'hex'));
    assert.equal(instance.digest('hex'), '7be2c95413c589ec5ad69f8d80bfe9f26540d5c1832c7a49a31a8f5655d9ce8b47d97c69cccd693c211904142a5403da7ad09fbdb825698fe201988fcccd2bb2');
  });


  it('produces the expected result for ShortMsgKAT_512 552', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('abc87763cae1ca98bd8c5b82caba54ac83286f87e9610128ae4de68ac95df5e329c360717bd349f26b872528492ca7c94c2c1e1ef56b74dbb65c2ac351981fdb31d06c77a4', 'hex'));
    assert.equal(instance.digest('hex'), '8aac9201d76df13424a32552f04390e499b6168711b70c875789ddaa9b115f8b8259a60d17835e2587f8901c3ca782da9afb28ba87b9fcbe05a47a42f48fcd48');
  });


  it('produces the expected result for ShortMsgKAT_512 560', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('94f7ca8e1a54234c6d53cc734bb3d3150c8ba8c5f880eab8d25fed13793a9701ebe320509286fd8e422e931d99c98da4df7e70ae447bab8cffd92382d8a77760a259fc4fbd72', 'hex'));
    assert.equal(instance.digest('hex'), 'aa52587d84586317028fb7d3c20892e0288bfe2feabd76d7f89155ffe9ccbf1a09fa0ffb0553e83f79ae58bd30a35fa54892b6aba0093a012427ddab71cdf819');
  });


  it('produces the expected result for ShortMsgKAT_512 568', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('13bd2811f6ed2b6f04ff3895aceed7bef8dcd45eb121791bc194a0f806206bffc3b9281c2b308b1a729ce008119dd3066e9378acdcc50a98a82e20738800b6cddbe5fe9694ad6d', 'hex'));
    assert.equal(instance.digest('hex'), '48fc282f37a3e1fb5df4d2da1f7197ec899ae573ca08df550e61ee847eeb1d24c074ff46bcaee224ec7d8cea4256154f0c4d434e682834f6d827bfbdf75112f5');
  });


  it('produces the expected result for ShortMsgKAT_512 576', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1eed9cba179a009ec2ec5508773dd305477ca117e6d569e66b5f64c6bc64801ce25a8424ce4a26d575b8a6fb10ead3fd1992edddeec2ebe7150dc98f63adc3237ef57b91397aa8a7', 'hex'));
    assert.equal(instance.digest('hex'), '6b4b0f126863552a6f40f45e295dc79b9ba2a88ea7c3b2f607ac1a8431a97844c2a7b664443fb23c05739df5494fe9824db80b7f3e67872142f17e2c5544e1ef');
  });


  it('produces the expected result for ShortMsgKAT_512 584', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('ba5b67b5ec3a3ffae2c19dd8176a2ef75c0cd903725d45c9cb7009a900c0b0ca7a2967a95ae68269a6dbf8466c7b6844a1d608ac661f7eff00538e323db5f2c644b78b2d48de1a08aa', 'hex'));
    assert.equal(instance.digest('hex'), '7eec7b730056b1bd4f6ffc186fb45591e50cd93cf6e4fc958889f82d3f32c5c74d03a4bcf7d2754298f134698af4559b0e29baaa365cc00db0d51d407179c56d');
  });


  it('produces the expected result for ShortMsgKAT_512 592', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0efa26ac5673167dcacab860932ed612f65ff49b80fa9ae65465e5542cb62075df1c5ae54fba4db807be25b070033efa223bdd5b1d3c94c6e1909c02b620d4b1b3a6c9fed24d70749604', 'hex'));
    assert.equal(instance.digest('hex'), '79cb925aca072ebb3b49a9d0e59bb07dd1c223c1f26c91768b929472c51b977f85c6ceeb54bce89cf9ff6155d7fe8091540f1348ce9592a6403f92105477870e');
  });


  it('produces the expected result for ShortMsgKAT_512 600', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('bbfd933d1fd7bf594ac7f435277dc17d8d5a5b8e4d13d96d2f64e771abbd51a5a8aea741beccbddb177bcea05243ebd003cfdeae877cca4da94605b67691919d8b033f77d384ca01593c1b', 'hex'));
    assert.equal(instance.digest('hex'), 'b5d1ed8f039044bcfef41e99b2f564f45991b329b503fc91fa29d2408512f8711e9db66f8ae172164650545ae9e3db32aa369ec47e81a77111276e6ca38e4d92');
  });


  it('produces the expected result for ShortMsgKAT_512 608', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('90078999fd3c35b8afbf4066cbde335891365f0fc75c1286cdd88fa51fab94f9b8def7c9ac582a5dbcd95817afb7d1b48f63704e19c2baa4df347f48d4a6d603013c23f1e9611d595ebac37c', 'hex'));
    assert.equal(instance.digest('hex'), '782c008a9ee3dda0a182267185c995a2af737ba8cb2f6179f2cdf52505f8d933e712fc4e56d10e175ec8cdd62de6529ce1f078bfa0dc7a5284f8c565182f85d9');
  });


  it('produces the expected result for ShortMsgKAT_512 616', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('64105eca863515c20e7cfbaa0a0b8809046164f374d691cdbd6508aaabc1819f9ac84b52bafc1b0fe7cddbc554b608c01c8904c669d8db316a0953a4c68ece324ec5a49ffdb59a1bd6a292aa0e', 'hex'));
    assert.equal(instance.digest('hex'), '91a0241eda8ca597cbb0f703ab7dbaaf859cff77b20401ad46230ce3b2beef6685775de37576014d8da1ba672d47aad95fb53c590b650634cebb43a175738569');
  });


  it('produces the expected result for ShortMsgKAT_512 624', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d4654be288b9f3b711c2d02015978a8cc57471d5680a092aa534f7372c71ceaab725a383c4fcf4d8deaa57fca3ce056f312961eccf9b86f14981ba5bed6ab5b4498e1f6c82c6cae6fc14845b3c8a', 'hex'));
    assert.equal(instance.digest('hex'), '00b02dbcb7a3bc117701f2f159fc4492923c437d3369833a9bd09e78e260d48d37168d36c49777b2e68e6fe9846106a6ab8768c3971fab31fd922aacb87d1cac');
  });


  it('produces the expected result for ShortMsgKAT_512 632', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('12d9394888305ac96e65f2bf0e1b18c29c90fe9d714dd59f651f52b88b3008c588435548066ea2fc4c101118c91f32556224a540de6efddbca296ef1fb00341f5b01fecfc146bdb251b3bdad556cd2', 'hex'));
    assert.equal(instance.digest('hex'), '3dedf819b357dfab1c7092abd872a1554dd0962e9944eef9f7f8bce830f2d74f1d9ba2b748bbc6ee0b7600be8cb0ffcb79924d9f51cdb9b06bd6fd37f3050229');
  });


  it('produces the expected result for ShortMsgKAT_512 640', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('871a0d7a5f36c3da1dfce57acd8ab8487c274fad336bc137ebd6ff4658b547c1dcfab65f037aa58f35ef16aff4abe77ba61f65826f7be681b5b6d5a1ea8085e2ae9cd5cf0991878a311b549a6d6af230', 'hex'));
    assert.equal(instance.digest('hex'), '5fbe194557b0426f96ba60712176df073eafe04f2a50515455412ea3d80c116758ad952598f48031612181d82a16efe4668ffb3bcce9563a772fe416ff6db3b3');
  });


  it('produces the expected result for ShortMsgKAT_512 648', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e90b4ffef4d457bc7711ff4aa72231ca25af6b2e206f8bf859d8758b89a7cd36105db2538d06da83bad5f663ba11a5f6f61f236fd5f8d53c5e89f183a3cec615b50c7c681e773d109ff7491b5cc22296c5', 'hex'));
    assert.equal(instance.digest('hex'), '2e8ab1619859c11473dc7c474ce8b0ae44b1c38417816fd95b9e0614f31e51ebb1dd16d1cbb584c4ebd28aa99f4a68e09dfe3ad462487f2608124b7528293045');
  });


  it('produces the expected result for ShortMsgKAT_512 656', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e728de62d75856500c4c77a428612cd804f30c3f10d36fb219c5ca0aa30726ab190e5f3f279e0733d77e7267c17be27d21650a9a4d1e32f649627638dbada9702c7ca303269ed14014b2f3cf8b894eac8554', 'hex'));
    assert.equal(instance.digest('hex'), 'db2d182bdbac6ac866537e24712332cae74dc3d36168982e4453dd6e009658345255013bc0a54fca17aeedcc4beb79bdee192cfab516d24591c8699f7c758179');
  });


  it('produces the expected result for ShortMsgKAT_512 664', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6348f229e7b1df3b770c77544e5166e081850fa1c6c88169db74c76e42eb983facb276ad6a0d1fa7b50d3e3b6fcd799ec97470920a7abed47d288ff883e24ca21c7f8016b93bb9b9e078bdb9703d2b781b616e', 'hex'));
    assert.equal(instance.digest('hex'), '90a2c05f7001d985b587a046b488bf4ed29d75cc03a745731b5b0ce51bb86387c4ce34018a6d906eb7beb41a09afe9fedd99aacc41b4556f75229c8688c7fca2');
  });


  it('produces the expected result for ShortMsgKAT_512 672', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('4b127fde5de733a1680c2790363627e63ac8a3f1b4707d982caea258655d9bf18f89afe54127482ba01e08845594b671306a025c9a5c5b6f93b0a39522dc877437be5c2436cbf300ce7ab6747934fcfc30aeaaf6', 'hex'));
    assert.equal(instance.digest('hex'), 'ea3991c4a8a5f0146402de4ae235054c78a48dca340a7d4ad8753995f82347ecfc0054d64eb4f20abc4f415c54701cbc61a7b239a7c221b833d9ea9f94b154e8');
  });


  it('produces the expected result for ShortMsgKAT_512 680', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('08461f006cff4cc64b752c957287e5a0faabc05c9bff89d23fd902d324c79903b48fcb8f8f4b01f3e4ddb483593d25f000386698f5ade7faade9615fdc50d32785ea51d49894e45baa3dc707e224688c6408b68b11', 'hex'));
    assert.equal(instance.digest('hex'), '1313023b753ed1727f13cc67a64b989a8bf6548324df9854d8d5a963ed3d860257fe6522b9c6d6cb1bcadf322c985601ba36f7e67110192094aa8f9869a458a8');
  });


  it('produces the expected result for ShortMsgKAT_512 688', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('68c8f8849b120e6e0c9969a5866af591a829b92f33cd9a4a3196957a148c49138e1e2f5c7619a6d5edebe995acd81ec8bb9c7b9cfca678d081ea9e25a75d39db04e18d475920ce828b94e72241f24db72546b352a0e4', 'hex'));
    assert.equal(instance.digest('hex'), '9bca2a1a5546a11275bf42f0b48492868359c78d94785a0ee12dc1c3d70a8e97eb462148faed1ffa4dab0e91519bd36c0c5c5fe7cfcff3e180680318e1fcf75b');
  });


  it('produces the expected result for ShortMsgKAT_512 696', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b8d56472954e31fb54e28fca743f84d8dc34891cb564c64b08f7b71636debd64ca1edbdba7fc5c3e40049ce982bba8c7e0703034e331384695e9de76b5104f2fbc4535ecbeebc33bc27f29f18f6f27e8023b0fbb6f563c', 'hex'));
    assert.equal(instance.digest('hex'), '8492f5e621e82fdbff1976b1beecff7d137805b5736ab49216122a95396b863a0481212b6daba8b05e29e287bb0e2f588f86407c84dbfb894e6acfc6f6b2e571');
  });


  it('produces the expected result for ShortMsgKAT_512 704', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0d58ac665fa84342e60cefee31b1a4eacdb092f122dfc68309077aed1f3e528f578859ee9e4cefb4a728e946324927b675cd4f4ac84f64db3dacfe850c1dd18744c74ceccd9fe4dc214085108f404eab6d8f452b5442a47d', 'hex'));
    assert.equal(instance.digest('hex'), 'eebe4ec0fe3e0266527f4d9f57a017637eab92377d82b15856a55a22b008df67f27aa5ac04e1deeeb2c819ce41db07dbf6dcaf17a192a4371a1e92badf1e6389');
  });


  it('produces the expected result for ShortMsgKAT_512 712', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1755e2d2e5d1c1b0156456b539753ff416651d44698e87002dcf61dcfa2b4e72f264d9ad591df1fdee7b41b2eb00283c5aebb3411323b672eaa145c5125185104f20f335804b02325b6dea65603f349f4d5d8b782dd3469ccd', 'hex'));
    assert.equal(instance.digest('hex'), '9e36e6291bc2296cb4ba71109cedcc2a3f0b4f1ae5e5406dc4b3e594551d5c70e6f814d2c9b8413103ef07535886b4ac518aaf7aed64abed7a5b0a26f7171425');
  });


  it('produces the expected result for ShortMsgKAT_512 720', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b180de1a611111ee7584ba2c4b020598cd574ac77e404e853d15a101c6f5a2e5c801d7d85dc95286a1804c870bb9f00fd4dcb03aa8328275158819dcad7253f3e3d237aeaa7979268a5db1c6ce08a9ec7c2579783c8afc1f91a7', 'hex'));
    assert.equal(instance.digest('hex'), 'f1089483a00b2601be9c16469a090efc49fcb70e62ac0ffea2d1e508083cd5d41dcf2daae1e0eac217859e5feaddcb782ac471c01d7266136185d37b568e9606');
  });


  it('produces the expected result for ShortMsgKAT_512 728', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('cf3583cbdfd4cbc17063b1e7d90b02f0e6e2ee05f99d77e24e560392535e47e05077157f96813544a17046914f9efb64762a23cf7a49fe52a0a4c01c630cfe8727b81fb99a89ff7cc11dca5173057e0417b8fe7a9efba6d95c555f', 'hex'));
    assert.equal(instance.digest('hex'), 'd063ea794cfd2ed9248665a6084a7b99051c1051e41b7d9dcb1537a1c79cba6deb4d844c6a618e43c7ca020d16976999684feb084616f707209f75c4bd584d86');
  });


  it('produces the expected result for ShortMsgKAT_512 736', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('072fc02340ef99115bad72f92c01e4c093b9599f6cfc45cb380ee686cb5eb019e806ab9bd55e634ab10aa62a9510cc0672cd3eddb589c7df2b67fcd3329f61b1a4441eca87a33c8f55da4fbbad5cf2b2527b8e983bb31a2fadec7523', 'hex'));
    assert.equal(instance.digest('hex'), '424a86d746c87c85dabd1dae298a488e4ca2183de692d1d01c4b7994ee5124f9004bea84933c311cc38ea6f604a7769ee178e1ec160a9891c42c462a13a62286');
  });


  it('produces the expected result for ShortMsgKAT_512 744', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('76eecf956a52649f877528146de33df249cd800e21830f65e90f0f25ca9d6540fde40603230eca6760f1139c7f268deba2060631eea92b1fff05f93fd5572fbe29579ecd48bc3a8d6c2eb4a6b26e38d6c5fbf2c08044aeea470a8f2f26', 'hex'));
    assert.equal(instance.digest('hex'), 'a9403c26a96de2c3d359ee29f3fd1c581154852d19ad12884b79e7082d2da22ec83553baba2bdff2a2fa15947a8e6acd5f5d113ec091bfd1962a0a10401d2c98');
  });


  it('produces the expected result for ShortMsgKAT_512 752', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7adc0b6693e61c269f278e6944a5a2d8300981e40022f839ac644387bfac9086650085c2cdc585fea47b9d2e52d65a2b29a7dc370401ef5d60dd0d21f9e2b90fae919319b14b8c5565b0423cefb827d5f1203302a9d01523498a4db10374', 'hex'));
    assert.equal(instance.digest('hex'), '3d23632ee4c2d4f4118a02a677b5a32427c72ba54899ba2e6ccd22ec3defe0fcb052e3f83d35786cea2080eed148a0a94628e735202e6b2809994c5f5bdafdd6');
  });


  it('produces the expected result for ShortMsgKAT_512 760', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e1fffa9826cce8b86bccefb8794e48c46cdf372013f782eced1e378269b7be2b7bf51374092261ae120e822be685f2e7a83664bcfbe38fe8633f24e633ffe1988e1bc5acf59a587079a57a910bda60060e85b5f5b6f776f0529639d9cce4bd', 'hex'));
    assert.equal(instance.digest('hex'), 'd8fa886884ce577a7282deceacf4786e7c68fc69b141137ff5dc7cb3c5f8abc845716dd27397e8bd5ce245107a984a3f8b21f19f99ed40118621dc85303a30b4');
  });


  it('produces the expected result for ShortMsgKAT_512 768', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('69f9abba65592ee01db4dce52dbab90b08fc04193602792ee4daa263033d59081587b09bbe49d0b49c9825d22840b2ff5d9c5155f975f8f2c2e7a90c75d2e4a8040fe39f63bbafb403d9e28cc3b86e04e394a9c9e8065bd3c85fa9f0c7891600', 'hex'));
    assert.equal(instance.digest('hex'), 'c768cd313602fabb2193f9edbf667b4cdabd57d5ff60bdc22ba7bad5319ea04e7cbec5d4b4c4560ad52609fdd22750b618951796376ed41b2a8eaffdd9927722');
  });


  it('produces the expected result for ShortMsgKAT_512 776', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('38a10a352ca5aedfa8e19c64787d8e9c3a75dbf3b8674bfab29b5dbfc15a63d10fae66cd1a6e6d2452d557967eaad89a4c98449787b0b3164ca5b717a93f24eb0b506ceb70cbbcb8d72b2a72993f909aad92f044e0b5a2c9ac9cb16a0ca2f81f49', 'hex'));
    assert.equal(instance.digest('hex'), '8562ce9399806623b2695712266af3d4c14f77d2449143379246962c22398c813544a7dee4c4847f09d3cbe437349b7fc6738ac97075b5dd9e2add6ecaa610f4');
  });


  it('produces the expected result for ShortMsgKAT_512 784', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6d8c6e449bc13634f115749c248c17cd148b72157a2c37bf8969ea83b4d6ba8c0ee2711c28ee11495f43049596520ce436004b026b6c1f7292b9c436b055cbb72d530d860d1276a1502a5140e3c3f54a93663e4d20edec32d284e25564f624955b52', 'hex'));
    assert.equal(instance.digest('hex'), '99ade7b13e8e79aea6ed01a25e10e401cd1d055884575eab3e66b2294f03f8d5dbf72ab1ae39103189383ebfd2e43258510c124a894a793b206fac752c035789');
  });


  it('produces the expected result for ShortMsgKAT_512 792', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6efcbcaf451c129dbe00b9cef0c3749d3ee9d41c7bd500ade40cdc65dedbbbadb885a5b14b32a0c0d087825201e303288a733842fa7e599c0c514e078f05c821c7a4498b01c40032e9f1872a1c925fa17ce253e8935e4c3c71282242cb716b2089ccc1', 'hex'));
    assert.equal(instance.digest('hex'), 'd12831ba39dbcd41f56bc7fc071bdaabfb6e7572d08b2fda3bddfc6fa5662f4bdbfa431ca2e38b18172709072e50120db6be93e86cb4ace3c11dd0e1f3f5c712');
  });


  it('produces the expected result for ShortMsgKAT_512 800', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('433c5303131624c0021d868a30825475e8d0bd3052a022180398f4ca4423b98214b6beaac21c8807a2c33f8c93bd42b092cc1b06cedf3224d5ed1ec29784444f22e08a55aa58542b524b02cd3d5d5f6907afe71c5d7462224a3f9d9e53e7e0846dcbb4ce', 'hex'));
    assert.equal(instance.digest('hex'), '527d28e341e6b14f4684adb4b824c496c6482e51149565d3d17226828884306b51d6148a72622c2b75f5d3510b799d8bdc03eaede453676a6ec8fe03a1ad0eab');
  });


  it('produces the expected result for ShortMsgKAT_512 808', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a873e0c67ca639026b6683008f7aa6324d4979550e9bce064ca1e1fb97a30b147a24f3f666c0a72d71348ede701cf2d17e2253c34d1ec3b647dbcef2f879f4eb881c4830b791378c901eb725ea5c172316c6d606e0af7df4df7f76e490cd30b2badf45685f', 'hex'));
    assert.equal(instance.digest('hex'), 'cacdcf8bf855040e9795c422069d8e37b6286066a2197a320bd934061f66995227be6b85fd928b834d3ca45e1ac3844d9dc66d61581e7799ccfde008639ab3dd');
  });


  it('produces the expected result for ShortMsgKAT_512 816', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('006917b64f9dcdf1d2d87c8a6173b64f6587168e80faa80f82d84f60301e561e312d9fbce62f39a6fb476e01e925f26bcc91de621449be6504c504830aae394096c8fc7694651051365d4ee9070101ec9b68086f2ea8f8ab7b811ea8ad934d5c9b62c60a4771', 'hex'));
    assert.equal(instance.digest('hex'), 'f454a953501e191a12a80c7a5398f081cef738e25d48b076a52f77fb09ef0bc2325116020bb06c2c585da9f115bd9d8f13b50e8e1fb1664450fae690b7783400');
  });


  it('produces the expected result for ShortMsgKAT_512 824', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f13c972c52cb3cc4a4df28c97f2df11ce089b815466be88863243eb318c2adb1a417cb1041308598541720197b9b1cb5ba2318bd5574d1df2174af14884149ba9b2f446d609df240ce335599957b8ec80876d9a085ae084907bc5961b20bf5f6ca58d5dab38adb', 'hex'));
    assert.equal(instance.digest('hex'), '5f968cc6ecf71c588a3c3ba68858bbff96861f66c0733fd61fa91a479a49618df22d9490219df8008dc78840ae022c5d41af2b890d0214e562da8df0cb3f8522');
  });


  it('produces the expected result for ShortMsgKAT_512 832', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e35780eb9799ad4c77535d4ddb683cf33ef367715327cf4c4a58ed9cbdcdd486f669f80189d549a9364fa82a51a52654ec721bb3aab95dceb4a86a6afa93826db923517e928f33e3fba850d45660ef83b9876accafa2a9987a254b137c6e140a21691e1069413848', 'hex'));
    assert.equal(instance.digest('hex'), 'e7149461f9cd00b71c216c50041b3eda9707d7360d4c21740c44c212256a31da398fe09708e450ea4e2826b7ec20bef76cd2fbd9d096af6f77f84abc2e4fb093');
  });


  it('produces the expected result for ShortMsgKAT_512 840', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('64ec021c9585e01ffe6d31bb50d44c79b6993d72678163db474947a053674619d158016adb243f5c8d50aa92f50ab36e579ff2dabb780a2b529370daa299207cfbcdd3a9a25006d19c4f1fe33e4b1eaec315d8c6ee1e730623fd1941875b924eb57d6d0c2edc4e78d6', 'hex'));
    assert.equal(instance.digest('hex'), '77097413caa5a2d38259d47ec078871fa09ee5614d4c14feb7a95c921c0aae93b8737a6dc89e57693be8a0710206664b80b657a1079605a0ff9664bbcb0722d6');
  });


  it('produces the expected result for ShortMsgKAT_512 848', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5954bab512cf327d66b5d9f296180080402624ad7628506b555eea8382562324cf452fba4a2130de3e165d11831a270d9cb97ce8c2d32a96f50d71600bb4ca268cf98e90d6496b0a6619a5a8c63db6d8a0634dfc6c7ec8ea9c006b6c456f1b20cd19e781af20454ac880', 'hex'));
    assert.equal(instance.digest('hex'), '55d8e5202360d7d5841419362f864cc900e11c582fd0cab2ff5f1680f6ce927b5379e27a335ebafe1286b9d4a172ab761a36eade60f10468eac4ceafbf63c7cc');
  });


  it('produces the expected result for ShortMsgKAT_512 856', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('03d9f92b2c565709a568724a0aff90f8f347f43b02338f94a03ed32e6f33666ff5802da4c81bdce0d0e86c04afd4edc2fc8b4141c2975b6f07639b1994c973d9a9afce3d9d365862003498513bfa166d2629e314d97441667b007414e739d7febf0fe3c32c17aa188a8683', 'hex'));
    assert.equal(instance.digest('hex'), 'effb03b497add6230a0ed99122ea868138644ab81e861491e526fae37c39872ca731804a0004599849478a787bc7fce21903ed551d7db881d2a2c367b6168547');
  });


  it('produces the expected result for ShortMsgKAT_512 864', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f31e8b4f9e0621d531d22a380be5d9abd56faec53cbd39b1fab230ea67184440e5b1d15457bd25f56204fa917fa48e669016cb48c1ffc1e1e45274b3b47379e00a43843cf8601a5551411ec12503e5aac43d8676a1b2297ec7a0800dbfee04292e937f21c005f17411473041', 'hex'));
    assert.equal(instance.digest('hex'), 'a2269a6ef2ea8f1cf8bc3394d27657b0db996c55e7c47784c0b451202fc5279679d79e06f8dbaa9a63665fd0e914d13c6e056ea006daaf4cb61d2629468e3d25');
  });


  it('produces the expected result for ShortMsgKAT_512 872', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('758ea3fea738973db0b8be7e599bbef4519373d6e6dcd7195ea885fc991d896762992759c2a09002912fb08e0cb5b76f49162aeb8cf87b172cf3ad190253df612f77b1f0c532e3b5fc99c2d31f8f65011695a087a35ee4eee5e334c369d8ee5d29f695815d866da99df3f79403', 'hex'));
    assert.equal(instance.digest('hex'), '5a2970d5ec346a8e4e1d5d1e57dc22f6875ddf1ce3626b49a91109e0de991033e932f883b6a795016d5014e268304abe2f7577505aab00956911781f075d113a');
  });


  it('produces the expected result for ShortMsgKAT_512 880', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('47c6e0c2b74948465921868804f0f7bd50dd323583dc784f998a93cd1ca4c6ef84d41dc81c2c40f34b5bee6a93867b3bdba0052c5f59e6f3657918c382e771d33109122cc8bb0e1e53c4e3d13b43ce44970f5e0c079d2ad7d7a3549cd75760c21bb15b447589e86e8d76b1e9ced2', 'hex'));
    assert.equal(instance.digest('hex'), '2b4356a64df31936b27f4530f076ee73e71e4e48abde04ff1f548e0727f4a5810b71874187fd96ed510d0d6886af11960a0b3bad1ee75dda4cdc148e162edae9');
  });


  it('produces the expected result for ShortMsgKAT_512 888', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f690a132ab46b28edfa6479283d6444e371c6459108afd9c35dbd235e0b6b6ff4c4ea58e7554bd002460433b2164ca51e868f7947d7d7a0d792e4abf0be5f450853cc40d85485b2b8857ea31b5ea6e4ccfa2f3a7ef3380066d7d8979fdac618aad3d7e886dea4f005ae4ad05e5065f', 'hex'));
    assert.equal(instance.digest('hex'), 'edcb59984267bb00402a78f2ca345ef2494956172e10927ee63aff23d0c834bca50c47cdbffd8995036307e9ed4b143e853450367d0e14afc8490073653cd850');
  });


  it('produces the expected result for ShortMsgKAT_512 896', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('58d6a99bc6458824b256916770a8417040721cccfd4b79eacd8b65a3767ce5ba7e74104c985ac56b8cc9aebd16febd4cda5adb130b0ff2329cc8d611eb14dac268a2f9e633c99de33997fea41c52a7c5e1317d5b5daed35eba7d5a60e45d1fa7eaabc35f5c2b0a0f2379231953322c4e', 'hex'));
    assert.equal(instance.digest('hex'), 'd0b453fbe709c69125dc8fe9e8ae9245211612970373b454f8656a755e8435b321dd3a980fa28719641747e254dc42c9bf012b4d6dbd7ed13020a83b44c504aa');
  });


  it('produces the expected result for ShortMsgKAT_512 904', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('befab574396d7f8b6705e2d5b58b2c1c820bb24e3f4bae3e8fbcd36dbf734ee14e5d6ab972aedd3540235466e825850ee4c512ea9795abfd33f330d9fd7f79e62bbb63a6ea85de15beaeea6f8d204a28956059e2632d11861dfb0e65bc07ac8a159388d5c3277e227286f65ff5e5b5aec1', 'hex'));
    assert.equal(instance.digest('hex'), 'fe97c011e525110e03149fac4179891afcb6304e1cfd9d84cb7389755554ee723571d76b80b9333a695884192340b3fe022d4a233b7aa8e8c7686745cfe75e67');
  });


  it('produces the expected result for ShortMsgKAT_512 912', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8e58144fa9179d686478622ce450c748260c95d1ba43b8f9b59abeca8d93488da73463ef40198b4d16fb0b0707201347e0506ff19d01bea0f42b8af9e71a1f1bd168781069d4d338fdef00bf419fbb003031df671f4a37979564f69282de9c65407847dd0da505ab1641c02dea4f0d834986', 'hex'));
    assert.equal(instance.digest('hex'), '1bc4ac8d979ca62a7fc81c710cedf65af56c9b652eec356aa92da924d370fdebdf076f91ba4fe1ec5cd78fc4c8885ea4304ba2e8e64944ab4bf4d1b3d7dee745');
  });


  it('produces the expected result for ShortMsgKAT_512 920', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b55c10eae0ec684c16d13463f29291bf26c82e2fa0422a99c71db4af14dd9c7f33eda52fd73d017cc0f2dbe734d831f0d820d06d5f89dacc485739144f8cfd4799223b1aff9031a105cb6a029ba71e6e5867d85a554991c38df3c9ef8c1e1e9a7630be61caabca69280c399c1fb7a12d12aefc', 'hex'));
    assert.equal(instance.digest('hex'), '76e970e9449d868067cd23b1a202cbdc99693ff6fa74ba644ec41cbf8fd139cb0f5d1106fcd6c871c315ff41c3eaf99c636288f0fcf6a40b480cb881d87e098f');
  });


  it('produces the expected result for ShortMsgKAT_512 928', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2eeea693f585f4ed6f6f8865bbae47a6908aecd7c429e4bec4f0de1d0ca0183fa201a0cb14a529b7d7ac0e6ff6607a3243ee9fb11bcf3e2304fe75ffcddd6c5c2e2a4cd45f63c962d010645058d36571404a6d2b4f44755434d76998e83409c3205aa1615db44057db991231d2cb42624574f545', 'hex'));
    assert.equal(instance.digest('hex'), '871666b230c5ad75b96d63be22870621c68fd0899655ba7dc0e0e5299915af252c226dd7217601d3a6880d55ee5a20b10820e21c74f730eea9d47fe26debe006');
  });


  it('produces the expected result for ShortMsgKAT_512 936', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('dab11dc0b047db0420a585f56c42d93175562852428499f66a0db811fcdddab2f7cdffed1543e5fb72110b64686bc7b6887a538ad44c050f1e42631bc4ec8a9f2a047163d822a38989ee4aab01b4c1f161b062d873b1cfa388fd301514f62224157b9bef423c7783b7aac8d30d65cd1bba8d689c2d', 'hex'));
    assert.equal(instance.digest('hex'), '7e3ef62552b28a2b18a71ceef2dd8659c8bdf291385ad02fed353775e01594f27cc28cc78663e17cb8b39fd4ea48d494ad0bd7aee9277ec9b21e46523812736e');
  });


  it('produces the expected result for ShortMsgKAT_512 944', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('42e99a2f80aee0e001279a2434f731e01d34a44b1a8101726921c0590c30f3120eb83059f325e894a5ac959dca71ce2214799916424e859d27d789437b9d27240bf8c35adbafcecc322b48aa205b293962d858652abacbd588bcf6cbc388d0993bd622f96ed54614c25b6a9aa527589eaaffcf17ddf7', 'hex'));
    assert.equal(instance.digest('hex'), '0b87f6ebaa293ff79c873820846c0fcc943e3a83bd8111931ff03ff3b0bf785c961ca84cf3fd40e0d831dbaea595498fc12da88cc507de720a35c01d73fc9595');
  });


  it('produces the expected result for ShortMsgKAT_512 952', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3c9b46450c0f2cae8e3823f8bdb4277f31b744ce2eb17054bddc6dff36af7f49fb8a2320cc3bdf8e0a2ea29ad3a55de1165d219adeddb5175253e2d1489e9b6fdd02e2c3d3a4b54d60e3a47334c37913c5695378a669e9b72dec32af5434f93f46176ebf044c4784467c700470d0c0b40c8a088c815816', 'hex'));
    assert.equal(instance.digest('hex'), '681babbd2e351501c285812e06f20940fd865516cf028b4787d1ffccd0d537705e8e9b73c608d5a8dc4f08eee0902ac12936ddb8c7b29228c6aaf8d0b909c30d');
  });


  it('produces the expected result for ShortMsgKAT_512 960', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d1e654b77cb155f5c77971a64df9e5d34c26a3cad6c7f6b300d39deb1910094691adaa095be4ba5d86690a976428635d5526f3e946f7dc3bd4dbc78999e653441187a81f9adcd5a3c5f254bc8256b0158f54673dcc1232f6e918ebfc6c51ce67eaeb042d9f57eec4bfe910e169af78b3de48d137df4f2840', 'hex'));
    assert.equal(instance.digest('hex'), 'c46d2262f186421d07fd740f922306d99b1e3826f6a32486be5a91dc298f177f50915e17eb4ea2e45494c501736cefb0e22acd989da41ac7bb7be56b04bfb5e1');
  });


  it('produces the expected result for ShortMsgKAT_512 968', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('626f68c18a69a6590159a9c46be03d5965698f2dac3de779b878b3d9c421e0f21b955a16c715c1ec1e22ce3eb645b8b4f263f60660ea3028981eebd6c8c3a367285b691c8ee56944a7cd1217997e1d9c21620b536bdbd5de8925ff71dec6fbc06624ab6b21e329813de90d1e572dfb89a18120c3f606355d25', 'hex'));
    assert.equal(instance.digest('hex'), '0b3dbc770332823e686470d842104d3b3c1452f64f1bcc71c5f3fad1c0d93f21efbd48d73c7d4909227b06b06d54057a74e03c36d9c106eba79411f1e6e1cffe');
  });


  it('produces the expected result for ShortMsgKAT_512 976', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('651a6fb3c4b80c7c68c6011675e6094eb56abf5fc3057324ebc6477825061f9f27e7a94633abd1fa598a746e4a577caf524c52ec1788471f92b8c37f23795ca19d559d446cab16cbcdce90b79fa1026cee77bf4ab1b503c5b94c2256ad75b3eac6fd5dcb96aca4b03a834bfb4e9af988cecbf2ae597cb9097940', 'hex'));
    assert.equal(instance.digest('hex'), 'ca46276b0dc2ec4424bb7136eae1af207bd6e5cd833691c7d37b2caeaf4f484b96a3476fc25feb206ad37cf975383dd522ca0cc6200a3867fee7f178d6953fef');
  });


  it('produces the expected result for ShortMsgKAT_512 984', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8aaf072fce8a2d96bc10b3c91c809ee93072fb205ca7f10abd82ecd82cf040b1bc49ea13d1857815c0e99781de3adbb5443ce1c897e55188ceaf221aa9681638de05ae1b322938f46bce51543b57ecdb4c266272259d1798de13be90e10efec2d07484d9b21a3870e2aa9e06c21aa2d0c9cf420080a80a91dee16f', 'hex'));
    assert.equal(instance.digest('hex'), '815b44668bf3751a3392940fca54c1e3e4ef5227b052332afe6eb7a10ac8ad6438ce8a0277aa14bcc41590f6d6a10b6b1babe6bb4f8d777ea576d634b0be41c0');
  });


  it('produces the expected result for ShortMsgKAT_512 992', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('53f918fd00b1701bd504f8cdea803acca21ac18c564ab90c2a17da592c7d69688f6580575395551e8cd33e0fef08ca6ed4588d4d140b3e44c032355df1c531564d7f4835753344345a6781e11cd5e095b73df5f82c8ae3ad00877936896671e947cc52e2b29dcd463d90a0c9929128da222b5a211450bbc0e02448e2', 'hex'));
    assert.equal(instance.digest('hex'), 'f47799a8547fc9c07d0f808029e7335607d72224be286e118657bd13a2c51d0374426d9eeb7693bde5ec6181574c1404df29bf96941862ba1a0a9a5903319498');
  });


  it('produces the expected result for ShortMsgKAT_512 1000', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a64599b8a61b5ccec9e67aed69447459c8da3d1ec6c7c7c82a7428b9b584fa67e90f68e2c00fbbed4613666e5168da4a16f395f7a3c3832b3b134bfc9cbaa95d2a0fe252f44ac6681eb6d40ab91c1d0282fed6701c57463d3c5f2bb8c6a7301fb4576aa3b5f15510db8956ff77478c26a7c09bea7b398cfc83503f538e', 'hex'));
    assert.equal(instance.digest('hex'), '8a0ae12a9e797fb7bd46cbb910076a32873bffcb9ad98b4fc37316aed681ec49c65abbb9586405ff96cc80da4bb8fa73be1ba9e737595b2307cf369d61baf59c');
  });


  it('produces the expected result for ShortMsgKAT_512 1008', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0e3ab0e054739b00cdb6a87bd12cae024b54cb5e550e6c425360c2e87e59401f5ec24ef0314855f0f56c47695d56a7fb1417693af2a1ed5291f2fee95f75eed54a1b1c2e81226fbff6f63ade584911c71967a8eb70933bc3f5d15bc91b5c2644d9516d3c3a8c154ee48e118bd1442c043c7a0dba5ac5b1d5360aae5b9065', 'hex'));
    assert.equal(instance.digest('hex'), 'a3c6d58872bafdedfdd50c0309089240d6977d4d3d59fb3f2be133c57d2dfcfcc7c027296f74fe58b2a9a6cb7e5d70088934d051cba57001fe27965cfa071a6f');
  });


  it('produces the expected result for ShortMsgKAT_512 1016', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a62fc595b4096e6336e53fcdfc8d1cc175d71dac9d750a6133d23199eaac288207944cea6b16d27631915b4619f743da2e30a0c00bbdb1bbb35ab852ef3b9aec6b0a8dcc6e9e1abaa3ad62ac0a6c5de765de2c3711b769e3fde44a74016fff82ac46fa8f1797d3b2a726b696e3dea5530439acee3a45c2a51bc32dd055650b', 'hex'));
    assert.equal(instance.digest('hex'), '11e0e521b55f02befc7207c06444fcc0c16dcf6f34962921b709a322f35e2193477b0dfa21f213f209705ff3958531a75d94346075feb29a288b62e2315ae270');
  });


  it('produces the expected result for ShortMsgKAT_512 1024', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2b6db7ced8665ebe9deb080295218426bdaa7c6da9add2088932cdffbaa1c14129bccdd70f369efb149285858d2b1d155d14de2fdb680a8b027284055182a0cae275234cc9c92863c1b4ab66f304cf0621cd54565f5bff461d3b461bd40df28198e3732501b4860eadd503d26d6e69338f4e0456e9e9baf3d827ae685fb1d817', 'hex'));
    assert.equal(instance.digest('hex'), 'aebba57c8ed5af6ec93f4aa45772ff5167b7ea88dfa71364f37d8fc5fdb7dc3b2c8331a08023f21d110b7d821e2dc7e860826235e7e6291912ac521384747354');
  });


  it('produces the expected result for ShortMsgKAT_512 1032', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('10db509b2cdcaba6c062ae33be48116a29eb18e390e1bbada5ca0a2718afbcd23431440106594893043cc7f2625281bf7de2655880966a23705f0c5155c2f5cca9f2c2142e96d0a2e763b70686cd421b5db812daced0c6d65035fde558e94f26b3e6dde5bd13980cc80292b723013bd033284584bff27657871b0cf07a849f4ae2', 'hex'));
    assert.equal(instance.digest('hex'), '2df1e09540b53a17222dab66275cebeceb1f8a5db26b0c41f955fa0549f3367e82299e0cd673958af7dfa04d741aa63ba2c1ad351764dc9228d215f22c24ca58');
  });


  it('produces the expected result for ShortMsgKAT_512 1040', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('9334de60c997bda6086101a6314f64e4458f5ff9450c509df006e8c547983c651ca97879175aaba0c539e82d05c1e02c480975cbb30118121061b1ebac4f8d9a3781e2db6b18042e01ecf9017a64a0e57447ec7fcbe6a7f82585f7403ee2223d52d37b4bf426428613d6b4257980972a0acab508a7620c1cb28eb4e9d30fc41361ec', 'hex'));
    assert.equal(instance.digest('hex'), '8299cfcea5f00c93a5eb8a84a13628a68b26796d53fb6a986c95b0b1c248920fb946d8af98343d14efc74a4611c53ccc27c5f14c7237af28364346ca5cd70d1a');
  });


  it('produces the expected result for ShortMsgKAT_512 1048', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e88ab086891693aa535ceb20e64c7ab97c7dd3548f3786339897a5f0c39031549ca870166e477743ccfbe016b4428d89738e426f5ffe81626137f17aecff61b72dbee2dc20961880cfe281dfab5ee38b1921881450e16032de5e4d55ad8d4fca609721b0692bac79be5a06e177fe8c80c0c83519fb3347de9f43d5561cb8107b9b5edc', 'hex'));
    assert.equal(instance.digest('hex'), 'af57bea357fcba0579c4204c0f8dff181bc8a473014bae78df76069de478b2f2a390327a65bdd24be926551c78f70b0d5f1c8f4b970997d557f06336a315a749');
  });


  it('produces the expected result for ShortMsgKAT_512 1056', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fd19e01a83eb6ec810b94582cb8fbfa2fcb992b53684fb748d2264f020d3b960cb1d6b8c348c2b54a9fcea72330c2aaa9a24ecdb00c436abc702361a82bb8828b85369b8c72ece0082fe06557163899c2a0efa466c33c04343a839417057399a63a3929be1ee4805d6ce3e5d0d0967fe9004696a5663f4cac9179006a2ceb75542d75d68', 'hex'));
    assert.equal(instance.digest('hex'), 'b299e421061ef26c32bb4f50ee669d05feb2ccba3297289c30e6434057b3ea7f617bbbf7a5555328fc291f794987577f458350df99af3a5778300be0bd80164f');
  });


  it('produces the expected result for ShortMsgKAT_512 1064', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('59ae20b6f7e0b3c7a989afb28324a40fca25d8651cf1f46ae383ef6d8441587aa1c04c3e3bf88e8131ce6145cfb8973d961e8432b202fa5af3e09d625faad825bc19da9b5c6c20d02abda2fcc58b5bd3fe507bf201263f30543819510c12bc23e2ddb4f711d087a86edb1b355313363a2de996b891025e147036087401ccf3ca7815bf3c49', 'hex'));
    assert.equal(instance.digest('hex'), 'cbdfb0d0e720f87259dd0d0b4e9c5319e7f88aaef7f7ab2fa1ca639afa0160822f96b3c357a4894ce53cd713fab23ad052e8565fa3b3a523cb9ce39a6bd535cc');
  });


  it('produces the expected result for ShortMsgKAT_512 1072', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('77ee804b9f3295ab2362798b72b0a1b2d3291dceb8139896355830f34b3b328561531f8079b79a6e9980705150866402fdc176c05897e359a6cb1a7ab067383eb497182a7e5aef7038e4c96d133b2782917417e391535b5e1b51f47d8ed7e4d4025fe98dc87b9c1622614bff3d1029e68e372de719803857ca52067cddaad958951cb2068cc6', 'hex'));
    assert.equal(instance.digest('hex'), '059a181c83a22bff0aa9baa22d872bdf23cbe341032cf0bf57997a4a1924d24fbae9dca14b6d290692b6a6b6344cbe531734f58ad0224c6e39bd1e87f870aad6');
  });


  it('produces the expected result for ShortMsgKAT_512 1080', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b771d5cef5d1a41a93d15643d7181d2a2ef0a8e84d91812f20ed21f147bef732bf3a60ef4067c3734b85bc8cd471780f10dc9e8291b58339a677b960218f71e793f2797aea349406512829065d37bb55ea796fa4f56fd8896b49b2cd19b43215ad967c712b24e5032d065232e02c127409d2ed4146b9d75d763d52db98d949d3b0fed6a8052fbb', 'hex'));
    assert.equal(instance.digest('hex'), '9edeeb10ee1b7bb8f16a280d8cc3eda5e909c554419ddc523b69ecedf2adf3b3c9bc66fef365342471c458126f083a3b8e7c0c9d9d77e9f90196b71f9aadf492');
  });


  it('produces the expected result for ShortMsgKAT_512 1088', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b32d95b0b9aad2a8816de6d06d1f86008505bd8c14124f6e9a163b5a2ade55f835d0ec3880ef50700d3b25e42cc0af050ccd1be5e555b23087e04d7bf9813622780c7313a1954f8740b6ee2d3f71f768dd417f520482bd3a08d4f222b4ee9dbd015447b33507dd50f3ab4247c5de9a8abd62a8decea01e3b87c8b927f5b08beb37674c6f8e380c04', 'hex'));
    assert.equal(instance.digest('hex'), 'a6054ffc3d81591be964c4b004a3a21142365b59ee98b2873d488293f93a8d7154bf72100012c60d3c9418f6af8ea66372cb4703f5f6381de6d4b9b98cff1e90');
  });


  it('produces the expected result for ShortMsgKAT_512 1096', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('04410e31082a47584b406f051398a6abe74e4da59bb6f85e6b49e8a1f7f2ca00dfba5462c2cd2bfde8b64fb21d70c083f11318b56a52d03b81cac5eec29eb31bd0078b6156786da3d6d8c33098c5c47bb67ac64db14165af65b44544d806dde5f487d5373c7f9792c299e9686b7e5821e7c8e2458315b996b5677d926dac57b3f22da873c601016a0d', 'hex'));
    assert.equal(instance.digest('hex'), 'b0e54a12fdba0738898f1bbf0ba81f81de77648d8d14c20bdd5d90f300d382e069f5dba7eec6b23168b008b9f39c2b93fd742a5902a5e02728f57712d6a61d4e');
  });


  it('produces the expected result for ShortMsgKAT_512 1104', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8b81e9badde026f14d95c019977024c9e13db7a5cd21f9e9fc491d716164bbacdc7060d882615d411438aea056c340cdf977788f6e17d118de55026855f93270472d1fd18b9e7e812bae107e0dfde7063301b71f6cfe4e225cab3b232905a56e994f08ee2891ba922d49c3dafeb75f7c69750cb67d822c96176c46bd8a29f1701373fb09a1a6e3c7158f', 'hex'));
    assert.equal(instance.digest('hex'), '3ce96077eb17c6a9c95a9a477748876c6451098dbea2b3261e6d75b64a988e1c75d7eac73bc2402afc726543e2a5bdb76689c0931ff762818dd2d3fe57a50fa9');
  });


  it('produces the expected result for ShortMsgKAT_512 1112', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fa6eed24da6666a22208146b19a532c2ec9ba94f09f1def1e7fc13c399a48e41acc2a589d099276296348f396253b57cb0e40291bd282773656b6e0d8bea1cda084a3738816a840485fcf3fb307f777fa5feac48695c2af4769720258c77943fb4556c362d9cba8bf103aeb9034baa8ea8bfb9c4f8e6742ce0d52c49ea8e974f339612e830e9e7a9c29065', 'hex'));
    assert.equal(instance.digest('hex'), 'c9acd6d98a349512b952d151ed501562f04ea4bb4b8965812510b9b842531a2b41a0108ac129cf9c9517be790921df64ad1dfc0b93ddba3415eebaf0da72f6a0');
  });


  it('produces the expected result for ShortMsgKAT_512 1120', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('9bb4af1b4f09c071ce3cafa92e4eb73ce8a6f5d82a85733440368dee4eb1cbc7b55ac150773b6fe47dbe036c45582ed67e23f4c74585dab509df1b83610564545642b2b1ec463e18048fc23477c6b2aa035594ecd33791af6af4cbc2a1166aba8d628c57e707f0b0e8707caf91cd44bdb915e0296e0190d56d33d8dde10b5b60377838973c1d943c22ed335e', 'hex'));
    assert.equal(instance.digest('hex'), '26b4e5c4fa85cb33359450e7f7158fb6a0739984565e9d9ebe6ad65b118296e9c1098c11541c871eb1b89853f1fa73ad8702ebf4fc9be4d0ab057e4391df964e');
  });


  it('produces the expected result for ShortMsgKAT_512 1128', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2167f02118cc62043e9091a647cadbed95611a521fe0d64e8518f16c808ab297725598ae296880a773607a798f7c3cfce80d251ebec6885015f9abf7eaabae46798f82cb5926de5c23f44a3f9f9534b3c6f405b5364c2f8a8bdc5ca49c749bed8ce4ba48897062ae8424ca6dde5f55c0e42a95d1e292ca54fb46a84fbc9cd87f2d0c9e7448de3043ae22fdd229', 'hex'));
    assert.equal(instance.digest('hex'), '913bba5c0c13cc49d8310014cf5af1b63ba3d5db8a27699fcfc573688f0e826fb5a7b5d10d3a1de693aa66e08c0915e7278f61b5fa30f1263b134f016f74841f');
  });


  it('produces the expected result for ShortMsgKAT_512 1136', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('94b7fa0bc1c44e949b1d7617d31b4720cbe7ca57c6fa4f4094d4761567e389ecc64f6968e4064df70df836a47d0c713336b5028b35930d29eb7a7f9a5af9ad5cf441745baec9bb014ceeff5a41ba5c1ce085feb980bab9cf79f2158e03ef7e63e29c38d7816a84d4f71e0f548b7fc316085ae38a060ff9b8dec36f91ad9ebc0a5b6c338cbb8f6659d342a24368cf', 'hex'));
    assert.equal(instance.digest('hex'), 'e5d53e81866283179012d9239340b0cbfb8d7aebce0c824dc6653a652bb1b54e0883991be2c3e39ad111a7b24e95daf6f7d9a379d884d64f9c2afd645e1db5e2');
  });


  it('produces the expected result for ShortMsgKAT_512 1144', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('ea40e83cb18b3a242c1ecc6ccd0b7853a439dab2c569cfc6dc38a19f5c90acbf76aef9ea3742ff3b54ef7d36eb7ce4ff1c9ab3bc119cff6be93c03e208783335c0ab8137be5b10cdc66ff3f89a1bddc6a1eed74f504cbe7290690bb295a872b9e3fe2cee9e6c67c41db8efd7d863cf10f840fe618e7936da3dca5ca6df933f24f6954ba0801a1294cd8d7e66dfafec', 'hex'));
    assert.equal(instance.digest('hex'), '5da83b7e221933cd67fa2af8c9934db74ce822212c99e0ee01f5220b4fe1e9b0388e42e328a1d174e6368f5773853042543a9b493a94b625980b73df3f3fccbb');
  });


  it('produces the expected result for ShortMsgKAT_512 1152', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('157d5b7e4507f66d9a267476d33831e7bb768d4d04cc3438da12f9010263ea5fcafbde2579db2f6b58f911d593d5f79fb05fe3596e3fa80ff2f761d1b0e57080055c118c53e53cdb63055261d7c9b2b39bd90acc32520cbbdbda2c4fd8856dbcee173132a2679198daf83007a9b5c51511ae49766c792a29520388444ebefe28256fb33d4260439cba73a9479ee00c63', 'hex'));
    assert.equal(instance.digest('hex'), '72de9184beb5c6a37ea2c395734d0d5412991a57cffcc13ff9b5fa0f2046ee87c61811fe8ef2470239d5066c220173de5ebe41885ed8acae397fb395e6ca9aee');
  });


  it('produces the expected result for ShortMsgKAT_512 1160', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('836b34b515476f613fe447a4e0c3f3b8f20910ac89a3977055c960d2d5d2b72bd8acc715a9035321b86703a411dde0466d58a59769672aa60ad587b8481de4bba552a1645779789501ec53d540b904821f32b0bd1855b04e4848f9f8cfe9ebd8911be95781a759d7ad9724a7102dbe576776b7c632bc39b9b5e19057e226552a5994c1dbb3b5c7871a11f5537011044c53', 'hex'));
    assert.equal(instance.digest('hex'), 'b678fa7655584970dedbbc73a16d7840935b104d06dcb468ddd9814d6cf443fa6f9245824dbff3ab5fffef24b29cb2978796f37e7b49b1682d59f79e3c169e81');
  });


  it('produces the expected result for ShortMsgKAT_512 1168', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('cc7784a4912a7ab5ad3620aab29ba87077cd3cb83636adc9f3dc94f51edf521b2161ef108f21a0a298557981c0e53ce6ced45bdf782c1ef200d29bab81dd6460586964edab7cebdbbec75fd7925060f7da2b853b2b089588fa0f8c16ec6498b14c55dcee335cb3a91d698e4d393ab8e8eac0825f8adebeee196df41205c011674e53426caa453f8de1cbb57932b0b741d4c6', 'hex'));
    assert.equal(instance.digest('hex'), '66c64d5b0585dd8c40becd456e4b0188061ae8059f03e79fe04c40925442ba93b052f52087b30bdbfd4816bbd148696d4fa6c61f216253d7ac178b39ec44c770');
  });


  it('produces the expected result for ShortMsgKAT_512 1176', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7639b461fff270b2455ac1d1afce782944aea5e9087eb4a39eb96bb5c3baaf0e868c8526d3404f9405e79e77bfac5ffb89bf1957b523e17d341d7323c302ea7083872dd5e8705694acdda36d5a1b895aaa16eca6104c82688532c8bfe1790b5dc9f4ec5fe95baed37e1d287be710431f1e5e8ee105bc42ed37d74b1e55984bf1c09fe6a1fa13ef3b96faeaed6a2a1950a12153', 'hex'));
    assert.equal(instance.digest('hex'), 'a7bd506db9c0509ad47413af4b0e3948b47c18278f15f5b19fbb0b76e2c1c1f19db9438528eb6d87b0b4a509567db39f32641e2944365780914296cf3e48cecf');
  });


  it('produces the expected result for ShortMsgKAT_512 1184', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('eb6513fc61b30cfba58d4d7e80f94d14589090cf1d80b1df2e68088dc6104959ba0d583d585e9578ab0aec0cf36c48435eb52ed9ab4bbce7a5abe679c97ae2dbe35e8cc1d45b06dda3cf418665c57cbee4bbb47fa4caf78f4ee656fec237fe4eebbafa206e1ef2bd0ee4ae71bd0e9b2f54f91daadf1febfd7032381d636b733dcb3bf76fb14e23aff1f68ed3dbcf75c9b99c6f26', 'hex'));
    assert.equal(instance.digest('hex'), '2e681f9ddbd7c77eab0d225e2ad1f72256be239df25933bcd6cedd757269b35e2a5352b3298a4cda0542ff7d3add2b0cf42f10fbe05a67c8763d54a78a43aea7');
  });


  it('produces the expected result for ShortMsgKAT_512 1192', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1594d74bf5dde444265d4c04dad9721ff3e34cbf622daf341fe16b96431f6c4df1f760d34f296eb97d98d560ad5286fec4dce1724f20b54fd7df51d4bf137add656c80546fb1bf516d62ee82baa992910ef4cc18b70f3f8698276fcfb44e0ec546c2c39cfd8ee91034ff9303058b4252462f86c823eb15bf481e6b79cc3a02218595b3658e8b37382bd5048eaed5fd02c37944e73b', 'hex'));
    assert.equal(instance.digest('hex'), 'fd9be24763f682043243525e5e0780534a82ad5e83b65eb4acaf5353313a4cc7c5eea9da141de570232cb4126287e5c77657ca8d6a16b5be53f470343e722fd6');
  });


  it('produces the expected result for ShortMsgKAT_512 1200', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('4cfa1278903026f66fedd41374558be1b585d03c5c55dac94361df286d4bd39c7cb8037ed3b267b07c346626449d0cc5b0dd2cf221f7e4c3449a4be99985d2d5e67bff2923357ddeab5abcb4619f3a3a57b2cf928a022eb27676c6cf805689004fca4d41ea6c2d0a4789c7605f7bb838dd883b3ad3e6027e775bcf262881428099c7fff95b14c095ea130e0b9938a5e22fc52650f591', 'hex'));
    assert.equal(instance.digest('hex'), '14ea33bb33fdf0426e0dfb12de1c613ba97141454c8971bcce25c6d87a6c2403ccfad1e8a6c15754c3cc5ac1718b7f7f1ec003c1b98d70968c5dbb95540b4a17');
  });


  it('produces the expected result for ShortMsgKAT_512 1208', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d3e65cb92cfa79662f6af493d696a07ccf32aaadcceff06e73e8d9f6f909209e66715d6e978788c49efb9087b170ecf3aa86d2d4d1a065ae0efc8924f365d676b3cb9e2bec918fd96d0b43dee83727c9a93bf56ca2b2e59adba85696546a815067fc7a78039629d4948d157e7b0d826d1bf8e81237bab7321312fdaa4d521744f988db6fdf04549d0fdca393d639c729af716e9c8bba48', 'hex'));
    assert.equal(instance.digest('hex'), '3b4b395514e0cab04fc9f9d6c358006ce06c93831e8948fb9bd2a863f3fa064e78eb57c76dd2d058d09ab3d105c28c2dacaebd4a473f1fa023053cc15366082f');
  });


  it('produces the expected result for ShortMsgKAT_512 1216', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('842cc583504539622d7f71e7e31863a2b885c56a0ba62db4c2a3f2fd12e79660dc7205ca29a0dc0a87db4dc62ee47a41db36b9ddb3293b9ac4baae7df5c6e7201e17f717ab56e12cad476be49608ad2d50309e7d48d2d8de4fa58ac3cfeafeee48c0a9eec88498e3efc51f54d300d828dddccb9d0b06dd021a29cf5cb5b2506915beb8a11998b8b886e0f9b7a80e97d91a7d01270f9a7717', 'hex'));
    assert.equal(instance.digest('hex'), '2d7d28c4311e0424d71e7f9d267a2e048aa175455fcb724cf0b13debf448b59b0f28265b0f010f4e4f4065004904a7c2687a5a1b30ab593bc44f698dff5dde33');
  });


  it('produces the expected result for ShortMsgKAT_512 1224', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6c4b0a0719573e57248661e98febe326571f9a1ca813d3638531ae28b4860f23c3a3a8ac1c250034a660e2d71e16d3acc4bf9ce215c6f15b1c0fc7e77d3d27157e66da9ceec9258f8f2bf9e02b4ac93793dd6e29e307ede3695a0df63cbdc0fc66fb770813eb149ca2a916911bee4902c47c7802e69e405fe3c04ceb5522792a5503fa829f707272226621f7c488a7698c0d69aa561be9f378', 'hex'));
    assert.equal(instance.digest('hex'), 'cb665ec69abd75743c8713034e9e41736f8c1ce2c77a8518e50388c411e6284d9aadcd4d3bd5a9eb74672325e41e8a67acf380d1e8a61684f0e501f5663a031d');
  });


  it('produces the expected result for ShortMsgKAT_512 1232', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('51b7dbb7ce2ffeb427a91ccfe5218fd40f9e0b7e24756d4c47cd55606008bdc27d16400933906fd9f30effdd4880022d081155342af3fb6cd53672ab7fb5b3a3bcbe47be1fd3a2278cae8a5fd61c1433f7d350675dd21803746cadca574130f01200024c6340ab0cc2cf74f2234669f34e9009ef2eb94823d62b31407f4ba46f1a1eec41641e84d77727b59e746b8a671bef936f05be820759fa', 'hex'));
    assert.equal(instance.digest('hex'), '4515a104fc68094d244b234d9dc06a0243b71d419d29a95c46e3cba6f51e121abe049b34535db3ccbf2ad68d83fc36331f615b3e33deb39a3381dfbcb798fe4d');
  });


  it('produces the expected result for ShortMsgKAT_512 1240', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('83599d93f5561e821bd01a472386bc2ff4efbd4aed60d5821e84aae74d8071029810f5e286f8f17651cd27da07b1eb4382f754cd1c95268783ad09220f5502840370d494beb17124220f6afce91ec8a0f55231f9652433e5ce3489b727716cf4aeba7dcda20cd29aa9a859201253f948dd94395aba9e3852bd1d60dda7ae5dc045b283da006e1cbad83cc13292a315db5553305c628dd091146597', 'hex'));
    assert.equal(instance.digest('hex'), 'cee3e60a49f7caed9387f3ea699524c4ccafd37c1a7e60d2f0ab037720649f108cce8769f70b0c5d049359eeb821022f17c4b5f646b750e3070558ec127057f1');
  });


  it('produces the expected result for ShortMsgKAT_512 1248', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2be9bf526c9d5a75d565dd11ef63b979d068659c7f026c08bea4af161d85a462d80e45040e91f4165c074c43ac661380311a8cbed59cc8e4c4518e80cd2c78ab1cabf66bff83eab3a80148550307310950d034a6286c93a1ece8929e6385c5e3bb6ea8a7c0fb6d6332e320e71cc4eb462a2a62e2bfe08f0ccad93e61bedb5dd0b786a728ab666f07e0576d189c92bf9fb20dca49ac2d3956d47385e2', 'hex'));
    assert.equal(instance.digest('hex'), 'e6ed6f060906d1a772f47e83907507f88a151de401ed79acb56be57c2596792dc0bc5a9dc1045e37c6a31da1c36200214e4f5698aa2754eeb2caecfc03bec39d');
  });


  it('produces the expected result for ShortMsgKAT_512 1256', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('ca76d3a12595a817682617006848675547d3e8f50c2210f9af906c0e7ce50b4460186fe70457a9e879e79fd4d1a688c70a347361c847ba0dd6aa52936eaf8e58a1be2f5c1c704e20146d366aeb3853bed9de9befe9569ac8aaea37a9fb7139a1a1a7d5c748605a8defb297869ebedd71d615a5da23496d11e11abbb126b206fa0a7797ee7de117986012d0362dcef775c2fe145ada6bda1ccb326bf644', 'hex'));
    assert.equal(instance.digest('hex'), '9ed4eee87f56ae2741e8e4d65623e4d1fa3aa111f64a85f66e99093baed990fe1d788d6a4be1a72a6615281eb45e1b6fb60afefdd93987f794084bda962fac7f');
  });


  it('produces the expected result for ShortMsgKAT_512 1264', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f76b85dc67421025d64e93096d1d712b7baf7fb001716f02d33b2160c2c882c310ef13a576b1c2d30ef8f78ef8d2f465007109aad93f74cb9e7d7bef7c9590e8af3b267c89c15db238138c45833c98cc4a471a7802723ef4c744a853cf80a0c2568dd4ed58a2c9644806f42104cee53628e5bdf7b63b0b338e931e31b87c24b146c6d040605567ceef5960df9e022cb469d4c787f4cba3c544a1ac91f95f', 'hex'));
    assert.equal(instance.digest('hex'), '23139bdd84e9f43a6cc615f0f036199328d39807bec9e786d4251b83b30800f9dbe8edc0b910fcd9d9f204c2ddd4d3b92bc26a0cfaabe764bfb90a1444733cd0');
  });


  it('produces the expected result for ShortMsgKAT_512 1272', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('25b8c9c032ea6bcd733ffc8718fbb2a503a4ea8f71dea1176189f694304f0ff68e862a8197b839957549ef243a5279fc2646bd4c009b6d1edebf24738197abb4c992f6b1dc9ba891f570879accd5a6b18691a93c7d0a8d38f95b639c1daeb48c4c2f15ccf5b9d508f8333c32de78781b41850f261b855c4bebcc125a380c54d501c5d3bd07e6b52102116088e53d76583b0161e2a58d0778f091206aabd5a1', 'hex'));
    assert.equal(instance.digest('hex'), 'ec69397000aed63cb7e86b4fb0bfd3dcee8a6f6a1cfe01a324da13484b73599fcd37ad392662d4c41d90baca66be4d6e3424efd35d7ff4cb07cbdfbebddb7b50');
  });


  it('produces the expected result for ShortMsgKAT_512 1280', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('21cfdc2a7ccb7f331b3d2eefff37e48ad9fa9c788c3f3c200e0173d99963e1cbca93623b264e920394ae48bb4c3a5bb96ffbc8f0e53f30e22956adabc2765f57fb761e147ecbf8567533db6e50c8a1f894310a94edf806dd8ca6a0e141c0fa7c9fae6c6ae65f18c93a8529e6e5b553bf55f25be2e80a9882bd37f145fecbeb3d447a3c4e46c21524cc55cdd62f521ab92a8ba72b897996c49bb273198b7b1c9e', 'hex'));
    assert.equal(instance.digest('hex'), '2ea3ea00e6e9305ced0fc160e004265221306a2be9613474126825aa3c3170ae07e5ea42f6b74f0b2c1bd2a6cd4d26eb1e04c67c9a4afefc1dd0cb57c2a9f4c7');
  });


  it('produces the expected result for ShortMsgKAT_512 1288', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('4e452ba42127dcc956ef4f8f35dd68cb225fb73b5bc7e1ec5a898bba2931563e74faff3b67314f241ec49f4a7061e3bd0213ae826bab380f1f14faab8b0efddd5fd1bb49373853a08f30553d5a55ccbbb8153de4704f29ca2bdeef0419468e05dd51557ccc80c0a96190bbcc4d77ecff21c66bdf486459d427f986410f883a80a5bcc32c20f0478bb9a97a126fc5f95451e40f292a4614930d054c851acd019ccf', 'hex'));
    assert.equal(instance.digest('hex'), '6a7addb28f4f2c23cf0c264579fba5f892e010689f837b84d006d91402fbfe9ba44b9126f8b5de1ec6bbe194a3e3854235056a09901d18e8d6f1727dd430212a');
  });


  it('produces the expected result for ShortMsgKAT_512 1296', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fa85671df7dadf99a6ffee97a3ab9991671f5629195049880497487867a6c446b60087fac9a0f2fcc8e3b24e97e42345b93b5f7d3691829d3f8ccd4bb36411b85fc2328eb0c51cb3151f70860ad3246ce0623a8dc8b3c49f958f8690f8e3860e71eb2b1479a5cea0b3f8befd87acaf5362435eaeccb52f38617bc6c5c2c6e269ead1fbd69e941d4ad2012da2c5b21bcfbf98e4a77ab2af1f3fda3233f046d38f1dc8', 'hex'));
    assert.equal(instance.digest('hex'), '2c0ee8a165bf88c44c8601c6372e522da9ecf42544dcdc098698f50df8e70eb7440cab2953bb490cd2a5e0887beeae3482192da95e5098d3b318f16fc08d1e1e');
  });


  it('produces the expected result for ShortMsgKAT_512 1304', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e90847ae6797fbc0b6b36d6e588c0a743d725788ca50b6d792352ea8294f5ba654a15366b8e1b288d84f5178240827975a763bc45c7b0430e8a559df4488505e009c63da994f1403f407958203cebb6e37d89c94a5eacf6039a327f6c4dbbc7a2a307d976aa39e41af6537243fc218dfa6ab4dd817b6a397df5ca69107a9198799ed248641b63b42cb4c29bfdd7975ac96edfc274ac562d0474c60347a078ce4c25e88', 'hex'));
    assert.equal(instance.digest('hex'), 'ddd4ff117231eca0445eada7c7f1d84686520daa70e160c87dbbb3fb32bb9e2f4cc53db5413d4e88de18a0118570318bd6d0e5264d779339ac6f4f4a95546a53');
  });


  it('produces the expected result for ShortMsgKAT_512 1312', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f6d5c2b6c93954fc627602c00c4ca9a7d3ed12b27173f0b2c9b0e4a5939398a665e67e69d0b12fb7e4ceb253e8083d1ceb724ac07f009f094e42f2d6f2129489e846eaff0700a8d4453ef453a3eddc18f408c77a83275617fabc4ea3a2833aa73406c0e966276079d38e8e38539a70e194cc5513aaa457c699383fd1900b1e72bdfb835d1fd321b37ba80549b078a49ea08152869a918ca57f5b54ed71e4fd3ac5c06729', 'hex'));
    assert.equal(instance.digest('hex'), 'a9744efa42887df292fc09dfeb885f1e801855ded09dc2f97cbfcbd019751878619da1bc9573201c7cc050e2aa1d453e951366d81c188d329b3cb861c1d78f92');
  });


  it('produces the expected result for ShortMsgKAT_512 1320', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('cf8562b1bed89892d67ddaaf3deeb28246456e972326dbcdb5cf3fb289aca01e68da5d59896e3a6165358b071b304d6ab3d018944be5049d5e0e2bb819acf67a6006111089e6767132d72dd85beddcbb2d64496db0cc92955ab4c6234f1eea24f2d51483f2e209e4589bf9519fac51b4d061e801125e605f8093bb6997bc163d551596fe4ab7cfae8fb9a90f6980480ce0c229fd1675409bd788354daf316240cfe0af93eb', 'hex'));
    assert.equal(instance.digest('hex'), '89cae46246efedad1147eb1868c23a6be54f6bac75f0c98a9aefc6bf3ccb89ae012f2e88a9c838b55e57b232cb3c80bc3c2e9fb3fc9768c6226e93284e208bf2');
  });


  it('produces the expected result for ShortMsgKAT_512 1328', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2ace31abb0a2e3267944d2f75e1559985db7354c6e605f18dc8470423fca30b7331d9b33c4a4326783d1caae1b4f07060eff978e4746bf0c7e30cd61040bd5ec2746b29863eb7f103ebda614c4291a805b6a4c8214230564a0557bc7102e0bd3ed23719252f7435d64d210ee2aafc585be903fa41e1968c50fd5d5367926df7a05e3a42cf07e656ff92de73b036cf8b19898c0cb34557c0c12c2d8b84e91181af467bc75a9d1', 'hex'));
    assert.equal(instance.digest('hex'), 'e80a63faf248ae762d13887afe8e1954f97327edd9641ce563f4148f9796669827b3a12b06ebd710d4171b86e21bc13360a541845354e0f4934e6fbbd7acbf2d');
  });


  it('produces the expected result for ShortMsgKAT_512 1336', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0d8d09aed19f1013969ce5e7eb92f83a209ae76be31c754844ea9116ceb39a22ebb6003017bbcf26555fa6624185187db8f0cb3564b8b1c06bf685d47f3286eda20b83358f599d2044bbf0583fab8d78f854fe0a596183230c5ef8e54426750eaf2cc4e29d3bdd037e734d863c2bd9789b4c243096138f7672c232314effdfc6513427e2da76916b5248933be312eb5dde4cf70804fb258ac5fb82d58d08177ac6f4756017fff5', 'hex'));
    assert.equal(instance.digest('hex'), '09c10c4818a6821c170d6780d006f7e853e30fe2d9a4e96545673704ec0a1a3e356375715994e1ac1d8cb0e56dbdb2f77dc558ed228fb56ee62217e63455fd0b');
  });


  it('produces the expected result for ShortMsgKAT_512 1344', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c3236b73deb7662bf3f3daa58f137b358ba610560ef7455785a9befdb035a066e90704f929bd9689cef0ce3bda5acf4480bceb8d09d10b098ad8500d9b6071dfc3a14af6c77511d81e3aa8844986c3bea6f469f9e02194c92868cd5f51646256798ff0424954c1434bdfed9facb390b07d342e992936e0f88bfd0e884a0ddb679d0547ccdec6384285a45429d115ac7d235a717242021d1dc35641f5f0a48e8445dba58e6cb2c8ea', 'hex'));
    assert.equal(instance.digest('hex'), 'd1cab5979eb7f53c97dca5d725d8b33008906d7759fd3ebb8401ee2fff01db895495a0a062d47f251bc3fc13988607c6798969d213c941efc152e7db1da68e72');
  });


  it('produces the expected result for ShortMsgKAT_512 1352', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b39feb8283eadc63e8184b51df5ae3fd41aac8a963bb0be1cd08aa5867d8d910c669221e73243360646f6553d1ca05a84e8dc0de05b6419ec349ca994480193d01c92525f3fb3dcefb08afc6d26947bdbbfd85193f53b50609c6140905c53a6686b58e53a319a57b962331ede98149af3de3118a819da4d76706a0424b4e1d2910b0ed26af61d150ebcb46595d4266a0bd7f651ba47d0c7f179ca28545007d92e8419d48fdfbd744ce', 'hex'));
    assert.equal(instance.digest('hex'), '96ad163869ae2ffdb89b96f4dc700ece27d1f4daafbc5fb81a8e9513c6ea5e2b6a8bccf4e49a294af326f872740661629ab780581155810e492424c24f8d1dd3');
  });


  it('produces the expected result for ShortMsgKAT_512 1360', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a983d54f503803e8c7999f4edbbe82e9084f422143a932ddddc47a17b0b7564a7f37a99d0786e99476428d29e29d3c197a72bfab1342c12a0fc4787fd7017d7a6174049ea43b5779169ef7472bdbbd941dcb82fc73aac45a8a94c9f2bd3477f61fd3b796f02a1b8264a214c6fea74b7051b226c722099ec7883a462b83b6afdd4009248b8a237f605fe5a08fe7d8b45321421ebba67bd70a0b00ddbf94baab7f359d5d1eea105f28dcfb', 'hex'));
    assert.equal(instance.digest('hex'), 'fd2e7a6e11e5d00278099eaf403054d617acac5bd3d0a4908191782c89f9217a3f0118bc2b284fdbce803f66b78dd795eb18dc16ba85e19cb6393dc56c06ecca');
  });


  it('produces the expected result for ShortMsgKAT_512 1368', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e4d1c1897a0a866ce564635b74222f9696bf2c7f640dd78d7e2aca66e1b61c642bb03ea7536aae597811e9bf4a7b453ede31f97b46a5f0ef51a071a2b3918df16b152519ae3776f9f1edab4c2a377c3292e96408359d3613844d5eb393000283d5ad3401a318b12fd1474b8612f2bb50fb6a8b9e023a54d7dde28c43d6d8854c8d9d1155935c199811dbfc87e9e0072e90eb88681cc7529714f8fb8a2c9d88567adfb974ee205a9bf7b848', 'hex'));
    assert.equal(instance.digest('hex'), 'ae53776d969a9b285641998a9f2c70ca71856c956a3c430a32a1e03a8e08d544f16511a27cfa59f6b8275a2357f8efa6544b1cd0c00a9460f47954a146429e49');
  });


  it('produces the expected result for ShortMsgKAT_512 1376', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b10c59723e3dcadd6d75df87d0a1580e73133a9b7d00cb95ec19f5547027323be75158b11f80b6e142c6a78531886d9047b08e551e75e6261e79785366d7024bd7cd9cf322d9be7d57fb661069f2481c7bb759cd71b4b36ca2bc2df6d3a328faebdb995a9794a8d72155ed551a1f87c80bf6059b43fc764900b18a1c2441f7487743cf84e565f61f8dd2ece6b6ccc9444049197aaaf53e926fbee3bfca8be588ec77f29d211be89de18b15f6', 'hex'));
    assert.equal(instance.digest('hex'), 'd4748c8e17f4117bf2bf71557abb559247552126c36192c5df5c6c3e307d879b703c3fcd7099ddab243e2f1d5ae5066990a7b38d3f2cd7fb115aa6d135e7261d');
  });


  it('produces the expected result for ShortMsgKAT_512 1384', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('db11f609baba7b0ca634926b1dd539c8cbada24967d7add4d9876f77c2d80c0f4dcefbd7121548373582705cca2495bd2a43716fe64ed26d059cfb566b3364bd49ee0717bdd9810dd14d8fad80dbbdc4cafb37cc60fb0fe2a80fb4541b8ca9d59dce457738a9d3d8f641af8c3fd6da162dc16fc01aac527a4a0255b4d231c0be50f44f0db0b713af03d968fe7f0f61ed0824c55c4b5265548febd6aad5c5eedf63efe793489c39b8fd29d104ce', 'hex'));
    assert.equal(instance.digest('hex'), 'd8ff0481a63890f0e5a536ebba2f253fa2cfa19c0f353587af4bdc3190e4f8f54d17d665e8b2011121d444bfadfff3e192d97fa03b849d63f36db20f4cf88a74');
  });


  it('produces the expected result for ShortMsgKAT_512 1392', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('bebd4f1a84fc8b15e4452a54bd02d69e304b7f32616aadd90537937106ae4e28de9d8aab02d19bc3e2fde1d651559e296453e4dba94370a14dbbb2d1d4e2022302ee90e208321efcd8528ad89e46dc839ea9df618ea8394a6bff308e7726bae0c19bcd4be52da6258e2ef4e96aa21244429f49ef5cb486d7ff35cac1bacb7e95711944bccb2ab34700d42d1eb38b5d536b947348a458ede3dc6bd6ec547b1b0cae5b257be36a7124e1060c170ffa', 'hex'));
    assert.equal(instance.digest('hex'), '52d771b5016c6b1b93d3bf6a13f718a7b4741d528798609308b54cea6037862d923751fddce10580a7d6431bf208df17c1b825f7c7401ccbd6d806b744241acf');
  });


  it('produces the expected result for ShortMsgKAT_512 1400', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5aca56a03a13784bdc3289d9364f79e2a85c12276b49b92db0adaa4f206d5028f213f678c3510e111f9dc4c1c1f8b6acb17a6413aa227607c515c62a733817ba5e762cc6748e7e0d6872c984d723c9bb3b117eb8963185300a80bfa65cde495d70a46c44858605fccbed086c2b45cef963d33294dbe9706b13af22f1b7c4cd5a001cfec251fba18e722c6e1c4b1166918b4f6f48a98b64b3c07fc86a6b17a6d0480ab79d4e6415b520f1c484d675b1', 'hex'));
    assert.equal(instance.digest('hex'), '36d472a8ae13d1e70e1fd275117ffe34063befccf6706fab0816e1b81f7fe7f2ddb2a122f1f52c9950644659430f81bcedad5d833df4814cf60ae6c542cc4478');
  });


  it('produces the expected result for ShortMsgKAT_512 1408', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a5aad0e4646a32c85cfcac73f02fc5300f1982fabb2f2179e28303e447854094cdfc854310e5c0f60993ceff54d84d6b46323d930adb07c17599b35b505f09e784bca5985e0172257797fb53649e2e9723efd16865c31b5c3d5113b58bb0bfc8920fabdda086d7537e66d709d050bd14d0c960873f156fad5b3d3840cdfcdc9be6af519db262a27f40896ab25cc39f96984d650611c0d5a3080d5b3a1bf186abd42956588b3b58cd948970d298776060', 'hex'));
    assert.equal(instance.digest('hex'), 'e504ad7f33d65b8d3487b28805d478778c901c0aff5f889ae95e2919b4f431a80116a8993469e822895f3c21a41d67afda93a5b29b6250f76335a76fe8919274');
  });


  it('produces the expected result for ShortMsgKAT_512 1416', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('06cbbe67e94a978203ead6c057a1a5b098478b4b4cbef5a97e93c8e42f5572713575fc2a884531d7622f8f879387a859a80f10ef02708cd8f7413ab385afc357678b9578c0ebf641ef076a1a30f1f75379e9dcb2a885bdd295905ee80c0168a62a9597d10cf12dd2d8cee46645c7e5a141f6e0e23aa482abe5661c16e69ef1e28371e2e236c359ba4e92c25626a7b7ff13f6ea4ae906e1cfe163e91719b1f750a96cbde5fbc953d9e576cd216afc90323a', 'hex'));
    assert.equal(instance.digest('hex'), '1dca53be0a34114447d1c1443b92b69dfded705956eae60bbab39178ccb11f526a302aae83720652ef4c5dd450a3647df7b77c4664717d935b4f5b20f206fefe');
  });


  it('produces the expected result for ShortMsgKAT_512 1424', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f1c528cf7739874707d4d8ad5b98f7c77169de0b57188df233b2dc8a5b31eda5db4291dd9f68e6bad37b8d7f6c9c0044b3bf74bbc3d7d1798e138709b0d75e7c593d3cccdc1b20c7174b4e692add820ace262d45ccfae2077e878796347168060a162ecca8c38c1a88350bd63bb539134f700fd4addd5959e255337daa06bc86358fabcbefdfb5bc889783d843c08aadc6c4f6c36f65f156e851c9a0f917e4a367b5ad93d874812a1de6a7b93cd53ad97232', 'hex'));
    assert.equal(instance.digest('hex'), 'cb1b03b180e04021e0099050eb6b7eb9092c5bd5c445e9d31ee39c724f038e9f619a96d3a2812ca7f208feb2d074c3f817262f7504705623e635b9f273e37a59');
  });


  it('produces the expected result for ShortMsgKAT_512 1432', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('9d9f3a7ecd51b41f6572fd0d0881e30390dfb780991dae7db3b47619134718e6f987810e542619dfaa7b505c76b7350c6432d8bf1cfebdf1069b90a35f0d04cbdf130b0dfc7875f4a4e62cdb8e525aadd7ce842520a482ac18f09442d78305fe85a74e39e760a4837482ed2f437dd13b2ec1042afcf9decdc3e877e50ff4106ad10a525230d11920324a81094da31deab6476aa42f20c84843cfc1c58545ee80352bdd3740dd6a16792ae2d86f11641bb717c2', 'hex'));
    assert.equal(instance.digest('hex'), 'f0482f098b93624bcde1aab58097198649a8dc84421826d1c1011ad41b948384c8ed5a97c64c134b38a0075812a35f9ce3cb200972c2ecdfc408714139b9bff0');
  });


  it('produces the expected result for ShortMsgKAT_512 1440', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5179888724819fbad3afa927d3577796660e6a81c52d98e9303261d5a4a83232f6f758934d50aa83ff9e20a5926dfebaac49529d006eb923c5ae5048ed544ec471ed7191edf46363383824f915769b3e688094c682b02151e5ee01e510b431c8865aff8b6b6f2f59cb6d129da79e97c6d2b8fa6c6da3f603199d2d1bcab547682a81cd6cf65f6551121391d78bcc23b5bd0e922ec6d8bf97c952e84dd28aef909aba31edb903b28fbfc33b7703cd996215a11238', 'hex'));
    assert.equal(instance.digest('hex'), 'a3188426cea0c18cb638bcc45c4337c40be41f6e03cd2d7c4fee26025c5ca281cfbb3ad1554d45edc2eb03e2ebe3de02f57d36d5b6a88a3c61a6aaede62180d0');
  });


  it('produces the expected result for ShortMsgKAT_512 1448', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('576ef3520d30b7a4899b8c0d5e359e45c5189add100e43be429a02fb3de5ff4f8fd0e79d9663acca72cd29c94582b19292a557c5b1315297d168fbb54e9e2ecd13809c2b5fce998edc6570545e1499dbe7fb74d47cd7f35823b212b05bf3f5a79caa34224fdd670d335fcb106f5d92c3946f44d3afcbae2e41ac554d8e6759f332b76be89a0324aa12c5482d1ea3ee89ded4936f3e3c080436f539fa137e74c6d3389bdf5a45074c47bc7b20b0948407a66d855e2f', 'hex'));
    assert.equal(instance.digest('hex'), '0b14693e6320668d64ebb3bf6eeb81aafcdb7320ecde80a245786d1b0a808a15c717dc8e8813bf64bf4aa57c29c33e913d6ce1879e52e1919fb83e4a208edaa4');
  });


  it('produces the expected result for ShortMsgKAT_512 1456', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0df2152fa4f4357c8741529dd77e783925d3d76e95bafa2b542a2c33f3d1d117d159cf473f82310356fee4c90a9e505e70f8f24859656368ba09381fa245eb6c3d763f3093f0c89b972e66b53d59406d9f01aea07f8b3b615cac4ee4d05f542e7d0dab45d67ccccd3a606ccbeb31ea1fa7005ba07176e60dab7d78f6810ef086f42f08e595f0ec217372b98970cc6321576d92ce38f7c397a403bada1548d205c343ac09deca86325373c3b76d9f32028fea8eb32515', 'hex'));
    assert.equal(instance.digest('hex'), 'a9abc3f554c1e717935d28c28e7c26aa9dc5bd6d7b02ed7dc6afe21a0ea027a8801ae076f2872d08635ee81420711862edc4e448c85513289438b3c8be456b5b');
  });


  it('produces the expected result for ShortMsgKAT_512 1464', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3e15350d87d6ebb5c8ad99d42515cfe17980933c7a8f6b8bbbf0a63728cefaad2052623c0bd5931839112a48633fb3c2004e0749c87a41b26a8b48945539d1ff41a4b269462fd199bfecd45374756f55a9116e92093ac99451aefb2af9fd32d6d7f5fbc7f7a540d5097c096ebc3b3a721541de073a1cc02f7fb0fb1b9327fb0b1218ca49c9487ab5396622a13ae546c97abdef6b56380dda7012a8384091b6656d0ab272d363cea78163ff765cdd13ab1738b940d16cae', 'hex'));
    assert.equal(instance.digest('hex'), '04dd83d20f58e854d857f24720c50a4b5f83dbc8cabd460d379417cd4813772aa85591b90462f34db3faa4dcae335fb1252bf41162e24975a0dbd308c41a4a6b');
  });


  it('produces the expected result for ShortMsgKAT_512 1472', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c38d6b0b757cb552be40940ece0009ef3b0b59307c1451686f1a22702922800d58bce7a636c1727ee547c01b214779e898fc0e560f8ae7f61bef4d75eaa696b921fd6b735d171535e9edd267c192b99880c87997711002009095d8a7a437e258104a41a505e5ef71e5613ddd2008195f0c574e6ba3fe40099cfa116e5f1a2fa8a6da04badcb4e2d5d0de31fdc4800891c45781a0aac7c907b56d631fca5ce8b2cde620d11d1777ed9fa603541de794ddc5758fcd5fad78c0', 'hex'));
    assert.equal(instance.digest('hex'), 'ce76b25c928cb75c09c0674e8fcd22089654182cd3d84b85cc44b186a8b1a7cc1bb66f389da6d744a24a7b02bf5c85542d1ba8ef0db4a86d2fc394471b396519');
  });


  it('produces the expected result for ShortMsgKAT_512 1480', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8d2de3f0b37a6385c90739805b170057f091cd0c7a0bc951540f26a5a75b3e694631bb64c7635eed316f51318e9d8de13c70a2aba04a14836855f35e480528b776d0a1e8a23b547c8b8d6a0d09b241d3be9377160cca4e6793d00a515dc2992cb7fc741daca171431da99cce6f7789f129e2ac5cf65b40d703035cd2185bb936c82002daf8cbc27a7a9e554b06196630446a6f0a14ba155ed26d95bd627b7205c072d02b60db0fd7e49ea058c2e0ba202daff0de91e845cf79', 'hex'));
    assert.equal(instance.digest('hex'), '02d1671981c2e85d0455ee85f41b8e9c32b1c80221dd432b8bcb5fcefe0996f32fe9fc3eeb3f1f557ae1632750b92d05239af857c42d59a3daeb9629e1158bec');
  });


  it('produces the expected result for ShortMsgKAT_512 1488', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c464bbdad275c50dcd983b65ad1019b9ff85a1e71c807f3204bb2c921dc31fbcd8c5fc45868ae9ef85b6c9b83bba2a5a822201ed68586ec5ec27fb2857a5d1a2d09d09115f22dcc39fe61f5e1ba0ff6e8b4acb4c6da748be7f3f0839739394ff7fa8e39f7f7e84a33c3866875c01bcb1263c9405d91908e9e0b50e7459fabb63d8c6bbb73d8e3483c099b55bc30ff092ff68b6adedfd477d63570c9f5515847f36e24ba0b705557130cec57ebad1d0b31a378e91894ee26e3a04', 'hex'));
    assert.equal(instance.digest('hex'), '6b8bc6211fe5001e07b7d20e0c49d314211e3893a39da241b8839bb3a494f9a2fd8561009d22cca1330a69362b386e715f1dbe6291dbeecfadf196da47e53198');
  });


  it('produces the expected result for ShortMsgKAT_512 1496', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8b8d68bb8a75732fe272815a68a1c9c5aa31b41dedc8493e76525d1d013d33cebd9e21a5bb95db2616976a8c07fcf411f5f6bc6f7e0b57aca78cc2790a6f9b898858ac9c79b165ff24e66677531e39f572be5d81eb3264524181115f32780257bfb9aeec6af12af28e587cac068a1a2953b59ad680f4c245b2e3ec36f59940d37e1d3db38e13edb29b5c0f404f6ff87f80fc8be7a225ff22fbb9c8b6b1d7330c57840d24bc75b06b80d30dad6806544d510af6c4785e823ac3e0b8', 'hex'));
    assert.equal(instance.digest('hex'), 'd00e919dafff3d5e51ad3a3046f5e59d64b69cbcda223cb28bc370201d2c722bae74dfe0086b0eb47bdcb62fabee870c3340d46e55d8cfedf2dd3ced8a8db3f2');
  });


  it('produces the expected result for ShortMsgKAT_512 1504', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6b018710446f368e7421f1bc0ccf562d9c1843846bc8d98d1c9bf7d9d6fcb48bfc3bf83b36d44c4fa93430af75cd190bde36a7f92f867f58a803900df8018150384d85d82132f123006ac2aeba58e02a037fe6afbd65eca7c44977dd3dc74f48b6e7a1bfd5cc4dcf24e4d52e92bd4455848e4928b0eac8b7476fe3cc03e862aa4dff4470dbfed6de48e410f25096487ecfc32a27277f3f5023b2725ade461b1355889554a8836c9cf53bd767f5737d55184eea1ab3f53edd0976c485', 'hex'));
    assert.equal(instance.digest('hex'), 'cf63f28f107a509a416f9a92c4e4db4dbf00fb52c2e16d8bb9694e09f9142a904c34e1e960bd97b8cfb2c53e7660c79b841d1565cdab83293234026a23a56d12');
  });


  it('produces the expected result for ShortMsgKAT_512 1512', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c9534a24714bd4be37c88a3da1082eda7cabd154c309d7bd670dccd95aa535594463058a29f79031d6ecaa9f675d1211e9359be82669a79c855ea8d89dd38c2c761ddd0ec0ce9e97597432e9a1beae062cdd71edfdfd464119be9e69d18a7a7fd7ce0e2106f0c8b0abf4715e2ca48ef9f454dc203c96656653b727083513f8efb86e49c513bb758b3b052fe21f1c05bb33c37129d6cc81f1aef6adc45b0e8827a830fe545cf57d0955802c117d23ccb55ea28f95c0d8c2f9c5a242b33f', 'hex'));
    assert.equal(instance.digest('hex'), 'f21b8d45b6a857ce663c074c18cc54d914cdd5eb0d968e6153a5f70069345d205ddf4370ec473fc80b05f937d014c0a464582cb4a73b1b72041c5c99f576a41e');
  });


  it('produces the expected result for ShortMsgKAT_512 1520', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('07906c87297b867abf4576e9f3cc7f82f22b154afcbf293b9319f1b0584da6a40c27b32e0b1b7f412c4f1b82480e70a9235b12ec27090a5a33175a2bb28d8adc475cefe33f7803f8ce27967217381f02e67a3b4f84a71f1c5228e0c2ad971373f6f672624fcea8d1a9f85170fad30fa0bbd25035c3b41a6175d467998bd1215f6f3866f53847f9cf68ef3e2fbb54bc994de2302b829c5eea68ec441fcbafd7d16ae4fe9fff98bf00e5bc2ad54dd91ff9fda4dd77b6c754a91955d1fbaad0', 'hex'));
    assert.equal(instance.digest('hex'), '92287f42ab1a2123669c4d35f18257d3a536445f0e4d2c801e99f8529cd9e2a79205982c280c7a6cdddef24ce960ec6ca9a35f590aeebc40448c389e915fc4e0');
  });


  it('produces the expected result for ShortMsgKAT_512 1528', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('588e94b9054abc2189df69b8ba34341b77cdd528e7860e5defcaa79b0c9a452ad4b82aa306be84536eb7cedcbe058d7b84a6aef826b028b8a0271b69ac3605a9635ea9f5ea0aa700f3eb7835bc54611b922964300c953efe7491e3677c2cebe0822e956cd16433b02c68c4a23252c3f9e151a416b4963257b783e038f6b4d5c9f110f871652c7a649a7bcedcbccc6f2d0725bb903cc196ba76c76aa9f10a190b1d1168993baa9ffc96a1655216773458bec72b0e39c9f2c121378feab4e76a', 'hex'));
    assert.equal(instance.digest('hex'), '74a9d8f9f72908c7502d1c41212cd86cf4344721a6f02d390346f2baec6e6137421e6516c3235443bc2337b3a77630712a12f11b7ba24b2d7085499ba74bcb90');
  });


  it('produces the expected result for ShortMsgKAT_512 1536', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('08959a7e4baae874928813364071194e2939772f20db7c3157078987c557c2a6d5abe68d520eef3dc491692e1e21bcd880adebf63bb4213b50897fa005256ed41b5690f78f52855c8d9168a4b666fce2da2b456d7a7e7c17ab5f2fb1ee90b79e698712e963715983fd07641ae4b4e9dc73203fac1ae11fa1f8c7941fcc82eab247addb56e2638447e9d609e610b60ce086656aaebf1da3c8a231d7d94e2fd0afe46b391ff14a72eaeb3f44ad4df85866def43d4781a0b3578bc996c87970b132', 'hex'));
    assert.equal(instance.digest('hex'), '7432861132e6894bb6ae5115398198317e12cc73c0c5dfc61cb189ff5aa9fb0d62224cbb1bfa8b105784405718e6f8e15e041dad80d11ae507b33c15c6cac824');
  });


  it('produces the expected result for ShortMsgKAT_512 1544', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('cb2a234f45e2ecd5863895a451d389a369aab99cfef0d5c9ffca1e6e63f763b5c14fb9b478313c8e8c0efeb3ac9500cf5fd93791b789e67eac12fd038e2547cc8e0fc9db591f33a1e4907c64a922dda23ec9827310b306098554a4a78f050262db5b545b159e1ff1dca6eb734b872343b842c57eafcfda8405eedbb48ef32e99696d135979235c3a05364e371c2d76f1902f1d83146df9495c0a6c57d7bf9ee77e80f9787aee27be1fe126cdc9ef893a4a7dcbbc367e40fe4e1ee90b42ea25af01', 'hex'));
    assert.equal(instance.digest('hex'), '6af4ff4c423051e3306ace812e5cfa85532b73deef0dfe601d2630632389d0fab2a109214d32508d2391775665b87a94d1df29db1214cb48dec10dbd3d8cf591');
  });


  it('produces the expected result for ShortMsgKAT_512 1552', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d16beadf02ab1d4dc6f88b8c4554c51e866df830b89c06e786a5f8757e8909310af51c840efe8d20b35331f4355d80f73295974653ddd620cdde4730fb6c8d0d2dcb2b45d92d4fbdb567c0a3e86bd1a8a795af26fbf29fc6c65941cddb090ff7cd230ac5268ab4606fccba9eded0a2b5d014ee0c34f0b2881ac036e24e151be89eeb6cd9a7a790afccff234d7cb11b99ebf58cd0c589f20bdac4f9f0e28f75e3e04e5b3debce607a496d848d67fa7b49132c71b878fd5557e082a18eca1fbda94d4b', 'hex'));
    assert.equal(instance.digest('hex'), '4648d263b608cf28ca65b28a361ebb00e0784c65ab1d55c46a785737b6c8d83dd52e3367d898921ea36dada42d893800d0bfcf86554cdf5e7630d60a2e8ee29f');
  });


  it('produces the expected result for ShortMsgKAT_512 1560', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8f65f6bc59a85705016e2bae7fe57980de3127e5ab275f573d334f73f8603106ec3553016608ef2dd6e69b24be0b7113bf6a760ba6e9ce1c48f9e186012cf96a1d4849d75df5bb8315387fd78e9e153e76f8ba7ec6c8849810f59fb4bb9b004318210b37f1299526866f44059e017e22e96cbe418699d014c6ea01c9f0038b10299884dbec3199bb05adc94e955a1533219c1115fed0e5f21228b071f40dd57c4240d98d37b73e412fe0fa4703120d7c0c67972ed233e5deb300a22605472fa3a3ba86', 'hex'));
    assert.equal(instance.digest('hex'), 'dbd3732440010595ab26f84efeb07732227a7b7b52d6ff339c7ff1b6442249202ae33a0aef5167f5b0474d74a5b50cdb033d6c5c72894a3686fe6ecb36e357f3');
  });


  it('produces the expected result for ShortMsgKAT_512 1568', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('84891e52e0d451813210c3fd635b39a03a6b7a7317b221a7abc270dfa946c42669aacbbbdf801e1584f330e28c729847ea14152bd637b3d0f2b38b4bd5bf9c791c58806281103a3eabbaede5e711e539e6a8b2cf297cf351c078b4fa8f7f35cf61bebf8814bf248a01d41e86c5715ea40c63f7375379a7eb1d78f27622fb468ab784aaaba4e534a6dfd1df6fa15511341e725ed2e87f98737ccb7b6a6dfae416477472b046bf1811187d151bfa9f7b2bf9acdb23a3be507cdf14cfdf517d2cb5fb9e4ab6', 'hex'));
    assert.equal(instance.digest('hex'), 'c24d4054110889290cbc40b82ad8599229d8e86e4ce76bddbbb6f5386223512c9d7e00973c706442b2c80edd20904067af8e4e681aecbfadc6aa15a2ebfe7ddd');
  });


  it('produces the expected result for ShortMsgKAT_512 1576', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fdd7a9433a3b4afabd7a3a5e3457e56debf78e84b7a0b0ca0e8c6d53bd0c2dae31b2700c6128334f43981be3b213b1d7a118d59c7e6b6493a86f866a1635c12859cfb9ad17460a77b4522a5c1883c3d6acc86e6162667ec414e9a104aa892053a2b1d72165a855bacd8faf8034a5dd9b716f47a0818c09bb6baf22aa503c06b4ca261f557761989d2afbd88b6a678ad128af68672107d0f1fc73c5ca740459297b3292b281e93bceb761bde7221c3a55708e5ec84472cddcaa84ecf23723cc0991355c6280', 'hex'));
    assert.equal(instance.digest('hex'), '4a6404d278a0ba70488c18d7d1861cde26fd57d66a9affe74f1e646e616003a52fe42520504ac4ace5ca6665cf9155f44ecaa05d55f80fe9794ade17871c5728');
  });


  it('produces the expected result for ShortMsgKAT_512 1584', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('70a40bfbef92277a1aad72f6b79d0177197c4ebd432668cfec05d099accb651062b5dff156c0b27336687a94b26679cfdd9daf7ad204338dd9c4d14114033a5c225bd11f217b5f4732da167ee3f939262d4043fc9cba92303b7b5e96aea12adda64859df4b86e9ee0b58e39091e6b188b408ac94e1294a8911245ee361e60e601eff58d1d37639f3753bec80ebb4efde25817436076623fc65415fe51d1b0280366d12c554d86743f3c3b6572e400361a60726131441ba493a83fbe9afda90f7af1ae717238d', 'hex'));
    assert.equal(instance.digest('hex'), 'fffd1b1e31377dff00b492295bccc735733b021f47bb4afba6549ea6c1ba3832e8587099ad0cc216af5899ac683eb7c246871e21c30feef9bceedfc78d0c966c');
  });


  it('produces the expected result for ShortMsgKAT_512 1592', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('74356e449f4bf8644f77b14f4d67cb6bd9c1f5ae357621d5b8147e562b65c66585caf2e491b48529a01a34d226d436959153815380d5689e30b35357cdac6e08d3f2b0e88e200600d62bd9f5eaf488df86a4470ea227006182e44809009868c4c280c43d7d64a5268fa719074960087b3a6abc837882f882c837834535929389a12b2c78187e2ea07ef8b8eef27dc85002c3ae35f1a50bee6a1c48ba7e175f3316670b27983472aa6a61eed0a683a39ee323080620ea44a9f74411ae5ce99030528f9ab49c79f2', 'hex'));
    assert.equal(instance.digest('hex'), '33c8f40e1bd1eb1a3a70d2071d27460ef0f6b2d3ece373743842d6b928f3771e4b7446a9ecfbbf552c064f6b26095401097581c38b95e9551119a1fdcb3d58e7');
  });


  it('produces the expected result for ShortMsgKAT_512 1600', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8c3798e51bc68482d7337d3abb75dc9ffe860714a9ad73551e120059860dde24ab87327222b64cf774415a70f724cdf270de3fe47dda07b61c9ef2a3551f45a5584860248fabde676e1cd75f6355aa3eaeabe3b51dc813d9fb2eaa4f0f1d9f834d7cad9c7c695ae84b329385bc0bef895b9f1edf44a03d4b410cc23a79a6b62e4f346a5e8dd851c2857995ddbf5b2d717aeb847310e1f6a46ac3d26a7f9b44985af656d2b7c9406e8a9e8f47dcb4ef6b83caacf9aefb6118bfcff7e44bef6937ebddc89186839b77', 'hex'));
    assert.equal(instance.digest('hex'), '2a11cb6921ea662a39ddee7982e3cf5b317195661d5505ad04d11ee23e178ed65f3e06a7f096f4eaf1ff6a09239cf5a0a39dc9f4c92af63fdf7211e1cf467653');
  });


  it('produces the expected result for ShortMsgKAT_512 1608', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('fa56bf730c4f8395875189c10c4fb251605757a8fecc31f9737e3c2503b02608e6731e85d7a38393c67de516b85304824bfb135e33bf22b3a23b913bf6acd2b7ab85198b8187b2bcd454d5e3318cacb32fd6261c31ae7f6c54ef6a7a2a4c9f3ecb81ce3555d4f0ad466dd4c108a90399d70041997c3b25345a9653f3c9a6711ab1b91d6a9d2216442da2c973cbd685ee7643bfd77327a2f7ae9cb283620a08716dfb462e5c1d65432ca9d56a90e811443cd1ecb8f0de179c9cb48ba4f6fec360c66f252f6e64edc96b', 'hex'));
    assert.equal(instance.digest('hex'), '9196bbbd194541ffee7edbab970738bdd3aadbd6b73d1c85b580afac1232ae8077f743ce8b5b6f2b418b5134cccd4f83645e8631885b14fbbcb909a9836c374c');
  });


  it('produces the expected result for ShortMsgKAT_512 1616', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b6134f9c3e91dd8000740d009dd806240811d51ab1546a974bcb18d344642baa5cd5903af84d58ec5ba17301d5ec0f10ccd0509cbb3fd3fff9172d193af0f782252fd1338c7244d40e0e42362275b22d01c4c3389f19dd69bdf958ebe28e31a4ffe2b5f18a87831cfb7095f58a87c9fa21db72ba269379b2dc2384b3da953c7925761fed324620acea435e52b424a7723f6a2357374157a34cd8252351c25a1b232826cefe1bd3e70ffc15a31e7c0598219d7f00436294d11891b82497bc78aa5363892a2495df8c1eef', 'hex'));
    assert.equal(instance.digest('hex'), '1959cae3600f128f72e1821c337d841b14cbbfef3a6d22286f18bdfc3ef63528c11bffa841a6d2208afeb5664d524de83090ab0db07cd47ef52f4d2eaa8454ce');
  });


  it('produces the expected result for ShortMsgKAT_512 1624', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c941cdb9c28ab0a791f2e5c8e8bb52850626aa89205bec3a7e22682313d198b1fa33fc7295381354858758ae6c8ec6fac3245c6e454d16fa2f51c4166fab51df272858f2d603770c40987f64442d487af49cd5c3991ce858ea2a60dab6a65a34414965933973ac2457089e359160b7cdedc42f29e10a91921785f6b7224ee0b349393cdcff6151b50b377d609559923d0984cda6000829b916ab6896693ef6a2199b3c22f7dc5500a15b8258420e314c222bc000bc4e5413e6dd82c993f8330f5c6d1be4bc79f08a1a0a46', 'hex'));
    assert.equal(instance.digest('hex'), 'a913ddc5bb089c121ff093be529225148df787d48f4f61699eff9fc2910282a898a81a38d66be9b06428d6466a614ca822a872c1c2c4d503d434d3b1d6942102');
  });


  it('produces the expected result for ShortMsgKAT_512 1632', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('4499efffac4bcea52747efd1e4f20b73e48758be915c88a1ffe5299b0b005837a46b2f20a9cb3c6e64a9e3c564a27c0f1c6ad1960373036ec5bfe1a8fc6a435c2185ed0f114c50e8b3e4c7ed96b06a036819c9463e864a58d6286f785e32a804443a56af0b4df6abc57ed5c2b185ddee8489ea080deeee66aa33c2e6dab36251c402682b6824821f998c32163164298e1fafd31babbcffb594c91888c6219079d907fdb438ed89529d6d96212fd55abe20399dbefd342248507436931cdead496eb6e4a80358acc78647d043', 'hex'));
    assert.equal(instance.digest('hex'), 'f10b91564ad93d734743281949bacef065a6432a455236f1bf798de9aec6ccac9b8d373b07c5acfbd676ef21e4a3a9e0f7c38e8756d177d0a5c283d520844b4d');
  });


  it('produces the expected result for ShortMsgKAT_512 1640', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('eecbb8fdfa4da62170fd06727f697d81f83f601ff61e478105d3cb7502f2c89bf3e8f56edd469d049807a38882a7eefbc85fc9a950952e9fa84b8afebd3ce782d4da598002827b1eb98882ea1f0a8f7aa9ce013a6e9bc462fb66c8d4a18da21401e1b93356eb12f3725b6db1684f2300a98b9a119e5d27ff704affb618e12708e77e6e5f34139a5a41131fd1d6336c272a8fc37080f041c71341bee6ab550cb4a20a6ddb6a8e0299f2b14bc730c54b8b1c1c487b494bdccfd3a53535ab2f231590bf2c4062fd2ad58f906a2d0d', 'hex'));
    assert.equal(instance.digest('hex'), 'ef26a1baf33d4de047bdd2ce34736e042ecd33aa569ffc0cb81ecfa66e9f87da8d025ecba24bcb187e4201046fb99a02dfa6f1bf88ec2b88de216cf759fac41d');
  });


  it('produces the expected result for ShortMsgKAT_512 1648', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e64f3e4ace5c8418d65fec2bc5d2a303dd458034736e3b0df719098be7a206deaf52d6ba82316caf330ef852375188cde2b39cc94aa449578a7e2a8e3f5a9d68e816b8d16889fbc0ebf0939d04f63033ae9ae2bdab73b88c26d6bd25ee460ee1ef58fb0afa92cc539f8c76d3d097e7a6a63ebb9b5887edf3cf076028c5bbd5b9db3211371ad3fe121d4e9bf44229f4e1ecf5a0f9f0eba4d5ceb72878ab22c3f0eb5a625323ac66f7061f4a81fac834471e0c59553f108475fe290d43e6a055ae3ee46fb67422f814a68c4be3e8c9', 'hex'));
    assert.equal(instance.digest('hex'), 'f8e079a6dc5a6a7e7f32ff7e8015d1b26d43b54f166f2111cfb2b1eb238cabee58630ef845e0db00ddf1d800ad67ce7b2b658b42118cc15c8ef3bc9fb252db64');
  });


  it('produces the expected result for ShortMsgKAT_512 1656', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d2cb2d733033f9e91395312808383cc4f0ca974e87ec68400d52e96b3fa6984ac58d9ad0938dde5a973008d818c49607d9de2284e7618f1b8aed8372fbd52ed54557af4220fac09dfa8443011699b97d743f8f2b1aef3537ebb45dcc9e13dfb438428ee190a4efdb3caeb7f3933117bf63abdc7e57beb4171c7e1ad260ab0587806c4d137b6316b50abc9cce0dff3acada47bbb86be777e617bbe578ff4519844db360e0a96c6701290e76bb95d26f0f804c8a4f2717eac4e7de9f2cff3bbc55a17e776c0d02856032a6cd10ad2838', 'hex'));
    assert.equal(instance.digest('hex'), 'a5bfaa52499a688d9c8d3ddc0ba06decdf3829be5d444acfa412f4c6e863f4786be9935805310734e4f0affe05558999807408e97e100fadd0c93ff160f8b11b');
  });


  it('produces the expected result for ShortMsgKAT_512 1664', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('f2998955613dd414cc111df5ce30a995bb792e260b0e37a5b1d942fe90171a4ac2f66d4928d7ad377f4d0554cbf4c523d21f6e5f379d6f4b028cdcb9b1758d3b39663242ff3cb6ede6a36a6f05db3bc41e0d861b384b6dec58bb096d0a422fd542df175e1be1571fb52ae66f2d86a2f6824a8cfaacbac4a7492ad0433eeb15454af8f312b3b2a577750e3efbd370e8a8cac1582581971fba3ba4bd0d76e718dacf8433d33a59d287f8cc92234e7a271041b526e389efb0e40b6a18b3aaf658e82ed1c78631fd23b4c3eb27c3faec8685', 'hex'));
    assert.equal(instance.digest('hex'), 'ccea9fcf1ad93270ac4690e96b875122c5b5ec20d2cc27079cbf893126c44e0208a8bfa139057d72bd2638059ec8da8a720499af9d4c117f86799d7515dfc6e0');
  });


  it('produces the expected result for ShortMsgKAT_512 1672', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('447797e2899b72a356ba55bf4df3acca6cdb1041eb477bd1834a9f9acbc340a294d729f2f97df3a610be0ff15edb9c6d5db41644b9874360140fc64f52aa03f0286c8a640670067a84e017926a70438db1bb361defee7317021425f8821def26d1efd77fc853b818545d055adc9284796e583c76e6fe74c9ac2587aa46aa8f8804f2feb5836cc4b3ababab8429a5783e17d5999f32242eb59ef30cd7adabc16d72dbdb097623047c98989f88d14eaf02a7212be16ec2d07981aaa99949ddf89ecd90333a77bc4e1988a82abf7c7caf3291', 'hex'));
    assert.equal(instance.digest('hex'), '2efc5dfe028a35503a25bdf8b2164d86ca7496b7c5ded09c5d414b6977adbb4a6988ab9939d1ec65f46bcc99c1dcd5f19e035d8d3dc387361200e4da80c80671');
  });


  it('produces the expected result for ShortMsgKAT_512 1680', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('9f2c18ade9b380c784e170fb763e9aa205f64303067eb1bcea93df5dac4bf5a2e00b78195f808df24fc76e26cb7be31dc35f0844cded1567bba29858cffc97fb29010331b01d6a3fb3159cc1b973d255da9843e34a0a4061cabdb9ed37f241bfabb3c20d32743f4026b59a4ccc385a2301f83c0b0a190b0f2d01acb8f0d41111e10f2f4e149379275599a52dc089b35fdd5234b0cfb7b6d8aebd563ca1fa653c5c021dfd6f5920e6f18bfafdbecbf0ab00281333ed50b9a999549c1c8f8c63d7626c48322e9791d5ff72294049bde91e73f8', 'hex'));
    assert.equal(instance.digest('hex'), 'e80d7a934fdaf17db8dbb1dc6c42e90e139211c2f599890c06b15d6248fdbe682d77d4e05f26d72852f7492bce118ce7c36950bd2c50f9699bb47d89c3115377');
  });


  it('produces the expected result for ShortMsgKAT_512 1688', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('ae159f3fa33619002ae6bcce8cbbdd7d28e5ed9d61534595c4c9f43c402a9bb31f3b301cbfd4a43ce4c24cd5c9849cc6259eca90e2a79e01ffbac07ba0e147fa42676a1d668570e0396387b5bcd599e8e66aaed1b8a191c5a47547f61373021fa6deadcb55363d233c24440f2c73dbb519f7c9fa5a8962efd5f6252c0407f190dfefad707f3c7007d69ff36b8489a5b6b7c557e79dd4f50c06511f599f56c896b35c917b63ba35c6ff8092baf7d1658e77fc95d8a6a43eeb4c01f33f03877f92774be89c1114dd531c011e53a34dc248a2f0e6', 'hex'));
    assert.equal(instance.digest('hex'), 'c414b29fd07720f46c351f5c80be2094e95d13ad97bdd1f7c5207b695693cd5e1e0169b1aa2e271115bd5171fec51d04b71e3e7ce1618fbfeb382f56f65f7eff');
  });


  it('produces the expected result for ShortMsgKAT_512 1696', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3b8e97c5ffc2d6a40fa7de7fcefc90f3b12c940e7ab415321e29ee692dfac799b009c99dcddb708fce5a178c5c35ee2b8617143edc4c40b4d313661f49abdd93cea79d117518805496fe6acf292c4c2a1f76b403a97d7c399daf85b46ad84e16246c67d6836757bde336c290d5d401e6c1386ab32797af6bb251e9b2d8fe754c47482b72e0b394eab76916126fd68ea7d65eb93d59f5b4c5ac40f7c3b37e7f3694f29424c24af8c8f0ef59cd9dbf1d28e0e10f799a6f78cad1d45b9db3d7dee4a7059abe99182714983b9c9d44d7f5643596d4f3', 'hex'));
    assert.equal(instance.digest('hex'), 'a4679a4cbee6292203bafba8913245f30e046aba6c0937b407c00b73d17d8d696690ee25ba1b39deb3db93525a8fbcfd88173ba9c7a65b4406d0550ba9b6cc07');
  });


  it('produces the expected result for ShortMsgKAT_512 1704', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3434ec31b10fafdbfeec0dd6bd94e80f7ba9dca19ef075f7eb017512af66d6a4bcf7d16ba0819a1892a6372f9b35bcc7ca8155ee19e8428bc22d214856ed5fa9374c3c09bde169602cc219679f65a1566fc7316f4cc3b631a18fb4449fa6afa16a3db2bc4212eff539c67cf184680826535589c7111d73bffce431b4c40492e763d9279560aaa38eb2dc14a212d723f994a1fe656ff4dd14551ce4e7c621b2aa5604a10001b2878a897a28a08095c325e10a26d2fb1a75bfd64c250309bb55a44f23bbac0d5516a1c687d3b41ef2fbbf9cc56d4739', 'hex'));
    assert.equal(instance.digest('hex'), '5f49d6594da939987d1906294b33a037f63c79e078531dfa7e6ce67279d4d5dbeb650ff8690f23b63b7e9c48ea8791b80fdb34ef66dcf0cefe45842ecff4ad1d');
  });


  it('produces the expected result for ShortMsgKAT_512 1712', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7c7953d81c8d208fd1c97681d48f49dd003456de60475b84070ef4847c333b74575b1fc8d2a186964485a3b8634feaa3595aaa1a2f4595a7d6b6153563dee31bbac443c8a33eed6d5d956a980a68366c2527b550ee950250dfb691eacbd5d56ae14b970668be174c89df2fea43ae52f13142639c884fd62a3683c0c3792f0f24ab1318bcb27e21f4737fab62c77ea38bc8fd1cf41f7dab64c13febe7152bf5bb7ab5a78f5346d43cc741cb6f72b7b8980f268b68bf62abdfb1577a52438fe14b591498cc95f071228460c7c5d5ceb4a7bde588e7f21c', 'hex'));
    assert.equal(instance.digest('hex'), 'b77fb79669ea52c738e58a9ef3ed1501bbe7974478afb5a8bed44549d6232ff8d7aa9eeeaf02f6755327951093243110d7bcfc0e51299db793856b57a77e8420');
  });


  it('produces the expected result for ShortMsgKAT_512 1720', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7a6a4f4fdc59a1d223381ae5af498d74b7252ecf59e389e49130c7eaee626e7bd9897effd92017f4ccde66b0440462cdedfd352d8153e6a4c8d7a0812f701cc737b5178c2556f07111200eb627dbc299caa792dfa58f35935299fa3a3519e9b03166dffa159103ffa35e8577f7c0a86c6b46fe13db8e2cdd9dcfba85bdddcce0a7a8e155f81f712d8e9fe646153d3d22c811bd39f830433b2213dd46301941b59293fd0a33e2b63adbd95239bc01315c46fdb678875b3c81e053a40f581cfbec24a1404b1671a1b88a6d06120229518fb13a74ca0ac5ae', 'hex'));
    assert.equal(instance.digest('hex'), 'caca0ff43107f730a7fbe6869fba5af1e626c96303be3bc95155164199c88922194511b24c48911186f647ca246427f2ce7ba747271cd8d7c5e1d127c21f1eaa');
  });


  it('produces the expected result for ShortMsgKAT_512 1728', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d9faa14cebe9b7de551b6c0765409a33938562013b5e8e0e1e0a6418df7399d0a6a771fb81c3ca9bd3bb8e2951b0bc792525a294ebd1083688806fe5e7f1e17fd4e3a41d00c89e8fcf4a363caedb1acb558e3d562f1302b3d83bb886ed27b76033798131dab05b4217381eaaa7ba15ec820bb5c13b516dd640eaec5a27d05fdfca0f35b3a5312146806b4c0275bcd0aaa3b2017f346975db566f9b4d137f4ee10644c2a2da66deeca5342e236495c3c6280528bfd32e90af4cd9bb908f34012b52b4bc56d48cc8a6b59bab014988eabd12e1a0a1c2e170e7', 'hex'));
    assert.equal(instance.digest('hex'), 'e5106b2a0d49d6d1e13e3323232101cea5da71caa24e70efcac57e0ccf156cdf4c2492b03ce0e13437018dab76b9c989883bea69e849f33bb937a397b84ada6a');
  });


  it('produces the expected result for ShortMsgKAT_512 1736', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2d8427433d0c61f2d96cfe80cf1e932265a191365c3b61aaa3d6dcc039f6ba2ad52a6a8cc30fc10f705e6b7705105977fa496c1c708a277a124304f1fc40911e7441d1b5e77b951aad7b01fd5db1b377d165b05bbf898042e39660caf8b279fe5229d1a8db86c0999ed65e53d01ccbc4b43173ccf992b3a14586f6ba42f5fe30afa8ae40c5df29966f9346da5f8b35f16a1de3ab6de0f477d8d8660918060e88b9b9e9ca6a4207033b87a812dbf5544d39e4882010f82b6ce005f8e8ff6fe3c3806bc2b73c2b83afb704345629304f9f86358712e9fae3ca3e', 'hex'));
    assert.equal(instance.digest('hex'), 'faee462e4bced12ad54d3757d644396ed9203037741661aea32bccadae568c4bdc925eda76610e964fbe3fb26b33bc0bc123ddf9b528715317ce5c92e00ac96f');
  });


  it('produces the expected result for ShortMsgKAT_512 1744', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5e19d97887fcaac0387e22c6f803c34a3dacd2604172433f7a8a7a526ca4a2a1271ecfc5d5d7be5ac0d85d921095350dfc65997d443c21c8094e0a3fefd2961bcb94aed03291ae310ccda75d8ace4bc7d89e7d3e5d1650bda5d668b8b50bfc8e608e184f4d3a9a2badc4ff5f07e0c0bc8a9f2e0b2a26fd6d8c550008faaab75fd71af2a424bec9a7cd9d83fad4c8e9319115656a8717d3b523a68ff8004258b9990ed362308461804ba3e3a7e92d8f2ffae5c2fba55ba5a3c27c0a2f71bd711d2fe1799c2adb31b200035481e9ee5c4adf2ab9c0fa50b23975cf', 'hex'));
    assert.equal(instance.digest('hex'), 'fbe25b43e540104a3aade897838c63511928af5add4f952f1e6d4c39e70c923df191faa36f46b21f827d9b437996ff7206f73337cf20c6b0db748a707455b420');
  });


  it('produces the expected result for ShortMsgKAT_512 1752', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('c8e976ab4638909387ce3b8d4e510c3230e5690e02c45093b1d297910abc481e56eea0f296f98379dfc9080af69e73b2399d1c143bee80ae1328162ce1ba7f6a8374679b20aacd380eb4e61382c99998704d62701afa914f9a2705cdb065885f50d086c3eb5753700c387118bb142f3e6da1e988dfb31ac75d7368931e45d1391a274b22f83ceb072f9bcabc0b216685bfd789f5023971024b1878a205442522f9ea7d8797a4102a3df41703768251fd5e017c85d1200a464118aa35654e7ca39f3c375b8ef8cbe7534dbc64bc20befb417cf60ec92f63d9ee7397', 'hex'));
    assert.equal(instance.digest('hex'), '0a41a004573e0a983fe9c93bd57439a20c8f99b800a60d4a07117e8d9b25c0ee38bab3cdb6fc9216b8e07f0ccdd028c418ef97b6d7e15decde7425497644e2e4');
  });


  it('produces the expected result for ShortMsgKAT_512 1760', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7145fa124b7429a1fc2231237a949ba7201bcc1822d3272de005b682398196c25f7e5cc2f289fbf44415f699cb7fe6757791b1443410234ae061edf623359e2b4e32c19bf88450432dd01caa5eb16a1dc378f391ca5e3c4e5f356728bddd4975db7c890da8bbc84cc73ff244394d0d48954978765e4a00b593f70f2ca082673a261ed88dbcef1127728d8cd89bc2c597e9102ced6010f65fa75a14ebe467fa57ce3bd4948b6867d74a9df5c0ec6f530cbf2ee61ce6f06bc8f2864dff5583776b31df8c7ffcb61428a56bf7bd37188b4a5123bbf338393af46eda85e6', 'hex'));
    assert.equal(instance.digest('hex'), 'ff081507f979f69c6743e42ee758858713b570cb48ff85ef0d728c4e1bb5456d035e498c05ea4cebd820e134bb252ac76ba4949a4fad76871a9972ae2fccceea');
  });


  it('produces the expected result for ShortMsgKAT_512 1768', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7fdfadcc9d29bad23ae038c6c65cda1aef757221b8872ed3d75ff8df7da0627d266e224e812c39f7983e4558bfd0a1f2bef3feb56ba09120ef762917b9c093867948547aee98600d10d87b20106878a8d22c64378bf634f7f75900c03986b077b0bf8b740a82447b61b99fee5376c5eb6680ec9e3088f0bdd0c56883413d60c1357d3c811950e5890e7600103c916341b80c743c6a852b7b4fb60c3ba21f3bc15b8382437a68454779cf3cd7f9f90ccc8ef28d0b706535b1e4108eb5627bb45d719cb046839aee311ca1abdc8319e050d67972cb35a6b1601b25dbf487', 'hex'));
    assert.equal(instance.digest('hex'), '03444ae8319ebd121e7707b9cdfd1fdfd52f3d6b3d4bcb2748af421a3c8666c22d8c0d8a096767b1cd16a8d54738c5f67a6f9d48c90827be71691a42be87108b');
  });


  it('produces the expected result for ShortMsgKAT_512 1776', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('988638219fd3095421f826f56e4f09e356296b628c3ce6930c9f2e758fd1a80c8273f2f61e4daae65c4f110d3e7ca0965ac7d24e34c0dc4ba2d6ff0bf5bbe93b3585f354d7543cb542a1aa54674d375077f2d360a8f4d42f3db131c3b7ab7306267ba107659864a90c8c909460a73621d1f5d9d3fd95beb19b23db1cb6c0d0fba91d36891529b8bd8263caa1bab56a4affaed44962df096d8d5b1eb845ef31188b3e10f1af811a13f156beb7a288aae593ebd1471b624aa1a7c6adf01e2200b3d72d88a3aed3100c88231e41efc376906f0b580dc895f080fda5741db1cb', 'hex'));
    assert.equal(instance.digest('hex'), '5ee0a4459724037b7318815a80147c172d6c8f8874c9a0057706fb3e300fe936815f07672e6447b771de699dfadf345c3bb5974cf019315fadd5534dff6a079c');
  });


  it('produces the expected result for ShortMsgKAT_512 1784', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5aab62756d307a669d146aba988d9074c5a159b3de85151a819b117ca1ff6597f6156e80fdd28c9c3176835164d37da7da11d94e09add770b68a6e081cd22ca0c004bfe7cd283bf43a588da91f509b27a6584c474a4a2f3ee0f1f56447379240a5ab1fb77fdca49b305f07ba86b62756fb9efb4fc225c86845f026ea542076b91a0bc2cdd136e122c659be259d98e5841df4c2f60330d4d8cdee7bf1a0a244524eecc68ff2aef5bf0069c9e87a11c6e519de1a4062a10c83837388f7ef58598a3846f49d499682b683c4a062b421594fafbc1383c943ba83bdef515efcf10d', 'hex'));
    assert.equal(instance.digest('hex'), '54085a2f9c327e5d8ee225eff5bd2c2837e44e8057cf1691e6202050079d26851061c4da8d88fc19237e5b658950e66866e92019d9e425e2416240a59d25a6cf');
  });


  it('produces the expected result for ShortMsgKAT_512 1792', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('47b8216aa0fbb5d67966f2e82c17c07aa2d6327e96fcd83e3de7333689f3ee79994a1bf45082c4d725ed8d41205cb5bcdf5c341f77facb1da46a5b9b2cbc49eadf786bcd881f371a95fa17df73f606519aea0ff79d5a11427b98ee7f13a5c00637e2854134691059839121fea9abe2cd1bcbbbf27c74caf3678e05bfb1c949897ea01f56ffa4dafbe8644611685c617a3206c7a7036e4ac816799f693dafe7f19f303ce4eba09d21e03610201bfc665b72400a547a1e00fa9b7ad8d84f84b34aef118515e74def11b9188bd1e1f97d9a12c30132ec2806339bdadacda2fd8b78', 'hex'));
    assert.equal(instance.digest('hex'), '3ea49b6abd39cdf04bccd648fb7e1f8ae3dae9d3e3a5eab9ce29be356defbbbeb1bb93ae40d31cc1f011dcc6c6ac85b102f2654e2dbbac47333bcdb4758a1a28');
  });


  it('produces the expected result for ShortMsgKAT_512 1800', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('8cff1f67fe53c098896d9136389bd8881816ccab34862bb67a656e3d98896f3ce6ffd4da73975809fcdf9666760d6e561c55238b205d8049c1cedeef374d1735daa533147bfa960b2cce4a4f254176bb4d1bd1e89654432b8dbe1a135c42115b394b024856a2a83dc85d6782be4b444239567ccec4b184d4548eae3ff6a192f343292ba2e32a0f267f31cc26719eb85245d415fb897ac2da433ee91a99424c9d7f1766a44171d1651001c38fc79294accc68ceb5665d36218454d3ba169ae058a831338c17743603f81ee173bfc0927464f9bd728dee94c6aeab7aae6ee3a627e8', 'hex'));
    assert.equal(instance.digest('hex'), 'b3851790ca47575dbf988f82c3b501dc8390a8e8598698166167567a0332913ccc8868584db4acfb2c9dc0f0a6833292f4dcedc47cf003217689bc2422b53b93');
  });


  it('produces the expected result for ShortMsgKAT_512 1808', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('eacd07971cff9b9939903f8c1d8cbb5d4db1b548a85d04e037514a583604e787f32992bf2111b97ac5e8a938233552731321522ab5e8583561260b7d13ebeef785b23a41fd8576a6da764a8ed6d822d4957a545d5244756c18aa80e1aad4d1f9c20d259dee1711e2cc8fd013169fb7cc4ce38b362f8e0936ae9198b7e838dcea4f7a5b9429bb3f6bbcf2dc92565e3676c1c5e6eb3dd2a0f86aa23edd3d0891f197447692794b3dfa269611ad97f72b795602b4fdb198f3fd3eb41b415064256e345e8d8c51c555dc8a21904a9b0f1ad0effab7786aac2da3b196507e9f33ca356427', 'hex'));
    assert.equal(instance.digest('hex'), 'a710cb26c632f289504cd0039ba6ab9b4d3524c52b286d466e2f8939f8684e3f18dca298a2ba67eb710997b7bb10ae279438b9b4868d0adb248f282bb440a130');
  });


  it('produces the expected result for ShortMsgKAT_512 1816', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('23ac4e9a42c6ef45c3336ce6dfc2ff7de8884cd23dc912fef0f7756c09d335c189f3ad3a23697abda851a81881a0c8ccafc980ab2c702564c2be15fe4c4b9f10dfb2248d0d0cb2e2887fd4598a1d4acda897944a2ffc580ff92719c95cf2aa42dc584674cb5a9bc5765b9d6ddf5789791d15f8dd925aa12bffafbce60827b490bb7df3dda6f2a143c8bf96abc903d83d59a791e2d62814a89b8080a28060568cf24a80ae61179fe84e0ffad00388178cb6a617d37efd54cc01970a4a41d1a8d3ddce46edbba4ab7c90ad565398d376f431189ce8c1c33e132feae6a8cd17a61c630012', 'hex'));
    assert.equal(instance.digest('hex'), '8f677a8089052b47be60c0bb7666e403a5daa5e28a2b632f2e496c587f1fdca0ee33d9e78daa4ef575b13389748b8c24110053b0b96a082c06c3f80ebe8de976');
  });


  it('produces the expected result for ShortMsgKAT_512 1824', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('0172df732282c9d488669c358e3492260cbe91c95cfbc1e3fea6c4b0ec129b45f242ace09f152fc6234e1bee8aab8cd56e8b486e1dcba9c05407c2f95da8d8f1c0af78ee2ed82a3a79ec0cb0709396ee62aadb84f8a4ee8a7ccca3c1ee84e302a09ea802204afecf04097e67d0f8e8a9d2651126c0a598a37081e42d168b0ae8a71951c524259e4e2054e535b779679bdade566fe55700858618e626b4a0faf895bcce9011504a49e05fd56127eae3d1f8917afb548ecadabda1020111fec9314c413498a360b08640549a22cb23c731ace743252a8227a0d2689d4c6001606678dfb921', 'hex'));
    assert.equal(instance.digest('hex'), 'ce631e6f2c2dc5738c0fa958571773b58af130b94824331419ee57e2691ce5f29db3d8fe456cd1e7cdc07f6105fa1b6fd729c2b419008ccd889169c3385db1b9');
  });


  it('produces the expected result for ShortMsgKAT_512 1832', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3875b9240cf3e0a8b59c658540f26a701cf188496e2c2174788b126fd29402d6a75453ba0635284d08835f40051a2a9683dc92afb9383719191231170379ba6f4adc816fecbb0f9c446b785bf520796841e58878b73c58d3ebb097ce4761fdeabe15de2f319dfbaf1742cdeb389559c788131a6793e193856661376c81ce9568da19aa6925b47ffd77a43c7a0e758c37d69254909ff0fbd415ef8eb937bcd49f91468b49974c07dc819abd67395db0e05874ff83dddab895344abd0e7111b2df9e58d76d85ad98106b36295826be04d435615595605e4b4bb824b33c4afeb5e7bb0d19f909', 'hex'));
    assert.equal(instance.digest('hex'), 'fff677bb58909c158ea677be704253505b106af934f639abfec63bd0c63097aa4bf032fe924149dd991d335e1c44c0220e4d13cbc41b6a98fb5a05faa3fe15b3');
  });


  it('produces the expected result for ShortMsgKAT_512 1840', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('747cc1a59fefba94a9c75ba866c30dc5c1cb0c0f8e9361d98484956dd5d1a40f6184afbe3dac9f76028d1caeccfbf69199c6ce2b4c092a3f4d2a56fe5a33a00757f4d7dee5dfb0524311a97ae0668a47971b95766e2f6dd48c3f57841f91f04a00ad5ea70f2d479a2620dc5cd78eaab3a3b011719b7e78d19ddf70d9423798af77517ebc55392fcd01fc600d8d466b9e7a7a85bf33f9cc5419e9bd874ddfd60981150ddaf8d7febaa4374f0872a5628d318000311e2f5655365ad4d407c20e5c04df17a222e7deec79c5ab1116d8572f91cd06e1ccc7ced53736fc867fd49ecebe6bf8082e8a', 'hex'));
    assert.equal(instance.digest('hex'), '451ee587226c99989f5ec10050983b1fd661228a4ab48618f1d1173c94fac39ecfd3c26c16653633b26097e31a0f2213b4f1153a57cb48a70d2af1adeb1bbc06');
  });


  it('produces the expected result for ShortMsgKAT_512 1848', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('57af971fccaec97435dc2ec9ef0429bcedc6b647729ea168858a6e49ac1071e706f4a5a645ca14e8c7746d65511620682c906c8b86ec901f3dded4167b3f00b06cbfac6aee3728051b3e5ff10b4f9ed8bd0b8da94303c833755b3ca3aeddf0b54bc8d6632138b5d25bab03d17b3458a9d782108006f5bb7de75b5c0ba854b423d8bb801e701e99dc4feaad59bc1c7112453b04d33ea3635639fb802c73c2b71d58a56bbd671b18fe34ed2e3dca38827d63fdb1d4fb3285405004b2b3e26081a8ff08cd6d2b08f8e7b7e90a2ab1ed7a41b1d0128522c2f8bff56a7fe67969422ce839a9d4608f03', 'hex'));
    assert.equal(instance.digest('hex'), 'f9d6ad8686125e71fe0856e806d68ba97ef123443938d28283387f33e3ac6e2a7de042a3ee5f7994c1eecc5b6f22cbae1349cab2fb7a0a0125ec2320320858d4');
  });


  it('produces the expected result for ShortMsgKAT_512 1856', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('04e16dedc1227902baaf332d3d08923601bdd64f573faa1bb7201918cfe16b1e10151dae875da0c0d63c59c3dd050c4c6a874011b018421afc4623ab0381831b2da2a8ba42c96e4f70864ac44e106f94311051e74c77c1291bf5db9539e69567bf6a11cf6932bbbad33f8946bf5814c066d851633d1a513510039b349939bfd42b858c21827c8ff05f1d09b1b0765dc78a135b5ca4dfba0801bcaddfa175623c8b647eacfb4444b85a44f73890607d06d507a4f8393658788669f6ef4deb58d08c50ca0756d5e2f49d1a7ad73e0f0b3d3b5f090acf622b1878c59133e4a848e05153592ea81c6fbf', 'hex'));
    assert.equal(instance.digest('hex'), 'f26f3268fd620fc476a49aac3ed1580864934a2f6ba881ed8c8fb757aaaa64bcdf501e1913de600bbef6f12c949fea8fd68c645086d5e30c9253588ffbd19be5');
  });


  it('produces the expected result for ShortMsgKAT_512 1864', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('7c815c384eee0f288ece27cced52a01603127b079c007378bc5d1e6c5e9e6d1c735723acbbd5801ac49854b2b569d4472d33f40bbb8882956245c366dc3582d71696a97a4e19557e41e54dee482a14229005f93afd2c4a7d8614d10a97a9dfa07f7cd946fa45263063ddd29db8f9e34db60daa32684f0072ea2a9426ecebfa5239fb67f29c18cbaa2af6ed4bf4283936823ac1790164fec5457a9cba7c767ca59392d94cab7448f50eb34e9a93a80027471ce59736f099c886dea1ab4cba4d89f5fc7ae2f21ccd27f611eca4626b2d08dc22382e92c1efb2f6afdc8fdc3d2172604f5035c46b8197d3', 'hex'));
    assert.equal(instance.digest('hex'), '080845d6fd22a00b30fa01a4b4f81fdc7b46ca4c6a676ad5863a9dbf6611ba97f24fb59bb5bac4e376b3b8b3357166782876b701273ff351bc8c5805532767d4');
  });


  it('produces the expected result for ShortMsgKAT_512 1872', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('e29d505158dbdd937d9e3d2145658ee6f5992a2fc790f4f608d9cdb44a091d5b94b88e81fac4fdf5c49442f13b911c55886469629551189eaff62488f1a479b7db11a1560e198ddccccf50159093425ff7f1cb8d1d1246d0978764087d6bac257026b090efae8cec5f22b6f21c59ace1ac7386f5b8837ca6a12b6fbf5534dd0560ef05ca78104d3b943ddb220feaec89aa5e692a00f822a2ab9a2fe60350d75e7be16ff2526dc643872502d01f42f188abed0a6e9a6f5fd0d1ce7d5755c9ffa66b0af0b20bd806f08e06156690d81ac811778ca3dac2c249b96002017fce93e507e3b953acf99964b847', 'hex'));
    assert.equal(instance.digest('hex'), '2678a8715fc7e538522dd7608d769508b63017d9eb6cc48f1cb07d14e741066936c8316bf3211e09f62611e140ddd14a07f97f9f372e99c084ffe289eb302bd8');
  });


  it('produces the expected result for ShortMsgKAT_512 1880', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d85588696f576e65eca0155f395f0cfacd83f36a99111ed5768df2d116d2121e32357ba4f54ede927f189f297d3a97fad4e9a0f5b41d8d89dd7fe20156799c2b7b6bf9c957ba0d6763f5c3bc5129747bbb53652b49290cff1c87e2cdf2c4b95d8aaee09bc8fbfa6883e62d237885810491bfc101f1d8c636e3d0ede838ad05c207a3df4fad76452979eb99f29afaecedd1c63b8d36cf378454a1bb67a741c77ac6b6b3f95f4f02b64dabc15438613ea49750df42ee90101f115aa9abb9ff64324dde9dabbb01054e1bd6b4bcdc7930a44c2300d87ca78c06924d0323ad7887e46c90e8c4d100acd9eed21e', 'hex'));
    assert.equal(instance.digest('hex'), 'aa03eb09417435da9e6e7803f3b6eab66faa3d59cc622950d61f9b962b69145ac2255cd752cb9607742092697b1a79d124817ae26421e61d1176764832ed354c');
  });


  it('produces the expected result for ShortMsgKAT_512 1888', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3a12f8508b40c32c74492b66323375dcfe49184c78f73179f3314b79e63376b8ac683f5a51f1534bd729b02b04d002f55cbd8e8fc9b5ec1ea6bbe6a0d0e7431518e6ba45d124035f9d3dce0a8bb7bf1430a9f657e0b4ea9f20eb20c786a58181a1e20a96f1628f8728a13bdf7a4b4b32fc8aa7054cc4881ae7fa19afa65c6c3ee1b3ade3192af42054a8a911b8ec1826865d46d93f1e7c5e2b7813c92a506e53886f3d4701bb93d2a681ad109c845904bb861af8af0646b6e399b38b614051d34f6842563a0f37ec00cb3d865fc5d746c4987de2a65071100883a2a9c7a2bfe1e2dd603d9ea24dc7c5fd06be', 'hex'));
    assert.equal(instance.digest('hex'), 'd3012f2fb56845b258d7598c0bbb2c97d53b602deae9326dc3678b2228454a1e29f28848ed140c70be85cdea9f99a8dc347deabd46d362ed1afb231146a0255d');
  });


  it('produces the expected result for ShortMsgKAT_512 1896', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('1861edce46fa5ad17e1ff1deae084dec580f97d0a67885dfe834b9dfac1ae076742ce9e267512ca51f6df5a455af0c5fd6abf94acea103a3370c354485a7846fb84f3ac7c2904b5b2fbf227002ce512133bb7e1c4e50057bfd1e44db33c7cdb969a99e284b184f50a14b068a1fc5009d9b298dbe92239572a7627aac02abe8f3e3b473417f36d4d2505d16b7577f4526c9d94a270a2dfe450d06da8f6fa956879a0a55cfe99e742ea555ea477ba3e9b44ccd508c375423611af92e55345dc215779b2d5119eba49c71d49b9fe3f1569fa24e5ca3e332d042422a8b8158d3ec66a80012976f31ffdf305f0c9c5e', 'hex'));
    assert.equal(instance.digest('hex'), 'b50c896f2cdf7f105de751ff6cf664e592fab752d652b06898b9b288052df22f721ad87e702af043e6b1e88929850cbd5698a9172c3932400b2538e401a6f081');
  });


  it('produces the expected result for ShortMsgKAT_512 1904', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('08d0ffde3a6e4ef65608ea672e4830c12943d7187ccff08f4941cfc13e545f3b9c7ad5eebbe2b01642b486caf855c2c73f58c1e4e3391da8e2d63d96e15fd84953ae5c231911b00ad6050cd7aafdaac9b0f663ae6aab45519d0f5391a541707d479034e73a6ad805ae3598096af078f1393301493d663dd71f83869ca27ba508b7e91e81e128c1716dc3acfe3084b2201e04cf8006617eecf1b640474a5d45cfde9f4d3ef92d6d055b909892194d8a8218db6d8203a84261d200d71473d7488f3427416b6896c137d455f231071cacbc86e0415ab88aec841d96b7b8af41e05bb461a40645bf176601f1e760de5f', 'hex'));
    assert.equal(instance.digest('hex'), 'a34a2f27c32f993a7e7007867733547481293c391255ffd0e5ccbe91e1cc749b13525af6adfa0c2d1d64bf87dd65b996ada9111c5df55bff8a5742e54b8444f6');
  });


  it('produces the expected result for ShortMsgKAT_512 1912', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('d782abb72a5be3392757be02d3e45be6e2099d6f000d042c8a543f50ed6ebc055a7f133b0dd8e9bc348536edcaae2e12ec18e8837df7a1b3c87ec46d50c241dee820fd586197552dc20beea50f445a07a38f1768a39e2b2ff05dddedf751f1def612d2e4d810daa3a0cc904516f9a43af660315385178a529e51f8aae141808c8bc5d7b60cac26bb984ac1890d0436ef780426c547e94a7b08f01acbfc4a3825eae04f520a9016f2fb8bf5165ed12736fc71e36a49a73614739eaa3ec834069b1b40f1350c2b3ab885c02c640b9f7686ed5f99527e41cfcd796fe4c256c9173186c226169ff257954ebda81c0e5f99', 'hex'));
    assert.equal(instance.digest('hex'), 'dd5f4b167175d9566dca6c5b1b54a33d02efd02e25e23bb6fb02d878a4415e5e8682c209beac04e9882a272d01e8eb435caa5bcd74fc825c6b9082d041dff333');
  });


  it('produces the expected result for ShortMsgKAT_512 1920', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5fce8109a358570e40983e1184e541833bb9091e280f258cfb144387b05d190e431cb19baa67273ba0c58abe91308e1844dcd0b3678baa42f335f2fa05267a0240b3c718a5942b3b3e3bfa98a55c25a1466e8d7a603722cb2bbf03afa54cd769a99f310735ee5a05dae2c22d397bd95635f58c48a67f90e1b73aafcd3f82117f0166657838691005b18da6f341d6e90fc1cdb352b30fae45d348294e501b63252de14740f2b85ae5299ddec3172de8b6d0ba219a20a23bb5e10ff434d39db3f583305e9f5c039d98569e377b75a70ab837d1df269b8a4b566f40bb91b577455fd3c356c914fa06b9a7ce24c7317a172d', 'hex'));
    assert.equal(instance.digest('hex'), 'a43ae5dad936697564ae1bd9b8624c5c31cc36607322af40e253f10c285467afd0d08252d2bad76efa52e4775c9c26761abe38212855a80112fe02623fbf0a13');
  });


  it('produces the expected result for ShortMsgKAT_512 1928', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6172f1971a6e1e4e6170afbad95d5fec99bf69b24b674bc17dd78011615e502de6f56b86b1a71d3f4348087218ac7b7d09302993be272e4a591968aef18a1262d665610d1070ee91cc8da36e1f841a69a7a682c580e836941d21d909a3afc1f0b963e1ca5ab193e124a1a53df1c587470e5881fb54dae1b0d840f0c8f9d1b04c645ba1041c7d8dbf22030a623aa15638b3d99a2c400ff76f3252079af88d2b37f35ee66c1ad7801a28d3d388ac450b97d5f0f79e4541755356b3b1a5696b023f39ab7ab5f28df4202936bc97393b93bc915cb159ea1bd7a0a414cb4b7a1ac3af68f50d79f0c9c7314e750f7d02faa58bfa', 'hex'));
    assert.equal(instance.digest('hex'), 'a5ac23d4a0d533cb9d8a68873f5cb749228458d43ce6bd0536c8733777b5e6e3f28fd36bffe69002a0777ba74fef22de3fac4c818b4842816c6094496f968555');
  });


  it('produces the expected result for ShortMsgKAT_512 1936', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('5668ecd99dfbe215c4118398ac9c9eaf1a1433fab4ccdd3968064752b625ea944731f75d48a27d047d67547f14dd0ffaa55fa5e29f7af0d161d85eafc4f2029b717c918eab9d304543290bdba7158b68020c0ba4e079bc95b5bc0fc044a992b94b4ccd3bd66d0eabb5dbbab904d62e00752c4e3b0091d773bcf4c14b4377da3efff824b1cb2fa01b32d1e46c909e626ed2dae920f4c7dbeb635bc754facbd8d49beba3f23c1c41ccbfcd0ee0c114e69737f5597c0bf1d859f0c767e18002ae8e39c26261ffde2920d3d0baf0e906138696cfe5b7e32b600f45df3aaa39932f3a7df95b60fa8712a2271fcaf3911ce7b511b1', 'hex'));
    assert.equal(instance.digest('hex'), '07f3bcacf5f78816d515cedf1cbba4ffc58d83aa8687b0e7252faab43e7f59a7ff7415727addf9a22560adb5755a2c6df8c7e6dcaceb53106a714d807aaadbf3');
  });


  it('produces the expected result for ShortMsgKAT_512 1944', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('03d625488354df30e3f875a68edfcf340e8366a8e1ab67f9d5c5486a96829dfac0578289082b2a62117e1cf418b43b90e0adc881fc6ae8105c888e9ecd21aea1c9ae1a4038dfd17378fed71d02ae492087d7cdcd98f746855227967cb1ab4714261ee3bead3f4db118329d3ebef4bc48a875c19ba763966da0ebea800e01b2f50b00e9dd4caca6dcb314d00184ef71ea2391d760c950710db4a70f9212ffc54861f9dc752ce18867b8ad0c48df8466ef7231e7ac567f0eb55099e622ebb86cb237520190a61c66ad34f1f4e289cb3282ae3eaac6152ed24d2c92bae5a7658252a53c49b7b02dfe54fdb2e90074b6cf310ac661', 'hex'));
    assert.equal(instance.digest('hex'), '13a592b73ede487036c8816bd6fc6cdc04dc6133409a6ee990584160518f9ef573264cf04d38a3ba75d150f4f026f6df8936e13c8f4f3ecc9ecbc43fdfc488a4');
  });


  it('produces the expected result for ShortMsgKAT_512 1952', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2edc282ffb90b97118dd03aaa03b145f363905e3cbd2d50ecd692b37bf000185c651d3e9726c690d3773ec1e48510e42b17742b0b0377e7de6b8f55e00a8a4db4740cee6db0830529dd19617501dc1e9359aa3bcf147e0a76b3ab70c4984c13e339e6806bb35e683af8527093670859f3d8a0fc7d493bcba6bb12b5f65e71e705ca5d6c948d66ed3d730b26db395b3447737c26fad089aa0ad0e306cb28bf0acf106f89af3745f0ec72d534968cca543cd2ca50c94b1456743254e358c1317c07a07bf2b0eca438a709367fafc89a57239028fc5fecfd53b8ef958ef10ee0608b7f5cb9923ad97058ec067700cc746c127a61ee3', 'hex'));
    assert.equal(instance.digest('hex'), 'c2fb590ab74e230b8fe159892f94de04ef7adaa02b918d4994f996538d257f5a80c9b3be8f410170b0c5cac3f507401220881c5e08d8bf0a13247170d39085bc');
  });


  it('produces the expected result for ShortMsgKAT_512 1960', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('90b28a6aa1fe533915bcb8e81ed6cacdc10962b7ff82474f845eeb86977600cf70b07ba8e3796141ee340e3fce842a38a50afbe90301a3bdcc591f2e7d9de53e495525560b908c892439990a2ca2679c5539ffdf636777ad9c1cdef809cda9e8dcdb451abb9e9c17efa4379abd24b182bd981cafc792640a183b61694301d04c5b3eaad694a6bd4cc06ef5da8fa23b4fa2a64559c5a68397930079d250c51bcf00e2b16a6c49171433b0aadfd80231276560b80458dd77089b7a1bbcc9e7e4b9f881eacd6c92c4318348a13f4914eb27115a1cfc5d16d7fd94954c3532efaca2cab025103b2d02c6fd71da3a77f417d7932685888a', 'hex'));
    assert.equal(instance.digest('hex'), '02951596a13a1a41188a4a1d6346f7eafb60a2051ea67c63237d1a9b79ec4733f33ecec223dedd946b78387b6f2df5e9ab6af7dfbabaf80f4fcc94fa087275e8');
  });


  it('produces the expected result for ShortMsgKAT_512 1968', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('2969447d175490f2aa9bb055014dbef2e6854c95f8d60950bfe8c0be8de254c26b2d31b9e4de9c68c9adf49e4ee9b1c2850967f29f5d08738483b417bb96b2a56f0c8aca632b552059c59aac3f61f7b45c966b75f1d9931ff4e596406378cee91aaa726a3a84c33f37e9cdbe626b5745a0b06064a8a8d56e53aaf102d23dd9df0a3fdf7a638509a6761a33fa42fa8ddbd8e16159c93008b53765019c3f0e9f10b144ce2ac57f5d7297f9c9949e4ff68b70d339f87501ce8550b772f32c6da8ad2ce2100a895d8b08fa1eead7c376b407709703c510b50f87e73e43f8e7348f87c3832a547ef2bbe5799abedcf5e1f372ea809233f006', 'hex'));
    assert.equal(instance.digest('hex'), '5aa4e32f0ea3e853929bf64acc9565a01300bc007063b939f6dbbe9cae0545ea95fbcac32575aa0727ee4d937071e6b3be74e23fe76fd63ec05c7f7d8a407af0');
  });


  it('produces the expected result for ShortMsgKAT_512 1976', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('721645633a44a2c78b19024eaecf58575ab23c27190833c26875dc0f0d50b46aea9c343d82ea7d5b3e50ec700545c615daeaea64726a0f05607576dcd396d812b03fb6551c641087856d050b10e6a4d5577b82a98afb89cee8594c9dc19e79feff0382fcfd127f1b803a4b9946f4ac9a4378e1e6e041b1389a53e3450cd32d9d2941b0cbabdb50da8ea2513145164c3ab6bcbd251c448d2d4b087ac57a59c2285d564f16da4ed5e607ed979592146ffb0ef3f3db308fb342df5eb5924a48256fc763141a278814c82d6d6348577545870ae3a83c7230ac02a1540fe1798f7ef09e335a865a2ae0949b21e4f748fb8a51f44750e213a8fb', 'hex'));
    assert.equal(instance.digest('hex'), '495b2aa2103159d9a937e9dd56b059aca98a5e3cb7b59bb690dedc00c692e9d7a18614a73d12e07634b209cc630d1818b09f1076a941ff80474493e3d42b9812');
  });


  it('produces the expected result for ShortMsgKAT_512 1984', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6b860d39725a14b498bb714574b4d37ca787404768f64c648b1751b353ac92bac2c3a28ea909fdf0423336401a02e63ec24325300d823b6864bb701f9d7c7a1f8ec9d0ae3584aa6dd62ea1997cd831b4babd9a4da50932d4efda745c61e4130890e156aee6113716daf95764222a91187db2effea49d5d0596102d619bd26a616bbfda8335505fbb0d90b4c180d1a2335b91538e1668f9f9642790b4e55f9cab0fe2bdd2935d001ee6419abab5457880d0dbff20ed8758f4c20fe759efb33141cf0e892587fe8187e5fbc57786b7e8b089612c936dfc03d27efbbe7c8673f1606bd51d5ff386f4a7ab68edf59f385eb1291f117bfe717399', 'hex'));
    assert.equal(instance.digest('hex'), '217b5a985bed80008274470e254443238c5aeacbc7ee2289f0e63b7afe6d0f395e2361fd6d9dc33b4f54f03ff56f6b264976161d80091788ee9d262f147a35fc');
  });


  it('produces the expected result for ShortMsgKAT_512 1992', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('6a01830af3889a25183244decb508bd01253d5b508ab490d3124afbf42626b2e70894e9b562b288d0a2450cfacf14a0ddae5c04716e5a0082c33981f6037d23d5e045ee1ef2283fb8b6378a914c5d9441627a722c282ff452e25a7ea608d69cee4393a0725d17963d0342684f255496d8a18c2961145315130549311fc07f0312fb78e6077334f87eaa873bee8aa95698996eb21375eb2b4ef53c14401207deb4568398e5dd9a7cf97e8c9663e23334b46912f8344c19efcf8c2ba6f04325f1a27e062b62a58d0766fc6db4d2c6a1928604b0175d872d16b7908ebc041761187cc785526c2a3873feac3a642bb39f5351550af9770c328af7b', 'hex'));
    assert.equal(instance.digest('hex'), '293c551e753bba7f314dcb93a0fad94f3f5dee6ed45d765a708e6fd277601f03f6c905d7e1eaeaec513cbbbd672b817f6d60fbf02c20167d7f4b7b84afeeb3f6');
  });


  it('produces the expected result for ShortMsgKAT_512 2000', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('b3c5e74b69933c2533106c563b4ca20238f2b6e675e8681e34a389894785bdade59652d4a73d80a5c85bd454fd1e9ffdad1c3815f5038e9ef432aac5c3c4fe840cc370cf86580a6011778bbedaf511a51b56d1a2eb68394aa299e26da9ada6a2f39b9faff7fba457689b9c1a577b2a1e505fdf75c7a0a64b1df81b3a356001bf0df4e02a1fc59f651c9d585ec6224bb279c6beba2966e8882d68376081b987468e7aed1ef90ebd090ae825795cdca1b4f09a979c8dfc21a48d8a53cdbb26c4db547fc06efe2f9850edd2685a4661cb4911f165d4b63ef25b87d0a96d3dff6ab0758999aad214d07bd4f133a6734fde445fe474711b69a98f7e2b', 'hex'));
    assert.equal(instance.digest('hex'), '89fe6314a0246eff3bfd07a95fe239bd5071467f53799175b226daf6c3db618cad4ca1c1af64bf5793f03254f560e6335beaaa86bcb9e961f214b2ae97b47af0');
  });


  it('produces the expected result for ShortMsgKAT_512 2008', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('83af34279ccb5430febec07a81950d30f4b66f484826afee7456f0071a51e1bbc55570b5cc7ec6f9309c17bf5befdd7c6ba6e968cf218a2b34bd5cf927ab846e38a40bbd81759e9e33381016a755f699df35d660007b5eadf292feefb735207ebf70b5bd17834f7bfa0e16cb219ad4af524ab1ea37334aa66435e5d397fc0a065c411ebbce32c240b90476d307ce802ec82c1c49bc1bec48c0675ec2a6c6f3ed3e5b741d13437095707c565e10d8a20b8c20468ff9514fcf31b4249cd82dcee58c0a2af538b291a87e3390d737191a07484a5d3f3fb8c8f15ce056e5e5f8febe5e1fb59d6740980aa06ca8a0c20f5712b4cde5d032e92ab89f0ae1', 'hex'));
    assert.equal(instance.digest('hex'), '7690f703e894ee22d4dff55a7f8d5021d5f17b729f95a59c4d55cfb225c67be105f2e7cdf56d140e566648e9e9c39bbed96f985a6dae1f21d8ba500f7fd40edf');
  });


  it('produces the expected result for ShortMsgKAT_512 2016', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a7ed84749ccc56bb1dfba57119d279d412b8a986886d810f067af349e8749e9ea746a60b03742636c464fc1ee233acc52c1983914692b64309edfdf29f1ab912ec3e8da074d3f1d231511f5756f0b6eead3e89a6a88fe330a10face267bffbfc3e3090c7fd9a850561f363ad75ea881e7244f80ff55802d5ef7a1a4e7b89fcfa80f16df54d1b056ee637e6964b9e0ffd15b6196bdd7db270c56b47251485348e49813b4eb9ed122a01b3ea45ad5e1a929df61d5c0f3e77e1fdc356b63883a60e9cbb9fc3e00c2f32dbd469659883f690c6772e335f617bc33f161d6f6984252ee12e62b6000ac5231e0c9bc65be223d8dfd94c5004a101af9fd6c0fb', 'hex'));
    assert.equal(instance.digest('hex'), '65e415c7958a47fca9eed3846fd1283afeb38e5130f57ecd99dcb21bedda856e3b5fb9f839e579c5ea386eaca8cdc0a9549eaaf6ec452dd6cb5212b709bf5c59');
  });


  it('produces the expected result for ShortMsgKAT_512 2024', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('a6fe30dcfcda1a329e82ab50e32b5f50eb25c873c5d2305860a835aecee6264aa36a47429922c4b8b3afd00da16035830edb897831c4e7b00f2c23fc0b15fdc30d85fb70c30c431c638e1a25b51caf1d7e8b050b7f89bfb30f59f0f20fecff3d639abc4255b3868fc45dd81e47eb12ab40f2aac735df5d1dc1ad997cefc4d836b854cee9ac02900036f3867fe0d84afff37bde3308c2206c62c4743375094108877c73b87b2546fe05ea137bedfc06a2796274099a0d554da8f7d7223a48cbf31b7decaa1ebc8b145763e3673168c1b1b715c1cd99ecd3ddb238b06049885ecad9347c2436dff32c771f34a38587a44a82c5d3d137a03caa27e66c8ff6', 'hex'));
    assert.equal(instance.digest('hex'), 'd6542a2f0654b9b874a627d3d53764a65b1df2c0cec3bcd0b4b088faa1095e54f1799757c4371f8d544e298d600e21e11b2f90d295712621231a09c58b05a704');
  });


  it('produces the expected result for ShortMsgKAT_512 2032', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('83167ff53704c3aa19e9fb3303539759c46dd4091a52ddae9ad86408b69335989e61414bc20ab4d01220e35241eff5c9522b079fba597674c8d716fe441e566110b6211531ceccf8fd06bc8e511d00785e57788ed9a1c5c73524f01830d2e1148c92d0edc97113e3b7b5cd3049627abdb8b39dd4d6890e0ee91993f92b03354a88f52251c546e64434d9c3d74544f23fb93e5a2d2f1fb15545b4e1367c97335b0291944c8b730ad3d4789273fa44fb98d78a36c3c3764abeeac7c569c1e43a352e5b770c3504f87090dee075a1c4c85c0c39cf421bdcc615f9eff6cb4fe6468004aece5f30e1ecc6db22ad9939bb2b0ccc96521dfbf4ae008b5b46bc006e', 'hex'));
    assert.equal(instance.digest('hex'), 'ec983e787628b94c87fff8d57d2d058667d12f5af458bce79bb7844fb41d9c55920f593c8d8730eb8d54ff1d51cd8ad2f1c2a0f7d6b299a21266744e47d142b2');
  });


  it('produces the expected result for ShortMsgKAT_512 2040', () => {
    const instance = new SHA3.SHA3Hash(512);
    instance.update(newBuffer('3a3a819c48efde2ad914fbf00e18ab6bc4f14513ab27d0c178a188b61431e7f5623cb66b23346775d386b50e982c493adbbfc54b9a3cd383382336a1a0b2150a15358f336d03ae18f666c7573d55c4fd181c29e6ccfde63ea35f0adf5885cfc0a3d84a2b2e4dd24496db789e663170cef74798aa1bbcd4574ea0bba40489d764b2f83aadc66b148b4a0cd95246c127d5871c4f11418690a5ddf01246a0c80a43c70088b6183639dcfda4125bd113a8f49ee23ed306faac576c3fb0c1e256671d817fc2534a52f5b439f72e424de376f4c565cca82307dd9ef76da5b7c4eb7e085172e328807c02d011ffbf33785378d79dc266f6a5be6bb0e4a92eceebaeb1', 'hex'));
    assert.equal(instance.digest('hex'), '81950e7096d31d4f22e3db71cac725bf59e81af54c7ca9e6aeee71c010fc5467466312a01aa5c137cfb140646941556796f612c9351268737c7e9a2b9631d1fa');
  });


  it('produces the expected result for LongMsgKAT_224 2048', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('724627916c50338643e6996f07877eafd96bdf01da7e991d4155b9be1295ea7d21c9391f4c4a41c75f77e5d27389253393725f1427f57914b273ab862b9e31dabce506e558720520d33352d119f699e784f9e548ff91bc35ca147042128709820d69a8287ea3257857615eb0321270e94b84f446942765ce882b191faee7e1c87e0f0bd4e0cd8a927703524b559b769ca4ece1f6dbf313fdcf67c572ec4185c1a88e86ec11b6454b371980020f19633b6b95bd280e4fbcb0161e1a82470320cec6ecfa25ac73d09f1536f286d3f9dacafb2cd1d0ce72d64d197f5c7520b3ccb2fd74eb72664ba93853ef41eabf52f015dd591500d018dd162815cc993595b195', 'hex'));
    assert.equal(instance.digest('hex'), 'e90f81ae86d72dcc2190af545a345150a629ee7dc7237c1958cfcdbc');
  });


  it('produces the expected result for LongMsgKAT_224 2552', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3139840b8ad4bcd39092916fd9d01798ff5aa1e48f34702c72dfe74b12e98a114e318cdd2d47a9c320fff908a8dbc2a5b1d87267c8e983829861a567558b37b292d4575e200de9f1de45755faff9efae34964e4336c259f1e66599a7c904ec02539f1a8eab8706e0b4f48f72fec2794909ee4a7b092d6061c74481c9e21b9332dc7c6e482d7f9cc3210b38a6f88f7918c2d8c55e64a428ce2b68fd07ab572a8b0a2388664f99489f04eb54df1376271810e0e7bce396f52807710e0dea94eb49f4b367271260c3456b9818fc7a72234e6bf2205ff6a36546205015ebd7d8c2527aa430f58e0e8ac97a7b6b793cd403d517d66295f37a34d0b7d2fa7bc345ac04ca1e266480deec39f5c88641c9dc0bd1358158fdecdd96685bbbb5c1fe5ea89d2cb4a9d5d12bb8c893281ff38e87d6b4841f0650092d447e013f20ea934e18', 'hex'));
    assert.equal(instance.digest('hex'), 'c1c80b60ecbe67b7a49940df5e3ee7f31c1304844d9a333a172983ff');
  });


  it('produces the expected result for LongMsgKAT_224 3056', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('023d91ac532601c7ca3942d62827566d9268bb4276fcaa1ae927693a6961652676dba09219a01b3d5adfa12547a946e78f3c5c62dd880b02d2eeeb4b96636529c6b01120b23efc49ccfb36b8497cd19767b53710a636683bc5e0e5c9534cfc004691e87d1bee39b86b953572927bd668620eab87836d9f3f8f28ace41150776c0bc6657178ebf297fe1f7214edd9f215ffb491b681b06ac2032d35e6fdf832a8b06056da70d77f1e9b4d26ae712d8523c86f79250718405f91b0a87c725f2d3f52088965f887d8cf87206dfde422386e58edda34dde2783b3049b86917b4628027a05d4d1f429d2b49c4b1c898dddcb82f343e145596de11a54182f39f4718ecae8f506bd9739f5cd5d5686d7fefc834514cd1b2c91c33b381b45e2e5335d7a8720a8f17afc8c2cb2bd88b14aa2dca099b00aa575d0a0ccf099cdec4870fb710d2680e60c48bfc291ff0cef2eebf9b36902e9fba8c889bf6b4b9f5ce53a19b0d9399cd19d61bd08c0c2ec25e099959848e6a550ca7137b63f43138d7b651', 'hex'));
    assert.equal(instance.digest('hex'), '230620d710cf3ab835059e1aa170735db17cae74b345765ff02e8d89');
  });


  it('produces the expected result for LongMsgKAT_224 3560', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('20ff454369a5d05b81a78f3db05819fea9b08c2384f75cb0ab6aa115dd690da3131874a1ca8f708ad1519ea952c1e249cb540d196392c79e87755424fee7c890808c562722359eea52e8a12fbbb969dd7961d2ba52037493755a5fa04f0d50a1aa26c9b44148c0d3b94d1c4a59a31aca15ae8bd44acb7833d8e91c4b86fa3135a423387b8151b4133ed23f6d7187b50ec2204ad901ad74d396e44274e0ecafaae17b3b9085e22260b35ca53b15cc52abba758af6798fbd04eceeced648f3af4fdb3ded7557a9a5cfb7382612a8a8f3f45947d1a29ce29072928ec193ca25d51071bd5e1984ecf402f306ea762f0f25282f5296d997658be3f983696ffa6d095c6369b4daf79e9a5d3136229128f8eb63c12b9e9fa78aff7a3e9e19a62022493cd136defbb5bb7ba1b938f367fd2f63eb5ca76c0b0ff21b9e36c3f07230cf3c3074e5da587040a76975d7e39f4494ace5486fcbf380ab7558c4fe89656335b82e4db8659509eab46a19613126e594042732dd4c411f41aa8cdeac71c0fb40a94e6da558c05e77b6182806f26d9afdf3da00c69419222c8186a6efad600b410e6ce2f2a797e49dc1f135319801fa6f396b06f975e2a190a023e474b618e7', 'hex'));
    assert.equal(instance.digest('hex'), '34a58ddfc5c2222281fa73eb34bfb5e152272cc3ac7fe97ac58c08b0');
  });


  it('produces the expected result for LongMsgKAT_224 4064', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4fbdc596508d24a2a0010e140980b809fb9c6d55ec75125891dd985d37665bd80f9beb6a50207588abf3ceee8c77cd8a5ad48a9e0aa074ed388738362496d2fb2c87543bb3349ea64997ce3e7b424ea92d122f57dbb0855a803058437fe08afb0c8b5e7179b9044bbf4d81a7163b3139e30888b536b0f957eff99a7162f4ca5aa756a4a982dfadbf31ef255083c4b5c6c1b99a107d7d3afffdb89147c2cc4c9a2643f478e5e2d393aea37b4c7cb4b5e97dadcf16b6b50aae0f3b549ece47746db6ce6f67dd4406cd4e75595d5103d13f9dfa79372924d328f8dd1fcbeb5a8e2e8bf4c76de08e3fc46aa021f989c49329c7acac5a688556d7bcbcb2a5d4be69d3284e9c40ec4838ee8592120ce20a0b635ecadaa84fd5690509f54f77e35a417c584648bc9839b974e07bfab0038e90295d0b13902530a830d1c2bdd53f1f9c9faed43ca4eed0a8dd761bc7edbdda28a287c60cd42af5f9c758e5c7250231c09a582563689afc65e2b79a7a2b68200667752e9101746f03184e2399e4ed8835cb8e9ae90e296af220ae234259fe0bd0bcc60f7a4a5ff3f70c5ed4de9c8c519a10e962f673c82c5e9351786a8a3bfd570031857bd4c87f4fca31ed4d50e14f2107da02cb5058700b74ea241a8b41d78461658f1b2b90bfd84a4c2c9d6543861ab3c56451757dcfb9ba60333488dbdd02d601b41aae317ca7474eb6e6dd', 'hex'));
    assert.equal(instance.digest('hex'), '0790649a6f6ecc4dcacafafb6aefbf6c6f7ec883c72671db211cd163');
  });


  it('produces the expected result for LongMsgKAT_224 4568', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fe06a4706468b369f7624f62d04f9fac020f05152f13e350016b2a29efff9a393940c138553356b0e2848c01b622b95ffa11ab07585f7dcbbf90e9f8ec5fa2fb7b4cee0d0a4e8d33490abd058cf3bb85f0cd9b1bd3e9823082d70b1a92aca6f2c87216b4ba09feddcaa4cf254336146cc75604fb1f286918fa2434ca36be2621049438a400bdeea6c657f0301503cd7e6e38350838f60ea7f001755da4142ce4579b39029da83f1646b7ecb9947ee89aba377099b82026960b9ee600779bf00d6eb0cd09226db6915a7aded27e6749e2cbc2c8b030ce1850ebfbe24c0658f29e9e709cd10db8a77efdefc90fdd7b9ad7a7e0334412a53d248c4c12bf2987b7accd2a8a602f184583aa560c016093b56b100154477b834664e6b85a19f8dc909b4d79816af12266c731e29a304e9bed8ef1c8030365b7deaf3d436957308117c7c5767e0cda6e342ddaf824233cbf4e699dc667357cb35c602ac6bddee71b352af55cb93941a1a6301a9904447af9ee486114d57ae03901f10084adc0096e465e2ead2496273112f2fae626e230d42ec22ea10a8289b3e35eee42150769d6e663a3ca29174316ec93a24f148d984053b8f98664eaca3e0dea0b42e8ee30f81a2cd6e42c189a25fecb6e643e693e1f8871b837c3f5ff2aafd1650a465dc8e5c1993be65cffd87f2c680c86b0ad3118834a5f2e490015137ba945c2775dbd77fb3e5c67819a9a7a94a656fc4761659c5b30ed2ac55a6d249b700bc9c93d590490aaaaa75a9fc34a90d5a9106f2860bde19fe5815436068a7f8ea4636a', 'hex'));
    assert.equal(instance.digest('hex'), 'ccd8a5f3c0a2f6aaa25be89791608c429ad8a6de767a4794b305fb62');
  });


  it('produces the expected result for LongMsgKAT_224 5072', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d0ff6e045f4b636f75a389799f314066644854821b6e7ae4047adfde2d0c0e02c250f0be582bec94011189b964a8af430f5921ed9d9f4446e4c788515b89ca69e5f7cdfccc9e83e8f9460145b43ddc41c07cc512b7e6fdd0e1e7aaba29a6c016ccb7bd54b145f3951eab9bc4908f623e5a9b0c5b36056292540b79fd15c53457dc74a65fd773a34d6b313a056f79bc29a3fac15f6a1446bfaeeaafbac8ecf8168dde5f6ae6b6e579bd3ce74e7abfadf361d0fd32d56586a8d2d4ff4cfdf8a750fafde4c2e9eb32b06847fa30b13cc273532d1a23c8257f80c60b8fa94fa976f534145cd61c41c0a511b62cadd5848ceff643f83ce43f8e6969c5a559afad60e310599a34b2e5e029fbddf2988fce59269c7128a1fc79a74b154d8aa2850dcfdbf594684e74099e37882b440367c1dd3003f61cafb46ac75d30e677af54559a5dab70c506cf61a9c35e0e56e1430746916ddeec8d89b0c10daa02c5d7e9f42621d2b312eaffc9ff306297952a32d26c2148570aec90501ca739ce5e689e7066d9580a4fc25e2023897c74c6856273133e1275a0d275dc5b75db724cd12c9c01bb95ab5a227b7850020630506096878d289923177183ea9282a4c78ec212d2e898cb99d81a3364df20927ee34d4475a5cf5cdb24088ed75b60201922e9c972d8556ca75f8274d15f3fb88a6b42c766def6b21329dee7c457446dde8c26405fe5d0309a04229f449e8490cf9000ee8df400cb7c7ee831bd7059d24088fb42d61681cde45050fca78ff64d9c8d1f58b55f802fa5d2f2e723f3e4eed4338b060d31c8acc46d26870bd45d0de0798d48e32aad1a6d4322e69f5e72309b9d7fa1f24bb1d63ff09ed47391c232497bf222c542a70975c8292d275197a4ca', 'hex'));
    assert.equal(instance.digest('hex'), '68c938d6496bb507d7ede9ac12fe8e010b3b2cfd44a5d4761031b9e2');
  });


  it('produces the expected result for LongMsgKAT_224 5576', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c9a0b51f3199339c11a5753c9d9c95104b400127087177f14d3e15be881ee89bf416f97d4f7aa9636c5ef29ebbf8930804006eb26839415d3984b920882499752c36a5bbd583308e716db16f28db98b3a3e718a2ebcdfefa75d7ccbb6a746e32feaa38d034843461dbcfca7f983e19f5b23ec2e3d74d2b4402f3bdce7d7a9df1384668c746cce466b0654cdd5ca56a77d68a100ae06d63cd9af512aebae78993808ce672330e2065c0f71e05c0fe821cd5f85732315f04666f3e4e6c4f3e9f415e31fe0980d874994108e12464609c6d5c19cedfc85846b0a84ef3ccbd3b655fb0de8cb892bdf774df39c955f04f322856d470981beed0f752d82ead73b4131c5dbf0424b4ab654f72e26ef0cd292b87bd5b66fbd5e7eba96c62cffefd4b1d870bfef312b86e38ed5c0f50935e2ecf9fcb8c95d35d19a8fc8f202bd9dba768ca48fbbb071179413c0de4fde86762ed4b13e1eef2a00add5d1c2a3af7937787debaf1f6f12f3f0225ffe587a5540cb550f7bc11dd6af864d6b6d16db1488cb226ebb2199da75fdd59a71158867298f63961b40a31209f8f16629b1cce7ffb617072748fde8920d11cc0d0678389d1f719df3ed19846fe9893b04db60fa603170d9573b1bfc7da663e07254552ab6253dde814117185f84373fecd7f98ded170c884d41d1ac81814c73ea48ad94eca1b7733d8393e320c8c467ef6189b4ac324c68c8a2ecf679c893b7dbc4310cd05dadd80bb6326b51ecd99a441bff77be8d644d752f3c5c794e7d45ba76283acf8913bbf2a420f9e5d14d7a23e95fdebc69b455e466423012e9d1de9353e40d4bdc3107c3144b96c6dafd41ccefeb2b7ff848cb9fdbea8648be32160fab7e7dfccb807fb019ebf159231edcf2d487d76a3e882f3f50ca48dd08a23b06ee887bd7df9d7c6cc2bdbe348e3125c4532448f400cd57a8679abab13e582b13d49442638e2698fb7a563c7fb264157', 'hex'));
    assert.equal(instance.digest('hex'), '2eaf74198569e05a0614b067c911d625a9222bcb6f7537c34e750393');
  });


  it('produces the expected result for LongMsgKAT_224 6080', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('da5b2118cbd59f408ce56362489fda69ef73172f46dec16c0d4a66e3f3cca373927cb6784ce62bbcb08a490d003a8f77391e82cdd87860909383b054db95816720112e2f96de9e0ffc8babc1350ed46b9aeb5d46b66940efa311f4853f3118063c550733e7679d871729001c12270e98439e375e0cd24769d318e03cbc97d643f1dc5f1b5ef59d12789f22449bd8fa43a13ce78a4186166523f3807b0b621079cc528f4e17c258d4f9bdd095a3e365614b94f2cd778cacabf26244891531eedc24e1bf4598319eb8b7527736bb1e734429360f47f04b2e95d5aae997763a467cc5303d1141c2c01f7ab9edab860d180697c906ce1558aeff5adce603f8a4a10fc6c1699189e73b489f64cefb89ac557c5bb8826c0317eaef2302e855fbd96777898104365d96ae8a8ed8669c568c4dbeb0a70f6cf4c22fd933014473f91871c08d5a7b44a928295fb2aa56d5e2c39ca79d2837fb39b35c6810c378d749aacb543368a19c137b872229e0a6f469022aa93bcb2be38b761c85ac09415ca7deeb38ff2a2101507206fe322a89666d32750af0f4d7b2e59571f02a048b8f94fe2d231072e301c8641d1cdb4f841ab165af297495a348bccd937712e68852a4aca948c1294f8b733d06d67de89f206498dd401e149fcc1edca92deb92952ede4ebdc7cd7992104769a04de8705027a31337b88e8de93f6624e8f10b9f9924e8ce5a9d841c9260753fa1492cddffe6b4400c5719d76fb5b01b234f32ffe64f04d0a00676fbfc58dbe17b4d552fdf0c5b802c0cadf723f73f86e8ffc493992d23e8c0b84f7220a983ddda21170b1f730c736e75549af6ecb8dc94fb25c26bcddee420c83e8a45ae4c345816b7163cfe016dccfe47c66979d610a7f9b4a7b1ba5e230344c9f46ba076f2fcea68aada8fa09bf0b5cbb3850ddedd80a30e1f7a639ac69e5595c6a4083aa959831ebbeb84c018068723192f58baecddd18c857e212d4c7e7215b6c954728183fbaa07720b97189af6a7729c30d28db33a889f225d027d164f254535770c504c506aee4ec4676771f69f935ba08a1c6c85', 'hex'));
    assert.equal(instance.digest('hex'), '3a9695fc921064ad79921d76e91d7ac91c777a77bfb5380ea0686c87');
  });


  it('produces the expected result for LongMsgKAT_224 6584', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d1890b4704e169c28e44ddf62a1091450404910539fc2daeb26e8acf4533b024e5215c2d02820dd8fb2cfc1743955cbacff0f8f35dfbb5e3f942f36247f68211d518f3f601aae12a1cdc000bab43d4c973f287e80741dd1fcf6c34f2e6b4b6c313d01c4ff3cbf9166f26946f18ef2d58271ba9233f09a6b77bfd4f48b36eb3d73d1133c4f842a7dc3907f680b0b773242c11e3dd973a44327ea7cea9c0f8e07d682b6651e506b587559fe01ed721000baf570a16fbdd9ea29fa3def4be912058321a8b720c5c102e48a6e7ed6f8838d400dd57d06eedbcd15323f86d855c94b21e41b14ec9e1bbc8019211fd88138c91f9abbd9bb3914d26c1ddc21673d2d51263b39d66e741d924cf2b192c5d2c1a140126a3d64a2c77be6c2c6ebe8599978ae90bd36cbb9af64d078910c4094ab3bf399c34f2ab8ef843e9fe1bf88bf443ba21e4377e5f49c07fd9653b526e14562237f02d11b904bca6ac31ae721a43e3c4910a24af6f4d80c031c109fc0fe49f15274bca92bda04c3b4196c192f6ce489c63a806acfc895ab52cad657c1783b528e12d0ed856e1f8fc91f2aafdfa0a92498d68530772ee73b359fcf1418d1096c46b34dcf90e5b468bbb2970becbd70089cfb039d64cc50fff5eef26384d34f24515a6558b06a1fdd88f1050c5bd78cc6ed83d4c2b0e882aebcf84afb0430d0bf09f2fb42b8b4589158093a7709aae75a790910e211ee1333ffb6fd80778da3bf73858978e9dd647978841b18001dbaaea43ca0c0a03dbb9bcf30ce76a6f4b2cf2a9b6531b3e4051e7e05090cd421bc66c4731e7122ad129fc42dedc83bb460e3f889992fbd3ca072686e56b72c720fbc98d723ef7f247286f77ccddc728738e941b1a74d4f16671c21fdd5643a115ddbcb88ee7ec67ea66fd2bce718df6e085d4b5fc71a72696636a8f7b3a68afa51a896771faaa7f1f827430ac5e8089dbc0d4175e1b22a057bc5f1724eadc1a41e78fa3acaa8b97e5f2e19ef9d59ae12b04e7f0e8a621e098a66910e2a5ed2102b824cd3ea044a854f1cd0b33e61e7f737414b2953549f25dd34d19aa1981de7cd5649ff6c6364a4f25312ef62395a747ab88aad722c05aec40deea8eee5e779ef458a68840bc6bd5d29ad40f98b3ae010b6213372abb7bb8b8', 'hex'));
    assert.equal(instance.digest('hex'), '97495bfedaf1cab18e85190b374729f5543fa3f1cd88438156f01a0c');
  });


  it('produces the expected result for LongMsgKAT_224 7088', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d9257004993c7ae50d20f534b42b4ec39bf358393b9fb5c8e37f87ac7361354554be596f40e67b2ed499887e26dc435c4331cde3bf1a118f60fd821477ffa3b92f6469568cd2cda6fc0a2b13906ae459cf5d5417de2ce104d0b6499d3683beb40715582ce70ded5c5f8461edeaa38bfa31979661a2dc96d926307128f77700f2c7d38b8a9d6c6f70a3973005350f938b9b4a64e228cc3b3f9c4fd446fc650aa6377152d7f46903d8ec8e9340710e28475cf21e641737e7d7da3cdf18d01c8f37131e727c7274b2db759c5586fb84ec36a5ce2d820e553de6426b8b96111295c19dba8d17a2b7047fcdf662a59c2af27a9abee37a7f8afc06944346e343e779ebd895119d7460e7da998962fb1100e950a8d7fe214360ad263b8d070f2b7dc91c9d77c6692da0f472a0a4646a1edb069ccd9ce4ca6fc24713d650153b9a253db5136a3710198e60934dd2053315d313e27dd2c6ffd2ecf028625f0e937afd8c2ffb1f646e51a768204d83a649798a51b8e87fcdda7bddf58ed943bb7e29c7d7c5dff024545f6a689aa0e727fecd80b561011a731acdd9b3f283123098ba66b6b9fce6123b35b6f3a20ef1055be9e257cde97e5af41eb796438727a62aa665cc9b771c4a2052efac61bc91bcdf573f7263107d44dfeb125e66d1f3dded3bd63845af3bf4185a9a24a7f4b777c32496a6107b7ac940af24be983f6a758e5064f8717eabbb86e6aada7da75f72abed59a42de82b1aa2642f5ef1b2e7304f642eb2aafbf00c1183d9b5fb83893edd48e9034dc7a7ab66f3f392f9666c00ecc9743ac4f777edcf47b6818a34b7392b4ab8e38891fab4018dfb99af06369115d60c4fa073240d9c2605e020a42db2e1e0ae4ade3a04b825927a05d4fe3f50c1c7add7a496da7e95825c064315196c2007524d1e1ef2c51303dd1203ab66d9fe89de553cb4b95a6c5d629b89b7116463ee10ab3cf2c2615f95741ca226f9e9a20e99303888f725c77476533b4c393763170f18f292c89a22df68eabdb81aef11cc2ac329c174bdae5d3cc0bdcea6eb225e00c15021432264ba7c5eb49a49231d1f7a13afc238bd4efc04da3c15ae0bb7d693a0150e6a5ad9b1e11a490b3ce90c027442501684c528fe260881162d9e5ef84d6e4f73f222e779e58b71d5176d9a27f65e49d83efbb2d7810e5b06619d8cef7e7b51cdfb6e8138e4cf5674242f947eac13fad08d68a8a11aac9754a5316c93738ba7f3c3bd2e827a', 'hex'));
    assert.equal(instance.digest('hex'), 'b9cbbf5f954cfe7a5617a17dad9c439fbf2a071efb4f3c233c0b3df0');
  });


  it('produces the expected result for LongMsgKAT_224 7592', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('09cf132ab943654184a3fc8d0368b421fdac4ef1081a29f3691a527fbdbd74c6372233b38dc432ba610f9c54fa68699f9ec2a6bfb0b2cf7aa6d10ae2207a7554163aa14fb6a9cfa023ce63546b7b02af03370a899ea73b27bdb5c380613c0ea670c659803d5f6f75c0ce62b311dc157de843a93905e7a28a2557684ae3db4fd009412a107098f881dc06622ed9e3df2c8fe69fe50bfae158b87ca761fe1e221856610bca301ee68958c25bf58d3be203af928a919ace53c3d99f55ab00dfc8a1a28ab83e78617f194efc46daa77573d02ffcaa1f9d96fd8da8dead3d4e75ee5e65fc360b2a567cd34d52bc9aab8b71160312e8e21aa506105d6644e6863e7d5e75ed47c1760743d113a4526553b303341fcee5fdd005d35929f2afa760bb8314d0c0eac960fda3263a1e6688098251618c90332005c757af958714571b77bf2a69030d99f71d1a5259658be565fbd098070122c43edfd400999c90a98ace95315faee4f1c0441c9315d527c7ff1a8171415d2a076e2c513d40b03cfe5513c0e74ea3a03ad4958c00a3e1916d34273e301d517b0a5e770393880d9afb4d0eb44d3140ff7d827c48f67c6d92b865d8fe7c7e45aa50dfd8525f530de1188f3af98b3dc625d335e191fbad5ee9df09c97b43f203bfed798f7d171bf00c82ea0ed17d5890c3d6b9ef6fdc04c5ffb645e3050406fe2fb6bdbe2ffe083e751dc19f2f06445397019b61cf1f505875520f09c6b719e642b81b2fbfbdcc072b7981a666d51e7065e21244679dfe056bc9d42b8851f9d2905fd838707b279a8106eb894b60a72e4851c344119ceeb5bbe110b1c5b21c9a5f7545283002d4b1c115308b1cb20f6d9cb869ed0459c569662aa5729a7d7178de7d69e4885ca77c011e785ecf0e2ecbb8f5245579dbef7a5eb30307e0b40b817bd1112d28eefd548374bc867e0c34d2236952b9f859903e87e977190ff94f5d815699154f96e5449ddc1a14e4196c83e4fb02f5f58c30eeed691de47c81f4883bd84f6ed711fed0c198bfa2b8296182d7225e8989acf55d3612a93e77d24f7b6eef813fd514ce2183571602976391f5ac4e86da59a64233230fb67ff0bb9ec40667f54ccb235d04b3fe1d9a47e163cb19c316046fc1353a6642219e9cecf6e3151c0f4fae1177b67f19b4964df96bb6af37012b8ea9e5ee24c57a010c872b15c8a65d0266589f6da20e38d9be2e2c215c69f558084e48eeb61f4eaae83c57f3f1cd08d05783fb9f5ab1cda5e4b86291fffb14fe9b497ec73292bbd295c5657d71cc74d38a2f3db73ba972986b7169f76ba376376f4747ed65f2f1a5e67889af38a380', 'hex'));
    assert.equal(instance.digest('hex'), '657651aa8d8715db57ff7f18ea1f2a8ccdbc2d5bbee8a510eb3d3a27');
  });


  it('produces the expected result for LongMsgKAT_224 8096', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('670b79c6030da4369146a7f14e6bd393df729b60369d3d55461e5187d4f8e83114b227524ee955f64a2c607da850235a1b49fec6eb51edc21941dcc67bd07412cfe058af4505c325d94936ee36de4133773acf669515daf4ed87508589cf651784a8c3820a88fbf7cb60e20a035ecd06405b50f6a13a36e174925b4e334e197e1e5fe86836acbc1ac681cfd42b2f11f74587660de867ebba7222c3e89b42957ac4508f09b2de9c3b57c883138f0d442a050d8aa3023ea920140f70237ab214be9fa0c452c54b5020077ecc1f5ddf5d959a5aaeaacb381355fd7b493a1a51ce83e6eb52cc61214a02fafb01593d5730c7058bf9106b8314f1005236e5beceb3805bac8fc4308b2007823bbdb3dc25042d6ab7745941b055a7648f99ffdacaca9801094ea86dbc9d2ef2b61a97ad5fb9ff754190a529ce65fe46afda3c0eae0ec98ed5b089148be358a8aba6b2f014a5b74547fdc00501ddb1472ef4ad592efa8031b0a4376dccea8714575bf055b1027824f463e8af110ccb521b2f1363c0f13256b768645a0377541cf2f73da03af0c026e59570d6007bafc297a41deeeb32e79364f9efff6f81b69fdb99dbae4ddba46016f86be1157693c63cbcfe24c7b6dbc2260798a6c397bd91d4abe0d5c23b43769b0ba28b6b954e66035bdc52de03b33ca004b670ea6e341b01adbc40de2f406bfc469122ee30192138868326bb642834f9e78f51976c3e6ea0efa570926f47612cd0702ea82279d60e062832d31785933e3beb86d187554a1675a61fb0b865092e518ad329f38a70e7dbd6025c9925fb0332b5ed97e77134b8684f6f167ea639fe6545fae58b611922855b44e520601dd0758319e9491a1229dc49f9f6f9eeadd9ce88ce91e3bd3d13f64ed7745280f4828d3a00d66f3966e0eedf930f563d8e48ed94be42ce5f48e92e3f2d801ffc464692c10e7300ab0f85d1d44f353c742e20de3706bba4b24ac0048ea6e0b40454b06fa95e5dc2951cb4b0a7d1c15a3c12a3889c7191814161c5181880223fe3070404e61d9d382aae8f236165fff3121d1b4bbb5b4d9b01282e2663de39c642839b34e853badd9e2e2c82fe90fe755c8677de6a405d1a23492d84aa272ad94c180300d737758e00da835da7ba9efa3ea0c16df2fd472c1b57e0d5ca40d43a3459a06a3360217adf41645fec31f104ca6166416e36597c35dcf0fa43298b7fca4f5045aff900298339ff5dbcc1408d703cee178c6b194e1015df362b038afd349610819fab289ac11cbb3f19ffc9fa0203c231711fbcc48922422059407ea225f8509761d3c53d83437b507814e61206558c8a27e7d55400c64c22aae33c817324abdd7114abfc01cfb1afc16296ff6b3dbc8218514b83102bc84272d41c05eaeadcf4a0fd9983fbb79627ba8f905e4cd345c874', 'hex'));
    assert.equal(instance.digest('hex'), '38a093a979528fcead9063c265b4fc440ddabb82771573c7c2d06b84');
  });


  it('produces the expected result for LongMsgKAT_224 8600', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('c595336827259b050dc783f22ff7b033ecc98f9c7ce026809cf388fbcaa29a9d3572547ccc0d5f8d26730617933f809b9559ab20339fa90a525c46a299ef14c9045e6275e22c34093e9bcdb1230198433672eda8fda5b16ea9313242ed777e86f4afffb4bb8a9cc0a902ade774ae688095d271ce7df975f1404fa5dc9acb50d66d2f93d77e262586caac610ab990974845f75820319fe8c507c759da479afc5557c32618f65ef7ef36e69f5c893435a592c3d3b3b8a8110811362b22f2d7a660a767d88d6ac9656f0d83f1d0395d477ae9df5016d982bd6cb972d733f2e010cadaac4dd20f8b4b798c12c5fcccb7c7a166e3bd451ce0b83f9feafd67af647adeb7eef023cf2c0cba8c379fbc4a5a3f58473a374e09ff096091dec2e5b35a4283c7dd96c46efe4f2768ace5b43a08dbdeaf95be5c2db0540ddf80fc895dce343ea93ed2ed748fc32435e7b28ed8474ede0ad449b32739f7d74a37c928070d0c1c30053adecaebc88f56c013ad5439ad2cf6a3876364a6b68e0d1fc20906670ebe4e85cef072ff67da097e3b6a88f78dc10f95520762ee86e8b26363245555da07649300893ff36854bcb875aa1924b7a99169e965803b74cbea05f7c486fbea2355ca033a77c2f4164a06ede30dc6244fdb3e8daf9e73f83544b79bab20851a640dc83c43c8980a2729ec01f409da9af6e9b5b7a6286ae8f225af90b2e5438892115e6de72df2848376490403a543765ecfe2cbb46ea7f0999cb3993ce099752e0999d84c2bbf91a9fbd39cb721f4c6266fee4df896eb296caeb2b3483b025e4be27deb57a3a706bff59829bad9f11eb75a1d010ef1ae926d5f5cadad5cb3ca7160a66846ab4f12f036933c90e115702e11b2657031eb28bd1e2793d0d0bef4234c2b6166a038cf67dd60cdcb86fb323788aa673f2ce5adc8fa8aae911d7363ff833abf619847e78f137fd0959b983e764a59fed29cee31f2f47715faea7f91483a6e61dd7ecec557cf24bb64cfcc0708db55da2426d4330438c42a4fa7d9dc4a1c625823df1d701bc3bc3aac584843de330206c45df0184ffae4e347fce6860c7e0c8fd54bed94ce321d62325ae12f932871a4724677bdde95e542ad66cdf491f5708fbeae6a6846d7068f8827400c188d6915af83542a51a1e0bacdd07e25064e2915ea78c8ca8327e2375eea19c565af6b837ca5044acfc4df68ee324d5bb8ef4d974368ea9b1369b567e6d5a44573da1249c84a789442ce16604a94788631e8906398ea3c2b8ea304b11e522ba82401fa2338ce925d31ae37bb3a67160dff3db6f7ed0c2df645bfaa5e276f2cbfc4ca288f2c3b246c67315235c0546bcfd3e4ddc2d6a2fa02ab780eb0fb3491239a2fa1b5ec90a0203ded372d5f594847d279396730a9d8ce5cc92ae34f7c75a07bb4873a5c5ee78268ddd0d8a351794fbd6c801551b39fad39e6cd2cac30d4538e90ee24784ba1ac0ba9cbc287151c7d8ee7ff94524fad65b3dc45265ef3b708ca2bcc5d', 'hex'));
    assert.equal(instance.digest('hex'), '6861b5e0cfc223eb2b9b735567019f90b61a76840c89005511b66385');
  });


  it('produces the expected result for LongMsgKAT_224 9104', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a867330d0c93083fbb159efeef907aa53ace3995acfe7587b404af8c8334e32f9d35976d0466659f264826109b23a0df2056a5479d0c0c5ea5166ca231525da90b388c43259ba1696fd392fa10d146258040040b6ac2c3e91d1f224e2a2a0ab323b4cde6ee570b4dceda7958d69a2fb85f0d9daefb3715e5825298b7d3d8f09268413a11b30a24358755f7ed9df6f2fa9ae7a219e65bea978fa1187806386eba03af491a1d5708af2409b82db03a19d665ec58119ac537cbdc75ff3ed1e0d0a26d291391de6584bcc0d55b9931537ebe21f42afef05ad755db1af60988daed8cb087733421679f8b2d381c659c1325d47688f2771a03bfd31cf8d3c20fd09f603be7a13d1ba8d37cf492c93724a728bfdbcb6d3e8f0d770b5c260cfa3515aaf7c25faec42b2373970d11eb2a18c863d0d7121bb2dda1b223b883c468281efff0170ffa48552f263c308658d969866781f041da0ab149eb2020892a114a4a7758adae9febb4aa76604a65b87a2a5d0a45a8096391b3d1c09fc95746c449baeb2f807afc8e4f5efab2488ec19805691162ac8a3eaca1d25f0f4eb95ecf48c134584125aa0fafd5589847e656becadebfbbd258efcc6f749e15ba09dbf04b93877fa04ec2b6c3234fc49872c318b302252471705be669022765fd01d157c4aa54173399548bde8d8971a8cf0db652814313b71bc062db092fa5a5caf1809defa1215b42b800072b2990e6fa31f69d52076ad293d966cbe4f89c6d4e45afb76f23a5670e5b36fd60d784a736d0201cd2a119107f278e5474d87a97f53b12a8ab1d0191d19ec4103c472d1e7abe7351258b26c445397aa5a3ba924238b275e7d53b20253695866ee8ae02f9dd8fa8bf4b76e549d9322baee58d70bdfe1af34ebcbfd80aed8e40273727b7b919a28862171cdae66ec885eef41e5d237b9c308772db7cad7673646a7cc7cd78800aa12395e6ddd5004f0e4d4834b66d7ee7fefbe4e0947cc2fe0993c3f506ead51c9e9b6648228f03230f61ad23a708b11dcd328ab9081d102455dbf11a932f90946046d72d9102702114b8965f328d6f57dc0ece0b1aef7620640b4f43615a1123b6c3b58438b5760ef0bee130c5655b756dab1894fec4736420180041698dcdeecb5ee98b043a870c9949b1141d5a0920a1efa60a30d8cb33db0cc3364c657ee7e3e582a2a49610e8c08b9ed733d4f584ef6b9fc43f62cfe9f69bd64c02b1d20efe2ea9ebd6b6dca5f6d9de62a443d67c60cce67c47b4edaf24805dad5ac498bf1634646d0c34fc3b7c4661ee8029cd4fa237531cff681213012993f91106084de20241cde059bb37a26cad85533e4c5e8a4c4e6f952162660c0c55d8e266f0abdd4224487d06f7da1f26b84d6d30101b535a1ce76355ae1d34da2e71e244460848212d9076ff79d8a282359b8961c27a157ed6aa5e9990d56b4ed7113066bd560719a431e3822ef24c0630110ab448ef269f4ffafdce95fa57adf3229e5ea639cf4649e598e70f517f8ca03c9afaf4c752f7d14f96763f7a0eb4e5beabe5fd17fa8ec15271a509b1bade00d840073b52de95c688f7aaaf25751055c8827d1c6b5bb2c9140edca4', 'hex'));
    assert.equal(instance.digest('hex'), '0c265320c0394c03fae34d80dffd04074d00c7214f95cecd9cfc8f7b');
  });


  it('produces the expected result for LongMsgKAT_224 9608', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('2eb31026155b7bc3672f060d8407b1622f6162cfe40e0286cf9bd73b185003827eb75ca080f0fa81d9e5893f462124f679ebad807df6ad87c809ff552ddfef22c11c4aefe1745a457462d346a3e0419347274f0a39f09ac211d79bbc13c799bc26e954bef11fc7d9ebf0a0283b59498f6a271afc5415f656f1c0a0e311edd0bcb49853f0fb52c849848406a7df6d7f3f32def50d8073ad2b1a197991d7d5337ecd5c1472e58dfe42859fffaa4b858c34b305b8f921afb319ab0c0a4d03024bc2afee1bd4b0f97848bbee535460144e301334b90ccceda137a7e44c44cb538e9a3d10961ecff2bbf16beb1a40240fa63eb02faf248191dac569f44aa10b9e391416a41a1af9b0379d2e52eb6c2c1a11018ab951d030fe5fb6317538f4dda3d4b3871afe479c4ccb0422301bcaec7c0d6a12e1a4db17de2539492c3c003c3c89c6587ce25c7c7d697a11dcb41764dcde7372e6eedab38b4004ec0805e1fedab9ed2550d976c223b0b0fb39fb006dd4aafe042b0a771e098baafa72aa488a40a16bce6272f64023e863262bb4d0a137f61f9e711db096dd93254c5e4382d3f7f1914e9d18f86637e5e4a7b7fcea80edca63b3acdc7c692770d8ade9ab0ffa87a2c7dd33317db038c5709bce686fe1be395b3292033858a2fa3c8144d4a74b53cfa8222ecb7e0d788f4ebfd75d880daabf66d888f3d7cf5d1e3dacad33f3c6e05eb0ffe7e8cb1dbe1403530f1aa44f7028580c9084dd6dfcd7788b94050b5fe63ef079003a51fa43e726897e82ebe160f4f48c9855d59bb94b8beb6b5492a66b38cfdf850b6f1cb368598443f2ea9653dd5e6a3ed60881d47956cd24f1b0567edacfe3f87a67e1d90ff6459666043b4f550d9480f4d17ff0b40b71364366b17d958db40f3b88189d2367572ab87a14b160344bec8c69bc0374ebfc62fa8e090296e5cb43bb253d04f24e21cc55849be4cb7e3ee80aa0da1f8c71a55e1d98a85049cca30f4000506e4f36f7096d4f88703a6b772690602019e17bea5965b68ca1d78cb157e640cce3afe00a25b6172eca4cb9902d3f39bda25d57e46ee01a794da2fa309c083cb103224964f8914e0bb39f67bc50b4103e41dc29c95041d5835178fbeea6bd35acdf51a6f5444cbfe5400439dc70cdff870e30ea1239faa2ecfebacc73b2c104e99594ab81894f4eba464f0096f4368d8662fa12b46cffd7eb766072bc145e170bf6459429bea5845bc4f088b98d9f1ec7b31b054fbf04ba5b7d44141cf26b24f1d80e39b2fc844e2c3cdf5c752f65057c9d4e982172ce094907721da4967772533632632d7335342386628438dba8cacb60139a7a7d7ff20f4e20e405cd3a029c3af103a91bf2046c372c20e99e3b5971cafd3e2ca4cc7e0e6ecc272bdc50fbd3f0184e58e6b26d329a9380049b3298ce33cf15cd7560e3d3e0c53cb029337236f9d848762d371d3279a8b1192d83cf1ff8c4f12dbeafa383b47cd3f172b82d4d942d9976a4cf2e3e0f69e13f1d8ede152938b978d2b1cbaf27088a10935eda68b2e31448b09e586e9fcac11c6cb056fc92512210c3a828b549a1cfd3516c4a5b4a59ffaf22d3ba324da5e92c607a45c189d7482f9ce1fb005b314d6d8ac0cf523cb21b3d86cb21d451400695d1341345dbc9e6cbf02f565e8b02f7b2151131514ee7d3195ccc262eb615a6c6', 'hex'));
    assert.equal(instance.digest('hex'), 'ff5dc9ce960c604323cd9d2d5d8d52100dc184d2895ba876a535dbd3');
  });


  it('produces the expected result for LongMsgKAT_224 10112', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('218a31573465b8a543e293e5a591113e9cccd2095f519d2b0d7a195a625950ae2fd52ad7d5e5c984e5bca89f7fbaebaaf4686db96826e8e0cdef1b787cd08129f7ac7bb0e1635f7f52c5b6d6497a0db6125bf0b2fdc06c8f72fe16f4d75d5ef9620786c85d0c128aecdd362390039e2548d1dcaa008b0fd870be34e40e66c0aefca28bc631b8fd8031fe7a5f39e81d19c0cca18f1aecbb8ae0c9a4d10b85393cb58412b565a29999cd039883eb095547e8cbf589b086444f0ec302236e6efc508c3c08873cfe13d565f5508790fdac239158ae65a23819f365ecbf4586eaaf39a5b73ce6afef6533d56d20758720f22e27e2a4be08659b5b749ac209910eaf590e5d1276b8ce3bcc49331fe73813417c0b1e6efbb2418c82724607032433a0d720c381474eba5749305d8fee1230ee0bef48286e602c593b9c5434cd5e4daa36ed48c47bb9b540f077d21feff369179c443665ccb98ba0d5a7b8932a8dd7d5dc020f6261e24fdea9c6611a096bbffc44aad997c7bb3ea32305a6ab41e33c55f027d3a990520017cb8cc95094d225c98fe7ffc21c4480967376ec8a22b2216fe467c49e50ed8ccc42fe9bb3c5210b086a9ff194074842affffda8f4734e354c971ddaa48f38fba1b7d5cd74f7433ef5a45d0f6cf1d99080c2a7c0dea6e8adf51bd59aaa502e75c96bf6d53974da31af027843f3afcc34ce1ecb81b614e9d2c382d8b0b6007cb4c54ec507feebed9992df8d1251c74e79b570ee4c268d8e03cd8573005f17dce24c6a52c076995e72ab5f72f290682081932e3357f4cf0659f5ac6a0d324c9f52811bb52c9cd0cc858178b9283aa53c523045004b2b55bc273a49cac17b95e36f8d39c64877530141c668da715c3e1b2e2172422728c1f7c1fdd3476d13487f193cb18c1fcef43cce594b548f164a24d2e0c15dd4f65614c0f0bed2597b453a9349ec79f154e52e9fb74eb55161466617943cc9189e681a3ca51150ce23b3009ae991649c882629f76ffa9161baa1d02042baf0d816bacc3d3a5c90279f3994d4a5eed4da6495cdf9560e900d7a7e582ccb92e543c3e42abcbfc2a8d53e9141942e3b58115b6b64aa654f9c8ea1b856588d464b9a6a642d0fcf4430b88637206758af500daa35c7b652a844edbbfd908aa93b7929248280dbf48cf1cbabe15aca02fe6d72bfe7fbac98a0032a32346f40b2eceb6de2be6e580f89a86e4eacaf0e952e508537566577dd6de6bef2fc93559b96e64a2a9f9334c3c26d0bbd849788f328429d3a8b26647c96b3d553f380619ad4f799bbbd56aff22ce8b61fe7c18ed88ebb5dbc4796bce01606d1eb762fb11fdbbd3cc6c55aeb68bd93e9f355cf7b07cfd05c2502f0ba792c7703a030c52cbd545f394108140cb9b5a149b616fb6a45dba59b5118b66cb0949a3db9e39ede0abc2e2e4f76cbfc32d7d98d36d23e757f3c5b3cd3b37916b2cc32e4fb4ce191c03edd7ab4f061c5f1075e59328eb696e7d000c9149c93126aad94e30884c976172e75bf25967785ebb5afa68409dae873a612a744a1524c2b96843de61bb959dbc7dc782b42c39171f60c420497db5f77bd5f84b52cc3924605f534005f8068d24c47ef82ed7cd4e5216501c3304bda3659906e8afb98c74f865dab33a700a6c8839e405bc6cee1c361a72fb6baf4b1183fc800bdeedbef141a597253ad54fe11d6db361865dd58825116b534ae08b07586371a3791fc62710c4356e2be12700ddfc7f3e309f5ecac4754a4a2cee266a37d67a3f8cf97c45d37', 'hex'));
    assert.equal(instance.digest('hex'), '999871b057e104e80a4885e35b72e0d579b52b29c44cfc36b9d4046c');
  });


  it('produces the expected result for LongMsgKAT_224 10616', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('4fa3df1dea75ad4b9c379206a95fed930000482e5b683fd2b17dc8e7d5c4bc1b73186ccc13c9ff2dd09fc1d4f68034d120e84ca73a00b71a3b46d1efc6ff88cf2eda65810b098cc5e651d9cf064e87076d5a871849f3b405d3d58ef5b1f10520a9fb4fc84a81a87b13dbfbf9d8674943e28c257e46d8ad7be1785f1dc7c9b1bd574ad1dda48f0255c853d2490bd3d63da22a8369cfd02594999a2ef443308fb8298266a11efa177102c75dc674e89fc9dcc1a0d3c863bc26141102175d2678eb6e13d90bbd9a5eb89ae8c0cb47d7f340d3d32042a2762bc9bf2b40eb40e87fb42610fe7e357051f01494704fbff73321b47301a0799b7ee3fe5e62200f397a61ed4509a62f7106ed0efb0abd6ae9e4a1fe9b02c092dcdc75015cf602f3b9a8988b609e6c0d1c5c3e219ff57875c2ef01615f89447ea602dfc94eec17a398c014bd346691fe209a002771dc8164422cd166afb457a8b3071282178a3ebd201d9b07b27e711e7ee7d33aa5210ed4e4e92486775d14a6ced092e34a7ac82670939948fec149f9c018fcaad3fc597d315713f44fc5e1725f448ecaed40e8d841bd02f1e81c019b08f99412e360c0bd378391c67d964b47f50c26f0a483ed664023616b0fc9afe43620dbe9ccfe070ef295c049eac754c2123130c6b2c0232f6403aa7f0dc35a5999bf95d34ad612234c6289277adb60e4f72ec2df570f05395b3be8a0a3c78b732821aa08927c524e15d65f66a3db8c1c96fb70bc0686aac310051f469fc5ef880c0f66947c1c328f97684ea24cbe63baed8d114f40507c2901034e6ab3893f366d53f1cfca309309218cabceca4722fa9ccbc7249b87c12ff8397f40487eb00082e7f551d27e301c3bc7b5389f7042534bf7e692dfea4da24f7c34b8d2ff145f54b517fc97134ec5ac2cb925c508d7a6bd01fe7b764648274972bf08560d30802e0eb7edcc57af4797bbf92e8688268606b0f1bc901fcc22136281665ec16393fa9601c4fbdb18cd1d1ee382bc07973903e91ffa87399d1141d49f4f0c064acf3ac9897891df10bca0116f2c3fef180fe6a8e937c478f2ef293ae9186dcb1f76b6e48101df64e57ea7c64c5c0025e221c8f5cba5cc92d9cec628140996b26d17f439b780f59a999301122f82d0495f8ab5ae1ea5790f45e992dfe00d5f82a7ff1354aefdcefc0d2d1731d22fa2b75afd4fda25ab194055fa9628381055247c8c7587d22e73c60136c4282452d47ae03aa035febc26fccd42a1cb79cf866db6418a49fd8261e877ddbb839cc39514ddb87a8a40d795532626fea4a4c35d13e028f9ed1bc09b06be999b8ddd2258aa0596bcbbf72af67e10bedd58d599b8d577a583d676bf5561f80ce5e9528729a92df578fe75dbc70474b75747a8d55de70e57bdd62d4344dc2115ed4dd62f1fc98bfa1e7421fc0700025c46d0ed1bef35c3b778563211b9fa9e8ba4bbcbf01c2fb626ab7ef325ce9f468df2cacdb178d36557cd85d542c067c289e926c1ea2f20abd329e984168bb6def1ddccf214dcb6a53afd462f0e7e7a19e8c88f049244125a6d7dd41e58bc9b2ff7fa2478df76af73090cb1ab59e388ba20e2c297c967737a1af61793b68ecd7439444c48e28e2d09c48fada5e0d1d15e5b340a52f8b3b854cca479f0a598445e14f53b3ba36891050c79673df3e2b5825c955a29e5c9a22f3991d0aa785718cfea1d2385f8e47e4a75acbc7988d0558d541d71c4e6c5f1cb15b60cea0c34a67bbce105d7a896025e0254de7d7af724c9027d44b8642192a08ab8e1ef3046dda6014df7f4c9e63c635e48ab2e70b640d480998ec9357e665f99d76fe5529ef23c1bdfe017c3a66cd4eb2ddb42ef85ea0cd65534', 'hex'));
    assert.equal(instance.digest('hex'), '6297dabdc66a68a28e2f32fc95e5864035001ccb7a0dcf592467d415');
  });


  it('produces the expected result for LongMsgKAT_224 11120', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('bc259972ad109bde603999728ef0bbf23a911829c1c910f0517ad7584aab80b27d4a59523db11ef7b86d73e480f82699e44e2e281172d41cefe2a15aae50e13918efb63de0785ba415c7da3746a669c7f6adac8c7ed04fb5f8ec70207615c5b6157f3bd9ac31478f5005f0e8de1139fdf40d2e01dbf54973f7225ca545ad7b8fac8233cc579d4e06395bae791a5e49838a806f69b57858612063935284f7aa2e3769104f13f0d3c531a3c766b1f008db437a2bbb041691bb9377012a9a7359ba410836ef7ba949e5f56f70e83c99df961cc3f49d4133bec543ddaa14dabaa54fb6e5f5263b83df6863e84179722577101cf3f67c08c753c5b079de795d2922fa21ab23e2437a64c62af634985266039f7cbf1e1d762df49f12a4ff7eb9846e8e5dcee559084f0ad175e0c6fca984b168b7512541b7560b68c8afd02fece115f0e9327d3d6d57bc28c8f914e9a5b31d822b48e0e4865f652e9313f0ade5665229631923a497d65e701778739c5842a08a09fb25683c38bb17eb95bab4b358ef5647bb29d3bf86e15868e02da7e0229e8213071a24b4cd373266563e36464c8b245de4a62be1af9c7022f6c3894de6ad8b9b17a6df84af65466c319ba43a5ebdbf24833cbcf17410e79637ad5b771b21576113b851bb73af7ba9fa19e5cd7a5369068a51f5d6a928a8306829b810f59cddfb42c3b58f6b0926877dd35c4173628bb554c7036779c000e80f93d26c8560de78057ea74eb12230c8310d577473d94c2df14577b4361b307d8bb6371ba7b3f8641488b1490b24da9cef1ffc732cac6f9fcd69728c1b7b4e72e8fc5c42b6687f32fcf7b3a90a460e302f3a4e33b57b29803c611ad93be3e6c33a8cefd2a5297c28249fb64ce4c1a30dc1f8670482cf6e220a3e17cc95adb289192ffcf0155f071afe473d5bbd4204fb4308cd5ce0f13088a2587f10362d86465c3aaaa730cb82933f56912be62f78bd6a413bd9842d71f125ec8a07442e1bb6ae8b9aada6bc47cc2ff79b680f832685184ffce05ef128d9d6462cf7728f2e582f8ba77eff16085c262f945e3fb06b238b4a5345d1f83373de40f95e0ae3c5f62ef4bec3663688294f64d15310b6ccf4aab03a358b0071114bb368ff489a0caf7b222c013dd5d9ac39c736fbc2f7eab5b4f5da461c8e65d959140bdffd2a871858acd3f9ddaece497b44565560fa96ca9b761764c6ba9d0888cf522410b605567d1fec21264ad40f1caf60f79452ca4f12616d6ad8ae73bb57112f6f77901ff444152bc287a90fd2c77187d50db1f64801b8235fa410563c6eb4e5f3d3d285c1bb2203c618d1f4df274f6c47a0cc6a892217c608cb3e9da3e15a5e059b6c26cd5357f9ae1ca6710e2ddc79b5475b42e8df2d9d6807692135b922611dd41a750b44be0e4feedd632659bf0dad6eebe9fa9236e84aaaf278f69da65428283b66e433387b3a4fad8032175e7e9c565c95dc94a53e8c52b3bd25a66ae5c6975f32c45276d6dc4cbde155b2b7bdb7e238d93f01b18bffbc301e0a8a7036a70c4a656c66b9a1a85b51f690f271b7ee68ba6367b4c512209fc24cd286f0ced9f62572e22c5c6ea48bb92137f7b819cf54f62e4cd1f851f11d08cbd09ac24a6bd3fddf65abf05cb8deaf2b94c7a3c8cb9913bd6fa9b68e22aaef51729011da21215571b39920fdd470cd2b4a0bd08c405578377c889418a87dbf14a8e4fde203a2ac855f18db0f9d910ca41aed5ac5ec7d08ae7f6abcda0646997b63343b35008ead44cf3a8edf0eb104bac1ec3ba1dca808530332d9c249c6271d25ce33b536cba3d2f8d6c8b6a0dfc830cc426fe13d69acbc24bace7cbe27318acba7fb54bda4104d07561b5bf0d8f0670fe60e6389b2d6e96924ec4e4bd827473668d4f28412123c31cf49912e73ab8f40cdbe3032be127f36af2dd75ab2d3de8d2e017470a7aa3cbbcae318b20d', 'hex'));
    assert.equal(instance.digest('hex'), '5f70a35453b9bbb50a14f2349806cedd49f06e3eeb9844c42c7963a3');
  });


  it('produces the expected result for LongMsgKAT_224 11624', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('824a155d7798e12962f4464ead9af132a226da4da6e899629efb938ea29a86937fb144866d8c7b2df9988604ced96892da482d4d0deb4658844f41835f0d9c20c796929c83cfb49113f5d95a7b66d9116a4697bfe335bc83629678cd5deedb7c9f8f11dda079bdce8c2719b6cd400c02a6a5654f19b6d568473d37174f62ab6684c9c919c1cfaf35116ff7ae4f5b0f0bd243c74384c2c9392f1189b2ad448b9d7946c2ccad04d2f20cb8cf1f9590d1504b1e1b1d74a04424bd27d0117676b8c823022858a4c12aadf21fa45c99fad60120b24fe04ba3036b80ac5f46e983032b6d78830f51e65a62310b9058a4dd3f3f8f90ed5311e1f47987e0d410f78b2a76580fbfdda0f944bbe466c8a8170b5c77e8132ccd7d5e9946a5fedc73ab9465e30beee9cfad68b70a2176393ad8a173cd9afe8f9b33023e852876824b720365e688b3fb4ba925040385559fef7bdcfa7dd18bbc31b24936557edd679b502864588cd4bc270099a30dc3b3ef7a392f3e33e21a53fb83756ee371a1986930c4a34ae1301ec44e189e23adb7eaaa121c6d787007a44e998d112484019f7d7d8e16985b039c8ce01ec8ccefb647f07f9fac114babc3d831afd6f08597222a4da8c4f6cb22c673c0437c16fcce7eeb64e7050af9bf41e95d3a0112fc049d405df0e322422072a16df248e10aa22ee5f198c67c59eb8198421da855dbf2c78b36352b1373f7f66b5a5bdcffd44c76b7cdf56d894187de7bfb05c0535c3d2aa491f37d35c3177e0f312a9fc7f1c6668ae0b6b4b6c195eb4aea219f147a9799a9c84449d7477fceeaa0abb836150487abee7a1902540b905e998a532add68b2d15a1fbb63ddecc54c8c206ee655353c7d1db411bd33419f6f905bea567f8d67b5461f15acfb8f8505ccdc29cd708be679238ce30ea3d1aa183befc35938d755c50963ff9c89ceb28764a7ba8e72a2d22d168172dc5d91f4ad5980b12474a96db75e1f7a9ef9cf1a0318d18b01b108cd165a3734d671d436708ba030c1e860eee860b40e61ee5b72a4a98aea24ac343bb6d4095f79fd9f1c8d64057b6672821b96f954df23cf294f516bdc1045170e162bf58e75db11288b466a4b83125f1b54286f14ba0b55267397d9605a57f16ec357853df6f3c8943a73f7d20659ee01b3cf70bafe432089bfd9dce1e31d441c174f42d3bc04084705d0da308c21f30875d68f8611b62f49af1b937319346dcddee9632f5c7044107c3c5b49cd59169008d497c4bd9cf2123ff7636a5b20501ba368ac6d18a32bf798419bf93bf7cd7b1e998471d4c85a2bc50e316e89d17acf327469f1f45a68fde54714cffa976d488989f65fb4e8f9f85d43010f982453223bd060babefdeb9dc10dbd28cff842366dd55170c33eaaafe90428d9e632785621c5f836d118c4bb97bd2dfc2a734c64f614a9fd3179512720c9511a1df29ea9792226fa5d3b74d0d29d4741edd5821904f52aa7961d303b51e54a6ccb80bb851ae57db1f97b656772897190714a5df7450d7eefb982188131d81c6d273021a2aaac777b0083f0cc363e619a1faed4cc2cc7f28e24f682c9f9eed99e09e19a8200e68ab9dcae56aa92c99823015f82c8f90a40df0f729888c8320a7f0b1e2f6155c82aad1b4aca0870deb69f04cd137b556b9919bd920db20a1c1dcfc45236e6e90fa3054a8e29211bf76b13800f3ac4657449c89fb76d32892024e6fe7664bd23038457fa00b1eb88334f4c8ad05691c8e3100f2889c0e96a327c9b36dbe6d9cbfbf9de93adc8c17864cee6d30ebf0bdf8f6b9d65d2d6471d26334089b40c9b0edcc3d0da4710e76b28b392f7c3bad6f34c776a72ab211b720ccbe60e844cec4832ecb8014bb236e0af9a39912ce12a5386d409f5117c01478d75296edab33e1c5273718709487ad0ab5b180a2d065c31dbc1e0737d9a800260c71a0244f19528e79072d8b8322225c6c6ae8471068bfeb61c578beb30f9ab6a173d70373d5f28e7c353fe723316143b2a6edf78eabd60124138b607d9a09d6ace70882d4303eef2c2', 'hex'));
    assert.equal(instance.digest('hex'), 'a3d5128d5bc7852ec6b59d3d33abe70f735239d149593e9d1798d1a9');
  });


  it('produces the expected result for LongMsgKAT_224 12128', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fd76a3e9e0e303cfc3c2a84c43d19b6069167f7c7094bb379ec929aaa4f19e2e1a77e312c0cb08c544c95ebbabb5988f451b01cf9214b37c341a527ca584840111236757108ff138e364d93bb76629c095117fce458ec03b87bf19f8c9936b3e1c4c79f9375815a658638e93c5102c66563f3a372e6348c6c1b9dfa6a4e427f418cc65ef67ee5241a85f7896b1a0e941453916007c67b47194352636df36e2230f4502b2569aa8afc79c71b8b675805375e1ffd2764aa8b8d58ea9c9b580d489b09efeb1d707719f3aa99c447c112cc77b3f833989bd2df98f32f068b9c0f7eef240719817b11ed583c82cf3bbda268d60b03fee05797e3ebf65c153ac84e899e3da3432880f18b09194a1d170dc23a1d17f53de6f3109ca8a88e1390f0d49902a48520b9283c06746a55b041f4a7ddc0727a08dd5717fba5584670cd0afc7a9597749c718b8fd11222ec41506505ed3db5b8288fd234e0a9237d6715f8996980d985587a8645357b0f53c480f72c8065f5188a0e132ad315f3e7c12a854e93d1cc2fe9252fbe68b3befbbeace38531e5bf5f2c671fec8ea58f5e31a4bb05b8a6ea87ea7bccab50ca65fb2a2f312f183b5b1504ed04739ba854ab436b8fc2e50c3434fdfd50682fd79b19cbbce2c76ec1ffe0ac9e54c2f9bf51497ab95135b877328868d6ac2b7f764fec866cbb6a53f3461221240f1bd6d99c38df6121e3751cecb1e0ae1a02fe054059b78dd96fa0cb3d1952a80b8ab550eaa82d7524c02778416e035561d31ae99f2ea52ccd10ea09ecd6ef244576d18e3c12110e6d224c3d296a8be95f47f5a3150b32f67b2c18f5bace76dbcf9f4a7f58a818757ed06eb3e5c987b58ab40016be4666cba843ba4a09c579b2274130a8bdd7dc37557cca365302aed9ccf465f3f970d9799646cfb9b2b69218045f6ddf5180d4e5d36a0f63fea6b71e60c200f3418a8fd35c4f2684c81e3d715362061de34b4ab7a118249d4e74ef7c6898073014120ff2d80eeb2664e47c2349c44905396f0b9cd0ec343d61ec4c6657af7964ccf384e83ae0df1736435f90b766528efc69d9ab204d2d8a6d79d23886de971852cca9283ef87125c28442eb082be6fe68f45f1b3c440c3f93bac49ca855604134ceb4e968654b4c00d1e7a81959435fa36d0dc43400a8ddbf26eac8714223b4d55af42e75d3ed387e52e5222b3646bf018c79486789a672bb826841745f4769a6be8f467ab2294cdeca2d974e8d3fee417ab6d02cf16e9ec3fb22005a632cebd64b5817286807405b9d78050e61b5d975989282d7dbdf2bb81ad2e15c07f9af22de7b80977e3442c1f119312a20b461261e8b681ca612e7c7a67a2076781600f057a6eb3f8a0654fb982771b6c661954b66d96086afd110b0239e0bf9688004018e418ca2e3df99df01405508b8d69cd6a75a7fbdb52d378c2bf798045d02a9db7b1d9d275fbcec5cdab923c57420aa26c31c0b632d23ea2db8c193e55a1df6ce8fe610bd91c4ba81a41c80cab69744b8c88554f1fe8cc14a0c29467d7ab4840ac9e861f8a24c953d68caa583291f1ba8603eed2c843001402aa2134a067eb6ee2830c4972530a5e4e2628e63266a51bb3537ee48ebb6de869997943b08511adc9647e8224d08daa3c009f4d65f0c9a1af4e8b225a30daba352fd5d1f6c36683aa4f44602e32bf04484a7ce88709aafce1f93eae095fcb89a1e32dc92c4150592ecfe99aa59938a211fb13733f30ed476bac2db34f5f0da67a609c49cf3bcfbb90e1a7974b33d0252c5dc18e5c67bf5c0133449936e387b3c35823c9eeb2e5bf6337665ad41eba1346e74362d3e5fd8636ba54c4adb75448d7650fbb542684fd924f8234896569aa466622a53c042ca843ed6bb603f2d7b7058dfda13983ed913ed565c2e1078f6731c76ec796cb41297cbcf3bcf442261d2293b813703ae9926b22f55e33af4049063ea443d230af25597ce20827952749d020fff07a58aed951fd9ca9b2acb15346d513b3490e2c1294605d91ec67cc73f76a38ffbd86d79c55c86515164a8beaccb386e75ea181c76233c18549d41d5ef5f4da25809dc71b5c3f83a1dc31d4d117a5751d77380b5419a2a4a8cfd2391dd97f88c7c8f39a22ea0ea3', 'hex'));
    assert.equal(instance.digest('hex'), 'da3b6c908d947a02590239e111bbe4d6436655a30f7f6f17ddf525cf');
  });


  it('produces the expected result for LongMsgKAT_224 12632', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('af033772478b6c7a405906811d787acda7b775c28ebffa06aeab37ee363476239a4fa0af7afcedadeb2ded7ca3997c82a54d6f0d1016c4bc2d182f6116232686f7b5baec00759e7b2acf0a2f9dec55f3e3c702f21d760a853283c75b1edd75442e30da1de74197913bcaab1a619e44c65f410e9b8f235d68d1ef0b7853ac836259c76b4a84f402c2e90f5879761351dd281e19219e274ac8d76589153fb5e687cc0de9b543f763e632a465be81f2fade0feeb96d4102bcfa276d7c9d06945cfea6c82cafed680bdd37f6ebe9b8013bc2e7dec52a87a1c539d8aa5ad525f9405b1db1ef942d4e98f40a01c3e5e555c92d18f36ef4dd8cbb5aa7207feffaf28a5762ddafab4c841063c64f0fbc32aaa69cc130c9a2add78c795f5e417b57263909526d2a741276e44d05a3c175b51fba17fdaf7d83effce3487159cd92f40a19c567da4e667a008c5ae8e6e04f8526642cb4a2f4cf0a07af44a65d4f1d6701d6e33bad2b1ae2bc18ef4522f64f285652a1155487b8a49e9b0eb996567fdefe07b8ef97da55c493448fb0eed532088adbd355e4966ed5996ef88cfb942543d5065f8826f85618daaba9f1ceae1483083cfd5272be07faa6270d51b7df74258ff62c20a8b692a4fdf0f6955c1ffbb48c5bd5026bb257972a81849db7b4eecdac9531c2ef50f915119086d8e3b52191b765d6e38dda2b125deb8ba9bb841460b9755d1fe38c1765b72eff98b93dfa87e0cd4787b74ae335a9a61b934e258ecb764284f0715de438e5f2f59639021ef2b21fbf49d53b635f683e3711a2af1d1e2555f5ae93158bb5f6670ccc0c99d23ccd4d228f2a6374bc7aa2c321f03a8abb4d9db673a63ea1ce5d5ba5133af9ebdbccef97016b813a9765b9ac1eb51a93d7760b36751c766283ab13e773a128559155455131b8466701f6c16acc822612c1be81e14f5d9bdf8b9dcbaa7f3e10c35634004daa506a26878ae7510ddac3fc9f8df0f52e0be10513d641fda741fd265f9e0e3dedeee45513d188445890c384dda51ba4cd1ac63137550b595fb2c3aba5b60a798c4418c9402333232e1a2661c8977dcce606f4ba89e83a1bcab88ba6f3db5934c227d3ca820063a1dc2eeb0c1822dd2cb89baa12d81bebdffbd054dbc4a063355ed3825e8196ca04d6d12d8c8c521d633e2f214e846853de5d0877d41058ceb77545e773c0b5d5155d4b61b4cb060dba7dfce84d3e25f39ea6b95cdf83110e9c1051d746f0183c01b06e311035a28809f4cdda0784d7903e132de91e0f426d937c5e98ff8123ad11ac3e1133cfa6298be0ab58b5df55d6060d5163d847ee5965fad60a8503c3bb54935856544d57404215fc843d41e5c73f1a8e500f0bab3fba3fe55475f89a967e7e07ed21d6d821a797a9b3e9334168fd6d1f19f312a5bb69422cad506851770c3897df838303b2783f86c8a506ee326ee4d8c492cd1150f4771a533440e74d7e9080193f6d4b44bc26658d8bbb53a132afce1899224bcea0375a5e3e563fc16939bd3ec085d2a5364faf11eda41eeff44409c5100f0ac2ef60ea8ab98c35f9fd65fa61d6a60ab0c35437867221ddb6a87702ed44e115baef16f25cce2b11b8062a8c2a06e34c4000eae881be3671c566b4c2b52be284fa7073364b7e9a6dbba8ae7ebcf6008491c66c7ee49ed426e7a3ee3de255b0b24f88a2e738177cf7aee4ffb5f2ce4054cab2378b0af8a5a2be2fba43e5859436a4f321f8522c7507538b74d0d3e2b1b94e92600d7116ba319d886824908b04803531914ac7a8153937fcf2085968a7b924cfbc49324bf0144be37ff39a235a151873f9bfeb57366bf9c8a0a9dc9c2e847c7b87d644a0bcf091f68e463cbb51660a0dc7c002765f6d15c446a1d84d625bd10cc97b818066618482803ec0c73b66bee4fa71ee72add45d5bb671fce5b278f7f19d909ec6e92019cce4418796ed5b97e3a7d9006d2c3d82287c659a526df519c11b21dafa787bfdd03f4a2ed832efe8c9206b59290cc3d1ef74976e38b05d2b9aa31c18e66ca7fe0cd803eb583f4a6adc0e90a521492efc83f9e51966fa69684edd67f4a111fa894241e9df30fa8d2227d7db2e79facb7a2d9b94d7d5b741cd9224f96155be988e03205d2c47541a001e2a7eeea3be70dec19bcc6125dc9dc0caa94feb638fcb605a46a224fa3bd180f6761d4d9289db2d2e762699583f0b864d9081611de2b1c032ca00c7', 'hex'));
    assert.equal(instance.digest('hex'), 'a6351b05afe19121b15981a3d48afa6fd5cd7b6589a947bc0ccdf5ab');
  });


  it('produces the expected result for LongMsgKAT_224 13136', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8f1c1e85393b9c2a2b593363dceb818b102d0f57d4e1d31bd33c034dfb1f17e2a9db960d70d2fa0aaebb7b56c809ea067e93c449f4026a258ac04b6ce809a734d15b7fe13e4faf8f2614db9c3a42435fbf158e3e6cb30aa727272a4e323df21720ad65d72b18a4a6baff9dde47cabb343db282175d85ff51b34a197752138af3a017d19939df728a09c8f28cdef4ce5ff540a6c9968f4635d8d3281f1a5126fc3a7ed368dffd41b5aadfaafce5fc069056854a78054917d39a34945fb5e608febac88f0a5360a524d9c887241d2953bd36e46db75a458f4df4940ed71110334407dd0008a6dcae7d13fa5cbfcefd6667bac657dcbe1dfbab483daec686ab870eb60225689633f71f0d3c4c870bfe6090298b372b73d5aca2225ad724200ce2400a77d4788ee6d4b560332a020da035da3d520aa9cc52229329a81847acf680b3afeb2c1bc84b06800af381cdb9aa0a687c50d03029a0a6b5641a8d3a8e40fd9318d3c5add51a4abe661bc3c5c47d38507a8aa7d6275df3082633637e5700787714fc977698edd2218ffd47a81d428b0fd61be651478df0010dddf9363e93d8b37b3d8e1b122b76e15985d9f4eccf55936d918f0cbe39734a1c41b33b3efd34d845de5526c183d918786c8ed3faf1deb92e85cd6fc30421d209d6cca47e9db5341251e253e932c8f08628d2115e565c2d581f8c8955d71936dd505e8558dea1409e84ea31ba5355d7e2d011f7df83acb9ce0c6defa51b16185a66d3d6d1d1d7142168d9b8a0832fd2ecadad64cabee8c79328b9513328fd4c7006222685af6c39ab5f081edd49154b5a25375eeba3f663f7799aedc40fd74748be956ec66f77ec97457d1c08c4a03ba324365499d8d0afe4a45e7563bc0e4e33af704e7cbd8f85ce14fe1f84e1bbb871d361d46e0eb0b044d4af33b8672b68483e7187f1f89bde3da29c405029dd3da3b2eb8c248e3235cd8d2ec17271ba5563a09f5daaa5e9d118b1e2aa61d232f4ef928de1a10c786ce3270b889b6d859f35ee00da10fbbcde01a9cd472717e1bb35daac57531d44c0b62bf86063bf355e0c08e3baf6499fa0ba8ea96fc338507b675d1a31008f97987b2cc366e715f43446f9de4dc8c0aa7d81bb3b2e7ba7236d317b320c934ad80a7b17f0f591fd9dbbdb1800bc377b6b04dff1d268f3f6191d3a37015624a8b4efddc1f6882d6679fb0fd92bfc9526272cd6a2cf768e6dbf3fd1732f6b46cd4cde5d07b7aab467fb8716e41ca9b8ea9139d09701736b038d25013666a8dbe63e0b60f93f6e77bd27055984730a6cc5791c6b5585a1a51f787eaa42b3db7ce6159471dc5454b7313aba20f2df104bf98862340fe0a7043a555ffd07dd1112f9c1627d541a896bc66e78a01af4ac308003cf970a5c11d2880e395bd92d455960446a67ccdcee71cb6e76f9887cebdd1d5a60131d2bae7531e14f3e04a4eaf5bd366d4e1710293189131d2b9d8f28b8919b27f54a01fb804c2d1a66b49366c59465ede6d6281ba5656e0bc14578ed3ae2189b1dc73db53a217f534e27543004af45451e6a8fb964b3fa2c8af0144a3b22ca3b0d5f382417139dd8b1e62469aceb1781acb4986d9725bdcb8bd821a2c4490a6e75fa4e0540533c39a9dcc8697c169d535ec71bf1db04a6446ccc07cf34ea440b4d45cd8d664a8a35aae7a16ff8ac4d2360d400ea19e9f000e60b92229c51bef3090ffe9c5461fe79d395eecf4c11aa546ca00cda99b5cd5ce4f41e0f00be6c2ae3c4eec7df60d7e760cd3076ecf5fa61dac163dfe102e3917f692b36cc1bcee79ff8fdcf8e18ac90d4ab0069cadc2ee6e4a92e52970e63152e77fb4a047d20e33526a4def63ab812a17f09065e60aabb7a2b898cfa10a35b7b7ca9fab1583f357894ccd8aaab08c6d9f6fdf1b8eee4d938068d35b3eb0b1aeac3d676ca5034448c6b07df0c9e105890912693a84c981c636e7fc8d31b19fc2deb423f13e422594bf34f74db5ab0806f9f2e7c0f224f37e6c43cb192593c851a7cc1902741b55b86365bebbbf1188005105f492d43e0a9a07c7af5c605a3c0569bb4052697775a9905c7a0233bcb9699e6bb0982ea7dc252404451ce6dfd1a47c298c5abffa15041ca28157fcb4f484772767c025d0c4a8e89a1f59517d72693a45d13998816698ec21c640eb8e9f75d401b8118aa3a79f65e2592b50611113cf405002d6162540a0ba003d409c1d58e81d2f4a7175747eaec68cb60a854580b7e9930524cda26e9b74c488f98ba2bb08b06114b8d1f24b51f5b7abf7e456178ada8c77d9ca1a932f85df4db00ca44c483', 'hex'));
    assert.equal(instance.digest('hex'), 'd9ad06792161e74b191170aa2365a0443e67ea9dffeaf1153ababfe5');
  });


  it('produces the expected result for LongMsgKAT_224 13640', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('a8b748dd6959fa8770ad6673b8e70e35748dfd0c3bdedaaa467ce4e502eb866d732683cb64e78c523208cb67dd9a6f3d3247f5b413b1025a33b28c63b42802cf6d7426db5c7a265fd820610a14453c2800b1f5d77671b15bc792c0b0dd64aad3532721fda0ad87ad7a57d199dcf5b2ff0cc84a7f744ea7369e6f4d8f0f77daaa7da0a8255e32c473d981fdd4e9c855282ba0d58897ef2329655dfaf87537cffc25a22aa0874ee8b54a370390601a5492e7634fef8e24abe3203550ee8788926f1bcb8b0df70a0630357d991bb8f45df6a03a17c000e97840feceadf945165cac4941cf363db49891c86a54fa81b486a563492aa01f769a01bbfc7e8697b12b28cd1fcf608b0da5ec7f5b65369364cb752c83d6891b7d870d52b3b65c3696043474f91a0345ccb7af34cd5b308b1dbf2332099f671a8cf4d809e4605628b10b275fc5bad4caf299bb5801124bc86359ac83b33bd84dcf6d6db41917a9a217cc682aec1859a427a32bc1b11ffeef825df451c7cdc033e9148779f753cb4c05674ede8edceac80cd23df372464f039000fa3aa47d5a99e14894caa2ff5b90057d3f411b1459168a85c284d5c2814811baa7700e5ed96e4517464ff1757811bf3691ce33d02445980bcc40e24e1f9dc6f9df45342ca4e14e013c1fa06676d582555ed55d069fd2db267c92db577a556e6103e69d1d73335183e26ed88a5efd87ebddcaa5927b97f094209dbc7fb337dc0f7c98a975a74169600f3f1a1c7433ecfc74b319ba3dd8ef69fd1cc6ce83d1b4a0124969f6cd24b7e3d3418a80c735b4f7add091882673f01ff20e38461a2b389dca81e5e6ca2213af194895139cdb02130c1fe043e58783c130c36bb88a9af656e406dca114e96f2fc9f00eaaf5ca9911708a4a2e6cfeda2503c49b644dd2562637134cfa33c50c62199e99a8a2ecccfcc3c6a1fa62bc1ad9701b7c9ce14824451059414ed52ad36a69b3e0a4fb543f40099c437e89fb12f6aed816c9af7778d91adc6218a113ad9c9c0caa4e602806c4339eb456da4c092180fc8a91fb9fe305c95cc4ae5ccb06ddc64f4127906be28f7014a9ee2ef9f9f075982f7273b1469df14bb92cf29bbdb487b8ddf37f5e10da60c70293448b7e8c5d92148fb466a28a16f2ea8a3fb12c8e8678bf4d139aa2db2f171122e59705ea3409fdb324fcaf27909a66ed1cde7b92b949e9073ade4408e9d5537d3b1436853a0294b77564b70b1e43ab13327d617e86971d009c7dc1be0337b185701a0521daf4940bf5a151c6d2efd077a3048eb7b37acea084e3a3aceb4f2f44e4b42e9112fe6727f5b65afdf28252f341dabc9fc8c8d5dd2fa6f263f95c00665854217e915d842ccb2f33310124e5b5792bf0863e2c1084dfa511387aeb1ac404d32adb5c0306efec84688a956c7041c724e8741ef49de2772fc3e174e02f81b7d970e5012913dccd2cb0925ce51d725e8900ba589a970f19b558cdc57b30a7db60fec91ad0005b0defc05dfaaa2613095f53a478459b4e89170fcbb57f60b2801ef87f0665235c004b8f61a166dd5885da1b04768c08f9eedeab78a1d7bb49294ffcd134522076c3e0b0a2a8fbcae3d001f4e1df0de1669e533f4c9d95cc2ae0c42b67a628d0871b83cc599a8ac4828fda49ec2f9c057cc995e79ee5fc51905bbedc756a7486e79537b559b49ea57e87406c20ef94fa73025fe16ab588591d8e89c79c3f914f97ab1542dc6f86435f132405ff49463f6b836f8351be8c1e21dd14b619b5193bcd04470edc4b863174e4f1b20eda5c3de3253241d61cc17f4fe1dd6ab0a7cd102258f6366402b44da9d7c415abea13411a89e77906ded43075135787820692a3785d09948c5e063551f51a0b8fe7ba9a070a6e0648b07c9cb99bea7593393692ea6a365d0b2576aa030bb4cd288c42500c4297cb073b0f7370dfb7aadbd8569e51ed6a9e74ab58e647879f7a537dd1b3e4816ae90f6332a219439aba6c9d7722a30c932a2542f257111450fc270971d2e6c1b9ebb34b786d215a01e89d536558d904422d8e5a5b3e2b2c54da191b947c48ee0ed296355be52ed192da910cd47d8b4fe7a29a23ba2fa23b8c6cbf4ca572b9a72ea9688ca0dfb2f74ae6d78c2d96748e587d2d1f5d3c99ab0d98df949456e067aa02b3b43d2916f051d636f28fcf971950e9d9c1c0c94b894eee76e9ae942283b516c0e4a10527d0f120e15caedd19546acbf1ab85caba764c74dec2ad190570d7d44b5dd637974e8ba26b60f0a408b7c56db73395c1f1e7606016b661119ca4689b12af8f608a1810703cb489beaa12cd72cf37be43ffcf2f7f8c21a8311a527831bfe5b7cf5e9839ba138187babd9adca84c35b9aafaba6bcf7ed0d22da87fb6eb8145591c9b3652a4eac256', 'hex'));
    assert.equal(instance.digest('hex'), 'b1a29c00ab2341a77cfed8398f232b1fb57bf4572eaab7560d7d4cd6');
  });


  it('produces the expected result for LongMsgKAT_224 14144', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('5b4d2985e61aa7145b5e760435ff0d8e12b546ead825400fa6677b5e44435593a38ae2fe152d8b55879a6fb05d72da1df4f5ccad61712b8e76bd69a9d3ef09da0b2ffe0a00fbcffc83263d48e3a263a97582d20d9195b23875176ffb45cb8a942c4860e3ce6c26437826ddce61d4da4fda3878187d551c3baab37ed66eb10d71a18ea6e48b96fde7cc1cecb821e7ae5be07e34c6f5c20604424591a4eac3728ddc786e23b07006441baa56e174ab4c5cb417008a3d6656abd07bb71787cc390f4e9004476d0dd9e9cb33dac68a1c6c0ce45514db4461f7992714b9dd28194856813c9f24c1dc4acffd0065b9d50c2662b41633472b25c358dab53f85198d76c93aa20c7483a1db21c373627538db87035eed0e78baf5205a2be0cab925a0fbcf141543b04fac7aaaefc3a53f64ab3a71004684a3507535d2530d8febb4e7909a3737f9a4964716108b19c491089a01249e4571742ff85872e9fc8e8e7569ac15655ba084ef6abc582f6e91fe2309d5e4e3fadc554dcd87e118262dc408398af5ddadaef2cafa99f6e033b3a422521f43df2d720693124d6da2baf5fe2b37e775ae3adc4610807c0e9b43abf8fa71ab977cf9d3edb07c5644f8556d849b2c40f523eae927bccccf9fd7b76892ba4fce9de71f71fa7006e774f7eefc201a5bbc694008f8076ede5b85ea3fff1867c8e215e192eaa9cc8883caadd68be57dfac989b25d92ab8d53709490c6766ae8c21720e6a105888c2316bb301d392e8eca464c8694300455571fdab6ce25bfe3efcdf08c7cef99860926aa8cfce6803df0a7d0eea883c2a54862e0b40135c3b3fb9d0eb218e5e1957e45fa64e2f7f8f2e294edf69f26a8d65372a2cdbd792b7514effee4a38ff2a78774ff8470ff3af1a1b21d054b978a3f8e16d5d76199dddea87fda4c290b6789067362fa6e6c37ce6660ed905ebd3161b9d05fcec8e132956885518ebabf8525bb3c356301048151bf6daa28ef6f125f165a79b8ee314a7fe20f25a7e2ac8ca3655096b1e77c1005582d82f28ffa108b38d1c2510c40f06a5f90195b8b2367313523981f2c7af63f536dd3dc191a5fb0984a7ad0cf994dbfb8a5c8991dca74bc1848c6cbcae6eaade0abc4a45ef03575e82a2c3e0bf5efc19fc9f2eb36c07e42693004397459d555f0d6f267504eb35ab798856300d96025a1a017433cbf492f7f3028381cfd1375c3d2c5b71ce285fbd1cb22987f5a2146043d2c1f26e6e937849935b6d6cd89601894af6a0a7c94fcc100e8f167a7547d7c72a3b425fdc0eaff68cd3674f9c07b4539bee7e885749008cf538dfc3657f3708d778a8f39e5d7b13ad8ecf84dd4c0acb65a4134c71dd590aad97d6eefd015fde1eb5315038b483628ccaebd095b1b4203b66095731e6292bd806c6dde417ce9b564e2a7c9f69893f0b01fa8aaf3712258a3bb070cc502063b09c303eea0a646a204e1ec0b31abd6ed56f4fe3cd7f2694eba27caa4f581f31254c420b9a51b4339fdc813a446d29c61cf817467f40f6f55eb07c0c7a86182a1472b0bdb9beb874b2572a2a1ea65242ac5ee41025dbf0d4bc338f09146ce59ed656f93c8d87be9f0d73909291ad1336103e05fde9e9bcc77ed75220a2b6339ff6cd8a388153f55c9ca03be9db5da242b9e9f299e23217bc937adc6fbba90980a29b619988360301f7d8ddcf7b8fad0651f31231b816620a295d1d6c6c90643e2f2593a0dcfb700c017f0a88e03d3d6871ebe420b7f435a58407c667ea684d5906c91d699d0f3868294432fd7fecbec527d213ff7d94012a52c9f818cc19b3ff9f3d834dfbab4b1a6b069375d5c3ca6c1704ac5cb391a3f4da4ee3588551633b6b01476f9b13f1b36baaa3bb6b5efea0d9d150e3325357151071125847038db3ea6eca114ac55f5db1fce8089e18d478d7ae82d173599a02dd670b46794e9e2ce91baf90dba5afefcd1babbb8ea210640e14ea8e085a404dbd9fe15dc3cd0bc3a59bf997bc6a10dd4ec8970fb396505fbc17fa5d61d90c989b47fb367f7b2eb17702fd039fe16ec8745912003aaaeda09cb644449dd85ef010488fb0fcde2d804a0abb59f2c4f594b3466b626205703507701bd4fb25af83343aff8a09a004a559f750cdf6b2adb2cab16e2aed2bdc0481adde1a8a79513e94e6f959f4e4265cf2abadbbf173a897c50fdc2a219d260afd0c3475148c645e65e343d4085b76cf14ecc839e4f7c725130777535acb154f74b6738fdc82327f0be5794d630cc81b87d5a19637468b191cc2ae6b67fd5c3990faeed6a05f482e5dac91daedecba379fa68bfd85a218275f44a8011a74de303007e9f5e955df052d67465d4a1c1791b88c71dbbb6d14f3cfd49f414adc26cf8fbb797c7f4d65ab1b260c43d0da063837877883e87859f99a36ff2185289fb3b265ca1d017c731d6fa6437f954e55c4e7b90155156955d2495c3305ef196f9bd62204bf18dc1f3e8b6be2c38956b169b75', 'hex'));
    assert.equal(instance.digest('hex'), '0c79f30da2a4ab9968d5a7d9969d6c969d689108ebffee3ea4e18e1d');
  });


  it('produces the expected result for LongMsgKAT_224 14648', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('523de8b1f4cbb65e81ff0b6ccd6eb8ef0a0f0a691acaf4a77f25acd2d66ad4b3efd25be70308853c094412a518a32020e3020a9f6ab32f0cd60ec0d7a194917d6c457b168a54a4b46f7b0d0c71bd61cd202f4c718776a701e0770b0efa05418770f98e4e79cd066366fb3300e8be359a98b82b764bc2fbbf59c7e8f94a157b01c6c7577b1428138cd422bc47330f8ed99f4c0aab0d984287445539839389ee08d6345108af26aded0ec1d7be774cfb8c5205dfe07cf6caf8c1afe37c7a2e4fe6013b93eb2463de4e0971c7178d6a76b16a0e8960c984ce8bbe71b3b466edf0445b835f09414d01f14c7b6167ff78ff118127bbd5f812c27facd57b3b120e2bcfe87315c7a92b82ef5d50ca14a7174d1bea7e056523e055a6ae42ea3765094e5544e5ed003c989c2f98f38a17e3dda74dbaf9c669a319638a2698b0e4a611480d8ad3cf016792ecd1034925f42b9811a7214d623d047abca31997ddeb03275f80dd21f40ddc80616e7ad3d481e8ebc0a1a6a398e16a78369215541ed10b75671adeb1aae6e11142a1cf665fc1b7332dfbb0e10c21a2b48f78e57319ac9c58dfa8b1c2548e2979ef1accfeb215afcd6c2c1b46fe97dd491758378330effc7283661d2cb84fa05281e9e517408508d24d042e7b9bcd34db87ce972e4cbcdb98615fb93093369dfedc782f44bcd03e81cf93051318b2401ff29f753a264bda65af199e3fcbb8b5d39c838a67d6c7a3db046dc56c323ddbb5340cbc229e47cff8c9d29b7a49ac0ec8c1440ae498c7d150ef91c29bea7df3efcc2871a13a1d72d139cb4603d9fffe85f6ddd544850ef63c3944fb35dbc00d4308ceaa6394b6e23f650d323f8f7ef50ddb68f1486eabf989bf44451f620ec9485c0b52d1415d3c909a2cfbe9d77db19d069d33baee4d77292e63fcbf65c1eba24bffddefe95211ef0aaf8abfda9f94445e582976f986f5382cb669506af2b4a5a0c43000a3c72c5ca4aacdc9d3d39fc5c492a393b6c341b86dacbbf6ba8b465100cc683edb2d9b9f83edf9c6a32645f51cc79adc22a52a007baaca618be35e356d1fd1cfbda73f1ed09253039def609450fd2d5943b9cd49cbd52a318ee3510d7cf3fd8fb388ac6cb9c6eefef3d3cad8501b91cc04a888d33e16d6a4c9666f5f5f3b257193f2b46dedde11842909d8c48ade57775b0b272e2dc9cef1a083eb2ce58f4d1f211922fd6aded1b82fe6f5b11251cd396e5a3666ed9626036e4e356231c146bba0a91afd3648eb7bfe0b9c14f15af2f92309826f468945cad0ac422de3d6a773b76178422107ce0270e7f580b5cceba82ca0184aafa8341141e65e39859885768fbc5ce63b965a0604b659e71d9da2c7a43646088d8071d76926163aafc69e25355bb0a222b7b2da9f0a20c021adc462e905a9c3bf31c16d87fbec3f014f3957a720f1432e1741553092052fb58a198640479abcaa51b104cc93e2636e1460643ea812bd44e819c2166eb6b349ba5bdebad59078910b5c22a56f004b8d9e4b1224d8d204b48abe7355548a402736c5cb110f3a1476ed631ff168f4f3efd89b38de4751536548647523d334fad7cc2d142973f2db3c1fe08fc5cf83f9f2bd2daa524b37864816af29ee05951fa09d1c51d9d14ee4f72fd7bbf18b1a724ff5a0958a063947c430142ad2356e4400aaeca442e163372a8f1cd36e2db988e7781165e5d4e7074ace40858e8370e883694af09977704347fb735c8717c42bc4eeeb2aaa50dfe637c640909ce379bfb9e2608f88751377038d1669f248178ad580a908d7a1b8dcc7e53e01801f1e485b5893f103f03e0f53b2b1440be95644d85aa7f6eb7edfbb46652196695ea23c08573397b111ff909025e20c5201293b4d223bf7aa01de7cb28b94714370434b9588097e2401b62c7a0def1fbf89809e810749fd3ce9ec3c07ce4bf4c43dc966429b2beb4d711fc6c448a12097b36f1e6817eaf4937a983f85d9cf3e62cc1b2ac6ae1ec9eaa8cd8ee2c3322239cfe5db3d4e8786282e630a7d259c2fefeca03031c960a66a71e436a3ed6f2f3cfab4bd77c660d14205abf606fe561a346f7d849b69475ac9f6822d80b9a2e56d5d495e4b309b0ea963c9fc5c7ef94b217ee5337989afbc7107d233a8b362ac27c4f69df9e191cd65ae97d6eb9e5484eb6f10349575e4cae51452380151f902415ac9cf42c824eb23c9541d2da1c26db85f53cdafb06a12b8393cd580a8e494edb6710c720dcae30832967e33e6303a92b1df0841d7724284ffd2e00b95c6d623b168d21ac1bd3c675eda33182a2c22370998de1e5eb905372cc6ef32d5b765f5c94870df4842d011603be4cdb1c227e41eb2f2e8542cd325884fedc9c5c7bb07a92d20d64b836215c59f162a3da8bb67d6fc13fef97cab6ecb8a29e431a6519a6261c4521ccb90e6e609869e6fe398404ae047f64ec4263566defee66329dd40ac985eb8a08d26529a544891b6f57cc235c63c09057ab6b6ed720ef41a3c9ae65768b43f6dcf4962a103dd93c213171dc2c9194e43265c689b49331450281a3febc618d1aa4d65a135137051fd46b568ce294c89', 'hex'));
    assert.equal(instance.digest('hex'), '2c700b4059916af3f47d9017f5725f42b0d51895331f090048c276a0');
  });


  it('produces the expected result for LongMsgKAT_224 15152', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('24b1190170418126dd7a5a81fc080a9804311b48c4e4da680727b874318d17bdd34be726daa760a40208bb6f512e5aa889b135d277cffe6af802954bc918e4d599ee185d598701c2fa3c28f7edb355d74a8d2f1a9eff8b6c2abed776be8bacdcfc6c98c5e73c24fa0967b6f2f79051e648ecd953ab5430b8c7d96352e600a6fc04fd42250d24e4a5969bae7712c6c1bf8b95481a0f8186298ed2a70e16ff8209c0511ad4e2ea17f539789f9a1d47ee291e157806cf680067d37231032b032d5efb1552925497e57d088ece2b3869684357c466db454d4fd9ee9bcfc5dfd7ad3620b3fb244f717a48facf0157f87cbba94b91c0c39002f78351e3ea6d411ca587b91a0cba4ce21a8932ec9f0f6e8fed5de7ddd03a3b90b6c6d828f7831aae1f879fcaff77b76fba1c0013cddb19e93d878b3428fa91f1a5179f7240a5b47b146fa34e3997730b601dd56f587622114813b57239a289dba2348b2bd8207fcdb1ce0032984d9389d731942edc5a44d872eb86038e281f49c868dba278d1c94ad1ac376d57085ebe875cba7ad071d5cb3843ddadc6ecf8af7d6c546938957668e4e8dc05700900ff2a0a2e8dba726ccea443f8681644a377d7fb39fd159f72b8b6edabab76e4af39fa065c9b947f53702a3797552e92d313540a50e73981c4340e88722ce19797dd5305e561156bccfad147685fef2b76f4cf8083515ce8f0c60a52699f08e6ab24c1df612d93d7ca26ccb2d5156bace4da28e8f1e9992bb8480d301046babf55954fd5f29c074806482facec432da10bb7556287f2f108b114904c122de43e6a77048af3b47920515d1b03e280c1e7c05bc71089ec769f7fa04e0c4984d186f8c8ee305b1fb21d03f025c95c8ce9c50ad6fb527ef505bd203acb5b12d4cfe08f4579971590bd43755a85a03bd296885128ae64333dc30301dd7c9b8e035e22f75f411050db6a17265dcf3f3dcdf8fe0b728a680b60eead7fbe141f6d9298edbdd07d52decde153aafda6698f415eaf8622861e54a2b279e3b1c0eafd5a589e7121df6e51e4d7698566bcd5021013180d77a1908c17169c9bba1bcacd5aa4799df84593013e21c303acb670de66b5cf08fad04769cd05d69e3adcd5b0002c75618a6a1f440918b04df7b2de363639152cb6a26d77db7f400291e21479d5a7e0facd36ed09f2a2e74f564b8b676d3e3de07712e1f69840bfb48de63141a2455debe2e9fb8186a01921bfc8d644dbe315eea943d370ec648ae74657aa57512b39b6d872212dd13bbc7fdcb481f7201f65348017d0259fa99a69084d0b62e63a7408aab24da4d3ba6f7b187d014a372fa8160175f3b37399eedd7f6fe869a1f0ab8b0a3b835c9d086927da75ad483cdbf83f7571fe1041376b8b57a15dd1da7075ecd040ae2f5bd6d371ed3eddcc13f8d611c22b29fe9f246125b2b868adaeaeed40ba1c3150beb50940875b08e650c00a095ec2abff723f7f1f5b97985b7d1c1d81bfc031f64e452125cdd13732d86a9cb7ee1d89381434d939b515f3f461567b905cce4d6a7a5a0b7f964fd6d5fe90fa726efe18787d26b083bbc8ab5d7ee7f9d79d3556616e0282fc14b80c9cfe02a3bd845b1a3ead1dec61393f0049b85ea64a7bbc0585a0e24c53d774e5a085fc217ef6f0370a794a96e6bf572a4c3195e916c9a51814989dc4ae65d090976bab9709fbb51b004694ab9c0833637fe100183ebecfa6f78d26014a00dbb204471a6a379d9e4294a5da78f38ef2b0a474e92ae6d811e112ffb224c6ee2f5b2a3a5ed5b529efd2b9106d878b386ac974cd5da99113f11700783226315ae8b9cc9c41423e47b51d10b51ad503ba968a7046753d3f5fb0cb601f4a8d594b12e283843911710b8977412c3b64e8611728ad4684d7e242a1d85ffa5d01e7f3dadbc1b1691030c8aa51095cd2baf36e5b45d1fb7da28973a98fb3bce835932a475edaa12c232bbae4f793324f82bbb4e19cc9e4482393438f94006246c3a81ab51be7721311ebf1927488f1bcbbb26792d6180d0ce59b69e397a6d60db83c321bf971f5d804512d554fc3453aec14f6b0b5e82b8a87bc8eafdf7cad1eb07e164df61b6d0deaaed33d4b56b175184730102e77cf81823ee82bfe945e3b7923818157c579a774e8d05fd77fe84ab36a3d266be1f094048b8e417ff0556c95c20c0cc1f3963965e5c37df5b4d88653f831bb222f399d867ed77bf8c89bf6160449a34ea78ab7d9928001fd8dde94f30c8cbdee4d06fba150852ec255c69c590d07b5a803707e11a0ef689ceea9dc0ef8809af685e48b79b4337c756b0e567d3bec43b4431e86b79d6522c56dc31802b76893d548f8f851d7696d8fd8dd15f60253163f8335b9897c477e6d4c743be22b1deaff90693337ba8032978e97bf73bd3fa1b53a46a779b13cbba453346234c3a68f369afcdda203c058e3f3a21adf8b7c872c8acdecc0c292dcc43638d1326b5d2e1870537777ec8a47e69eb54a30f9b1ae214ed0a14506ec218b05cc44086f653048d7e06949d6017bdcc7713983b6ea9dd7d79365431dfeca3af4f6cf1efa18ad23b716814f614ed2a22a5d8b377f442f2c402de05cc8c2dbaa5076133e0905ff843d64545a7409711e1563071c5d48e2ae765afdbaa84c2499fac8f1848db65b745776a49211d0', 'hex'));
    assert.equal(instance.digest('hex'), 'f62ed9ff9d91daa054c25927a1ea4c853ed9b3ca63fea78a671213e6');
  });


  it('produces the expected result for LongMsgKAT_224 15656', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b8b27ef941792bd6819747432cb844d11d3275e235d6a04842d0ea1be5a7270e3d32924d2f74deb9ac5a8691617a1cbc1046a5ab8f89a6e5a84e7cf3b319b0efe21928aa00df31fed34e2fce5076100fd384273dc5b3ed56079adc948e47919e8ce5dce44726f9368854d5eb7ea9df4445f4e9a3ea55652404b71e16cff45e407c8e86a56b4d2328af7dc9a11c7490d02ddad8bc81316b0c70c2e0bdf3c4bfdff2c661399531e134a599f9c2f8b5397285ef5447903c0b43a5add96cd5c688929d0c05b57b5c46328a4b0d8501dcccd6b0d22f1cbb40f90fb3d28338ef4e1ced2dd56cb569ee63a14a5420176b2f1f8fa1b39296ad88b52e7d3d13ae066668e60835a04ae815d481428a5d39df18e67c4fe0f3277cd74273b5f78f9fcb93d70eccf9764798827bf4d6cfa8eeb685a769cef964fda3e1e13c96660eb0e1851e30f1ec4b9d915c6b620204a7f0988ad3990814a095dceb3eba9b7023f2337b09b3268df41cb5c721df9a28518583b1011763abe62377ccaa5b3277475a9cf72e36b07bbe8f2e2b0d2fe26e8b81a5b04ad6bd0cb8c80cc359c4eb38ea250577d2d06d14cccd761e0e51c83078517a500a810cf0840a9fe52f415f96ea1d1644fe3e81823bc2196051da581931646193666e00eb8003a1db1f95e0d4165d084d5891153b6f27b157ced6675adfc53777843b1f33a4337a2da2395bfa280be711f3cba2a961b6011edca35c57dc20d926982e2074243d644fe60c76ae70ab1e2d904c3ba68d8dc7b5813565f1461e52d46253deb187f609592b1e92e062a8aed576ca3381b7625c2e84b3ef93a338b97d699377e99619a116eef9ebf05a7f3eaa96f32b6b491a2aa785303ae03552311b113b6e08f2e18f60d7198035d2c8a600d9c572251b542adb198c3b5b5978e09393274d09797bf2acc0cbe6c9e501a3c67a3c54b8bcc169a68a3889ff5c02059762771ea9b87b7484b4604b20e1d324f48b0c807dcd885907003187696a0bbdbe5fa0b0b373450fc440f698967baab67b621d8346cc43462b171d0e2e710d696ec05dfd51578d6244375ac6ed69568223f17a67bdb18c86aa9a982b7269fd04e278b9ef1f379686cd5b6f5eead91bf7d8547ee868d71b6e07e907e8883018b26380a16e779a3a86483ccd678473c31838a04e1aef78793788330d162d1adbf9e0cb1551fc14ecb87356c62ee17f95d38a634917dd3a63c07cd59324198d3fe6eb4abd928d78d8cfd9d05b74f44f691c8cc3533fac926ecb0ffa989f504a9dc79cf86f39525a8dd3eecc4fd4842fae92b02cff25dde9b08014c371f41df226235253b9b36e1ea8c7e8f081dc0e958991515eea0855ce7bdf3f2efb01831632c55e065a2ec4d16048407396b2ddc233fa0422f833946ac32ce14320820051d5a68a7695854167264a6415bc078dc37c717c83ed7879d776fd8599a71f999dd5aa2a53e9b6a38cc177058f7a147b6e043b2b5ae5010d017d327805c858613081ab4943981cb7457426b7a857d2fefa063dfb655997036437d18d8203f68d89ff5660d310cb99f5ca378a9fb80fd84852a0591f0e41311100d168ac7867e54d5c6938d72723f22016c962ebaa67368a173caca26557b276a29ed4697afb6ae9be48d7c411a9177985ce34c0c1bc1ff87d476876705d3157a789b4f0a7db6c272ef4af614bd421029cf74fd17ff1b82db190ca13f02e60a6f2b261aa4fdff74e2deab18222c674ffed711ef887f7e4e605e3241b751c581e96e8b918974e90022f086e0f92b63fd7963dc1d0f5cafa1eb9df69c32b9d1bde99e89193b974d41453efd36783f92bf2cbe1ef6dc56ea20ee9ac1f3a7435dcc21a2066c63b746343e565182a941cd22998aa3413088ad2801120f562f64b7af55d3c6621ba1301eeed652661bc22184bdb9a9aeab67cb18d85612e7d8f7aa2f7d2a6b3c4545b40517a4a74cb0fbd4610af8687bd6929ddef85c0f74c66dbf64a83be1077ecab0c5ec92991c6b8652bda8e6c088b0eba61c9006158b48f88d8257ad30f7aa50fa0edfa025fbb7028bb978396714bcdc2622290f907b84247b70b71aaf608315ddfc78c9ae4297195eb956a7990891d5c83da71d45c8ec9379eeee0f8f01a29cbb58b41ec75d905c77ae533c5122b907b6d2c6e4f423f6914c58d010bd4f26bef3823587c95c7bb8670ca7512e8d7223619ccd9b88c6158b1500b9223ae31be27d509ddee72bb1c298e308c46cddb93e500a0b54b41813bba528ec1f8fd6e070f73e0289af534670c8d2ddc98e95fee6b39f3f3681012b5be028c3cfe7b2da5d7eff3ff352b6450eb4710ee54899d9a09b0f2d10a8bb177bc30ead38cd29933a715608e625d35d919abccbb58f7c23a047fecf9a9226930438e30f262187c7fc7aa872c3651c632479c2687777e152258972fa4faa67633862bd2423248430d1f444565ac1a6a39d91536e003667d88df89d9d1cf909451c4fce3556b25101e887fa8ed5aa8d6fc2da14cf379a54e3da7987ff2c811da0de48625bc8c4dc345c4d195ecede0d18ac3709b4b6a8aea78a979a6462cc0f19443096e392b3e142690163ca28f01bd606958f6a511af5b191f0f37373fb451e28eebe271e631ce1faf09566d8c6e1d4bb38968785829667e37538712306a69ce67dd502f01cad3560ab696fc2a5144b553fc44b5f1bae4640b1347a99ce98e224f8810983d64154a7ff5ccabc138e4c42257dc2b5e5691fce4bf4a88965aa3460871a6eaa3', 'hex'));
    assert.equal(instance.digest('hex'), '88f4699892c21e05645a035ae66259d446afbaa22e352ae18f668c9e');
  });


  it('produces the expected result for LongMsgKAT_224 16160', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fbb36a6d35fa8c0174bf87fd3c232d1f6059b8c43cbd7106aea406ca2efdcabecf3b05db8ae53cf98e866dfc5ee714ea3c555802f7515598560bb35e0f0b26d5f51b81fdce914e3651c21951cc45db3b480821e41654368b3259e953501621fa549114d80a534fee583ad61d681c4fe402925d3bc72a7a63d042cf051ea2fbd2b110017d31218fa0bda84286465740d549f7035492b2c0a282544cc536b8e4eb8695437d6038b13f9125f8c4799ceaf85339530e478ae2ecd4ff909bab849a18cdd775b6758808141b94f1a243bca4981c9d4b7a29ce53a2c17c3e62e657bf51b6163402d6c33f17fcea979e40b0d6adaf572a79030aac63e02e99310b133bc007aac9fc8564200a9bbba0f5b1228b7d9e869dd824319568ceeed7a9c87e5a5c20a6f65879150d8d279f1376960e80a6e1cc929b30406765bae97b22d08e0225bc320eb5004db4f4648e6b8f8f1ff13182d1b20838caf69b054e72df07e3e5c53c669281e227a13ff0f6350578f2e257d9a2dbbe673f8d4666f3fe6b46e007a08d4c79fccd4c8244def3da4b8619b2389fc79d5c15432b672121ff14b58742dcd565ec5eac780bb8832da16c3307b8e63d41500e618c8fa9ee077f4a98236809caa3f3dffcea6eec7dc376226c80c5b1df3ec161c9993def3903d542ebec844c2e7e69fc215bc59fe86d5e98f98e3b8237d54cb2c28b414700e1e977b145c768301e78b9310119beadf695a05c509d95863c4236a3b99c1997ec739ef4f3d74dad5fdc66e494eac463844874d6a9adba891c617a9f98d830fb0e24cc09b70114b32cf242b7c110715f2958219596e0aaccab5dca7aeb2c1649358dd95817eb35cef4df997242ecf387d6a06149e6b4661203627516812d7472b4d3f05f1aa200d5990201e97da0f3d3acc81377752c7b9455b591ab6b46afe8dbde732a9664a42175c20989b5a307209f64b0f2aa00bd297f8eb72eca7255b99f07298b1c59e3d413327ef994ebccaed1d986500ad2de5915908dbeafa00498fa374eed2537e0455ec5060f8cbca77029cf2f21b0d2ef29950222947d3b926bcdaf61615f73f0195ebf189cbfbd25075e6c70640a81e64c36b54232cd76ef24aecd8e619f652affaa27a39fec7ef7df3b6c9d03b51c0975ecc0ce4c09ca29f56380f0b2b293321eca37a6675f43cc7d7a4a196d3d11aca35a54eca60db965ee1db7095d481f1f276f6ab4c0b37398c76ed4a5cf2bb7b9c401e2686ff8678ac6c1d141c3a40d41c44b3f2933dd4b258edb45db5675984e6880c3927dd5087f94e122283fb76c0f622b671477b2c535193d1f4330ec09cda03a1e4ccd1a06447e078ab7a37e34e54c2e0d911593ff522ed94b5ffc14e62fd21d00d7e5bcbec5190d5a40615ff64740a1d31d0cdd07e39bbb4f615a4a0345af40d0647f354f96ff2af3efbe25b9e38e1c5550968a18be6da252a5bc861cfe2d9ce84f56b0071cbad937c947c58d0301e51dd1c3146f7810d795204bc0c7fb71f96224be409ff732e14db1c2cdaba7cc746c4feed829a7077f48c7f466d1ec0c89e3e247d15a4a63114ea1e6fd855c98cd7870cefc75ecc8114f1135a1540de6a8e1c05c9d6dc554a6b08e86c8158eb3d844c5348a61d54a6559b0b7f4bc592558200a289cccf39aa308782370b2981cb5ee050710e012d4f58a9d1e2e0b9dd5a3532455fbcc1dbabdf041f0e7b9dbac805a503832df59b29d0d1dd6e75e735df9082b458dd10920c2cb72ca4ae28b63815785656a7bd897f1436393780dac6004f68a745b235913c536dbd5c23eacc6bae635c949efdd2941d9f1a93ed944180427ff57d0ae76a5d584430fa031d8969883e09e853e6a29921d70214bbe2f7477ccc9f16d18ef6911091d2e62a8c00567b831fc79ce5dd65a95304fb7b0c56cd4d7fef15de5fbd19e312ef76c58c67645003bf0a55610f7a60c7d7c5418ee04c45ffbdf3d9c3c792a5e92979d6f8d1998c00a020c0f1974bb867335288f006dd0e973a376f353ac0d97646924c1b35c274e6ad1103a1bdecee53d2cde4686bd6aab9407a568c7e029b86557617c261590384259b3093e0098f11c17de7210113d586b4624c2e052ae6738ef10cccc728f2ae111458e5fa1a93ea3a594e03aa1c65e5471f24f3b8aa126c385062a2fbc2ae2f2951874bbb64e02f3009a575941d4235b06c1fe451a825ce91be59bab85da91645e0e2b8ce374dfb054a40809f26db0aec534ab5cc27e27477f1c1a729f2cc0c11fc51417b71443b657fd79da807bb01cd01b036c6737258e60da376df08089f41056fc454044e0f1d173a7e6f11355851d36626a4c3e89721fe659bf58b72e411b015bf13396b269142c576a5976ab352e1708c1908c43d873964a097721a60485002f4675c5a5f582ed4bc7786eeb2d49232dadd6649bd9cec32d6901ea5cda7ba838817db8c0afc254b94e4aa39c0671ec45cac70a73bdc77e821cd8baa77df6ed0f3f79386de1fd7d7d81ae7e05db6d1d9cce8f42ed4ffb1a7fbec62984dea74c9480945eb916752ec9e0606815f8d5779ceefd2df49775a1ca29465ac9783944a0617279303ab86c2aeeb1ab4ef1fff7465ea6850109d770c990b842a0a5dbb1cc14ea4947a356678fda4ec44fc9d8fa352a546a2485f842a6bfac20deb0458762a72dd4a039d64ad8485d9f1c4d67ebb87b99fa95cd5b38df8e32cb6eff1401d0d2cd20a7dbbc3977b0854eb9f945510125464300c91577b21b6a0a61341379d1f1e15937c4eac435d05be9282f632f84c2ae1290c6de6ca6c5abae90a6c9f37321966cd33d86c6275c018fd2c15aec46c095ac0cd51593cfb646e8a5f8', 'hex'));
    assert.equal(instance.digest('hex'), '8689ce87864b65866e50ae8173bf9fde1e6c00f50d2799f5af77ed4f');
  });


  it('produces the expected result for LongMsgKAT_224 16664', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6e1cadfb2a14c5ffb1dd69919c0124ed1b9a414b2bea1e5e422d53b022bdd13a9c88e162972ebb9852330006b13c5b2f2afbe754ab7bacf12479d4558d19ddbb1a6289387b3ac084981df335330d1570850b97203dba5f20cf7ff21775367a8401b6ebe5b822ed16c39383232003abc412b0ce0dd7c7da064e4bb73e8c58f222a1512d5fe6d947316e02f8aa87e7aa7a3aa1c299d92e6414ae3b927db8ff708ac86a09b24e1884743bc34067bb0412453b4a6a6509504b550f53d518e4bcc3d9c1efdb33da2eaccb84c9f1caec81057a8508f423b25db5500e5fc86ab3b5eb10d6d0bf033a716dde55b09fd53451bbea644217ae1ef91fad2b5dcc6515249c96ee7eabfd12f1ef65256bd1cff2087dabf2f69ad1ffb9cf3bc8ca437c7f18b6095bc08d65df99cc7f657c418d8eb109fdc91a13dc20a438941726ef24f9738b6552751a320c4ea9c8d7e8e8592a3b69d30a419c55fb6cb0850989c029aaae66305e2c14530b39eaa86ea3ba2a7decf4b2848b01faa8aa91f2440b7cc4334f63061ce78aa1589befa38b194711697ae3aadcb15c9fbf06743315e2f97f1a8b52236acb444069550c2345f4ed12e5b8e881cdd472e803e5dce63ae485c2713f81bc307f25ac74d39baf7e3bc5e7617465c2b9c309cb0ac0a570a7e46c6116b2242e1c54f456f6589e20b1c0925bf1cd5f9344e01f63b5ba9d4671abbf920c7ed32937a074c33836f0e019dfb6b35d865312c6058dfdaff844c8d58b75071523e79dfbab2ea37479df12c474584f4ff40f00f92c6bada025ce4df8faf0afb2ce75c07773907ca288167d6b011599c3de0fff16c1161d31df1c1dde217cb574ed5a33751759f8ed2b1e6979c5088b940926b9155c9d250b479948c20acb5578dc02c97593f646cc5c558a6a0f3d8d273258887ccff259197cb1a7380622e371fd2eb5376225ec04f9ed1d1f2f08fa2376db5b790e73086f581064ed1c5f47e989e955d77716b50fb64b853388fba01dac2ceae99642341f2da64c56befc4789c051e5eb79b063f2f084db4491c3c5aa7b4bcf7dd7a1d7ced1554fa67dca1f9515746a237547a4a1d22acf649fa1ed3b9bb52bde0c6996620f8cfdb293f8bacad02bce428363d0bb3d391469461d212769048219220a7ed39d1f9157dfea3b4394ca8f5f612d9ac162bf0b961bfbc157e5f863ce659eb235cf98e8444bc8c7880bddcd0b3b389aaa89d5e05f84d0649eebacab4f1c75352e89f0e9d91e4aca264493a50d2f4aed66bd13650d1f18e7199e931c78aeb763e903807499f1cd99af81276b615be8ec709b039584b2b57445b014f6162577f3548329fd288b0800f936fc5ea1a412e3142e609fc8e39988ca53df4d8fb5b5fb5f42c0a01648946ac6864cfb0e92856345b08e5df0d235261e44cfe776456b40aef0ac1a0dfa2fe639486666c05ea196b0c1a9d346435e03965e6139b1ce10129f8a53745f80100a94ae04d996c13ac14cf2713e39dfbb19a936cf3861318bd749b1fb82f40d73d714e406cbeb3d920ea037b7de566455cca51980f0f53a762d5bf8a4dbb55aac0eddb4b1f2aed2aa3d01449d34a57fde4329e7ff3f6bece4456207a4225218ee9f174c2de0ff51ceaf2a07cf84f03d1df316331e3e725c5421356c40ed25d5abf9d24c4570fed618ca41000455dbd759e32e2bf0b6c5e61297c20f752c3042394ce840c70943c451dd5598eb0e4953ce26e833e5af64fc1007c04456d19f87e45636f456b7dc9d31e757622e2739573342de75497ae181aae7a5425756c8e2a7eef918e5c6a968aefe92e8b261bbfe936b19f9e69a3c90094096dae896450e1505ed5828ee2a7f0ea3a28e6ec47c0af711823e7689166ea07eca00ffc493131d65f93a4e1d03e0354afc2115cfb8d23dae8c6f96891031b23226b8bc82f1a73daa5bb740fc8cc36c0975befa0c7895a9bbc261edb7fd384103968f7a18353d5fe56274e4515768e4353046c785267de01e816a2873f97aad3ab4d7234ebfd9832716f43be8245cf0b4408ba0f0f764ce9d24947ab6abdd9879f24fcff10078f5894b0d64f6a8d3ea3dd92a0c38609d3c14fdc0a44064d501926be84bf8034f1d7a8c5f382e6989bffa2109d4fbc56d1f091e8b6fabff04d21bb19656929d19decb8e8291e6ae5537a169874e0fe9890dff11ffd159ad23d749fb9e8b676e2c31313c16d1efa06f4d7bc191280a4ee63049fcef23042b20303aecdd412a526d7a53f760a089fbdf13f361586f0dca76bb928edb41931d11f679619f948a6a9e8dba919327769006303c6ef841438a7255c806242e2e7ff4621bb0f8afa0b4a248ead1a1e946f3e826fbfbbf8013ce5cc814e20fef21fa5db19ec7ff0b06c592247b27e500eb4705e6c37d41d09e83cb0a618008ca1aaae8a215171d817659063c2fa385cfa3c1078d5c2b28ce7312876a276773821be145785dff24bbb24d590678158a61ea49f2be56fdac8ce7f94b05d62f15add351e5930fd4f31b3e7401d5c0ff7fc845b165fb6abafd4788a8b0615fec91092b34b710a68da518631622ba2aae5d19010d307e565a161e64a4319a6b261fb2f6a90533997b1aec32ef89cf1f232696e213dafe4dbeb1cf1d5bbd12e5ff2ebb2809184e37cd9a0e58a4e0af099493e6d8cc98b05a2f040a7e39515038f6ee21fc25f8d459a327b83ec1a28a234237acd52465506942646ac248ec96ebba6e1b092475f7adae4d35e009fd338613c7d4c12e381847310a10e6f02c02392fc32084fbe939689bc6518be27af7842deea8043828e3dffe3bbac4794ca0cc78699722709f2e4b0eae7287deb06a27b462423ec3f0df227acf589043292685f2c0e73203e8588b62554ff19d6260c7fe48df301509d33be0d8b31d3f658c921ef7f55449ff3887d91bfb894116df57206098e8c5835b', 'hex'));
    assert.equal(instance.digest('hex'), '3a447c96e97cabba2aedfb3dfd1a563fe05d0f13326ba54375274eb1');
  });


  it('produces the expected result for LongMsgKAT_224 17168', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d7751aac0b43c4ae8c2ce366256f95e3570cd6ad643c076f05652214b6ca4dc134e64077cb1b468cc19500ba1d3fb0d3c5bafa267dcee972eb4ba3b70af32a00e481416ba6917da4771db3df2df38862d9adc8150007e6c369f3eaebe29d50e9a5a687793b3a41487d2096625a2d0ad46ee44021209e0f752615ef13232c3eb9597b0f75bf175250e72640f245db41b6e18dd067dc628e364a92fc96ccbaaba0e924c8fa4e2e0bd8d5eb1f901e153df1284f80b6b85916e2bcb3f0ac0f357c58ca356481c3e9020331ea63e87684032489658867f7bc88bd98fdaf081ae746a52714ad1bd830c1d65a9ea5e8f0b65385caad9e2ba9495223bea661e69a5ba035235063f275c5c655fa0d165533fbfe70a48de545ded7beb72fd905fefaebd683f85344103df0b8da663348005492d8be2ae95c30fc629c4d027d503d686b5a34bfb6856f24e8fd9e56eb589b79c28f727d4249c6a8cc5072bb19229d06f2a5f7b0223364b4a0cc55e53edb771a2edcd7f278ed5286721cdff0696616566642ca04513b58d62371d8c533fadb90e43d78e488900e556c865e5cee9c652f94440506713e4833cc6e119d5bafb0fcdecf257da9c7dbae0e9825d4459532a2d71b226adf8849d691d3270b73d95e1d393f6d323f0e39a443bb5db50550959123e59035413fe4b15f32f3adcb425801d881a24b241b1d95e8beb2759411ba7f34db03c88e55716a64bba0a2f41f50008a57c31db3a6ea1be64691b388e93c3c4cffc97ae4ef455a1bdd013d44f2bcbf4a45c0c4a6021c220270707c36435835cadd611386b5ff310e449778234603fd77a3dc176bb965a0eab2142c1f489087d4bac3d7aa03da557d23c943f6588d64c3e14769898cd45a6ffef50ba45391460e243a904b01a8b3d80814add1e6af635e6b7db457a47bbf707825fc72929dd1f8884904fb5d4f8c1a331b443b01b3ec8978927c1602adc6a9455b332ad3d5074b7a400d22367a057eebd3ff91dde2fc3e367f5780a67f5e22b8450d2b738ceaa99ad29e0032d17d087725dacdda2905cc79fb94bd835584620ad770f91f9626484bdb6535b08e130406a397ca732175e3a9b1d26a833da2cef70596d8de6d2c544ac001aefa0c5709220af34994f32a20cd982c67ec3c3acdf4de6edb4ed461f3b05c2e0cdb38c606376f0af4687b9cff71ebfedc3b3d4e253ca4fbe89f4b19b820e9ba1d4fd4ac40d05bbd815093fa00cd5338508c71d5a5f73f3de10e58a3ab8d555e5b32854943b924939792bb160fbcf1d82ad6e1da7e3f86ee46274bc775c42d2f541c4ff0764ee1d9d635d71d849c1db917377218f49a118454b4dfdc0cdca20e4397137d6c5744f387fa3eadb245b0757c50bca803a9f0fb764a761c77599027ff8822b2508597f46a41a03971ad32e59a2668aad2e9798306800cbefa0408ed528e58b1d5f312c4eae7f70e7dacdef0b2234f5b96bac97817011dbd8822006b1fe5654b5a3e795977242c25f56cf3ad61231ed88e390b4a0199a5d06f0b3b9d9e918bf66bf376431f62d40721805945924938d8c47374ebe697feab839e6c26b6f3984fcd149c173e2fd85d9a45e5350c554dda978efe22c81b8978b651ee8775ed85d688abc798e7d42d256cb36c09788d387699cb44970ac4a056147be9bf5480a952724ee13368bdabe812ec8b16e4e168013f0dfd1747267de2b19ee490eeb8dd4793a00c7ed8f779b90f2c004b30a607ac0dcae6be6d1dd6dbf2dbbbf0bcb5394904fc7c4351bde6125115ba1faab76adfd0a4112d962117c6c304b8b552a9dcad1b9f7ea9595dc1a432ba8534c61dc7869edabb46f99d5fbf13b257ca2803c73617cc32a3d39c2b8e5523326ee49755b3b49db11471925d71c66f4e92e9c4b6832b236539dd886835253b9681729f493d304518eaeaf837cfaea9798a6d4f8736f06ff37586d190783763a660465df397883616a5cd1134aa8b63385da8bde87435f6ef79f069cd676eb7d141b1fe4d510dde942f503f01bad2fe5fe3dfa8483e8870e2a0c3f45e6e8b49e0bc7b1f473e5c382085aaa61f663b3a0f815b485ffdf9e76d18baa643293a736ec6d8487d76f72ba9d210ce2c9091063295671b364cac70a6b1c7b859f28075a8e4062bbca72eec1e3990f011251adb36b92f5e140f6eb7034aecb10a865c774f2b297f088780c6c56bbd5ee56020abb2ba1fe7b253fb799de90261ab0b87306bae0877053aa5bd6289b076914eaa987d631e5d11dc67e85b81f593d96cb6d99e62e5efb5492bdba4555540bd64dd1f343352aba273395e0155b37ef2172c164ecfd2e4cf886c22d49754a7421fe4a12689ab6f28718611f2a48ad1cbc0117d2a668c9b2f543defe73595f9b2770108dd2619cfaeb0c40e65d65784748f5a5ba244836473a42f64e71bfd2f4196cd5447b7cf1c8a4600e8cdaf51005fff2c0b43458966d79ce039e7ab1a1f485887909ed242bdcdfd4a26c294506478e16e71e7145f109a48e573ce658f62efb6f667b486427e7c92348647dfb1eb23ca6e47b57d8f69126f89f2efabd876236759414e775f6bb98aec332b0db289dd5b2b7ba3dbbca2825b0303b44c3b90ba6d029a5b77556610aed32ff21d13bf38667cb31571f5fd2ae90dce953d8dad9c16a3ec34f0c3085a44c0213df11539efb80a013c31c6d72cf62abca1be594f7d9a47833a863fcf581014a83e73d7e66178c0a007aa21b2314ed0b6e16f4149145c51ad8cbb6897a6e94ec091d9b8a11b4436213e7ea0d34d34953acf4972a6e08b137f0a1168324bcb9d9bd4f03fe0caea5588c8c0a93722fa4a9673ea0b3175c370dcc23c287276da6d050de89b45a4bf2f0056b790634a77376ef02ed351cd5d33c54ff150daebfce8d42ef3ccfc9021f83da1186166ff2d526230d7efb28958d66e2de41b5d43c3dc035025b0d1a7c8627b92845f0e388ed29900075e84a6e20d9f7ce04688529f9452bbdfb68c912b0fecc2ec9c9283d65e22bc658fa3deb3ebf0b5679e', 'hex'));
    assert.equal(instance.digest('hex'), '9e49fe075b54f3c9c94362755645d90679cbcaf7ed7f7501d0c2937b');
  });


  it('produces the expected result for LongMsgKAT_224 17672', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cff54596c315403090b3df1253c9779b89e866f1421e13f7646e3cc16d0978c41b959499c249d229dced6e267cb4cb6699e0478be8de4e13be4b58d6b63083e9734573093fd33ff2fdef48754c09e891c41ddb62c2b4208f779c44bd445d852e2be9da7fca6c5d7c015f319e4baf9f9b8c59710816a978f670ebdbf5ef455748204b3cf1501882530f7f95357b7c0c66b354ab947fadd41974101602c926928d8a2b3ae14597de327de07b724f9605bbb70a193f4bf6db0f1250bbe0732ce9cda13f2203ee04164438b8893238a1863c19f223266a047792e138b8ce77a96330386c86067c7f1097c1a4437accb9dfecc965d576955426f066d1ce72bab6aa25b944eb7cd9859988c9fc38c77398839e5c3a6a94e9190335fa8a20f240b675a5e1f2544f957659b557f2c9393aa799abafd4d0a3169627a7985131c7c2bdac9cce99c8c744373c19582a14bedb713b2068f101fad706004c63da2f5675347a095393bde6e5ebacd2f88b0aec6999fa0a1673d8f530c5a43e65a7bb24202a7ddb5be1b2303bdeb0065d3d02b8a3a7b7463ade755648197f991db4e73379948d01d66f88e605285a14151c6a0326432c4005a852b6fe7410e7a774ba17d86f8bed48d83a777fccfa08ff6c0f4af9b44d20022dd711b1f9fa88a338ae412868deefd9ad161a910cd55f3375ca699f8f3f2c3276e30c2eecce99bd8f254cfca747fc398d96c3c9b5621ecf8dc777d4075344fdd0e99291556c9ca586cb5f06f1cca32c1194ff82f20792440adf15c176d01a4c4ff04a02d2d80a476a5bbbb1eb3b56f1dc76c4b0602c50b62a6db0e160c43df6c87882966bce7c33cce79bca7cd265014858acd6f0606e2d25b9a49409e41b2b17deb24ef5ebe34cc713d5cecfd5eb560a8adbb45699b2ea19876ec9f216beb541446004898ee0fb56033abee5dafe1b2a196f11e741e16445b1e882c2ce6e5f433c6bbf258ac9afc81453d4f95d9c3756088e4288fbfdb81a72e1f2e5a4adb99eb606e6b5aa484e578d97eb10bec972d27aef2444f340634ead3aa681c0a43f04735ed744525e18c3ec9dd22213f8f99ea6334127bfc0d703677e15a413b1f28806234ad5106d1c93a0a54467336bc02ad71291605a87bf26c95a382852c48e017f082f7289c57e3e9243658e9c10523637fedb5b3687305031621a6a62f65072d572e35325f3f47bb3683e437c1f648250046f462ff6143a372aec2a80a999823adb2ba65864a7c8055a1f38e8a455313fa4f091087609c84899641b944a2d764f5aff9359944b33d0ad0005c08bac003ba14d5086a88d3c12fbff8ca5d5195068bc84ef6682ac2e279c0082dd0abf42333e7e52cf8bd1253bc266f412d050c9cd2e2dd3a814c592193203547a6fd0ce704360fd9844fa1fb789181175d089db4db8659c5e2bc991f213442285879415618593ea76fbcf34067e7ee0b5bab78d26b2a4964bfadd9fcf4770edc62c0747800ce582be6c3d44dcf6b448988103c4ff81c5224838f72168985b241e88d2ce3b05864b3daabfe8063330765bd1093783ae2a2a104d3258cf0282e5165857fce961fad5627f508c4012a45f61602d076cb2108efb8d963f266edcc172f0729f3b4391b192868c90b58ef83cfd713a27cc8494ba5ab9ec88b33be6f5dd03c15e1c2a84c1bb9a13ff4967fb20884fcfd9f107e13405307a1e524ab8804334108610b12bc3ecb2e7b6c02085a593208027a4e525be7d4a156b975625db2d87097d0ea36917920c47d90dacbfd5978dc62e11912017e28d4328b4cea1c5d4bb8f176aa793bc8248f3f4f80f52156783c47148ce93f60e33fbcc7052a8cd490bf585a67b27930776c7b6a734d7e771b7de929cf24c03b77a27af2f86a75af59d6be581e3d1bbfe1f6ef070c73fa4bf580e87e786109e57a0cc1d027cee3030d79eb67f4bf71bfb3a520fd6829eaee6f5acbc45c40d2d19bfffc7310eb082d67e4ceb2b12bb77c334ac9b24a559a679474a86559f5294330b155b9f8c9d845856c37f7560fcd926ed0841c8d077249bbccb28bc418ddc7d189fc0aee67074e95f81619b8727500f163107ee17f06fdaaa1e6106fe558cd0707ad85884c51eb5ca108644c908ede0433db745930428b56406e063cdddb1a5c835444a0733ba0497fe2c0cc2739c373e8f74b24bc1b3a09c28654e74c4842c5b1776009784a405b9f81ea961633df7be908593b1ef824e43acb9eb4c3972a662462c42ee1ce406ed55dfe6245e9ce124fe7c038deaa15e487cbc1fb9b0feec1536aa90f2ec9f0c979f369ff50fb99a14d3c0aa9f94e668a9801d514de6901dfa189196d0fdb1e4313d55a3ed19e8768ed8450b387b8404bb9ad9db1fa48fb43a2f056168f2369655d8383cdeffccddb921f09421340241682cf1ad233e488da9584895bbefec3602693ebb7eca32be773c9142569acfc188a97d46801f613dec226e82f29ef07c1e0197f4462b4f1f22ede13e1242ff5101693112a410aa59d4931d2e98992172aa4df8180d571fea9ef94515910d6ce14d81ed8f060e8e6cfccd1678a827736009dbc38de3d63d2bf7ab78b0c9cf3524379527a7fe4a034e36dfafb018b54f08ef3dd41904fbb2782d63eb7b755a6d306bcb004f0a8cee3182b99ed6a01df198a0027de42938064d32e45d37a613faee1f1075f699125675b18908c23ab0be248a5a1ae8a01b1bf76ce71371afa56cb3462a1c52469a460a357e4c7874224c37c1366db9fdd3a6f1f08a6718ca45bbd3b1850e74e27e76571dc89e5396efd5c28aa37a61dd3f82fc4257c080aad25acb8b336e5d093955dc6847af1aa4bbae31a0e64ba5c021053e851e05e1fd398b5eca2149219892ec0a644df2277b77bda83572a7906b168a9ab17370ab9e24b57667f9de503ff0b1f9b798dda99996356cf60555dc63ee40b23c77fce438790c8f25003003320aba731a2f233725ff7d62a49e76bceb7ec76f58558c025672d7144e5943408f4daf60e4d991990b510f548551f2abac996e603f559051c4a82c8181e967eee72e05ae3508e181db54c8eea4c05d2c9440521eb19308b3d5f0b5485902a6b01a5ae04f0a4d5712c2838c815098', 'hex'));
    assert.equal(instance.digest('hex'), '13b72f2cba9f9a26922ee7a8e5722aedd62782d4679649eca6cb48c6');
  });


  it('produces the expected result for LongMsgKAT_224 18176', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('94133b8e14785fc19565a3af0aef60462bb7f8045e2edf4a836718561aeefbd0382434d319211c670fc699d25f02ec608cfed9786b7da70e5595ac816688455cbcb4449536e8ad20863d76937796cb0c599918a21a0133b6c625b2000bed8884fc86356fd742af78bb55d652ce4892e7c296853a40af29116cc98d38874ca0f8bb5f6ec8c04dd7f3f9681858e0cd54d8f9b50a830c31a9781e70f63e5922b08617802104044ec2ed28566e39534fa8859573f024ca381d87bd6e04607b9440d3b7d4ef0fd172a6b8fdfa2235d46baae0778467bfed91d33c8dac9db5e7eb6c69ffcc2e9f2d6b5f53ecc800306103d86ccb1e3483ea2ac349eba3833174d5cf058b8ca82855a938a6d38272851b1977319ad78a96a59b7d6300836b0b219974caf8776bab7abf4665757f9cc941299a96998d3a910dd41faf26d4ab54408fdb920fde1d614a08c2f02716a17ac3a98554d9271f644d0d74c0d4a75c663ab8fdcbcbb75b250096c156366ee1a3dfdc6b28299b38c0c14bb685a89acf6c41acabf6b3c6745d08f73811009e9e5ea868d469a0c8cc35d83e99b2da57d202324edf0558e7632de782740cea7d6c4db9590f675ced9e6c27c8d39884990d7b685c89f70e55e084ac8c1f366a2b8ea89370e7f7d724eb9170729e20bb18c7026bfda8be4a9813172b76f72b7ff8fdd31f3ad47282979dfa8704928042c24ae398050a4f4384517901a3a2d4230c56a0cf3bca928ab211bcd2bcd4ef0b73daf60240f39ac01a7ab29dc80896f6118a56db957662c2058f045824da79da35efdba1f8d71094154643a570dea95f30cd28f28aac3f3204132571cf9cb688d27adc77662ae925b75f3fa3854fb849c4450d4cb6169788e2aa6af63a30c3654b81d08aa118773b87d0f76b7ac443246658662bef132ed13218498f0e4646ec7782f63b0169da7890c682a2d046e13c096fe521e4e42851617dfeaf85cb366c6da7ce656553264bf673906872ce8ef4452c0993b2f5191f2e83117e2e8d66d3fd8333f0debbc9d2b1add31ed807bf3dd2dc056a2590f8fb1caa31d110f389dfb045c26706802acb2b4e7a2c1e5971d07920a58fdf2e30a48756a2be92fc4729e5a779d61e82477603cec73088c12314cc89c99c0ac91e41f72e830956f351d560136fa2412f5a47f627f5724a73fd4c584c9ab62f028342278e96b7f3f1edd270ca45bc8b5673971007fc557e9c3f1cf7a65c80426502213ee2d5f32aa726c336894e35ae3fa3dc452f1e13f94d6aa2ba5ae7975c14c3c2804fe71998ac481241c66fb81ad62157e4058884931c93da6c377fac5dfad4c6faa505461bab4fa85266922b2827bf3b9a431eaf25c5accf839f78a0029e0dbaba8a2d52b7e0203263b6c265b03c97600c7539129c3eba3b55ca8820327920559d86878136e40460c45f5e3ed4d0a84e81bc2af68473ae7c9eeca62e5591729deae74c4acc974bb998bf6fe01cd2a781f10146cacac66a492905973b06c3917c72268ff89e84736ae386eca2913cefea3d55c6ccb392d1b1c1627269c060962abeeea388791f5bd4eaeb1fe0338bf18fc3401be0b7ab55c28fbcdada3ad2b39e7bff28f4f8f31173390eefdc9927a066a554e8175b92efb8808c92527489194c6192d7f1cda78aceeac77e67ba502f794e6da3dadb8c12e5ec436a1ae0af571f34a9b5edcc64a8ed34354e36eb67e8d616317075160f725202b832c7acd649a86ff7b135960a3f295786976dac96637d949ecdda43e7014c451ee50ec752bb20c8defb199207c6b2bb0dcd1fb212e6db26476bb3e90f5ed2b9cbb3f1c243dadcc622cb503d08ff4b266a742c5c61a4fff23de25cad7c3d13c2ab50ad2ae77bff6e1b18e593283a0bb4afd6111c9b5d5d062f77eb2ce8071561a796cedd4c4f819373685b4c3d3d14be5bc20a72eb9c6c2c1765ba887608157354d0a5bc1f4158d23ecf30ae3b3bef24bcf8530f13b7fea54722b57a761169cc827634a84314f697b090425bdf9ebdf88a6b53515e01d3194a8dec7b8e15babaff42e0e0cbd1df286a25c1fe3934201ee19447eb1e29bf9ddcd14ec9508ac213ce17c6a5ba3bcd207d1e41acc4fcf9ef40eea8943dffa282200f37724413a438badc59a13a07caf163350f2663d2b381c14363e2372e30faf1381a8936b61df5370562bdbaa1102b6589db74c635c791942a5ec148f66dab803f469f6c39dc225fba4ec87bde2d5ea31eb517f3a43835d4b88c556e84d63b26894bdadfc4624ecb432720d164bfa5f9d2a685728bdf1195910a94c304369de61c34bbe32fded451534276de8e3697490af835fbd8153b807c8a45c1e7057333f99e820032f8051fe8fd6075027041db4baf7693ba2200a671b37679b7dd088122f48925c64e4c3e999be84348445898c3a1690a265986ff558d8c6e0f2fd142e1a93f4eb307e4cf2047211e005a42c92a431d111d48efe4762dae025b183a2dbc57c45d98484dd85339eec68e4a6ceb3157161217da7df44029c1d042e4fc302079b222043323079bb6851fa732a9a2a91a6d94c1ea5ecaaf91312953ea0d246ccb56c9c234ea53031c36d3550814aa8cb39d77f77ae842cdffde17d915ae29b8f118a46edb08ec5e426e30dc4dcd0b1457371ee18c7853b93936b8eb4b4334cdf6413ace28d68b1e6ef72050c121289dcc107d5e859730f97aee4407048e4db2b71c91c30b63f01c2d02845f3192e861853942e6df816067f4c2a8ffc475fa7192245a5463c9793f4731dc4a4ac3ca203a270bbfc9bd841a224d347f8d30ef84afdf9a70969330e0776670edf1347c716ad931ee7b218bef3b62c3ec4fcdb6b41b9d42509bf4e844e7c85ed2cb6d40e0bd125963458f8e060c1dd7d398615357d7c2662eb4139d952d67573c2ddc83048a7da7b9d669cc5002bdbce183889aaf434a6182e32f051dcfd93692b9c096b57e6bab5d22e72afa2afeb53b4870b52f5f3aebce58addc005db10580fbee6cb9c598260f364962917a7323af20eaf3f511e2346b1962ed247aeb7de64e68d6c5c1c14a92f606b19bbde4a68494bfc06d76df422ec182fca8c0d1e300896455dfbd49c29c858c64e80a17c80b51961c0ed312f071b0d62d7625dd3504a2ce214aaea51ac81ced4479fd9da06c7cb02021f4f347e1f20d62c78a50a30a82f288407966d69d837f881fce431ef0', 'hex'));
    assert.equal(instance.digest('hex'), 'c7c4d180c1cd83c9284e38078a5e4850748965557271ff0a848489d2');
  });


  it('produces the expected result for LongMsgKAT_224 18680', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('f5080d4c59e804bf8f34b334cabbcc7d32011bde3677f4b9069416ac204114cd9da7a0ed0f4b4d8344416336eec15553ef526b6dec267b1242657dd0b508af81fecf9cff9c82a6a7a9539814dd7e097615ef15373836b5d2f765cc8d5f82e90449f13aa741d5ee2fe63898e55acd85116846807606fe1e2e29f98f9940b067d0d1df01f080211b2ee4b0a30803782a7bc2eafdc5ebdba91eb05f7d7dc8e34bf6d44fec05824f53418f235fb64e899ee147bcb403c8855e94af378d182d79c3eaf977cb4e9d4a16d990a6c388ceb567b97785e6f2bc6745102b99ae765e960b6b32baf01e2379cd6ecb74d3e1a56552f5976dfe5c742bc92be596ca742ffc3d0fa032ac29f9f7c1a5c43bcca62df7d9de35d0c7c179db2e1aa255cedcca55064c2049fee1af2ce5ef696ed4bc46b7c55bdd51f2d44c8713fb2475c0b85246ac0103cc3863b7eb026ae076a600313f6fb40a4df62a2af81b7e917951ea870ecb31b3401928b5046d9a1e62d14b30fdebaf262868517318fe17ec3c0d52524f44120ed8ed3ba70c643300cd0bc70da72c964a88f52c3a91ec20bfeb5caefcd4d9c7685d8407476b5f34676c5ebd1e88a6cff1c625322f8cd59b9ed60cefb21f9491b95e72791f7ac7eaa3c16159fe9df7a989add6c2282c47585e11397eda9f47df2b40166e03bcdd6186b46c6835118268ddbef19a28bbade1bde0228ffd7e8b3c3c598d89e24b8cdee79c940254de26cc6814ba2722e42f7571600b7325e1ff300251d52a895b8ccbd049b2953b8d231445f68f7c26ec25a4b8695c8ac116f736be939edd762c9b4743e463c9b9b2f88e0bc0ce78781cddc3bca825acd463c7cac2aa6c430bbe820ea94af9a40b1b5c006e9641a2ffa6e427379e1ad49c81b98320b3431ff0030dc683d61026438bc6a6d34b2c73704d9f62eaeb13abb3e4b0562b4e0482cd6b2d7aebc0367ea29a88f4a76f3d76fa1197e1dca92c8216c84c1af9b8c78c9e3a7799a4a79a783033b0f5547e8e75e69cf3615ab04ef989fe1a463b1672c571d50ab56972896e8a50c242f22c7f6e27ca4ca793f627e79608680f5421b28bdd2589f05e65430df774ee873fcd1234064f7a33cf5a1fa4e368137ff9c1597f1fa0fa36493f20538077669eadfd3b06f788c912c715fb5d334db6bed133a8fdc40f5496e66ad63881f0ba3727416715865253dc5290327b515bf68da188dd5b4b0eac7ca712cafa8fcae0c5503fe58a219182f1c30da6d0c19cfee897b7d837c97996a35f4ca8cf0537a01d17e7de0cc9c129e4da0adaf1fda85030df9127be628263b0624f372c47c3ac87eb945a57f5c732beee81a7403001798992f3dc944114ff3d54c4666ac5ac8c98d0d5596cbdeb420665f5edaae747d54cf7edd37b162e372249d135938cf17d174d12d88279cb4c32bd6f018c766da6983d4ea51d6bd8ff0a9b34e9a93bbda70cf1b4b867d60a74811fd98d52faa559b52c755cb70a76c94bd19654cae7017ccd70222bf08c5d7ad1f5e4e6344fdb3abe703452c29a696f39f9826ed8bc510a4a148e5bf8a5dbe6b82d7220164f08011c05ac5159d52ce9d45d758b645bbb248c2d341dbefa1f8602c5d458a64f38f3b04db39089807b6a10e1bb52770b92ce72e2d3bb0c2241cded35054b84558d1cc099ef7b2296951951d5b6a22f93bf962ac5ef8fb55ec6cc2b316428edf12078ed1b66d525d022819cbd489e1bedb02ffbd507d55f9b5d4e22f6396ea233453754688d20151a09c70044b8a5a9ac033c3c3b847ad833d5c05b33407666ee82f9581df9034ee15a9ca67d52f1d9b634b84c1b8ba9e515f1f060a5ac5cbae2de75f94e112f7198e239df08d3103f065627438995026df511c6e5bfdeee5667d511d4181850c7c5d179107c1b86d24d5532a88a4149a2810dcae73731b0e1247281a6fd31613df6891b4c17b7a6a9ad9b77468254b93f85958aa0f01cefc10b25169dc46e035d3f24557b4bf0e7d60174219108d916ffdc55e25bffd9809efd058e12c14f39c69d8fb73d3ec6458f47f2f8db901ba76c86550b11b54d0641d4db3eb000057dd00f2e511fb7a47e959a4402a3ac5462234b40b184020fcf7a0396c4d00a987c8741a4537bc17102a5c42afeab9f71ea66ed4cbc7b5ee682ff04f56f4ba1ea0bb326c4089930f9e3f3ffa3e06637cce32113881a06cc3a13837448145c2bd01307a580fdbc385d8f46fb92ffedbc8918d269dd1871164d4b3e2023441ec8b99c82a5f09821cddf6b38c9acc3bf3a38d5628016159588c33eaa29d9463a537c000a16ad8c177dc4cf716e625f46fc4ca8c19fbd8ef320f1d680639195c8b195b0a02738e0665f4190d6287e589cd6dd45b9e8cc23b08e1681bfc6f66b88de6b091e825ea4bbfbd697e10bc407570ae4f2a3ebe569554639c2b8e051656cc30c837f5a92260ead1d552b45801b6d28134166796c87f900225cfdc3cc49d72dfbc18d8d95b1e160ed3cafd5c3467d48aff87402cbcb1e1420e3fcb588aa19c8f42753b59db6fb6a9fdba127ca806dba7dd97f2488fc2e438eef57a4cc85b88dcfde76ae1ff61225a1ca8bf4a14f729950322ea681b16d6492902506702dc8f348e4d3ae7fb55fac1231fde82091b34f1791b6ae37587b10325f6ff5e23b855845b86eae90785b9d10d90a16644d01bb626f343b908a9591f4069b21822ca4ecf985c1e710475f33df9af4764cfb0ffe649063775338f15bea7cff29f164678160960a80ed148c9b7faa58e9139911d3dd9536f69646f718f083dc9029d6294fc4c607688aa75af350ac2c0b001a157d023d73d86ed8133809fcb9592d12089cbd7a1bb6bba882fe227c09a53ff088907cb4bc2fb4b7f62d41d3d397c4fe0ad12bb3964370e21712951c679814d506e738c0201e42181d231136a435ae0397b61ccbc5e8bbebf8ea77c8bc48bd6211f29248f9d498d818e2b544d28a5e60ba727f32ef4ba2707962230c900076fb764d0ed5ce078c9db14de894bbb836c6de9e83202ae89f9a8d8cb0341e1c81b5fa8b16731b8e231e969c0f1ef95336d4e73ead6da23de3ad1eb608acce4d4d93996dd76ec1f5f2c576f6b3b76e07bd8a810ff5d88b00ffe48c42700b61cc499336e7fb57ad72ff44fc631c7222c9a3d1abf6e77b5ed7fe2f7228fed6c849bf7142c4103989a80f7c15642ae61650cdca7e854eb25e9e72f4c3e3768e6ccc8bfd556b56d3507edde9e5c331ddea75568b07813d20e8f4c9547838ed28448f2e67158acf0c00b131473847816c5e2dc215', 'hex'));
    assert.equal(instance.digest('hex'), 'b4978f5de02905355d9d40fa09e6f8a297ca546ac8382cf10152b2b3');
  });


  it('produces the expected result for LongMsgKAT_224 19184', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('34a8b8956bf5adfa5ef8f10b673f6e53bc3fef8dd1f9428078c256a8fa1d8da1e724ba90b65bd4394eacac5469c520bac2ced1640ba26efef44f50baa72a9e7cc8bff69eb8719aa1d88a2450f5c3b4fa54a2977ced1a904c09356f483301add61006524ff814ca0b1fd50d3f3a30492ba70c2921e3b9da58cf8f5bee32ac15e39371fd9d784256054a3d145563c62e7258fff3a16524d38767a75fc27fc3d0a9f0f585a0046d6369dc6dd17fc65b53380184b4d9eeaff245fce1aea0d4e8407d2ebff6ec0fae8b654747eecce13bea89d4879e0c92e1f47ead8e5cd7f56b04c62c2b7cc13c5cc2d9e6a87d77de73e54dcb9829001a3a9813dc1958e4fa10bbe4027822f8923af17d0b04bde97b9810b31e26ff74f9ae95e50c6ea25a49ee557559c2c9c83d01737b6cd7216c46859d2833f04def7a7efc849f8b13f627e20fcf0cd3e0b1cc7d0b22b4ebd576cbc2a397828eaed2e4afe51104507c0b3176a74a0261a159525e0883f4514f1856d1bca3ceb1084441e99facdcc5b7edbc5a4c803f6448119745c23e5d795a0aa96f31a48f431960b3c41c9c6b13a22826743839e571f40bf5c965eeedb293dd5ddd22442071895bd9c34d8a344907e17af7ef48008801066aa8f434019d95a01ce34c30dc116d6a5d9f6d43bc2cae327b613e61299e75d580c7323eceaf494d54825553c98514d841568f5bce9c97194ec36a16f6b10d9f1808ecc1da80be4d37735adb6d1b83a157edec266612e65e57ee419abfc35e342a6772b5ffe8ab1d8095bc92bf9982a7a32e8505d8f2bdddd626d09f208930427f14111b91ad66ebf710d9b1eafb22fc34b2616458283e9fe1218a2886a7b73742342962bfe5dfc2f829a77226fa8bb6165efc66873d618d8b6acece0412515c5a032e44685f7354f2df2ca1f903ecf1a53894a9a87e07fb36759ff666560605ca55488a7b3bfcfebf6a0d616417c93835ece08fb69450e041a7c23981520ce03d5194dce2ac492f2e4892b8028a7eafbb913930942fb26643394bfdd67b9381b1581f9f62993708a3c461ffa43f11af679b68f62f2553500ed3d7d04990a6fc1017d8d7aff9b6dd58b22f168161e71ead31183eb338c75c0bfa00a701a19f72b73c5a772090a86bec03e4f9f2554948d94e150310c5aaeee46d1aee5b837695fb49368e59d176e0199cddea6085c897ae2829b10c592553d54ec9a0a7b8b78809a51b9dead66d0879e8d716b0519801ad71fca62d848313d40f8224861e58f0d107ef855a6fe9315df8ee624c04c56473c61c4006e9372cb22b4cc3dde10e60ed03d6d6fc928efefe11ba7cec15351fc0b0a5597deabc58b91040b70bbdaf8e1615ea5246ca993bbf653efec3faff587467a18a4f3868c1109fb355338e54eff58a1c90e2bbdadb0220f22511c5d8cba90ac474fccb0f9dab7b66109bafba8e82382cbb851c2f0869b3bff09a90751b591bdcb617c6871fd8e22bf554f3af8097e9443d0d85f9a7ac3432dc8b3e3f0c8a570e2f97dfb0e4445152e4dd0b0ef1e656dd7b7a50b303b6bbc73439f873737b47af21af435c9703f704ddc153b26788fe932cfcf00e87e33eb195a38c58128a435c81a0dfb42edbb0b9eb27f64c0ffe8357fd995e8ac70bf0c7fbb2622ab5477ca8f65ef1ccbfdde0ddf2d610f7913d7ff69279dd33eaf4a49e3a5326e57ae3e8dfb752e989c99d170389c01c9adbda22846868cbad5f62b974bfc6a5a4a88eb6e04a28752de094391576fc17275d876a5d3b470845a7a064e00be791b20daddbe58812ceb296884fd7246ff67411aab73d049fc3250da9111d1b3f192bd8bc650fc4ac9392eb18840b36d8460a80d7967b20755bfcf8251836961f98b5e717d7f078d3a2cbb09bfeda034274b93e8092d37f060cee0659269a09a11cac907c0ec027da78a723a207b217735b15998ecfb3c43d87aef6671b54a76666933dd98d5db4c7a738c43173e77b2573c7618239f4b664031477029666fb8d3bc203f1190dcc27ba0608b276b51f7cfbbc70f5d4b1443dbe37dcea0354dd288dd4d851f182283fbad31d4a8e5734a28c49094de61af6674960dabb2e6332fd5a9217a92e5cb101223d98a4bd50e56824c7da09af1668b1e98beefa8cc9da8f5b6489ff1f795b6f2e3da96526ec0233604a5c300ca991d5090a358ad21b01e918e5fb9fc0070d3ec1a8647a1f40fd9a662db16aaf39b8fc351d2fb077ba37800258202449db1f1a95fa9def31e48cbbcc594f6ad63cca4fc3eb3bb5728cbfe4026c4a7aba1fed992661e58edd334b555dc93d34bf346410122cac14f774b3990e68508dd21ef27a83d6bb6ce21eefdbaaa2ca63443000ebfafdfc18c0c96d7ff7eb47448fc946a1a096b0008ead107520e2536cff86ceddc93f5f8f727825575c7fd7d528477e14549c91fd86fbeea832d1f69d21d05f220d81af9c241766cad8aa6154dd6661789ebd44b67915f2f55b38eab1074e48b1137cfb1c440f1bef438ac1db4180b4d50cf735d39af8201e9236dc6056d2974b951ab4174751969fa0b33705fb605d2e926a764da3ca2992cc930854075c0da0e5d1b7bcc8b66cb937fd6b92a2776c88c02b391d353759a04b5aba5034905aad61d0c330c9b00969d1fd1dd99284d2313e90a5b8b0803bcc19d702e131b4133bb91ced8aab62b0106cbe3d0ba597c69cbbabe0cf669fe446aad7df1e4e6827e280fe8f2ee91c99b1db44d10a6576a535b4fbc6c76269d1b0252cf482b921889aacba14b4c0a2eb5907611290ce04b29ac5436edb8d5d77a6e8ac5c672d67e107b6a866c4bae36e82e22fe6fc5b31538484402a30a5221fa2357c3d17a1317ef8e5acf7329c670b67d38f1ce60a05dd991ba855c598f9c32e518b95b6aeb84587103815019e39753d43a71a8c825895cf2569786358b78a74a5b47b7dfc3292146badbe0867a353a7285487badde28e9d78f7e8b2fe0e7cf78330d4bada0d606d6d40fe9296eb500cc906545d72596c8c98188673f410576d154e3bcb1f8887e5613c3cf279be307c0224dadf58a91e93211f1173c461ef42f351c7dba499d6974245e1d88ba22830b07f6d735c5a74de475c7f08a940460512eee2caa46705580868d639e46b3fde805aa1343cec3805ceb7e624539fb2b362382f5bf0d55e6f3b90d2125162ae7babdf96fee54b29bfa9effd80a508e80b478ef67997af166b5417620ba5886d631df501eeb242cc40d05387c9730bbe8cb070b2210a8775dd25a5b76755380ba7e2ea02142e43a3fffb6f1bed559caa68b09dfc8dfc1864edaff705bb1e30fb58c3a27c5b1c425b22d0c1073726a2caae5cfa631cc2edac96c10fb25329f0e6d15e4d52694f8670d3d054e9fbb2', 'hex'));
    assert.equal(instance.digest('hex'), 'df765785bb97ba3786ea56dfe85af5c7344713eb5feef374ede9e660');
  });


  it('produces the expected result for LongMsgKAT_224 19688', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('b7202c31c33e5579599d14d12511cd700e5a077679266b94b44586b363677692a4f2838f50d437c909e5a41ba747a6f2c72be85149d53a834f7e66b6dc74927250b543121b6b4780542ab511adf2011380f0d7133bf82b38a2e377b5c7755e49bb1abc16ee0a4a772f5653bbfe06be7773290aa4a9a059b98647c188bba609d31af594d0594b375963f249296fc6974d2520cfe9ebab8c4154f1b9a7eee66968b853f19f74d3125b8283e5f167395ee1077263eef91cf573f1a258384d369c0a1b8f4e12c05f942b330d43a168290d82325eb2b77d49f25e028aa37751a28c405a6ab190b744c5f998d7cabae18ce184d96ba9be24281556387d710e66fd7780eb1a0d91a3f6396ccaa54a7b2b223abc1902a660a44ed1fc2606aa054e1c0fd9124eebcc0993922b79ab6dc225826cc3fbb0b99046529ab3cfc79eab58ea68a153f0c14e5735cb4296fbfcb23acd158adc1b049bbf854054a7e08bfe0b7d4c8896670a90bc1a3a9d4a2f74d1fb5e143a4d22ede79c738b41b91b93ab34a91c8e327bf17a1e86884544b70557d4ec184f82ea5b5c5682e33af7cc38c5f91bf5d024cfffd145a5aea6fd7b6b0456af14bdcf60734cc93c1387a48dfb97b91bb23d7f68eb783eb0cdbd0bbe4104ab212147c9caa9dd923e883c3e24b53aebcc3f7fa5aa5c887078628efd7e82543f8600fdf89a3312ad6902271321b77c1f8dff1b92250c59e037411c6791c7e930d686e7bf359ec480c6d0bd05d2009f2d339d2089d5202c65b8fe737ebea6cb6d9271b0bbd3ecd6328aa27ec7722cbb3e700662ee6afebdc4ff5e9b00949ec3da530aa271a78ca7328217bdb5600448d9f825836e04892cef50a95f8ceaaa5c28f2b9b185536ff2ddf380808ea351bbd7a068bd43bfe8eea7a3292c65130915e828204c0ec1939f1e3088058cce4b2921530e3a2c8cbd3fca2ee39504b72ee72de1203164ab0af78b66600b27a067cd62d7dfac4815b23a712870aa4f2659157037285386beaf2649741da70fb7e031b4e1f37768a0c349c7b8c90a3da6138447db7cda00c9fb01647e3239a680ffb6c8d4d536dea7131480fa95c597bff67ab5bae2578954be01be5f3892688a98b0ad0a21b0af40e562175164018d32d6a886dccb256ed7c4148eeb963042bca34b689c44bc485f286a65d1ec44e5a0c90f5a1e8d6a29dc30810917b8a3a6deb0362d5967f75802e8174725b734b61787437aa6ff8a4fea6c2390c477dda085a62c6477e994913502b862bae548798a17716a48fcecf315487844a1d98eaf122521173807cb72308cdfc6cfa2f1b9324a305869e47ce15cd18cb38ce83ed3b41a71205be49cab4b93142d8e20a4c4365e4b0e72b48e5440c8e8f5a8abbe22e5c24d2ffa0e062434fb17119028299ad5ae732f0fa39127e533d591a27c7a0107a9442b7c2211c2f7fdade86bf032ce72e94e71d6072466e7c50c62e01c35af9bf5de708a309c5694c84ed47ab397c409057219b2b81d9bca7526765c11701e6993378bed05f5e5ba5f9c5fc3e3e6097d39c86b2995a9fe75dbdd0cbd3a9d96c335c8f30fb00419622f8d6119246f1b94ee8524a275738a2b312d036ad0a8ab72ac50f76c8642b00f354b00e0311ac1c11c1332372e4ad1a982027230536e7a3d451bb1e55e509ad026188668be90b12cdcb64ab4c19e46bd19983f4e1d26f85258504af4daaa3c188fc2acaf6ade8fefa7a42aba19dc7d1f2269fddfb15ed2c659725829e0736947dacc67d83b0ff4f1dfdb8b998efd4e50d8e505583814e049a31923febe479ea88816a7fd044a52339b761f9e069c7585d9ed7f2397ad4c208ab06c5fe4bc6ff9b367d109dd3fbbbb48f319053c8bcf643e1b8346ea42920e9cda202ea0a74e44305f8ef7b18cfa5c921c9e5e546276d3ead2568a9df7b7883d4c20b0f38bed538d9b41aba491a4ba3e4c4787fbb6f75b18dc6c356a95debd8985a028c1d0c56ab5d06406e547cb4fe88bea7d0f8b3d244f0d57652a18d122fbd1c6df0002f3bfa071971399c749a05569f972ac0c79cf6532507740c3b906e1c56641942e215fe60002acb2f330c99800b84100982123211a1bb9c05845c29ed03e3549861787868cdf9f20c9dc3dd9c638a9d5ec0238ab05bb2c31e475f008dd3e5c9adcb0968d022b99f1c848339ed38601fd594f2be5438440f6371ac954573012d626f9cfffb06af4dc2f0c522e5258968a6eb28822584835cb64dcb1a1593029588594665be0f56848e24f6ba914d3ac6df6ee019a4371d8d7cfc74733f29784ef56e0183639dbd8fe001c63e85fc3206b299f1ec1036dddc01851d189b5ee270ee5293b77abf4a4bc6f986814fc0ed65011754f4030ddca7dc67d6051246136951cfcb6aafe145f5c14df5390b105ff1ef9d35d31ecbb05b2d88140a7c662ca6f58e2682cb21f1da837191220e3b2dbf92546d576e27709c67fb3ea8ab8b53f394c82834dd9fcb317a1b51d1723bbda7ab5315778b27afa89d191f1a47f8a0e0c15e33f0bdf577f92efe3eaed6546a9487233cf9c77550d482da1b99fb3b721ab7ef7826550fc4bf953426b69cca80549569e1ec6e523822060b4cb8a88bcae1b9f480e073a90e4cdbc8e60994b6b953ed153c9da146f4ac0d2030105bdee296dc6bfdbebf75e6353add84330e8011f9483f83a39f8d06a50961a07557d4ed83dbfd9e5cc434f0eaa70d69de7d034e359a412864d8be292f588d607294a57cc3c5065781e111439a2033dd64b94b7155aa565368045214c588d3ebe04a04b7f7df5630a460bbfbc39dedde14d590b2c79664504ef027f4ac22712f8ee8b4399f01a7418a8ab9cddc4da649f5203a9ca15eb758059b911b7431ec07ac541d4d2acbb3d67838f4be54a387757f1d19d9cdcd7ca1e5e6edd25046ba117844d98153008401a83989c6788274852488d9c3a90a3c0936dc09087a4dd6c08eb2813ccdb49f1ea8680f66d580b10ebb30901c832d833ced19b52b419cacc1e01a61d16913396cbcbd31efaefcf1fda31072af08c1f1213658c4c6dd7640cea2c2c4111a4e2e39b806cdddd6c6083ce7876bd196400ba07fbb9f6beb7656281d9650317d8f2edeb962e62e31fe73d53759a357da4b8571337e3c7588b998628f567909cfbec3d6bd818214fc7f0fe7225e0f8ab64bb4b0d74aa79d9945e56177f0e81793552b5f2d78289309e132d16fc7424155195e1f5db8cc327b650f2e3f1af987af84149052f27a1da66251b08a562e8be10e92f976cea41cda5317035dd78b327d9faaa0b3c897ce1106b0746606fc4b6ac5f358d2f2e10f7938e5fef61e540181bdced5a74d3aead4207e18305a4ee2e999435a75914f21202fe3f39c39e5face4e391910b937fb5abe043d633410e47f99cde9db85015adcbdf48f45190193acf6e6251e99b65a56868cd248f6935aa9c6720c2979fb5a5d54b45fe84fce1', 'hex'));
    assert.equal(instance.digest('hex'), 'e1ccc5e6571c04c676f702b52ff5c52b2aa4ff1b3076482b9976c955');
  });


  it('produces the expected result for LongMsgKAT_224 20192', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('cad9ef077a98e3f2e5706ebec4960d5a5b78b57cc8017db1112f2c537076350c807d5cb1421c235ad2f8abf7ce905c26b18566d8fd6af44908269785e789caafa1002bea64ed46b1abe2a8812ffdf400b18a39b731040a8c703d837e463f29d4218cc4ac0e38945f5c79263d2ea86ae52811724424644ee274c55fb6a050782807f3df60547ba058465372c8a664e833b5176ced42c40177cd3483e636ae6f0b9c7aab5dde5309e5f377af74314680a72dc1088afb861e6d564db6db6e6d3e66da3f3d539616408d7b0727cdb924bba38c3bd5ebb823e7f441d2567fb36d31313c5834154abe1623723449fa8324c85a149ed1eb8687be0e8a6c07527bc0d9282651cf36d5596e1e07489131ac3c71b75513ac3acee7cf9098d1d5c710d31a80b2a6037b37228810b885160b764223d4b016480cc9835a695dec0013e9e064c0834b580c254c6f04689d0ff80c6999882ce2ae5b4d8f01cdc5c2728890c7c795b10c5b7e01ad2054e750783d4dafa677cef7ca6141b0c5fc6e5fc38b0d1ae088b16a02c31ffe242afa4264c21d4aadee3fe6b3f43afd38fc554bf168c4331a388508adb66a12b85af205e6f2a6000c7f222b5e3e326ae9e572956330575a07713ee32f427878a62146810b85483f10363722279af71290e58fd7da3c79c8fa0378648423e18f2bc4649e8ebac7e28ab3f8d1ab64750791fa9158b0c9261b2da1a8174f5002aafaca122eb2857851de26278f594b59646b3b2f6b51a4011ded6188ee52d64311db7e50dd8197ea0187ef00f0411d501e5d1be946e31603242757b28f3d05cf1744d62ced24366566dd16a3f8f3dd4d52d7fc891a31e83ee8038dd78afea84ec8896958397aa7aba0056db3b16a04a2023af67a1948dcbad4a0a5376475a320371194919c939f4e63971bcaddc344799aaa151434d2a5c402d02d4ccc29ecb1bc40b297d9bf72aa09ca9dd2cc5268f2c3f49e10fbe4733ee83647b9efc1f59bb9f7d8e2bddfce717cb1afe7df9ffe8b4a7bc79371b74f1a038c9c4fb8b7b1eefd38988bd591dd2817e19e9d6c52b522e90dcd89c70d3eed91b1286c3891d546f4e198bfb385554e882ade07aaaa4559ad517c5cd7cea7cc659beaf8214716ed9d750d382389ee8ab7c3c8aac48968220027ede85f939098fd679d97865926f120d8a9a360429cf00a7c1def836a9933655abcb384e9f630b4163f204238e9a38ed949af36f5204b74dcc45266f89af90e6db2c948e7d773d72e653d35c848c77936e6e689f75dd78ec2754e02fbe119c572885bf090b04a4390bc7d5983809e5ac7e4a16f6ad023c8b28e6b01591b0fab80dff9e1300de11be3168ba2f1691e6cb7c416c3201fae3f171975bacdffa520571f518fd8477553be92539a0ecc5ffc161043139cbfa35673f71949ffbda64693a032cde6a34432cc7736f1856b4daf68d39369327744355afb6a4e89b82e5bbb1d53b5ecd1ebbca25f6b51f1b0076c34068676b2b879c13f64d91b277fc82ead7420f2497b86c9feb5341aa553c7916ebe6620de18eba7f453883a6e8a037c314ec159869132e1856943ca6da2411830d6af8354346acb06578ce89e277e2619596330476ee1b8a1ecd28e201c065bc30ece1feee5e7ae182efa8d0310eb731c30ca7184d6e9f3c9cf08ef2b2e63ccb369a36ad63207dde3ccb04de341b5d093a0a140aa0a8dbe811f03114b235f07499e622ebec39521fac671183f0798ac50919d260941415832b1c5686d7c27a7a5d0e6222a991e341c9a8b10a76e01e79b1e7a0c18227a39079d50f5ee94b18b62c51ac36650ed3adfe142ba5a34a839449599355d4ac9542b146156be4fc4dbfdd10cb8dd15d0c51ab23ab19c16500f770693c94ef61df26da43a09b00d4eb7206e9325cd66780ab47a7e95b50df423c40767229df1dd41a808fa70da64771fb91b5f6f76872759a8cb77fda87e2f2d7f030b9cdb456005db9a88d0f27d4796803bd570440fd0b7e99c3d08fd8e603c92098aa4150d5a87c2917cd750bf0077e9d71c43f5bd3dab919c23e16bb90537e7fe694a847ee843df4c8262d44c39bce4d9c49069b213f1074453ec66ea054833fbdb72b81161dba424390413dbcf96cbd56a35fce6510ddc2bd9296f7cd2f7474f86fe24cd61c9665cee251420c0a0d1f56f9fb06c83ffdfcf034a5c27b8c68935c4b2abd2fb92d570f1fb610b3ff4f66a3110a7a0b89c07191bd5928a39d579191633b96f1123e5535953f0d25d28675f5ddee31ff2b6e13ff21a2db1990f4ea8d0ab5d4a73af9a41d5ff8b1467a11cd297ec416f448c5b0d77df8d02e6880a7dca283054beaf1fb986acbf838b68a32c6a4dfd097c9fc998fa13e382399677cc947af6e4ca5b37bdbde394b89582c04bd05dc7c04038c626c5b72788189fc01799a4ca03a1e65c744f6c4893b19d2749709b23af92592044224aba18e1052820250d0c35cf8d76e51c73c94386c6e0f147c770ec379976b574ef2ec6d68c39ff2c287fe5149f71497e1abf07176b024e408479bb7b56b373367d40a5bd08aa38bcfccc705531d2984cd386f0f47f0864e00d758eec1ba0ed0971a0a2a84eec663f198326aa62f931daabe381dea692a7c43425d54acd99e2ff5b7464f5bb794d2009035ca9ff721b1b4494cd8cc5cca9957660f29b77ddf173d78ac56b36aac5e28374c38253b22e16bdb93e4cbdf9f0e854ea1d79983f8f9cf6d25ddaa7648055354a8cea372ba54eefca4cd040d3eadd23b89ab64c545b7462d2d6d2d249a919703bccbea471251d36a1a27bf0fd653f5f1d8490586d9568aab141383b186630a270bc7d2a8a299b4c90bb22fdf08c30b2745dbe6d6ae7dec9bfd112f5611a83f9deff408346dd62f75de00550f6e56b3f9f9b80d7027a0c7bf6306aca159972f2ae43346985a4601b481722eabf3786696f9623e1366f93dc585758fe8f245e82211ef984bd31dcc9fc7d7cecd099dac9e45cbe655dacd687a848f53353d7bc1d68103d4c8c740c91b69517b164f47ed718e52687757a51f086a4ddef8ea4c858580d6eb8064a044534e277a7dd5975af13ef5c43066ea26902e7a36df395f2495ed4311c3736e91450650843a1828feeb42e6bd5a05d0fe4af8d7a543463038bcc3d31a589108038dcffc8c7a3cb86c57ced3a1e3e22357cbaca328ebe1dbd16c1b882fb009a697c1efeb3efca007753ddc51f6e7da8900b3a37312ebbf41c0a7ecf23c39213fc8a23c2c5ee6d783a1b6520b07ff747a143f6a8dc512209c37adbed276de13c5ca27ff7a595545c024b11f5eefedcbf61d92ec0a107bd1ca00934618927da450c940f6dab1c180b29e72c0e8709627e51e91632c364fe45fbdae43ab876d33000fb1ab437d499b33250d75a1d23192a55f813859cb693773ddde616e5570e753128572bc119a46951c86f99b3f931416c0347d95d5a6be502c3c8f696ee026c3e66e4f0a3847aa49815cf40c902ba79ec7c4e3d82ee140c8c09f73ebaac0b5ca11723b08793fe17dff3efcac0c576d8f5d9699b741861e6e2e9770a', 'hex'));
    assert.equal(instance.digest('hex'), 'fd01d342d201af012ad20cd58630df4112eccfe4cf2e872628d9fb80');
  });


  it('produces the expected result for LongMsgKAT_224 20696', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('192632fdde8f5d5c75b31a51a941b69d80e5b6a5a05fcbebd9b8be912ebede8935cd45c63aaacb845e8433c6c3a2b4a2a0822001018611ce54e8b1045d0d4ab45fe08714754fc6b8c71004335f3615534efa0c19eeb06dea3612dae67f40d2ee6afdfb119e1d87f234f380b8d7e2f44f5cf28fae6998ec8dd6381033ad3709eaead1ebc3a51a3bb534ddfc1697bc49d9d9f0c2e06edac9b66c492500bd80c25c383c2bcc082eb6e6da4f1c2c4149cd3bf84957b83612b3351d270754090502044e2e81d8236412a6905f96528cb0c43760c32809527a85729a3c3b151f0edf53730368b6e844e1e09524cda222e7284ddcf37e01e4b6ae1fb422907136434406059e69c8db71a43c507c72567e66d5ed6f17ab757cc1f5bd57f246a308e5a93510ad80a565751274ffaa4679b131343223eefacaebdb523bd3ed313aa20899ff15cca0e708f3622054981bb567000191807ed9dc2ffeb7928df868df13a4cdfb8e909fde7867999da248e5bdd361b3c1022cfc46fde1dfec94e96d609723e3c7f4d23a8c477b319650c997ee7a206088a5cb959d8b2799ca597b1193e43a75672395b8c205e3ca177df6976e9f87853a189f33f766a452f111e99a3fb26bc1e3e5786990633f9c8695188bc3f8c8545172fc64e4a9896537b44f13d63e5620c3129ec95cd94d4e267ca7fad4f42334e3a657c742e7ee75699b81856b1de33d4f2bd8402286dcd8afd5985dd38dda6c853ea73b83829b6071af5a69778d8fa0a5a0000df4facd723c6c9c9f50d612146dc229f071deed3258e4ef0aa37693a7c2dce6152469974694005e8d82cf0ca0f9f03436967ced5ca8278f065c9b5241d2d81adc1aedbdef5af4495a797975635c71180b6b3f802be08f2ab4ec7be3d159df01d10b33e5f766cc3c9e2637e6aa39f46fdcecc37dc04b45b81c6e113bad692a037ec392b075c05a7b6172be9cf0d154cce3ca84f5d78e9580bc31bf9e43fb6c10c6d8a7917c2028cb89f08d205e33a9d5a39a0ef1e61990dcbb64c06361ffe9b161a595be165f333a2e148522d02eab28afce3782403fbfd88c14e53cb09ec3f0a0f5038c0973590647958c64e34690ce0ff13396aa45329795d50901c5e984e289e2fc7e91c40df0d44422700202ab3bde481fcecc3de99df9609111c3f57a8fc39312c52ab761ca376f3ecfc7a9514192e98f7c89f43fa795931cf0970142d407cfdd8a4a5f27db8f6e1de352da5820ab4a88f8ac4b5c199e6e46fd3777d068fd97c5669031d58a83129bc095bffcf05f831da8114b1898bf7649cdf5465923f13b82098d6b033808d2bea2c3037e9ef25ebaaaf058ab69e6fa69d663a5070beabc933f5d12a1346b1b7cdf46e1638ce163060f185d5bd88ab73704da4f3854cdd3156a7f938441b13c616e6ad180d9b770a6a7a4ac6fa3798acebd24c8e0d3458f5a82791b50ed17eb0ef05c8eb80ed592f173f039956c67827684227063a402a37c009a5f5a075cf5c309eefc8da517054bba094ae7b0a1126a791ba8e94e44b565c12618510b9e936e1c15eda1522f0731424330eaaa3a9ffe94727f9caf8eb404b01b4e1071be6bf7e2e58513c193ed9ce22c870572fc3976ef10a2255c5980062f8bb9877b5048cd01b4029ff1c7d266b42dad9d02f8c89c3bd7813c02de27de1f3bdcf80f6dc4ff1c80f30d10375bc1684be8e9c818874c38575b511a2d80f9fb6539bb003da871dff26214de6e806c31af9681a075ba9ac4a4e07f7004480e4e3d8cc06a5398171998f03bde219189c0627b8a4a4f8ae174c5de721e29d7b9874f22349acc6b35e76016a749273feaae94116c4e6c9ffe62b87189e61051eb9cfaad72f2fe368258c4ed2d36342c81b78351348e0bdecf63a09fd24df89c93eb181decbe3f937b537a1be0221f7c0e257b82d679cdd6b26a099b2e9bc1e5f9d54f979409a7bc4f4b375f5a37991e046e9b33c01e6019fe93f6d80528195d9281e61794d87776914cdf1e4615dc15eb0007e39797d14fa7dac2e92c12353b2512a3099761f7737aad3a5ad7f764c40e8878ab9903b8fad5113a84603326fb237e8f2b1123f678ca09117ac36b505ca6bcab8c4f75d5a36bf8e856e04bdae19998a2b98fd3d68afcd1dc5e33a5c26e4e8506d05ef879b98fd23e74989d4b8df69c33217fde5e403d85c02bc9c33a8556f0b02d92abbe3a5edbdd6b34581da37e77bc816f50b6dd743e594e3548dac57aac1740fd08f416f113d6bd80e127cdf87e681ef223cb709f1ae4c70c81363c7e83f95f95784e2944ab1c0a5f4f15107f8944bedc669d38d97e2cfcd6862d97cbe3cbe880c397356de41f4cb4a64c63039c833b2e18570fe4b0610db5a9430bcac89fad4062783e22ed9716c9b330aef9b9ccadd78a0b543a5b070fd532d1b005612e68e6222e74a1bf2b1b677b1582196e8a062392269aa3aea91ea0a6bb96459e652c4ec505344058caec530598da6f423622dda7813b59c833eb6e666c5b8c2fa4ffe358b3d69f175f883883e677c159af9444959f0bc345fa81877a1602f9c65172669c33750052dc1aecff644101afa255dc7ef3c2f0f790b61a3062d68e475a75fc6abab80e6dc958c7cd1d87cbea87ba27d186f7a2a52ba446e25e163b18189dac6dc9351d24c7e17b725b38343196a732a9c4c6285dc10f3345d0ce3208a847d510fba7aa4b88fcd812f67310b11d3e7ddc1b0dd30b1f86f6ce350ce26846da8d0ad21adc2f62bc4832988f30a479716c2f90a6bfa0fefe75fcb08ef5aca554781cfbea1c8467aa45854ea026b9ffe1e9cf1db5f3fc48e189c65ff2a743883b99988e2f067ee3cd9f2cc4f841c10ccbd7b52508252ae30f12b7c7619c557385333d469204056829c3a3e3558604da89a214b8a66eadbb71d0736a0a03c44330e66bce1a5fdf4f63fc46f6664fc9c1454290504c4ae2425d8feb9577caad4e326b793ab688ae621c76999564a408becf26c31b5d150cbd78e50d3ad3403e285e96ea57dadf6fe9962347069f6ecbc2f00eb09499c16c4c4453ae16f9a782556ae567f922028c30ff88a2ccc92428c9f5abfb12acfebbdffb0f1f2ff970c3be378d221cfb340d107d92597c778657c8653c76bf9afd185e9ff480746d8831b0cbc34f7988f2b8316cb0ac02e9dee4149056067a912866787d5f552967d10d067d50c67959effd0998a5abab4a1e7f989c3a15a99cbd42e2f03bbee719fe14c5b8d917c60ad002cf75d5ac13719d1a01fa70ba83da1ae53afa8fa937840851ccae05073a65004541125b58c6f8d0bc7d706d704683dd046d5e7360b6669432f87205170624f231d1eea8abf2bcd611e8fd7c2c923d8cef8e1ae92ba3e66aa85a2417066bb7ba68ba1456de9d353a94b146a3631507f0688cc6ca406f7be47ee6cb9488c293c4fb2bee62763f2ccc7f3d7c81774efb79238b1c3902370e5e9d94b41e7d0b8182878712319b8fe856cbc56e1c8530c41931d6c2b5a980a64938988ed84e0706188a56acec67ec4ba0eaf881d177cc1cfeb8e1034fc35774c6cf9a65f30bb01d822e64401d98ffb936fdddd8cf0e70a482f224e0f4f3ccdeaa55a22655b4482ee23f7b5d3ee1036889fe5ff88856c0545b09f62ff8a54aad8e5c1964491d3a', 'hex'));
    assert.equal(instance.digest('hex'), '3de27484a9aaf9427b6d7ce9f23455da771dcd021a743b049ce85642');
  });


  it('produces the expected result for LongMsgKAT_224 21200', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('28109f1e97641e7c246ca9dee6fbaa15d985a84292ecaffe025f66a9dcaeb1f0f8cd724896a0bc2e6f7b1763d7c15b61acbbf13fce74782b8a7151527c9bd375d4bf37c15ca39e20c352b2e0b0d8474f904fca4e039dcd6e1e54e872a481f8e1e5ffd3d65257ff814fa0e59b5ececc30fb1ee1b73a87c050b9c0c8db6bab93a24ada3fa480f215e19f63308cec77d1bd5ac1864ae246071203c7499f03eabca4093058d9a98e26f29dd91ab0ac556bf1a6ed7649e5559d6e3c93254e6f4cd7943585d6e1502bbc6cfa4a38223b35eed2bf658448259f827830d897942a3ad0a8a5cc7e3018451e4fc884c5b7cc65f54ee75ebfd7c1d4c88c71a36341327b9772ceb9f8b7b4b725165011b848c2dc917fd5514182e2698f9ea181fe6c9711906d296ab9835db7501e2ebf79ecc4475091e6719c8c06599dd2b88670bdb8c4a28bddf78c97b81bd2fd673d5910e1247c43fdefadd30d92e0d9b6e0b456635f96fa477fe5ecfcfa9f94f5c1d766640c596298502b20cfb3bdfe7f3fd237fcbea947d24d0360776030b0b661a9bdd214764d0e70e60efc696b9bb63e3bf171c62d1bc2b6e53f941b3915f85fb4b9b2e74f391b5dad291fe9f9629e02fc3fc5395ec66fa6fcc5338d353cfcd409a1cf4b6bbea517ef5979d086dde35c08c885c3b9ee5c8c59284e10a5041c9deb7860b112e05e051655dc374271012ece9eac4c840d2c47469074b77f808189a0ea645eee5f5eec17fdcb51d0d1b2d8293b4c8a259375700c3fa8fc48a39cc8b32b22cf7bb714fdc7eacd7190bace15987c7f8674f30f4663f1bb50470d25437948d4353fc2b96e790c19413e9f28ec04a02b37cb0036481803bb6728b6d8814bcdd89dcfe458084b8c8495c4be33b5f02ec69f22465d5fac7d85331e8ed290787336a73238448271a237a34730764c2a4df64774ac6a2512231c54fa7d68fba4e888331fa28d1b4143a20cec2234524c522070a2f3ac336a416c079b58e2ea8b2d71188170b6416b7057b11b999026bd672e0159fa85bc0a1a2657aaa11b6742f121f08dc8cba4cd1624a2a33798d5f7ed096b769b79b810edc81c4e05c17b62d8b2df2140c5dcac0ea9b50908043425cee2ec17c3c3e522d1272969f1f8abebe82e1e1d2ae7b64ba14e00c17a6635498fd7fecc6421c89bad4cb78005eeaae96978bbfa2015b282917accea60b0e0aaa2cf1ed7a6e7ed0c9588d6a6c06e49339823c6180b9a1d0e6114c0de9d89eca817298c6e3be3f53404787638b2f883248eeef055c18fd476e07a7eb5f179c8613cf4df01419c1c6d6309bc53e214bda546f272a372b813ef083bb3905a996274bd0be73c9b79135d8167fa5a058a7f926f9f315f4f823c44ba6f2800e25ed8e1659444d3ce47f1a58e5011660b40392a942e901dc9ab949094d28ac38d1d7a13357f716511d1b12a294baa1fe6da6bf6d81b830dcbaca4f4c09a53331379cb6c42c3ada8d61322de1ffecbb1a7afe3279f6eb63c8f020a51925862330451a0002a6e1755eb264f3c74fb62dc92e9e6ab822c8762cb9f93cdf0659a54a5696ad13ec6cecbaedeba6a41323d7540ad59250f1fffe616dde671d673e37d4a521305e47a645576d6af9a6991b17f3c7119db463a76ec933f05905a1dd621ad15775eb9475eb0cdeb6cd93acc120b396782445637f4f8dbb38a3aa17537d9170daae4e4ddd899b16168a2f9dc4bfdf7a9bee07bb9f7c312efb78d37ae437392daa755b184fc51100c54e82fc1792aa87e58778fbc150edcb8c9f337227b4f6ea5837df8a08719789356281c8fc7ce0663eac9ba76ca0ab589cd3c5a82ea2a1a996d2cfdb245f1908ad74934823b9352ff0939ab228f6f8c59980ccda984c212a0892928b88dfc52c4fc34997a6f0285f451db3a1d5dc4c800b33a6863852c44a2e675a98b38ee8526fb794eee592962a938660e1b7114abcd42924ca4d70045807c50985565efe24f3303987c307de754d8625a5b7339f054a90db37ce0b9f5ba0595425b26712af4435ab8082ae5bc1b211fc6ee44262d26d82a88e662a47688e3de67cf825bc62e1b3e3f625b5481460e0bac451db6b67f40e9cb6b87c77f2ee63792305eb697b1f2f7573180b852615841f6b9dc8e5be40519e9c2c782fd0069b8d3b2aca33853cd29cdb1fec735d266ab25efe2a0fd47476e5cc1173e9717bf402c02843e56bc70d956a3daebb0eb5f02a4021e6259df33b65a363365ab7eaeab3320716842e70a86d3efa3550c59bc0e14b05e38ab9c4e38fe9e7dcf9b3002ef850b7899a0e17539359ad4322d1d53afbf9ec45e1a637e4f0ba10d9d3b244cd90fdbb44f9e7200dca987b1a5e1255c833f3f9d5af3504479d6a900d3190664ab93755478cce9a160ad793d2061fe3bf8c28e601172d2b4685d517083148c1368c4d853b3a4182720d47cc7363d9561ef31f3c108bb9f6642a34ff38846f38464771f494347839ab072e8e9b788cea50330ff7297f9428f97d095f776b9de590e6550dfe2f33273a36d6a201103973032147474335a63e83f04d7dbb940f38919bb45fcf7a4d2ef846eb24fdc4da65de53e2922ac07e177f0fe1e65e82cdaf8f65948eb1eaa031f0371bc49f547eece7c4ce905ae97ee7dbbc78ab347577ae3985121feb81100d2be2e5771c4118f240eaebc3cedc911ec7588359da18908ee3d8302d5e544381b66dbed785dd684cd0db274e648adfcc36ac870db8689dccfea3ca09711b0bfc32c8b7f0676d65d63761422f077c9ccaa2ec80bbdf742629efa5d9c4ce5b3238ecc05e1804a7c044bae3bb4dc3ad6aa3c592f71da7f548148aa11f352d2f0d09b84fb8f5be629c3aa7c68d980294a6a172669be5d987588014bdc1e917463b829ed623b87bc5ff20675df37be0197a5e2f48891e6cadd2ed860ce154354d4854e6d08f0a28e673c7a152ff2feb7634f0085fbcab1fb205ccf3660fa288f5d214212343b5485934a256f043396a039539cda52db6c47a3ab7e2374cb2870e14ca6423312d2a9c48f67352e1ea2732707ca11785d8c27351ca769141d2090e79472645af2729c158479b4d138b1bceaac70ab7dd221bd89eedd8e153215e522c837d7554f45e8877b6544f7071d45e7ec545f7f9bb27db95e9ab2298c8a513d2a2ff8828f243982fdf23e4829d0fd811e9c19e7b2960d8c976e3ee653788c262692210b5d105c73268f92a5b2ecf6c283d85874b5ae3f37bdc520e2f4175fcfb2175c57f46096f9eea1e0c76080c765c75193a9563ed5ad6e0aae0ab0f3f94459ae4b9ab0baaf302e70c08d58c1e1da8308fdca1bab172aeb07d37e79afee3f3067ddad92bd4f51f51ec8e647b212ff0907c9078cddbd4059fdf22350241ca508935442463a6c23ac28b2c2a968a7db22e8e7d4cc9dcb3fb11797439cc0095f45d21e075390ce3483dcd09463a4e977b56ca19ffe4c6fba28874d96ac2c66b657314303aa68839262733e903f074a1463a2ddc8ea016f6802f917614c3cf44dae4b4f6e78f50621b017b6d42265997f596ebfd7c1388bdfef983cc91b9f98c17f85c100cb37dc40c31ffaf2c882a271c7f6ddfa94bf69c7e50cb6d78e489f6ddfd26e34edbdc9a6fea4ffcb7678fa609c8d006933f4becb85283b13c04c6a27a89b0c2cd27125dec2c49646496288ebb162cec4d5a30e3b83a90b54ac61812a908014f9d22ca21f98c12357028971900e57acf8ebf095687e2d', 'hex'));
    assert.equal(instance.digest('hex'), 'ae5334fb2339d288d373f4367325f6a06a3e78169bf81b3cca088a82');
  });


  it('produces the expected result for LongMsgKAT_224 21704', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('06729047c0d4a7b3020865f527f0657ea5397eb58090abd01912c485e73854aa9aa0394cb53d53e3d240d1bd6cbd1e1e353529cb87833b5f476483e684f11748d5ab7a1f18f5b76e5938458486d4d5b1fe1af7ec2a139cf5c4b755165e182f23b9e69ededc39375f0f87b24dab233049db0b34627d53dabad0ac3351fdd94010db51ad3182f1b1276c498296ddd759adc3384ee949e4b2b6412cfe3e8ef769dcaf76be4b2fedce054515ee24f7601eb1553516187954bc0689ef278071ea7b95d58e7ff2116b450728e47571140ab10a327c8e6d333ef044dfa10866a82b9728d3f5f343e1b33064e1e860881df05d78b77b1f363da7d3ee4209e8e2426b6969b5544afd81343faacee915269c6d3b12c22f2a5fa4e7a518c5539228373192f85d8123105b04c2866deb8967e7cec3c0fcceda19fdb84c72597e0edfeec620f8380e3cd5b5ac2053eae404cd6052aae7bc7c666628aac1fc722244a6e80536246c9894c47bdcda71c239e2fd276e6e041df8a930639f7993300d68fda7e2eacb310f49d48049a8b6b1be42fed5bb26179d6e4328e60411afa7bbea122ea9037450d80e5fdf13c93bb7190bf447e3008a34eca6eae08ac71a5446bb568d4df8ca4512b9bbef21648acf2dfec95cd2d2985c97c461da651c1c87dfae35668c008001017a48292b4b0b050c00124446594fb27a418e3549171d151e5794070acaaaa97b88045aeb3bdffea9cb3372950cdd727350eefdf06e7652bcd1910312b35f5d4ef3b8418bbeeb52657a36ccb7979ccabec0c4b2d22014f60f0e847ded96698a81a7f2f3e35932cc5d34d3a5ec366507dcf179309c1f4de6018806284876a96cc9bc54fb5d9e5b3127c74723e0c3af1fffb01e4ede2c59413f1ff56f8346c71e30de5a66fe94878c0d7a217d754c94a7c3acae3ad264a3d2c7df93aa29b4e0a1ab966e36fc8a81cdde9c492e4a09a9c61e63c540a457489c7ce6d9ef3046c77812b97237833da0d8e6da300302210cc009f39beaaa0ed1aa107ff0c06d210ca678acd357709b25242da3de144bb397d9a3cf8441039766407a67bc9297c108e7a11e98b09046b4866c9a912817b6568a04ce10f43bac7bf211daeb90ec1a281437b55f88c6e883ef9a271d8573eacd965360fd8f84dadd72eaa12377a7e1f47fa49bd7c3961a15ef5c311ce62ccb43032cd86c509a100ef8a250ee84b9f7f9730196a86adee92fa93233b2e32c87af90915b23b44cda9186dd51eb9a049c478c2a5b363831ac5fd170dc84312440aa8c83b7fc44254be6f4e81ff2d66f57b12d78905b89600e537754a46cc5b6c5ce2b6b04f8d6f1cb60359539023bafc78aa0e834ba8709433f8c6f0add3d4d743f4b6fb484c10a4267505097082f30ba7db81bdb2476cae452b40f67409536141428b264cdb832d1d611cefb5d4d1326428f9778f929c8c182346042cfa5faff0819667ef4ed29e8d92279a2999545c3335285f072dc952e7c7fc1116ed0c5115c6ce7adc993c23a8b0c96c2884f70817b5c9063c75ff1875a7b080b76b9aa32e6f7e4e8464afa40f7123ac79c45d88daac71d76f795f192c6cebde8c99f10ceb9e90f022e5801a78922f389725bb236afb5dc28cbbf1c9be9617cea56c80c531bb7ac227f6b996c68583b74bff78ef44d185e0d0e5e9d6f34b250dcc4639e3a1a937cdb96e78a217e03ac900834b4abaa495c9bd9dbc2c4e85463cd1c6d1f4d8746ee4b58bad78cbee21ca3e53e6b6d42645fb96c9417a374eb62df7f7d23983b53e1da754487f3c0711712499daeea9e6ab939cbebea79d5b9c7299c06ce53cc8b0c8f8381e04c525cc691443318b70e447e83f485e18ebe4524df0fe0f47ecbba87eefe4f709b7c84274f037e89d3e140dc2bd608f8bcd5f51b3fbf4ef93edbd45aa7ae5326d18b719a5dc6ae91400e2b6c88e699c9f9a95babe33e98397f77fb0fccea59f3bc02a479e6fe1059dfed546644dfbec3f20fbdf4aa53d025c66dab24875021d7934ecbcc0619aabe7f553c9287dd6fb916d2c5b8da77555d91597d895b9f8e0c601ebcd38364c91f28445ce09d445a9e71493fe35ff723149e73dea9eed1e19517b5a735f7abd8d92d45472eef1d2c4eaaad6fdbbe9570950bee94613ae2a934e1a2c7ee899f2861ae17bf8d60fcc1005abec7240c7ef98e7df442e587fe2407cdedaf6c4ad725fe54ac880a47530e08b6452f5d9d044833cd117ee4e1a242fdc07545aa74b559d394d837e55ebf07fd2d6771811df95791e293a52a972b682446a29c4ce3e02f71565d537d12eee21e1ff558c9b74fd4914c6684ab897d9c4fcc4a5f2685b78a8162dc1bb70203f5005acc0257252e0ff9efc43b102e09e9221bf908b83b497a88ed83d0db7c8faca741a28bc5a910048764c5098aa7b419f24ae5e1e2b013405e3976d938e781fbb10ba679e855d2fdcb772ee96ba264208cf4812607ee0be58c307568063789ac783ec937c68607c87cd00f34ebfcfd2635e5c6b2f7d88469fdf8723b81312d3402c1ae85c3c12023880940595175d586298d215661a38a363df4263a51f434362fd5a11bf69b121065bb08ceb2daf2d9f844646916e4a2afbaba77999e7664af9670cbf68e7e4b10834a52ccf02e45a431e06a2760084475a74c4c66f8ff90f34c1d83d70ef8d6a3790a6e3bc9d816f1ab038d5c3140c8f36e66d3976bd831ccfd88c84e7788cf2a3246c8153a27454b0e7a3c59e292927f1dc04ee81e2aa291c06c8bb173b53fbf39ecfd6ec1f57a7478e37199dc39d058283bd046abe25e91422b0b25329d175a7d0bfa21e297c96a5c3f1979af84752a2fb67bcb0511b790124bd96ed13749f1e922c4ace355db866011a1551dcc9548eb46b961feff4f2851055833bc4083ba712e4fb9c30c49928683ad783fc370393a55f904fdef279c0a4e1dc9e1ed7e9058fa5fe363ab1e17a7242d0921809ccae1b9e5f28fa553f7ca3e58fcef7baeb88d03da5e2c06fecd357c12cb04c5ab12dafe4d68ad3c7aa9302c9e2e6e4b86d1c96c55fac6f7b63196a15e8182c1bf0206119d67df749e1428b3fb137ae7c6ebaf75a0fc64163c21c44329cb4457f7d4f36959e8a93462aaf1bffcfde02ec1a2c7e67891dc64c1eaf2a44dd7d8ecfa5f7d596c2c66c18a4d8b07e1909fa87884816f514ec17af286db0fb353befff94f810942b56062a4a84a45324773bd26ed4b5ccf4e10bf715110fdac5c4c05a3ef4a3134bc9c9a7b5774d50dc817eb6a5aa3bac029aeb5505204db40811f69ecf17ebc206746d7faec59b26170ff23ef456235a66cda3b84188495771e53421c725671788633472365d474167a0bf9ba7b212bc6fd91c4210570fa3fedb1ecf6fc77d049830eb1e991951df439dc2116f72e9ae1679b452088ff0d8c76a4486eff15ef9e7d80e529a97b368700a4c6c78847084505c8d9177f08c96fc4baf5be3f4043a21b6fcc200e7f59cfc8bcb71a1e2fb9d9ae85414d92d09bc6e2686eda670eb5e903fc9406ccb0501f8bfa16c0167e2f48899bd14258d59e58aaa8f450387c9d80f66a6f9d15fabec9ce121866b2b6ba09cc93165b8a567f86fe0423813d7a0b9acdc505db6fbf6d5063dc231be1e2d801e80dcf0a82d3d8c98e80e3ade2cdf4d8ebfb9966ca1c68fabf0e3136380e6ad17517607e2a36d41017e60ec0d20d6b17e5504493c94fbda647e3c2195379b98d84c1da0634577dc5fbc3638d9433fdb32f7dc25e52b621db7f3a0194f3ccbbe51be61b55b4e5d27e0bcb2712f6cd3a29ae2c5c8f9a29fe836c02b6e9086aa4d92c57c5aa8996f4561f', 'hex'));
    assert.equal(instance.digest('hex'), 'ed18dae77c7757f7ae75fdb085ca7f0d5029360ec0de889d07090bc5');
  });


  it('produces the expected result for LongMsgKAT_224 22208', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('fa8203123566c334559f12f1c37181da32759d0ac6cdee696610445da4484a51a867263ab6043ab52c6c097346d5bd6c83a2519b28d37844ae1dbb55cb8b86743d51881d1bc810f0e4a9e1f589d8e4cecdfe5859ab245a79e0d8805347991f23ecc83a307871c3d1a22d6bdb2a70dda20eeb51496216adab2cac4bc4346053a41a6fac5cd78b5d2c51af83a754f8f38c0ca7eb48241e34b738ff4ce7421471f8a792e36f32c16e067b85562bd752ee5e73c7920df08f1090ad8cd251874d1164e15dc9c131afe318c4caf04dd044ad068ca856eb44f12c057a676cf2f5be9c72c74c4709ecbe90a816ad2af43ee892addedb7089c89da5ecdd20e7bd082ce5485d559bc9c771e49f872339252d66c368c9e94f4e23c85734cd567c4de7ed49f92426a5d38783fbfcdecb7ef62adc5319cc6334357c2d8389da870146326b1bc12e9f70b3c2afad6c4f51f710dd77663eaf37c101700d64afd4404773ab572a244b36c32737fef7e168d41621123078af025f4c25aaab8c9c844e7400cd2d8e43b3bc621db1592d3212e276c9a52ef56b6b4cf39a49673c483805d2450cb2ee045e3b8b5bbcf7fd413e8d34a8716363eec48f76f54b4f2fd08e81c11997c5647173775d2607ede1743e2a22420b3c87eee4d75d14343c8735e2b6a7d276c739fcc75d3d1074c43efc5a624304c4cdbac9f123120406150d265d36c5d4de4441c7fc637fa4b4237a403a5415ea01acb33e5ac6507dbcb0e357245916cfd6b0d0e35e02ca15580d52660872b6c2869c4f1da49b600aa3b3993dc569e35e4af380de7400aea928e9d25510b3bf9aff507cec720068d4721f42c8ecae2a48aee31d0af6f844458c441b93b3508d74cd43a44033b7618aa4d852baa420cdd6b7428a8401e1b53ea2ce33b3f09991e691e53344163b2a8835e0f90e83c7278f9a0d8c64200c502d8dc1ae1b96f9947e60690032920e795950ebf6642cd5421cecd282cc470fa462083e221a900140bd511e616aa7471a7526180771b803a2265021be2876ae04e4e4e86e830452ba79d4306ae45c7fd75716c6131211904f72e1f52d3a1de2081770598628e33e244d93fb971488823da9729169b699922876818d0d91848a3ebaa785b7029915f3d9238a4151910a88e2efe6f41841eb85044443098322b0593826f8cb6b0b76e53120a004e913ce42e448d4ba1f2930849185e7c8e029533b275aa4c1b1ded8d38818efe9535f4d0724a5efbce485cf493ba53f619b56c251465e8a07f3a085627e13d0e24ee6157dd76f4fb2fbad7b58396bae6919069eb0d32b8d57f933e6059fa2ff062bdc7fd86cdebba4e206a4c3cbb2a868d7e09867d316c8801a39dc7c71f2e7fe43eae3c1cfc71e0ccf8ee9465e53f936a9ab608f29c9f2e0dee8e450cd42637785cf84543d39ba6fdab77f1c93d08c5d5d87419540b3a510d04b029888d0f2fa64cf5a62edb4db7f4a8fef45b8d27a22c68952c405984ba94cd2fc0d79db81a70bfaf9237df9b86f3a7e3cd08d4a1ce6b1e25c3bbc5b206e4a018070f0b0ecde81ca834fe21162cce9ed32e1b507fb5d93a625602e123ed1ef25b3c291791c56b4500fb7b12646773b1f59e204193dbaa23c9ae79b293132cd5ec9b60965280ad0824f3e4a56ffcf966f6b2309f3cb78ea7e4cc587c4661a10d1e22ab268091e95e8702fd20db71d73a6b9fa6696a5c0c8a67188ffccb90696d73d8aea1d9a0c0016cd449f9c9dd18da90b25d182f556df1857ee0b3e48c28882b110e20c9c9126ff73df840c0a3f72474a14c91679eb5f5d9a2095a5acf1015598cb5de4294b4a78c7e5818c8f1323234b04e79c5a4385aa429cc3bb41255be8796165ca3b2d0addca422fe8ca3c75892abc86316b2eb93d6e75600668e8afe99dde205efafa472bec72cd312dd81570154490931613e8f0ff9fb0507de56509a3c2e7c97c3bbfcead923a3f2ff11dd8b052d154c220d44e7b2e45bd652b6c885770e0e486325f54fdac28ad7a760efaf7c505164d520955e13527d186c2488a8017a530e02a57f61b5c5f373907714e6df708d47c9923b70082fa641ce2d7b9ca4f3087d8fd88d2ba1533cc6751506a64e06ec92b4abda8de2d75b020b2c0113c15b7fd92ee8494b572209c0b4c614eff2fd89af1fdcf489bb5bbb7768aad64ea49a7dfd796ff7501d75da439028575ed0bf0cedb1fc71e68e3c6cb3da3cbfef8d12ac052cccc1de46bbb43835cebd9a1111e83d6179e6cd10f67733eaa0d9bb166890729a48aba05ec7745409209942be44a278486f38cddb6e9852b0ee4ead981a8e8bcc46ef25a4c07f874a887f29cd61d47c38c9020a0f1f2d4a1bdd3c0b8e2c53c9b4312b54ffbdf69480b2a3707f0cf89638d7b7679aa91869a53664b15ad07efa01e718871ec9410a1486a8dc2b41ff00df7fa069a6e68a33f27a2ea0ba4a3191cdefdf2349be5df727b7354767a299faf5e87ccbeb98c4af036898a80b5c485881645739fbc5a76c3934774f6a078aef28183a0148305f8c0891832402ddeb993e1ca0eabd52d2fd5c5946a94b23b057b85931b698b46f68ad885800ff25ab1b5dbe42661faa902074a3d45ce02fbde7c1c38013b1000d9cf9c2f4226b5ed1adfd18d676d14e7b1422c6321c0fa5171933041abe963db07c06953906c051d7ac1d356bcc0b800a7d5f19dc0edf4d0cbd16a2254208235f972f59e71e410bb6d51a89e12a33979ba6a6f8f5cd5c1cb0329c73fdecbe24d66c6b5d5a1125d162a9b0e982bad23d44ef9924c6e2903fee8355223727e4fbe400e86e4ba8282593695018f50d96b7d1f5f83066f023bb7d0a568d0c396661b876a15a859ab08425ac1cc1563c7a094bf8d9a348b2ebe8cd8826c252123968aa90d9404be82019df5ba764d5e796ca43f5bcb34a1d4f908e7966d89833e5a0e8b00a9c0b385045cff25af35c4f566492769189873ba4380bfef1ad52fa96ee049bacf892dba6dda605c1c00244c7c597543fd2b6aa6f0f044ab4a5219588d5480e759ab44e79c5759f1083f68165d42da6cf04d16ec0a71400c1c6a50fffb06a06ac0fcd23f05ee8431519407c470da99bca4b11ec233ed32c1b1f6e506e34270c5927f8c34cf30833c94a23c0f90abe0fee43d0db8bc56eff9a00c403a4c12f881119db8b7c25905161f2030efdaf80864880f6f93c50b7fb74644bce061c20e9f20dbddcd98e63cdc69e0f48a0497534bf59c06263108171d5e480f0954820634349d5bafe9a4e8d96ae1c29c46c2895227b04a4412993b8b6bbe5d66d5d026635bcefb162a53e484a9d9173d3a2aa60e6024429340b34485fdd68b077b13f4134caf6dd7f38689e4936325b314223c684ed99d50163646a7b725f321c7bb60153f40e3cfece9de2a263f3a1030124832336e12bed3b81d99f3b6ce3acf87bb1d57298bca23bff9034076efa9a362f30b3b9b3e2ee83b455d8a63deff545eb6341910c767ab1fca2960c724915db60926ae6d40f5e87ef28db3a133b69fd673f6bf1088d727ca8d6237d1055bd6b1cda4e1bcc849b6bcff9602aeb73a3f59bd3aac6d0e54e9d5336fa3bc0c0fd22782edbb0b9b35ecfbd99793fd910399d35e0809f16b53597c24e4841fb8e7ec3c4c434b9653e0c1f9d859dc9a365e461db6827c2ad1e07c6130da1b84abf31a76084bd7efb40f302de75d62eed0eb4a2985345c85b80ae532266b39a704d84bb16e9a9faea7b3e7924306f650c2f338298cb38f07c04b1f41736876799c0d17c487bc5e0047e8534ed356c6f30daf21610618d19bf1000bb8860c279b7ec27c6270709c00e3ccf78bc95cd550202275013235bc2b3f0e11791d0f87d125b2b1775f4a866daa90a7ccb1c7d214b19f022825aa0a22db78041250f63b5a683dc9ffe76ab035', 'hex'));
    assert.equal(instance.digest('hex'), '62ee8fc4e772f3b2c505154443cca14dd4ffc8d4f40f91c7c4b8c5e6');
  });


  it('produces the expected result for LongMsgKAT_224 22712', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('08944cb473b828b118a31986db67fc757f238182e790553404b792aa4f0095a6a83291e287cdd16521a3ae8c48f56fbc909dfccfaa7bcc570c2159f26592dcd6b15bc4dd55cc05595ac634b2c3de15360b0f07a03b5957bc9333cc5097919399dd9973ace15e55940178c4c96bb5e0a0a10bae175769548ebce11e0d7d9db29647f197d4b87f7039f5d4e59e016531dbebf55a797ac9a6835032cdf34240a7ee7423e89c09124829cafc5f89431c8afc54fd979e50d48a82b47a53523c84b6004daa323efb708203e5388a6a5110c6ce2e341048a65fdeadeb3837a03420f9faddc3f02a544f1e46d96b07c90c7971a7040a179e8198e90aa019268e00367120d5f3d98a5cce82c885e77144b1aad66ee682847776b04f01f501dcbefe3903080a8058b3b8f1d823d917ecf31fc2d5b0795bf95a55c7093eca7c801dd0bd0dbdbede7d56513128b29fc0b4d25a6240b24c99e017bdff7acafc8f8de9faf5a2944384aece82bea04dccc6d51fc6e6f27aa38f131b7959b13681a09b311d242e6222a1ce5687de5c080508b1db16b6f8290d33a3cc0d0138ac61fd9093825e9d3752889e9f20db9f80f92750eac88b38ac81c0016d40371eab4a87e845e91446b0a07081b84f559cdb95340cb020af22aea1bff2fda12f7a42973ff163a1c6f33db8b8214ae27abdf1c54f5b03e29310fa210125e1296e8af93a2996dbaefbadd4c51c2c3b8a3e2bc9fe060c42ba32768f6992a99599206cd2291ccc5bbd50856f7f8d2d0ae1efb5892c15a799b77482de4553736b162abb06631f1688f6746e7d7a37ee7ef24e6cc901175f04960c01990178f81e957e941deaac8846b3704e24204f43ddb0765c433f3f7d4d201459cd65682b7ddf3d47e95cdb31b96a4cb22907f08ba6e92a4a07703b2dcf150f922c4b7cf181380303fb72547847305999c3c8f9ac877d05d9dc4159deb8a13d36ad1d533a56950e20f906d29d51ddc45bd15c1773991707480e37b827044bdc6473181b760a9036e0d3fa491c2f08c55130d8cdd5ac8e97d0813164af3d28a585f0c2ec7004d498f95c6b62231a632a56c2d0c48fc3a6992d4051957b9ed6d9a86dbccd962a8883cf82caf01da2f51a203d56b6089bc8fd0b1bd414c8063031ed469555e22ef872689c130b1c101034d572fd8cd0eddabec9ef1503d7f728b0941efe2b9512438c7ddb176be2ec2d9ffcd56495a4511428df02819cdda18d1ed5d3b16c6f42aa0ac681a9fab51e8a1a856c15c51a3ec1031427142ea12543014dd4acac640b8a7729e63ab7df1051112cdefd4b988a2258334fa9a7f5b3a87a02074b9f69dd81b83fc74089a91d76aa4041259e80fa255f2084902aeb9e996ac2288ab464bdec47aab26a28a2a8194989755d48fc9a5c9279285f2f1dbb8b8018f3e4e13115d78a879792e45a8f4f24ed4a317440ba63e6929056efc1d2529b75a709d6c0097dc2d97f646f334ebe6195ec5630132fde58e25dbc17dad822d9fa0938a2a2c926b105d108403dc29cf371c3504ff73bce9c7acf9a74c4954ce6a32da96b21cf3211b3e49953dab78c49c3e532a349003c59c62f7d40261cba63a9ea21c89a38aa63ce431c43ae261c4d9999b1caf491fab8e7be6e8c3454f1be8793b2d27141fc107da599a4694c41353d7785c05b5e31440458d17c6db66feb8a9c5c073fb946a67ac0312bb669d9b12fabaa5272ca6631379ef4ed420a4424a5cd08526384c047c33a84d5d7dc0c2153663b54c73dd799a3568c01b818992cdf8143f1dadd6b50cae6eae13ac66f31ffa2b362cc4d2880592b7fee4b9e4cd6aa5e5de27aab9b5dad9f7d39407ae927530cab2b61cd7394a21ef47bfb813b5ea6091458d239664923280ed0d5cca8285bb2281a2f9fb3ffecc8e9147e1e8fac957d90c9e5f513738745a47c2ad0c31fd8986ef3b6388c6e821f166513811d547ab4336b5e04643497fc9f8d6e380ef6478b82b6e2f5f65dd98a63c68c32b94610e1d3b9538f13a7688fbb1ec3448be9bd77bb93a34546172ae8d614f85228988e7feb18c9a0c9827699e8b3cbc69750bdfecda8268f694f4c509befc1a1166f85c829725299d173f867a300987a2d36d1bbbe37be3208fb8efe9152a41a5f0e931b6382ff7f9b18937958fb180e61f2a8c28f36c3c80c3722935aacb81c24aa17fb3e7a1026f7031a7449818ed62ba7705ca27c2d3268f90b6322921683dff800a306cfc186cf2a61b37f35837b217e3b2cecb0843d84eac67431e3d689f01522d4a4c73618b7c2965c9dabb15c0be637d10ceef72271cf39a7b803b41767bc34433c3e6ff449a439ae13da1eafa038cb9f2e1c84f1ce39c05df56fe3d7b82386c4e628b6e27cbc5d575c66ada3510c246bd04db48f4afc2d7352966da2266c2bc9831532f53655d8be42b421ac0d70d8ad1d3587257886dbf93668e907e861ba64f45999badb0f766eadce5238b5ed397f265935194812c03c5769137bac97140525303cf48d65f39004a3f59b1fab09895cee05335d15b9b12265892f4abb92ab1dd2002ed00cf3562cb67dfe1055968e4ab3306bb34bb87d0f64b26848812a2f7b50424a21ff94081a7f70f7b684ab0f092b2b085dcf84ca38414cf7290f607bf79c37ea84253abca8d4184d2dbe2e900200b81479e1ce8b71dcf2bd6e3c557a8e431d627ba669c2ea03068e0f7ea62c29777b22142d7a1d451bd541ef8ebddbba4e3bd8ffcd340e935be7c66efc14a13ea48134f655b0de3180101f09d204c379743a357e6df1268b55a9f7524398ecf3a59849a27b142239059998083e8fa91785e91c4d220b2fb17e3389ebaa384a49d89b5d78136dd2454f06cde9837f096b744d53221127869904ac227cdf30bfea78cc5545583f999b9c42a1184e2fb9ff3ec095b9da0d138205c4eac4c8c480c43153608849f63e161135c79d8b6c9cfe9b8dfd8afab559d8b595ddd43835033b4bbd391e028bb2a60832d9b697ee61408f149744dce71aa11bb2b0436c1e2626ac3a27cda293366b90b9cde2d927855130758d3946b867192dcf3fce9a3b9a5276e8c37b8cb136fc90a6dc22650f95e796a9886efd3f424be63a66dbb1041cb3d4a06f4e7eee89f0b6d15c36f9ea010c66b332011c8888e8e4ab2b3ab5223191e1388613a0fd0f07c1b26d7cc7cdf1ac62a226454d6291b431cc3ef2db2b2442b37defb942117fa247096beae598611b8104f37bebedd8bb8b949a89b5bf8e228eca1d8f16bfec75a02ffbb4eee3a6d4a6087c43634d675311e72a9f3253bb5dd364e07eb4b9c84f586ba267baffaefec79e03b83b18595fe06d7e063ee604ff287004d141c1a43af0ca7c5651d98f633fa875b4743353fb07bde59b6567ae25f7095f1d9edf30570e2f7d7ec194216898d910f9e295a41dfee072cb56f914bb78cc9854129250f9874b63bb3ebe9a1cdc6ebcb0916e1c440354ded6aa818f2811da913912a21d3961ac94a39f0827d3a419616905dc45842c8e69a43004b8ae922c8de1e8cd0668674a7760153213835bc63fae4f8d65614afd74a34d42abad5025b884b34639340b45d49cced423771916e18aa077291923017ca50795f3b7a3f349a3d29923833ce57801c631576e23b838a7767ca1bda92b82ac502db3688ffc83c09a4e40cac31d20d9d32fa6724a80be7091cde9c7a6560cfb326b467caddb9e9b7a491eda283efb0b61b4a1116dd859d5c0897eaa2a3fb2cd82ffb33770bf9e08091363b6b81d23e61c2a647d2be440c5c79ea89690656d9f10b1f07942834e1cb6e2d2df106eb6d6a21fa23819e65028515e88bd279f9317beaffd394ea51f8639371c3a89f11305a4ca35fb0711f5e2c7c3dd1659c790245812113204b4ed8aae9ff09d43c6ddb13f5070d98831b2c7639fb6b9b01c288812ddfa8861db32dc8268c07d30cf969953042b3dad530d9d744c06aabe7a886c0fe57b09b7f42d193fb3e9c06329818251a2f7e6474462c95ded', 'hex'));
    assert.equal(instance.digest('hex'), 'c1756c010c173e999b6cf11e3b6bf4400c8c866a18c2673a4705df79');
  });


  it('produces the expected result for LongMsgKAT_224 23216', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3d85e0037343fa076ae1a5ac3b9b3a299654a9f52e73312113e0ebd78f4b599848023aa97550dc77c91dbfc922bb965508d5cecb139153d6d6faa4f8babfa2250d29ae12bb010d6d3ee71f910773a15283ac916f8ca76d359ac6b654be15cfc8edf2460d0e993d1df5ed9c73e95d357d3cff052b3f4ce358f96a631f0f7be4c1b9d88c7e6c04682ce65cdbca2c4e9cd05d2f51027e5e992add31026d37fd91da8c41a33ee726fadd3d516923c6cf5849e5842291039bc2ea94d93b2a8ac7fe7275fe868928f3fac2beaa44f06375d8b92cde7c403ab9f35b4f0f34eb66a5a31dda32df9dcd77dcb040a6cc127fd109cfd54410d7b3e4e8498b04089400d61f0082ca48a9d1d9565487d708756a9b16947e9c05f94078e91c565a56c9f7205ade6d8e9413d6dd0fc8885fe01ac7faee3605e22725c9a52fc1dae92b110c38eeb87729a9bb2263b6d43ffaa57abe9c8438b31d15cdc8d80dc81372b4d98154937e7eaa0eec0bf9c71fb77e2f7c360b64112ac8d8fab5b574c21fd31600d341a9173a3ed05b0f417c18c58e526a010ec9ffca19461aa9ea5f85416d029689afe7f69836f89d1712004b8c79020d6cff0245c7d4b1c196750d44527ded407595a7b28ee8c95a85c6ced826bb7f61d8ead9e0be20e67d30d5ad6d2d4dcb38f20e41cead521511754901f10831f8ba88679aa42e9c47308bc5a7f3ae07c14a8ab992cf07a26715f564b11538e4c441a9ae54a5a8271b66966c2c9065a4eaed9884360ce60415e953bc31072b4b2e3f7579d6fdb70fc737c70cf55ea5f72743daff866ba482199f8594d6d72e1bd07bb82476ea95b7df9243b0013542ec95af486ab184bbd93e6ecceafecd1a64eca30468129683f150657ad050014901d0d4ef1005c5b86f98f2d7553fb529d7524c3f1b27696fd98359355cdc39de67cf18d8ef58653f3c0499e085a8f9bf555db9a1604a9d640c09c45d2b4a8d81be369349389aa833356338584704f864f04227536b5f95819919c8360111fa2f1c9f4b275a18f724647bdf2a7830bc0b6af386e9b5fdff023116fb4e220e9eace1b6e6b4c68c1c7dc91902366a6cef4c4163616b85db15c3d35733727214b17a47a6d9c5e059cd0174b1e5fa764ac11d1e859b8f092a4dfde12543e5ac4c27e396183a63fc0a76a52469145ce8b01ba733c1bf4ae0d3da35f5b107f3083cf07bfbf0e0e76b3fc7fbf5e515c6b79403523db6d668effcec49dad419669dadd343870c82bf5b7624c06b9f8dbe66e49a35495b0b17c25ac814a0a58e5467dad961349ccc2e64c217b8c32dd28db4b7a4d8fc841bc1adbf9f1e3c1f871ac9e3d03b0e7fe25aa79391de961b87209c6e41d73669c3a8883856403736236317247f332bc4fa1b14f19878e2df7925192ad5c4f7bf431a01a1572da98f2b01d1846760dbfe3e387357d115135f1df6e4b1385da5e591e0ee2295858705a2f16730b0cd7468c08612179e3c449f9977c0ef6688417190d7361bb94c4782d67b038c225ea703b8bc7309761561bbf1a3ae4925cb0e8e33331615ee3f0662641cef3942f9a003140376393c58eaa46f6e994a375369277331795d9ae7055d4dfe87ad41a843202e598e492011833525d2d568b699841e6a82cce59b51d400ed6f896c271194f2c8230e271bd21ad4345cb8cd89badea7fb6188b0167490e1493264b68bd995d56c93e6951ca8c554b1e0af35850377bb87c13bafdc81e3c433ff3b5f13fcb5338b31ee619c59eb160e4e6e5185ed41ecb18791e6aec2dbb898c4f951f7179b3a523a3ee8d75bd375f03a1833e5046727a501178e8eaab4e25a05799837f1c91ffd4ef364ed731f39ac656371cce01da73a85595ab9ae3ce41e799ff94c676a4509d774b720f38c1d924d17b09eaa04835513c96530654dcaf00521b8a74e40774f146b00af65bccbf477b58de528aa2bb793f47d55f4f2893a114eed09f21cd79168c52134fefec9a79659d4ae45f28a56a6e65376188024652c0cbcdeb6dc8aed36604e03dd61d4ace9a8b7c54ebd35a19cec99c788fa02e45e5aa29160c661051b262080841da9f3be61ad421b4cebe7eec77d0a2c2f14658109cde4741a8f0967d3e69d95e6909098a61085ae1237ba8bfcdbfc339deb4a11ad80c118023d82d904a0282ee58d0acc180f9e9a629c083cc70b6bcbaa47adad76bfa0bf0393e9fc86c6d4374b1fff93e9ad8f7643bcc769d2e1b91a571fd04f4602ad08a7caa92319137291883ff0cee2023bd4120577611d687e71fd39bee25d23d00619083171de81a0475bf769c972a0696031719719187fb5c172ea05c7cf5740296683889f0ce5b28665c0efcfbc95a4bf7b9c6cee9e3abef317aad2c829e59533dce70186657c6db44da42820bd1f9191abcd3495aa6d1661fe0735f4ae7d567ef0ccab731036b24390c56096d3b56a1ffdc9cf36f175b587612dd7ecb41386f82ba6f81af6e684bfd6055ee237e5a22a25db0ac2985b8f4e7c553b10283c76abff2cfd415d6d39723bfdf88f2a8c587c5c921d4fd4a8e7298de0e7b2e897faa2513d5ae1c315a593421db07dae696344ef882414e323bd03bf8b97eedd732e44c737ca232e4e6a1d260f367dbbac2500c4619ed7d7170d2482a1a98f99f9d4d6f1832d07e83f58e682d89eea023fb4a3a9438c906aa36411e37356d95689e4ed4d49548da8e8fb59c9c880e776e2ed8707dcf4b57ae1657a5cdf77a4a757886aa59b496182a68b62cb41360956b511526e8955a8165898706258b3f6f9d504eff7c2f573e7db1064f9a16391b11d1d537cf709572eaea023952fab7c70bb4be3872e794930cbe2ccea92cdbbc8586830aff81264cc0a4f3a3ff11a4d1a7d521a8ee737c4ffa47063d8e88d69d381a085d71efea51a3dc173f6f76f2f4e1209a536951fe946e548914bcd7bc4dd506b41b1dc5baab34874362ce0ff03bda19cb5938b813c57e44e0d61db6644501cba3d59b6cfebe20e35e4f670e1e878e3daf70245d9c42a190d575b98f9baf88ef59e5564630d1c0be4e566708c4ca9131813332dfd7f267e37caf7681ec9bf5ac84586fa9a97c6c8882fc24358bf8851688860e838703d3ebe1498eec27d8ceeacc0afb158f5ccf1846525477d3bf069f63fe26ede5ff556387b7d92f9540857d799d77d1d3319c86695b0622f82c57a05952f6dcf114b1d36f5629962df10727b2b3f9a9e583dabc8b561dff53b3e17d72cbcab8ca974018d65c4e3054ba51211c31f81344cff4354f8122b6b2b28192e80999537d783dd5b34a47752575b3baefb04247703271f9ebd89649d0df30bf030c9dfe39e616470f3dd75e0f0595e572e70a93d1cc2ed8cacb4dc2431546b123972649b82d5876e09d6c4d9e1d20cf46c75c4e2ef76c162e5267b0b9c11b6df4f32925042e191b6ed5da0245b68de0b09087e64e177e41a5a6bdeddb4842dd08664e03fa594572982d415a64b70749ed536ea12851177079da7935b85a81f00af0118faa62b879bf5c0410672c5948e545218caf9cea64b60c9c054a128e7867572e022896534d14b97ab668bdc9b50ce34c2690788f47cc311b866d4de1facebc1bcc306efdd6956e58d391304769742a65cba3f81d6c45a79cfc2e94ba44f9c73986bdcd68e9162d9fd52afbaf0154e20e426836a68e6fc5d2273cd11f09da0b3019b7a5288bbf21eb3ed02a66d787402494d51f1fcc372813bddb5017b0bd468a88a50d65ae08076d7c754e64898074f3048c8e3ce1b0954de60dd97e94faddf31b383f7b1365cb83ab0b4d30a7f8953a73435f9160d45c370f39f3db13ee46a37b5ace3057b83993f035e8c1f8cee6ef7c3591277cef69301d54eca4670255837504b709ba3b2dd091d95ef6e6c5591de439f5a882e86e19d1a2d6df56f0dd26e8e954de5f3d1438987ad2ff1a22f4320e96feb55dfacb83a53d1c84b6b25fadeea4970c85e82866aae5e7a7cbe85dda0ab5e7bb0a074302c49609118c8e34aafa5ec7bd1bef5d81b25b5f8f4cc8f264086d3b046a5eeb89a307d044c076c3e4698e60789dadcf265172b75fb5e80b59cff939c06f937856408f709', 'hex'));
    assert.equal(instance.digest('hex'), 'b6cdea9dec937e457fb945433e140610a5d5d93dc25f3007992477ca');
  });


  it('produces the expected result for LongMsgKAT_224 23720', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('16f85f578206f4d625a5831cb3b029f09d6f9e13f8e4271fd41a429ceb638a1300e51b403ed6124420b363191f55b32e14d286584b51d3572536a0b7022b63f844f85c457719f88d4b91b1034d2b58e77c3faa34a33db8089284ad13c993c234ca883e0263d4fbe209afa31a445021a2fb4f457633a54d158d94f2342bedb2cb65dd67088f8e017b58bb787ed0400ae30466085eb72f190118bcd6b00a7e1be12d3e86553948859fdb930522ac99399685fa8d2927d4c97637ea57730c1216e00c2bd8e8ba684e1e8202289f8708d5e43f68efbd1dce5db6408889e5e6d32bc6b20c1e40301471ee658a2b89873589a95f1b1923972377e6599dc7a0276d52b54b18245a38cf56b9e4603bb9bfb7f9a68cb63184221345895dfaefb6db77c8fc11a2b0637ee6478db74f2dc771ae293c9d1b496a410ad012133f65eaf4d3737e01b4142b50c739b0766e846e3a372936e8f05d00cc91fc4b01df2e39151dec6c11c3e059aeeb884ad4b146f0ccc66ce48d8959d7ab9920f895fa911d6f127c97f1e8583d5ac8b0bbb959ca80e6f025b4df440747648dab69662edb9f4ee44a6eb7b3a086870b167418c4cadfdf6408e86fc07459d37870f95d1aa11d3caadb3fd65038cfadc758c69e8e77b9f0d08844f942a73b2a16b99fe58f35444c3e5cbff03cc7cb4b95da6ca7d9a70ffd846227cda9bb71a7212cb7f66bd635b2b25116f1a68ccc239fb5c510e876bc602dbc518f068f55024715c2236bea45f42964acc022ecc3653c12399fd65095e0e30614d02d8274c63bc4b88f3d11dfead0e406b1cfbec34065059ddce76327973ef82d5b0a6db9b3014607207e545bb9650518e4be41bf9454ac5fbfc984586f6fc5714293adc8438c897522fe2cc6b1b800bf64381d91abfb2ef2b7703e337ad631d24498fa36fc948f7b7bd668187ce9d94c396fc322e53f341971f8b79d504289da46199d7df841b985d0ebe2f82d9b742a92cd1879cef6a9fe968f3dd0875f4c172afc3a289a86da0f4d03e8e5e27df20eb1c819b2566a6362a3a202ed318851f218d39364c4c47e5b47e16894b645fcc7a84ff4ae8a075a65237559e69f6f634736129a6783b7c13bfbbbc9e3fbf5f8fe52dcacf563ef41c1e876751206e5fb7cf869f3f6bf382c1e73334f1c05e5f6fe81344b7d5cdf58061775cb3457d7476c3085f9fe620cca92679b1a5490d1620f613b7e8ce137c2f39ba5ccbcb7c61bccbd6a024eaa79e58939b7caef19348f745a4640d15226c0532f1ac35740ae23cdf1c5f7113725022a7948615a33468a3f2e8450154e4d9de452d3b9d5368980075858ac06ab9b30fdd432e44edd9dd3c57281bfb5f4e6822d8bacc2e3512834af79e0f8e13f8604c6cc838e2bd356bc3224d351187c89cf0a35069c7891bbf9f2e7d6b5d186ec92ca96a17a75b5315ca5eca94c03767c500b2728e36b7c7c10a39155af28a8c262152065cb68ae92965f0a0289fbc470fdf712cce4a03cd0afa7d9d3da1e0799177d78c5e87ea5ae6aa1fcf4a514812d0ed0587417f706891cab158429a326bfda07f6c3112f7212756e6aed0e548cfd788aedc7cb0d03d1345b2a28c6d3864ec67360ce237f008a225de38b3c3d95047d2ea919e47ded2b2b8139cd37d300a5296550a162cafa5bc0e8014830495487a3c2c4c49282b8e04bb988d744c0c7248ae2003f41ccd44666e06796c60a0e585bb1e10b5cb8d346e58f9843425fa3271b5227d0498aed2906f36d9076b1083bc26fa3f505d908f0b294148c796ee28aab1191b9f46f5a4950485dbe913b9e22365f0064720e9f096884c0b36d18405f35ec928101adcc82e3d56dd578b6e81dd0ef2a98dc9416682883522a5f357c36f292edb5337e0e6b33db1771edd2e98cf440a6116eee24c7eba0bcfdb2ff1e1c852a6927cd122ed05a2d414c51a56944b3012f5f9eb545b838781c964bed1c55f0b4e36f258f4d0ffd1a01d5cad9a2ed53df6a192ee74df63df7f6587eb31ed365f58f1666343c33e42d75322fe5857543cae191b799e312d1ebb8f70db19f831f136ec11f3fdb80b693cd2d2c2a56a3d5a1f48c63dd691e036387d660ee988885f08e4db47a72e57c8b16c583a7ba9c13d6f686e6c7164e9119709bedd892db2ed244e7325c311e3fff4827cde0ac7507dd2d2388bb978c6280ac6e096a12cc8b44c77a5e4b4c79e2cceb84e24ce7e3046867f2b96aa3dc663a2d66d481f47d81ab487b1a7fb04b6b1443e1edd6a2c8fa09015bc17cda3d7a82b9dfa4194094b40353e0b23b1f878c3f3fba505d7017ed16ef0a0372f1443e81d69dbe1fff79943ac8b6fa31aabd090733109917730333b86c093d7227dd54fcb590614d8f195922b120904393974560ccc44e225d1740f5590ad873e3093bbb1eaac54ac77047aff1b8b1439944b5ec784ce8a4b1a116f7d008c3b23f2f7c9ea10b802b3bd0c57d00ba7d5fcac12fc3b033c35ecab30c2563a0143c7b54ebf3b5ee18d800ffea1a04e92a41754b1b0f7190e9aa0f12f3498625f222de621ec311186e2299f7f86b4d95e3024b46a58989723ed88ad57b9b9917647f948420fb0cfb24a865610f0650ba773c258df09d739f73fda76b12e7b56c1774e62ecba24a0e00da25cb890642e49ab6636ce5b2ddb572d6caa0a9231d163a72d5666fbd466724de80f7bc67a47f9ed51367164b9f8762b7b4a0cb4e91fec551427cc9db52855c6457cad53599ae416d2e9434aa4ad72d191e162502d9afd354e8a3bef8b85a7ca1d52735f5c1aee0a7f98e3d1d793148f0163e4f8639c07980c9780b025a8f2f78790186bc382b766d8018a1c3f6fc088e14fbaaccd9e97d67ca25938799798f11edeefaec5f96d1782f1073a14b971fb09fcd37be34d39a6b5e1308f53ff291cd19bbae6abb7997836178c074f7181d26931611e1c86e90ba8ef3781c81ca4c93086dd2f4daabc2f7ef30ced53aafb90f972b75774cf7d3112cd1ca5bff8c1b463fdf46aeccee30a2247e9a2023ec1e3ec21b2250b8e9fe2b4bcca82c84f0be24600589f7b9d6be5bea4d2ae543d738d0f2b7b086c88e92f7e18b323bebc44eaeea26be12fe32753e3d2064e3deb7ec9ea4925e69de6b41e31820d49d6fa8e303de0faf1b1fe6c7c23a4e1dcc23bc626c108d5184141d6914c4dbbb15d0a2f55bc2dd4ecbed4c419b9b00a6444d639522600c8f9204b0de1fce3b6be57e5a9b0e3cde2a45595978fefaa4008cf74b13ce86db5c9af0ff4ce122f60f07069423f5e8c513b5b955d2a5c22b11d4103f9f37afabd606d50f7976c88fe0f01cacd075f4825615d3b9890f9dfebe49ab86e60f390ed2d756594e94827a4946172232979665fa8264b7c0ce1d8bfca203edbd7d394a9dd06b90d428da3f7d58f961d3680608ae82a0469bf3b3eadedd344898240663088b62b6fd38235bc0d391151238963c8061470f07e21d3b7fe3bc6cfc4efc550e2940872b67322353bde6025cd6d65c169b9d66748d73b9de6bf9edc57da1d7aa072bb2c35961df26fc7bc5a4928a4c6a95371b87e03fc52c2a06342959f7a1bbe8961d69ff1704fab283b4a5bd417a80e45d92727e0547a43ab04a59272ee8b3f6c4495414d00b88aa8a10e22a1a6829dc2b3ea2f9d2a544ada933fb44251dc6fb814c82b0e2ab1dad9f8609fe86ebefa6277a6774c81d4963578d56a49ca1a5b80423a6b1d1735ba3e6c0a0cd4aec877d9aaea84245caba678666cb5c2b48ae671befed3ed327188ff20c1a5e44a7e14e4eaa6be3a01c8a658e37f337f3cc8074d65eb3725595441fe7d66e1321385b2181060efcd92fdd5a556b8339890884a54edf0afe4133123f018e9a27051a9bcd04731e9ead9233ef0564e162d546319b13fc430b8d434e2ddb069d983cc12bf178983868d34f39f252a8f1f1e827f83a53bd7c04fd83049dae31e2df2b5efb6ab8538d090189a0a95570e3aede41e938f4af84d195458402829bd27759d3a429153a0a8666011a023ec50cfdf765c55ecf05426b872b95fcf281db662dd8f1689d08ee83bb32241b29765a1be2d8c9e5342789da439e7d94a4e6730741182df1e61e18e5b820d190e46fa461ee4faf5e797290d3458fe4ba805750ad85679a167718fdc1b35b07645d9e82194659fa4d524327600cbf69e19a76944ee7', 'hex'));
    assert.equal(instance.digest('hex'), '05692e46a953ae4a495773c87c6ccca2d76ffabf559ef20d24079a54');
  });


  it('produces the expected result for LongMsgKAT_224 24224', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('8598b32e7ee9469b6d33247aeb8afb12d6bdc3ee4ae5a49683e84c73fb353a7ba6fdd95c497f429e82f07b2b652d7e415e9b93b59e541abf46c88fa54ee068f90764564a11a59f1d04d8b88de186c4217285b72796d5c0575daecc30920f6bfdbea772a7b18339a1e2ccfc79fc8a9839b20a981d5291025f341e5d7acc1a3bb4129091a5062b9e54be7ed8af8196ca7a9ecaf18ccce4a1d718149809d08a8ac86c9a12e76379f634ac1615af03abb9287c4b4a79847b52ed4fa17e1527495362b625155e9f1aa3a3e5d0821240d8360894e19a5620bdbe00a7af6c40b1e513490671bdbe402379f495c528e218028d315f6ef820c383c83630f7564453f0e2d387273854fa05f4da7bc24cab0b71d4092a432cb0854916f71c3b8640ca602547922c9867b002df7382af29e4e1b993d1fa74d950063e527db6ca0b736b8906962412ea1dae218a0c86aacf51362bb8bceb3826bc3249f1c5155f0cb50133d0527b98ba21f757f72a9c52d342de013bb38ea52774a7c012dcc0a58051cda565fdb45a1f065041ba5fe62d0c46cbb1b9ef7d669be319d98834786f5532225d26d184abb38e345c4cda3fe3b85225d6f6c70aeec801bb571c5e44d9298f02f632453c14d1c710cdec5843b7a055817587d790fc589017348dacc18b686ba0ee29d074cffa70017d972449f4d702c051125feca48ad3c5f88431789714c90f48edfc382c28f5d9439b88531b003be7935a845dcf5ee545a6617a3b05eeead89ed5b950edd0919bee243ebf5cef536a0a7c28158bed2f838f494a2e828c580b48d88e216f50492e754275697882c94d1add46fe443b766dabe2f9ada142a5bb1a096d3dbb71fd6b55810ee5b2989745695d4bfa143013f7ea34424833fe09d8966a0b97b62953c4cbcac86cfc83e14ab36a4d9f8e8cd9010713702e1db6c27bd0166777e2bdb5268ca388394986683db83ae0603fa611acad587fdff471718f20f42360fb5c3de8a3b3fec068e9dc496f664fdc0c305ae936c7ae560a0568cc509f99ae62c6284f8bf2a2801c39c79295609b622247b9f1f6e0e77ad89fd5449cd9bbb84a523795f579432c19e92b270b6846d72986ef052dec372b3db6d8449f3602fbcd662e2dcd4edcc59e2a6d15e8a41ca7932343981770121a78d34b7400778072c89de969d0468ac052ae54d6076660c67e47ab93313e9a979d80e05442b4e328e89e798158b747ab237ca577acbaa07cb85f8ae7b1c9325fe8b269765399ead37522cde1f071dc26bbc4d1e7aa8f5f4dd66a861a8f4fa38183b3962b9739341404253c93d7dec6b454ddbac9f942f2f78d6f75897e673b9ecacb1579e298b8b9446b11aa43c6ba7511ed9ca831152d3c3ef0ef390a2ce65f4f5f6e177b50c9af912ba4b4548208571a43d6854a8ed4479d9538456539203d490103dd23bace095d0bf66c17f2411d514084e047970696400e1bc9ce4898ca62fb358b096daf8a3857ac398a07882e2201f8ca0e4d1cf0ca4e47bb268a91dbafa837375384a1bd68f87894af81bbf1e220c2d3c3b2b93a877cf6a7c253cf660b498d3efa4f38b9b401816c0aa51ffd3be9f36aa1d2335f4c079487be16e532bb0fdf8e00d5d8379c0f617f7148009ec57dae98cd41ac01d3d0b568e0085775694c74fc339fb5f5a57c274da07cb4dae54833bb74b0793e93e8f1b5a7f5a092e90459f2c6b7e7a6f488e3c7ae10ac90c358c5bfd603080a544822b4663aec1a42d3f16e335047a1c9ef6939c36cc34dafc9eedb13e1a9559279866a6d71a97ffd317fbbcd8cf80476d59271136edea5a186e7eab7fc28881c08faf7c5416ea4801a1eb9e0c883dbdfd5cf0f0c9a619d91481e413a74f01d86bc762f4b05497e20893cd55c0c570caa3fa00bd537d6373b60d32ca14a36bd2fdb3eac1344e4052efe7d1abcc77480ee433008debaf71c9fb7070005d8365ac112f151b374da141e1fc62b3e40a74f3546bf4f02ea8050b823cf2cd5fd134f10abc2db0b9b27f5c0a44e320eff81a0f7efd4271bc9d574d6a82fa807b05f3892564d8bf54db7b81ac87b633c53f8187436c1df435ba2d16d72353ef7b39cc550cfec1ec2502902aa6bf4d50563301f0b39a9d201fc02b0c9acba147843a5ab0ad15e1fbd9d3880d99779d0fbcd217746aebacc231a1285927f0bc808b2a52771798a9104792dd0e9c938f66929d30390d16f57591dfed8424792c1a0cfea7cd2da90c6c2a80234f3b3500dcec078bdae333816ceaabe9b686ad0bb24f65bfca86222bfc628843bb4d328da1ea28281d9a3d29e0d7eeb9fe24b33284d73486d8d5f37df7450409722e828b879b8f7d17aab002ed2c2fd7f03fa4647f49d4f1b204c0de0b413c613963a0c3ad0026adec9279779a0c7986526f8c9742baa00c088b6826c2449378f47eb6db75cfa013bc19106e18d062b0698ba02054d8719f756284191461fdc5d33cf0d15419abea010c8bad6e10b79cc39334fa8789383ca03732e3de9e454d2944913ed2c74021b7b393b3641448a6233a9eede72b8dd5a463e5a2dd7b44128b09c1d256f6942cd7db74e4893402b6aec1c01170523bbf33015575fac4534700e91153370006d829e4b76216b940f1945fed31378800bae385a54c4d32dd7a960e8b2ed1e34fe8db1cbc7d1e7a86847a69ff5fabd40b0e9191e426843fb79a1dee7dd0bae4c55e58f322a4f6586220b0a5d483e70f998b10656d1f56fe911cfb0d1cf9ce1a24c4b0d4f19a04129dda063fe17cb8f00cf9d516d44ba0d1af9ac23bee55ca307fe69f6d1753ace1b1893dcb455934f73485ca3d8c141b56cc8039ba3cf7f29dc680531facf117bd0f6d10be295426e18167a33d22a83b416dd1b848b558a944b168a2bb11bde0c55f9f9b965745b0e8e367fcdc57030140b87b88613d5ec8136675fb3cd0dbd2035f1a72844eac0c2394f2c4546674bda13163370b1e3d623ff301780f06d1348e99c1386411dd152ff4255e869db6e3187e736f7015ab4b8d72b45a22b0f4f3f05ffa703c3b576b376fec2aa142e68bd1b5285c138afee111987a100bf56dac66217c6cc3aa1f15b49942c9c3c00749e2cd78a0438444165e72dae65b1bce985325e341e2736f11ea5af9c8d00c4dd1c1523a09603374ac32aaef82ba4062a0cd93790c99595b9a82205fb5f968098e219002fb84cd587dd68f9be290bc4752a5d9dfc864ea1bb67878c97147cf547da959ee3ca1c433b72868527744d29bfcd2e323530a6547389978bc2315d5b34be3632b641429cdf9355c48be23ad6591581c706a0cd25793015d9d88887806c2fe8504b0ed19ee74b75627074a7124dc01f0d337f52044bda1b0e057470ed886126a8a8b4bebe21edc21d6e3b9bdf88872777787ec42e9813f753cc776bfde50cdea090e5f6945f242efe0a776dc42de1b442e510ab87b08d97a56399d171bde5f7461517f04b9b50c3c42824c301955eb9287756c30bab6be7531989bfc552272faa237b1099c78f8ef3f78121b61bb2690c1728dd0300d1299439cb99d906c357672112a1ea35f83e9144f51f92dcacfb9285c75c73e2381433cdf39327a8b2d130ca2a73f5a769b00a85855ae967089ac941a5f1b535ea5b3c68d01af72f692b700f6604fbee54511973269984fd1744169a33029fbe76a43647f9a3119063065dcf3456cc75f74c5b9e17dbeb8cdacf9cdb5503687509e4b514bc1f9f90b4e17f167cc426f956602fb42c640133d7daf0227a48dcf22885f58ea87feb44cc4e67209116dc9e6008f2bc7a04045b9a0ef3ebddc3aeaeb776cf63adc4de7f091fea139efc268fe243f1902434eed5a8d47f391bdeb52e4a4918ac40cb56c8a73cc0f89a643e6135361d098d9e4682d2526ff2848b8fa0daa79573bf06fad2d61381ce071bd8a71147b9164e6f8361a94bfa34f1e58ca8d44a806629f811148051f0ce620b3c4ff8f094c9ef5ecd24c0c61090bf4c8c6c99247557361ae4228e8add6831bc67d6ff9c0247bd896e150281598f1097594919070b971c23f4edbf87871ea88a15420302968b01663366dad4be0dcea375111bebacc333723f17c2f36cac75b9a890f34d4bf0be5b943bb3dca5c897be3773818d6e784d733021aa07106f369bca543ebc7e9bbece36ae8335967ddcc28ee49b5869c1a212ec3d4ec5214a90d656bb87e62f7b25eabe97d0066c69963c73628aeaa32a3fcf443b29ef1ee389736cbbdf99fc7e1b77d40f651ae35881d2ff43e7d4a13a56e8dd', 'hex'));
    assert.equal(instance.digest('hex'), '0af7e1351c6a6b7359b59e22bf9c9ba24110a2cefb647a790fab41f1');
  });


  it('produces the expected result for LongMsgKAT_224 24728', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d339611e4d57f858a0b749088d129cf1258c2035ee049d5f47816c0b82d640458c8ffa131afda45bef3105dd60469a70eacd18ee594ccbac487d94085e957f8a82086ecbdfcabb8aceda5120a7e15a12577985def9ced321a1c8d350255cce7d336825484c86f9dd1823565d2624982516a6027a21fba2702571cdc05c514f6b9a7138ab8a441d805fd37bdafeeee30159130ee5f90c90de030f9a904e6d2a03cdbbe241f0430fa813a251d44643c04c4bef5d07273c9237f70530c30cb269d7e7b6e7f10831069eee541d5ef986ccf0e1e870564fe558bc1c219dd870af2870321ab62dec23118b77d16418465b54ef71a68dd17e2a0ad16e31b618191577bcaa5c29c2f36c2b56dc932ef2f8ef641118fa3a78b65b5604e0913a48539c4b26f0b5e73f77de1d6d86ebe0038c7883c2f69c0ff462907dc3b85ccbd87b85b0678139297aa478f03a588c6cd9bacf2d5cb5540c066a5d52889bc370a08ace06953c2398e92e2a6aa11616b40927c42203326b3888cecb70f7425c1038e57d6d3bb19bb643704f83ae6a55fe8b3234dc25175d243ffd7e16bc5cb84e8579e619cf699b54bf98890c0563c424477b5b18e59314999fbc4c13d2866dbedd9836c11a62c4e1e5199bda93d2c90483a4fc3590bf66472bb8b1f499dbf94a56d8a2d27f9607b019228acc75f8da8f3f9a24ea0fbef55cbe6c3b55506ae4fed8499543b0f04bba76f7f164f31dfc7681051ef05b32846933ce4c1261659d6c414bdff597af14d01d73d4f3270db309b8e8b62001ea17b35bb7b7cc7cbbfcdc846a3d19929b7fed5693089a3f81a467a539be1cebccebfb5b384cd025eb2dedf5c4390f607f7c9ee3ef273d7270e5150a241abeb97b678ca3808f318da5e38f6842a2a3c09cdf25c8d093caee7c5adbab436b8da15ae3fe3f0b84ab2b43cf1cf9ae3c0d44770282b6f1cc1cd7e82d195be2a5e5af40735449f6948c7037f6e1733189984b4d1da1f0bbcbab8373c3a9a3c0dae236768883634eb42e574525264403e90a503a7d890530834b4701adc1a9c6b953981b9581721ae37ab01cfc2b9571f2d65d4e35f3381f7f05f2cda160ed6143e25c6d9d2ad6dc9b3f69ed693a325110f49192e169ab5eed6be88a3e0be03d1fa29fc002335979971c16f096bddc4d88eb2300ba514b167d4a9dcb353d7ab0c3db7ad991415da362275d3264360d0568bc5b60b5ebcdaa5bd62edb040c6583a9b997d9838479a508f79e9acaafa63f90660fb0c0d0eecaa72bde7fc7ab4b77d29c210fe6aebc6abeec7f201c8c64cb306aeed1110768b3360b8b2f30f8d1d2c1ee7b5dfcfd5d56515f3f617dec24f56c4fbe6604597edacb6a42f9447bac63c53b54010b5ad6f3a5a8c37f89cd345def631450c2b491e7ad6436f6f923a0cec85a76fb04c0b559a6972284145954ec82cf84b0637e4ba11b3f8bd68dc125eb5693a3ed2cb3a62959cbf41c9409d84f2ac9264e99ff695443ffe689464b349b299ab240d542b29cedea37f2221b5444b92616386a2bc74414395b97ebd3df78c583234883af5c7907cd68ba81e19ae616b4950326e526cdec80443497b1bc42cbc4111573d39ed236323a8eab36ab7dd45d65dbbb9f5f7d657ccf944f00ced4f12817de3d031960bc334ed3f864643737b2641c6f392a4a60527252272e1334bced47637dce95292a8e4273cba03e17e16670225c2e2733d7858e2c7d9da6e14333f2917c6df92f233acb60553bedc68da7a99f18c2d3854fec8c0706980c5ddac1174befad6a7da03dc1df372caed2b7b5625eefe93d6419494c3dd1890113e190719abc2b695f7f2aaccd372ef78181c428f19918bc2e2cc16fd97f1aef7e4fc3297578e0be19b8b2ce6ddfa200e593692efa8b11fb5a55919393b98a2fe31bf7b80701b67430f1b33911af41504b2c3cd000e3eae148014c451d166c47b6fe8266f44e62ed7515c6f30511743143485982c3245332fe19890fc8e7db99791a36e77abfafbd0b65cdd861eeff1f29e142df903e723b2ec3b4a4fff8c5b4f3f4377e3837cf134d742d46ef148c986dd161a939482fdf40d4bb4a4231b7d5648e2dbd8a9d8516c6bda0a370fa53620d5255341830b84c751e31b8e17f3fce027906afcc2ae7e5e104a1109e86fb20897e3109d07e700c13e6ffa7016ead35969245a16be032cada0f2327844dfb3b45d9b3e9e309a98dd927c5e75aed3270714041e35a703c3ea7c10348fe521cfcdfb7c02ea9e123b267c22f091a4b98473330e93a362c358f92519f9f42b0e6d2aafa0538ec32af4a52358efe45b59a9ac05cf4d6d82af2b88bbf327d3ee61a4f341178bad4b228ca86d9ceffb459c64ef12e5c5339471054fe09de0933595c2b1a5cd98581675dfa0b9c04db65ddcf452c49d720c0876be88e9d7232737865c598a5d20862d749d3807a7f052f4fc0e0961ff314df69829b3a3085148a818b0f53840b92ebba0266a42719d49902775b72d15162b1643f80993393a9280a99e72aca1fc8b2f8454e566bc79cd9075fe091f5edb4eb0da5e0dc5c4ed85a8fc3997389d235cb5436e9a8aed1d4604575834c1eb2fcf1378e465f77cf037503639482a285a9d0b476cb9ddffc0b82e64bbd175538c2647382d2d7587225c845d8c14f3874c1456205071c0c0b3965fe30e9ce3b616e4de78b3953a9ec525e43ceeacc0c303c6400cb4d52fdfd142376075d26ac1123ec4cfbf82e77cb04efc09cc95601b14681c90a7b0840efc819613aa06fafe2dab4b036951f82579a02efefd08df0eeefd2146080734961725b6e917739fb80deb9b8bb6dce39e20372ccc079add9030799061ef1f011699445570ef0cb963483099eb17f22226698deb110495c159eb63da750d231e78c4a7c734941e443af7f2b5a3a06cc5334ef76743fcbe8edd3939abd48ce32a03dd59d2553ba408b444d9599c2358443294c406d03d86a23f872992a1c455027aa4d7ea35afce35af0a40a8b58ce2c149c00ed49ddfbf01f1efbad3db59d2214b795c7f78229889da77c4a4faab944ebb033a045156aaeb5b457ba7fe0a970fac195ef5d206e28ff9151310cc91937fc33e61a50755ab1c109e4dd87dc511964f970784bc3019afcf015c6ebadd5c4c32256311e8996fab7dc3945cd87d55fc9c851e863dad371d6e9d69157c5040bd702f828c088c5a8e4e35ed19e8731eb9addc7d31edeb95e2fa57ec514d97fe5914264dd0016bb430fdd7dcd5a161732802963bec1549e5cd5151ce9c8bd46b26f441cb68bbc9dcc08c139dd9adac1a158b5f9e54d2c20f01ae66be788c10067c60e088fdcf828f7be908d863604e19f318389e5ac148237e11be711ff432869c5a9082e5fd9fd24c39e57863d63bd85d5b78c6329c6649f562324398c21ceca17cc78750ae9adab612ca3bd0ab6ffaa9f230637927da9dec3077ab6f425d21ee971a0744732f39ed82f6b06f1e84cd777f1910a9290a66c77264e484693108d973a25908a9701c414920cb0e3b82a74d1ea8304e8594c777290cd32864738c657bdbbd57edf42ec9a2f522ce911c1378275ad43889cc26e9a3818987ff0671a7a94573c013eeebdfcfab5d9bb405d05b66eb641c976a4233169a46338895467f36f9fe7fc1cb3eab830f46f261252aac0492c0699443303949530687533cd09cbff09dcc8f12a49e892a47ab0a2bffe1b7a493bfd66d9e4822598781bb8a94a4d7d63d77c8f1b4112f89ca215decb610f1339184f8cf66bb59169553013276472bbf7753a7eab046f55e720c0b235407748b8cfa07e748808875a896661a54dde939e0d64cb3031a4d48d565e24a56ae117ecfeb27928e42c06614b4327b9261be4ab24169b26f9a7a463a42f0ada305359314e7d48993ebfe46fed1ef6f65f733483b883b72deefd5ae803a0cbce91e5161090da188c475b38379fa2cb191d0c172e966376fc8c7a5ef4263949d75a955ee94e0391e70ce04c61d3f4f49cc5f1774515f01ba6cf83bea9bdfb7f158f6ced3bc33beffacb80ba3767e476f3180c392f17de1f72719466b4e814d7570c9b08eb3f053d728e5efa2c28aeb4fa557a2c809e357f9ccab21f4e9fc3291cee7ccde2edf7b086f844b531c6d6d5744ab2c3fa2795a7c2b26a3fde44ac46738972d374e534d1972322d4dc8b349fdd5d3aee827bc4de6ded715b87f1a26fe09fa12a495919997e07e75e268899d599be0fc699433619d73c63b34a377f6cd511d095da8ed29a9fa86944b3795bb69fb8f51fbc34d07809dec6fc646ba63ba48322717a1ee01ec9b1cadce556b07e943f619a073faec003ecfa657d7c0086631f41909bfddaae09054948934225a3', 'hex'));
    assert.equal(instance.digest('hex'), 'd6204196408af4c73901e8f2cb0d0ad281fd6071301c6b7046d8247e');
  });


  it('produces the expected result for LongMsgKAT_224 25232', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('93b7161e99fdee38713376a69fc4bccc66c092cf4ac5b71c350089253cd17e7db28a41490a354221017995abbaecb67a2a989d81984f34d021fff364e8d18fa58ef3df090726de7820f598de625f90f10007f62c09f3e79eb21e847d28a8869eb217300cb4014aa83d7d7ac6dbb9acb1e19a2bc76291527c571ef593b509aab454f20bdca4abcd337b5087ba30bf4a87a936f400a13d4c455e60146596577c309ff25c22489d3d51a4bf1ceac5b8e20a70c541922b78eed7f2c3c2de6809d474237ff6b9221b6a20cc7046bd7a292a4a7e1adb16b21da6812422f0a2932494da0da8eafc50260edce61d506f0f9dece624e9b5c6ec555963d5f65bf5f978e441955b0276f156202c67abab3ea79013428ddfd880d861df4e7a1bffcee619d04c0863b2d675de97642b44fe7114c845b51e57306b2d0072dada8673c0c056ecaf4b486653a6dcc00f337f1acab6b9b2d665b1a5bfee45a754711d45c9ac63366c15143f89a5d32de03c244ccf831c95a97d44c2baef5c90d8752e2caccc11316e1b78e0f1c4b5b0a43871c784cf5d977058ef4cca06172d6081996963f3da127076493322d9bf39580f096a44169c9a93dd7c84a6aaf105270db387990ca1be0094bb28ad741dcb4295b16af18c97e15a61aec12e108d61d5f27215dc24dfa8b09ce5e35f61b230961727eddbb907f69ea3988ea95f73299e4f3cbab4a6506f0b4e083eda4a24a7c309d4785aa1f2b1d63b0b021e3d7227afbb6662c3e61586cbe8aca227c61bd34ef7b7346f1e99da9588deb49bba8a839a7d4cfba9cf43a7b2ee85a97e3754eb9d1c7309ba8fcadd45641aca4ae0612a9ac6872cce7b6ec5493ccb45593017e6f918493b6882ba66fe8f96da93d71ce4c435e405c44f4b67dec0f896da961f7bed7849580f3c88dd156eb8e31e7e325cabc1bc4f58e83bcf8e6204dad75853788f121d9161427a435b06f08507258931fd7c36d39b4868dc575a70062168203d8bdd6067b458eb25aa5ec8aabbf9b1198df0aecfcda206dee2dc4ee5721680ca364464a9e7edd29608a3c6a2677a6492a549446e534e9a66c99b469f5dcc14d9148e280b39fef77afc6d97a48f194544a285dbf1b1d4dabe9e120e77774ad505da0834e55d3e76feb4f61779b86b883d6b3900b9da38f3bc92e03643e7e0c7162b79fc6247c3f887e9c4f763b1f544504fe1c2d4a95be2158a31fbb515431be2b954275c706f3a3ed2b6a6a9705960c868271d0f3fe52d711bf377746f28f7bc1feed6bf7df64abb5c61e3dee6ddab1ffa938ee21ea45ceaec5f064f8436942bb48952e370c35a4dcfa8d73d9c75adf8f3af1d6fb98627258d96a63a398d90fdaa7f5c779dc8fd9733e432ac542bdd3995e5ac335ee30317a40d02fdc34720b84f253471654a709752d9ed2ea3db089a05a579a9299df1f4fe63780cbceece5e21b236368eac7016890b533bf94b0e0eab0d74d9bc9cb209840503b237821d03b71bc922fb4b74441cb8eea845d6703525065395b6a72d47f901d052662465c48c1100c88a0a06799b4076b07704d65675fc3b52f1d0fd99e470b3209c6a90949ade31aeb6272e94fb53398f0f289158fbbdaecb5cfede549d1babd7e34a3ba9939331ff19a5ccdd53bb38d89a5b9255c0051b7392ed07b0d755e04b517934dc3fb6bfb9331198ed285b40a4b4388ba2e7c002c47a37c0b68bfdd72b61770daec39a9a01391d839b84af6b71071cefe6660c585372b3c6f9f735536ed0dfda55f5f352768f716c4f6d412139a47b4304e5fdda714c5e14f16187b9d8ace53f6d3dd222985f8bc14eeabc1ba8ef7e0b68535dc50bc2e0322942fdf1233ef9cf4dbebe205fc5e4604889bca0f95381c11badc6a3ffc71d7b28f0603ec720e7f8fb60ed463e72de159af0d49618e3df16afe272dd628106e3fe4dd198c685b6487060ecbb0e69df995ea97e37a79789f147fc032b399889045623821473fd4d6cdb454c7b468d26efbea0da4bba85d993666560e1faf8c09c2ec33edb379245d8a5d261baa60a6f367a517c2ea1cdf877ae2641ed22bb3c8a05a7fe287632c85230a41c44d9663d3008df8e897e13970e3f013ab2f59a7aae3bc50d28152e84ef607b1f1908812fdd0da3285d982dd7c21c7673f93a3240cd01acc88f6d70b958f89fc468550b6ddebe8f3bc2e5c16fa9e3274668c3c54884412a55dd1eb3e81ab818696a7624705bf515e6b1efb1d5cd504b6a733bc746661c5ab80ca5d9f5694b4e1dd664c41952bc1835e23087a61c050b328de9ccbfc88bff0ca64fbff092ea7e61ef4a61232ad30378053cc59ce77c6bd262ad080342a4578e4ec21d338c717c567106482d1101ebc30669912d6b1fd3d1a2d1302d94bb8f442296c0a6377a90bd6cf627b7923be4916f7442559b2964a70ce3b7f18a032dc0dd8f4c2503d6007ff7fbfb45f2f4cb61efa79c74b301bd7c674d8cd5afa38002744d5669d8f52f67a8783363b015092587db9ec4f25329382d426ab9ca2731c8c2bed242e0d736f18d68ba906d5efcf8845bca9e006212c789355abd40033d32bef40e43123da1b560d19be7b2bedeb3165a27faf5ad3c8f8a6cbf1b2cd385f624e52f7e0635d6f203b04faac9604a44219c963c902b205d3449e9445223e9494fd4f6bc2cb3eadbd769c30fc39f62df0b4541fced20f96dde4420188c808da36d7f252d8d15d2cbfdd9d146a2c3c9ebdf4e7f16a3ce9d7ebbecf6e34f36ad52fbd7a4a90a708380d8c9af17c14202470e61962ae1305789e4dace05218836cce567153c8509796de7f6c59c61843f31adca02b0ac1483224b675dd3123ce720fbfcdf6f10e3c20d5343f63bd2d95c4feae809b2a2d7e30501e8361a1a3bdd4aca01e9d10969c07355133680df2fce122e4395a3692a972fdb4aa1eda5987539b19359c459c27abee0c0bdfaa7a3776b41147c61bc38916b74cbc6dcca587da2cdd6732c7bf1355cf182cd2fa3317f8dc49123442529e9d0042633ae5dd667248efb1d85d6351a625975433b6d51f7b70cadab215bcbeaa4cc5abd3371568109dd1f7a8339eebc1d11e3a77280bc445b3fff984a53aa3dc3c96be75ab26bb4c13da4960f7ceb17ef36443149e00fe7041a83be6dbab71a627e1368febb0f98f710d560986d5a896fb9125bcc19d397661a10d27a65bcaed95cfc3a31f917ca9395cdc25c17aa3e1ac0d7043b41d49957fc93237ef22e0ae7791bdd30369af5caf672c4323eeaf53360341d046b69743bf7d8c34de2791321372590b724b00279575cb44f41a5fd661868a7f7f7a4e035e9c3a2889a58063c65cc41facc1e576d32bc02704610a9c15ed0f45dd4f365fb8157ff08e7cbe7585e314581750b5694cfb382fa16340ee7350f240e277eeb71e4cce7cc9df58dedc7696120aa77fd8e6bfae758cadbfd97ed29f8f0e62f4b142f1cbd43c8f9f4ebab25b0359f9ba02e371a25f9573f1c773f86e53d7548d49f190fb7bf31fc726aa59e89d31039322ee53e203b476f5f32d68c2beb6ec38dd9901434b877408dbbe8b3a88c2ed7f9445cf2ae091c85e4273f0fb7745bc693648fbae3a4c76726e95f20a7fe1edd8e43bf8cbc12379a7cc640d485bdd4747399ba5c206e1d224cedc95617bcc204cbf8c2db0e2c4f269644e3ccfc3d43a896b473a1e1bea155cdb202036e5749c11c981fd80fe00e8ea85ae04a94500891ae660f09655ab9610cb51c7e80f2a7e638b269672a98266f9a358d51f937e5fc7e9bf5d89afe8f5aebc93750f6c1c5f5fab800a17101fe7ad6e85b4bb79e0741aff6418ed4b6c9c2772704faadf6951f17cd76f518bc9e7a77ffeee4748d8043d39699a46358580b639f9362ea1acc6279590f9b691ce17db4ac835d9874710bc3bcf0c18db6b48b62549531c136ab0b8d756b08f9bc36aa13125569370dffcc6c80e6f6388d1f465e0395e144ffd7a7f7ce081ad99c59d89440171a9e8cd606bfcd17567ff3fe63be15794ec3b551e42a2286fffeaf49d9096e63b75b1f75003ffe04475520b640e77e8d8738e155c457ac62decee08abd4af348402395bb6d579d7b840eeb95e186ce206c1a85270a9e541876bb10d560c3ae4a0e5e9babb8b8841ea363ef8ee403b302490e5cf513796ae5092c7c9881a65064fc13b73a4756b886b8f016cf1d997686199ac24a21719ab293ba227e61ee8bd60a37384b5568455402665af11d3d5d3ff941c1fe17cf490691bbdd74a205ef6e4e10afd357f5546deb185422882535cef88a1c8a74bdc7dd722a9bd9db55b80c2f6cf11ac6e381164b6fba41ecbb33af31278a19d6f20104d04011c2a2287d7597dbda5fafdf63584edc3739674f2bdbc9012e0b7741f4c884ca742f7d5cebb594ad7f55826ee85e3c06cc77686cbcda0800fb4b08569d1d8f396bfca7cf61ffbd3911b444e1c603', 'hex'));
    assert.equal(instance.digest('hex'), '1a320ea5d2c3b7209fe9aa05340ca28e514e1890806406c57681e420');
  });


  it('produces the expected result for LongMsgKAT_224 25736', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('858ef34c28b8939bfb4644d1e458a67a034b9af9f82db786892d81c343d27b96ee49cffbf2c3419eb11efaeb9f8d0410b0eb688156654a8e32ee2a570c5a88007656a18380df33f7756a6004766a6b96bb27a741057a7a0e22d732d797c488eb613f179dc3f1094b2b5c8e5a34bd57f26de85e234fd894a2d276e8f31d0f7f23e570a0a4e13bdb635cc8897282a1ae00cb0c8f04124edc6ede1404272f1bfdf55ab2a0b3d5b3534a4c01cb0e1d5750ee71328fe3dacce5420344108996b6de1a443834b6badfe616534eaaea32681d57a2e41c77173d6dc0751da26a17731b01833ad0b9c4d3b48ba23773aa6d2bb7029377f453484a44e6734a3acb3725ffba0547f1045f18bacb1e9c9c801759b9a16209f0158a4e8f21cca9112fde82388cf1fe58adfa1f684c3158935edf9388b42ac0e5b3b68e6e6a4d4476c4eac78f166ec5fa464b565d481f57a9d263bab7a1fed05d737974c4f7bdaf2ce5ba40b2a993e867e5844c7750014e66bcc5bbf5e500402529ddabf1ea2e395db084c4bb85766fda993b547788fcef35381fb16af0965a08ee5cbb4d68c934785594b37f78e76a6558aee73e570e40ccc889b0d5269756bc40897ec0c2d6c33a33b1897aef297f377cb58a7a1a389ea60f4b5f25d1305d046e48d5bfb1083a82c5aeed09208ff83076367156b9071beab5aa12d9dca9f8aa093872c4c95b84cdbb0b84abbb03f33b63a7c603d723dd9970524548e61f3804b7a914852ae55d377e25a8431b1e7ce78f1294664925d62b7d8ca3c880c4ac80e92f8e86554bcafcd39ca44cac017f4c4550be119ebdec7aeeccd527efb478348425fc3668141607d14dfac90451b2996dd46b23683210916b90e63ea2a4a006bf72c4dbb6abf3d0505379c5b360966a25471e658ee24cabcebb5c6ed5f8dccc84614d64bca54f35189f579c170f2a2b773aadfcf3c1c435885d0ade7121a4d2fcc96afa88df6ea2c519a98ab279e9f75400ab053d457ed3ff957c20f282bd121ef67f53053fb4963d08f70eb287e011dfd015cfe492adcb927bb80093545014736a12e236569ecc3453350a5e57d50b1bbca5c8a01a946248370cde6177d7b8c84f11eabab0c3a5ce654ff85783ee8eefeab58451ce73e164a9df47dcdc9ed24b0f7a87e0ecd1a3dd15e6d656b8945f096492ec72c0b51d13613b3134c3e31cd1a3093b8023649c1b3a3ee8a09e5a8d612a91b4b14646e22d575cc09348a5a58e0f9b641037d7b63d32b40ea5fc16c55a0875f3e64f25ca97f2a70da0f4567c9626030b5b8463d8a55c34665481f2fc308d2b87111d23b1b6ca96013ff033b23216c27c9d2e1222dee25b295e180cb6eb9bbf72f59aec070ac809a79b3306e0bdb701521d4de1d755f75eead5d79a72dca55b6e25fd10c4ec68bc5c585aa1c392da26be5dcb75cf2ff4b31c3c578f9708191f59d04c2e00abeabc6b217d89ba9bcd0cbe76e72e316a4c7f18af642d9faf3e76a6e4f4f5e80e1252e52f996ddea279bae6d88ef866ae6f3d77e0e105111d04d4145f09691925cefc2a8df96f0d340ac86c0b48ef5d18ec1df59748bf5f261580acdc4f58cdd2c2649e4b357872dd982d9fcb59916037a8247c6e374f0cea924a25ed9a0b5dc15da9aeeca8a9a9de9811e1dcc4f05357867871b959ac9e1d3c4aa2633c9445aa2239d02e9e5c7d22feba47e7a0332f025e83da06eaa82f30adbfc8e1167391c6f3fa82b87857deec2f39d08d4aa3ba59e1598b54d665ba68438fc7493b351ab54b907a80945feda0ed5abac57584182e40cd4c8b48f61987a07ae6ff6196e5435324b3546f7712bf453a1f31cac5778f94647b656dcb4fdd8b58ad3645fa1d54fa7d8ea1b627f65d68d40b9256778b46950cc2d1e4c3313d542105a3476a7ae2e51877254bd756e7fb55a55526a32b78c95abd169da1929cb3a1a098d246f029af5dcd0bed4546b2559a6a4739396c2e222c77cc4d3ab47262cbe363465ccb3223452a35b91c15d4f2822fd75a91a191ed0b19ef0d4689a2f793d31607ddfab5fe0292eb3126c6729b37bdf4eef808a1a715982beb2f9d6ad6571d2346ac4cc75374b4641a2be62140dcef6a105eb3aa593207de595c439c8e94e8596f8d995690813b897f150670374dfd9ba0588c7ab7603958565bc31c274ed42da1ba94372ebe0b4f08611dfe26127e7d05aff7b9de63b360b8c3e79b0057f92b40348c4a6cf8c238bdd33c204926c342170d9c15dc3d69c7e61f2a94807a4b84d04df599411c11deebeac243681fdec8be382eeeadedf61f728646fdf9a421ea231fbbde6613de7a4f7bda125af5df1149accaaabe2c2a01841d24e165ae76808ca9af94effb1cf3b1e31c765559aefefdcce122bdfe567e67c970e6b40b468da0ad6b82bacccdcb293722450aeaae801a342adc7f1f443d9935f5d438a16361a087228c2e26c12cb59bc98774cbdd9b49b2a065c8a767334cf16dd2717cf45a0c8ede97b4f4faf99acb013b5e0079f2b3a6a2cb82b611dc7818221a679c007377edbb9fd0a2000b32c6a17e1b0be9b91208edd3e417e631c2e6d23dfa763fd792972f9a9b1c8fa42f0af5297eb49b0776bab810b6856e0175eb1b87ec83cd2cd12e2c5c1610e1eebe9e665a6c3467b870a1574e6f2cfc865687515d8a35f5e90d85138c3d2c9823696e25317b1ba5b0be623fdc6caa1041374d398578167f4352f315ae9db4255a32ee4910f2742633d79d5b5f105adb63b0a3d776350b8574477e572efdca09574445ece8dd6382fc21d7b9d68b3a4bfca158df4a7aa4cc1c0da1016c364c9fdc62abc991a3504eabb590809b2d41e4d51ccbb0e92e8752a4c0f72e74ca7e45eb1968191d564d813131db2b321279fe7a104abc6e33ffacc553d0a62d69ed3cb67798bf8e927d4db02a35334e9466052858e6828e0c28540880742ed54923baab85922e05e0b66eeb401453c82d5b4d7ff25297c1f9f1358bcfeb5d5294773de203d7f2ff9fad19fedce6c12896c1ae44abe0905ea80d24bcaad927aafc6afd48dde526f3ddf4e6cf94eabb9e99ca6852360df3dd2bfc7907e42a35744ba720fb0f366eedaa8e86e44059f64b384e296f00acfb469472ad01232e4a4833d11a2cf097c75492e2aa1fd7e425082195bf43f4cef3b3477d16b606866f1aa62644f1a31119b9bc787ecf70686468a96afcce82625c860cebe802c270605ea003b2b40124e8ca4ebc78a9ce226cbb3ae74a7fc829f53a51d925038ce9a3d3681cd50dc463ac3488c981dbb0ed6e4be127cd3aec473765c2aa762611a641848022e33ae6b5a1bd57d17221d172a1775ac54dae58a1b0e21c54853ba59ba46cce0c62399a547de37557ff4b6694b86fefe062af6efcc103c4a1a2bd06700e8769e4c70641011e5424c2a2f0a6a2c8ef989774fd59c0800eb0cb19edb51b69e88bf4faea43f5c2c2818f9b95e27bc68f60bfbbbcdc778c6f6b116333dbc17dd352e2e97bfb5e33ebe9b3e518f93e86067e75f064a714db634e37ce71d4bad65fe2bbf326ea2793c87cb44572c965ad6598312bd9838dfa8e1b599ccb8701dcb397e8466a8524b568e77be95cb96c79a64dc180a736a6d996eeb896dcd9d9aaa8b6a4a9aeee6f213df1a071f6f309c1abad52fd477f6f707f876f40ebff3530195ec39887e3d764488ec4c7618ffbe79265eee08cb809cdbd0f7d38a8a2d292822661c2273d8270d1e0b2bda7dbf1362349a9206ba25c0dc1c668b39db7724e29050618e43bba05f50f202d9a026894eb20fee7d6fcbb22d7de3eb89eeff428aaa1b3f18a9847fd5fcfe6afb9ead2c864e0db5c0c7533e574cfcbd82f14db20f851979722277aeb0ef579802336c90d3be78b47ded5c829e83956fc9587acd1b0157918c4a1db3676e4001f068128cd4c4511385f4ac39ebc687aeee6ec7d7535391062191f86b4a2f1818e6d1ddbb24e1e7cf743e399106aa1c39e52ad7ec2be7bdfb32b54e923d50ef8ad4ebc6a80c65614eea4aa5d07f48fc597a29ee20026def2f300c7d3ca727e8857a098a0fb22f2c6757268e390f839be20d459830a9e3dac71ef418215d9b89ba559a80341e1590dc964b8a6aba07faae4a9ad8e5969e9471d53e4da76889af5f9923b18bb584d71e30231e0ebfd9fa4891af34007c1235a9cfb2b0db0efc1a5417cbd53f694c6f3882e8553a0e01f7ae34c24439a97deeace8bdd2f59515de0760589ff6230d602be3893d27e34dcecce7b8e310d87790fff49ae5b530fdfdff71e61be2e1b90d4204194efd263d1ccff4584938c06666b0ab675a6cc5ca0c6578851730e281c107b58a27099647541cb2b9c46626662451137be1b34438ed825c45628d7dd49303770bc3330e5e98e9ada7a1ccb694ee5e00b27f7a5aa000d1d9d1f7614532ba4b8ab8a92367b6946247b5f69f870de10775325c65ade56a7d063757371739e053e971179d2bb6517c7d9f8ef37a78dd3b9d15c9d2f021d4b81ffe9437353a965d79b82177b6798a70ef8511d27fff215b741b9', 'hex'));
    assert.equal(instance.digest('hex'), 'af828b69423d5b667aa92cf1658c9a70d23be64f61bcd80782de5886');
  });


  it('produces the expected result for LongMsgKAT_224 26240', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('ae82ef09b711951f6082b1bdc5b175c81010e398b8f3b18f5ab99f78cb53a5f953be09c98bd9723740c7a4e6d26a64aa62c6973f60da560e14eed63d001f6e281701773c34a41260a2ae675de543f2bf2feea4b17ebd928aad65a17f7fbc4b7570fefca804956d4d9353937c3faa15516c8fc140ee8f91f2711e3ac0879a1d3cf7af7963cf82e08eee05d3d913d2b7e568cab7655a8bc5436193641d76f7443bef83d5f468d84c80b8d37250f06b37781efc0d885bc7358a2b90fdd5cba3dfdd0c57b8f66750167546494e31bb751a9e08e209952dc1efaa2b1210e69d974454ef55952e35ca7f40cde944c665d9585580c70b8fcff5bbb5635f5d8d549356f48d4b5f173c541cfc00c3f42695541cb778440f64edea6d0ac8dfd38023c7a013fdc28ab3c57fad938937cbcfbcd941d315e751465428b82200b75b3aec1776c18015aa39e25e162adb0ae24c19609f365f45bbb8190fabdebfa042076fcb0f2cba3bf258f6feeebe3823bebd9dba95cde03697d6722a3a64b926311ec03e6b56ea047d2f5c28730ce7b560fde8ebfb1ba74aa1cd2e57a12847bf510c9b16aef0c25ae397dd6022ceb1902c8ed2e24054875b5c0c9e6be87e9f40c99b85f90a4779c109130f0236d1c129dc2962bb57479e65bc99d5dfb6bbc7d96a290adcf3ae9ecca75587dccb2cc318da3a669da92ce2af333897448a669f1a4c128da3f964a01ad64e132cd940165f5708b1583623d20cc5a3ad9fb860f342a4d47e2cbe1c43577c9b98341e15b285a253c32b3b00c39f3f8f9983fbfd2d4f217c857960a7ee6c962c2cde2547249fa56f97b6857348d8a449ce8dc83cc99f0bfc29e214e0a3db6a636bfcdfb15a537979565161ecdfe6a4c29d88f4e465660e4b4a493b3395ac9696e5bf5f4d2fc6587e673f8b65bece1ca4417382a3fe11215c5eac591dda0be4a9f2fe0b1b18325280241bf7dfc621901a0e9f4cd471401064fab73373be0d800fe1ca296b27200de5158c17e64216f01eb16e58b9c9dd51837101447558dcd07c7b782b6016313cbdfa95c07b9c2dd25dfb3645d8f22c3dee68b1a43cba114ed27a6f3e55cddc7fa856fbd07ddb72f540d46f780ef5edfa68f9c28fecfcd3e967a030570aba49c8cb2a178d2557e6b9a3fb387ed2f6edc7856c2b05168180bd6bd7a88a8bcc8a81c5a0331e095363508cd329ec504ea321a6766c58d658e0fab942e1dc2a308ba7e122258719877bb8afe692d1cdf2bcdbb410cba4e5e5e4b8fc8e1449793fda1c14aa337a1f88840c3a067582632b652e2af72ec8874919f4d8aa94de30eb3f1e44aefebc66f58e5ebdc766b7a3a8cd161ceb65b9047e52b931ac59a03b13ea6e3f41e38b40519af385b57c72dec99bb7bf37d71f4a409100a3bfe2045b292f92775aeaf7c2394a15135f971784441637d51467bffe9b4bc853ea4cff5dc8e251263a76062caab0b75824d21c763d33405a95668a53da22951e9626a091a57f8a5a27dbe0b61c0f1c652dd0f04c12a3e3cf014d95bfd35e56447047abe79b8fe04cec137516c3eba6d02e68290f91a47868af424e1dbf5584647eda7fada8f051bebadd654b14912404f5ab54cb7927c413ee02714d74e82b1445f92eaf64c28661478b508996edb82014e014a968242135d40af966f0cf6987e7616eae588c298110ae42333b918b2dccfe4c6a60e97e65b63e419d5f6b640250244268765b5ad9b73a5d016d508331c42f694c970c2bcb745bf037a4d22eb2b4971d96f3689ebf513bcb2a2be78893e9888b623528676d94efbc768174145f212c941938096472551178fccf31250308041fcc72afdc3b845a45fad65487a7404c8970bf8a3ba2c8ab5e768bb0cd85b3a6f0f1c9eb66c103062161d6aedbe76c43f8e39f6bbca59956a5281b5f154ce2e6649701d03acaeec797267aa0623b70c1323d22fe6a01391143901e4f8cb9e8c76f40fbc443427fdf93ee909fbdc26891d445202891389410eb08f52fcc190e04219f2a75fbb50194a5de57cfc0d00f1a7d03a0048b03c5b12f6f5beec8cefcaa7bd41192865810252fad91650cbadc85bc79f33a940d45a39e09a2d5ef506eea567f695560c5189e9a686e3b363b999cbefcc26070158efa1a267a9b532d6c86c07ca47454b346cbaa4b4d78ef9f484cd11b2fbc26e352fc18c69203f8e9bcd8d4f1bcd1c3d4f7b12abdbcc58eb6e61468eb8d0e733d9021b679eb1b5146aa68294dc508ee15bd6715170145a6704d3e3fa306e1f47a6064175dfcfb46856f524ffec08851d558564bf943d9216d6199e75409516b8555a1429254d3677ceb193f163d01b444f418ec633ff9ed427fe28676b6b650c0b467ef2e7930ec43d3af92d6c7b602acd21ce6f22e1e463fcdb22be9f2234a9331e39b3a5505b11531ac729e6f1a8452c9c225fa040132c62165a26c59e4879d93fba9c75d3762fd1bb8d3eff59d628a193c9bec89810507f45edb215602fb65385f99343593881aea6d16b565f41d6cfaa0163f2a2871d21fa3dc94fcfd576f7df9d37089bb3b4b1a0db09ef42d91cef3e35347d7b76f5b057c9cf09c5a418afe3af06d27a4d95bb276238ce06980b1fc9215838fb0730c354c4eeba8491a5b793ad085dc5fc2697a19489132ca6193d96c4e1bb29da6d719f86d3e8d17973e76b57410b298bb72b709addbdebba6618abb26d557c9c883c8f159c91ef620d2fff202a1805de6c3ec478729a761e306a6ecc362c1c1f2ca18c7b5b3f9fec42e41d61ab5963a7a2783aac5e5159cf559f347c805fb7b45eb82986aad4ab6fe71a112ea039cbce663ea37ce6fc8a26277c8908ca6ecd9c40a702214ff22cf2a558e3b9bfda2ddf6bab5c7f182b8393aaf6e0aa1110a567fee52496bd861a92eb175ead0e728d28b2823bae9e40636b6797a6ca4571d76858c44774fe14e2b99a315621a830cafc9b8494d7d973b4fa8cdb8fccb6e5a0a1f47152032747afacda130021b55c6d9161149936f19668d8cf562b8f42acf4165377477e2447565861dcbfbe5301da8663c11d86c9116d38d59c4eac0f63479c90fc8e4f105d718023a1dc064cd1338825ea1241221698150afa47bd6306595ca5dd37b1b2b0819c9e2a2a8802007886de7c407c312f4dbd3e2ec5ec78f623f04ed7e4b27290831ca1cc9cb80aea157eb7362d3079cdfb102342512bfb1ae0b979e4f162410d31e0959e8bec4dde2bd9fc27f0b48787cc541c184c5089d39c9166f83079808a99004049ff1c3cc452b12a88475e900ae0566930151a850bf572a8e6f168126252280853b16e3b815a8fe5c8a1359ff78bb0861b24bf8c5592c49b07c73330e342bd201c03629dde238cc7b85d13cd2131b1e1fcb3957fc51e6ccfc9e4a26af0c2364ce35d7a47375ae86277546caf77635947ef7348759512ba6ded26785b1f905b39c9d1db5bb347f1f9c46c0adf8f02d3c030d6bbc2c89247e8705c7b1a901edb762f1abb4e62e874ad7538a07986803c49171f56dfe055f6323b3ea04166b0961bcb7f47dddfec344628b44b92e14cbf242911ccdd5719bcc8e7909782d890265cbb3745051ba36792da22a556c762adb228809f85fcbd1e521387906d4be384f32379ad5674b523d0657ea7ebe7e1577a554864c8725dd8709c9b4a16dcba3fc7a3b34b2e7c1017e401de15df06c0820233760b1dac69353c25e981d11671b2a2834fa539423c7717173eaa9d83d88885219c7f7f4049b22cb9c3ed5d167cee141a0d870bbc01766278d413027b4b11d016d53936b77700b243d3cf43182bc22ea0d86aa2f0d682193915a933bf693c44da024c656940dddcd469da474940e509c584309d6795c857adf9ae69ffad2fa2a97d367520fb4a62ffa547f4615e343b6626fb263c43a87779ed79fe9c42dfba6f35952fe3945503c7e99f3c4b1d11a8bd92ba34b61738fe2caf33345587f60ec2ed6c6b914253e894ccb7f06260261465f12a66ba93645ff0ea96899ffe0ddfadc9603bc66a89e055fdb75809fc6d0b974b0d7bd7e470090cdadbc91069fe2e17dc7ff9158861b81bfac6ae544a3f0bced711a3b553dfdac7a0fd48934b70c31f8644f8595b63aea8536c346b505583f847796abf0e89371cfce938c4d2148b99dddde677ea04ae4aa33c58d0b2dba36a8b7b6d3362c7b2c7a3be454833e2e19c1c8f828f05d034d7d216641205f916c1a72e512090f924c4574ddb24ba89f760d6f52f40cd511ca2172fc0fec366390b7a26c1f96b526ace6494c9d252d68a9da2a93fc4e4216d70a86e09fa5707562100fc69efc6631823b0576d5ae8c668ea6afbd7843a7a1104355cec3b2032f4693995ae5f018c8a163d593f83c86b3873df812d877ad92970503cdab0f4f77f10b1df1af102f9201f6d92c512eff44d1db32678ff7a583ab6f1acdf6c77d168e88e635f05297bf0e31e4826a27d8ad97702b9a1fef9958d34ba04984de027b22996da1439ded3f859a3914ea27e4ff3ed4549c4aab5d805d593c9acf76648837c4566eede6d307ca8b7aab4ddcc7f93f22715677a23055566a83c12d8330916b49179be2b2979dba70643a3307e4e0c6fc596649300557e3b7b587bfc80dcb36c7e8fba9', 'hex'));
    assert.equal(instance.digest('hex'), 'd25b2d474f62f6ca7d0bb208acfb8bd77a710b2644e03aff275b1391');
  });


  it('produces the expected result for LongMsgKAT_224 26744', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1a3deafce70af6f3f55d66ad9ce78d5f4d5c5f2638a810afcd07d67e9f9a1380d6b34be482ef030c22f1e978f544609cce35a74c5109ee7038495b6210cdbca8dc82c6e9e7b0d593fad9665382b3c401ab8941df71307dd77ebaf140aa66a1f76316478850e58886a9610631e9c722f459fa00c0b53124fb4f12778bbba3760826d3dba67cd030a96b654af93f8e395f5f439549489f8161683f124bc980e6939c83a6085e4b6caaf8bcd89a0e01ed70db487166cc29735d9235a9cdc57b80c9c2e591df6322f5bedd32937073f781a30389552ae83fbe147d1b3d3461a3df96c15cd96900c56718eaae838417057579115936862679f5f2a45dadf65d14108af1641df987b57986384fa1433789f5dfbe87e90bd4e9d8d4d0741fcda7348322b967b566b18612dbb8fe64f151947c3f7e361ee868676bccd0cb3a1afe046be70057a05add3e65af31e3ff414a627c0183e8ff583b41b75b203650420216e6dfcab289665f054cfe3ea0943647528518573bbb1d0f27e1449e98739eaf0d009432df0c1edc1625264b94a71db762659ff5a3a7a867f182d1f1fd34b341a4a181221870dc4a494013091a7e3b2b07e0160c438f1ee1e8a2b989c4ffec36b5083ea427606767c29672f44779a8505b422b25a56907f565b27690d011426a62df0036d57d967cd1d14e915bbc2691e7af818c769d9e1f9edd40894be88fa1d7a5952afd898e837716acd73953bf2d1d448123fd1a0276d2c2ebdc760a4b787416cfae5e963fcbdc8b551cb70f91da0ed4a8090fef178e879f2c34f3a269dffff09772d44a13d7a17468b5834c460957d5243c325f63f05f89d4ed98d361e7f0ab8a83948a64d0cff8514841aa21c7f337920a9983e59be4a0f1339e1e462f92dc1fc070126206012458a499a8111fae078e00b0ca3bc1d6c7087cd318d5603c1c7e0425e6f729ceeca5f35b82f8a42e0e9b950efb0904c5fb5c06d91d239913665ed1f1ee4b82185a01ba86ca2d3ea94e5a8842231a94c05280183b7aca289984103f122203ec2fba4a382e6f5236d6f68da05e3bb0c558421f0efab91dceef6d1ecdc60f9b88f8befe31cdc3c2f024a1af2c7336aa5d151e8cda814a5fe898badeb9dd680e337e682ebc22bfae445417e37d2d89a338659a280ab1206db74dd42c6f25639c1803bfdf2156df613b0f5924d209f7f9003ce8794f989f4f27b82121210f4f65ec5a1f7723305cee438c41f793ee04496bbe337bbd2fd3023830b1c8889c6f4d0c1192e364edbe1cd987ba5d66224ee9c9405e1dfcec0eeffc5c73d3123f6731c6295d1e6b854b884fd22b6a3bbbe5395312585cd138bca67532c6ab71bebc6657c50da87d2ac6068fa3970202c5e15eb7b4b3d2676c0134bcf1eac2b26ba46930b5e660b16060894884c88bfacd6779276b86f685ab6f17c6d53f621275fad66d021d26d1d480afab4b5ec75e0e763ffc45f599ea02504da5d91eb5efc3e4ae196f219e45e7cb05594958c876ff474a020ef73c1f09b1f7f7457e816d3af51d86663d4d461754cd5e907456691e02446d6cacfd33516206a31870543d574592087773653d4086c2bdcbab3c9b65ca11ad0d4e58ddda8b440309989857103929549b7300ced42651d4086661694092c42875cb62858e6d1be5f7274b4bcd83aa4da05caca186a30902830790f9ffa24418e1f9db00fa40477e83b05c2d11ad7d81dddb1e31f94a9dd5e9e13391c22479b570976e3afc1be41086d3be6689d87ca4326a7cde8e5b396a678d3cdb2c80fecfba2bc799ae8b1528e96d880cd098dde910d097eaae660ad4d7ea51c18f18aa1b39614299a172512521dfd231b9840909839eb69c892ee23f1bceec1fadba75786c7ded93bc9983f74ceab397eb8ba84f7e4130b34258d628594a6f9e2348fd91ba2594e07b8057e8a2ae3adfea0ef919555385977041c5b6dc4f3880569171f7217aaa9a85f2f5bbdfe3ffdf79248f2a35fd4dec34980c67290339b1c0a5a6ab8838157ae2f5140b4a24924a6688ae5ce72a48103ee9029ce8a0f15b1fbb19a12faab80a7cd9c0e389fc2775833e3190f1cf735ecdfe7f6b6c326506aa82613cbeda8dd3691b81f4c1e3b0fc32d7e6719cbfc12f4a26e0fc29d6417953abc9568db4ed9a294b9fd5f2a666dda546aba301b1c60985033953efd6f4538333b5c7dd3148814a3fd7927c366f40b3d7abbdeb2332ddb586af80959097663cfab2feecad6d368ae10eff9663d5f8bab95935d25f45776f7f04b46817d05165a9dd4770509abb92f8b9e7373ca780703569981754a51d6d376d65c57f55cd70e2df5fdf5a6b829ae30ce3bf942815c8b4be858db58151d02a68aab9fd373e047efa51bd1a0cd1b61744d9e97ceba3334b3baafea3bc9e43ae097cf2c3d713eecc247ff43ec74d54907d8bf45e45b2e0e11d82b126a8179d3f66c055e11f69ea67aacc5fee8af01faa379e51998f5070f9ee0fd30a2eb22a925586fb1b39024eb5eb1e127c76a149e7f02af1b73c16e9e5a5dbe378e08a9fadf1194c625132ab3fdefe8fe9a89bb8e0035a1a3ac5278f5d3d0ade0e41c81c6853a41c4ac45be3f68180fe23f27f18be2e339de1d559d75de63adf7a32bae42b037aeaa3e123a5314891bcd35ca48d57df4c17540e97202a8ea1328da25b1fd6be2b56aec1e5deb209f3b7a13adb1cbe53eb645956e577a7621d74e42376d70bc5c4aacd239a852fbb7b3f62cf59fe10438c1dc8e1e46566325da0ca43aaa63fb7e0b450a2db3e3a2204704d894db24b72b3078106e096cd543dcf027650cb4965e38ac36a8ad588c5962b4e26548ab88f0bc20e10acc1c3fc00ef415b3c32499264552b14e2c0e789a3b8a8bff9620fd939d0b34e806177ec696a4b3b1ca4b32ba979b2690cfb3a6b17bcee6877ffce757e4116da01099ffe82add5a0c593e73449a96db9cc2b9e846d166b095174f2caf8b35dd878c836d9bb6eeeaf8e1bc5d0e149c739828cc480d731dc16b35b80d4ad82ed7d29bd05018239efecf8deae180c6a459dbcbfe4aab9a5e2c1e1bc31418cf2eeeb31fdf8ba02c9a91525e9163f672bae2edec38c1bdb84ea237b4ef86bf5c0f0ffe178e3761e82d94f66e5ea40ba8170bf768409e1b4177aafd9937bce3fbff590320d7c445372463fbbfb34f57447f42c16e026f179cbf82f617c86d1e8d42f6c908f9c6b77e38d25d51303dbd781ffab569b4cf31fd0b947c45e1768a2e9dfe8369f520dc38d77937b69b821db4ffea8f50ebc404f0587b5598189f54b5a5b98966fd16801c87de2c3c7813dd70dc600824d426d88c55e89d47214d59206a7a65a65da7ca2e42fa62ed17e7aa5b3ed446bcc71f17fec8593be96d2037bd07f9476d4d732b32bc5df8c921316b45699004716fc89f8d45bae402c26dbcdf1a340847b932ff882dbeafbedd252e126c89a1e1fdd8908a1f67d15d8e432dad8e08e950a3bc46b96cb89cc5bdac703b3fa3e986ef1c6e7e6606e6845ba1eb2fbdcfee744b5e45206f4a419e1cb103c8490eb293ee9aec1f0a0d294f9d3847737413d30873f3c94740e8fd072817815ebbce3f09edec9d1211a9e99547d620b2ec56c89e9cb8144ae9e46636324bd13c6cca3ab9cd9fd8f7f937ababc598232384427a2d4ce0cbf9765f7225e208c3ce128602b0ad08a1baab77edb3111f0c6ca7ba0eac9d89d5b4378eb82c17f6ea08308a79a53d150d3f85efab77294f02ee0e2885ee2ab2793392b87db11fa77992f5b4fd75ef2f1a822e87407a4878894215ab89b6cc4a120f5a78b3c31ab80ffcc9acef53fc6f7f85685eb9d56d30d87c21abbf1652eef8f32c7c567bd1f08623b09c29f33561d42727a5649a3850071aa6c11735ae63c4fd31559ce560b27a362786a83353fe460b37074664a9421d3b2f6a864d5aca087187b27e2b82f31cb3df5e985cea271c609b94b4e58356d40c7d5c7ff2e5990fb39588154843ea5fca92f120075d4c4d006661a0fa1b0585454bea725473eef7d58117d5840c8348999003736c5eeb7858ffd273a1c3eb2812f5697c59110275b08f6befbe84c92497d5f73b7b6f794a849713b23ac5f29d5c7112fb2e7a6e89eb54ddfa3122e6c79624c1bf25ebfb9fe5ce6daa779f3ecb2984da42f8c6adc77b21dd291e684fca50e46070962a2d4f00813d8de1b8ed33fed9715180c7ea8e2bb74fa65d9c7f6e142f3c81cdc59172e1020f62f65ca5a12cf2bed9dea04a4d8cabc2948f7be823a3e792625275b3925a6c8d8e2b428c75a5db0f7120278cd7d6cab768755c7fe2fbf89fded1fb38ac7f76a2f8798ca36ed42cb7c07f006271205f546a4812c20077f050d4cdc79459fa686e97f0704b7a9ff7de16318e862c53d361bc635a55a264be15016545dbfce3c6d6849576adefb6884edd768214e0b438b0231b4f2692c2c0b5c177674f8a0de236eacd9e0cec7c8647e4e9a5861b957ec834a2f8572f01304c3fd6a06019e5f1499b62baa8670b652467fa9a4f10f053263bfe9743cc7d933f86136aae3a6fb56754d7d238397a0030cebea87cb255af36138c373dbbac41dd4a697032e4796c552ad9c9b3fa713c3a4e09e0ec5581e94be7f31065157662f9e9c678b1ef1b8b8a847c51789c22b1841bcfc855820af3258af9e08231090b45d10046a00178e89bd515616b8a44e77bf57795dabaf40687b2cda7a5014168f', 'hex'));
    assert.equal(instance.digest('hex'), '98e40c176c8c8ec46ab940688d47978b8d1caceff37c700fdd06cbb5');
  });


  it('produces the expected result for LongMsgKAT_224 27248', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('93b01f62e3cb9658b4809361da42e9074e311b9d632776d32a2a3e1bf168c7a6173e449f5ee483ff20b6030362a471fb3f02663d9d862a05767cbc32211d47efa54607c052bee3ecbc211c7de60ea83bff1638f80f203ac6675a07756ce149a56903f78db2018dbafef1b93fcadafb639a184155ee7a2aa9e49dc667012298b1d489143ff203f939e8a826290b95cc4c45a6fb25a4687e582328ce2d9690950a32fdc5b5f05f39582c8c689040cd4fedd7919c5bb9ddccefb127750f2776b901edaf7173e90c0354fb375c6249c935890632b86dfb37e475fc480e4aceb702f9353d250ef73ac075b0bb6c6b2f0316842b19accae8e084f0739533e3e3d62c5fc107033937edbf1ec95e92512dbddaeaac8bddc2cb8ec3488eefeb62a1fe844901bc12d9a0abdd8da4a06f7b9a9f095761dd80e891d2245e5d359b39c2e461ba80e33e1bf7c532a8c7cb35002deb5ddd49cb113c4ea214c04b95c4a5a68f68f513d9b470459cd87489e7e103d19bfe1ec3aa8269a611f0a516408232e396463dad842d0c1e92b25e9a3ca1696a5f2a684c23dde0a6b3f2ff2ea1d956d5e6af67f7d72e3d0692930e446aaae18373861a9521d67cf741c61eeab4e8d7a3f496eefac6780bfb826b532bc868b75609b1be86f9ec249732a831a6a8a490e2bb60ba628d144be19502eb99910e3130e5658fb5e3348ce9dd030e68a519407197f563b365f237816d9f683c5b736c40b236fa4ac9cec9a0cf8d5b54d5ab3609131a5a0e6bb4c4caca24aae1989f1859d1cd554cef05fd31220f7f46cc2e2d94c7b94840735a0f3a70a556d7e5f4845123cf16ddfb563346b9035ccb3422197b2f8805ed2d3f6a15bcc02209b40fa7609aa86fb6b91f765aa189e283148517931ede0f19552c945a341b1d693cef0167ebb382933fdca1e9d5b5e2f0d881ae1265e67e39793abf652b2df9813951d4335d988670ffbc2b9c98ebaec716d13d221d8c448474ed813c1dfa3ee8f8bcde51792e87f797a4efd8003ecc9b274d0f8693ae5657629da8e12468524ee8ff1e6790df08e9af05b1c6c061e6a24cf952baf4ce54400f3a1e223c0c181ce974eb413664db47bdcd62a0c368f8d4c2eb457bc5e7554b00e9da621805d97f677202390079bdd8171796dc51b1adc27723ce76f4fc1977b1b0f882599c8c4a1276b990912003b2d2bc9e8ef995bfc3d2993783688e1d7ff53eaa16700a4fd150340f84630d1cf90f9da0c969a4acda92c7c7adc9bb3f0b22b74e956fcff9005b059451add0e9097843f43e980f5cad9942018c6a801f779f04721d6896976bdd2748b3f2b2e2da690214afd6afd2172ae29bfd6b071ce2d693814a79ae083e9b1dad6474eceb547cb18d55d24f98e8d5a343690a0ffb96f7f3213eb1a11a7bdd6c377a2d9e85bfb7d09c53a13640f0417bd0366b31f482c2d8b558ddfb3ab4e6fa99dffa644bd693de9204a1b61e0ad790f83ecba5d445b3ed1c7d4a686d2ab014eba7807a40a84fd39e5a7526a9eb5be1ca254b02b529526ece401aac1899f6fb8c9eb0cdc5092b2208368baf9aae501283f8e7023cba4f17bed1b6bc52c8cde3f84faec6fc1f11fcd1f7dd3c6099486cc8f6cc7589ff18a4fb7ef203f6fccec16160d9197ac419e044d3bbaa2a42e03360585ef383c4b8c8c1025b8ce9cc99fcd3af5f0edc45409d5e3545cd66cdaa1dbcfbf727bde4141d2e659a7888ffaf73aaedff9a79bd5e89a28f4fd692da3ff432d2250774906b737adfdb06fb70bf3f6d90cc3b0b2735f66a005297eab3e3bcef4299bd8127bc8648bf35f4f8a14766f1921985c939799e2dcf04243b142e21516b429111ec9472ebcc9d082ce72ad41dfd2c887bcb86c31435564df1b397897dc7bf5565a1d59a4c7e3a1d5e28844a3c3e98ee11cfac4e91daec761b796617b092ca922725b09492b6bdf7cbb02f327875d2312cae9f312e18472e3efe7497a3ebd4ec105bf6cc0819beaeb6befd4d23cef5e7070d3e6efd79a64b4db4fff8726cca73e180c822497d0a23a1b9802a90447156809efef25cbd7414bb945c8dc78d5e3e531e4aa93cbb12b1be227aa6c9b90538634b01a50fda8e786619a4c4eb1717726f8365ce568f83831fef3d70d1a1bfce193b48593ab270c0ae156b2e4baabaf9f0fae96d0075a59620e9ad574570c1f22d3fac28a6641bd29e51d4d1d6bcfdc684c1470de7332728a82f910d524cd3b89eb568eea65899067d8e2d41a2b6bca64871bf53616ccbb06d50aefcebba942ef0d793c3e5827750d5c18017eba0b8829820beb3e8a938d5b2afedb984469c93dff63db17569bfc9d34bcf1f68d08ee24c4310ce9730bd5c8b0ee84a0fa6bb5e9fcc0a1dbc05de24c19ff31713eed55a672f476605d310190dbfa313c9c7b39c41bfc5727dc5063dc0f86cb5685e721faa85e42bd786206b2f8be20848813ace13afeac10a6f0a5cdb11b67fdc6db81165393bd4efc21a634450bccdaee378b71ae9e3a83a21a6b7c5d8a2b797d9178225c1e3e0a01905105ceb8f8a36faf0f7a7b93b695aac546bb7354ae0596e9bc49c1504cc2167ba959f58b0a2be263072067d5d89311f005fbc146823e9f10017575223c9342757f6eae3c00289fdad155f5d5df87651ed2e1d1ec43ad3abf521e782200e8a2438dc6ad400d549f622ac6dd0f99d16cf5035fb61457be66d1c7977420eac767edb3ee3500d072b04cbb3481be845ec09883886a8a0660dff30f25567abc2de05778d22797b4c1b2588ce383f28ba0c6cee621fb464c5ceecbeddef1d9a26f45046d5332b33deabdab7dc2e07c7732bee25f6b9e72e085d8965ce2a555a8b7dbf728bb85581120e16d4b4b53d5e8bf8a07d6f97010824e11b24a8566ad4d1075988aaa494142d3fbc9e5b29866b6c0090006c5e7a21ad534d5fd4fbc2abf5646b3cd3fd3f3c321d188b608cf6b6657839ae7a7e124984e7aef67a99c939eb3bf3b568583cf9ff13fddefbac6b63d4e1d9968f0fdc223d16046b5adb631c890c89ed795dd351cc51144872e57c750e7c01626a81b36bea868d80d319a4d0eba3de56c41e706ce8d0b7071b130bd946bf5a7fd1f0777b6c7ab9f03daf3eefa62c63f40cd65f4dc4f957acf9c4859819991cd0377370c58a71b2e78ee082e20ec09fda691290241f722c0a54126906b971c18d7669b7956d0b20cfe454f93d8849230340a99ea23b7f07dc7586c293dd0a96f9c2c9731946542c0b39a8bd98f77fa3f3cd1f7dc6af9786297300e7b0fb2c9a46df02732d761443ba36daabb8dff1b8364738b65e4ad6564b9802100c9100cb6b4c3259ae7db00031da4d7b36032344a166dee3867ae1ae499b89ee270dd5e87f421873012e2498b7ae63d40f68a123bdb238192653273eb360d852250024e24717037770454e23046c7dd84f980d76c4a0fe11ef4f02b9435fdf3378e2017f62274933aa23608f9ac426d9aaece609745c71465ec8786d4e7d06a91b24492f9f98ca43703f0c4fa97c076e0f5ff46036506b4eba5ba7a267346dab8e1a9462c956e8f4c3782c1353fd5584bbebe9ef40f92c9e8fbb28601b1138ff8a380213b672f4265018ced7630b5121807ba5a9dd2ff1086f7b70431a9f229f8695d6c66eb8b9fb83720f7c1f6c3ea50aed00ab3247df979288ba6185d424d5548507d6a73fb8169b1e17dce927e0cce71323ce25bc45b2d7ac05e92723ad357f8c90abb6a4b96edff1a76941f2c24bfc577d5b7d15d6250f87dbfe063306f19306d0ed329fdb6e5cdd6d6f6f21e019e58c3ffec8bedc57036ab69d9a0e19da5c1db8d0c6ac801687ed617da94f85161d10868a277d9354ce1e7aefecbffcbbcd441ca9fefd36646b28ac5ce2d9aa0624a5501bd8c5c2b2ed8d1c89ecbe58bd0b373b08e42fb222e7c4ef4bc8061e3555734267c07474b675dccf9156cd94731604d06f7cbf5fa22c316920fd6448c935b5e5663c95550d0634c200656a040ca293fbdac3e03239e0c6ae4b1926a16029d3fb00bd595e8e835b02885275310ec28b52b98c5c079629b8754a14dd4d88b3fea948dfafb235da712a06784391d3bbb9018d0054427c1e92266e980d876b25d8d8d3e163a9e5812e4fab120a2e297d2facc6512542b254682c8dc7be6bd1acaa5d917321718f2a2c424b3bce4e157ee4426eda54e21ca2d35f6b38766a7f684d39f8f3b950c368ffb33a08a7533769cd77199552d773294cec13050f4e7f65b5175a54a8591b079e9bdb496d597c0654700e1fcf3ab5c9942141c7be487b1d57383d334be037f45020885cfe71e4360aab5cf47b124f0d3562770f0106f2a66f0cd7b5cba869ee27ec6af4d613ea8a86fa99ea78bd51f55e8951afdd380d2a3f7ea077e62b215d7871faff18d2f807f6cecb50c1960c2a801d7f0436790877d1f19b708a183b3a949e35034640d38093a89fcb7fd3badb077ec1502187f4a110f26c69a118f4dde2296f20a7c2d444200e3b00b312d8863e478fbff8fc4f9a1f792c2edeb4f73f9a7c7c9e9ab4dcb7d7f5a39403d3b0d1945c2af7c80f54ff3eaab8d7ee5ff2b669fffaae319e6f4cfcc54f6cffa715691959e3504f3349e90d6f04ef7bd0222f57f11c912f44744c2ad3108da304995ca7d9bdb383b32a8110823d59a62bc32d610e083bf49560d76dbaec82292818377ea5ea68ed76daa15b2bfae09d1729b44adeeb45bd4709cc306e31953c74fb6ff05757cda9b0b422746b1cca7fa67c290a8c50a83c242f0bdf8addae3dacc687f4f8a89fd9077590634f984a1871aafbd9f2c35b', 'hex'));
    assert.equal(instance.digest('hex'), '35707dd2a44de66641dcfb35a06fdc001c74ee0c96ecc16b34696fe1');
  });


  it('produces the expected result for LongMsgKAT_224 27752', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d80e6fe59b7228d25e78586f94f268ea62ebe04238ab44e97316b22e96c91d186fac862eba9212ce845bedc23cec43fc3da42aa7025637e0ef65823eba6fed261afe9a48074258b235559a916e644bfbc9c3b6f44d760e3047bf7c885f9c70c44246a81d29f9c10594b9359eaa8c8c572c71426a930f02f2692d504e0f19e12f6bd115c085988bbdf2748a2edcdccaa3d29329b4e8a1a17cc20243191d2abc7a4cfe384291fa8d7ec57821e12175a156f893587e2dbd5fd32c2c1a7804756aec8ff12bcad4308dd33eef5cff2983650fefc04ddfc4301107193dfa9eb7e8a6ea2748072879b063c7b0955654ae2a68bf0f00c37f0323c6458310b4707dd2464da5a52b8a8e7ce6589970116ba93eab2024040c45f22e9b478b34edff4bc876896d143152565732fff04efe656e06eac38f19f4eebff224e32159ab375511b42b6f74001ddb15ac0cb4f6baec84901059882f58ebf940cc973422f6f6940a94c5101eb24ed21bc0c417d959b4f08693173e88c6dbe28b487b3d0ca00af26239b5b8992c60ec3bcd3855d2db197ac95c4862b9b90c5b4ae366759a38868a2b838e36d7e42552b3566d7a28fe6e208ae9c6aee50524881c482b8f48e9133ae2a9d9377a6f966f30603e25a0ff06106b2925012313cb3e79fa3f0dada7cc3d015b4c0baea4a79ec8e37d792fa13c19aa173e134774df393e1de9133369e858e47200648b44740f18bc0550266f7ee7805b85d8a19368c68110cd11f14032a099cc797db39390c2930f68059ca31592fbe73619043e1c095777d297158ae6c28c863face2299ea435cc1e7a09fb29071c21780924d2ecc41c9c9749da3ef0819a41ec086cd2b7370870694b0392d18b6b721b81282dadfe3c3c3fe21288e992c7e3a8fa685f32307529e6d50acb4252d3e170334c42c70fab02df832569c7e5e05042f71a4fa939b58572cc8b0cee4331220742d2ea9b1117362a1831c8247e1f6e1f42a88ff5eb9aa665f9a637db1be7e4ff5a75dc21137a50d07087185de1310bc5eb098450914b9c6ad8ddf67ac0dcc99ac61c3cb09b101df6273e0c3abb3768f24fd2c4bd2ef6dbecb1a1ecde1418ae5fca22d41dba0cb6c16b06f2cd26fe1657c1ea7abebc5bbc8dcb58738f855bf38cd96f29bf7732e91b261b70a776eee64145c1421fa300bdf80bdf6457e318f9beba2243ce8cf57dfa8ba0d5f124afc6859ddb0f3ed457fca64623b54a49be589953078dfda65745fa39cf0c4d9866c38f76231fcb44d3131f8df389ab755742f16db218b3978528799746a99dc7e3a958632563748039fdd9ffcbff6f93bd83dacf06ba93e39251621af02f8175cf541f0c800c5d2f5af06894b2fa14b9a6faa3a3c95570423613299f141ce25ee77c0259a40279a2ff60b51acafcf82cae4297e57861645dc7442eb052309001e89ff2ff5ba41f2f7d48fc9a49bd3062b80c75be51fbcc8764ad6d2e647574edc03660c9f4b7ae58888678dea4d6a5c2512f12a6aecd3047ad08cfecb6a4c95993164c583c91fc8558cad146c73c7f4c24704ebbd00d9dc2c72f4af1b24f1dd5c0bf97c283b7f69937a6af0c5ab195ac8d179169bab6b141a5a61f7fabd2b0a23ea29cc295ab04de123290485048e06af0ec211d93cdf8feada722b82b994134911b5ebcbf21d0130f910dde8cf7cd3e46c2be4ae26796f25b653f926569371ea09c7a5e2f38565d08c9d377baf51b6dc854866c50563b9da26fa30e0a87f5b2fc6472291550fcc7a0c423ce82d0aef24f54c05087627fde9c9ee2ebf228d12291b2b25cc8facae9c6209dc43547ba0208d359677c94fd17a76d0d84d9b18084c8afe1548ef4b7fc94d70450087edf0374cc414561e6575ad401c99908ecf28c6aee82f3412379a86f78ea9841cea2d597664340e90714c4f75453cbc4c24c963264dc8f13487a0bfd4fd04aca1315a1b70eb4888265143d82cd63046f0daf27d8f1a6ef988f48d13c56eabbbf27b5785e51d68db08b4ae2b9411596ae87c760d28a4e2c38a76bd6b715293c59131d3d6308c722282495bea69009ca71aa78a28b681cb782fe4274d499a856aab6f19fe9f87931ea93774ab13ca5b3e29c1ec6b300e67e525b9438c2f3c3af3c38276039fe82bb15cac81013b195ea9c430b8381f73b5f95cdfce403c0277be77fb7d8cc38f5c075347cdf1da4689845d803c9360911f0156f6c92b5f775d502674ccd635f642b266a2b03748ed6247250ba23878853ecc69cab7eef2a29a08e29072bdf32db742de368125cddb36953d15712302a9e4ad58c8c63c7721d4647bde4a16e582181144ad9ee4d51133a5534936fa3a7884d0981785f8ec556505738e5293020a2fc31bc3d95080e1f747b2e25281ed256540d279c07fe3218a35d4574d22d4155e3f12f7450f37f8fec6c467566746720538bd1a297dd9b987dbabf2d6110fef51b6991012cf338f2371e394f2d4967a7a462c054e43bca22794a20675854d742d441f0aa289b0dbf55e48f0d495864e3ef5b145351b93a2459b6ca848f40df1d8b588ff679771c0dcb69a7196d19c141ea0846d5d2934aa5c662acf1a7859db2c02c791250bdc1f5acba5638815dcfffc858b0bf1e086ead0be46e9c4018159729e645c486a4973e6e1380f9850128f08f315e9f9d6efe64ea210fb8070a498f98a1ece8ff4279b4028efc7d3634fa3ca8cfc10c58e349b988d3f6a13a18b6487b526ac779c82473d121456eb2c18167cdd74018c0079a5347c1f9873cec00715f0fa530550c814cec5b96121a9914a8291713d6c7b9f65a9e45b85ea43e93a79dcfb9dc6a6bdcef820242dfe7cfa4c2a532e6371681c8f39fd659a1f54536eceb20fb528c8b8bfa96069fafc4a8b23deaf0ab27d8e190fa846669f403bec4f302c7cd5ab9972529827d5819e6d1fdf2b6cf2afa57899f8f9cbe1fccbebe8d738e84779134545614243a1556ceb4601ed1a6da90599bd3b2e2aef9b060e27d879d1e08120651739456062a18cab94aae2807ce12fe0761aa96598ac40d1db86887708041a90d59c66b37ba63ab409c9fb025c5992b985a35c1bc3fea87b7791b6d0832a461a58b221933d2b9ad6ccd80e08cb8f85f52d3b9a0dd6ed57ab7a62f1ac77834bb86fc542131c779dafee3df16e26ceb0953661aff00843def77210011965016942b3ffad479749817ba8a85ef288091f92edba11d7fc01681a80513b3281800632a33b3a73b4ff9187c12a5701520724e77afc84e6a3ffceec439d530b38abd9805ee0a8016831cbfb54b167b65d466f9eec8058e13d25f977bcdccf82c7274ad9a71ddac8a0928e57b4cb732ded8d314e8312f99effaea028cd48be614256c6d39ca0b2f77a13829f172af85fa857bb734383e757a0e526b019d188df17bdd90815cc90d289e6fd1048c0963d65b5bda595d34ed760aa1066f1e3d9e48ae2a2dc492701e9ce465bb5a39ff722cf55e9e2f8611790920a3eeaab9ab0bf86ed270fe658c3a5f633fff633ece639a93332f3bff0746b5c4a5efe9ae4844f996fb842748c2e25ef24b6d0f8d5a476bdeb8328444e46393c0544ec9f1d28cb83a8c965e0d9b066db0366b431306459b6c837dc9e672fdba234a12abec8c8c813d2ff6fc625de96d35461cf72ef1529e5425ea1988ecda7381c0f84d86eba98f4f4d0f45f1c16f5cb3f8456da4bea3030f97b56dd494ee97c630656e58abb7ac6f2d8676c04a34c2ee4ab1bd10d1630dd59b6999acda447e646a84aa66d53c6ac0e3bedd0fc01aea8aa9fc7648d44bf585f6f133a25a590d63b4a83e6519f528b310bc03b9c97fda5fe700978a66f1ef4227afb3cbec112cc4552de5f605d9cd0772122b09ae196e8725827538c4473f82a3aa0f695c5c5d71f91f16cc8674445b799077e5516ab55853d86c1fe9e4bee06cbf8f9601e14684b00579f277964aa162beb92ab476e322e7aba464c0657bcb65059b47668a82190fc093ba433a16f36b22936ab30f6790601907048c6ecf7c4a41a406ecf866d70a3a3aa2a1bc6472ddac9f97d37ac790c117a609dd3741fac7a011960aa6e278100fa04d345796645e5958a0ae0a68b3b6d3f11df7403932e6aabc332a77417f2fed3651667bb0859133c0732c56ec52acdf8614534e4a2e007343833389073db6c212e567b7588b0bc81f0d622e1646acda0f5dfc807073efa779d687357ccd1d102b2b6189680c502435bc6522caf5cc16bec795174503a884fbf209d0a235762c7162ebc66828bb8f23dfdbb6468a5e62294d4597ff4f91d99cb1417b685cf1849d9abb58e63fc77f380ede5ac5e658c103414f68de7eafeb3e69e6641c04b0ca57c7e938d9ebb290d61a2d42e1b5c0f956009a6a80403e0c77773f281ef604c1959edfd1df210df127c302311e4a71a75622def0f91eca4717fae455dd9fea557deba0ebe1aab6186aac0094ef34447c24125706102c0b27e17fdf4f1d22ebc6506f28685e0d1d886dd41729f9bab64486e7e96155a26cfed69df3bdeb62775189e9ede39d7a0d03c511ab4d605343356bad7ae86f43e1e9eae2303028d187bc81fd3365d7b80e094ba629ad56ca352f3de8ed6dfdbbe7d2064c757af36b7db4efc0e9e8f2f25e6282780f7e059ec9aba8c04f5913e9632981241f75514c50d6502d7b01f4008422318c0bace5d135327e09e4f97fdbfd7cecdabbf16ba2887f76d9720e34c26cb8d199fb46b486d47e24ff943c1c23f3e99e472d96fb4b6477eac3f364e02ff192f3fefe13c69560fd4f4a2830a3a74ba8c8eaeb82e84d8eceb983a6f1cb024a9dffce69ae0dc766fe283619c11c5885b2fdf38e230b187d822cc6a54a2b643029a5d9af17c5c705f41403ae62956d977bbbc7ce900ceec2b7', 'hex'));
    assert.equal(instance.digest('hex'), '9656f273cf78f3613d931d50278e273643cd6662c48d243a115cad65');
  });


  it('produces the expected result for LongMsgKAT_224 28256', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('3581d4aef0860c1729eb3e6b504f00919c656a1c56c10111d21a2f9a77ec0ef7118bff2a881973cba46686d4f104cc94c30b93f62769aa2c0f4c7f3fb931b696ddb632b0fe71d57cadfe27573913cea488a68d0e45b90cceda68d966b725152ccf054757211d4e9eb42a97308c6af1e0b7a0df67c61f9357a1542ceabf000cfdaa1fbe71d305300d43a448a4845ec94df696c7c0129b088aaac29a43bce19726f94dfbade2d0f7cd7c4ef0fce12681fbe496bee9d7725f549281f4ae666110bf40f5235526606127ee041c09874c103caec8ee320d5e9f2d62bdbce321fdf7681fc988f453ef999b9fffd9dc285bedd0ebd36fc22b613765a34bc097dcd1f19b14c60140c8e23d7894132343ffc2b8ed144d9055d2795cbb20b8fee92363f6672bea4d40f9acd55a2be27cf813b0599cab2e08225c4f909e7b647a39f888b9370ec69b2a6e6591604a38a5bc2e0abf8b722e9aa2f05ad9aedef55a37810f935a46eee33389c375613941102d670ca6709506861bedd3dcd0f1467f4a0ab681084bd482730f7c753fa3f5ab47b7845c5cb17d17392581219af440cd67013986cac4ffa4b6fa004e7b5eee95742e7c40044b9c5a4691c2b584dde6a8a45a36481e715d6d9fb2734e5339dd5a1856392e8fecc416778805117989e30d422ab8d358b690787e9fed3767a408dd99234463b25b91c30abb93f3ceec89823c37023e7393f29f5065acd499d22e13b5909857180f7785749734027aeb843245f5569c715a881a1e7554179d5d993fadff2aae71cb0016e1459ae6c2ec7954c0b6cc8bb1116bbb8cbd81cb62dde57442f602147cbc64c2a4c456c1523b8075d0defa053578c31492b3234cc7370aea593aec0359abe3d1c7431cb62973e93b0cf3c37018b468267b664db3f45fcee737cff976bce35e061aef48e8cb20f0461d729fd1691e0d2f8f2e0d44f77b640131b9e62b80c751d0186f183760b63296b6bdce97a9c0ab4cc37a27a85e1897f6de52df9f0b08f37c850f2405831cbe9826f3584e99f7811f08fd05b335f6d07409a80229a567763ad8f20539e1641236e87a7cd3c847c9e8ec063a5a8d21f77f941ca7a56e23f90130b74798b71e7a9cf8416739a4c750c0d5752a781b11f994a0b0e1cb6d8377488ec2de642903f9b44657e85d8a213f1fc80e674dffb747c63aac85e62e295428aa315f60585bb5d5203598db4f6ba78fbf3f053d579534a0c270b542da82848b8189de8a77a339d0052b74b21d806217e902d9deee2fbe97db9e414ca9439ece353fe0ea8a72ed2116f002365c88af05d0e803ab494c3d1720297ace858cad90d30e8185d02de9bb4cc3409772c08734cdbce22b498661d73a18fe2738297f25f5466becf4df3be1f3d9160def5566318620a22c0bcc27e91cbb3f1c586fc8e09c60dcd424e8c68418ecce193fe29e4529e1419b1b0ea3597a98f19e999c780e543068cac84d7ea226ffd535f75de15134556d8d637064cf85f62799cbc15fa46a62c03b0012af4615f7cc4a6fd09396a1a6d13d55d27cc76e9dd09597d6becc0467b098f5dec034ebcae7a660394521cff7d82bd418ff8cef7c1e5c0fbe1c1f262b4dfa186c785b00ce614c4558d93716e17766d4d5eac4b0b81c0b866e41e68ba0be222d32f8d83507925417bafec4b7ee39c374412f71767df78376605a002990845b9e791011724151cd3ef26191e6c2db99ae0eca5579f3a24d021f15a09319235508135b396e97819dcff83617e641d6778829d6e3a26f7186efb14ddeaf2113b9ea538ffb2c2207b737f7b708ef54c16252f2a63297fe571034fb4bcaa1ea6c4b65017fb4ec7050bdfa24bacb1afe2e2d526ee2784e1ac92512e4efddb72e4b12810997cdc39ea1a827fa08dd2d7d88e781862e7c5bd964a143f61223423689b81675231cf97c64a3a71618f7cf6a44ce458037730a2592711582ea9d9eff63400fca70b7b5251da70da3d339b768762111d27b1a2e9ca559f544adf00f8c2372cfbf03c215b75cefbdd6b3634a8fd1054a5c016ff1feaf0526ed8b968cb44d279c04159e77a0289717d3e2515db6a7b5b4860681cf8c7a1589a3d85c5724a28976193312ada24c2397d2c10baf2fa933d71f2bb2794190730242e117c90faa6391fdac1ec61ce780a7864f6f1d6d8cc19c024f4791b4928f1a2b5ec91cdcc1fbc1e89e7cf5feb974a0231dd71d435741d8fdc3730012795fcdb4b15267cd200e576b7d1eb9c5210f24b916a01ddd1bfb1378aa865ed86d0056ca5c92e5f7bd57d447572560ed23107ee6c08f0510e2594f47e19ad6725bb303eed63be2f94c0501c609c565e40ad74211fe97de80cdc82b20977a1d24a7e35c3edcac3a590ebf65ee6f5d044f43eefee6ca71326aa713fdd878ccb6f53d09913420113220af1e37cec5fd5b1f1743ec129267a6d5503943bb5d4d21bdbe149e1ff74626b191bf75b19b5a2e4225fa8ec887914787a75ebd7c0cafbfe0f5caee05f2cf468a1604bbb1c5ffc78944017a814077b07edf48524eb9a9badced4e562674210a5ea26507dfe26211b57ad3f613cf951306ae51d4da53a976e139b3eff7830d661cedb059c92f93bde0209c184bed15e38373a58e8e107b1fb0df85dfffcafe9b005c0ef9c8c7bd3166f777fa5d061ee827cd45bae34bcf7ebca1a47f76f459d6dc5f85efb0d9b5fa5c4bf19494ef7bb5f76fccec4ede71b4bb4a4b37113289873f3d57d06b3d42ce543c113c789cfb88db8207d26007c809be2098c20034eca5539ac8122640a714b0ee35f6b466dd0d0a1d07d6547e6ef4b243ce9835b9bf6ce2d1711744be3a405f6e46e1824a625bebc42ff340220e68b785af5cd5c05c215a6d3e31df1ca97d054298c0399ffb08b4ce8b2d6d08a3cafb33ee536bb01fefa5fcc7aa905c83af895047cc7bb6051482dcd5aada28e906ead9b90cee2b32f9b917123651258d474cc699934fe732a9db3d830ce1c33ff39e946f6bbe363aeb3a3f0895ca09f78ed37b66c919a15d85e9ea68f9aef383a7ab61101bc6d4beb7e36bb9bcc04421a0bf7a263651c30a40b652286a5678ea0da516d4baf89d747d0559b119199a7a615528ccdb2d5b10e99b2bec59b742b40f8a3046481858f70d18b5441974d4a5f4a732041b999773a93c3fb4325b6e5f5eb7849923407e15a55ba46f3804de3e8ca9561bf87622ec8e91698c0fd97b6413d3212f1410d9ad0754b457f041a6805fc30d7a7a98700c5d6adcef4a1f23e51950f2fa40f74fdd6aeed47cbae6cbccb93e8a06950d980ca261705a8efb5b7bc866f5451f709e8f01791600aa7e93ad41088dab6ac9ea25285214d4fa5a1c4c31ed4e0157a3a6bb94f8e0acb66b0e5fb323284c54fa9e07542030679384aaea817576329fad20bf28d80cf824d751206be17a0ce16a9c2ebd0d80c7e643867cc32ff9ca92e9adab3e1096cdde69b6c2990466611489bedaeccb9bc135eb2ef54502acfafe497ed668af4c984959cff284b2ae81638f2e11cdc463318845a363eb08385b4002e3638fffa347039b40ef7315c88efbf01f9eab73a6f0596a1a16943b03139f4e1a3ea5182b401f8dbe08527d81ed45682d6459bcc9362de5d351a5b8437d79d24899bf5316e81a182acf4f740eafffef365ae54832822ab4f58d89596014fedd5b99caabc0e877604bf4da5a4a8f8a93dac8b5ff7f68bf4167560579317a7799d9ed14b7c4719e34aa3312f2b9f07321bd38fe232b66fcebcfa5a15ea6971c92c0eb377c44a8b2c92be3634705f7fd01f8e2b10f61a7adaab93009b0b612cfcac9315ebfaf321c27b9fb2da0120a08f512a9a9149b4797e400da17e749bfd1683df628de0d062a86b931dd19a639aa7ee332c53a8c771e787f7b7c6d817f53b6e57153c32b25f87a1df9407d2390f02cf6da3a508d1721f55e155e6e20bfec0d2550598d815f71e065426e4afd677a1fcf41a24cbd82db6135f45d74d0e8aed94bda26a0f42d19f52028122df55106e45f8b364f65e314ef77ef0b7bcdd82425d8e3212e3c7ddb4ea1d378e2300f10ae707466752b15eb4489cea807e9aa03b886f3d623514a7d16672b6dc025502bbb69a8ac5e374b94a0f153dd86b3b55308ac05ae5869c0ae5e18208bb0aecec3d5e399936d58ff9fb933ba349ad567f9ccf743c264606b41d8aa1a4c164ffdfc9853fbe6acf11f213490a471e80c15def7d985aa9c340c126473d1d14bcc826c12c200d72e1a00b392767bde0884005d270a1c62413aef754804a2f04ba3c9b4a4fc9076951860f9a0dea80bd6cf5fd6e51983af344b887ac3f907a40a694ded8840998c3a273fb1267c4c7cbc2fd0a51315f313e32818b45d6c7fbedb5aa673e7a8069c931ab838de2045e79852fd832c0546228aee6bc77d72d8e984575e27ec610e411de7e02725085aab0ba967a9300583f27a1893c1432f3e651be3e49d60690652d6177b39bcd6b8e0a6a6a812048fb2ccfc6cc636a0fea989ceaca7bfdb5286e9f9b34ee5bbe0ce93d4a4614a354ea91dea8ba0fe6af3a4350288b0caab1fcc135275ae5a659e4c3a08c9e2481febd150596e684009137de6a0f1752e25240283dfa58451c94f9ab96bc4f3df5507230e152bb0c7f0f4c0f00d9480509595eb25bdd3f3b299cd0d165ea4c2f2ba5b022bf57a30e8e39cbbdde047f1c91f87b658215076ef534fdec75580e210a948bb1c3ed8be98181dfb6e15ffde2bb7f3ec5da5907a71fab770d29ada2762d5887b306f7a8586223d8cb89a8e8421609cd80f2175f2daa61ae3bd7bd135be39eddd2b2687381420e2c92a107e28e3e00b507e325f4ace54137b37a0a750e3629d64596e1c1b5091f1761f3eb7c34ab6c54e108a89dd1edb833d21ec688ef3c37ab1f762e5aad7c6b3764b5ec04b3c3f319732c1a3d20582d9ef30c4b3536b7c47197c97c76792145cb847bd2fb84a7cb460842f0956020c320d48', 'hex'));
    assert.equal(instance.digest('hex'), '15e10508a97946cf7d0842c51e63d34bd993563d9b3c6b81b756f6cd');
  });


  it('produces the expected result for LongMsgKAT_224 28760', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('9740cbe9eb65ad1ce913f40be236b1ad7141f8ea72104b122fe9ac99b6552b1b3a34fd6c1b962f1ecadd53b530866bfdad8d81f8405c1d54e20d99f30fb041975f70dd971c17424c601f46516c13534967318d3c5d60ecbec607c42d0825ffb84d7c5c69858512a3c59eaeed3f61124df79f13d63c382cff70ebd250ff94e1684eb5ad806714b4132e855cb20c09951e3d1f185da09b0dfc4c026fef5d3487e5f607578d34c5a4e9c301c07dfbb72233542c04fec18ece500c4ca479a4762e5da2bfe630f6e4558192d6561b69be3695688362dc88defcf859858396f974e59744bd0224f578f3b1c6f46c7eaa523f672b52906dda5ad7a410ac6ed5d3ab823eb7235b1cab4bfac92dd73f4fb796a299c5f39de590cf90307c6bd8a7717c3251cd613917358db837dbaac615acbe2885558fc7a0bea8e15176756cf5c9204c3e3b02764ed608ddfc52a3bccc2cf4aed6f8af14953363b08a0885c131cbb5715eef0a04d18c4e6efd59e999f74ee69c79e96a9ce7a5d9fe27a6a651fef54b09768c1aa49fb03b09b6aeb19b38b00065ec6da01fb471d1792f7e3d5d8c14381cf68c42708a43ef343135929fccff2f6642c13ed2008febfe9972bc164e375383f50798cb84ff34e1fd07940a218dd174dc869025e5fc459bb0bba969a2240ebfe0efc1cd34154ec1aea73ff7858749735f1b2722c6ddd4a6991d2069fc3d61a8b23977faae5c32d95f3f1897b0e86bc8705cfb6984d49c1ee26a90b3c8679effab5adb871a3e219801c7b15d6dfc62e9dccc887cd7f25bb73ea2c3fef764962246390a4ad96610f5e0e7eb59b32e7ec20145308d81f6f638299057b2276ed045aea7103b44bc85d33cdd0fcd738035e670b285762c65c3ef52452ace980c41161d8593f46dd2816d435df7fe90871a9b4ca1c5cbe6362e225e8950889febc47545f607a7ae4ba8b86350b554f61d424fb51c8e9886000e4e07dec324bb5119a5b5099bbb126b0c0ca0cd8fbc304780a9bb44a4abf58d30db4245b65ce20b0975c7869b39b966a59fe69290d5ab3fabb12df5024daa065a48a07a8c084dd61016178e69fbaf1fd87cdf78e1aaba8a3a03b9fb893ab7b674544e6b1e46f943b149cdfb8598f98ac08efd8722836ba320aa13b406890449f985ff8a568c6643b24db35c25df8f0baa2a17ef66c2ee0e6f6e2b42e184475921508fa64632a4629b72f7f39513a08c6b55a8f0483f3fe1ae7528e128fa30745f0583c23c27b9d1ebe56ae86abc1e2448b15c4649e5e26e189090ea986223688f310f707575f7378c7aeb070e0ddfacff069debec773b8b50dc86a012db58612ec90d64aeeea037c3cf40e42f1948ef837937d67c7059732bb32fc618a203ad06d5f8b472d0d692d93707b6b1b85f83161d13bd0930fcdbcff94495277d9e390ab671371d4540e66ac18f03d625c8d38e75f628b06f478e6cc4a498bde811b9dd8b636f7c761277a56122e59d0ad8052ae00c8d08436408ea5433d6027f798f48ddf15ba7600363c7ef67236fa6ef377425cd9f634788e9ce34d08a956e24e3137149b08a0eaa2d831b0f3285bfd230859ad02d50feb10b63eea8044dbe97693c29c105c2164ef436b88d5d870f88ad5919fde8149b39aa65e931bf5d461a109a423e81c376f11495c0671f3cf371f89f81d52235d3413992713141c3f28f14a926407a239d6ad9cfe565cc29f8a836e5643f5ead4cbd6bc936effdc687b758384d070273c8c2d2dbb81123b524147979a8e0c0d99b09812efac739465d1a858ef233cdd13769bb8996856ccf509d50cb33e4480a6ad951e451cc637933bf8dbd5168c06a76dd08d42e6fb0ba1044fc33475a2342a53765bd4099546c9ef96de5b78c59ca6123223e6f72680a0b9dd9a12b24cafee32f0b6e145515222cbf2abbd7330b9a91303b688dcc35db233c71046716821ee409083c790bcaa893d04c09a8f6a9c35c072e5033108406009564b4135c00fe4037d2d51ab1d721ae6b74e867074199b73b93a6d89ddb8ee74681213bb677014d1cd75821eadddd7c1c78b6b75acf574cbb288d2b778d84f8599a421c5b8b9a3b120f8b8f98b5cfb81f4f8bbc416e3e1e9462eea5840b96ea874a6c8267f5d16451b93b72dd5951de2c4d6d3f94ba87a62a19da58e30ccf7fb782745c233cdce1b0ae1b1f1476983d123440a765d5db0c3e38c47bbfec5ce37b94969377394a25a90471aa9ddc98d559dc982a7630b6009a7748e9e5f6fe9397fe4afba1ebe530b8c46f4f18cca271856efbfe5791fb9297114d952f0e37949e3dd5a38fd3805eff33dbec3baeb22a8ee93b42f85c845cf3c2c00c706e11ec7975f6366c6a38c2417edfdefaf03aed01a987e464830d7891b0ab7f67f08096e81f937df9ab605c3abfd1f2673fa302882806718c0b8750c59d0b5f27bd16579e5e5aa1b5a98257627f97ae38bbd79a0c21e48ef7bae4360c003e8f86b89b042b65f436cedf39ca030dfce9ff772cd99274bdd0e6252d8eae877330a21bbf6f266f27d119700ea597a39acc8c212b43da9a775a6e165c60f6efb75701b7aeca101f70ae541a44eba7500df14efc38f2e8e12238cb7479fd4148322f1055680bbca8e535cb5eca77a55612e563f6ce2a57b1fb9b663ad0b55ef27b2ee32e6f779c6f9e74323256d3d0a2e247943ddd75836f4b07b1480a00cf4f62092e5ff60dbe75418b6bdbdba59da397f23b5470bb337487c863ada5cd8483e6c54d201883a3367da2b2f49c66b7fc675ac47ddf7d26cb3b40dd864cea1a178bb1277b28f198937c12bdd8c14573c429fb139bce19ec9b446552808d25f8610dbf949d33a06550383df5f3cbf799b0fa41dc5935dab118a7178381ed3ef9bdbd632472cbc48f21deb7b5b26c6d6a4c6d8bbca609ee39c501787f6ef2a9b45fff5c6c57355ddb17b7a271c7b56f1b7b4ccae8df84c01514cf9f8138150c77ac95ea22b5c7da74df60efb0605f310d42ee071438c514a418b62247dc2c55a23d0e731ef9e514d1dda73f57b2b6fc4b4fce62f1f0d0b545ab8fc08ad4449b966219e1d533f26a4c4f628c2948530c0518b96fa8b97925629dad65fa6551bfe9102cf1b9b7c43c41f8bf4de993fd53c4e582548acc64f67b2e9ffa34b8b9e2f64c87436ca6d1d0f22a2ca236fba10d9192400b11d77307b51487d986ddf418076833cca1639a2c9b80c309a3a4ec9ed9108a69ec136b73982441674239a6a380850a7e18584e9556b7a6295578e4adb010d5ec2a3c5bfdd3062a9bc5a2a8ac6eaa45f63be5002a5b53a037cd2e996d3e0b256aff17783528ab93eb48b2806ed0d4ca4a037022c585ee7789f8f253803d897ea6f0c40f07f04574aabcec469cd98b7cf1b352857ae32dcdb2edf8cc2e3594679b0969095cc4507dc3e9059cde8aa2bf16ff730696fe75cb63555693c9e003b47e2902a05132745d5d48c0a36f101778c66eb9ca3287397e278ba4a3d1e80e5d7e1fa041344e2ff0d4795476b5d2098e39ddc7738f5b9a871e4d963483eb7286681a3dfac38d5866bb95f2d6bc430ff11e395279db711657023e2f4e542d9f39421910ca02ed7bc767b47a33d09696982fc6a0848f12f0a84bfba1a0b42a0b55c3e3d98b05978b53baa813130d18add76db7ee8483a2d6b3410b08c7623c6b463e04d4d53bab51f0a5a3f26b9e0becf98c1067a21677c07822f5f730fcf5239d69d6d34b1d83eae3409c4a9cb26b754f248271dfc775cf455372c61c6099f2d8172274ea4fa40d87759c2ef2f5f4b9086ca4a7dc6a5a2001a3b85076a6436aedc3088e26af74c98f185057e0781bbf8d52c0e4eb3c4a0d3e22cca0a8e2d15fe75d87aaea723a991d813a67d93e26b31289b46e21416a00ee86b785e0f470c2a3d0beb18305915ae21d0e7d3c27c2d37a05c8fb808921d4e759a4d3139624bf2ac8d5ca8aec0ba07d5a03e13ba45ac71afceae9f2b55d0fe70af8334245e716fbd6411800d6043f30d6699a81e1a902f8fb1dd23fc0d9443f05abffa7fd25b6f0d83701578c54e051055a5d2785941bee2ced39e8fcab9923b7c305fd23cdacd5c6f71e645517d0bf34da56f7cc06175ed920cd1a6eb713200a212538690f481cbc4433b37bf7337c61edf6d27ffae8556941aaa5f43a5eb6110ae73e28e190ae0ec6e6a436312fa72d0affdd9ebae433f60507f624bb7a5fc48c3ae853a8c146a332785666367a8b7f9fb5863ae75b09fc3194d890a3f724d6161b0c8d24e0f0f26bdae711ae13ba8bcca55f9ac3bbd9ee43cb3a451a13f9d53fbc4d503f91ec773022158fc66662a7b75a617fd1b9d030727f2d2505231c59d9223464ad713152fdd353ad500d605c38317fb5c6a9e052b95261ba6405389aeea70855c0cb2870e97089d7f6a6231eaadc116aadfe3581d91b30b7ee22e1d8d91d812e641b7786c04c0bb4ab5a58f93dbc48493a51755b5ccddda373cde4d71e2007f5bcc903215983ba847909739c8d80955c350208c61049f40272496d550e01397e8d817b91fec0d15d61a28dba51618ff3e8619ad9de3cc3a9e35fc1777bb6189a1a50ef42cff1eeb716c827f793d80ae55065671a29af4bc1360c36f73d3281c690f7cf2e0f94245f9ce8a96ce53a99cb2302940d09be86cf07cc7a37073382d2f560d733739fa9d99ed4d16fa5a81066f5af01e17e757cffbf9ef6ca9ecacc8128b0361b3abdce840c504c31497ba5e15933f18a1bba1214cf2f019752cb5ae61f9000c85caaba2252754936ba350a60c02b33eb418da3572af143cbb2e99d6bfd8856a88dbfd5329b11813e410a56b0d570ee39e262f902a82f890136e1afeedac591904764cd5ef0676b7ef2a4317a484b994506e9a7ffd93550762975bac0173c90992a9e938e6deac563d7f360ab7da003248a1cbf3fd430672e21f87faf0a1a91b305ba1f6ab46bf37bcbf70210b40aa22beaef8c878315c24e503b5afad8b9d2384f822ae8c3a7941f58f36c484b8298c39c409c32cdf2551cf8a90df08df6c4313799b0b781a4aa05d7631b73969c5404d00cb053b786b5ea67dbfa9c', 'hex'));
    assert.equal(instance.digest('hex'), '4c052d375b07b3be2bcbf54b29c0bd26c3bfd516ac264f4de5e67bb9');
  });


  it('produces the expected result for LongMsgKAT_224 29264', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('e691e8feb744957b275e5fd879a3abe54d6d6c8c7f589f0b1a17c08c299c559e5f07c9eaa12b3dbf0e06342e6344229e9931217e77f34b53014577ab76fbee38ec3f491e7e0a129500beecae77745f98370cf6d4d0e39c4273aef366b9bb28640ccd6b11b4a7ea7f4be9c5c9ee529d0a1bfd1450b5fb9190c1d8bbcf1b80336c212992d428c200b5cd34ca3cdd75e175997ac6181e3d4972886fc9d41038b077cd1e786ab3ac82c3c8ad6dd5d01effa39629540a3d6002c9ab63a183a8a85b3bdfcf4d817f6505c7747abeb763dc78246b6f56a3e12e1001520f5d35c8e3f251702a66de663c9cb9c53e0584207bef86ecd046979044dee55e2639f40a4d0520968be443c46d71f9b6c75a82d8f7cf05a0d4a1a897e6b57c93922a5f82e4e7578612b3c68b7994d8ef2f85b35bd0dddd149ccdd8c9084f6f8ff61900fe8cbeae6525dfb8209026f6380ae677263b1d7ced5f8b2b0b313466966995a7af768a3383215ad8327707c8cb2656dc1e91902806b613bacb93d04b1caaee759b97d7d13cd0770a20a3f229068b28ff36c7048208a4693d4896a9f12162f3dcf18e97ddb84946fabd8fd5039f6ef6dd09540df8d5a6b7926cacba509f985fdf23a1f4eee5145d13d7d0e3e4bfdd1809a3918cac7734609f6c3f38bebeea3ffc3e4b4a8acaa1387440c92d1ced43511654e95b33b56f988dd43ede143afffe3b6e04f4b38b593251e0fddad3d26bfc1b40c5fe0573f010671ac3e3e6210e8799f256b153e1d95093bd452d70968ce651c7717bc935bf2fb77c21029b6550f535c3bdf804e7c2b1a5728ae231c005e31913be6aea15bd90491f70cdd222a548c3f38c7b2cb454b3b550699f6eea351a5bd69b97c2c823acb21f48a52533587b3b2b51eff4f453ea66a1ec559f11c387e7b5a111c7d885bfbb557959959aeafdac8693b22dea0cd30454b2c4b1a07aa64e3df3e4a36fa4666b70e0744f245dc0161ae2cfc5cd0f7a35e67651549e86407cf8d2ef259bf65ee75f2032e3a0d3cc6ea8eaf5fb16563671ae9f1185fda552639083558dde883adf86cb31bbb8764bcc096df60207e37cf5aa87e0d3565d5510ff0ac9359af6540c513bd3ac35f1829c5b342e66ec78be0356735e0ecd97d20f854094d124cd918a3bfd045545b1a7e17fe3e10eed4d11f8aa1b0e33285c7837db7033ac0d712730c0bce1c38514fd02985f99b88a20057c9781ff0444c290a7e0645e17d0beb2cd3a458184f6b4b5e100cb0d69279a9a185736e7eec42d8740e63d5b261cae061b54183e4c21994cfe6cd5c5441d6c3d2300509a40cc2efe67e63d0e1966c781bdf546e9e917fd283cff735b0017550b5cfb8b5ab22adafcee1e3ec19e0616dec2e5e7b45c2e547e48425be27123aaf91b4468b4b1389a095b3bcdc2cfa403b94231411ed835694190e54539f9126688f6232ea13002253e937e508c00165a3ef523621f06fea1440b81e8499c20bd2d817422b48f8e83131e0af707126ccad03a23237a4ad20353ebca6af49f7e8599b32b708f9c3bafea0a7be24c227fb0866703677ed85774f1069665cd8ef88c96cab5ec3f5ceb4cea915361dec906a67539abe4127954fd53b2d734d58f84e4c2e6e90cc1958c20b7080e6e067032186f2b38b80edd45fdf1c7f10e2cdc0f0ccb734e7cb286a97594b6d90228911379ff4c6174b9aa1c8b291ce061a97c82add414f551a1eeb9fc89dbe645cf82dec048d6bde94835d6d476f6e5e08e47616ed5766cb369a94d51f2a5f03e5fee943058c09dad21e08b822d7f51be5296dfc398b141817f5671df7b032b5c4bee779b7b5ecfd228fad0a6f102ed8d7a620fb0c6e8e84a020948eecb10fa27eedf71ff5e11d0e1a2da41be4029472cf6f26dd3f6ed6e4a5a7fd441200dc690307673ff9bbe81d71649680e3f62d62433ce3496269507aa4af5b1e002cb01cad3ae5080b152d5ea0c910376bd06e4c63f72af731721e8ae38e91756d816a46830a11ccf5ade1218a0301711d4889a90cf0527b8c29911cdabc832528d93b9ea9d80ade81b5a1b8b261995ccc4823b09e3b4236ca9bfcf0f430390554e4c3b3a0ef0fbaf130778ee84420cb24490c5863ce5f3d84a46fa4dad06a99ec00a17656b4c8497c5ddd4518ad30f929a1fc4f21df78f87f99fc1f9d7528e63152a1668000776da4658d3181d259903443fb9aa32d5e07d3f2464bbf241cb2fb60cd4c6a93de4a6a93c6cc48df885a8a8175e1a3805adc539c1c98e1091a6b5dfa38eacaac4ebd5fba707da54125a3da9bc1fd1be01e9be53426e7415796ec7c5673bda853b9a9a42fb762a63943d57f6554764a33301220af0ff6648f8709cef5244add70544586b033754f90ce00dd9b3884e27c25fd032261d57320cd8dc3435a22710569b22f95eae3b98ef5ba723c04c49d53a8740603fda4551a52716aa8bcaed8e505df7abf6d85383b9ac93f212b7110cc9aa680221aa148757b30185e2117be1e31d6a91cb0d4cbaa397706bd1a9541a21d38a42b9c86ef146880d00ecfcb293ab9e04d3b4bc12be7d35da30d8ef2baaf8684c07144a3322d355b993f1967bb6bffaae163631c4b7a865ac7c1be3be4b995b6c34f96a5e04bc54bb05b6cadcb6b82849ee9fc0b4a71972bbc36a00832b52b46ecd27117c60abb0075e438bd58611ef61b4e5fb16d58e2c3481ad2cd10002a7929d6764a11699cd1eafda718a1524c6bf18d9fb141fc9cbe224351c6b693316aa81fee436a30798b817c7b01787fb85103e730e62341ac2e803ea54506ee36e13c8de2802a84e9f5562e8b14ef55496811e2c1732caaeb39b030d752176f40b95cd5d5504b055e1a96e8cd190d956814344823f3bd57b5286067cb29a10ed94288ee8bc1658201571c15d79171a3feea48df6d1753f9957df79d7671e1697f17be08cc02133c96f725a2f67d6eae26dc67ff83324c4adb4e11b732513c7c46f8142ece31568c26176326fa4df0376b015620c5adf3c5ead45e547ede93e63f72187de806681d6f69cfe7e03cfa4cc9b39f6f1b6a3a3af90f5050a8a836b597da1a0544c2fe8f1ea7ffb27784d8bb8d8030072947beb283af708febcc00e1b3708b64a2019d01673a2b57d125cb244e0378fa8fd9c36e58e5380bf1b8e2986b203f090780c8d2efabe0c8204a6a86bc228179b165a6b5243c1a024a9a4fc2b60ce150ba1120be333b8c753a6193d3dd24fb4100b29f9f5e0cd41d7a15d5fd4c6fcb11eb903c57a10d264e0fae632526d0cebb43236cfa2605f8028a4d504a0650358f5f5bc09fdd7bd31919c2ad1cade90cdfc5d911691eb16d95c6fa0441f0294592a7565203c651c3057d9857cd1709662081d8c0b9d60625f66d51ccf94603eaa32d1183d1286b2483d251d4b4b16de1647e4bafb560e60f7c7f1b2897b450162d3fd2b491b38e1f42ead2ba92ac5a0bb517cba1080ecfce7261045152570c98f43494960772dd8f2601c19d22ccb586a6c7268af934597a55c79b30fcd44f9859cccf4f04a8d9341a20f9c240bfa3236a115ded021936bfa3ec90194dd617fb2d73ee30cc39e7d8db94edac85dd2479b3b1dfaaad2ac1c77db585586da142d52b0bb48540f4648281ed4c2fdd2d00ddf7a38096bc6c6842038c5a6bfb94edd676a690abe8a82d36c530ade04dd73f91218888d678c80bcbc530c886f09d61add7474be8153bd95a25f18f8b0c7084ddeb3b32a295ddca56068fa5a488c1a6949f2480334a54561d81bad1e63b92485a05786cdaecd5f5731fa72a69b69e4706180d01299ad26a7a07359f9b5addcafcc56c73f0b3e3a53ea8ef35757b39b46aac121372f50aab7ee71da1db329e00d5977c244255d43ba5232701d792534f441e2fc6c522acff45ee18577cf948d780488f5ac4c593d14d9438ab10f04d34b6cd118624c931e85623b4a7f08f844086882edf0ad22fb1594511ab21c79f476e48bdd43212851921e55cf6c83ff3e8fb38d17182eea9203a8d01fdbe8dc76fa8b88f290a25e0c46eac28ecea44cf436b34af668298a4b2911fab6ff585f175e8266f9e8709177305a81101cfc52b3517cbef6ec44b1a27d32361463864e4d15739d85badebaf7c2f58fafa8ea6a6d37379a30ca64e44139c68512d2713aa700c6ff2535b8edb795f6e3c46829edd1cd342fdb0dddf2302a1ca593b4aa3956573d10bf2a920b05777abe2e72a313c26a4ea385237e0f0b3fc6039c4ae5dbb055a4945ce74cc90627a5832c82d7667cbcff0d3cb6425d2e1ba479d928576bd46056e8af0c3b0aeca0a944858c97c0e64822fd3e91c2b763f888ef4a659bbbae149fc4bdac76ab6a507ff2d5c604719b08cff84c871356f344294fdadfbd560bba0d1eefb6442fc88ff1ca10112031d3046d6e83d02cf9e8f31c5918ed87987dd1ba2ab8731126ee506b03f85d6f9ffae34479c6a7d2d0facab8dcdbafa9b2f02e21c666d78fa034893f2d1026608984d68f9333395e0bf195bcaf7f15cb122419e1f2bf3b3e1e831a61e27336e25eb6480403c90980bc597e87b52cf5d0ff7770355ed502810d265f3265241b75fe2cf37fe0d5acc2fd3758a0414c4798bba778e2452dbe86bf9e2c7a3a5563019f60ddd5344f29ccebdb9defbb60c6c0f503432d76eeb47fe36d637a673596dbca4e55a880fb28f4cb8193c7a40844309b55e4c010faed3fae05d85648a339b47d5ae3cd142759f6d009029719f9af5f81c88eca88edd4372c7a827ece87060f2576ea82389a5f3f3ee51f503709b46a6d3b7f2a97fedc9bae4f156a0abdd77444dd5981a9882e5534ca71e315feaeca7d5d06a9f74b6f089c3607a17eac3a200557666817db7efd524bf37c58ffbfb0feae9d00f78d6eb7240c87df54d1774f87be2dcb26c9f0ac70b85c482c672051ea0020c24265cd97f265ea3e2db3c93fe14db832d20f5bca7f0e57a3b7e438afbdf349215a8d83b6dd80bf2997403de350bcfa832e2f393b434ee515b46e4125039e0ab05b7914ddaedb87c2c0a5bc32b2de4568fdff238c9c39408c604ead6f4c5a24a7c36d96cbd897cc38bf600d51ce093b71c63a1c8c36f45730d18ebd951a6ab74b014d915eb2a951458cbeecb4512240342a83c58379b5c98664202f783453b8c8cab89302883195', 'hex'));
    assert.equal(instance.digest('hex'), '8581aad309e238d2dcd283b965497b8674cc8f1b99096f82d78001f0');
  });


  it('produces the expected result for LongMsgKAT_224 29768', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('63d016d64a04183ea6abfd3d353790e22b04ca89d7cde3f2c60e8d36c7143afae96de671c2cd915a7d8f41c9f80bf3c47aa37487cb9c938cd5af8aeeb4a3c6294d2e12caf1f2c7ab70dd144074fe083cf82d37cb38042862da9fde75c0121fb7c04f7a9f7114f89a7ee34869c1bb3f78bb58fc646c8b16ca2288a25a050e34b8f6315af684acf3629ab24ee6ded73571c1837fe909efd3de34985158579f049250b1874021354fb1715047d9158a31e906738fb32d3ba01f559b19eef248781e23dc47fe2a3b12f1fc70d0ae922f6078f8bd1a9ce13e3c18df4c5121c132f0ddedc5961429adf7b32d62058b4e7b7aabe5c5d050a8ea33d3b5b6e90d22044e58baabceb223539a339de9917d7f5b3d72b910c1c8036c240cb1a58b7bca0d77ad820ed1fb2f0ecf85a5d0c0f07976ea27871ec7d1fe9ea51ab1f20052307b3f09950c6d1e3822440e7abcc34dba278379115ca0690112efe4b95699e6e135ca8debb173cf7a3ad551dc41e52e237c084c318de290be7aefebf12adeb0243ae576392c767f087180a125bb30d8d56bfaf703a85c9359182894f50daa694255d01acb1d436b270a7b0d88772659e74910277c2e2e9ab0e9d3c72203e59770904789c12a38d0465090ac6285ca8b577505a25cc87caba99b43166b521bc2bb6857b0fe26d99fbdbaa34849b2075b672d1fb6229254bd7108b199971e8593e1c8e83c2a631798db5e84098a67f2164f16780481110ce6a9eb4c1bbc12e681e5d248b1e8e2faaa081b3762f64dad22c9e1c2ab45ea3abaf547ce405ad56794f89e2086807279828782d4ba5e820d5d77d020b06536a2584d78d392b4ece456606a6b7aa9c80b8d5ab0758a36e77f97daa24c080fa4249f127b16cdf5bbf0f69b4dd425d2c422c0117e9085356235f49d7bd2773fed4e17712935bc4468a9adaa30e9ccb9b160223064a2ee4e17e885eb3eab5b72cf7b3715e518aa1bcfdf6cc3eb734fc75e6ad793a439b1221f895f67e6a924dc5863973b5304a07ea1118e7c72d46029048aa73a8baea1d8c9073f2ed3c0867f5aff73aeb4bf477e58a8b6a5a57beeb382117d3d406f3f1cf99c3c4d28d69a0bc05fc37735fc26ab83f11b6b31966831072eb960096e2c8b790679e816a5868828110047c474ba31f095b3eda571b6cd8cc9fd3b6b96b8312482a69e3caee423aeb6027645af2aaef27414327e45afb1c926e3094b36a5b3ebba3acf29e3687b6688321e4e244e50ea725aa0303acd522505866ad9a6e4e7d5cdbddaf2f7e327436ac51fc243bdedbbfb7c27adab5dfb41446ac204833270acb716929ab07ca60da847a14a2b248b56ac082b3bd8c643878de662f6bf764e45dc25fded62495029211a5788d0495f86c4cd468110323334ccea98558d5f9e2370d46d36286b5494042f978bcda3bc8b89bc7bb7cc2e5c9050bd1315c74ce3e53a4c5adc25121d15c7e55d4e290018209b3a077c73b1908dadbf21a42d2541fce96792eebef091f6067294bc541671918374e5345017bc39fd64a4cc56303389cd5bca803e897414f783252d937a61ae422956f8e6b0ef733de26ce29d7d54a86cf51aa009e4ed1c5c859a3e23c7cd9f0dbbf0409d465548aa5316da3fa5c161f4fa13020f92736d9337d2c172f19ea9c4532ba6cce8e00f133b213b0816d85d83e3a390d0fd0f7cdb993c355614540b27039f45e5184dce4c01f1ce6adffcfd35f3cff682b5148bfdd3902624046218e5e84399e1f9f8f3db5acbb2e5f61ce51223ffaa867d80bf09a7fab7e221a5b690e74d01c468269ee71df69fa2f05625129c9ceba4125208a9dd08fd68d618c687a43ea5ac1e6fb20507dce29699511c2fd7b565307edc53d77cd6edea24a01420659ca9712d8a76a8b10a0cd74cd144b063b1c314a0e965839e290c7f177e51b41cb92bfbcabfc6265901cd422ba182a218ae329d3a50efa15626d66df2f05ad2a9c0c6b9f1e445e9b0b52d37d6f3f518650e1792071b6e7fd9e1ec4b9049332b6253603683b4326120d9a978e8eba2ac3b84c56c2b322d61bc693e3e1d151ed48b9bd2b255c3c9c600bbddaf728e7e740b40bd564798f7be87d74ec0647ba3fa094b6255db4496c0c6ff7bc080f469e6b4884d998a4000090b93aa18b87222e41ae8e1b96349b2ef2a4ca1d34c5973b3830c894e0da076819ece774ea24635c2812736148d69420bd3112cd38f45100302ad4ce41e932c447ab25b79a1f5bdf86b11bb52098102359798e891d3939630223f973b904d7402c61e341f642f9c8123e472b7143875564f87209e94af8200810092be1fe1680b49889995c7e53c60af9d4aae258cad2aaaad1b2c0885d5bdc6a05c23aec33a58c0855428c3f72cf19d53df5bcab8702b1169d0d3f920f11a1d5284cf6f9b215668d8aad8bbeaca19cd28a2eed4788d753405eaac40ac97790ed76f24651d0a30ce100b83943ad138d88c9e96648c3061384cb0ff87a331c326dc9027e13ecb70319947b345979c001cc44823a5927198265dd2018c18bd8d164b936229d69dec5dfd656c74648532e505ca8cebf8780d8c4e107945403da3d3f2722e1bec6a6c4732717486999b57169bfd627c255cbb1d67ac5b5cf0316edce1c1318ea35a53b28c6fb61728f0c47e06793694572a0aa1b5b1561810bc99e9654e2fe1725ef20f8d1f9c0cb74b025ec7627a18fcb2c4241793727f122183e5613f20eb3c7ae3710ff7b8da1bfd52720cc204a1d796bd40996a74e77bb234d3ecc3d6627c6981a45eb18f03ab5b70e9e33059faaa61841e8a3b2494328c965bc46d5b3aff06c269f0c7e066e3e70a5d4279216511a78f2f68fe7b7d95c8b8188a4ca1dd0eb1642ff4dc25a5ca0b407d4e87284925473153b4e4ab1e97bd14c74bb52d07db409cc11e1fc07dc7972126cbd819adc8360222b4893e2dd6dc6305d4cb0002928f45c7f776631675c6747672ffb35a8616c24cbb0c079c1d201fbd02f934138e1adfa82d506c883060b4630ab838ae8bb1360811ae8ca3af047e247c026300025be214a392eb05382cd5ee866553b7b3a819d9da3b03b41258af3008cb7df06a325546677b954dd8031f2b2391f7b8e9b0da937a7a47e43af34bda0be6d4528bae57bff89b1b743912aafd7a169a1629c285bb00633101efb6e2c717305f57fa9967d174275cc603eb122941e0047b75e7a92c381d18549e222c4e3087de670898d789215abef33ce70b2c2eb72ed51654d1fe3fff93f813ddd86682a64ab795d19459aed7e0baf9b9c01ce522e718755a23264d6748b5e7475e1d0fde8d9828acd57476fae119195faba768a1ac66bd3b0af3af80e14ba86be075c7850324553114cea9890089dc9703210c824abfe3f656595ecdf0a9e9e59c2ef58be826a5f135f3942c63a6d3eb40b39c8e234e8e2371ae94bf17e378d4e9de4fbea579052d8e0dc1bdb0dce319d4dab6c7f53a1fb75903fd2c281f033d985806e476794f40db738bf774454df114466e47bf57d93432dcfc3bfc09a59ceee9877117287bb48bbcd5069ee3a2153a9c8ccef2d2783884c399e59071f698e1e85dbeaac203271852a056d287ef3084368ae32733d7adc8ca4c1e732fe4a0ee41b53d2ed50ccc0d79e127a5ce58bc480e432d8c855648bd44eb87ff98d58e3efc5eaad36bf84572350672f7fcf07c47c23ac9465931baa94431de7ef44aa957ebca2690063f3ec9a966b04c69b341c90524826d27869cc230327b883fe529eea24bc11334f08cf836705c3cc22a460d142ff21a292b97634805b873a90d32bdc354d574a0afdbb6b0bc472d27fd9116d6d911746bb104dd9c65a6a277e4e60a6a5d77b191c904a4babced9cd77f7a7b5c4b7b8c473a051b5eff46d71c4a0ce81b87d449f583e6bbfeae999d6efbdfd6b4a7ff709de3ece939cb5b127dcb4dec94ecb1cebffdd3d22237be5800c371afb56456882ab3dde814eafcd13a398c1739177312f8f7ddef2386e08426355c0ad2ac2111eafc57a16ea2385d38ddb85e32827bef105366617bf8585a25eddd66037b8f1b67c3911ce1052b2255b44f157e3e73f845b3f179ef540cecc30e41731b02a9bb3ce6f390d273ef3011c9227d274337670d2ce90629639e62a5171cf26d30daed75ef9a02663627c142f9b84c9fb5cecbe070b4854e6e406bfc937c8a6b44e7ef5f56cbbe6d57fd5d5c1504d77a2a14d844aa14ea52ad888600fd7dda4f819716963369e839b847e95ca7d89fbfbf11778903a884ede8fcd1e00d80f9bb241e8e6cdddf07a2dfcbb5ca7028a339999704d12903518fd33898ad0384d67d22cc63522ae64d57fe19cd0b778b56fb531c00b9f915c586a0dca070eaac22e84ff4dc718915aeb37a305be02d0af2f4108413ffd5df74ea1bb50a6f7b172eae0531384f6b11693d9ad6588c4ffa1c131af8bcc39fb49d03c850eb45c360f9941d27c4ceebf4d54dc75f40e3920613c372978db8f9f5005a634e22ce15cd95f3eb73cb35854fb5fa9eaf0d8674934d2e44ace74f473b1bf1daea7cbb91ff0b7524b51fcb51d76a21382d1e68dc6ccaa32432266a60ec5a15f154f390f17f2a32f22ec37f9546b066e5314428f1065ee24fa74e7c104b880991124d5f9c2c431c20497cb404f04662f583d9e545c08e10717d4a0331edfa018933c72200667beef4a3042e34cb81777c20171f1334ec1863f5a77ebc55aa06e4edd837c2fe057f8da87dffbf6107386573346a17bdc3fbd873ae7cbd3e78579ce308bb6cbe6deec7a24c5c7de64c2c857787a22bb7a9e698e9a6bce854d3be63eacbe4e10f1b1705cbdadba7da8c2037a0438a6fa54e032547474ee8a28386b4f0f638396ef7125e77cdb760465a0e196f1e44cf776ecfffff94da9d45a6c2a7747034ff6110f8c818a0b4dd7468d5237b6dc5c59b2403fb0bf2cde553e0e7203ad2e08ac447bd36cc4259d404058d499f7d51bbf7d8a18fc598a9f322154db7a406fc67c65b60ad2f9e4aef5a20ca1a988292235d9e37f2cc6caa46063124e4edef6f6db0294637e0f5c24443fd9e8f14d04d44e6a0f89d390334102990991dade07607f40feccf010afbd732da1d70305e61a5c36ab8613bb27524cb64b8766f47e1c5d42f1778fa02ed13c275b12906fa1d6ffcc114310cde819d3b428481af4739e962e3a2d90d864d4319dc67f4bddac76448b67fb439793b68b79c1deaa6def04a44ad66f2596cbb3a9b5460ddf05235d5', 'hex'));
    assert.equal(instance.digest('hex'), 'e01a40efa78de5bb500513cc1ad77326c950d991c0706ac66758efa1');
  });


  it('produces the expected result for LongMsgKAT_224 30272', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('86a9e1ce8c1f20458683cad72cba1a63789e61f8cbd6a54343064d72495a8c686a073a819dab8582a29ed75b327f02e001f64bf54d4c7a42df210b5fd2e225607289ddb67d002492ec0b2773e86097e631709ad777e9a12b14e6fb0b27d7a6b072a0cf1071365d04e7648470b6be00d588d9378c8e1af2f31768c56daac4282bb3911969b381371ca46b62f3eb1f50df99535c00ff523d781b2519e1bcfe4309ae568b1ab92293fbcedcae52b1bd6c605bd35ef6330a61adfd5cebe62b78df1c95168e41260b520b76c40cb767ce844837cc486e66a6d6892632b87afd270a965352eee8a8d234c566bf78b5390d940948f3dce2e973d68656977939a787916922ccd949bd41a0640bd44a33cd772040407baa11d95a6f2ef18e9f2974f1039c63c14fff476d976ce57cae6f2aca0218aed385b6d91262977d23e5a0ac9fffbda87c54c895902465bac9c5c6bb3e10a276c3aa7ef902b2ffebffb014a77f65383a277b10d1ea736b6d8b845408251046a1c5548f718e948e290bc94c86a05e030d7c0183cd2bd3f3166c8df648fcc3764ab9c27e77f06ba72de87c79cf7f8d6e83a8d5ce6287d2b17b9e7d90b25b9e757beca72368f9909d8935179524c136b0ea3240d4108265558944d8e77701ca4f187bcb48708f4c015cbdb81ddb09cc6afa46f4734f7853b1409413ada5d5584494034f5b4517fa7de3dfc07531cb6fd213a6874c212805df0c8dae74969e54cd9ac4ae778aba8ca52619e379ea17fd109572f2dd38c031cdf58de8f00e1e5fa2f1cf2ea39442116fd90dff3dbc92cb52afae95eb17535d48415998f1235fd966499faddc4135b269f6db55e392c0d0b50e2a94d53b13f220567729698f4a6465efce138a5db3aeca6ea2da5a4311706bb8e3ac2fef19cee75877151898beccf75b0555347e52c571b8c0001acc08c3bfe64fd455628dc7b8bfe30873760306c548acea0b7e8c6124065a16b04ac50998bfa57fa1f595df8272a0cf7d4cb401977f048d9530e5a1e5cadbcdb0a3d524b6ceb7d16b5d62725aa083b55ba595b46d68310edf2da3d6e0d50d87414e6421c6c31f51fa56bf9b46ed5216549e2a2e0900eb2194fd413a40e5bde52a85063aa11e51739f7325e109e16882b9b8e0e2df04727fb3ea6c66e415f2faeb65cb02db101d97b47932fcde8f121051363ffc17debaaf557de6314e8baeeda9d79cf7cb612ba87c7a2910a72ba20edf2f6927cdd6d6792b1c7973a604b7ee9673eacfa9c014fbd088f3706cd762727169bbaed092d80c75b47cfff0c6affd8b7883d8a8e1fe97ff1ff6e6f39cb47d876bbace345e205900eca0f6a193c1150748c2c5ee97ea8820b846ac7af90634aa62cb6e9ba39c5d94434e9da3a566ca2a089927aa9ac9a5e13f2cab624f2a7277ca415fb3cf19cadcafe6fc586e0439bfb120589c29012c873d5ed751e37727f867d0fd4e2dfe3b3cd53995a0f4269a3db407f5ace9fce499983135fe2ebc48cd7e708680444afbbe55838c92d23bef0713a9fa381789e760fc64aba84548461f62dcf93300bf8e1f0de9b1e2fb54f3722e0748802704532a156367984604b64eb400559e907c1a2ff27d3d91c523afb0abccc7575de30c1aabcc4d0ae4259f0acac4b2eda798970e4ee99c39c09e85ac281efe136b835eca8fd709d93c138e2c32e3d74444af0cf0146fa8e90c25869edb12ed7fb87cf170b65f203431f6c74c982fcfdd6a079e1487f1a8f2f1b2902564031a1ecefa435b6e6a6f61bb1a8b6ac55d6e7c8709291f1dbf627ea1565f1b834c3765ce94a3a0e012dbe7d70146ada1c74b08f21c38f05c05149eb0e7a6cfe7c16a1909cc3b5796768036813142cea62cc49634e07ca2fb27476019d3f5d32670ad88919579b91f79126415896bfe30e16b82289d8bc775b5d1cabf9ec28c4cec19e6ebc91e40976ed3c79b02dbb257458b84cd256cfc559e5be5b9ee9ae24270e10448d497923a71fe428f13fd1d9fbb49f58ec62c5bddfbd34276872bb3e7d55fdd1668f8856cd04b4f616b7b21e2b4eca9f727903d935a8075ffa7f388df6a89f5eeda1de46e26275ef5e5cbb60a0a745a38586fcb5bbd48312e6a665558cdf315969c2778f270ca2a2320ab4b99080a008c56e05d7baa9e82fa53b0463d74ce409becaadfbe45a3665945bac2188d9607def5546bb895e5ea89ea1e0f77ec533929a7db48410eabbdb346a309be64dfd207dd20702341f1819faaf938923e44b041f1127679549e3bbccc5f8f6ec7131952522166b5352420cb210c09c20357ccaab709628a92f57c92a21c1c9a7a7f4f83ce87c6033305814acc8101013760ac25dd61148ad63f8b96f1d629ee5f42a09ec413593fa03b60e3ba22423413320c674a8ecb1afee2d6a7b0355eb8915709c1d4a0b42741e2958988ecdc18abe89ac555543bb9aebc35243397f9a3f7a53baffee6badc82d8a5d58f20856219f28d5695ee59bcf14ddfd5b703d93f371cb608fe010dc96688060b59c185b043dd8440558bf6975fa7b7933350fd69d70f9c9c1b89675f4b08ccb7ccf67ca457ab338f744ad9d5958e8ef51f3203f8d70e05c208a310ad2ed9898b1601ec3bf5693b020abd7fe2b5019901b11d7407f13182311cb4e7e2368542106e03b5b3b864a42649485915b2584c62feae05c047b1ead2303245c3450d7e872bf3d3a65d9e6ac6dd623d53f879000a3556d46760d0548a552b83adc917ec8617e953f4d84064e3a48a795291240ece56dbedad22d05c78752acdd3b5854fe59c217efa6f538d15ee1a78b5c4791b06057e593b3bb754aaadc08d71f7913a2202d53c8bd1d83b2142de9b70abfc0436312c1c59193f63e2d209f1d5f1f81fb4e8fb134f656887a71f68c07323fc534cf6acce144c4f7c7c41818b18e76e15c1c0258e5bc63887dcea5f99738be85cb1f4c9fdf1faebc534ae8a285c80f13b2e208c5fe4afbaf5f6c38ecccbc8b1e9afdada591247ba07f16ba9e4e36f940e569834f1f80cbca9ce8e3edd4caf4d32d37ef45264864b36a29e1729b2ab9aed0c450b45f9d600e773da9d6c5f780055306eaa6d19e7aaafa8f41428247360fe13bdd873bbc749dcb509b02a76e79e2f2e528e4f381b7bb3ae24b26fa32a21d7723ecb9853c1b606a54f14b881bab00c2231c770448656151f7ed9e4795600122c2fc459c872cf53e80e4241220882054708ca33b2f3b4f21fa384884c810512ab5eea4b6612d3e4def6040d9e5f3603e6eac73c73cb79cd540435ada4a5d9b82df4545b69ee0f4840d2954e023b48da0444564fa3ff4259b7d8a20fcb66241c6f06412669cefb3c8b9e9e0a83e9ca0ac744ec7a26d896cd43e994588278a56dd5827e2539b55f8dd9f121725527b07623d4876adedecbfe0b4bd41510bd30e3aab253098844c60a0b598e69db2e1cddd77a964db8433756b5f954453a2ae8620fabe6737b615dc4006d03327df04e65c8e80946d9fe5ae5ff38a58232eeebe85797a0d332b55b21770b10015379a9a5294404f4d356eeeea47c129e40b6014c19f84cc1b96e3445935aed67ab3a1aa53dba570aa0f29ba19b2ae1a6c48e345f39a1e1a28b2bf637723eb708d989eb25decdea9ecae0b2b2d93fddcc68377ea3fcd2a9386b0cec6893bc3a57867b2e48201a6c019adefd0f05553b0554b938d744872d061fac649a68d834ca52a4752ab4b36471c5d4c65754868c031fc35d8050e50e803960f8175ff0bacc08644b51d316dcfd9982d076a6a2cbadf7006167fabc7753084b7f75c138b059f145a668c59957637bb8f7abefb8922d509fefbcdd357f15edf1f62bb16b94b6a1e7b4e353256dbe17b2a466e6c4ad72d25a177ac333be505db8bafd9244b5068ba7d4dd283ee08459bd47b2276f3c25dac5d7001ebd0e8892bef4f0f17272dbc70d15b626e3643e1664cb7bcb5cb6521c0cc8e2e08357ffc3a329c72dff9b4f0009a3011931a1630020ad83df6a803dc11deda448260206475fd7b2d0c4ae8057ee9358ac8efefeadd2835de0ee6d8f5a2593b7ea0bd5f8a7fb0d003e5c175e4080ef77fcefe8c34fd09ac0c5621e034ba475de9dde49d2d80dde836e6a75e9b257e46373ac2cd1c81f8898cfe8b2dab05d35c404477c13303438eadcd2502ecab5689c3b0b01cc6128d27784bb283ed8888b204160361dae14aec97cbcd81a9c1cdfb372a543fbe7c0314613fa7a1149221a169f58f26c0f0086141292b10b9124d91123d95074e53ea029801e6b187e5d28d83ec90ad51c80d9b350813cc019c7e5a2be39bfcea02bf08b865e6b31c302f4090166ae3a624f19a219dd7e6ecbb29578bc96a919e04b650d794fd17c81ee27ae97455939727ffecf7bf36789ba34b04e8892fd2236d6402c80884eefc9388de1621c746d663582305b6a7b3e1d8854afd6339785769d4abe411b9f990a42a5ef9b43c8f5c459d50559f61690d7816d43ca9b15bfc4c5dd5a2f520527729bb187c14cb494885142bcce3d9d1737ee57518a1cbb8e9194dd9d27276e875edeaec931b1227bda3bec2f7c3f0f5690c5de5e9db8aced68b0963d35535e6f8962ff45264b0112b88c9bfc9212027de6468e86f1ac632d4c8b264ad1eefcf2f5971acfeae6b8925617034814cb3c9610e3b34284ad38fadd07def491ddfd660f4a54880c6b71d9daff18b5ae53a7274aa6f62c9abce4538e5cc76e9fd8b271778fb8587f154bfb0ed98e20a4a5e58d21c7201e70d268a744fb9daa1a3dbee501c6552ee5eb7e98fb426decb5db8771f0d1e8692ab8fca7b62a5b14093db30ac68518cf728fa8757677b67b95a732d8317d47a615eb6772817e89aa523940b9b08aa503e74a5d755e8c267480b57f398bac10fc8717688d23a737822f7a031a3e02993896c57324b0c049e0d0a3b6ec32bf78dc16d5436b10a3988112ac87aea164c0612dacd8fac6ade09eaa14b443524dadc696570f8bb9219fda4af04ddabcc83bec86a4e30788242337c17d721db5fa208883d2f00af1d1599cd58d80dfeace67f180ea8953f92c16bda7e620312cf4599b4807a705c50354d8dcdc2d4b518cd66225bc9c90bd3383163b24eff6de768eabd77e6ebfa2c2edaebce46e58ed8b858b55ed87fb14e3489ba11861ed0434d1c3c4d2090d28bf72ecd252df9dc34bdc41dd409049811fab93254b2395271244772dbdb594e2da076906d0e0f85a025b2ff3c6ec1088c5c37f85b92f6ee7db41f7c867e35b1aae99a4e6b60f734e01e5980b608022ef2439d582685e5e1232b25c71bced4a91e3aceed3e6a1488d8b582d10b7971e9871e5ac2e6936ef2d55353d', 'hex'));
    assert.equal(instance.digest('hex'), '9bdbeb56bbf060fd04e854c7480a646aca77c8ee8a60ae07a2ce6d7c');
  });


  it('produces the expected result for LongMsgKAT_224 30776', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('1633256ab03b20ce079196b708a1c02d1b6072219070712c8589ee21341d50752acb6cfda17e982d828bbd6cdf54bc7232fd418a323d64939928597b9b52f07cf488250c5e42bfd3ab48012d709f8d747225839296386fce5fc5aecc4ba7a1076d089dea8ecefaa0cf66fca8602395719c12a04f929321784d7ab8239fce2ff3bdae046a266132b5c2ad9f7261f3014e87b389a6695978693d9371d0b1ff9c405f338c2fde4687359603950a54cf4b9cdd9b24480b239acc5405c14c886bbb0378391cef0662a38882bdd09e3866ab9a66cfbd28eb5ee4f8009bdefc4aeb16700eba7dc557b489190a71fda75e85f7ef841697f70ffd4fea185e7a67c81c5b8f273bfb97b2cef695c1c74446c4b425be6b2e66dc0aaacb247e4467b7c7d84ec33b6b5ab8fa1979f503008bdcff948cdbf1226b1b066cbcf34797298f3ba8c60fa01e0ac8b803223c656112fb91435d75453bae4707b63330467dd13e0a4b992e6f7e46995899a2d95d23f4ac3d0802b2a6e7d024dea19ca408c4bbe053f14c9ce264f129724a18bcb18f385b1ca091a11434ea96d98c8d0602e98edc8dfa14141af93ed0ba66e885e9fa108591ae59e109ae34d6b9f5586e4b4d75e7df7c32958a65e88a9baf41082a0a3f11539dc4ea2cbd9e1c6c3c439b622f1de574fa75470c8c939b51d2d1c2a7204b859881d43086bfd8fb90346218d099c5ab36846f3b98a7c847318bdfa01e09717943fcd864c5a8a17b6ceb89d98e872d388f20adc2be5e2006846904f41682fb1283214f3d20dbc9fc9e0ff571844a1282e88590d7c085b2c568ec5acc4462b389feaa5757f7033187e2de31955fce55fedc909255048b327ccab2e582bbc9d8054bf5cb45145c7d3a3af9cd5cf6ecba490c634ecf00e646bf95e8642c43a4978ef08a574ef1f78f6ce57c3b34b5a123d123617fc8ec9b2ac0f9b70a7f6062d38dd7b8e9fb4eccef13ded5c0477483addae4f1cc0cfca274b1307ed0de72fbcb819154cda897d7575213042615f1741a8cb646a39f8d134fdf9e60e000eb8220f65cc30f5fa52c431b9e3b6101b96e25b8d0440b96e572a18a01747c02afcd7513542f7aace194632099d16274f31ebabb60ddd94fe43dacce900ec0902eb5e686d48ed8d09ae63da0e15c736809903a0297a92de84e0260f11f446e1fc448e0ebf59faea3c726f97925c57cbdf85b1f77078d36257c85d56cbbedce180fe12b687ada2dc9912fac60334166bd2cef06b089ed5c9563844d71d8fead2f3a93f3c07c52537336a8a70bf5b596b9007b9fdf2d082000f20e6b70d2a7e6c7ed27c4146895a6d85a246f623c1b9258a2f891f823ade4ceffd59d4ffad077351e2f506e9a5bdd3900f0204b9e8969afe72f5dccb9cdf986d197ae4c4db53014041ae6221b750e5290e307ad292c8de6b899235212ef8ce954785537dc9435af11e0f3427a9c7b22efa752ea0b7eade5f6eb4093bacb78676e506698139e4f774423b8942166f9a7d22480d814fc0ae19cf4960fbf6e01ffa65c8da5bed4f1ae2b9ecec5be7b3c38dd4045b0c93ee6cc77a7e61e85d331b23c0d164b104518b3405497054445a353e9b48f2ac5e8e96298d6655614336cffe6d8c9c915e387391519ad2632366aa3bc935030fd12927efca17505ed74c94650c778539004854df6c24269aab9c273a493d3e5b0b1d687c33c2face46b4bb3742d6df743d09164d2e0ee7f6ba128bd5fba2e3b33c199ae80fa9dee3ad811d02baa3d42a6362b2ad47bba8a2c5cd00b46cf22cfe367281488a4852eb8b7face79f0ca6f8e78d32578dfee01711c4dcf3c26d0ba13f3075478e708c5c5315afdc2e4c0062d16458213bec506a9e991a61825ff78da9ba1baabbefa56b4a8c9e2e7b60ec4b7b541c8e0f79c86bb5f03f736761a37169b2aab8884ec6ea217b02c59035f5bb327243d126b78d4aab430212439b5a75b80618dafeb66aa3aff866c4daee47d374b512e74ada933ef24a841ba271c6f02c870e8ab950fe06e93c91df0e99165dc01bcb190e411eccd85358fd4a88127a22e4cf4266a90845124bf97b25d7b1c46d3a0d68a684f84e2a638c692a52cb6e8c651a3ac492b0460004073d5349e35552359ca37660f77b2770d6b2b3f7b1922424ac4a8598b4c61a6db507608a72a6a7d573cc055206276e14005a28a0ec41f28d7e260611d40f089ffe5e529375691412f4e9e12e62c3be2c563c26d2444ea9c69e6c935feb4dc4e802e5fe3906f8acef4798d940c3cd574bb5e74506c3e0b70cb62454a25f589eadb6b0709fe3b50417cd1d98f08e08b7cf68a04cccf8d6588f9fc2f31e533cda6159baa4297fa446450d71c16ea2324ec09773e7c8817ecf680ed12f64a04863efe3d9d8760f34de5b0860b3991ff0ee5edba22c4d69120de19d5429e4aae91c9e7cf05cc807159a58f13b480872ac1609d87e7009dedb71c09ceaab640a2b6135855ceae4ac2954933a0255b425d9fdcd9c246f82aeb7c3bb78c6e73e03db7aec4245a28693fbd36ef4938d59cce19eafc00671a0851612406a075713c5d1154d8e13b59b7c5b0902239d4bacfa386ac817ac5ee02a181a9a47c622b3ecf287e14843d452af347110498a620b34ab4e116308d976062c9ee9cd35db6cb79805b93ac9a15afbcb52f1ed4309879d1924a4ba190b0b86e60a516e77d34b4e0a49d4ef2cef3cc2f410fd8ec901363fc9ebd75eb460d4d8910bdf27ce26a8b4aeb94f9f76242401dc35d0644842b99fb6c439b82d82ecfe1af0d01f9becb15bec83f13b260f7f714aa381032923fde8f8018f3518547451435c9a5207294d08a907c73696f6cb000745e072e25b73b3ee11595433d27a1f11468686f08094f1d31f5ada81f11f0677a29d72ebb2e1c4792ccc607cb938647e1f153f9eef03d982595c631e49b6b7c1fa003a6eb8d59cb8892cd0888b05240f12701753f89007c859515a2fef944bc60b36003a26702ac6fe04d2e942978fc31a97eb29871d6752399d3521720729007b6a7215a4282b2a4efc2c56bd129e74c9b00847692b96fcc71cf7a7f19f3fd6b45c519fd73b4860880a2dd74e5727b31a93f0a87f0078155344ae9f7bdbf00d83393b634b5dca88a398e42c320eb95c4a826acea90b65e4767b2eba748f97c247568393e2fd3a66075cc12935b6d7eb5c2ff5282185cb62c73972a37b3ca508004b4f796bdf82b83b5bdf90d6bfd32b5089b0ca2683dc7fb2337de42e650ed911dbee1ef98257f9ba5af54b1a54b04c0087a5a64ba779d86461ba15337c2e7d4955fdd777a025de226306a17c384f1c52cdb5946fb0b46dd5c13bd7a55fe2e27e4c6d40d61d6ffc024468f8edfc7c7992df5dc5d05063fe723199224f53678e48f25250ea28bdf1089718eb8b730d1c06735c2f871164e2eb5e885a8dfd2a083be97edc94159ce9bf75d2433f1d782762f771903cbf9a1c9d13f710ba0e151b079dc0a8262bceb1dbcbbc0f35df6eecf7baa7105b9808745853c96b4372e95e482035916b726dac7be95a72b19dad48db1b19e6eb2edab5ac1b3013839e7806625abc129f41813e6d71ee4ab2040d81e42e6ed73abba64ff2eb433b910ea7d4f5ed3d8d27d39bb454ec019df6114f544d7b155549d0c56d14551faf353994a80f30f3c97e863a4f2af316468a568038eb4d799350a6facaff90ecd44e0f44efb6dc42ee4b0dc2c59ea9c1827326df08c0a6e55cf4f9c3ea0e78cff3635f5d08e44f1400d20f638d56ba84b4832090454de57ef04b6c8805a36f63e5ccc6e830c87ffc164647ced20e4c486d09de7a5f9e4b68d5456cdb22b0dded2b95b3bcae529215c2d25d6823c7d66a4fae0a1e9f022ba5663204f2314dfa51a1f10e11d6d62a8ba6c28b6ae7da1deb5b57f2b65d7456059ad9f03dc5a524054da39dd100d74eb657de219795e3c45a0e4c762ba22f9da9d8159e425a1ee783b4b22c250d8894cbec706ce16d5ca393404ff478f141be7cc69e45b077ba1955f1f49efbe4847c795347f703300f672334f490abf8b644a34b56da00ec45a350314b9adf27caf7c51cb7dba0c5477e7d37662f4f23247bcb8f7dd5f3e9cb8bda40fa97568832af0adc68f71422e412254a6bfc8943bb465b01fcc8de0b957677c78bc1f7566953e9d2446239f602c682a521c14f741fea98c7e27aabec339b6f5b94c78287a894afdae971f8da7c7e4a4c92c8da47be82dc2532ec2da9bacedd2be6db2b2fb34dccdcb34116507376578cbca105e5e443bec0f2ef23be34cdf862edab34f0ff21335e3acd92f59688b419f824ea61eea82bc80e3463452192377131ba51fb0795e089fc077d0eca8012e58b0637ad7022206887fe9ec00ee5df7ad2e26fe819ee35c7a179c579098aa3df645d9064cd557da90bdd21f871ceb048ca56df9653a10ed60f5e9f0ed7f8d89bcf5c22d1143cf44718ff2dfd8e10cef8aabb67d2305f18177c1426bd4cd03f2625e459ce905067826a214e08e56d8f9455593e6b324e72dedcc429d3befe2ae0599e360df95e80d453a3a849e48389fa745635bede30e7932de6a3816e31a2217f98d5e40238963d0a36c159fd4ec32d8a5cf59d433def3378634af6887fdb3f3edb96fc8840fe1b538c329674ae810e8c8b2b46db208716d38e9d1aeab097068ad83add7dd2647839b3a7388b0615bde26f8692e9c07d8adecc2a875203c3d3a9c6cb1d7d06307e9e1d9c3bc536dd8eb271e9a2159c904e61e8c9357fe759f36366aef5a3d14cee82913cd2708aa6069369ced763c8e830d70924e82e9015c2998e86efc1dce6ac2ebcb49455542a6d7dab265ad6d7381ffeee1aa40f8fac0659b6fb56bb03cd8cafaacd48d13672f7d524eb9684cfed4dbb7476e99149c28ec08f33ba6aff839aa178f86b8eeaf1739c829177ba78547ad394136aa3fad451a11e9642506568b39668b2436610e06ea45fa11d04d3759b033b5382645f15b3c39270b81b80487643913a24f2f1c1a1ed57c85ccddc8cd6d59b62fa67cc80572968c8fd01894f0153634c88792a7c4a407a4a4ce46cec5fe5d2569f95a27de242444ea0c715b357518caea23e767e8545983f0d3a4df66111b4aa1d399ccafd796d7a80e592d5a51d2b3f60b5b04f8d9c009ca56cbd4dd84127a29b72adb7645fb7279c9818b2b43963bd605f45b6575a5e2e369e0b401f5ec10ec703f1179b0ab9d4a89d6f096573952e513827364a84d38922734137e969d8167d6959b70f42f2bda37e4c989abaa8024c1a84ed6beb74780927f78b32ea736b9b2b4a795c355c0319811729d9cc399d23519730338d62e16e5035fc52a817090703fe776d65ef9fef5ba5f4ffec3cc8e9eb2e312c50a479bdd4e6ab0a56c18c2df69ed408417bee28bb41dd13f8366ff6eda4b34090fc9bc045271', 'hex'));
    assert.equal(instance.digest('hex'), '82698ad78dfc9e39665c9dfd54c7bc44db0ebba2e741e80d5292669b');
  });


  it('produces the expected result for LongMsgKAT_224 31280', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('d1fa123c468d0052c58c93bf306c7c1dc90968eccac6b0c2f4e3ecc3f908f2be6a54ab69aec5c496d291d0263243bf1827773dbffc02a9d5fbf7aff63da5355d5869f492b0cae82b229a36331dfa642557c6f6627ffb0995e593df8e0fbd3abe66126b7e5da1f1891bd28873fd9c96c0076215b60548075d16cda92a2b99eae5776f6d1e7ae2d8ca30546bd33271d50a6fd34b23809534ae6e4a875d6981492f23752a68d1e870d174a021ff8c550e01993e3dc3358274e4da2b45c000c43fac307d82ee2b5d42a6d9849c11a8a5676605b7b3c45220bfa5bfc7118e2487da143df0797870303c185c9233af63f447ce53d8199b986aba367735fd745f84f8d94ba0c1a08db280d860bf656ee871ad1094fcb41c7bfbf0fbe0959a31b3ed573498ad35026694abfb90684b35be284b18d4b663cb2ea5de1a88e2947be8012858c57ad8601cfd1744573f79906849b4a5552aa87d5e64c21a054a7fd31b7efe2a5e401553463fddb881355fd94c9ef7f6f9e3da4cd845ee16db2d1a7d4e31c9e8b42c0ee5d30296a606b00aad9ea09509208188d4a15b328ef7564c2e36fe79c06e466af598eb64280f0019a3ac81b18fa254b0b79d7b80ecdc9ada3dd3d13f1899cd3eeb6cebdacc7f69e6ed02b2550eb3c76e1774e189661bf791ab8842a92d86af9489771d1d6fe8302be395d6750ebbfb1ed7237c2c97ab655c7a6c7157a5ea5c51036acd9f1c031277a90450bdbab5d4a9b36da52a6ef7865bd0b5571f228d5d61d15a01c36c3a7d2f133f04d0a17255271a1fa0bc7cd60a85bff17efe1d49a24d7e87807f67a01358b7ced01a112d8b71a6dd70518bf6aa8b65a5d510e6f5084f5ecaef108f6e6564032ad9259e8406076b9348ce337005fa4b205f47736a79693c7e963635ea634ca67b9749a098b299879973ca9cb355b1080de5a9054c7f39c158aae4e25bf72c0547fda9f66a234ac3e2df8dd22752ae66d26fdb32515b9e9239d1b583a314ae231dbdce9013da4f98213cd6ab9f42582f62d639e20cd183560f341007c600b2e01233098fc61a50c27d949822c6f99fda51ad788bae101cc379b48ac8cfac3b5df81c9f7b4e1e0353f7f10ab340157fc7a8f92ffc43d31f24b498b381c7b20bf0a31b74c45627b9e9858d8479af5977782a5fa88d258ebce97e6d0fa0971dbfcab6afbb3011f9cc24d8c4e3db57698e299f6793741810e2a94295d0d91f3f769f184da2fffca771a148728a2f95237b77864dea20d80e09e7a0a36637062800065acf15572355bea8dfe27509f4a757079bea6d6df3429353aaeb7777a143e3ed1a20de487162f6666ba5d27eb9d350d6a5c724bf19a1d058acdef126f6008ebcd192516fb0d4797dd5fd3216a9cdcd2ee24a2c40bb2cbff75cc59db2e3cdd8df4e0b36a670952b07871a0299eeda9377e8296ad3788c78728de71d31241f20c2b2046928ca2751bebd10bc0c455f49f30d7ad979b0d86b66a55429853aab62575f9219483603924b4d39935489e8b2ad6e105b8d11e74785fea9d1a9377d189ba290cd414f57ed67137523a355f90c9ff5ff2cb760d4a31faa2f1c478f9547fe4c4b0b1cbbd71b690fb3eeaef87a53eaa1eb6526b7488963fb64d17b37bb387105e39969dbabcd79ec28dffb5a61a1101b34c14202bd0ec1cf800e21d695ababa494431ddaa20d88ed7501ad360f9b6ed41b4ccdd0fb5778cf53d7c18c36c4ba783e68b9b0d26c7bbcb3b2a015bb1e2fb51fa9c323c08a7251e48f140a4e519b1c389e0fe4a87b9d65b8d91a2081405f05d01f71024a56ba89550a418bfac2863928bc870413cede1411f0d7c3e77c760b76e0d94f7d9adedabe9e4a632b6a1fb5ccbf8eb2cfe772fc31dc0d1ba63adef21caebf846418c6adf2e474edb4a0207271c326f14d20c0b95e1af7d86331f0d4f792d7545874f550892b3e081fcfac6074e172f8826e04f289201420f064ff3c53ac7b9a15a291e878b590b3f47f53e6ccbba897653d6ff4c6cbfac90cb8666c86dfca4d554d8b87ad1ed5bd39411ea35a417a51f9119b630904be6575aa257be54716a788922972cfdc5a5bcb4b6054532aab913e7d8b0f5a450180a3e7deef61bb0815120d7869086291c3f3dfb71014bc66e3d5c8854b52e800c8f64765c4089e482012550e2377104f93ae57f047a35c0db243bdc7e1846ba0d0eb42aaf97742984d2637c2f2befa40213900c3af5a758f85fd4342f9fc0b3821ff97b5302332db2ddeb688c8572691aac5afd777c5ac88200993d3ef100a5f95b51aa92881acaa5faf68e6134221391c04a88c7c07cb39d07d5a245aee0d63395018c0c8e1d45bb640220c2f993831dce2597133c87014d12f5ced521aa45273f7434da8acca2fe35a26feedcf701af1328e4c2358bf74513cdfbb6a0864ea9670c281c5e7c51e26f3de15649985de90abbcfc2d85c26886f0a0c33c8fd74e33122c42012f1c5ecdd01ff96fd75c6b067c60f2501088e2c8c2530a0191c17a113b38240345414569b3b80f8db755dc3362c52dd1d36c06d02442c3afd24058343f9cfc6931cca0442d3ca2ccc84c6267c42cc85f4d6bb78f34df54d4e20205d7c379d924c649ac7ea8fc127b7ee288064b2b69fa95c93f0e0df1e863c590e2069a0998a3c2b99c95b690b5f7014f401befaa835cfb414cca8a5b7cd027e52ae3acd21b618b6c9d1e240e5da3a5f9d2ef4f9aae6b3224070fc41c130251d93e8e4a9452a3a2ace2e919b6cbe248a3eab6479ffe4acc55eaf54dada9a84130cd6bbb0be41637558a170982eae9a88853fcbfa6cb076841a8e36e8824d21ad2e3ad1d7f829a5b13296b15d0053bdd521d7d15e76b356d62f02ee20eb78d04838af7e4b084b0d2575ede7de2130c5472d8eb1839c19fde06d7e77bacfae1058a0a19eec6485485d401a70a8920290aee1d0f36c67324a6d87d3b9628ff69479aea4740ab9f2563895d418f9a5f04c67cb4529115146629cadf3c1949b3aff50e8976003688a376c5e889aa0b764027335fd8174f648c3e072cf4618ff2c2189521056c03bc2e530fb89b391cc5627964a6555e8ccf102d628cf1b3ef1c32499013cc37d81a0e8e3e033facf41c1295f3f8abe317d1cf1d2b1c5fb891e197cca3422522a4b68c6481d4c74556e05e06d0e45be294e910632b747f3fb34fe5d3ac012690d9e3b7a4338fd58818e622ae7f71dd90a34081496215d8f224252c50cb1bbfaa08810fb6b4d0da50d007ad6d5309e5c0e27fd91b8b343746b6cbed1083f91523a7b51b9046737f7114f507bd7668835ce2eae7398617e3f298f5b8b38966a9bdb3beb342eefbe61368dd8302747c682b83c3ad4e184a5f8da2ccc4f7ee99a33156274d97134126b0b89627d811bf07f7683e840c51f15b711d1db0c3c41be989e0f156a5b948dbffc19b4047a7d93c9d9a22dcdf0c14897b5cf29d03cd426c62e6014ee396c11483eee85a2d3212387b5c48df8252b21db40aec9f8a2a1ad8a55baf263812094e9c81d5c18fe1fb56593e51888c8a0272ea2f8189782f462783bc996541b86eee4f7be53d535b4e85dd786bd982c5d494ea017cbf354617d219a495e6448b00992df83c94fabb3567e75220705bc449c2367c118c76ef7482c9ab77a1e0afcd3dae4dbf0b211ad79ef141217db599f4f74557b9333629a11ab482ec3d7050d95ae052f3e1f814f630e9809b87046d1cc408076b5cdddb90a389f8eb3fdf64fc7dd71e6c0d5d6c2c2c507622a387c5a3ae60a6d723dfcccd1b6a08b40cae54d6fa519b5897497e0b972bfa1966ce2a3db3fefc41ab3393171ba46bac2fa93ae3613ce88273ab92921f4cf8a5840cce3f3b3c41622eda57e33b436ff8108268e358cfe0aa72fd0d2ad5576712195f6336293bb3067ed389d69b8618dfeaa8cb1d12b43b370b17d29ec2035ee9348d69f0e64dffd8096168f6cf020661e72bf64fa0d03e0602750a7da0daf4a4ed909bcf170e76eab0889ff15d84e9f8233b3c57b34084bfbe7732500a4034bff241ae4b89f9bcb2be60715c14d3b2f5f8e3c9b9c7f7eb11e6b0ebe70c9b63571abdd5a10a86c8f9c2eb64f7075ea1f0bc02573bf83c3af68ca831e16f5f40e558ae0557de3b046d5418a10b9e230ccd22d4cadd50cc912df9a42af82ec97c91aacf027240f95b19fae3ddd36eaeb11fa79c6c17bc6a43796151700f587b64cf3a2ed521b22e36c8259dad86de55f46eb665ac0ce9c59d91d5310369f88754ccb1484f4999b9dbe31a9085c5d8ac64b624904a63df3d1dab994e0a845365cc6daaf47633f32a929ac74b9e8a76f4091da80e49f3aaebba70544d1705b60e408055f07e3cc71f0d2cea3b4b16d5995a6a9f476466765bedb2bd44f97d45858d1403c6348884ac7163aeb21364534d8c19b0796ccb507d9441f6266725fdb340ac1159d7c63ed0c5ab42daa9918c0a3dab2fa70f84d499acdbac62f74201302d6e2b854e37b1c790196e878adc03c001f006d2196c285fe5001fe395795d843b2aee6f7d6c22acc3a42307f5f3ffa861e996f169318248c3c41bf9d1a51bdbcf5a33a79815063e07cdf5a0c4676ec96ab576d27e117b3dff7a2f1dd219a1f1b1637a64f38b122d60b9501bbe3639cb76d8e746165ebbebb90692461b61086eae6f6f5aa5e0053d84b6fca8147d976de801b11b306c1a506110c6a8b0ff62236889718b18b5507cc2ed073f1ac48ad1db1aa771295634272f338323ae5dc1fb19b937d891efe2e960b17d343e38f2f208d4b8ce21f25fe87b5f12038ec57e29c7407914473e96c3654162e5dfab9939a011baacce48010898f1157740780946b67e5a44d49240b1a694f679cd689e720b0381adc691c8b24de8ea99a4c739fd5a82c06ce12c9df334e91c63b48cb833cd0e57d2435fbe1a6083278aaf574e2c0b706a27625fb4934e139163006ff91319773e996e08e91e0bbf55779971d458241cc27b4adb43f3c52533f4a61365956f496332af91a4b50c21365c5da82feafc6ed819545c23e3153020b86471563af40143a9213658eab2321f5667a85de88d6ad77d3acc205d130db4d88901e92f6cc8386a60cdbe8c604d2c577939b44f6b6e8db738033084f84990932a21f8ff91a09a28ba1173b2ddb32422c999eb42afea02172a1451bd9070e281885024bbbe7008e340881bb2cd61eb36b6dd4aa3883a79b8399acb8656d0dfd7520063ff1ff95a62376c1c99adf2dcdf0e62e06fdd1c23e8b4b25daac31791ec772dc96ec1e8ccc4fb5455357dd6c32682b27fc929e5f28caf9fd9ebfed73a13b0d74d9d47480dbc7d9550078b25492c9e2d3e3f5a86f58f0ad35744edf214e3f810075e77be797de0862d4b3e771406f6007f7c29426c16fb3cc5483498646fdde644c5542b28371019efefe50f29b2479cc68e7c40d681d8e496356d71be30798897ae496416d7a3ab9751cfebb143e00c036c542f79f69f051887e42984954ea5844dadf56b9bbd19e8d20cb9a4ea', 'hex'));
    assert.equal(instance.digest('hex'), '1a74280b217a3da32ace42d8ae85dcf94c331998c2b116ff56868d90');
  });


  it('produces the expected result for LongMsgKAT_224 31784', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('03978fa9dbf1ef4beacb8f58d4c82e29177093520cdd8f3af019fd34ee23b58966bd793d8783ae53b4d00238b833eb41d72a616903a1c4d9720b066745ce4cb320967f9beed566903e1db3c3124b64072ce048d2fc4c1238f909e152f46178ad0d597299323f58436ba3e15627bdf962343f862c766379260994b71b4a5a8f54b90b0c5a6b6b6b5c3c54bb7e4112eb7c86c4a66b73c3a010a57232fdc79af02beafdcb9799efd434a9883cdb7342bc29bfb176d2c667f6556ab415f54821cac1d756a1c3300d8e663b2418a6443ed47965b05e2f2ddf339daef0378315aa0c55afd9c416badfe090e516a1326119a97bb8421a67aad2051caace47122a86dc092383eb35bae836676a238df813e6013af9420371e7ca95c9da9e77202a74b0240bd97412b7b7bd1314f2eae0f1be897d7ddae8cb96cd77887589f66a9068734f9c0ff7778ab45c1a59ec7de35e6ab5fd6fa0fe055474cdf0cd1f27cca435a66291df8c1db231e1ad3b38ecd9271259c770c69ed3622a869089cb917692f5fe05beda10d6765b15fdf9ab0a1f5d209cb5766842a06f6d8a298ad01b735fa4fd6300e46b0f54c9bf47089274dcb5dcd0d14cad04ece24a97196ae51176d4e1024487c075c8853c9faf36291b9ab7b8853e366c9079544c528e103ad509c2a486050153f606273b7252691e83be3ef689d37e7048396c175c7e83a5a2d45bb48fd867b01695636e3813914a7715ada04cad838dd98d9448935c004c8a905cab06b4d6b3162354531e8aa74bc58f657070ed5f10e8559a5b52c3ee34441a0003d849afe0e6d6399d79a6b6b06358119bb8f658685eeae9a392a6e8d558f342eaf86b1c833218e0de3d4e69ad825c1dbb966e9e13812b6416d9ccf03650f1fa85982eb37cb926e472634234f94be6b227e03ab27a60b89c760f8a9b8c9ae8dab4317627644aa2b1ca9966c446dd597da367a63a30b1e3d44d1079598f235574202ca6f64ead0db6e0d1402097866b147430beb0c6ec3ebdd02b42610410cecc3ceda09c9cccfad4ba95c32f266b8486843ff7c854bb8d0e44e177ca294dea15f6a865266343ca1144a7d30bbf48b0b4b4fb48ee2bfa531e2379f97e5d785f7fdc24270e981f8de2dd045b36d6b2ce12ab7909c6cf2856550d600ca99422905c36179c61876e5c763324522527a2bae8b6acf35422583c881be74d943dfacc1c25df0b16de5ef8fd434fc3396fdf0dcf272aba5516a8221c29f01d7dc0ce3858f1c556dbaa8e5016fcf8a4e2be7b7deb5d388d617397d67bb798c75d7fd699a7ccf1e40192d636c1ab19cfd6297466b7067d2c434dc1fca9215113a2c8caacef0e294282347c650e41e376ccfc3d883ebe1a6096fcd274fe72d408aaef73cddfe8573586a676a942a80ddfd2abd860b1d6e6e77e65646676940750c091c0aa3710e3e3ec5104cce4bf7c65cb32cb168e0af7f63852bf6e40d67619c0a5769acc963beda482a060b9d6e1f51b7f244b4e0032e1a6093a89b4ba1ab9fc076f25d1e55f6493f3dacb5b9a6e61bfd62967ed304518393d3d3dc5075469952368257851fc78c85a2039ab204ffcfec5f140b4ac999021e53c49c0b5b7b9f95907cb6bbeef40088ac80f4a2caaab8105ca5a04123ab4d83a1fa1e7738ad2590e0838556322020bfd5d603529435fbdbb951b76aae8a9d63e68ba0779f197d9e50fa31d112a5ce4afde8f1fec94412df44d78c9885ff678140fd636ad28d9028a6e193b5db85669d85d13fa7ff5b9294a0423b3dbce88454ba6c6386149b471e5e20e5c39f5fe85869d0b23521dff667e5744c2e0c273a9db06405e95346a94c3a94059c9c7a23bea476fc1afbf91c00718b844ba4f3af815896ecdcb58124d1d0218f292b65d152407975423332a8fa7676add341d4bb8f81086c417aa489c4125727f42cf52df3164ea72886cb8cabb7872e3898cc557efa6be5f7431e99ccdcc2e087494da483751f961ed7b60f5e7f93e10287d686ddec675071f5dc0badd6f4fff07cb27d251fa41582a4f708ed9bd77662096e0f2be33c4375bb51a051709c4f41026ec22d9759a829d654f166da6bc158d076e753f6c004f3f2ea5562cb65abc5d532bd3d782f9ce9c6006a0ebb8f09eeaf4fae40a777081bca82110ca6d3fe25b56589bbecb52da668b22f5fa38e1684f1868caf018e49dba28c45db86fd70921aafa4e56b589a01afebddab78436c050a4dbf26aa82b7618ae1b2eac7fd10d2d3c974531760ac0ed2ab4f1d42d92b0e445f32a6fa697ecba299fd061a29a848ec636e0b7f00e6310208f9d21d229cca2505528ad91dd22e4eef4e723314cac648c26cc85a9f68008763838025be8aa598f1e43331c3496095bc0c5e0399ee1cc56aaf88aef50716b37eb156fcbbe1b10c21ba301158e422d63116d7db8c6935701fa7b3c2ace9968a81f9063eacce5794a255dd50a412d68a4d1dd12189da612c293aa9a4756adb25b585452e6f38479d63bffabe4e87ec43956684693025ff59087423c09e8df4bc204f89aa9c0769b32a7004dbe9f4521b993ca92945731cac800eae738fb17432bee22a931952d7a9342e049e5c42207eba15927bf1630e03a02aef6dfe2f40d5a45f771000213f64cc07dca61c5b2a68dfb38e42bc08bf3b64c146ed3c291e5b94f09ede90d6c9c6ffe752aad17f9777aa86bf1a6b5c4876cea631e13443c00700f93b4f7972aa7fa21173e7170de5f3e3b7f6f755baeeec9d880155a640be61267ceb05cea102c944aa45c6d4023ea258737dd752a44b27e2b5c16906156a774dd40d47d13e221c27effb4cce100b3eb5429ff115b27006e338f5fdf663bdc90694d3253c11a24bce40503bb04917ea4fe22ba5e8d87837c344c2fb17eac5487aa7372ec202a6bc81d80dec352cd090c040f1ad33859c02b7e21381bea28ff0e971d52d9006424eedd72a92951da1fe3c48b45d51be8430a99c9ca159093dda75ce2fa8acd7e06a31a1cd3a60fe33a241b9a649ff553333b9c9cd70380b494a731478698d833b89deb3ad79c5fa80ed8bb03ad1d42f2c8d2fe4c457a019be95f267080b32038e55a57e48d58044acc691dab6d7e17bc629e78ef7879be8d398c77c115f4547f32b1cfa181aff8f3dfc66c6e9a754b64ba932e700127476c590401454496f62742b85c17687140e13222512c369fa0825c07d26e5f01a774ff7a755d4cf17fd7f21ded83a9fee43ecb42d4498ab1c3a937aae69219fcc7c20780cc5ae86f969faa067bca9c6c3c7c866da50cd1ceb255d104a314d9506957782fcdf1dbe03945c36d38a43202d7b34441b82e61e72ad401355fae7557efee0bb6a90760ee54cc50e39a844e8f037fc9cac0b055f71dcea1aafba7f0e770e61ec8370159f8340c6fcb1f37270e4a71cf1110b7da399fef7e4604fe7bc41c71f366a451b4cb53cf4569c8c9a8a19897a40be96a92ee6bc888e8585832dc4feab31a40743237bfb0a346ea90acd848cc648b9f844c606c018816ca0dcc189036a2cfff0c41891bd4c32606d87d67a6ea61754a150bba6fff9a0e57414a0b91cfd087955aae7bc4fda95a4499fede1b4d844ae057045adb7c86b72de4b25fac0995effb5cfab372ad895796f9873f5b0b954583ed815b4523b3b5a140a2ddb7a5aa2b61ad8d06bb70efad3ea237f6606a5dbcb88f46dd75ac8432039090ae2458672db7800a7514a226516f41ccfd08a1f0720a77e5fc016b1b927b828784e421c0c9e04c45a79c2e8db16e7a4e092d73c5124d2bd1463813c79581ab468e2d37df3925189833f8b372838a9f89aec3587e2b19044c095107acd435b9340fa49adf11f105d2c87b9f5ab62e382eb569d79cd8678a5b1a1f7d00f38031694ee6aaed223ba123e8822be1181a7bbce5dc90f8df9e3fbaf96e4d82b388889f2bcacdd81abd5b777d78cab2eaca14ca97281603e5fd0c6708cc9e223d045ee2d1994b5dee248390fa01cb4047473312f14293bd9f574535015a5fd0d16face6b0f88ffc949ab458a2c40fc9806401bc5e917eafc56a8db323c1fbe6a57ceef5e638288c0917f0be1b8d718bc0e7b2b96e461edec2d0c53b481845bd906a972336db93db6499d27b9b2a5cadcbc94dc093b8b11c9d8bf06330d15a223236d6e167cea457c46b02bef94a936e0bb98e14c8944c053dfcd7a243e748709a1c625a38eb156d943f12917aa077dbfa57b24e26c284509d534c1451f425d5d25456787f97401213374ef77d6c86be8e0d311543b15ce7e42a152ffd10303b50046be07464c9b99b51018a42062054dd7654193e81a05909ca7bb28c617f064f9936c0d3590882f0c26ba89fe6d2b2f50b3c67da8cfcdcdea6e600cdb6b09fb3c170979bc9b1abff44eb22e66e74fce4ffb6e5b373f2f10b0ca5ee4c621f21f7a6f863fa739172c135566b55916f0bcc6ee4cf0d35b160ac8a1556e4327199dbf53682471baef09fab7abedf518427baff19f29429c2dfd9587843d5ced12272a80b17a5fbdb1ef77a510cffe70b7ab6f592763418af4cb555c080d9196bd8951a2047046d8e1ed60a67dc63e01294e734cd77f430ae771e72a29a9a15f0dc10a40b18729173a54b62ccf0cbb5b68604431661b613deebc200d0f19f142b8550ecf256dcb2233069bca839365eb8ba87204f83a8fca237b11f1ada6c44eaf2aaebb1b8b5faeebd2efafc0764175aaf9a9a9620f533c26cc237b208ad6789ca6f60b39fd5a0e07ad582f70111c25616d0a3466769b3e945fa23dcfc7255c03aad09977ebcb046707b6aae59ea803cb56d223816f006b3ef06fb67787bb09f41a6b41d6fad04ade014434e3cde87f5cfe8f14d9822d990745b26a6c0bd49a70d340c6288c133ee43a1b22bb1ffc3948f1fb03047cf6ea604067d33d00f3a1c88ca529b7b515f3fecaa3bf1cf5686e50e55a2c3e4176e7b0280132a8f21698137745a3cf2b5d6d32ec91e340cdb6328abecc4364f3285d1fb9dd502c1d3a84f47ee09440899094ae539710cef433f066d3055a466fc9bf5803bf92bc65cb5e0b1abb4985ef85b00a3afab4f8f59352ecd7e8550bf46b4d9aaabe858766751ef9a99889083a2ad6fc178d6b142e1d9e002e07430f27cadf6481683264b1f6629f9e186a16c48286257d3b35427d765a12e918ced157cb1e5745713b0eccbe529c7b304ce7e67ceb5431b832019995f89dffdc96cf6550fe056aad875c8d37099edf82d1df1026d605cd939985c372f4e95b6aee386779527f79afc24e18750a4ef0a93e1e315c09f785c3100fb43e44d6248bb7bcbcd29a7b46ba9beca5947eca2f5d7fd12f588aa30e2424fdf0f202000c678c9ae598345d6aace4e29f85731b775cb49e7517e38104b7b287dc3a490c2e30d3e35aeb1e6d35d2abc8d450d07463e3e46b908126dc831f624ea010e0e2ff87d7f4793c8f075215c29d45396f4a65d490dc1c2902babef3ab1d2ff8c9a24d9c5956c9a925c7b88703c7bb8e2c6f3a1bd6fc5ea0acb4ec669c0fc03e974389187d97f49d2a6643ddbe1b1aa9cd2335a90741ea0bd044da6fd28e78d35992b5b1a851f2cf5d9353a052cbf1e57b9782ab3620053c89d', 'hex'));
    assert.equal(instance.digest('hex'), '77ab7668832a567e4f7f2ef3213c599ae93a4851eda56bfdb814809a');
  });


  it('produces the expected result for LongMsgKAT_224 32288', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('09a96a0112b823c2212aba52eea13c48cae3f5e08883453e2085a803ea852a9d6ae075392bbd8fcec567a1524aa65c70c3ee1722aa079afd41696cc5391f529299c71e99b0e08e411d3e1e05c43e979ce10ac9c2ea80cbf4b58371273c3d3a8df48e2de7f50560ffed25f6e65e9d96cbb379573bdbdd2859d13f866ebf3af488c6d2e36505a70d81afd07e321157795cdf40c1885dbaebf3d4e425eb4ce0cfd6ca5019c8dfd54bc2a30095b312af4548b9acebb6a207ad3bca29f4da443afc7fa789aadbd65c9d45af71594b790fdf84d9235933ee96ffd83d1a1dac8c1f3c2bafe668b8ea5c9649d1d8daf2806f0519448a97af1104dba3fb05cc46d33fa0112dd0922cf1ac84d4a343f1ae597930042aff6daa75011be4b18acb257d889a80f0c3d4094ef7295ed4e8c2f1e2b8f56edbc9b831333677a4e6cf6110218b23523eeee1e024b6398d1cc572df7aa103cf7f50fa488e19936d20393a55843c042b275b78caa9eefc77c44437c375d4d1100bc486fcb0d250526086ebd4d2d38fbc8e3e55f9262b4be5e6ce6aa3164dc04d7fb12be70af6861ae0c21a04468339d335be15f6a77a8bb84ca4bbe94b0782241500b595fd671b30dc6c26317db3af8db1214b144fc42fe936771469d3838e41c16eaca8b44a5915d1cb4550a451be5f0673ffe846f6a22bbd194c8870193e1b68459b0593930e178b765d5c19b0f9d65b1e25d60b727e50ee4c39d1b898cea9c8e95e40110e40ddf882a7c89303bf1b6af90506e4709a7916f207beecb850c9e227c9557536138594513043febe778c471dff08ed2ed7f8a54952f6f52422aee3240eef81d34cbbe47c0cc59a239d7ad75852cf62473fdfa9c723fec82c384d06f2320c8c3e5a1483d9b573aee03fe0f85087087b896a569d9a07b02a387ee09ed6b7c8d6c0eca76ea61301791c9f835e5cadd14862393a698db23577a68effdb68076fd8a0e7bbe9d93098e73f5a174ce406441df48b969b4d2502ebbbd9937856777d6f13852d9ad3a39702bd556009082dc207c442d327eb33a24f18dc56428b181c7b4405d0b2720b8c4c62417ab9f9da5566bd85fb7fc567f542d05111842de09114d27a382f009bf737ea2d8d8e4f0900a0deba080ce6b0fd7f0ecb3f81791717eb121176412e7ca618735bb065a659b689a18069b2c43b00ebde9de272106e180eea446242f7889e50920ee5da2b7026965b6dfcf4239ed8ec7f7363903f10ef6cd80d76cb42298e913c829b66ce1a5b18047ef06fad79de360908065e3a0f61aae3347a1d7601188dcfd62c56d67573ee4550d6269ff7181cadcf84059749c8a4ac1a46746ffcab7cbfa1840e5990483795452ef93075c92a4d115eca32ebe5ef0211764ac8f6d61ea5a75530508a8724cd118462ca6ce37e85e337e312c60e43342497a9c50c05b38a6d5c253e1c001538b43d1312a369d8301544cc24b3bf3089c5d119afe9979430223191adde6b68135b5d8ad5ce4a808580bb1c34f650eb63eef3d592bbc45bb7f2de9acf2d4bc2820ec1aa765f35fcb3f71d862aaa1156d0838ef06241914aa4b8632733b823aca5801bd281d127238676380dd88e9be0d6ddd0ac7e87cdc175a24343b752a46afeecac7561766bc33de4363ddf07f43e9bc4a1ec5f0fe36f40c3001f1647058131629e2ccaf056b381fc3b576d8dd072b8b2ab0d251b9060a9f76b3d99f2d0ebf65781b9511de31027d8286299de9fbc9c1c28be2e4df9ce8240852fe042d572236ac54b42b690d25adf27c26a96d0fd048f1d11299636b55631d378826370af97d76e402cf49ca5687c17e2f8bbea0ed83535535566d65f0c6f7b2d887dcd391df0e9ceb27bc0a8a33039cdca515c886d890d69a389af7bcb9c9e58de0636441397a53af09a447bffd49bef7287aad01a1827fcb8641f9bcb7642952d7e19448c4e88dc5abb28e24bfeac16bbcb9f8e9962f532b428ccf86ef635697e179ea3283879e9375ffdd4dd9986cf862170d3d8574340420b43512d5a368cf338b732ef447a669c511466df0ddd9e5e26a19a2adfb17cfc593570f6c6775d70319e4dcdc4beaf70ac768e7837fef94c785eb54b1a6c164e09fe88791b3db6d1bcfa4ec170a3695fbc21c9ad1942d3a483cbd433d3fcc899f12bb9cf788666c0658cfdea7f29d5cafbf3b16b3ed95e52ae21e599e6354d65305d073de34b677cfd9f0ff0ccef956bf561043e0db96762c3b9365247c151cd0607551bf8d781e0ce84d23ef7b6a3b67b698cf3edc2db9d968174c0a26010fa7fccc5f87e8b25d12463392bbc404b22e046b53d183a6861f6677108484fe59e41077bcf6c3759663112ba951014f40952d29a159ba3f838a8ced3707e45e0837dc62d0576a6dd12f3c75cf902636df5fbbdcd9b19037e69091b26082b7de2edc1ec5bc218ea760c4b534aaf352252043dc5b4ada60a9dee3218f18de60bc654a90d82430567f0c591c7219042180fc8440b5e422a4bcaaf92553ba86b149c7d5e761390c52ee0139000595e1712938030f387bc886c7e66bb11f74a6ccb5ca93099de06a0665a1a99e146e480fd80d7ed360e95fb3b2b08bc2354dfd56bfd4031538f438ac102b73472dff3ddc93bbec4f9987dca8df79115892a004e86f4fe8e76bec145a19c013630de218b3ae3c325dd622dbf17897d68833b43e8708349680ad1836044f09d0a36a00abbfb9eb9b9fbc39eb71defed6b2b86f4b85091a2a1c6141a2d74a8b2f11e7cf4b5bd0a7605f43b752f1fe2b5529bc0b913b5981149f8e3e23808193741f152d77a1018498b0459820a8e6eb661b63325d41ea2e80d071417816551272edb519df379e5cb0730ed933597e0d62858275390331bb048d21f753fa50262fe9ed6ff00f54fc0752db016a3f5f8dc4114dfb760e8e9e17a3b876cb7fbc3f443843a9df4626740bd0c511bfffe4f7849c77ea64857c489c204da3fbf6c08acdd705d7524245bd23e3767c6587b0a70743aabda3434f0969d007bbfdd27968c4e7fbbab2621ec26fc28fa984a0e7513c548f5be67bae139098873932bd651fa85f8978f8a52ca1111c354aaf07728a1a4d8e8bc45cdfb174fd8cffdb8b23cee7cb7c7cf2ca590b93c4eeb403123b2e10293021a737b2146b21327c0f2ffb59176d1b26dd3a1b7dfe3467613207426b3253fb61b0e42969e5f6f01a102699083010d5f53f10c36f0c69ef73b350b144fd295063b19770552cb2b06f215cd5f308658dd34c12e66ebf3a48df9c81ea40a728a035e4d20ae4172a6556d3cd5da109e0d2c5c40f58f104be11509282b67826831a9560584466a93860731c3f88a293685f658c15d4e3a12b38ef63a4a175f74541f0aac499e3916a5c7fa3a2b3085cfeda45939c319b39f887705b9f089c90fa38d6269f04756152d6b58fc22ae8a16d1f093548019e9eafd24323aedc65fb80fb9a9950f96b9aa56886a9695bbafa19a9df70a97eb73729915af4433d38a2ecea40ece0da71c0eaebb61d5c906815135882932b2442901dd719bfb3386dcb45746fc7603e1b57c3032d54af98a528f3d2f8d801026caf94ffc0a95258f28af7bfa05a6cdc6dbc84dad9f7fa520a708ee18e6acb316235479c49ce5b8f0d896eee70293f822fe85e9d15b5f4511cb2e5c4926d9efc11ff931b465609532d3f78accb08b3c2597aad082852238f24de905d433484d041c9c90e1f9bdd14524ef593adac25b0eaa59f5d0223de157dd2aef4364227fcefc25dc1e98785c40b8f491dbe834713c9c9e8ccb72133351c8aac3625a3337d637c264d9ab02de30d78a7aa54891ea52c96e7f061afa558f5f661d8752f54dbee025a68b72e205ecb2d14ee84c7dffcaad8f2829f21b778d85ba3c590394ad4de39587d40eab0915a3c7e7bc89bfcc7566d1f44d250fc3dca327e7dfd2dc7e04c01c5773b7deee558106a3a4d7bda8347c8f5c11500551345e963a34fade1aada6f88b7f73c3206173c5b5a831cb308aa338dec57f0bb4d0d43b09880e2e150d438dba83ab9f49b4c3b812386dd2e11fe992b32ddeb5f0b3f2f100d989a6482bf705e190e8201b614afb5ba6736d0ec81dbb35778e65653f38f49694b85b0e78202c3f805fedbf6ec5795f93966db9656066944bc2e52c10a5dcff5ba68f008c40e6c801d16edd033512b2f2f5e51f3b49c415eeadae4f878fa44b3aa6965ba6b7a118297fe5993c9a3efc22dd57369ce8ff709d835c977874adfef7d8d252d1e8f6f5ad548d8d14d89c72f2294f954c6ce353d0c3f43a76bc5e3ba7c0707bf21e4a4d6ebc4b99d34506b4ab78e622bc32aaa7307ded2f55e575eaa6a601e627f09dfe02e1cf3d59d027e7ae1dbf4c1365231b724b03451e79a3512393c843ebe474d29e3ee1828b1010a746fba2e6483a5f29336a6cf0c95e9d3b929d1fac334d2f391beede2f0dadf399805b4c039e66fc2076734df2062a09aadc69df10afdef8ed1a15b5d81041c3b0a04e1a12958627b58056fe33397bcf5ebfff54d34fcbad32906a5685ee8a4dd34dbedf4dba832f24640f090ccc21701a4b35ed37dac3e6961ec89ea0815751d55871a13125d734ef178124ae1f593d89609d121878b3151ba96c8347b166558fbd27d4d201d76cdf4774244cea527896874ebdaf9af7293afb14a4e3719d50d9c9902b92741bcfe0572d37ea11da57298dc9f710f3d2294e48f68c47d972cd0261508482eff8b290f52737e641b61e9926eec020fdd74a1a0722ba534954d4cedb3ed44eb255069708bce9a22564f5b4990562278e2e89245c54b8278ec17c8b564157e87dd52cdc1a67d60dfdb6cc9ace96a5bcc77cd33a10c506660548a167193a6a13fa6fbf310d803bd732a51bf85c72aaf8688979591c5d829ef4a7eeec82017cad0880209c4a64a0ea4ba22f40d26cd559eceb9c879ae413d60240e26f88a7df0557db1e0bf938327dc4cc0664e0b40e9d0c67a431c1580635bde040ff2079fbd5240d2de2db112ae4f3411d0f5908dbdaed1515163b621a66cf0f3d80afa0e0b563f3ab81fd06117a7f21e7ae2faa461efce961fefdabcdcae27c20f0114308baae0228d8490a0a840e39bc9a501c0c591ca28fba025e145e4fff4b432a161bd821fd862855a955035c1adeade98cdedd8ec0bf0881ce6f3fb3b69501b164fae089ff007a923f42546019844c06387b847071716b30491a50a836df913dc2ba22d0db14d18f848126ac124e5e9a004b5473c606ae5402357a93fbc7146324e269b6248b43cfc2291031f7202153cbc4563fbb0e6d008d6b0dad9a02d03f33fbf8bc9207199bbc19eca800efaebb5b7e1f8929846aa2cfca4b13ee3652477fe3eeed93b63cf2508a1e540bd35250fa40f93a41ad70a4e5b547006968106531419e8dc60e423129fd627bcdf14bf0d294984be3037d4f5ce6eb8aac28744aa31325bb32cf85d95f04573040faf554d87ba7e1bfd9cb37d43e2df6a8ee09b8423f8faa8f0744b0f383fe9ab403d5b77f8b2da1e26e3bf20e5c195ef3415ff2da74003b9f82d74f5a4af4ec1f9e87e2ecf50b362990fff432fc7a986578b0d0166175f087dc8d724fe43ea6d7a541aa7e5445b0273b41ba7818a96c28265db7fc729ff72c8dd635269f0c35d43d8cd2a0d4acedf13c75130f17d65c57a9ed2d26d5a6abe06e40cc7b78d2a554c0a2', 'hex'));
    assert.equal(instance.digest('hex'), 'ae38d7763d84cea88e468ed4338da58f4e10801e1519e65aacc3c6da');
  });


  it('produces the expected result for LongMsgKAT_224 32792', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0e31c80a1c41df5f706db8da40dcc06e61b4d6969715ea02113e2a63663da6aa3df8ba755109a580446e7e94e9e33dc98ee6b119d3abe78b3b9f990349a63dd609008ff72e2cb6710b99522021aed51b7485b7b3b89c4c5f81e0ce61b5310789556d93646d531744e6b393aa38e1aca0d6565728560403423c5c5bf3b80b4e99bba5fa53765a8f0b67e99bbd0f1e31929731175b49e237eec448d08d282ca634d720ce74c55925b68f0bcf08b6493b180465ce03ab4db3c74bea45d245d21698e9f1cc8ed46ec4bf4ad4ffdaaab9ca2bd75af81780ae59610b652715a30f45812ad1075fb9051340167f69ccd01b05fdf1f4cfa36c053269b06e40d99c5cbc685dc18e266f60b23c19565776a5f76c5ea917aab08db863dc88c2342c7f7f0e00246b66eafe2d3de1384a108df5dd5aac8fce8bedbf495f065dbf4307c98b879a6b386f8a4261daeaa00a331fd2d827e895d2fdeb840126564ed561624abbef25b0427fafefd705f56e2f362ab7410cb777591bb0126cf70e390efbb4e7a13b0745d7edd864e6f90e8e38b61c706e144bd50fbc6b5a5abb810b5b82e2c0d13bc40efc83e9e790f990d34a07a5f312e253900b57b04eb634ddfeaa537aaf8d118f1f0db57d6e6206c0eaf94ce2d540f6ee2e2e204941848a537d868f9d95d681f0c5935881288e0d91c12de10c3629e43e9dc43620189f44985b59427ac131b35ab4574a3ce288806b9f4cd23ee2463f3ae947fe6eee2fd3ca9b7780e0939b615e8dcf94ff684fb41b76d25c6143c282ced5d9799ee19fce194b047e8072b8154e9c3cef1a34e7dfca73d4ea1636cd8120a8483285b21affd02ee06ec882f74bb8ed08d011a9a17043d12c4bfe83efc8208549e53874497741aff8e5b8fc594191e1b92e581b1b7361ee57bd39c5b2dfd49f15c758b57de8fd5f2d65f725804148a641a2e30a732b5932fe8ce43a212c6be5563fee8510e3b8a9fe21a0ffb64979180ec1d0842f612f1d58ea555f5b5c7dc82ebf2e4ae783f608a37dea30186f558ee743c3c2d2c90d5f51269200a28455d15fd4065166ae51d5a8268793011b7777bb8dfb523c278c9a7d1f690aaf05bdf90e076b3db87606e6575a8ec0a5c5bda9635fde179d40deb4466dcd2cf2f0ce93554ca6c453b302498fdc5dfc4fe1cc717529c332c7771540b29cb3a3babb522dcc7c0c108296893b4d90629492decd4af23ee8c84830fea1482c9b9cbf0af143af68354ec57cdd8b3e1a503968a9691233d76b3630b18e1c79263eb05f8105d1e1070701d35cc032dbfd5b2e877212e7a11940df6cdca84d5cf7f7436e655716a0090d2124cb0dc6f07bd051ee9356287a9196f43b17f73d3f056dcd38cf0983f5dae8db939803d6866ad4f2800cf1b316ca31041eabbd59d0df8380fce7f3b62461a4dd6e14f9e48dc130791c04ff7c6e3e8462f38594b62b11d6b865622170b954ff9909af29990ab4134d48d494bed3bf8f939ffba76e3a3a8a263f75f8a1f3b219422525d8ac91948872f221f8c07987a4ee8529f71a9f2b8ae7c7a054c73f130f97a2ea8ebeaeeac308ae9e984447573bcb295654261e09804c65d3accc932c32d265e8261250bc045fdb5896ab266cf3ba5b9254dd8e54112f2bfcc9f119ef4e2059a9ec0ff62b42c3dffba2868e4aa1c7021ac35c9aec2cb5d133e2db8e11ce6b2cce87754f4da3a40789f95ef560bc90578f50f8087f4e53444af8c453774d998e13bcbf0ce54cbcf56958254959685979e56f0cfbee657fae0bdb0480907627ac2231eedc0f78bac28b5abe1d20a0e428973d15e6f1296e3b0ab8761d77dc928a43aece9ca5c502ef7466874b681085ddb5e7377e16d11ea20fd931f9bc213ae0f544aaedea9e4fb7f5465b94c14979f3bb231676831ee73fb7a379b789365701d6e2e2a247c1c21ae5ebf6f3edd9c46898974b734306e70c9b5573b4d052e63f9c44396bc89c9566800a7e2a9a4c32902f799b4ff22cc9bc21f39b8a8af4e34007cae37ade40cb859decea4d274bd11dbb2f5ba304313c66a77f7a43b5aa7dfe18be40a9f499b95e4b825ea00bb83a0d4f11f2f62f5ea70fb817dc6c666b09bb6c919972b2a0c7bfb10c5b467492b8291a2b9820e2d8bc6e7250355e23f50662dafeece00cc8c0b74fe20278dddf870dddaf083480b1504e11b518d3f9e9933c3ff2f0ca3c423b8691683e3ea1902004aa51cd823709bb05141a8b8cfbcb4ef9f73aca2f09716558d879418dc7b0882faa381aacefaab611ecc336f36d6fd789eb734652a08bbfc61d19925067c6e5dcac4f05bfdab6fcf083599f2845d0429c05a616d1977004803bfff90874514a79c0f45e4cc5b3182be7c45a9e2f9a0dd976fe3c220542cf11cb527861cd7461e03f5335290e24c483b15dd2617b31371a6ff98cd62fd8e713f166c3954f0867dc8c3641c9cdb1a24f3a9ef270d56337537c98d3fe904cfc320d8d19a241e1540cf5cbfc5a5579c76026cdf961ae88d3224818e8eacd70ae4307b335bb759f8eb71d4a32d12f61184d91cb081737eb9ef5c36b8bd5a762b3781253403a9d621b9070eb22b77d41db6a8b23b6b6dffba92b4d54d4c625ff55ba5bb0d1bf499fee64813e762cbe9be8a66566a5f733b0eb407cb025a0d90e6e2e8a415d9ced3217a541c28deaff17ab8655db001f523ff303921337ed2ee0aeac6070f8adf9ffd61332ecbfd2df68ab366751c83885367eff7f589ecc4b7da65103f814ebc2b399930316241323a1f5a2bfc71fca019bf888f6d5632ac916d73a3e915d26dd11a2816a27e238568ed0bb4d2dbb13fe6b6db57b0ed9ed500559791b01755179ea68f57fc40bc357925d114401f328bf6afb7a3548f957ea12f76976671a8b5cc2a5b0d085eca87cdb911d1344aa7fe02c92f10e5c86b6bd4c1fc2c6f02cccec98aaeb752057cb4e64434d1e0986b93e3f981d1b5835d75691cf580654b5ab3468859b214b0f3bf6a75605901a6a1ec1ef0ee0a6ce0132d28cd79e6365ec6a992f8ad730a4040c8bc2a0feb8315a90639516b0d30db4a66f7e7248b04ffec3985b2a1995df3ed58c3531675c4ba885d5a488a773ddb3e94d2982fa22a7d424414305a336171992de01e31e7245cbd3b54d46209014921d5fbdd3077f3bfd86a3a99cf998d141c3a433e7d68aad547c0ec99ca30f2d15ff5f26cd00f0d45f2f0461ef700a30038877004a22d54ce3f198b44ad470f20adead37bd7f7482e727c1202145335488a739e688f7823254dd669df59bfd94ec7b08c526286aabded0ec28714e7c5c56379f5f0297e53512dd1e71de493e463d3f4d180097b8771b5e055fc7e436c57b53365423d359eea41496effc10f90b46a2204ef4cf3daebb60a3047866d736da1a3553bd32a78a370ad149319ea4cdfeb9921ff920b4d6a2752e9f6396da5f32ab8d79e717f04ff90d198d249976c081cd298159bace7d7200e34c82d0c76a61dc0898287ca0a77e9f4d649557e0cd4c5e138da53d30d47c5bb4cad52677321ca0dec309cb658f73d93d6c05726bba1204d78cbe97bb3fb76c7b9f640d6f96170a8739f77430111711e13d9e4e734863cb39a3e366c406de7bd0a716384e5a0eefee581cd16705d1745f13d56bb5053dd1866bf9cde1ad9c462a76d882422f5c9a6025131f8b5878adf97d32a0fd89321d62ea5f5b8ba3c3809057c4d553a391dee75b93c8529ac498a49b52f2e3ab6bf659cde1b210aebc3a85ec8709e9ab6c6134081ea0b020e0b0867c72a654583b954cbcf8ef2a73ce983c2f8f0b5db5776c16f56079239a6d7464696a182ac51855246f8ddf087fb403840fbfaf215b1c49d2e7b8cdc567431f1d00c37954dc7b40bee9a868f2eada29e6f0a73186c119278197af054c7e3f88e5f696b0d4c94c1196f058ffd72722f6495f16dc41e675833df9e4394afbcc7a32b11cc2388e4929786865be4178f540ca525d067f0a786be596f10670a25fc6f2f525cac40e7e341addcfcb91f069a5c2aecd7b86ed1fbebe8e3bdbc3fe27f9042cc53bec16198ad42230256c8386b46c4ad987eafcb6f07e347cc7c4ab4b04ef9d20cb581245c9c102ccba044a1884140666f38be3e64fac46350c4b3e983d9678845e9cfcc655a24bf89a8fd4600536d605082668612038b6255285be6e6266c90756a3cb116931f7d7412d1725143760feb86f4f8c4cdf1f4b06beed0f69e3f64c5dc7975face5f209b4b67cedb734c23073f9ae1d824ef849be836f02d48aa40348221fd09e111c076e617374cc430f3120383fceb38c42dd6f4b53e66ef6c80368e0fb96512fcb25ecbc4c2c3b99a07789e6920311daca599dd8c9f0ca413a4bf9b9b986d9202137c9dddd36f9b16b048268f8334af0cfb13dcc2589007e4ddc4b34a216f7358f316effff9dc33a8d5fd91a95bd433bad8bb31d4a14d6d45f6cb5e8a8ec31180a76aa03e83ab3b2cb9a7de0740ec7bbb55ddb5632d4be1182e2abe3f625923bf5b94488a00072414deb2fbfc79444465ef10aa7eaabcc52e13f68601250f313b40d3dde694fd935e92d04a940a8bb7d5670ed454b47725d933e64ea6485e4589f1d9e53de5eb1c9450049f35d14bcf8c38d20be815d5a61703f3636f6e293ea384b742a9088ae006d3acb0a296ead4680f3152deb56801530d6044aa040505ea4fb656ecae9e389a3e5040fb66490c79f26e980af8856bcd381a53e0736a9a4bc004cea03f127c42d3aa75a0b9d9084326f57caf346229f818a94fdf92cf32fc3df08080c57e2bd9342fa0e60004e9091d514c500d4c3100c73610ed989ccf5c2d40996f52e4fa469bbcef2ce1a7b2efb9d70ddb30b28728f7b599f503d921c59370fcae3e07bab4885e197261f9d0959ad49b418b2f445c02728db039042824245ccc77542e0c0b15c73c8e01767be6a2b0ab3709f35630225d9749e23110bc96f591b8d822491b90d7f893dc1127812181565954ee6b8122865bdb496ad533eb7481806d4bb061e18170a1da37cb435cf356dbfa570ad4eeb26342612bc73f6e0d39ca45e0eb44ceb07e49d29e1b726712f510b68ef2975cfcfeb6561640b0f0c2ef923fc6810fa5cc5e5f7e5c2992fc7e023ccabc78b8d9f3eeabffff3a3c3c38d321657e595bb4e6cf104f8b59dd4491a88c96b11aa5179c3e2306305f49f813a0598037cdfa95a2449290659c8c1f1671ca688a19ca498eda4f5771a972b234f02fa70cf198ea4222701d1f30131310f1ba4401eabc06190ac9dbc8eb1c7526d045fee0a9cbdcb24e04464e0033123d6f8f2f24f123c5e6dfd75d943639c47a6114f8ddb7af965b8dda8460fdbc4b258489490e66326697404592a4ad4124e3d879db864186279d307015d2c3adf96e2f57160f0e4a2037d6c760c5c4c852d4000ade51ebc6613a7b48c0aa400d0fced3c5e47074c3b917703d2fb1b04b058ecf33ff54efea37495e45c9bba1c1b26f160de0beef21d26f19131041163babfe16e4d38d83519bbc16622ef690e3fd0a61a968f06320a4454aa43883da580a396bc65e8af8727495cde042a0587085399fdbdf68f77ae2bec132d667904d1ffbff7a2b361e67dba5018d0d75c025d2fd77e4827448beba2e91c3c4f456565aabf8f9e1caab020a797d6b8c2c9a730fdd80f5d227ef9daf88bb0026a9e93c3d80a1636830ce832b09b942cc6d6278cec5e29429aa6d672f2ba0712d5a84580c154c0df08b6032e5902353ceb6793ad9c8ec953531b4f0602edbf3d069a070f4166f12a3ae3d3', 'hex'));
    assert.equal(instance.digest('hex'), '484785c8db75cd2b16cf8165a0b61fcad86f8038e0ee83939443f014');
  });


  it('produces the expected result for LongMsgKAT_224 33296', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('61cc4d97f411d959562a0fc4109b442afff59bdb158415e8658f9545a4aa2ba8b64a65b0c71fdf338d2f48ee031d8b6fc2b049c2be4f25cfb5d959c77099689b4c607a2f81c5fafecb3290633c5e7766c2e766b4cbb1f97f8a4d61c6c55ca996c8ffef51ef28a90c06dc75e20aff339a28a44fc057fe51fede7260938e89ad74acfe13767bcdb8d25bb890c1401c5986c6a1ddd366eb5edca55ec9b65c1014dea47597dab811446ed3c7a3571bc77d1e3e97cac5608c43cd032c63455406ea98b311688f11a0792a0b8e65ff804526638a730ef25a6f4a7b1892de226b6fa40b65e4fef5387ac4eeda6eeccf155712e7536c1a4aaad5f78f8c8668420da7a48d486f4c4f006329e7bd8750165512005d88061ef2354a84749ef29fc0d5d4753006878686d09825825d25589aa3f386abd079396312e8cb26cc92420ccac17492895b2abd20170a1df011181f4051aeff2de784913cc40fa85e5f26c3fb36bc396f6b1ee7117e77d29a253e37f02769f7574d6ca23a56f92514aa615a424b484f90f382e1ad0d3ac3915e048d99d74779be1403e49c61f6760949e8945593f7a0de5d884bdc2e94f4bbefd51d83e331fdb7fe8e4c4b0429a24ec02ed9f3df54404f6d7c8ff52895e5853442c03dcdb9a980377e09c21ab8819b29ec96ad0d0fabdb77e42bccc7fc7a70b83ee053f556b905c63f8114c17a45ae8d19ceca6e5218336ec11613dc11532d91652e78f86726a80749d70cc54ca41c33d643f280f109f6269c3da377bfe87bfa60a1d167881af220fc8d2a6e290226fc2d0f66d2a1a7fabe47aa8007eec301e82ff50bf7148463645dd2471927f9546da78e15d102e701bf06c972eed2b489de28bc2148577fb489141de8cb51d24282e621267a4139d1f0bc35dc9d9c42bc33a04f81095ab3f176c4212e50b77ea2d132c9a5b90b1e32e631cf1e10c5583514325978581c1e55f752d76dbffc8576f56422c5da1ce20e77387f5173894467ab0588653bbb44bcbebe4853fdb9cd39157068c907b32cfc4aa5daf2d024e0c3b2a804fe5f2cde75d299b37c5fb4422d7e61e959abf90c9a3d8df629e76f4a44b76263e9eb7ad1649ea89f8838705e1a632fa0b91482e907f077b992c96b3064d6d7604d09e682a5886a2d9334138161df5141c3f06251bd470163875387afb38163394b335b79210bad92aca568bd1ae1e511c22803bba36079fef028353aa0f5734a1c7c6c4e6ed684742babad0e93edbcd0de50473a5f46cbd9c592fa92d42ebe010acea97bb36fbabe2f14bd02b1a07b35701d131623bdd526beddad0b4fc6fbbfd4cfca8e513767ed4d10ec64f920e9e6cd528676875a070ca6d7aac6807b53b7b13749cbe350d5fcfe1b34e4df2e89507019bd6fcb24afc3a1c9bd64ca4c7572fac9d87649510d5f91b373efa0b97ede7b8768d0186b968e5a7f6d181cb5f45be2ebb942e23d821bd7a8a1d7b0e2a735dee8944c378ff9a98e13ad7344198b576c6cc770c082d640936d3f07021293764662f77195cf956e91aa7d14ebdd06c41b57c9e881f2de467aef05fe9ea1809c450a45f3f0d67d7447f8af8f87dd52b30362f44afaff54a2a0331ad8c18c2f3594a1e187a1d94a4c1829d87ea67ece045772bbc82c231feaafa81e2f6e18d7f45020aed2b22fee1df13fc31847ebc9f8ca140e4944f8d111a4deb56c0888880eb95601fbace79918a6be2f0bd370215689988725e9afa988553867f898c939a8dc4a58faab9b105185904cd543382f7dde811ebd114ae109b97efb4a7bd4e582c3f60423b48c1e35b8c0f291048c29375f9cc2d4c01079a207bb7bcf875fc7535bf47db251ed8a60f03d84e49e32ec5e72f6df26f18ba040f508a02ece21597bd710c36052ebf7a0cfa8c1fda132ee3f9dff8814cfdfe0a514c91fc79546b82447926d422b8aab87b94cc29f165e1f970ff274fe2a6621eac5f12816129d27b8df06e32a41752a65de0b47283ef049422a9af58a9bfcb042ace1ce470124369a915e2bddcc292431e88982bc6f9c51ac4c8b3e2aa96bfd6b574ae9d702a2673081ebf54fb332f552ee17ba638112816286e94fe43c6695752e67f69ce6dc4893e1dbe8c5df8f292271f4f5c140f324afb49a1565717ff0e0681f01cb7cf96d2f8c50a2d76fa6b4509701211e07c7142d22a2fc40c2cb47e91a0dde3cd86fbd02ee53f8367d1f25e6bc0c04f19080ac19689e721327634289261827333594cf23a7cc0b0c95261257f2f2a4d9eaf72704890f29a5c6f12394c6a57688bbf61e187012cb7c92d720585976aee344bccba607e74f5032c14592c317d211c3848fd76cbfd84d7a621e3d89feca1ac8d1c0090855d530df05978ea50c36db86d311fde0f8c6598dffa94f094e4c034fcb13986eccf09dcca03f2ba06f86d2e49aa9115bd80cf49549e6fb23a81419826f7f3704a1feacaa456da4c107614c992443d5dbc8940f66c2f396786ce6520e08b715d1dc3ac0e695b7be348972522dc4c831f02b4253dc76181f979c6f0450a7303288abe8b9fd6f8a9f46aa93c4e6724e29c9891ba4eb8403013def6068413bcb4d413eabd69b812f479a2b63437abe8c0ce4aab34386de580bd704aa364f17c031195f0def63cfd88f1246a5895d3d06c2bfc919939280ecb8d1177d799062b4f4f0b3c7d855aad76a525301eb6706695639d03a4c0cfab11a1ea74aad65d68baeff5b0355aec1bcdff9fca7f3ba5dfa9f7e1d073305bd96f9abf5ec76a14be21ee536e09866c1e0c4b9ab8e70430bc708dde617f6686c2b6165981bf5c70c747ab222482b076f5032656ea780e0798c5f18223590d3872804c379e5114c6a49c8dbfc14bee6804612eb21b2055afcc7c1b2a8e8be67fad7fd8b5e2641fe8cf37792fe47bfc35c76949610f6718db9403b29f536de09ce4a254f9d612dcb93175f5592466cf9b7ed0585f83d1eb7ae64cd83c117a7f7a02a859a73377baf4624bcb5b7c313f6c2613138245fa0a40b844cd8670111aa27bbb01a7368aa56bf24dc7d8e21fca56e84a32776571ff60b3ae38b3ad1ed3ed3bdd19ede8c24c2aa71ecc2b28124dd0afc382b784e273e838afb698d8aa336016c4988a58ece0d8a2a2d94362d738346c950bf05008a10e29bf27f15b802f213b8e69473b023332952912f20472fdcf193077a0f460e684f9fdecd2d7793ddb33d5457ba30b4d91ec272d1e6e5d2795698a9af406a8c05d1ba2a64f883d37ea18505a0f5745a2dda217eab1774a9d813b8387ea16c48ec8e5600c16d98fd4ba0a1ef2888fdfcef5365401004b02cf704623277ce502a54e4e03d91914ba829c56740f777a5c28fbd45eac571dda7b89ec7fc982f65e5cb382415440162091c2f041fc0f97f20693305c25de7837a2f650577ac6cbffc09f1f695417cd5ecc555697693b12166cda47b8a745f489406942c599af5f085306efaa508b5bf0a406269f600b68b58ce3e204c3bea59e4f3c19157c60246edf18141597bc0cfff8308878e4f36e4c443ba874be58278fd5b332ca73cbaba2a302579e5df863db92251c597cd45f836d0b9d3add59ef92468542b377e3250fbade0833914066a39566009507d4c3d575851224e860429f617ac7ebebdf534dea8f3ac3f7a14f815751c8e72e907f9077b54aac645b4bdadbfd969ab38312cba888f0568170c02f36a4c5f0055e6702f39d62b2383835a719a60e3a6055df550b3590341b66770897bcc66f8a52016f1491973d565eed5d1c718ca8997c8a64d467170608991d14f1e50a8fc63c4a3b464d08d05f72e9ceb8ac69b5f889ee16f99454bb5f822f153c9d9dcf4f0bbbeb510d706f2c7ce5e516e1af5cbb838c95d973b34230379cc30299da585bdd8ad8bdd43ea6ad8aa8f4447ed4f411e4a3ce25c4b338882c6ddda40a8c2228491cb6cb33a5ae703d29865a151bebbfc5910b6441b10cf64c189a71911677c10f11decba96a420de0ef9c124f36fc5d27fdd75c388533c88667347b5277c2e1fc0026b75e38e6e46acecb2ba8efadbaf1489cf45f4a9225691492bc63785966c018a8fbefe58c5533e2bf2c601a0a5ef08cbf1b115bf3452c94953acb7294ff09c7fce12f8cb86333ad7eea514ae12333558f255f5d7039af77d724f66c962192509c5b5e07ca8161d6002417b793f25b92532c61d67ca6ce4e1718b414a86b237fcf0199d7e560c2136afb290711b3e2b8d403ee0537c351972e86551e5eb9a3535d7d602e5c444219b3b3d63412592399a7ee91bf3bfc26f5a3a91bfe9ef9a875cca8c6cde2fcc7cddc971897e559ba56761599c5f883a7c2aa2e4ccb753c659678d16d158ef12af987260fe98087c23773ae20f81fd590e1cf738d3c04b0955f2b20b30f54381c106115d4ed83fc7f6be6d143b61c2d589a317e98e18336150b3350ce0e16e8214da55476887da6fc64d61ba49425da1c156db5eca01411fa062183dd29fa1ced491e5e1e2e3ce160a8e9e4ff1000baf632a92d8e972077c23c666810339e9d9b5f62fda5bcdc45d315bf8db41b81aa165763780becb544f277bf10491cd085a8f5ad91eb6dce793f480a27c448ac8db95738e36ad0f15fae23a98f73e1bd96a6dfa6b1a4df4d34441d973af7e1994c06763bbab81ac19b0be9ec856365de6721840b2a4800f27e32d9046fc67b7f443a88c3bae70138305e9f162dba6219e6f8fd68494fe644bf6f198d1b3a934416e96ac219c72ea95648b1d9677c7dba1e3cc6e6b01198ea85a6fa3dbe68ffd5b936747bf86253622bf0656c4178e9b259f01fbfbef7dbb6f45ea2d01cf4ad075718440c00dc66321b311f399436064e7f56d254baae85a3199c31357b70e81180d1bede7fce128d2aa7fe5c5095a05314b056205e719f13c738fc443f94dd3dd8bf28a8024491d3625794cef85b2c2c810208a8557b04f517c42efd9502a1b4de412b47c530ee6f0056b5eac5be87ae7442aa84f30ad9b6c50d8518632bd4512783bd3fb358b9cbee1ecd5d634d617a57ba8ac2d8f12c99c1a146d6fcb9901f46c05fdb5bc3ddb7d8c0d694b5e0432e29a2bb3bda70d3977d7967082069aa36f425c60d3eda2922fd41ddb7d1fa2ce76256e3ec53a5575de0b0919bb719cd73884f052a35fda47861c13bb523509bf91233acfb82c674bc46fb5aaba970e29ea48af84feaee9aac0cde8ad0ff2b38aa378963d62217b8c079bee27985b725ec8327f8a496cbca3ebc763793cdda9c5c84b42678a0aa6b9baa03a5cbd7e2f733e956dd9b5712317068ea369d7821e3c288c019110c0eb792ef4fe7bde199ef10c973138af40fa52fb35dffa939e3d843ada7750896917772101e49076812e623f8fe435452cc39cfc3c6bd3665bb7e20fd09e28c08d9d29cdb7a4c5f7302acfb63a56bd481f535a136182577e0af1436c050ea376b335da9cf960042a1158fa842a85dcc923bb7ee96016860c2231a1f0d859275801958cebdb374cc1bcee2069ae9a2e970391172ab7bb9d39d991f68c2e087a0773387b62a608641ec54a7e8976b7a9ad1fa9904bb3fa98fbb332d14b6b23a82f4ffa69a8dbeeb4733b7e69430bf6b1ec5c8e5b0d7801b4c745d92dfe071224c7da687a7e1991b03867e82e7f3d3dcc2c63ad5ee9cfc20451bec862d421e03b11195bcaf01ec4428691cde6618db63ae73c08181304d4b06561383176664d20052bd5b7373a7ec53d1a4fcd63d7390d00d2217cfde499036e6ea389dbac12d08f40d6322a26c5681ff0c1f9b638cc08ced61524ec48a8e8bf93d2028dc10ffe063cb807c94cad3c2b694ed9747385ef5934f4c84f907af7999e476c2735e1318aad6ebb7947d9a64b2f625e2dab7e77b6fdbf', 'hex'));
    assert.equal(instance.digest('hex'), '3be8198d4841d57b6675571850543635dd9f22882d49328b755598d9');
  });


  it('produces the expected result for LongMsgKAT_224 33800', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('6964e2d650b19aa6d31b839c604a90aa3d105834f3854df4a41d4787a387042cc413de27503a1efc366b87ed677ea63dccd40d9c7f699fff9b8a42b596173014b9e811d42d2de574ed5c80fc6a5a86b772a3eebe5640102527401c0e9bef57e05bbf06986535d3163788c60c92ec7460b7fc685fb45fb8a18fa84ef5a37c94a2ec3a948dcafc69b83e2434abcfdafce948d8c76ed9ba780d39ac3dd098ebb3208538a666ced8acf1b3031c5ef23592fc432ac25be0552c1a6463e3cc778d456a520432a8c55436573219c49e6bc27474aa4bd9b1b3bc64917d016b6580aef2a0ba41acfb98ea869d3995012715d06d64e0aaefb2627125f225e2efea21af7ec49304b8e6399623fac15d6cdf39c4177a12254e5d807b4aaeced6d591f4d0bf50c07f5b69e7d60055062654e7b1c8b96af726bcb34b10c60b7fc3b10dbc69107c7d81043bcaa681eb354cf19af26ae3c7cb321b892c33cd044a24a5249f2f2ea3f804944b5049ca887eaa6d4cd5e52d17cf01cb0fcecda47425ec85f8362ae045ed0d109758c90134ea27c4cbf6e3abe7f283f4c3ffc4455eae4790329ae47658db2850b09a79a89bdbf72a20dc887b6ad7adecbd5a86c08479d446ef817e13a37819c227792e3e0ff80a2831b20760b879a489a4ae50aff9fb1dff39132dd84300ef7abe05e98c5929683a2ddfea99468996d652dccc698183f9a3103f7c049a7227733d0c14ed1bb809b4ef750df19094885961d327394d6cfa0a21b341681738b7e6feefcbf4dd474b7b45ea64a3a60b97bff297e8a52cd4aa6e92d6dbb7fef7f736d29ce3b041488a6db68d28f3c0204cfff82ce6ead11e11d7b060a0ff550711be33288acc63b6dcf2062251771544ad41b35b1ea5f11c4b196c48f5fbfcb4b39c60044a70e1dbb2cfbf9d8fcc855dec9a0b33f2021cc76b236adeb5a1356cfb8590fc1ddf8a721d9331861db604ad0c8c89871e960019a0daba43202addd526c1706e782fac5f98295f4c6036b8e2df6d225b6335d1314143573ab8e66a7750bdb6420452fa060b24fbbc3618d951490534718d97e3ae994d5e770d103e1f405a5357a2521e9393ed2ed197e7aac87e142205c69dbee846034fe6f2168dc207d13022e11427e8f02087d2f4e850e7fd21237d56be970781cd779f7b0d8e9f689e6cada3386b5e779e382ae3deb6cb20dba16a94d147101fe594790a5b331d40551c8c1d81052ce00642f56e4048f6831d713e74e3f4c6ed2352854854e35c06313f0104fa47eeb282aff9a3ed3d683fc88e9684aa0c460c3ec333080d5f557520a359803563a1d8ba7c716082cbea808dff6296947cef7ea30cbad458c0b90a07847e3e557cfc33b0e3893d32924934da966f6d451ff8c6b28ecad7480cc137327e5db10d180d41e8088660297dfa99126f7e2ab290f206c02644b4f28a603e959077e13d65c650cc0513259c36324cb5223e829350eb0a567317fa176213ebefd40b98c38055b24ad85171ff0724410926b38d8a06de500775d39e472b0b3212122204136d0793ed28f6ea070ed50745745df57079f7d4c63c6b5a862a031da93f4e576873e6ed03eaabc2a59d4fde5a670850a52b17dfb059ad5a0822ff68b9a3a11a26bde519e86a2c7f743bc932bb29208383621d509da438a56b56e1aaadc330a0ceade51ea65eca256e3dee4495c3fb94f41c121b03b6996981033d5d9e5540719e29eb1ad9a10c2182811629bb5a7d2296842fca6018e44b1b2b0ee56db63edacffa837a0147d1fbea737fd66b614fa097819422daeb9e1f04b81d4b1e569aa84708afac7a9dd92f95d9cac1137404f950c70d0e337c956bfd2c7b64a3b99f1499f9b297391b0996b42289e205b47900168f8bc3a30c84cdf00af52ef14d8b4a87675f8859e9c3980524c2081d3a08de576c1fd5b40459e299ba89fbd05c8ed01e3bedd893f7ec17dd1be1eee0b19186e739dde650566c395eb143451c09eb51c6e14eef3fc3e20210ce62c49d0bb862cec28872c0cd989050b56eeeb062ae2645c1510635e4085f5940eec6274ca982e312ab21ba0930be4d6b57ad8d36bbf58dc05d353e32a5cfcc4eb008610e24a8f2a1fcb57bf6e4adcf80d3408997d6872a2ea5e94e74cc184eccbba15882745e03146045dbf6e94127581cee20f2f408841d1982132e5b7f582b91784740761efdc9346bd9ebb3c1fd341c3056f4dbb4b36ea9e4bf05c965b367346472d0eb55b840ed49ef245c6f86ec5394063305ba0df45db30f7658d28aa988cc9ad97f0a9c0b3e59fb623d55c61f2e202521714970c2285bdbf7c6119fa3097d82f6a1ebc33d42c85a93630ae18521a2f8aa785a17c2d9354033fe297b172ea1f06cca686de4e1a28836da559e4405856411d58533ce33c6b573ec51f0f565499f6fca8837fc80bc4925867eeb6bdcab15ef1c70b17e02a535e2f423d36591a22cf527d118d5c540a6749e1c206058c0452bd9c8f5885eb5823ba8515c105f8d96fd5f4af9337e66d35069d19ec041a7d979452e5743a6a22da0df662fd9d1a2ac3f8d431a61f4fb944089c52233167e0d53899b6d45c51393f3ef6894921486d2f9f4d5e6e95107fb975c8e856afc76b06bf3648668eaff6aa59fc9a3aa536e548880d4d79c9eb5cfeba4d6d5d402197c0e1608500d69833c069bd1c45d766a7bc783c0194a2c813b223f141d8ae2868fd65d68dd67ef463e34e4fc20c7777be17a3fcfa51a9d98fb23b341b12cdd2b430b0602cab03a226c7cee4f9488c8319ddbf4eff1b614ba9c1fe0098e9ce1b57ea4d8d777ee89f4c2e3c729216b6b2ee2685db9c1945b27986c748dca51bb361824824fb2a31ef9d7244b734779b86354bc0dba438d378193a84785b6b864306eb6e6a0a80fa2af04985fc540477b911d7ea859d8f956dd1df3e464d884a6355e8b24ca3f05f25ee53b23ebe43ce6c32774fb74bace33a12e7c1798b7116bee1245cbe323882464c49b647d61350adeb84cae9c61b02bd702e6d8de849fad57a57ad297150312198d89ef1366e45286f4bcc8217db2edd39b144d6ba1d6cb0d1c74be396cb535e6ff9900ac371a6f9e8daa45dd1b1842fc685d1fdee0fc127a165b03b561002ca56f19143024c41520489befa82af92fce5bb220dcec1aa047b299f7fac2bcb489c99044aefaf2920c324597daacab92f6347bc0ef95ca619dc19a7f28a1cbbacefc85ea2bd7a769e6be424f4af08af7f24f5475ee2434aceecec18bfbcfd3479226363b2bfa915da76b839857a33641b4b9f64f15702adb3964e5db19faf48489a7f6f9f56a2a258c54e0e5f97f382fa99274b2607d3d6a6b94ca075eb454080b01435c5aba8b45ad6edfd00ddc0270c7e54919a43dc715cb7b37e8423c7d2285d222aec66e4dc4b55bc6eed3ced1b8d5b364f5fed35ba0312e46418192937792e865ebf5d5315f1e395194004b77f1d15e48203e3e5bd2c508e3cd8d1e2075b3d6db0a5b28c10f155b13954297db518a3e47db5da1c0ed8536fa7b5945e952bb5c4e24c40fca0c344302a5202b92a351738225505209d810789f7a590672ecaad866ace771a3f9091a1695da17b3576213a0db5c4641e78045822afd939b6272d12e05cdd1040681aaee55523be6371c53fced13638a9448c0e9af8aef55acaf723d513dab5138f62e28feb489e75be072418051cdfdabc7ceb0c99f181c6ad95e7eff5226be5c4f4edee7a8c4a0500241edbc363cb4c3ac12dd046ef0c840933740f48c63de39c082ff4374c2d8453f2b813f397b822e90fd59b448262c00fdcae73bcf90cae164bae33041cb809e7cafcfdd658065b84b7c370ce3e08d505f7a2ba783a666ef74d8743336fa4df4e20a1f8d58cd0b0eff66fa77803f42169f51109a4ccfd008f36e23edbaaa6abf53b822c9ef356b79027cf28df9e5d5d7ca360aeb407cf02ca2689f8131c78ce6de7c5d8a2dc65a91df7aca7787ecd5145c5c791b7428f3f9cbb22f584eb564af89263f5750cb37c8151f205b2fca7df746226d5afe10177c8bc456452ea65d449e19b4253d6625d5c3349f3ec3be554d4158df219de226af379a422a8dac91b97c64e19c120141d806767f7ee931d88e293ee8ae1efd2766ee83174de19bb645ee3455133b81e2270ac1c7cceb037a50a5ccd540f00abe27f05bbc29a2f10542ca0ae130d2b2a1464db03c0b2510a9e7fb98ab24fd391cbae0a112a66eac05304127d1545be6638b6d35606877719c3cd782fae3faad1b89eb603750c7b5c3ce84f93fac147346350c750cf2ca7ef9099d6725bd31172c37fae60e07f33572cb843e67e8662d0dd55e424afa9b1d57cbf9ddcde447a3b8b604efa253ebb2cebe01521f0353c521f457f451cd93346d815d6bcba87b3d2f96a22ed17c17b90be3ddf7e04838c4f780be2c96b781558b4a4999b3adbaaca1229f22ff637cfc068ce8802f8684aac32ae32bd09cd5c1d770900cc7c5fe8df41e8110faad782c15c3cd637ba619a0037d7378c72cb0c95a35a9109be11f8c4bf0d3bb80949a15c64a0d6f52a9b52a521d06dc749cd0e553418e127fb519bda401f59e5ae517cbc2f538b6c32f9ce5c34088cfffe03fdc7d36a7a912ede8254b7ea46f1262973be564089c44825437d8dba98be04cf7f6ab5d03c5c10ab51557f331d0b1b919b9643efad709080d2ff46be83e081551f64ecd826db09469179ff4b068cca172d1e16750bd6d4c805146dc0221a555c81931a60206af7cb485d2fb7fa9d7aacbc3e3729eb09979d2e683ea3ed8ad3b4baaf4fe25f8b227568795563d3f2902a97375c521ba20f9c5e860dfac83a0f0ed347588f250a44f01c93611405aeb04c6e75153f0a6e064e19d895df7596c6a48a0bb3804a78937a45bcd05486314baf72661349e8eb516fcfbaffb31639716c5b88caf4255e20ee90a6ef402e7a39c5ccdc5b196a99c5455639e9ecb788f94abd7a711833b92db9fd56b6412bf84c6bee9505682ea300ceeda496ef06cc477c272318f9883212794e9ad88177b65cecc1ba8474d3de7656b61a3b832240578a4ff704caa65e01a29f365c1abb1df23d61ad41c08b092ce870ba1103857da37d8f5647a5d5ada7bb1d9804c547c187bd1767258292514491cec97ba41f48c6b581fe8e74520d0f0f6b0e44c9920290f68684d169253087540ebe733ae2465254ba04beb703f3a309be14b4f22ea63aa2de8e674d2ad446f356d1cfe1207a5ed7c2d565ccd5cc1ef0eb1e7919c26e92b851f7478c83de6cd21a3547cd4464a6b6b4da6a8d8f736d16d818063d1fb95a8d6a46911fc564aa5cfb1cf76ef09d0c104648f92db9b28816f560a24935923a945a1fb52ad9fac6ea2e640a64f79f25693398b0a0e567518d950714a8aaf343a68a4eb1ee1f518acbe99e05041ca505ad509f6ebcc68c84d85dc17e60f0240ec848a842f4a1abf11371f46ce69d5b535fab5634523e359ae14dd07749fbc6390eeb9e5330fc07926c971c719cd02aa565048cda7e534365a3f39555f25bec847c0fe5a76ef68f038ff552da2722581cc14eceda1297942a1a67d0501815747c61517a9ac876db662641f750a917edfd8ea199d27e5d56855e5200791cd404d15b6ef6f5771234b0902c9db5b033f260359f1a52e6646dbde9e4f9876a7bf2c5fd7ba028baa306ff9d4287df88aa055c833ed8ac6a56d2c83ad69ad3fd6ffa96ab717444035d3b8dae9d26d475767cad452b607b3eca6c573c38530db071968b7e1dc26058827c57ad84a14b495fe082419255c495c5e13f5bc34d96cb498378cc16dbf6683d54836e12d44d76956a6b0ce788af5282b9f06b5bad30347a1d537ef864bb0c1496176b1b10118d02a56407609c0208e860b86a47c82b6fde76cec5aa70cf58b4b110d67e70e7b37dfe3a1d530183111e2ac6b30736be4ffd6dbaec5dcbb7194b9f0cc733f0a3a', 'hex'));
    assert.equal(instance.digest('hex'), '93436cf55014b533da3f890bd31879b4dcdd88fbd80343b6248c8d7c');
  });


  it('produces the expected result for LongMsgKAT_224 34304', () => {
    const instance = new SHA3.SHA3Hash(224);
    instance.update(newBuffer('0ebf64ac017febdca40ff85fd4aeb8f1a827561c150f74cd5e864857fbba9c08a46efb9ff7a16919618c9fb06bf8fe3f0859774da6c38c5a0c54d44075d1baf6482b7705c8e1a86e79b0fbf0328246b5e6be013f934d4ecc34808a3639c49464309df5ad250bf4521e41b4cde563566b8625076ad7e260018eee2f3252d15f36bdbbce3c74758c68a0e72d83a37db4d2022a80a4f6b16f4515053e1fe398cc6a74d343d4cbb403597ae68533e18ef893f756f6f554f98bccbc84702d19f875d347c345b09edfcb1c71bd6955c5178dfcb07376728cfc3ab9565c0a1a8dca78221028b00b51b175a2da2cc0a90c33c169ea8a1a2e375c087ac3657d28ac481d5b5c225aefa85919fb8628f32f42f1fc0806a250143c084322fe9e30bcc8b89f3da73469ceb935ee25887d843321cc8abb3c75e15f4894cbb5731782372a5631979bbe6aeacdfb711a84f83bb89e0f92b88c5ee83e4f9a3c4f80624a17ed5549b77ed7d939c368cd9a92eaae595105de7e2889cad71d01201580038fcf4ab4d285a13befaaa14facfe5099a83f9e71d512519d055f44f757757bcebbd2734cb91c5c4ce7b411d1e83b42689fdf8a69e63ddfd255b977d7435beeb5debbba7a47b19cdab3f1c40e79b926a481a1629a818525c2a198983f23f0da5da8b99633689292332bcc2a4ad49769b3e448f8cedb87c1de2ef5d04e1c3a8116c3328f6b19b59c318e18f8db29875c22a0a0c8ea615a593439f7b90aa2ad9c16ca573040a8190a834370378554bda9da9486aa3ce3f1b01dba14b032b3c334f7a1e961426302ed2d38c34f61d7b4d182c0ca303c2f379e74eaf65a48d3d8a95616b2aba5c88dbf6284c5cd68d902e3958a7b9529f49d38091bac288734247fce886d49bce00ab98b1b962a8da8b4710644e9da418529e79a27408b52eb655fde025a129a38eeeba936657f725f0ec668380b9dd50c0759ac150f81b696b886e86a5447ccdcb3fbec08c79471dc3111042fcfffadc1a973340dd68610631fdda6ad25148c2d0b48ada24e6b2d42ea7510991c0455ba1b7f393ca1fa5801f182f89117885455dbf88f63ce0b77669ba965b73a344d3c4c787e3b4aaf58c56fb2589967c71969b1fe92c5e7d91094dba84f470437339c1dc6918dd5fb835cbe69750363691b0cee7b80f0d0aeb31ddbdac52f904a3a91051b54adf75b0d195763d29fd1b88244f61d6a304807b646326e76fb880d1df37281a11ced52d5b5873668642c72cd7c70e36825cc17da6e03c577d12f79ccefd6b7b76c88b19f7606536793d8d33f7e0a598769883b417c3662b6267001be7d0914563b2402149357d1c64680da80b32207a67611edf0e8d9a767e2be2abb21956fc764200945e4bc5830acccdc80de485086514c63da7f785cba0c1e9ce5b249b52e7ee570d8657c63c4fc90856dfbbb24c8d2a711cb3a0960685ec55540f6ec2641a429d3dc99d82f26d2c7eacc614ffe988117d8f13b7442a9ae2929d3e1f67b974bb4a4aa960015c9216afa844a243095f167b114700fb11215eb54357bcb1d4792a0b676c708e710211c3af73d61b82f4d04bc40c898ce00a2d34c77f5e22db71f46c939a0ec9c37d1647e23a0f44cc23d710a1db20e38d009c6580192295c40b478a85a0930181d0962c3b18b6aac7f5be99607add25bbc23a7530e7e58c93f9fd4afe5133fd228c6b4d9e43538cd9dcbe76c4d7dedf22741839558a6b561847327df7cff1c17e03eb0ed9dd921974954638cadbf645a4baa4a62774ba66e2e458a1f7ac67ec394429339c2f620d457f5dd06ae551b69baddee99a6c93edc7bf7cd56898cec4ab4e633489dd1934b3eab68601e3560092cb9b1c64b90c9fbb6f62be60b0e221f1f6e1d58444b731b30ab04c40988093fbd396e65ba703f52ace0695035ee78e7a4969d3eb5834c58ef60fee1de0f0e03e4203ff50f957ed68513f9134a4332b56044ee14ce80ead7ce532aca58b1f98423c3cabd9921f83a81c7467b3c6f6de4b12ad741c7345bd645854bbf859d110c8d60f53afe65f6a8a0856bbf78954f8ecc831fbb43f030449a9fe72a3c86ab7962acd28975530cb567cea713be76b2262a70896b8a3cac66772c56a9ed139f3f4349898aeccdebd5622f32a75ebbc9fe202fe56c957356d40afee4718c52d30fbf683ce17056e672f909110c087d361c196fe33c6d80dc6925769f6a93dd41b5bb5fea806f3bf56c50d69b45a371ac5dcf5cf356bc552e0cf87e22af0f121b21278b067138e2afa098e7ede1c0a8ab29b6ccf6b85d39adb9cedd013886d2c23c273a21267b2f2c22b5bf25d5a5cbd083684b454ab5fb854f90cb49b2f53795bbfd46348b30958398344f9c362040e1412f331e2dd1679f31adbcf8d40bd3bf707a4f3558239a0b9488b3d6a264e6da3911b0be47dff3257b193129dda9f3c0d9adeb161f8426ccd01ad2d0854f7319e12df89da88c98fbfea96d1f40bd098aa46beb471834b039d6f001f804ed3dc47cde01d5b594d565d94f70ba7387822dbe8d0e44645a914f25d1d15f38eb4e5c9b4f48c6146dbeff8d36c17e5e57a3f07e561af390edfa4e2cfeca19722a3beeea23782cd7af8a61767b010f89a7082e04e807f5cec49bf5ac71db3dfdc5665cd1fa5b9eb0c3c7343c674730ec650a13bae412126c68daf917862adb4e220461a6cd0c7511f4f31c47f8a41ac54fc0b34f07dc15060e9a43855da0a162436b1d3a4b6d8ea87229faecbbd9a2f0792266dd160e0f8671690411f8a9bc7429f8e0f4eb0098e33f0532057d1e05e6a78ff48a6bdf78176fb462e56b305476a78f099786a6793d2fc3f4f74dabd3a34bc2e50267f06157494b9966e1bf1f8708cbb770580cbb2467fc1b3595345a49a5d8ec528f3e2b3f91b06e0693f87fda3b68cf99df5c47bb18b767fbe74ec0b664ac0f1cc6592f01a5659a7f3b4293bfb8541f0a9e3f923a547dd1c784ed624cd3a2c9d1b8c308b3236e4146c93cdc36e17dfeda5c123e735ad4feaadcaabf9581bc1060726f545c308e56c7310093f7938a2083dc468bf5ff3c84c2271ec7533838ff15e6f7ee8c71115ea8e342bc33ad64467640b11efe5f33cecdee3058e8c17f8ca0488918506fe2fa10b92b9fa87dd7305362d24d4ce454a779612b112c7c7e6d4b632a8475edadbea13486cfaf5647e4df1fb135ae793f8e6d23216b0adf664a14397dae07e133a1a58e15b25e9092b61fad3619bd551858144b80d9075d34128c351643f101baddfa990ce910f2a8d721b64c495a12f07af3d32cedac92e20dd9638c0db36eb7b1286138fe056eae9d91c4a0ab7dc5267fb16a41b771eb01d54701fb43570482157be10c6fa9e4d866b8b5d650ee6f3fe117b1fa79cbe4f8a9b97928eba2fca6d7669b384184895bfe76abf484b03b9f7ca10308c6ce31197ca15b1a36cedc3774b6b9ddcc2431e732db36537f1f4f4883e81e7b3c6d368b4ebdce34c657711d2cbb4158d519e027c5b4b64575afcd87ce736c45028d378d70c0fde73b5499ffb307b9dd82073833c0a84769964fbd7d01c4ece805e122364b2b485b6dac7793f1ee7f1cb2a50ae6565cd210308260ef64d9b2fe8378516ad093960d5ca8cfa9fcf28762998020743086b93eedec324784428eba23141466185c740055b1e87bf7f6bef5ce8e28dd270f9da64d6fff2cb0d73a734d45dc56cd03be9414db568ee2366f2166fd6d43af9eeecb13c4a5d3a8e775bee5942194033ae3ee1754fc046be91130979ab88e47a4cea379ed9e77bc4310ddae2bdb7a5b941e3fb6081cc3ed710e0c603d47efa82fccc0d556d4ab58825ebe6ec7700f02fb7a0eed44cd2f8772ccdee4ba4b883daab46264a569aaae97a0e4369ec00f59d841a1a7cf2d39bc58725b248c7b159d6d68b3d9721231cacaad38f26f357bfd31ffcec18cf34ee42c3b375c827c4284b31fcd4374cfe8c2c7a6b952581c9837587cb161eeca237290afe8095e069a99514dfafc2fd8cfc734b4ae64807d3aca2681ade0fa018b17d2a61f30f0307ae86d67d4a14d9ce214cf41edb702735f99d58bdace7f28c7d95a9cae8b079708c6c7e78accab67f67a598f7c86fe8b8ab6539b2ebb376b6a17144a3adad6be5d617d30607ab4d94c11a7c1858e19b5c7b12f9be4ac245a9e91a22ee5471aa58538afb35319f53d6dd69bc2ae48d2b649dff6e71dea3b797c071a0c345f66df053475a40031f323908c71a198c7fb2d542aa8dd97b2f1ce01d11e7fc458518ce1cb451bb9b1d57530d15ec95ba73bd5a386947ff8d0f565549a11b88759d6aba3a83967bf9543e640a33f6f9d9655a547785b42b11216ec1cce067630e89708ca896733129db5312169003b8facb8de3f99e65427aef51cc1c91005bb7f5b65218b1b492fdd67761e0f7c2fc60f7eca13b09df6b2a53b5b9ceab43d5a1ec3260a89b54bc257850f0659e3240daf073cc5236f65b159cf8fdec771911c054bb417f6799330d443a735704e66ea9f1d3351837197c19e8226d27a1eb5b664781cf0651231ab25678a4c9f9973da830ed3871a6ee638dda3c789b0ac27df49717ca2a1df46968d56035ef02b712d12067e72b1e661120fc1fde4fe6b11bb4d189f29112dbbd6dd0d9e4e78501c8e5eeecc333b208d7b86522c61de4ed0d4454d19ca62027627344f455c05f429fa17e4a6f0bafcd4b575cba3755b042382942190b6eaf762df7714797e916d58e7dd0de2cfc41d8e6e410de623ea5c547334d3a21488cd2d65e6f9e0f123166fd8304309d0160b5a605317e0122308f9ff065ae6ed422437c962a1362ec1f2804b274e3bae118292ff930bd519efd3a93e40f949abc60e8e9190daaf9fc8099a44311861b02ffb4f9a0aea81999170ed5bd14b727b42eb44b0b55983f1ac2f2ba80734630d6b7500d65eab42f6771eea6872677e252da4c717baa07760bfc5fe09d4835a65200a80c2759a476a930b7fb4a738241c3e73a9c75d5a7f0a0be52138dda2812aefba8fd78d5840e6ea1d15c57ea66a59b3a882a8fd04093a5815a5324be75c4f83cf16b785d2d3bd36602a0026a9895cb343688eea40cdb483edcd87788b668a69d0bc75b07d8c8247a9780e4c1ec342c1198295d699f0829e41a78f0f9978dd52d6491898f1f05b979e587f711df66f38c23c2bff9c69086ab970c468315b3b6c36d58a7ae9c749fa06429e6781ae7d49b3b368048641a63db95ee293a1954201cad72e92a85e34c7a74b2fd1bca6aa61435af2dc32c1a2f559f63e716a6c96f076097e6c45f4372ae6828e9eaae3eb82361710ec14f67f7d0ed9859249c18d14985302847fc8f3301bd31c7e1e09b2057e9ee46fcc7c9bd8db59eb0deb0b1d8d291508cb3837c9b2f191a49595d6aaddcefef0dd59ed3a05fa8f6ef03d38f534139d56bcbd4bc3256e1a120d49a5db1badb528b0256c61a2f179a23c49928738f9c0fa81fc196d1a74507998415f070ef9c38baa53951fee7b68008bc675e0e15bc32a61c30bc132e79c58a3a970ffddb8b806782dd31242b3c3cf9810beea5fb5a1b250ea62336456e7694b4c829508c7dbfe090af6a850f79d04d2c698637816017f8a920e1b1ade236e227b3480899bcbb991f6c6c240bbd4114aaf9875935558394a486652b0942f3409b66faf8b8bf711cc8c34cca41b8e16c2cdf0160b92a332c1f04bc64582446b98aff34189675b7a10ffc6f13b3f74654ed7c0590d4af7f4d747bf89bb2a8f5c8ce610cf4fa4ab714a845e15649b53e54a95213d5a73905941d9467b0bedda2becc1c219e1cab699652d85b8cd7e0cd11ce5b0cac76f9ef3d74bd829877898e7350cca72101076a970bec6756c3fd1aaf3396f72833f8d4e716aec6f93718b262710b0da2f3fd6cbdb204ed0e91d65cab39ed35f22a01e5d509282752837ebee968b140989ef5f4d513452784bdb892cafd8387e05b3012c0458a369e62191f5bdc57dd63ce42e945f493c2b42306b8084f3b25e94abacf08ee155f3621acc9626ee487c7a7e4667f0377ae4b2', 'hex'));
    assert.equal(instance.digest('hex'), 'badf580a485b279058183b4d53755fbaa8889d34b041619bc292e8d0');
  });
});
