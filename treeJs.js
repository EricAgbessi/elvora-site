// Pseudocode JS avec Three.js
const scene = new THREE.Scene();
const fov = 75; // Champ de vision en degrés
const aspect = window.innerWidth / window.innerHeight; // Ratio de la fenêtre
const near = 0.1; // Objets plus proches que 0.1 ne sont pas dessinés
const far = 1000; // Objets plus loin que 1000 ne sont pas dessinés

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('hero-animation-container').appendChild(renderer.domElement);

// 1. Créer la géométrie avec les coordonnées des points
const geometry = new THREE.BufferGeometry();
const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    // Position aléatoire des points dans l'espace 3D
    positions[i * 3] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// 2. Créer le matériau (matériel)
const material = new THREE.PointsMaterial({
    color: 0xAAAAAA, // Gris clair
    size: 5,         // Taille des points
    sizeAttenuation: true
});

// 3. Créer l'objet points et l'ajouter à la scène
const points = new THREE.Points(geometry, material);
scene.add(points);

// 4. Boucle d'animation (Render Loop)
function animate() {
    requestAnimationFrame(animate);

    // Mouvement des points (rotation ou oscillation)
    points.rotation.y += 0.001; 
    
    // Logique pour la souris (calculer la distance et déplacer les points)
    // ...

    renderer.render(scene, camera);
}

animate();