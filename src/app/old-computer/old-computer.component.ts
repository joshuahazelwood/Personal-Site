import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

@Component({
  selector: 'app-old-computer',
  template: '<div #rendererContainer class="renderer-container"></div>',
  styles: ['.renderer-container { width: 100vw; height: 100vh; display: block; }']
})
export class OldComputerComponent implements AfterViewInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private textMesh!: THREE.Mesh;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  private initThreeJS(): void {
    const container = this.el.nativeElement.querySelector('.renderer-container');
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 2, 5);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(3, 5, 2);
    this.scene.add(directionalLight);

    // Monitor Base
    const baseGeometry = new THREE.BoxGeometry(2, 0.5, 1.5);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -1;
    this.scene.add(base);

    // Monitor Frame
    const frameGeometry = new THREE.BoxGeometry(2, 1.5, 1);
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.y = 0;
    this.scene.add(frame);

    // Screen (Slightly Recessed)
    const screenGeometry = new THREE.BoxGeometry(1.6, 1.2, 0.1);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0x0f0f0f });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0, 0.51);
    this.scene.add(screen);

    // Create 3D Text on Monitor Screen
    this.create3DText();

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.animate();

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });

    // Add Mouse Event Listener for Click Detection
    window.addEventListener('click', (event) => this.onClick(event));
  }

  private create3DText(): void {
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const geometry = new TextGeometry('Home About Projects', {
        font: font,
        size: 0.075,
        depth: 0.08
      });
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.textMesh = new THREE.Mesh(geometry, material);

      // Position the text on the monitor screen
      this.textMesh.position.set(-0.7, 0.45, 0.51);  // Adjust text position on the screen
      this.scene.add(this.textMesh);
    });
  }

  private onClick(event: MouseEvent): void {
    // Normalize mouse position (-1 to 1)
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update raycaster with camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Check for click intersection with the text
    const intersects = this.raycaster.intersectObject(this.textMesh);
    if (intersects.length > 0) {
      alert('Text clicked!');
    }
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
