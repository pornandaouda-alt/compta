# ComptaPilot

## 1. Description du Projet
Site vitrine premium pour un cabinet comptable moderne spécialisé dans la tenue complète de comptabilité, la fiscalité, la paie, l'analyse financière et l'accompagnement des entreprises utilisant le SYSCOHADA. Cible : PME, startups, associations, entrepreneurs en Afrique (zone OHADA).

**Valeurs véhiculées :** Confiance, rigueur, professionnalisme, réactivité, confidentialité, expertise.

**Design :** Inspiré de Stripe, Deloitte, PwC, Pennylane, Notion, Linear — minimaliste, premium, marine/blanc/gris clair/émeraude.

## 2. Structure des Pages
- `/` - Page d'accueil (Landing Page complète)
- `/services` - Détail des services
- `/tarifs` - Page de tarification
- `/blog` - Blog professionnel
- `/blog/:slug` - Article de blog
- `/faq` - Foire aux questions
- `/contact` - Page de contact
- `/espace-client` - Espace client sécurisé (placeholder)
- `/mentions-legales` - Mentions légales
- `/politique-confidentialite` - Politique de confidentialité
- `/conditions-generales` - Conditions générales

## 3. Fonctionnalités Principales
- [ ] Hero section avec titre, sous-titre, CTA
- [ ] Section chiffres clés / indicateurs
- [ ] Section services (8 cartes détaillées)
- [ ] Section méthode (timeline 6 étapes)
- [ ] Section pourquoi nous choisir (grille)
- [ ] Section pour qui (public cible)
- [ ] Section domaines d'expertise
- [ ] Section processus de collaboration
- [ ] Page tarifs (4 formules)
- [ ] FAQ complète
- [ ] Blog avec catégories
- [ ] Formulaire de contact avec upload
- [ ] Espace client (placeholder)
- [ ] Footer complet
- [ ] Navigation responsive
- [ ] Animations subtiles (Framer Motion)
- [ ] SEO optimisé
- [ ] Newsletter

## 4. Modèle de Données
Pas de base de données requise pour la V1 (site vitrine statique). Les formulaires utilisent le système de formulaires Readdy.

## 5. Intégrations Backend / Tiers
- **Formulaires Readdy** : Formulaire de contact, newsletter
- **Supabase** : Non requis pour la V1 (sera nécessaire pour l'espace client en V2)
- **Stripe/Shopify** : Non requis

## 6. Plan de Développement par Phases

### Phase 1 : Page d'accueil complète ✅ TERMINÉE
- **Objectif** : Créer la landing page avec toutes ses sections
- **Livrables** : Hero, chiffres, services, méthode, pourquoi nous, pour qui, expertise, processus, tarifs, FAQ, blog preview, contact preview, footer
- **Pages** : `/` (principale), `/blog` (placeholder), `/contact` (placeholder)

### Phase 2 : Pages secondaires
- **Objectif** : Créer les pages de contenu complètes
- **Livrables** : Page services détaillée, page tarifs, page FAQ, page contact complète
- **Pages** : `/services`, `/tarifs`, `/faq`, `/contact` (version complète)

### Phase 3 : Blog
- **Objectif** : Mettre en place le blog
- **Livrables** : Liste des articles, page article, catégories
- **Pages** : `/blog`, `/blog/:slug`

### Phase 4 : Pages légales et finitions
- **Objectif** : Pages légales, SEO, animations, responsive
- **Livrables** : Mentions légales, confidentialité, CG, optimisation SEO, animations Framer Motion
- **Pages** : `/mentions-legales`, `/politique-confidentialite`, `/conditions-generales`