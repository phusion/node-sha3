{
  "targets": [
    {
      "target_name": "sha3",
      "sources": [
        "src/addon.cpp",
        "src/sha3.c"
      ],
      "include_dirs": [
          "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
