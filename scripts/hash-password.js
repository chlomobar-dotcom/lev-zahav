/**
 * Génère le hash bcrypt d'un mot de passe à coller dans ADMIN_PASSWORD_HASH.
 *
 * Usage : node scripts/hash-password.js "MonMotDePasseFort"
 */
const bcrypt = require("bcryptjs");

const pwd = process.argv[2];
if (!pwd) {
  console.error("\n❌ Donnez le mot de passe en argument :");
  console.error('   node scripts/hash-password.js "MonMotDePasse"\n');
  process.exit(1);
}

const hash = bcrypt.hashSync(pwd, 12);
console.log("\n✅ Voici votre ADMIN_PASSWORD_HASH (à coller dans Vercel) :\n");
console.log(hash);
console.log("\nN'oubliez pas de définir aussi :");
console.log("  ADMIN_USERNAME     = le nom d'utilisateur de connexion");
console.log("  NEXTAUTH_SECRET    = une chaîne aléatoire (openssl rand -base64 32)");
console.log("  NEXTAUTH_URL       = l'URL publique du site (https://...)");
console.log("  BLOB_READ_WRITE_TOKEN = token Vercel Blob (créé depuis le dashboard)\n");
